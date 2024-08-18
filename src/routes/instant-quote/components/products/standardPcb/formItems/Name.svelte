<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description } = $lg.instantQuote.standardPcb.name);
	$: error = $quoteError.standardPcb.name;
</script>

<FormItem {title} moreInfo={{ description }} {error}>
	<input
		type="text"
		class="input input-bordered input-sm {error && 'input-error'}"
		placeholder={$lg.common.typeHere}
		bind:value={$quote.standardPcb.name}
	/>
</FormItem>
