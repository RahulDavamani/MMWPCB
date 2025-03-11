<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import FormControl from '../../components/FormControl.svelte';
	import Modal from '../../components/UI/Modal.svelte';
	import { onMount } from 'svelte';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { customAlphabet } from 'nanoid';
	import Loader from '../../components/UI/Loader.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import { services } from '../../../stores/service.store';

	$: l = $lg.services.requestQuote;

	let modalId = 'requestQuoteModal';
	export let serviceCode: string;
	$: isAntennaTestSystems = Object.keys($services.antennaTestSystems.services).includes(serviceCode);

	let quote: {
		company: string;
		firstName: string;
		lastName: string;
		email: string;
		phone: string;
		testingRequirements: string;
		antennaInfo?: {
			connectorType: string;
			impedance: number;
			gender: string;
		};
	} = {
		company: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		testingRequirements: ''
	};

	onMount(() =>
		onShowModal(modalId, () => {
			const user = ($page.data as PageData).user!;
			quote = {
				company: '',
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				phone: user.phone,
				testingRequirements: '',
				antennaInfo: isAntennaTestSystems
					? {
							connectorType: 'N',
							impedance: 50,
							gender: 'Male'
						}
					: undefined
			};
			serviceId = null;
			loading = false;
		})
	);

	let loading = false;
	let serviceId: string | null = null;

	$: error = {
		company: !quote.company.length ? l.companyError : undefined,
		firstName: !quote.firstName.length ? l.firstNameError : undefined,
		lastName: !quote.lastName.length ? l.lastNameError : undefined,
		email:
			!quote.email.length || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(quote.email)
				? l.emailError
				: undefined,
		phone: !quote.phone.length ? l.phoneError : undefined
	};
	$: btnDisabled = Object.values(error).filter(Boolean).length !== 0;

	const requestQuote = async () => {
		loading = true;
		const id = customAlphabet('1234567890', 10)();
		const data = await trpc()
			.service.create.mutate({ id, serviceCode, ...quote })
			.catch((e) =>
				tce(e, {
					showModal: { title: l.requestError, retryFn: requestQuote },
					callback: () => (loading = false)
				})
			);

		serviceId = data.id;
		loading = false;
	};

	const autConnectorTypes = {
		N: {
			connectorType: 'N',
			impedances: [50, 75],
			refDrawing: 'https://www.digikey.hk/zht/models/13535429'
		},
		BNC: {
			connectorType: 'BNC',
			impedances: [50, 75],
			refDrawing: 'https://s3-us-west-2.amazonaws.com/catsy.582/112424.pdf'
		},
		TNC: {
			connectorType: 'TNC',
			impedances: [50],
			refDrawing: 'https://s3-us-west-2.amazonaws.com/catsy.582/122408.pdf'
		},
		SMA: {
			connectorType: 'SMA',
			impedances: [50],
			refDrawing: 'https://app.adam-tech.com/products/download/data_sheet/219105/rf2-04a-t-00-50-g-data-sheet.pdf'
		},
		SMB: {
			connectorType: 'SMB',
			impedances: [50, 75],
			refDrawing: 'https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/6535/0731000207.pdf'
		},
		SMC: {
			connectorType: 'SMC',
			impedances: [50],
			refDrawing: 'https://s3-us-west-2.amazonaws.com/catsy.582/152119.pdf'
		},
		'1mm': {
			connectorType: '1mm',
			impedances: [50],
			refDrawing: 'https://www.digikey.hk/zht/models/13573678'
		},
		'1.85mm': {
			connectorType: '1.85mm',
			impedances: [50],
			refDrawing: 'https://www.digikey.hk/zht/models/9094460'
		},
		'2.4mm': {
			connectorType: '2.4mm',
			impedances: [50],
			refDrawing: 'https://www.digikey.hk/zht/models/6164043'
		},
		'2.92mm': {
			connectorType: '2.92mm',
			impedances: [50],
			refDrawing: 'https://www.digikey.hk/zht/models/17284017'
		},
		'3.5mm': {
			connectorType: '3.5mm',
			impedances: [50],
			refDrawing: 'https://mm.digikey.com/Volume0/opasdata/d220001/medias/docus/497/TMB-V5F2-3L1.pdf'
		},
		SSMA: {
			connectorType: 'SSMA',
			impedances: [50],
			refDrawing: 'https://www.digikey.hk/zht/models/2339087'
		},
		SSMB: {
			connectorType: 'SSMB',
			impedances: [50],
			refDrawing: 'https://radiall-files.s3.amazonaws.com/tds/coaxialconnectors/7405-1521-002.PDF'
		},
		SSMC: {
			connectorType: 'SSMC',
			impedances: [50],
			refDrawing: 'https://radiall-files.s3.amazonaws.com/tds/coaxialconnectors/7009-1511-050.PDF'
		}
	} as { [key: string]: { connectorType: string; impedances: number[]; refDrawing: string } };
