<script lang="ts">
	import Icon from '@iconify/svelte';
	import { quote } from '../../../stores/quote.store';
	import { lg } from '../../../stores/i18n.store';
	import StandardPcbForm from './forms/standardPcb/StandardPcbForm.svelte';
	import AdvancedPcbForm from './forms/advancedPcb/AdvancedPcbForm.svelte';
	import FlexiblePcbForm from './forms/flexiblePcb/FlexiblePcbForm.svelte';
	import AssemblyForm from './forms/assembly/AssemblyForm.svelte';
	import StencilForm from './forms/stencil/StencilForm.svelte';
	import { productTypes } from '../../../stores/product.store';

	$: ({ productType } = $quote);
	$: productName = $productTypes[productType].name;
</script>

<div class="grow border rounded-lg shadow p-4 h-fit">
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center">
			<Icon icon="mdi:form-outline" width={24} />
			<div class="text-lg font-bold">{productName} {$lg.instantQuote.specification}</div>
		</div>
		<button class="btn btn-error btn-sm" on:click={quote.reset}>
			<Icon icon="mdi:refresh" width={16} />
			{$lg.common.reset}
		</button>
	</div>
	<div class="divider mt-0" />

	{#if productType === 'standardPcb'}
		<StandardPcbForm />
	{:else if productType === 'advancedPcb'}
		<AdvancedPcbForm />
	{:else if productType === 'flexiblePcb'}
		<FlexiblePcbForm />
	{:else if productType === 'assembly'}
		<AssemblyForm />
	{:else}
		<StencilForm />
	{/if}
</div>
