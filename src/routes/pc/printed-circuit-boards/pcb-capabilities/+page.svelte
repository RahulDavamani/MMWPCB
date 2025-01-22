<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Capabilities"
	description="PCB Production fabrication and pcb assembly capabilities."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Capabilities</h1>
		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we offer a wide range of PCB manufacturing solutions
			to cater to diverse project requirements. Whether you need standard PCBs, advanced high-frequency boards, or
			custom prototypes, we've got you covered.
		</p>
		<p class="text-gray-600 mb-8">
			Our state-of-the-art facilities and experienced team ensure that we deliver top-quality products with precision
			and speed. Below is an overview of our capabilities and features that make us stand out.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Manufacturing Capabilities</h2>
		<p class="text-gray-600 mb-4">
			Our manufacturing capabilities are designed to meet the most demanding requirements of today's electronics
			industry. From single-layer boards to complex multilayer designs, we deliver with consistency and accuracy.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Layer count: Single-layer, double-layer, and multilayer PCBs (up to 20 layers).</li>
			<li>Board thickness: 0.2mm to 6.0mm.</li>
			<li>Material types: FR4, Rogers, Aluminum, High-TG, and more.</li>
			<li>Copper thickness: 0.5oz to 6oz.</li>
			<li>Minimum trace width/spacing: 3mil/3mil.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Surface Finishing</h2>
		<p class="text-gray-600 mb-4">
			We provide a variety of surface finishing options to meet the specific needs of your design. These finishes not
			only improve the durability of your PCBs but also ensure optimal solderability and performance.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>HASL (Lead-Free or Leaded)</li>
			<li>ENIG (Electroless Nickel Immersion Gold)</li>
			<li>OSP (Organic Solderability Preservative)</li>
			<li>Immersion Silver/Immersion Tin</li>
			<li>Gold Finger Plating</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Drilling Capabilities</h2>
		<p class="text-gray-600 mb-4">
			Drilling precision is critical for creating reliable connections in your PCB. Our advanced drilling techniques
			ensure accuracy, even for the most intricate designs.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Minimum drill hole size: 0.15mm.</li>
			<li>Blind and buried vias supported.</li>
			<li>Via filling options: Conductive, non-conductive, and copper-filled.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Special Features</h2>
		<p class="text-gray-600 mb-4">
			We go beyond standard PCB manufacturing to offer features that enable cutting-edge designs. Whether you're
			developing flexible PCBs for wearable tech or HDI boards for advanced electronics, we can support your vision.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Flexible PCBs and rigid-flex PCBs available.</li>
			<li>Impedance-controlled PCBs.</li>
			<li>High-frequency material handling (e.g., Rogers).</li>
			<li>HDI designs with microvias and via-in-pad.</li>
		</ul>

		<p class="text-gray-600">With our advanced manufacturing processes and s</p>
	</div></Layout
>
