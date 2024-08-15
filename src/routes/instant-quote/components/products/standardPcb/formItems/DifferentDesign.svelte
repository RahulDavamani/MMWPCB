<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.differentDesign;
	$: ({ differentDesign } = $quote.standardPcb);

	$: values = [1, 2, 3, 4, 5, 6];
</script>

<FormItem title={l.title} moreInfo={{ description: l.description, imgSrc: '' }}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {differentDesign !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.differentDesign = value)}>{value}</button
			>
		{/each}
		<button class="btn btn-sm btn-primary {differentDesign < 7 && 'btn-outline'}">
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center"
				value={values.includes(differentDesign) ? '' : differentDesign}
				on:change={(e) => ($quote.standardPcb.differentDesign = Number(e.currentTarget.value))}
			/>
		</button>
	</div>
</FormItem>
