<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { ui } from '../stores/ui.store';
	import { getErrorCode } from '$lib/data/errorCode';
	import Layout from './components/layout/Layout.svelte';

	$: ({ status: code, error } = $page);
	$: ({ name, message } = getErrorCode({ http: code }));

	const showDetailsModal = () => ui.setAlertModal({ title: `${code} - ${name}`, body: error?.message });
</script>

<Layout pageTitle={name}>
	<div class="card max-w-lg w-full shadow-xl mx-auto my-10">
		<div class="card-body">
			<div class="flex justify-center items-center">
				<div class="text-5xl font-bold font-mono">{code}</div>
				<div class="divider divider-horizontal" />
				<div>
					<div class="flex justify-between items-center">
						<div class="text-xl font-semibold">{name}</div>
						{#if error?.message}
							<button class="btn btn-link p-0" on:click={showDetailsModal}>
								<Icon icon="mdi:information-variant-circle" class="text-xl text-warning" />
							</button>
						{/if}
					</div>
					<div class="italic">{message}</div>
				</div>
			</div>
			<a href="/" class="btn btn-primary btn-outline btn-wide mt-4 mx-auto">Go Home</a>
		</div>
	</div>
</Layout>
