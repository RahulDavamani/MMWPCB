<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../components/FormControl.svelte';
</script>

<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
	<div class="card-body">
		<h2 class="font-bold text-2xl mb-6">Sign in</h2>

		<div class="space-y-4">
			<label class="input input-bordered flex items-center gap-2">
				<Icon icon="mdi:email" />
				<input type="text" class="grow" placeholder="Email" />
			</label>
			<label class="input input-bordered flex items-center gap-2">
				<Icon icon="mdi:password" />
				<input type="password" class="grow" placeholder="password" />
			</label>
		</div>

		<div class="flex justify-between items-center">
			<FormControl inputType="In" label="Remember me">
				<input type="checkbox" class="checkbox checkbox-primary" />
			</FormControl>
			<div class="btn btn-link">Forgot Password?</div>
		</div>

		<button class="btn btn-primary w-full mt-4">Sign in</button>

		<div class="flex justify-center items-center">
			<div>Don't Have an Account?</div>
			<a href="/register" class="btn btn-link text-secondary px-2">Sign up</a>
		</div>

		<div class="divider">OR</div>

		<button class="btn btn-outline w-full mt-4">
			<Icon icon="flat-color-icons:google" width={20} />
			Sign in with Google
		</button>
	</div>
</div>
