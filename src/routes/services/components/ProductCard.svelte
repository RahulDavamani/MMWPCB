<script lang="ts">
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';

	$: l = $lg.services;

	export let service: {
		title: string;
		img: string;
		category: string;
		startingFrom: number | null;
	};
	$: ({ title, img, category, startingFrom } = service);

	export let href: string;
	export let specs: { title: string; value: string }[];
</script>

<div class="rounded-box border shadow">
	<div class="flex flex-col justify-between h-full p-6">
		<div>
			<img src={img} alt={title} class="w-full h-40 object-contain" />

			<div class="text-primary font-serif mt-4">{category}</div>
			<div class="font-semibold">{title}</div>
			{#if startingFrom}
				<div class="text-sm mt-2">
					{l.startingFrom} <span class="font-mono">{parsePrice($i18n.currency, startingFrom, 2)}</span>
				</div>
			{/if}
		</div>

		<div>
			<div class="space-y-2 mt-4">
				{#each specs as { title, value }}
					<div>
						<div class="font-semibold">{title}</div>
						<div>{value}</div>
					</div>
				{/each}
			</div>

			<a {href} class="btn btn-primary w-full mt-6">{l.getQuote}</a>
		</div>
	</div>
</div>
