<script lang="ts">
	import type { PageData } from './$types';
	import Layout from '../components/Layout.svelte';
	import Icon from '@iconify/svelte';
	import { showModal } from '$lib/client/modal';
	import UserDetailsModal from '../components/UserDetailsModal.svelte';

	export let data: PageData;
	let search = '';
	$: users = data.users.filter(({ id, firstName, lastName, email, phone }) => {
		const user = [id, firstName + lastName, email, phone].join(' ').toLowerCase();
		return user.includes(search.replaceAll(' ', '').toLowerCase());
	});

	let userDetailsId: string | undefined = undefined;
</script>

<Layout pageTitle="Users">
	<div class="flex gap-4 my-6">
		<div class="btn btn-primary btn-outline">{users.length} Users</div>
		<input type="text" placeholder="Search..." class="input input-bordered w-full" bind:value={search} />
	</div>
	<div class="border rounded-lg shadow">
		<div class="overflow-x-auto">
			<table class="table table-pin-rows">
				<thead>
					<tr>
						<th class="w-1"></th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Role</th>
						<th>Created At</th>
						<th class="text-center">Orders</th>
						<th class="w-1"></th>
					</tr>
				</thead>
				<tbody>
					{#each users as { id, createdAt, firstName, lastName, email, phone, profilePic, role, _count: { orders } }}
						<tr
							class="hover cursor-pointer"
							on:click={() => {
								userDetailsId = id;
								showModal('userDetailsModal');
							}}
						>
							<td>
								<div class="mask mask-circle h-10 w-10 {!profilePic && 'bg-neutral p-1'}">
									{#if profilePic}
										<img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Profile" />
									{:else}
										<Icon icon="mdi:person" width={32} class="text-white" />
									{/if}
								</div>
							</td>
							<td class="font-semibold">{firstName} {lastName}</td>
							<td>{email}</td>
							<td>{phone.length > 0 ? phone : '-'}</td>
							<td>{role}</td>
							<td>
								<div>
									{createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
								</div>
							</td>
							<td class="font-mono text-center font-semibold">{orders - 1}</td>
							<td>
								<Icon icon="mdi:chevron-right" width={24} class="text-primary" />
							</td>
						</tr>
					{:else}
						<tr>
							<td colspan="8" class="text-center">No Users Found</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</Layout>

<UserDetailsModal id={userDetailsId} />