</script>

<Modal {modalId} title={l.title} boxClasses="max-w-3xl w-full" dividerClasses="mb-2" modalBackdrop={false}>
	{#if loading}
		<Loader title={l.submittingRequest} fixed={false} overlay={false} size={80} classes="mt-10" />
	{:else if serviceId}
		<div class="flex flex-col items-center mt-8 mb-6">
			<Icon icon="mdi:check-decagram" width={80} class="text-success mb-4" />
			<div>{l.serviceRequestNo}: <span class="font-semibold font-mono">#{serviceId}</span></div>
			<div>{l.requestSuccess}</div>
			<div class="flex justify-center gap-4 mt-6">
				<button on:click={() => closeModal(modalId)} class="btn btn-error w-60">{$lg.common.close}</button>
				<a href="/service-requests" class="btn btn-primary w-60">{l.viewServiceRequests}</a>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-2 gap-x-10">
			<FormControl label={l.company} classes="col-span-2" error={error.company}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.company && 'input-error'}"
					bind:value={quote.company}
				/>
			</FormControl>
			<FormControl label={$lg.user.firstName} error={error.firstName}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.firstName && 'input-error'}"
					bind:value={quote.firstName}
				/>
			</FormControl>
			<FormControl label={$lg.user.lastName} error={error.lastName}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.lastName && 'input-error'}"
					bind:value={quote.lastName}
				/>
			</FormControl>
			<FormControl label={$lg.user.email} error={error.email}>
				<input
					type="email"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.email && 'input-error'}"
					bind:value={quote.email}
				/>
			</FormControl>
			<FormControl label={$lg.user.phone} error={error.phone}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.phone && 'input-error'}"
					bind:value={quote.phone}
				/>
			</FormControl>
			<FormControl label={l.testingRequirements} classes="col-span-2">
				<textarea
					class="textarea textarea-bordered"
					placeholder={$lg.common.typeHere}
					rows="3"
					bind:value={quote.testingRequirements}
				/>
			</FormControl>
		</div>

		{#if isAntennaTestSystems && quote.antennaInfo}
			<div class="mt-4">
				<div class="font-semibold">{l.autPort}</div>
				<div class="grid grid-cols-4 mt-4 gap-x-10">
					<FormControl label={l.connectorType} classes="col-span-3">
						<select class="select select-bordered" bind:value={quote.antennaInfo.connectorType}>
							{#each Object.values(autConnectorTypes) as { connectorType: value }}
								<option {value}>{value}</option>
							{/each}
						</select>
					</FormControl>

					<div class="flex items-end">
						<a
							href={autConnectorTypes[quote.antennaInfo.connectorType].refDrawing}
							target="_blank"
							class="btn btn-primary"
						>
							View Ref Drawing
						</a>
					</div>

					<FormControl label={l.impedance} classes="col-span-2">
						<select class="select select-bordered" bind:value={quote.antennaInfo.impedance}>
							{#each autConnectorTypes[quote.antennaInfo.connectorType].impedances as value}
								<option {value}>{value}</option>
							{/each}
						</select>
					</FormControl>

					<FormControl label={l.gender} classes="col-span-2">
						<select class="select select-bordered" bind:value={quote.antennaInfo.gender}>
							{#each ['Male', 'Female'] as value}
								<option {value}>{value}</option>
							{/each}
						</select>
					</FormControl>
				</div>
			</div>
		{/if}

		<button class="btn btn-secondary w-full mt-8 {btnDisabled && 'btn-disabled'}" on:click={requestQuote}>
			{l.title}
		</button>
	{/if}
</Modal>
