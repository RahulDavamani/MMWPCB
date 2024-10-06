<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	let size: { length: number; width: number; vaLength: number; vaWidth: number };
	$: $quote.products.stencil.length = size?.length;
	$: $quote.products.stencil.width = size?.width;

	const values = [
		{ length: 370, width: 470, vaLength: 190, vaWidth: 290 },
		{ length: 420, width: 520, vaLength: 240, vaWidth: 340 },
		{ length: 450, width: 550, vaLength: 270, vaWidth: 370 },
		{ length: 584, width: 584, vaLength: 380, vaWidth: 380 }
	];
</script>

<FormItem pd={{ l: $lg.instantQuote.stencil.size }}>
	<select class="select select-bordered select-sm" bind:value={size}>
		{#each values as value}
			<option {value}>{value.length} x {value.width}mm (Valid area {value.vaLength} x {value.vaWidth}mm)</option>
		{/each}
	</select>
</FormItem>
