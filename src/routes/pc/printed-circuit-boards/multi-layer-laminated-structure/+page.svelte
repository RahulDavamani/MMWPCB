<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Multi-Layer Laminated Structure"
	description="Explore our multi-layer laminated PCB structures designed for complex, high-performance applications."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Multi-Layer Laminated Structure</h1>
		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we specialize in multi-layer laminated PCB structures
			that offer unparalleled performance and reliability for high-density, complex circuit designs.
		</p>
		<p class="text-gray-600 mb-8">
			Our multi-layer PCBs are engineered for demanding applications, from high-speed digital circuits to RF
			communications, automotive, medical devices, and industrial electronics. These PCBs are ideal for projects that
			require a compact design without compromising performance.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">What are Multi-Layer Laminated PCBs?</h2>
		<p class="text-gray-600 mb-4">
			Multi-layer laminated PCBs are boards that consist of three or more conductive layers separated by insulating
			layers, which are bonded together under high heat and pressure. These layers are interconnected through vias to
			create complex circuit paths.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Three or more conductive layers for complex circuit designs.</li>
			<li>Insulating layers for better signal integrity and isolation.</li>
			<li>Efficient use of space for compact, high-density designs.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Key Features of Multi-Layer Laminated PCBs</h2>
		<p class="text-gray-600 mb-4">
			Multi-layer laminated PCBs provide numerous advantages, including enhanced circuit density, improved signal
			integrity, and better electrical performance. These features make them a perfect choice for high-frequency and
			high-speed applications.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Improved signal integrity and reduced electromagnetic interference (EMI).</li>
			<li>Supports high-frequency and high-speed circuit designs.</li>
			<li>Compact and lightweight for space-constrained applications.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Design Considerations</h2>
		<p class="text-gray-600 mb-4">
			Designing a multi-layer PCB requires careful consideration of layer stacking, signal integrity, power management,
			and thermal management. Our experienced team ensures that every design is optimized for the highest performance
			and reliability.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Careful planning of signal layer placement to avoid interference.</li>
			<li>Power and ground planes for better current distribution and noise reduction.</li>
			<li>Thermal management to ensure proper heat dissipation.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Multi-Layer Laminated PCBs</h2>
		<p class="text-gray-600 mb-4">
			These advanced PCBs are widely used in industries that require high-density designs, such as telecommunications,
			automotive, medical, and aerospace sectors. Their versatility makes them suitable for a variety of applications,
			from consumer electronics to complex industrial systems.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Telecommunications: Used in RF and high-frequency circuits.</li>
			<li>Automotive: Essential for advanced control systems and sensors.</li>
			<li>Medical: Ideal for compact, reliable devices like pacemakers and diagnostic equipment.</li>
			<li>Aerospace: Used in satellites, avionics, and other space systems.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose Our Multi-Layer Laminated PCBs?</h2>
		<p class="text-gray-600 mb-4">
			At MMWPCB, we provide high-quality multi-layer laminated PCBs that meet your specific design requirements,
			delivering exceptional performance, durability, and reliability. Our state-of-the-art manufacturing process
			ensures every board is crafted with precision and attention to detail.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Top-tier manufacturing process for precision and accuracy.</li>
			<li>Rigorous testing and quality control for every board.</li>
			<li>Fast turnaround times and flexible design support to meet deadlines.</li>
		</ul>

		<p class="text-gray-600">
			Whether you're working on a high-speed digital circuit or an intricate aerospace project, our multi-layer
			laminated PCBs provide the reliability and performance you need to bring your designs to life.
		</p>
	</div>
</Layout>
