<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import type { Assembly } from '../../../../../zod/products/assembly.schema';
	import BgaParts from './BgaParts.svelte';
	import SmdParts from './SmdParts.svelte';
	import ThroughHoleParts from './ThroughHoleParts.svelte';
	import UniqueParts from './UniqueParts.svelte';

	$: l = $lg.instantQuote.assembly.otherParameters;
	let collapseOpen = false;
</script>

<div class="collapse collapse-arrow mt-6 {collapseOpen && 'overflow-visible'}">
	<input type="checkbox" class="peer" bind:checked={collapseOpen} />
	<div class="collapse-title bg-base-200 rounded-box font-semibold">{l.title}</div>
	<div class="collapse-content">
		<div class="mt-4 text-sm text-secondary">{l.description}</div>

		<UniqueParts />
		<SmdParts />
		<BgaParts />
		<ThroughHoleParts />
	</div>
</div>
