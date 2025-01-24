<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import { ui } from '../../stores/ui.store';
	import { tick } from 'svelte';
	import { trpc } from '../../trpc/client';
	import { goto } from '$app/navigation';
	import { tce } from '../../trpc/te';

	$: l = $lg.login;

	let user = { email: '', password: '' };

	let showError = false;
	$: error = showError
		? {
				email: user.email.length === 0,
				password: user.password.length === 0,
				invalidEmail: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)
			}
		: {};

	const signIn = ui.loaderWrapper({ title: $lg.login.loggingIn }, async () => {
		showError = true;
		await tick();
		if (Object.values(error).filter(Boolean).length !== 0) return;

		await trpc()
			.auth.login.mutate(user)
			.catch((e) => tce(e, { showModal: { title: l.failedToLogin, retryFn: signIn } }));

		await goto('/', { invalidateAll: true });
		ui.setToast({ title: l.loginSuccess, alertClasses: 'alert-success' });
	});
</script>

<Layout pageTitle={l.title} footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<h2 class="font-bold text-2xl mb-6">{l.title}</h2>

			<div class="space-y-4">
				<FormControl
					bottomLabel={error.email ? $lg.common.pleaseEnterValue : error.invalidEmail ? 'Invalid Email' : ''}
					bottomLabelClasses="text-error"
				>
					<label
						class="flex items-center gap-2 input input-bordered {(error.email || error.invalidEmail) && 'input-error'}"
					>
						<Icon icon="mdi:email" />
						<input type="text" class="grow" placeholder={$lg.user.email} bind:value={user.email} />
					</label>
				</FormControl>

				<FormControl bottomLabel={error.password ? $lg.common.pleaseEnterValue : ''} bottomLabelClasses="text-error">
					<label class="flex items-center gap-2 input input-bordered {error.password && 'input-error'}">
						<Icon icon="mdi:password" />
						<input type="password" class="grow" placeholder={$lg.user.password} bind:value={user.password} />
					</label>
				</FormControl>
			</div>

			<div class="flex justify-end items-center">
				<a href="/forgot-password" class="btn btn-link">{l.forgotPassword}</a>
			</div>

			<button class="btn btn-primary w-full mt-4" on:click={signIn}>{l.title}</button>

			<div class="flex justify-center items-center">
				<div>{l.dontHaveAccount}</div>
				<a href="/signup" class="btn btn-link text-secondary px-2">{$lg.signup.title}</a>
			</div>

			<div class="divider">{$lg.common.or.toUpperCase()}</div>

			<a href="/login/google" class="btn btn-outline w-full mt-4">
				<Icon icon="flat-color-icons:google" width={20} />
				{l.signInGoogle}
			</a>
		</div>
	</div>
</Layout>
