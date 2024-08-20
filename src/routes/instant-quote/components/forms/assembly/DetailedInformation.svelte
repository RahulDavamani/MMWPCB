<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.detailedInformation;
</script>

<FormItem {l}>
	<textarea
		class="textarea textarea-bordered w-full"
		rows="2"
		placeholder={l.placeholder}
		bind:value={$quote.assembly.detailedInformation}
	/>
</FormItem>
