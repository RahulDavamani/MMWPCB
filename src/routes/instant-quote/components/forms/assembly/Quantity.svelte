<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.quantity;
	$: isError = $quoteError.assembly.quantity;
</script>

<FormItem {l} {isError}>
	<div class="join">
		<input
			type="number"
			class="input input-bordered input-sm {isError && 'input-error'} join-item"
			placeholder={$lg.common.typeHere}
			bind:value={$quote.assembly.quantity}
		/>
		<div class="btn btn-sm join-item pointer-events-none font-normal">{l.pieces}</div>
	</div>
</FormItem>
