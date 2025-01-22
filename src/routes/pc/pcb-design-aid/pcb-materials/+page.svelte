<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Materials"
	description="Explore the various materials used in PCB design and fabrication."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Materials</h1>

		<p class="text-gray-600 mb-6">
			When designing a printed circuit board (PCB), the choice of materials plays a significant role in determining the
			performance, durability, and cost of the final product. At <span class="text-blue-600 font-semibold">MMWPCB</span
			>, we offer a wide range of high-quality materials suited for different applications.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. FR4 – The Standard</h2>
		<p class="text-gray-600 mb-4">
			FR4 is the most commonly used material for PCB fabrication. It’s a composite made of woven fiberglass and epoxy
			resin, known for its reliability, cost-effectiveness, and electrical insulation properties. FR4 is the material of
			choice for most consumer electronics and general-purpose PCBs.
		</p>
		<p class="text-gray-600 mb-4">
			While it provides excellent performance for low-frequency applications, it may not be suitable for high-frequency
			or high-speed applications. However, for most standard PCBs, FR4 is an excellent balance of performance and cost.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. High-TG Materials</h2>
		<p class="text-gray-600 mb-4">
			High-TG (glass transition temperature) materials are designed for applications that involve higher temperatures.
			They have a higher resistance to heat compared to standard FR4, making them ideal for high-performance and
			high-frequency designs. High-TG materials are commonly used in industries like automotive, telecommunications, and
			aerospace.
		</p>
		<p class="text-gray-600 mb-4">
			Using high-TG materials ensures better thermal stability, allowing the PCB to withstand the stresses of heat
			during soldering and in operational conditions.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Rogers – High-Frequency Applications</h2>
		<p class="text-gray-600 mb-4">
			Rogers is a brand known for its high-frequency laminates, making it the material of choice for RF (radio
			frequency) and microwave applications. These materials provide superior electrical performance at high
			frequencies, ensuring minimal signal loss and reduced electromagnetic interference (EMI).
		</p>
		<p class="text-gray-600 mb-4">
			Rogers materials are ideal for applications like satellite communications, radar systems, and 5G technology, where
			maintaining signal integrity at high speeds is crucial.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Flexible PCB Materials</h2>
		<p class="text-gray-600 mb-4">
			For designs that require bending, flexing, or conforming to tight spaces, flexible PCB materials are the solution.
			These materials are often made from polyimide or other flexible polymers that allow the PCB to bend without
			damaging the circuit.
		</p>
		<p class="text-gray-600 mb-4">
			Flexible PCBs are widely used in wearables, medical devices, and automotive applications, where space is limited,
			and flexibility is key.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Aluminum PCBs</h2>
		<p class="text-gray-600 mb-4">
			Aluminum PCBs are designed for applications that require excellent heat dissipation. The aluminum base allows for
			better thermal conductivity, making these materials suitable for power electronics, LED lighting, and automotive
			systems.
		</p>
		<p class="text-gray-600 mb-4">
			They are especially useful in applications where the PCB needs to handle high power and maintain performance at
			higher temperatures.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Polyimide Materials</h2>
		<p class="text-gray-600 mb-4">
			Polyimide materials are high-performance polymers known for their excellent thermal stability and resistance to
			harsh chemicals. They are widely used in high-temperature and high-performance applications, such as aerospace and
			military electronics.
		</p>
		<p class="text-gray-600 mb-4">
			Polyimide-based PCBs are ideal for extreme environments and are known for their durability and resilience, even
			under challenging conditions.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. CEM1 and CEM3 Materials</h2>
		<p class="text-gray-600 mb-4">
			CEM1 and CEM3 are composite materials used in PCBs. CEM1 is a single-sided laminate, while CEM3 is a more commonly
			used double-sided laminate material. Both materials are more affordable alternatives to FR4 and offer good
			electrical insulation properties.
		</p>
		<p class="text-gray-600 mb-4">
			CEM1 is often used for basic designs, while CEM3 is used for designs requiring double-sided PCBs, though both
			materials may not offer the same performance as FR4 in demanding applications.
		</p>

		<p class="text-gray-600">
			Choosing the right material for your PCB depends on your specific requirements, including performance,
			environmental conditions, and budget. At <span class="text-blue-600 font-semibold">MMWPCB</span>, we provide
			high-quality materials that suit a wide range of applications, from everyday consumer electronics to cutting-edge
			high-frequency designs.
		</p>
	</div>
</Layout>
