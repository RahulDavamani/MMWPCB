<script lang="ts">
	import Layout from '../../components/layout/Layout.svelte';
	import PCBCapabilitiesBanner from '$lib/assets/pcb-capabilities-banner.png';
	import Icon from '@iconify/svelte';
</script>

<Layout pageTitle="PCB Capabilities">
	<div slot="top-main">
		<div style="background-color: #17191e;">
			<div class="container mx-auto flex justify-start items-center">
				<div class="absolute text-accent">
					<div class="font-semibold text-2xl mb-1">PCB Capabilities</div>
					<div class="mb-2">PCB Production fabrication and pcb assembly capabilities.</div>
					<div class="btn btn-sm btn-outline btn-accent">Instant Quote & Order Online</div>
				</div>
				<img src={PCBCapabilitiesBanner} alt="PCB Capabilities Banner" />
			</div>
		</div>
	</div>

	<div>
		<div class="flex gap-10">
			<div class="join join-vertical rounded-none w-[32rem]">
				<button class="btn join-item justify-between">
					PCB Capabilities
					<Icon icon="mdi:menu" width={24} />
				</button>
				<button class="btn btn-primary join-item justify-between">
					PCB Capabilities
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
				<button class="btn join-item justify-between">
					Advanced PCB Capabilities
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
				<button class="btn join-item justify-between">
					Multi-Layer Laminated Structure
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
				<button class="btn join-item justify-between">
					Quick Turn PCB Fabrication
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
				<button class="btn join-item justify-between">
					PCB Prototyping
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
				<button class="btn join-item justify-between">
					Low-volume Production
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
				<button class="btn join-item justify-between">
					Production Process
					<Icon icon="mdi:chevron-right" width={24} />
				</button>
			</div>
			<div class="space-y-4">
				<div class="font-semibold text-2xl">We Offer a Wide Range of PCB Capabilities to Fit All of Your PCB needs</div>
				<div>
					MMWPCB is a professional quick-turn PCB prototyping, PCB Assembly and low-volume production manufacturer
					located in Shenzhen China. (3 major PCBs and 2 PCB Assembly production).
				</div>
				<div>
					The information below details some of the key capabilities that MMWPCB can offer and support today. You will
					find information here relating to the specific materials we can support, the PCB technologies or product types
					that we currently produce, as well as some of the tolerances which we can achieve.
				</div>
				<div>
					The first category is what we call "Quick-turn" which means we can offer Small Quantity - Quick Turn PCBs,
					Custom Spec - Standard PCBs, and Quick-order PCBs (Gerber Viewer).
				</div>
				<div>
					The second is our “Advanced” offering and this shows the very best that MMWPCB can offer: Full Spec PCBs,
					Highly Specialized Precision PCBs, & Large Scale Production, but sometimes some plates and materials are
					temporarily out of stock.
				</div>
				<div class="overflow-x-auto">
					<table class="table mt-2">
						<thead>
							<tr class="bg-info">
								<th>Items</th>
								<th></th>
								<th>Manufacturing Capabilities</th>
								<th>Remarks</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Number of Layers</td>
								<td>-</td>
								<td>1-10 layers</td>
								<td>For orders above 10 layers,please view the below "Standard PCB" or contact our sales rep.</td>
							</tr>
							<tr>
								<td>Number of Layers</td>
								<td>-</td>
								<td>1-10 layers</td>
								<td>For orders above 10 layers,please view the below "Standard PCB" or contact our sales rep.</td>
							</tr>
							<tr>
								<td>Number of Layers</td>
								<td>-</td>
								<td>1-10 layers</td>
								<td>For orders above 10 layers,please view the below "Standard PCB" or contact our sales rep.</td>
							</tr>
							<tr>
								<td>Number of Layers</td>
								<td>-</td>
								<td>1-10 layers</td>
								<td>For orders above 10 layers,please view the below "Standard PCB" or contact our sales rep.</td>
							</tr>
							<tr>
								<td>Number of Layers</td>
								<td>-</td>
								<td>1-10 layers</td>
								<td>For orders above 10 layers,please view the below "Standard PCB" or contact our sales rep.</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</Layout>
