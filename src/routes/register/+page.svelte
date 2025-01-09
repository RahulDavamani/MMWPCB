<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import { tick } from 'svelte';
	import { customAlphabet } from 'nanoid';
	import { trpc } from '../../trpc/client';
	import { tce } from '../../trpc/te';
	import { ui } from '../../stores/ui.store';
	import { goto } from '$app/navigation';

	$: l = $lg.register;

	let user = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		agree: false,
		otp: ''
	};

	let showError = false;
	$: error = showError
		? {
				firstName: user.firstName.length === 0,
				lastName: user.lastName.length === 0,
				email: user.email.length === 0,
				password: user.password.length === 0,
				confirmPassword: user.confirmPassword.length === 0,
				agree: !user.agree,
				invalidEmail: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email),
				invalidPassword: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(user.password),
				passwordMismatch: user.password !== user.confirmPassword
			}
		: {};

	let otp: string | null = null;

	const sendOtp = ui.loaderWrapper({ title: 'Signing Up' }, async () => {
		showError = true;
		await tick();
		if (Object.values(error).filter(Boolean).length !== 0) return;

		let code = customAlphabet('1234567890', 6)();
		await trpc()
			.auth.sendOtp.mutate({ email: user.email, otp: code })
			.catch((e) => tce(e, { showModal: { title: 'Failed to send OTP', retryFn: sendOtp } }));

		otp = code;
	});

	const verifyOtp = ui.loaderWrapper({ title: 'Signing Up' }, async () => {
		if (otp !== String(user.otp))
			return ui.setAlertModal({ title: 'Invalid OTP', body: 'Please enter the correct OTP' });

		await trpc()
			.auth.register.mutate(user)
			.catch((e) => tce(e, { showModal: { title: 'Failed to register', retryFn: verifyOtp } }));

		await goto('/', { invalidateAll: true });
		ui.setToast({ title: 'You have registered successfully', alertClasses: 'alert-success' });
	});

	const reset = () => {
		user = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			agree: false,
			otp: ''
		};
		otp = null;
	};
</script>

<Layout pageTitle={l.pageTitle} footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			{#if otp}
				<h2 class="font-bold text-2xl mb-2">Verify OTP</h2>

				<div class="mb-3">OTP has been sent via Email to <span class="italic font-semibold">{user.email}</span></div>

				<FormControl>
					<input
						type="number"
						placeholder="Enter code here"
						class="input input-bordered w-full"
						bind:value={user.otp}
					/>
				</FormControl>

				<div class="flex justify-between items-center">
					<div>Didn't get the OTP?</div>
					<button class="btn btn-link" on:click={sendOtp}>Resend OTP</button>
				</div>

				<button class="btn btn-primary w-full my-2" on:click={verifyOtp}>Verify OTP</button>
				<div class="flex justify-center items-center">
					<div>Not your email?</div>
					<button class="btn btn-link btn-xs text-sm text-secondary" on:click={reset}>Change Email</button>
				</div>
			{:else}
				<h2 class="font-bold text-2xl mb-6">{l.signUp}</h2>

				<div class="space-y-4">
					<FormControl bottomLabel={error.firstName ? 'Please enter a value' : ''} bottomLabelClasses="text-error">
						<label class="flex items-center gap-2 input input-bordered {error.firstName && 'input-error'}">
							<Icon icon="mdi:person" />
							<input type="text" class="grow" placeholder={$lg.user.firstName} bind:value={user.firstName} />
						</label>
					</FormControl>

					<FormControl bottomLabel={error.lastName ? 'Please enter a value' : ''} bottomLabelClasses="text-error">
						<label class="flex items-center gap-2 input input-bordered {error.lastName && 'input-error'}">
							<Icon icon="mdi:person" />
							<input type="text" class="grow" placeholder={$lg.user.lastName} bind:value={user.lastName} />
						</label>
					</FormControl>

					<FormControl
						bottomLabel={error.email ? 'Please enter a value' : error.invalidEmail ? 'Invalid Email' : ''}
						bottomLabelClasses="text-error"
					>
						<label
							class="flex items-center gap-2 input input-bordered {(error.email || error.invalidEmail) &&
								'input-error'}"
						>
							<Icon icon="mdi:email" />
							<input type="text" class="grow" placeholder={$lg.user.email} bind:value={user.email} />
						</label>
					</FormControl>

					<FormControl
						bottomLabel={error.password ? 'Please enter a value' : error.invalidPassword ? 'Invalid Password' : ''}
						bottomLabelClasses="text-error"
					>
						<label
							class="flex items-center gap-2 input input-bordered {(error.password || error.invalidPassword) &&
								'input-error'}"
						>
							<Icon icon="mdi:password" />
							<input type="password" class="grow" placeholder={$lg.user.password} bind:value={user.password} />
						</label>
					</FormControl>

					<FormControl
						bottomLabel={error.confirmPassword
							? 'Please enter a value'
							: error.passwordMismatch
								? 'Password do not match'
								: ''}
						bottomLabelClasses="text-error"
					>
						<label
							class="flex items-center gap-2 input input-bordered {(error.confirmPassword || error.passwordMismatch) &&
								'input-error'}"
						>
							<Icon icon="mdi:password" />
							<input type="password" class="grow" placeholder={l.confirmPassword} bind:value={user.confirmPassword} />
						</label>
					</FormControl>
				</div>

				<FormControl inputType="In" label={l.iAgree} labelClasses={error.agree ? 'text-error' : ''}>
					<input
						type="checkbox"
						class="checkbox checkbox-primary {error.agree && 'checkbox-error'}"
						bind:checked={user.agree}
					/>
				</FormControl>

				<button class="btn btn-primary w-full mt-4" on:click={sendOtp}>{l.signUp}</button>

				<div class="flex justify-center items-center">
					<div>{l.alreadyHaveAccount}</div>
					<a href="/login" class="btn btn-link text-secondary px-2">{$lg.login.signIn}</a>
				</div>

				<div class="divider">{$lg.common.or.toUpperCase()}</div>

				<a href="/login/google" class="btn btn-outline w-full mt-4">
					<Icon icon="flat-color-icons:google" width={20} />
					{l.signInGoogle}
				</a>
			{/if}
		</div>
	</div>
</Layout>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
