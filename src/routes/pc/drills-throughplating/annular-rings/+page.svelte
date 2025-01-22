<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Annular Rings"
	description="Learn about Annular Rings in PCB design and their role in ensuring reliable electrical connections in PCBs."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Annular Rings</h1>

		<p class="text-gray-600 mb-6">
			Annular rings are a critical feature in PCB design, ensuring that the copper pad is properly connected to the via
			or hole. These rings, which form a circular band of copper around the hole, serve as the electrical connection
			between the inner layers of the PCB and the outer traces. They are crucial for maintaining signal integrity and
			ensuring reliable electrical performance.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">What are Annular Rings?</h2>
		<p class="text-gray-600 mb-4">
			An annular ring is the ring of copper that surrounds a drilled hole or via on a PCB. It ensures the mechanical
			integrity of the hole and provides a solid connection between layers. Annular rings are found in both through-hole
			and via designs and can vary in size depending on the design requirements of the PCB.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Importance of Annular Rings</h2>
		<p class="text-gray-600 mb-4">
			Annular rings play a crucial role in both the mechanical and electrical functionality of a PCB:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Electrical Connectivity:</strong> They form the connection between the copper traces and the via, ensuring
				a reliable signal path.
			</li>
			<li>
				<strong>Mechanical Integrity:</strong> Annular rings help hold the via in place, preventing any mechanical issues
				that could arise during handling, soldering, or use.
			</li>
			<li>
				<strong>Manufacturing Tolerance:</strong> The size and width of the annular ring must meet manufacturing tolerances
				to ensure both functionality and quality in the final product.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Design Considerations for Annular Rings</h2>
		<p class="text-gray-600 mb-4">
			When designing a PCB, special care must be taken to ensure that the annular ring is wide enough to meet both the
			electrical and mechanical needs of the design. If the annular ring is too narrow, the electrical connection may be
			weak, or the via may fail to connect properly. On the other hand, excessively wide annular rings can result in a
			larger board size, which could increase the cost.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Factors Affecting Annular Ring Width</h2>
		<p class="text-gray-600 mb-4">
			Several factors influence the appropriate width of the annular ring in a PCB design:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Drill Size:</strong> The diameter of the drill hole or via determines the minimum width required for the
				annular ring.
			</li>
			<li>
				<strong>Board Thickness:</strong> The thickness of the PCB can affect the required size of the annular ring, especially
				in multi-layer designs.
			</li>
			<li>
				<strong>Trace Width:</strong> The width of the surrounding traces can impact the size of the annular ring, as traces
				need to be sufficiently distant from the hole for reliable connections.
			</li>
			<li>
				<strong>Manufacturing Process:</strong> Different manufacturers may have different process tolerances, which will
				affect the allowable size of the annular ring.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Common Issues with Annular Rings</h2>
		<p class="text-gray-600 mb-4">
			Annular ring defects can lead to unreliable electrical connections, potentially causing failures or performance
			degradation. Some common issues include:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Incomplete Copper Coverage:</strong> If the copper ring does not completely surround the hole, it can lead
				to poor electrical connectivity.
			</li>
			<li>
				<strong>Excessive Ring Width:</strong> A very wide annular ring can cause issues during the manufacturing process,
				such as excess copper deposition or poor solderability.
			</li>
			<li>
				<strong>Annular Ring Collapse:</strong> In some cases, the copper ring can collapse due to poor manufacturing techniques,
				leading to weak or nonexistent connections.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Annular Rings?</h2>
		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we understand the importance of precise annular ring
			widths in PCB design. Our experienced team ensures that every PCB is manufactured with the highest quality
			standards, maintaining the integrity of your designs and ensuring reliable performance.
		</p>

		<p class="text-gray-600 mb-6">
			Contact us today to learn more about how we can help you with your PCB design needs, or get an instant quote for
			your project.
		</p>
	</div>
</Layout>
