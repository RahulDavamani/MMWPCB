<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Production Process"
	description="Overview of our comprehensive PCB production process from design to delivery."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Production Process</h1>

		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we take pride in offering a seamless and efficient PCB
			production process. From design to delivery, we prioritize precision, quality, and speed. Our production process
			is designed to meet the demands of high-performance applications while maintaining cost-effectiveness, even for
			low-volume runs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. Design & Review</h2>
		<p class="text-gray-600 mb-4">
			The first step in the production process is design verification. Once you submit your design files, our engineers
			conduct a thorough review to ensure all specifications are met. This includes checking the electrical properties,
			material choices, and design integrity. Any issues are flagged and resolved before moving forward, ensuring that
			there are no delays later in the process.
		</p>

		<p class="text-gray-600 mb-8">
			We work closely with our clients at this stage to address any questions or adjustments. Our team is dedicated to
			making sure that your design is ready for the next phase of production.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. PCB Fabrication</h2>
		<p class="text-gray-600 mb-4">
			Once the design is finalized, the PCB fabrication process begins. This is where the magic happens, as we turn your
			design into a physical product. Our advanced machinery ensures that every layer is accurately aligned, and copper
			is etched to perfection.
		</p>

		<p class="text-gray-600 mb-4">
			We use high-quality materials, including FR4, Rogers, and other specialized materials, to create robust,
			high-performance PCBs. Whether it's a single-layer board or a complex multi-layer structure, we ensure precision
			at every step.
		</p>

		<p class="text-gray-600 mb-8">
			Our fabrication process includes copper etching, drilling, lamination, and layer stacking, followed by a thorough
			inspection to ensure there are no defects before moving on to surface finishing.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Surface Finishing</h2>
		<p class="text-gray-600 mb-4">
			Once the PCB is fabricated, it undergoes surface finishing. This is a crucial step that determines the board's
			durability and solderability. Depending on your specifications, we offer various surface finishes such as ENIG,
			HASL, OSP, and more.
		</p>

		<p class="text-gray-600 mb-8">
			Each finish is carefully selected to meet the needs of your project, ensuring long-term reliability and
			performance. Our goal is to provide the best finish for your specific application, whether it’s for consumer
			electronics, medical devices, or industrial equipment.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Testing & Quality Control</h2>
		<p class="text-gray-600 mb-4">
			Quality control is a critical part of our production process. We perform comprehensive electrical and visual
			testing to detect any flaws or potential failures. Our automated testing systems check for electrical continuity,
			short circuits, and open circuits, while visual inspections ensure there are no defects in the board's physical
			structure.
		</p>

		<p class="text-gray-600 mb-8">
			Our stringent quality assurance process ensures that every PCB meets your design specifications and functions
			correctly. We also offer additional testing services, such as X-ray inspection for high-density designs and
			thermal cycling for components sensitive to temperature fluctuations.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Assembly & Integration</h2>
		<p class="text-gray-600 mb-4">
			For PCBs that require assembly, we offer full integration services. This includes component placement, soldering,
			and final assembly. Our automated pick-and-place machines ensure high-speed, precise component placement, and our
			skilled team handles any manual assembly work required.
		</p>

		<p class="text-gray-600 mb-8">
			We support both surface-mount and through-hole technology (THT) and offer additional services like component
			sourcing and stencil printing. Each assembly is carefully tested to ensure functionality before shipment.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Packaging & Shipping</h2>
		<p class="text-gray-600 mb-4">
			Once your PCBs are fabricated and assembled, they are carefully packaged to prevent any damage during shipping. We
			use high-quality packaging materials to ensure that your order arrives in perfect condition, regardless of its
			destination.
		</p>

		<p class="text-gray-600 mb-8">
			Our shipping department works with reliable carriers to ensure fast and secure delivery. You can track your order
			at every stage, and we offer various shipping options to meet your needs, whether you require express or standard
			shipping.
		</p>
	</div>
</Layout>
