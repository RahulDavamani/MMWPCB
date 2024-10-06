<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb;
	$: ({ layers } = $quote.products.standardPcb);
</script>

{#if layers === 1}
	<div class="flex flex-wrap gap-x-6">
		<FormItem pd={pd.copperLayer}>
			<select class="select select-bordered select-sm" bind:value={$quote.products.standardPcb.copperLayer}>
				{#each pd.copperLayer.values as { title, value }}
					<option {value}>{title}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem pd={pd.solderMask}>
			<select class="select select-bordered select-sm" bind:value={$quote.products.standardPcb.solderMask}>
				{#each pd.solderMask.values as { title, value }}
					<option {value}>{title}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem pd={pd.silkscreen}>
			<select class="select select-bordered select-sm" bind:value={$quote.products.standardPcb.silkscreen}>
				{#each pd.silkscreen.values as { title, value }}
					<option {value}>{title}</option>
				{/each}
			</select>
		</FormItem>
	</div>
{/if}
