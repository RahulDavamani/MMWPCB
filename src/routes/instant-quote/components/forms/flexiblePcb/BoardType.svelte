<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { FlexiblePcb } from '../../../../../zod/products/flexiblePcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.boardType;
	$: ({ boardType } = $quote.products.flexiblePcb);

	const selectBoardType = (value: FlexiblePcb['boardType']) => {
		if (boardType !== value) {
			$quote.products.flexiblePcb.boardType = value;
			switch (value) {
				case 'SINGLE_PIECES':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						xoutAllowance: undefined,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_CUSTOMER':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						xoutAllowance: true,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_VELENOVA':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
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
