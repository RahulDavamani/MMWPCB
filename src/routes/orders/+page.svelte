<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { lg } from '../../stores/i18n.store';

	$: l = $lg.orders;

	$: ({ orders } = $page.data as PageData);
</script>

<Layout pageTitle={l.pageTitle}>
	<div class="flex justify-between items-center">
		<div class="text-xl font-bold">{l.pageTitle}</div>
		<a href="/order" class="btn btn-primary btn-outline btn-sm">{l.viewCart}</a>
	</div>

	<div class="border rounded-lg shadow mt-6">
		<div class="overflow-x-auto">
			<table class="table table-pin-rows">
				<thead>
					<tr>
						<th>{l.orderId}</th>
						<th>{l.createdDate}</th>
						<th>{l.status}</th>
						<th class="text-center">{l.itemsCount}</th>
						<th class="w-40" />
					</tr>
				</thead>
				<tbody>
					{#each orders as { id, createdAt, status, _count }}
						{@const productCount = Object.values(_count).reduce((acc, cur) => acc + cur, 0)}
						<tr>
							<td>{id.toUpperCase()}</td>
							<td>{createdAt.toLocaleString()}</td>
							<td>{$lg.orderStatus[status]}</td>
							<td class="text-center">{productCount}</td>
							<td class="text-right">
								<a href="/order?id={id}" class="btn btn-primary btn-sm btn-link">
									{l.viewDetails}
									<Icon icon="mdi:arrow-right" width={16} />
								</a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</Layout>
