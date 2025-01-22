<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Advanced PCB Capabilities"
	description="Explore our advanced PCB manufacturing capabilities for high-performance designs."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Advanced PCB Capabilities</h1>
		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we specialize in advanced PCB solutions that cater to
			the needs of modern electronics. From high-frequency applications to precision microelectronics, our advanced
			manufacturing capabilities ensure that your designs meet the highest performance standards.
		</p>
		<p class="text-gray-600 mb-8">
			We use cutting-edge technology and top-quality materials to produce PCBs that offer unparalleled reliability,
			accuracy, and speed, ensuring they are perfect for a wide range of industries like telecommunications, aerospace,
			automotive, and medical devices.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">High-Frequency PCBs</h2>
		<p class="text-gray-600 mb-4">
			For applications requiring superior signal integrity and minimal loss, our high-frequency PCBs are designed to
			handle frequencies up to 100 GHz, using materials such as Rogers and Teflon.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Materials: Rogers, Teflon, and other high-frequency substrates.</li>
			<li>Impedance control for stable signal transmission.</li>
			<li>Supports microwave and millimeter-wave applications.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">HDI (High-Density Interconnect) PCBs</h2>
		<p class="text-gray-600 mb-4">
			HDI PCBs are perfect for applications that need a compact form factor with high performance. These boards allow
			for the integration of more components in a smaller area, ideal for mobile devices, wearables, and IoT.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Microvias, via-in-pad, and stacked vias for dense designs.</li>
			<li>High precision and accuracy in layer alignment.</li>
			<li>Ideal for mobile devices, wearable tech, and IoT devices.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Flexible and Rigid-Flex PCBs</h2>
		<p class="text-gray-600 mb-4">
			Our flexible and rigid-flex PCBs are engineered for applications that require boards to bend, fold, or twist
			without compromising performance. These solutions are commonly used in wearable devices, complex aerospace
			applications, and more.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Available in single-sided, double-sided, and multilayer configurations.</li>
			<li>Custom shapes and sizes for unique designs.</li>
			<li>Supports extreme temperatures and harsh environments.</li>
		</ul>

		<p class="text-gray-600 mb-8">
			Our flexible PCBs offer high durability and flexibility, ensuring that your designs maintain integrity and
			performance even under challenging conditions.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Impedance-Controlled PCBs</h2>
		<p class="text-gray-600 mb-4">
			Impedance control is essential for high-speed circuits, where signal integrity is paramount. Our impedance-
			controlled PCBs maintain precise impedance values across the entire board, making them ideal for applications like
			data transmission and RF circuits.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Maintains precise impedance values for stable signal transmission.</li>
			<li>Ideal for high-speed digital and analog circuits.</li>
			<li>Used in applications such as 5G, data centers, and RF circuits.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Advanced Drilling and Via Technology</h2>
		<p class="text-gray-600 mb-4">
			Our drilling capabilities support complex designs, including microvias and blind vias, to create the high-
			precision holes needed for advanced PCBs. We also offer via-in-pad and stacked vias to meet the most demanding
			design requirements.
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Microvias as small as 0.1mm in diameter.</li>
			<li>Via-in-pad and blind/buried vias for complex designs.</li>
			<li>Drill hole tolerances as tight as ±0.05mm.</li>
		</ul>

		<p class="text-gray-600">
			These advanced drilling and via technologies ensure that every design, no matter how intricate, is produced with
			high precision, delivering reliable and functional PCBs for even the most demanding applications.
		</p>
	</div>
</Layout>
