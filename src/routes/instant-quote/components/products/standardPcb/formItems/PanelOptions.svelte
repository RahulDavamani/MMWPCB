<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormControl from '../../../../../components/FormControl.svelte';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb;
	$: ({ xoutAllowance, breakAwayRail, routeProcess, panelRequirements } = $quote.standardPcb);

	$: xoutAllowanceValues = [
		{ name: l.xoutAllowance.options.accept, value: true },
		{ name: l.xoutAllowance.options.decline, value: false }
	] as { name: string; value: StandardPcb['xoutAllowance'] }[];

	$: routeProcessValues = [
		{ name: l.routeProcess.options.velenovaPrefer, value: 'VELENOVA_PREFER' },
		{ name: l.routeProcess.options.vScoring, value: 'V_SCORING' },
		{ name: l.routeProcess.options.tabRoute, value: 'TAB_ROUTE' },
		{ name: l.routeProcess.options.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
	] as { name: string; value: StandardPcb['routeProcess'] }[];

	$: breakAwayRailValues = [
		{ name: $lg.common.yes, value: true },
		{ name: $lg.common.no, value: false }
	] as { name: string; value: StandardPcb['breakAwayRail'] }[];
</script>

{#if xoutAllowance !== undefined}
	{@const { title, description } = l.xoutAllowance}
	<FormItem {title} moreInfo={{ description, url: '', imgSrc: '' }}>
		<div class="flex text-sm">
			{#each xoutAllowanceValues as { name, value }}
				<FormControl inputType="In" label={name}>
					<input
						type="radio"
						name="xoutAllowance"
						class="radio radio-primary radio-xs"
						{value}
						bind:group={$quote.standardPcb.xoutAllowance}
					/>
				</FormControl>
			{/each}
		</div>
	</FormItem>
{/if}

{#if routeProcess && breakAwayRail !== undefined}
	<div class="grid grid-cols-2">
		{#if routeProcess}
			{@const { title, description } = l.routeProcess}
			<FormItem {title} moreInfo={{ description, imgSrc: '' }}>
				<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.routeProcess}>
					{#each routeProcessValues as { name, value }}
						<option {value}>{name}</option>
					{/each}
				</select>
			</FormItem>
		{/if}

		{#if breakAwayRail}
			{@const { title, description } = l.breakAwayRail}
			<FormItem {title} moreInfo={{ description, imgSrc: '' }}>
				<div class="flex text-sm">
					{#each breakAwayRailValues as { name, value }}
						<FormControl inputType="In" label={name}>
							<input
								type="radio"
								name="breakAwayRail"
								class="radio radio-primary radio-xs"
								{value}
								bind:group={$quote.standardPcb.breakAwayRail}
							/>
						</FormControl>
					{/each}
				</div>
			</FormItem>
		{/if}
	</div>
{/if}

{#if panelRequirements !== undefined}
	{@const { title, disclaimer } = l.panelRequirements}
	<FormItem {title} {disclaimer}>
		<textarea class="textarea textarea-bordered textarea-sm w-full" bind:value={$quote.standardPcb.panelRequirements} />
	</FormItem>
{/if}
