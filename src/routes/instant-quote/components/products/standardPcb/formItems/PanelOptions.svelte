<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormControl from '../../../../../components/FormControl.svelte';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb;
	$: ({ xoutAllowance, breakAwayRail, routeProcess, panelRequirements } = $quote.standardPcb);

	$: routeProcessValues = [
		{ name: l.routeProcess.options.velenovaPrefer, value: 'VELENOVA_PREFER' },
		{ name: l.routeProcess.options.vScoring, value: 'V_SCORING' },
		{ name: l.routeProcess.options.tabRoute, value: 'TAB_ROUTE' },
		{ name: l.routeProcess.options.vScoringTabRoute, value: 'V_SCORING_AND_TAB_ROUTE' }
	] as {
		name: string;
		value: StandardPcb['routeProcess'];
	}[];
</script>

{#if xoutAllowance !== undefined}
	<FormItem title={l.xoutAllowance.title} moreInfo={{ description: l.xoutAllowance.description, url: '', imgSrc: '' }}>
		<div class="flex text-sm">
			<FormControl inputType="In" label={l.xoutAllowance.accept}>
				<input
					type="radio"
					name="xoutAllowance"
					class="radio radio-primary radio-xs"
					value={true}
					bind:group={$quote.standardPcb.xoutAllowance}
				/>
			</FormControl>
			<FormControl inputType="In" label={l.xoutAllowance.decline}>
				<input
					type="radio"
					name="xoutAllowance"
					class="radio radio-primary radio-xs"
					value={false}
					bind:group={$quote.standardPcb.xoutAllowance}
				/>
			</FormControl>
		</div>
	</FormItem>
{/if}

{#if routeProcess && breakAwayRail !== undefined}
	<div class="grid grid-cols-2">
		<FormItem title={l.routeProcess.title} moreInfo={{ description: l.routeProcess.description, imgSrc: '' }}>
			<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.routeProcess}>
				{#each routeProcessValues as { name, value }}
					<option {value}>{name}</option>
				{/each}
			</select>
		</FormItem>

		<FormItem title={l.breakAwayRail.title} moreInfo={{ description: l.breakAwayRail.description, imgSrc: '' }}>
			<div class="flex text-sm">
				<FormControl inputType="In" label={$lg.common.yes}>
					<input
						type="radio"
						name="breakAwayRail"
						class="radio radio-primary radio-xs"
						value={true}
						bind:group={$quote.standardPcb.breakAwayRail}
					/>
				</FormControl>
				<FormControl inputType="In" label={$lg.common.no}>
					<input
						type="radio"
						name="breakAwayRail"
						class="radio radio-primary radio-xs"
						value={false}
						bind:group={$quote.standardPcb.breakAwayRail}
					/>
				</FormControl>
			</div>
		</FormItem>
	</div>
{/if}

{#if panelRequirements !== undefined}
	<FormItem title={l.panelRequirements.title}>
		<textarea class="textarea textarea-bordered textarea-sm w-full" bind:value={$quote.standardPcb.panelRequirements} />
	</FormItem>
	<div class="ml-44 mb-6 text-secondary text-sm">{l.panelRequirements.disclaimer}</div>
{/if}
