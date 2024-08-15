<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string;
	export let moreInfo: { description?: string; url?: string; imgSrc?: string } | undefined = undefined;
	export let classes = 'items-start mt-6 mb-2';
</script>

<div class="flex gap-4 {classes}">
	<div class="flex items-center gap-2 w-40 min-w-40">
		{#if moreInfo}
			{@const { description, url, imgSrc } = moreInfo}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div class="dropdown dropdown-hover">
				<div tabindex={0} class="my-1">
					<slot name="dropdownTitle">
						<Icon icon="mdi:information-outline" class="text-info" width={18} />
					</slot>
				</div>
				<div tabindex={0} class="dropdown-content bg-base-200 w-80 p-3 z-[1] rounded-box shadow border text-sm">
					<slot name="dropdownContent" />
					{#if description}
						<div>{description}</div>
					{/if}
					{#if url !== undefined}
						<a href={url} class="btn btn-link btn-sm p-0 gap-0 no-underline underline-offset-2">
							Learn More
							<Icon icon="mdi:chevron-double-right" width={18} class="mt-0.5" />
						</a>
					{/if}
					{#if imgSrc !== undefined}
						<img src={imgSrc} alt="info" width={50} />
					{/if}
				</div>
			</div>
		{/if}

		<slot name="title">
			<div class="break-words">{title}:</div>
		</slot>
	</div>

	<slot />
</div>
