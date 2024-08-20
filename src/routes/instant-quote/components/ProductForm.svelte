<script lang="ts">
	import Icon from '@iconify/svelte';
	import { quote } from '../../../stores/quote.store';
	import { lg } from '../../../stores/i18n.store';
	import StandardPcbForm from './forms/standardPcb/StandardPcbForm.svelte';
	import AdvancedPcbForm from './forms/advancedPcb/AdvancedPcbForm.svelte';
	import FlexiblePcbForm from './forms/flexiblePcb/FlexiblePcbForm.svelte';
	import AssemblyForm from './forms/assembly/AssemblyForm.svelte';
	import StencilForm from './forms/stencil/StencilForm.svelte';

	$: l = $lg.products;
	$: ({ product } = $quote);
</script>

<div class="flex-grow rounded shadow border p-4 h-fit">
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center">
			<Icon icon="mdi:form-outline" width={24} />
			<div class="text-lg font-bold">{l[product]} {$lg.instantQuote.specification}</div>
		</div>
		<button class="btn btn-error btn-sm" on:click={quote.reset}>
			<Icon icon="mdi:refresh" width={16} />
			{$lg.common.reset}
		</button>
	</div>
	<div class="divider mt-0" />

	{#if product === 'standardPcb'}
		<StandardPcbForm />
	{:else if product === 'advancedPcb'}
		<AdvancedPcbForm />
	{:else if product === 'flexiblePcb'}
		<FlexiblePcbForm />
	{:else if product === 'assembly'}
		<AssemblyForm />
	{:else}
		<StencilForm />
	{/if}
</div>
