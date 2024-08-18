<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, options } = $lg.instantQuote.standardPcb.boardType);
	$: ({ boardType } = $quote.standardPcb);

	$: values = [
		{ name: options.singlePieces, value: 'SINGLE_PIECES' },
		{ name: options.panelByCustomer, value: 'PANEL_BY_CUSTOMER' },
		{ name: options.panelByVelenova, value: 'PANEL_BY_VELENOVA' }
	] as { name: string; value: StandardPcb['boardType'] }[];

	const selectBoardType = (value: StandardPcb['boardType']) => {
		if (boardType !== value) {
			$quote.standardPcb.boardType = value;
			switch (value) {
				case 'SINGLE_PIECES':
					$quote.standardPcb = {
						...$quote.standardPcb,
						xoutAllowance: undefined,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_CUSTOMER':
					$quote.standardPcb = {
						...$quote.standardPcb,
						xoutAllowance: true,
						breakAwayRail: undefined,
						routeProcess: undefined,
						panelRequirements: undefined
					};
					break;

				case 'PANEL_BY_VELENOVA':
					$quote.standardPcb = {
						...$quote.standardPcb,
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

<FormItem {title} moreInfo={{ description, url: '', imgSrc: '' }}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {boardType !== value && 'btn-outline'}"
				on:click={() => selectBoardType(value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
