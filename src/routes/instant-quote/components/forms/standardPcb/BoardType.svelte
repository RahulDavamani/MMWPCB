<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.boardType;
	$: ({ boardType } = $quote.products.standardPcb);

	const selectBoardType = (value: StandardPcb['boardType']) => {
		if (boardType !== value) {
			$quote.products.standardPcb.boardType = value;
			switch (value) {
				case 'SINGLE_PIECES':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						xoutAllowance: undefined,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_CUSTOMER':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						xoutAllowance: true,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_VELENOVA':
					$quote.products.standardPcb = {
						...$quote.products.standardPcb,
						xoutAllowance: true,
						breakAwayRail: true,
						routeProcess: 'VELENOVA_PREFER',
						panelRequirements: ''
					};
					break;
			}
		}
	};
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {boardType !== value && 'btn-outline'}"
				on:click={() => selectBoardType(value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
