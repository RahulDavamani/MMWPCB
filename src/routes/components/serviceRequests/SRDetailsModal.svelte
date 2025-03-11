<script lang="ts">
	import Modal from '../UI/Modal.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.services.requestQuote;

	let modalId = 'srDetailsModal';
	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number] | null;
	$: console.log(serviceRequest);
</script>

<Modal {modalId} title={$lg.common.moreDetails} boxClasses="max-w-lg w-full">
	{#if serviceRequest}
		{@const { company, firstName, lastName, email, phone, testingRequirements, antennaInfo } = serviceRequest}
		<div class="grid grid-cols-2 gap-x-6 gap-y-4">
			<div class="col-span-2">
				<div class="font-bold text-xs text-gray-500">{l.company}</div>
				<div>{company}</div>
			</div>
			<div>
				<div class="font-bold text-xs text-gray-500">{$lg.user.firstName}</div>
				<div>{firstName}</div>
			</div>
			<div>
				<div class="font-bold text-xs text-gray-500">{$lg.user.lastName}</div>
				<div>{lastName}</div>
			</div>
			<div>
				<div class="font-bold text-xs text-gray-500">{$lg.user.email}</div>
				<div class="break-words">{email}{email}</div>
			</div>
			<div>
				<div class="font-bold text-xs text-gray-500">{$lg.user.phone}</div>
				<div>{phone}</div>
			</div>
			<div class="col-span-2">
				<div class="font-bold text-xs text-gray-500">{l.testingRequirements}</div>
				<div>{testingRequirements}</div>
			</div>
		</div>

		{#if antennaInfo}
			<div class="divider" />
			{@const { connectorType, impedance, gender } = antennaInfo}
			<div>
				<div class="font-bold text-sm text-gray-500">{l.autPort}</div>
				<div class="grid grid-cols-3">
					<div>
						<div class="font-bold text-xs text-gray-500">{l.connectorType}</div>
						<div>{connectorType}</div>
					</div>
					<div>
						<div class="font-bold text-xs text-gray-500">{l.impedance}</div>
						<div>{impedance}</div>
					</div>
					<div>
						<div class="font-bold text-xs text-gray-500">{l.gender}</div>
						<div>{gender}</div>
					</div>
				</div>
			</div>
		{/if}
	{/if}
</Modal>
