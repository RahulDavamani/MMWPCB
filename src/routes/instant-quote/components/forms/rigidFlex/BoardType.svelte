<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { RigidFlex } from '../../../../../zod/products/rigidFlex.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.boardType;
	$: ({ boardType } = $quote.products.rigidFlex);

	const selectBoardType = (value: RigidFlex['boardType']) => {
		if (boardType !== value) {
			$quote.products.rigidFlex.boardType = value;
			switch (value) {
				case 'SINGLE_PIECES':
					$quote.products.rigidFlex = {
						...$quote.products.rigidFlex,
						xoutAllowance: undefined,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_CUSTOMER':
					$quote.products.rigidFlex = {
						...$quote.products.rigidFlex,
						xoutAllowance: true,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_VELENOVA':
					$quote.products.rigidFlex = {
						...$quote.products.rigidFlex,
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
