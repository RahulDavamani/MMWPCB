<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';
	import DateCode from './DateCode.svelte';
	import UlMarking from './UlMarking.svelte';

	$: pd = $productDetails.rigidFlex.customizedServices;
	$: ({ customizedServices } = $quote.products.rigidFlex);

	let collapseOpen = false;
</script>

<div class="collapse collapse-arrow mt-6 {collapseOpen && 'overflow-visible'}">
	<input type="checkbox" class="peer" bind:checked={collapseOpen} />
	<div class="collapse-title bg-base-200 rounded-box font-semibold">{pd.l.title}</div>
	<div class="collapse-content">
		<div class="mt-4 text-sm text-secondary">{pd.l.description}</div>
		<div class="flex flex-wrap gap-x-6">
			<UlMarking />
		</div>
		<DateCode />

		<div class="divider" />

		<div class="flex flex-wrap gap-x-8 text-sm">
			{#each pd.values as vd}
				<FormItem pd={vd} classes="items-center">
					<input
						type="checkbox"
						class="checkbox checkbox-primary checkbox-xs rounded-md"
						checked={customizedServices.includes(vd.value)}
						on:click={() => {
							if (customizedServices.includes(vd.value))
								$quote.products.rigidFlex.customizedServices = customizedServices.filter((v) => v !== vd.value);
							else $quote.products.rigidFlex.customizedServices = [...customizedServices, vd.value];
						}}
					/>
				</FormItem>
			{/each}
		</div>
	</div>
</div>
