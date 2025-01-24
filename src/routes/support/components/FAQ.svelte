<script lang="ts">
	import Icon from '@iconify/svelte';
	import { generateSpData } from '../utils/generateSpData';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.support;

	const faqs = [
		{ section: 'myOrders', subsection: 'ordering', question: 0 },
		{ section: 'myOrders', subsection: 'ordering', question: 1 },
		{ section: 'myOrders', subsection: 'leadTime', question: 0 },
		{ section: 'myOrders', subsection: 'leadTime', question: 2 },
		{ section: 'myOrders', subsection: 'salesService', question: 2 },
		{ section: 'myAccount', subsection: 'registeringSigningIn', question: 0 },
		{ section: 'myAccount', subsection: 'registeringSigningIn', question: 1 },
		{ section: 'myAccount', subsection: 'accountSettings', question: 1 }
	];
</script>

<div class="flex flex-col">
	<div class="flex items-center gap-2 mb-4 text-2xl font-bold">
		<Icon icon="mdi:fire" class="text-orange-400" />
		{l.faqs}
	</div>
	<div class="border shadow rounded-lg p-3 grow">
		<ul class="list-disc pl-6 space-y-1 text-sm">
			{#each faqs.slice(0, 4) as { section, subsection, question }}
				{@const { title, href } = generateSpData(section, subsection, question)}
				<li><a {href} class="hover:underline">{title}</a></li>
			{/each}
		</ul>
	</div>
</div>
<div class="flex flex-col">
	<div class="text-2xl font-bold mb-4 opacity-0">{l.faqs}</div>
	<div class="border shadow rounded-lg p-3 grow">
		<ul class="list-disc pl-6 space-y-1 text-sm">
			{#each faqs.slice(0, 4) as { section, subsection, question }}
				{@const { title, href } = generateSpData(section, subsection, question)}
				<li><a {href} class="hover:underline">{title}</a></li>
			{/each}
		</ul>
	</div>
</div>
