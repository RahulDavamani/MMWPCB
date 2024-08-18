<script lang="ts">
	import Icon from '@iconify/svelte';

	export let classes = 'items-start mt-6 mb-2';
	export let title: string | undefined = undefined;
	export let moreInfo: { description?: string; url?: string; imgSrc?: string } | undefined = undefined;
	export let error: string | undefined = undefined;
	export let disclaimer: string | undefined = undefined;
</script>

<div class="flex gap-4 {classes}">
	<div class="flex items-center gap-2 w-40 min-w-40">
		{#if moreInfo}
			{@const { description, url, imgSrc } = moreInfo}
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
		{/if}

		<slot name="title">
			{#if title}
				<div class="break-words">{title}:</div>
			{/if}
		</slot>
	</div>

	<div class="w-full">
		<slot />

		<slot name="error">
			{#if error}
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
