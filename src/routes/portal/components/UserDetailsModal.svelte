<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Modal from '../../components/UI/Modal.svelte';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import Loader from '../../components/UI/Loader.svelte';
	import Icon from '@iconify/svelte';
	import OrdersList from '../../components/OrdersList.svelte';

	let modalId = 'userDetailsModal';

	export let id: string | undefined;
	let user: RouterOutput['user']['get'] | undefined;

	const fetchUser = async () => {
		if (!id) return;
		user = undefined;
		user = await trpc()
			.user.get.query({ id })
			.catch((e) => tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to Fetch' } }));
	};

	onMount(async () => onShowModal(modalId, fetchUser));
</script>

<Modal {modalId} title="User Details" boxClasses="max-w-6xl w-full">
	{#if !user}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		{@const {
			id,
			createdAt,
			firstName,
			lastName,
			email,
			phone,
			profilePic,
			role,
			_count: { orders }
		} = user}
		<div class="flex gap-10 px-5">
			<div class="mask mask-circle h-40 w-40 {!profilePic && 'bg-neutral p-1'}">
				{#if profilePic}
					<img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Profile" />
				{:else}
					<Icon icon="mdi:person" width={150} class="text-white" />
				{/if}
			</div>
			<div class="grow grid grid-cols-2">
				<div>
					<div class="text-lg font-semibold leading-5 mt-1">
						{id}
					</div>
					<div class="text-xs opacity-75 font-semibold">User ID</div>
				</div>
				<div>
					<div class="text-lg font-semibold leading-5 mt-1">
						{createdAt.toUTCString()}
					</div>
					<div class="text-xs opacity-75 italic">Created At</div>
				</div>
				<div>
					<div class="text-lg font-semibold leading-5 mt-1">
						{firstName}
					</div>
					<div class="text-xs opacity-75 italic">First Name</div>
				</div>
				<div>
					<div class="text-lg font-semibold leading-5 mt-1">
						{lastName}
					</div>
					<div class="text-xs opacity-75 italic">Last Name</div>
				</div>
				<div>
					<div class="text-lg font-semibold leading-5 mt-1">
						{email}
					</div>
					<div class="text-xs opacity-75 italic">Email</div>
				</div>
				<div>
					<div class="text-lg font-semibold leading-5 mt-1">
						{phone.length > 0 ? phone : '-'}
					</div>
					<div class="text-xs opacity-75 italic">Phone</div>
				</div>
			</div>
		</div>

		<div class="divider" />
		<div class="text-xl font-semibold">Orders:</div>
		<div class="my-4">
			<OrdersList userId={id} isPortal={true} />
		</div>
	{/if}
</Modal>
