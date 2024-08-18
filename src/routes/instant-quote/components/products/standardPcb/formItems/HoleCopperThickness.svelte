<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description } = $lg.instantQuote.standardPcb.holeCopperThickness);

	$: values = [20, 25, 30, 35, 50, 55, 70];
</script>

<FormItem {title} moreInfo={{ description }}>
	<select class="select select-bordered select-sm min-w-64" bind:value={$quote.standardPcb.holeCopperThickness}>
		<option value={0}>{$lg.common.none}</option>
		{#each values as value}
			<option {value}>{value}um</option>
		{/each}
	</select>
</FormItem>
