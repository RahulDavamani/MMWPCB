<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Mixed Assembly Advantages"
	description="Discover the benefits of mixed PCB assembly, combining both surface-mount and through-hole technologies."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Mixed Assembly Advantages</h1>

		<p class="text-gray-600 mb-4">
			Mixed assembly involves the use of both Surface-Mount Technology (SMT) and Through-Hole Technology (THT) within a
			single PCB assembly process. This combination offers distinct advantages for creating efficient, high-performance
			boards suited for a wide range of applications.
		</p>

		<p class="text-gray-600 mb-8">
			By merging the benefits of both technologies, mixed assembly can produce designs that maximize the advantages of
			each, allowing for better functionality, cost-efficiency, and flexibility in production.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Optimized Performance</h2>
		<p class="text-gray-600 mb-4">
			Mixed assembly ensures the optimal performance of your PCB by utilizing SMT for compactness and precision, while
			incorporating THT for strength and reliability. This combination allows your design to benefit from the best of
			both worlds.
		</p>
		<p class="text-gray-600 mb-4">
			For example, SMT components are ideal for high-density designs with smaller footprints, while THT components
			provide strong mechanical connections that are well-suited for components that experience high stress or require
			better heat dissipation.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cost-Effective and Flexible Design</h2>
		<p class="text-gray-600 mb-4">
			Utilizing both SMT and THT enables cost savings without sacrificing quality. You can reduce the number of
			components that require more expensive THT by replacing them with SMT, thereby lowering overall assembly costs.
		</p>
		<p class="text-gray-600 mb-4">
			This flexibility allows your design to adapt to different requirements without needing multiple production runs or
			complicated redesigns. Whether you're working on a prototype or full-scale production, mixed assembly is a
			practical choice.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Reliability and Durability</h2>
		<p class="text-gray-600 mb-4">
			One of the biggest advantages of mixed assembly is the improved durability and reliability of the final product.
			THT components are more robust and are ideal for applications that involve higher mechanical stresses or need to
			be mounted in harsher environments.
		</p>
		<p class="text-gray-600 mb-4">
			SMT components, on the other hand, offer excellent electrical performance and compactness, making them ideal for
			high-performance applications where space is at a premium.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Improved Production Speed</h2>
		<p class="text-gray-600 mb-4">
			Mixed assembly can also improve production efficiency. SMT components are placed quickly and accurately using
			automated pick-and-place machines, while THT components can be inserted and soldered in parallel, reducing overall
			assembly time.
		</p>
		<p class="text-gray-600 mb-4">
			This parallel processing streamlines the production process and can lead to faster turnarounds, especially for
			complex designs that require both technologies.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Wide Application Range</h2>
		<p class="text-gray-600 mb-4">
			Combined SMT and THT technologies are often used in a variety of industries, such as automotive, medical devices,
			consumer electronics, and industrial control systems. The ability to meet the diverse needs of these industries
			while maintaining performance and durability makes mixed assembly an excellent choice for versatile designs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose Mixed Assembly?</h2>
		<p class="text-gray-600 mb-4">
			Mixed assembly allows for a balanced approach to both cost and performance. It helps designers and manufacturers
			optimize their production by combining the benefits of both SMT and THT technologies. This leads to boards that
			are both high-performing and reliable, without unnecessary complexity or cost.
		</p>
		<p class="text-gray-600 mb-4">
			With mixed assembly, you can achieve the right combination of precision, strength, and cost-efficiency for your
			PCB projects. Whether you’re in need of high-density circuit boards or ruggedized products, mixed assembly has the
			flexibility to meet your needs.
		</p>
	</div>
</Layout>
