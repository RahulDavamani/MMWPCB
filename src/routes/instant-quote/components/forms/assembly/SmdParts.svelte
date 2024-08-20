<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.smdParts;
	$: isError = $quoteError.assembly.smdParts;
</script>

<FormItem {l} {isError}>
	<input
		type="number"
		class="input input-bordered input-sm {isError && 'input-error'}"
		placeholder={$lg.common.typeHere}
		bind:value={$quote.assembly.smdParts}
	/>
</FormItem>
