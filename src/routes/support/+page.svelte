<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../stores/i18n.store';
	import { support } from '../../stores/support.store';
	import Layout from '../components/layout/Layout.svelte';

	$: l = $lg.support;

	$: topQuestions = [
		{
			section: 'myOrders',
			subsection: 'ordering',
			question: 0
		},
		{
			section: 'myOrders',
			subsection: 'ordering',
			question: 1
		},
		{
			section: 'myOrders',
			subsection: 'leadTime',
			question: 0
		},
		{
			section: 'myOrders',
			subsection: 'leadTime',
			question: 2
		},
		{
			section: 'myOrders',
			subsection: 'salesService',
			question: 2
		},
		{
			section: 'myAccount',
			subsection: 'registeringSigningIn',
			question: 0
		},
		{
			section: 'myAccount',
			subsection: 'registeringSigningIn',
			question: 1
		},
		{
			section: 'myAccount',
			subsection: 'accountSettings',
			question: 1
		}
	];
</script>

<Layout pageTitle={l.title}>
	<div slot="top-main">
		<div class="w-full bg-info py-14 bg-opacity-40">
			<div class="w-[30rem] mx-auto text-center">
				<div class="text-2xl font-semibold mb-3">Hi, How can we help?</div>
				<label class="input input-bordered flex items-center gap-2">
					<input type="text" class="grow" placeholder="Search" />
					<Icon icon="mdi:search" width={20} />
				</label>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-3 gap-10 mb-10">
		<div class="flex flex-col">
			<div class="text-2xl font-bold mb-4">Top Questions</div>
			<div class="border shadow rounded-lg p-3 grow">
				<ul class="list-disc pl-6 space-y-1 text-sm">
					{#each topQuestions.slice(0, 4) as { section, subsection, question }}
						<li>
							<a href="/support/{section}/{subsection}/{question}" class="hover:underline">
								{l.sections[section].subsections[subsection].questions[question].title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="text-2xl font-bold mb-4 opacity-0">FAQ</div>
			<div class="border shadow rounded-lg p-3 grow">
				<ul class="list-disc pl-6 space-y-1 text-sm">
					{#each topQuestions.slice(4, 8) as { section, subsection, question }}
						<li>
							<a href="/support/{section}/{subsection}/{question}" class="hover:underline">
								{l.sections[section].subsections[subsection].questions[question].title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="text-2xl font-bold mb-4">FAQ</div>
			<div class="border shadow rounded-lg px-3 py-2 grow">
				<ul class="list-disc pl-6 space-y-1">
					<li>How do I set my shipping address?</li>
					<li>How do I manage my shopping cart?</li>
					<li>I have not received my order. What can I do?</li>
					<li>
						<a href="/support/faq" class="btn btn-link btn-sm p-0">
							View More
							<Icon icon="mdi:chevron-right" width={20} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="flex justify-center font-bold text-2xl mb-4">More Topics</div>
	<div class="grid grid-cols-3 gap-4">
		{#each Object.entries($support.sections) as [section, { title, subsections }]}
			<div class="border shadow rounded-lg max-w-96 px-3 py-2">
				<div class="divider">
					<a href="/support/{section}" class="btn btn-link text-lg p-0">{title}</a>
				</div>
				<ul class="list-disc pl-6">
					{#each Object.entries(subsections).slice(0, 3) as [subsection, { title }]}
						<li><a href="/support/{section}/{subsection}" class="hover:underline">{title}</a></li>
					{/each}
					<li>
						<a href="/support/{section}" class="btn btn-link btn-sm p-0">
							View More
							<Icon icon="mdi:chevron-right" width={20} />
						</a>
					</li>
				</ul>
			</div>
		{/each}
	</div>
</Layout>
