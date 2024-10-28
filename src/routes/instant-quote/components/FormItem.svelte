<script lang="ts">
	import Icon from '@iconify/svelte';

	export let pd: {
		l: {
			title?: string;
			description?: string;
			disclaimer?: string;
			error?: string;
		};
		url?: string;
		imgSrc?: string;
	};
	$: ({
		l: { title, description, disclaimer, error },
		url,
		imgSrc
	} = pd);
	export let isError = false;

	export let classes = 'items-start mt-6 mb-2';
</script>

<div class="flex gap-4 {classes}">
	<div class="flex items-center gap-2 w-44 min-w-44">
		{#if description !== undefined || url !== undefined || imgSrc !== undefined}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="dropdown dropdown-hover">
				<div tabindex={0} class="my-1">
					<Icon icon="mdi:information-outline" class="text-info" width={18} />
				</div>
				<div tabindex={0} class="dropdown-content bg-base-200 w-80 p-3 z-[1] rounded-box shadow border text-sm">
					<slot name="description">
						{#if description}
							<div>{description}</div>
						{/if}
					</slot>
					<slot name="url">
						{#if url !== undefined}
							<a href={url} class="btn btn-link btn-sm p-0 gap-0 no-underline underline-offset-2">
								Learn More
								<Icon icon="mdi:chevron-double-right" width={18} class="mt-0.5" />
							</a>
						{/if}
					</slot>
					<slot name="imgSrc">
						{#if imgSrc !== undefined}
							<img src={imgSrc} alt="info" width={50} />
						{/if}
					</slot>
				</div>
			</div>
		{:else}
			<div class="w-4" />
		{/if}

		<slot name="title">
			{#if title}
				<div>{title}:</div>
			{/if}
		</slot>
	</div>

	<div class="w-full">
		<slot />

		<slot name="error">
			{#if isError && error}
				<div class="text-xs mt-1 text-error">{error}</div>
			{/if}
		</slot>

		<slot name="disclaimer">
			{#if disclaimer}
				<div class="mt-2 text-secondary text-sm">{disclaimer}</div>
			{/if}
		</slot>
	</div>
</div>
