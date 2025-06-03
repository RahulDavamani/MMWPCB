<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.threePrinting;
</script>

<FormItem pd={{ l: l.printingRisk }}>
	<div class="flex items-center gap-5 mb-4">
		<input
			type="checkbox"
			class="checkbox checkbox-primary checkbox-sm"
			bind:checked={$quote.products.threePrinting.wallThicknessRisk}
		/>
		<div>
			<div>{l.wallThicknessRisk.title}</div>
			<div class="text-sm opacity-80 text-gray-600">{l.wallThicknessRisk.description}</div>
		</div>
	</div>

	<div class="flex items-center gap-5">
		<input
			type="checkbox"
			class="checkbox checkbox-primary checkbox-sm"
			bind:checked={$quote.products.threePrinting.printedThreadsRisk}
		/>
		<div>
			<div>{l.printedThreadsRisk.title}</div>
			<div class="text-sm opacity-80 text-gray-600">{l.printedThreadsRisk.description}</div>
		</div>
	</div>
</FormItem>
