<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
	import Layout from '../components/layout/Layout.svelte';
</script>

<Layout pageTitle="Register" footer={false}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<h2 class="font-bold text-2xl mb-6">Sign up</h2>

			<div class="space-y-4">
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:person" />
					<input type="text" class="grow" placeholder="First Name" />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:person" />
					<input type="text" class="grow" placeholder="Last name" />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:email" />
					<input type="text" class="grow" placeholder="Email" />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:password" />
					<input type="password" class="grow" placeholder="Password" />
				</label>
				<label class="input input-bordered flex items-center gap-2">
					<Icon icon="mdi:password" />
					<input type="password" class="grow" placeholder="Confirm Password" />
				</label>
			</div>

			<FormControl inputType="In" label="I agree to sign up">
				<input type="checkbox" class="checkbox checkbox-primary" />
			</FormControl>

			<button class="btn btn-primary w-full mt-4">Sign up</button>

			<div class="flex justify-center items-center">
				<div>Already Have an Account?</div>
				<a href="/login" class="btn btn-link text-secondary px-2">Sign in</a>
			</div>

			<div class="divider">OR</div>

			<a href="/login/google" class="btn btn-outline w-full mt-4">
				<Icon icon="flat-color-icons:google" width={20} />
				Sign in with Google
			</a>
		</div>
	</div>
</Layout>
