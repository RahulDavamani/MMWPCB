import { generateCodeVerifier, generateState, Google, OAuth2RequestError } from 'arctic';
import { BASE_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import { lucia } from './lucia';
import { customAlphabet } from 'nanoid';

export const google = new Google(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, `${BASE_URL}/login/google/callback`);
export const codeVerifier = generateCodeVerifier();

export const googleRedirect = async ({ cookies }: RequestEvent) => {
	const state = generateState();
	const url = await google.createAuthorizationURL(state, codeVerifier, {
		scopes: ['email', 'profile']
	});

	cookies.set('google_oauth_state', state, {
		path: '/',
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	redirect(302, url.toString());
};

export const googleCallback = async ({ url, cookies }: RequestEvent) => {
	const storedState = cookies.get('google_oauth_state') ?? null;
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	// Validate State
	if (!storedState || !state || storedState !== state || !code) return new Response(null, { status: 400 });

	try {
		// Get User Info
		const tokens = await google.validateAuthorizationCode(code, codeVerifier);
		const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const user = await response.json();

		// Fetch User from DB
		let existingUser = await prisma.user.findUnique({
			where: { email: user.email },
			select: {
				id: true,
				profilePic: true,
				accounts: { where: { provider: 'google' }, select: { id: true } }
			}
		});
		if (!existingUser)
			// Create User and Account
			existingUser = await prisma.user.create({
				data: {
					role: 'USER',
					email: user.email,
					firstName: user.given_name,
					lastName: user.family_name,
					phone: '',
					profilePic: '',
					accounts: { create: { provider: 'google', providerId: user.sub } },
					orders: { create: { id: customAlphabet('1234567890', 10)(), status: 'CART' } }
				},
				select: {
					id: true,
					profilePic: true,
					accounts: { select: { id: true } }
				}
			});
		else if (existingUser.accounts.length === 0)
			// Create Account
			await prisma.account.create({
				data: {
					provider: 'google',
					providerId: user.sub,
					userId: existingUser.id
				}
			});

		const profilePic = existingUser.profilePic === '' ? user.picture : existingUser.profilePic;

		// Create Session
		const session = await lucia.createSession(existingUser.id, { profilePic });
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, { path: '.', ...sessionCookie.attributes });

		return new Response(null, {
			status: 302,
			headers: { Location: '/' }
		});
	} catch (e) {
		console.log(e);
		if (e instanceof OAuth2RequestError) return new Response(null, { status: 400 });
		return new Response(null, { status: 500 });
	}
};
