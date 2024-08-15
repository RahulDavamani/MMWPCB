<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.thermoElectricSeparation;
	$: ({ thermoElectricSeparation } = $quote.standardPcb);
</script>

{#if thermoElectricSeparation !== undefined}
	<FormItem title={l.title} moreInfo={{ description: l.description }}>
		<input
			type="checkbox"
			class="checkbox checkbox-sm checkbox-primary"
			bind:checked={$quote.standardPcb.thermoElectricSeparation}
		/>
	</FormItem>
{/if}
