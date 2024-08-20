<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.payAttention;

	$: sensitivePartsValues = [
		{ name: $lg.common.no, value: false },
		{ name: $lg.common.yes, value: true }
	];
	$: alternatesChinaValues = [
		{ name: $lg.common.no, value: false },
		{ name: $lg.common.yes, value: true }
	];
</script>

<FormItem {l}>
	<div>
		<div>{l.sensitiveParts}</div>
		<div class="flex gap-4">
			{#each sensitivePartsValues as { name, value }}
				<FormControl inputType="In" label={name}>
					<input
						type="radio"
						class="radio radio-xs radio-primary"
						name="sensitiveParts"
						{value}
						bind:group={$quote.assembly.sensitiveParts}
					/>
				</FormControl>
			{/each}
		</div>
	</div>

	<div class="mt-2">
		<div>{l.alternatesChina}</div>
		<div class="flex gap-4">
			{#each alternatesChinaValues as { name, value }}
				<FormControl inputType="In" label={name}>
					<input
						type="radio"
						class="radio radio-xs radio-primary"
						name="alternatesChina"
						{value}
						bind:group={$quote.assembly.alternatesChina}
					/>
				</FormControl>
			{/each}
		</div>
	</div>
</FormItem>
