<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';

	$: l = $lg.register;
</script>

<Layout pageTitle="Register" footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<h2 class="font-bold text-2xl mb-6">{l.signUp}</h2>

			<div class="space-y-4">
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:person" />
					<input type="text" class="grow" placeholder={l.firstName} />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:person" />
					<input type="text" class="grow" placeholder={l.lastName} />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:email" />
					<input type="text" class="grow" placeholder={l.email} />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:password" />
					<input type="password" class="grow" placeholder={l.password} />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:password" />
					<input type="password" class="grow" placeholder={l.confirmPassword} />
				</label>
			</div>

			<FormControl inputType="In" label={l.iAgree}>
				<input type="checkbox" class="checkbox checkbox-primary" />
			</FormControl>

			<button class="btn btn-primary w-full mt-4">{l.signUp}</button>

			<div class="flex justify-center items-center">
				<div>{l.alreadyHaveAccount}</div>
				<a href="/login" class="btn btn-link text-secondary px-2">{$lg.login.signIn}</a>
			</div>

			<div class="divider">{$lg.common.or.toUpperCase()}</div>

			<a href="/login/google" class="btn btn-outline w-full mt-4">
				<Icon icon="flat-color-icons:google" width={20} />
				{l.signInGoogle}
			</a>
		</div>
	</div>
</Layout>
