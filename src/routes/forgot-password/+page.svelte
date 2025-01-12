<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import { customAlphabet } from 'nanoid';
	import { trpc } from '../../trpc/client';
	import { tce } from '../../trpc/te';
	import { ui } from '../../stores/ui.store';
	import { goto } from '$app/navigation';

	let step = 1;
	let user = {
		email: '',
		otp: '',
		password: '',
		confirmPassword: ''
	};

	let otp: string | null = null;

	const reset = () => {
		step = 1;
		user.email = '';
		user.otp = '';
		otp = null;
	};

	const sendOtp = ui.loaderWrapper({ title: 'Sending OTP' }, async () => {
		if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email))
			return ui.setAlertModal({ title: 'Invalid Email', body: 'Please enter a valid email' });

		let code = customAlphabet('1234567890', 6)();
		await trpc()
			.auth.sendOtp.mutate({ email: user.email, otp: code, newUser: false })
			.catch((e) => tce(e, { showModal: { title: 'Failed to send OTP', retryFn: sendOtp } }));

		otp = code;
		step += 1;
	});

	const verifyOtp = async () => {
		if (otp !== String(user.otp))
			return ui.setAlertModal({ title: 'Invalid OTP', body: 'Please enter the correct OTP' });

		step += 1;
	};

	const resetPassword = ui.loaderWrapper({ title: 'Resetting Password' }, async () => {
		if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(user.password))
			return ui.setAlertModal({
				title: 'Invalid Password',
				body: 'Password must be 8-15 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
			});

		if (user.password !== user.confirmPassword)
			return ui.setAlertModal({
				title: 'Passwords do not match',
				body: 'Please enter the same password in both fields'
			});

		await trpc()
			.auth.resetPassword.mutate({ email: user.email, password: user.password })
			.catch((e) => tce(e, { showModal: { title: 'Failed to reset password', retryFn: resetPassword } }));

		await goto('/login');
		ui.setAlertModal({ title: 'Password Reset', body: 'Your password has been reset successfully' });
	});
</script>

<Layout pageTitle="Forgot Password" footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<h2 class="font-bold text-2xl mb-4">Forgot Password</h2>
			{#if step === 1}
				<div class="text-sm mb-2">Please enter your email and we will send a OTP to reset password</div>
				<FormControl bottomLabelClasses="text-error">
					<label class="flex items-center gap-2 input input-bordered">
						<Icon icon="mdi:email" />
						<input type="text" class="grow" placeholder={$lg.user.email} bind:value={user.email} />
					</label>
				</FormControl>

				<button class="btn btn-primary mt-4" on:click={sendOtp}> Continue </button>
				<a href="/login" class="btn btn-link btn-xs text-sm text-secondary mt-2">Back to Login</a>
			{:else if step === 2}
				<div class="text-sm mb-2">
					OTP has been sent via Email to <span class="italic font-semibold">{user.email}</span>
				</div>

				<FormControl>
					<label class="flex items-center gap-2 input input-bordered">
						<Icon icon="mdi:password" />
						<input type="number" class="grow" placeholder="Enter code here" bind:value={user.otp} />
					</label>
				</FormControl>

				<div class="flex justify-between items-center text-sm">
					<div>Didn't get the OTP?</div>
					<button class="btn btn-link" on:click={sendOtp}>Resend OTP</button>
				</div>

				<button class="btn btn-primary mt-4" on:click={verifyOtp}> Continue </button>
				<div class="flex justify-center items-center mt-2">
					<div>Not your email?</div>
					<button class="btn btn-link btn-xs text-sm text-secondary" on:click={reset}>Change Email</button>
				</div>
			{:else}
				{@const passwordError =
					user.password.length > 0 ? !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(user.password) : false}
				{@const confirmPasswordError = user.confirmPassword.length > 0 ? user.password !== user.confirmPassword : false}

				<div class="text-sm mb-2">Please enter your new password</div>

				<div
					class="tooltip tooltip-info tooltip-right w-full"
					data-tip="Password must be 8-15 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
				>
					<FormControl error={passwordError ? 'Invalid Password' : ''}>
						<label class="flex items-center gap-2 input input-bordered {passwordError && 'input-error'}">
							<Icon icon="mdi:password" />
							<input type="password" class="grow" placeholder={$lg.user.password} bind:value={user.password} />
						</label>
					</FormControl>
				</div>

				<FormControl error={confirmPasswordError ? 'Passwords do not match' : ''}>
					<label class="flex items-center gap-2 input input-bordered {confirmPasswordError && 'input-error'}">
						<Icon icon="mdi:password" />
						<input
							type="password"
							class="grow"
							placeholder={$lg.register.confirmPassword}
							bind:value={user.confirmPassword}
						/>
					</label>
				</FormControl>

				<button class="btn btn-primary mt-4" on:click={resetPassword}> Reset Password </button>
				<a href="/login" class="btn btn-link btn-xs text-sm text-secondary mt-2">Back to Login</a>
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
