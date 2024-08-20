<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.uniqueParts;
	$: isError = $quoteError.assembly.uniqueParts;
</script>

<FormItem {l} {isError}>
	<input
		type="number"
		class="input input-bordered input-sm {isError && 'input-error'}"
		placeholder={$lg.common.typeHere}
		bind:value={$quote.assembly.uniqueParts}
	/>
</FormItem>
