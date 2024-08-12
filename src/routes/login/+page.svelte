<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
	import Layout from '../components/layout/Layout.svelte';
	import { l } from '../../stores/i18n.store';
</script>

<Layout pageTitle="Login" footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<h2 class="font-bold text-2xl mb-6">{$l.login.signIn}</h2>

			<div class="space-y-4">
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:email" />
					<input type="text" class="grow" placeholder={$l.login.email} />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:password" />
					<input type="password" class="grow" placeholder={$l.login.password} />
				</label>
			</div>

			<div class="flex justify-between items-center">
				<FormControl inputType="In" label={$l.login.rememberMe}>
					<input type="checkbox" class="checkbox checkbox-primary" />
				</FormControl>
				<div class="btn btn-link">{$l.login.forgotPassword}</div>
			</div>

			<button class="btn btn-primary w-full mt-4">{$l.login.signIn}</button>

			<div class="flex justify-center items-center">
				<div>{$l.login.dontHaveAccount}</div>
				<a href="/register" class="btn btn-link text-secondary px-2">{$l.register.signUp}</a>
			</div>

			<div class="divider">{$l.common.or}</div>

			<a href="/login/google" class="btn btn-outline w-full mt-4">
				<Icon icon="flat-color-icons:google" width={20} />
				{$l.login.signInGoogle}
			</a>
		</div>
	</div>
</Layout>
