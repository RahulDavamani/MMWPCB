import { codeVerifier, google, lucia } from '$lib/server/auth';
import { type RequestHandler } from '@sveltejs/kit';
import { OAuth2RequestError } from 'arctic';

export const GET: RequestHandler = async ({ url, cookies }) => {
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
				accounts: {
					where: { provider: 'google' },
					select: { id: true }
				}
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
					accounts: { create: { provider: 'google', providerId: user.sub } }
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

		const profilePic = existingUser.profilePic ?? user.picture ?? null;

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
