<script>
	import Icon from '@iconify/svelte';

	let session = false;
</script>

<div id="navbar" class="navbar bg-primary">
	<div class="container mx-auto flex justify-between items-center">
		<div>
			<a href="/" class="btn btn-link text-white text-2xl no-underline hover:no-underline">Velenova</a>
		</div>
		<div>
			{#if session}
				<div class="avatar placeholder">
					<div class="bg-accent text-neutral-content w-10 rounded-full">
						<span class="font-semibold">RD</span>
					</div>
				</div>
			{:else}
				<a href="/login" class="btn btn-primary">
					<Icon icon="mdi:login" width={20} />
					Login
				</a>
			{/if}
		</div>
	</div>
</div>
