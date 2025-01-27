<script lang="ts">
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';

	export let service: {
		l: { title: string };
		img: string;
		category: string;
		startingFrom: number | null;
	};
	$: ({
		l: { title },
		img,
		category,
		startingFrom
	} = service);

	export let href: string;
	export let specs: { title: string; value: string }[];
</script>

<a
	{href}
	class="group rounded-box border shadow transition duration-300 ease-in-out
   hover:shadow-xl active:shadow-inner hover:border-gray-300 active:border-gray-300"
>
	<div class="flex flex-col justify-between h-full p-6">
		<div>
			<img src={img} alt={title} class="w-full h-40 object-contain" />

			<div class="text-primary font-serif mt-4">{category}</div>
			<div class="font-semibold group-hover:underline">{title}</div>
			{#if startingFrom}
				<div class="text-sm mt-2">
					{$lg.services.startingFrom} <span class="font-mono">{parsePrice($i18n.currency, startingFrom, 2)}</span>
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
		</div>
	</div>
</a>
