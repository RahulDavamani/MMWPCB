<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Surface Finish"
	description="Explore the different surface finishes available for PCBs."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Surface Finish</h1>

		<p class="text-gray-600 mb-6">
			Surface finish plays a crucial role in the performance, durability, and solderability of your PCB. At <span
				class="text-blue-600 font-semibold">MMWPCB</span
			>, we offer a variety of surface finishes to meet the specific needs of your design and application.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Surface Finish Matters</h2>
		<p class="text-gray-600 mb-4">
			The surface finish directly impacts how well components solder to the PCB, ensuring good electrical connections
			and long-term reliability. Additionally, the choice of finish affects the board's resistance to oxidation and
			corrosion, making it an important consideration for various industries.
		</p>
		<p class="text-gray-600 mb-4">
			For designs that require precise soldering and high-performance capabilities, choosing the right surface finish is
			essential to avoid costly issues down the road.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Common Surface Finishes</h2>
		<p class="text-gray-600 mb-4">
			We offer a range of surface finishes to meet different needs. The most common finishes include:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>HASL (Hot Air Solder Leveling)</strong>: A cost-effective and widely used finish, ideal for general
				applications. Available in both leaded and lead-free versions.
			</li>
			<li>
				<strong>ENIG (Electroless Nickel Immersion Gold)</strong>: A premium finish that provides excellent
				solderability and resistance to oxidation. Ideal for high-end, high-reliability applications like medical
				devices and aerospace electronics.
			</li>
			<li>
				<strong>OSP (Organic Solderability Preservative)</strong>: A green finish that protects copper from oxidation,
				offering a smooth surface for soldering. It’s an environmentally friendly option.
			</li>
			<li>
				<strong>Immersion Silver</strong>: This finish offers excellent flatness and good electrical performance,
				suitable for high-speed applications.
			</li>
			<li>
				<strong>Immersion Tin</strong>: A lead-free option that offers good solderability and low cost, commonly used
				for simple applications.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Choosing the Right Surface Finish</h2>
		<p class="text-gray-600 mb-4">
			Selecting the correct surface finish for your PCB depends on several factors, including the type of components
			you’ll be using, the environment in which the PCB will operate, and the overall performance requirements.
		</p>
		<p class="text-gray-600 mb-4">
			For example, if your board will be exposed to harsh environmental conditions or requires high-frequency
			performance, finishes like ENIG or Immersion Silver are often the best choice. On the other hand, for low-cost,
			high-volume projects, HASL is a reliable option.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considerations for Selecting Surface Finish</h2>
		<p class="text-gray-600 mb-4">When selecting the right surface finish for your PCB, consider the following:</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Solderability:</strong> The surface finish should provide a smooth surface that ensures reliable soldering.
			</li>
			<li>
				<strong>Oxidation Resistance:</strong> The finish should protect the PCB from corrosion and environmental factors,
				extending the board’s lifespan.
			</li>
			<li>
				<strong>Environmental Factors:</strong> Consider the environment your PCB will be used in (e.g., automotive, medical)
				and choose a finish that can handle those conditions.
			</li>
			<li>
				<strong>Cost Considerations:</strong> Some finishes are more expensive than others. Balance your design requirements
				with your budget.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
		<p class="text-gray-600 mb-4">
			Choosing the right surface finish for your PCB ensures its reliability, longevity, and functionality. At <span
				class="text-blue-600 font-semibold">MMWPCB</span
			>, we offer a wide range of surface finishes to suit your specific needs, whether you’re working on a simple
			consumer device or a complex, high-performance application.
		</p>
		<p class="text-gray-600 mb-4">
			Contact us today for assistance with selecting the optimal surface finish for your PCB project.
		</p>
	</div>
</Layout>
