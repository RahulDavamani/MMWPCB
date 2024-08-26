<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	$: ({ orders } = $page.data as PageData);
</script>

<Layout pageTitle="Orders">
	<div class="flex justify-between items-center">
		<div class="text-xl font-bold">My Orders</div>
		<a href="/order" class="btn btn-primary btn-outline btn-sm">View Cart</a>
	</div>

	<div class="border rounded-lg shadow mt-6">
		<div class="overflow-x-auto">
			<table class="table table-pin-rows">
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Created Date</th>
						<th>Status</th>
						<th class="text-center">Items Count</th>
						<th class="w-40"></th>
					</tr>
				</thead>
				<tbody>
					{#each orders as { id, createdAt, status, _count }}
						{@const productCount = Object.values(_count).reduce((acc, cur) => acc + cur, 0)}
						<tr>
							<td>{id.toUpperCase()}</td>
							<td>{createdAt.toLocaleString()}</td>
							<td>{status}</td>
							<td class="text-center">{productCount}</td>
							<td class="text-right">
								<a href="/order?id={id}" class="btn btn-primary btn-sm btn-link">
									View Details
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
