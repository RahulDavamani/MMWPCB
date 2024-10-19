<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { AdvancedPcb } from '../../../../../zod/products/advancedPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.boardType;
	$: ({ boardType } = $quote.products.advancedPcb);

	const selectBoardType = (value: AdvancedPcb['boardType']) => {
		if (boardType !== value) {
			$quote.products.advancedPcb.boardType = value;
			switch (value) {
				case 'SINGLE_PIECES':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						xoutAllowance: undefined,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_CUSTOMER':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						xoutAllowance: true,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_VELENOVA':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
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
