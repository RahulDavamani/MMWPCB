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

	$: l = $lg.forgotPassword;

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

	const sendOtp = ui.loaderWrapper({ title: $lg.forgotPassword.sendingOtp }, async () => {
		if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email))
			return ui.setAlertModal({ title: l.invalidEmail, body: l.enterValidEmail });

		let code = customAlphabet('1234567890', 6)();
		await trpc()
			.auth.sendOtp.mutate({ email: user.email, otp: code, newUser: false })
			.catch((e) => tce(e, { showModal: { title: l.otpFailed, retryFn: sendOtp } }));

		otp = code;
		step += 1;
	});

	const verifyOtp = async () => {
		if (otp !== String(user.otp)) return ui.setAlertModal({ title: l.incorrectOTP, body: l.enterOtp });

		step += 1;
	};

	const resetPassword = ui.loaderWrapper({ title: $lg.forgotPassword.resettingPassword }, async () => {
		if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(user.password))
			return ui.setAlertModal({
				title: l.invalidPassword,
				body: l.passwordTooltip
			});

		if (user.password !== user.confirmPassword)
			return ui.setAlertModal({
				title: l.passwordsDoNotMatch,
				body: l.enterSamePassword
			});

		await trpc()
			.auth.resetPassword.mutate({ email: user.email, password: user.password })
			.catch((e) => tce(e, { showModal: { title: l.resetPasswordFailed, retryFn: resetPassword } }));

		await goto('/login');
		ui.setAlertModal({ title: l.resetPassword, body: l.resetPasswordSuccess });
	});
</script>

<Layout pageTitle={l.forgotPassword} footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<h2 class="font-bold text-2xl mb-4">{l.forgotPassword}</h2>
			{#if step === 1}
				<div class="text-sm mb-2">{l.enterEmail}</div>
				<FormControl bottomLabelClasses="text-error">
					<label class="flex items-center gap-2 input input-bordered">
						<Icon icon="mdi:email" />
						<input type="text" class="grow" placeholder={$lg.user.email} bind:value={user.email} />
					</label>
				</FormControl>

				<button class="btn btn-primary mt-4" on:click={sendOtp}>{$lg.common.continue}</button>
				<a href="/login" class="btn btn-link btn-xs text-sm text-secondary mt-2">{l.backToLogin}</a>
			{:else if step === 2}
				<div class="text-sm mb-2">
					{l.otpSent} <span class="italic font-semibold">{user.email}</span>
				</div>

				<FormControl>
					<label class="flex items-center gap-2 input input-bordered">
						<Icon icon="mdi:password" />
						<input type="number" class="grow" placeholder="Enter code here" bind:value={user.otp} />
					</label>
				</FormControl>

				<div class="flex justify-between items-center text-sm">
					<div>{l.didNotGetOtp}</div>
					<button class="btn btn-link" on:click={sendOtp}>{l.resendOtp}</button>
				</div>

				<button class="btn btn-primary mt-4" on:click={verifyOtp}>{$lg.common.continue}</button>
				<div class="flex justify-center items-center mt-2">
					<div>{l.notYourEmail}</div>
					<button class="btn btn-link btn-xs text-sm text-secondary" on:click={reset}>{l.changeEmail}</button>
				</div>
			{:else}
				{@const passwordError =
					user.password.length > 0 ? !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(user.password) : false}
				{@const confirmPasswordError = user.confirmPassword.length > 0 ? user.password !== user.confirmPassword : false}

				<div class="text-sm mb-2">{l.enterPassword}</div>

				<div class="tooltip tooltip-info tooltip-right w-full" data-tip={l.passwordTooltip}>
					<FormControl error={passwordError ? l.invalidPassword : ''}>
						<label class="flex items-center gap-2 input input-bordered {passwordError && 'input-error'}">
							<Icon icon="mdi:password" />
							<input type="password" class="grow" placeholder={$lg.user.password} bind:value={user.password} />
						</label>
					</FormControl>
				</div>

				<FormControl error={confirmPasswordError ? l.passwordsDoNotMatch : ''}>
					<label class="flex items-center gap-2 input input-bordered {confirmPasswordError && 'input-error'}">
						<Icon icon="mdi:password" />
						<input type="password" class="grow" placeholder={l.confirmPassword} bind:value={user.confirmPassword} />
					</label>
				</FormControl>

				<button class="btn btn-primary mt-4" on:click={resetPassword}>{l.resetPassword}</button>
				<a href="/login" class="btn btn-link btn-xs text-sm text-secondary mt-2">{l.backToLogin}</a>
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
		appearance: textfield;
		-moz-appearance: textfield;
	}
</style>
