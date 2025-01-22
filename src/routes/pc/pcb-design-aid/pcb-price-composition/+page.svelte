<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Price Composition"
	description="Understanding the key factors influencing PCB pricing."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Price Composition</h1>

		<p class="text-gray-600 mb-6">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we aim to provide competitive pricing for your PCB
			needs. However, pricing can vary based on multiple factors that influence the cost of manufacturing. Understanding
			the composition of PCB pricing can help you make more informed decisions and optimize your design for
			cost-effective solutions.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Material Costs</h2>
		<p class="text-gray-600 mb-4">
			One of the largest components of PCB pricing is the material cost. The choice of materials for your PCB
			significantly impacts the overall cost. Common materials such as FR4 are more affordable, while advanced materials
			like Rogers, Teflon, or high-frequency substrates tend to be more expensive.
		</p>
		<p class="text-gray-600 mb-4">
			In addition to the base material, the thickness of the board and the type of copper used also contribute to the
			material cost. Higher copper thickness or specialized materials can increase the production price, but they also
			provide enhanced performance and durability for specific applications.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Layer Count</h2>
		<p class="text-gray-600 mb-4">
			PCBs with more layers are more complex to fabricate and therefore incur higher costs. A simple two-layer PCB will
			be significantly less expensive than a 10-layer design due to the additional complexity of drilling, routing, and
			layer alignment.
		</p>
		<p class="text-gray-600 mb-4">
			Each additional layer adds cost not only in material but also in the manufacturing process. High-layer count
			designs typically require more time for preparation, testing, and assembly, which reflects in the final price.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Board Size</h2>
		<p class="text-gray-600 mb-4">
			The overall size of the PCB is another determining factor for its price. Larger PCBs require more materials and
			take more time to fabricate, which leads to higher costs. If your design can be optimized to fit into smaller
			sizes, it can significantly reduce the price of the board.
		</p>
		<p class="text-gray-600 mb-4">
			Smaller boards are also more efficient to handle in the manufacturing process, and typically result in reduced
			assembly and labor costs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Complexity of the Design</h2>
		<p class="text-gray-600 mb-4">
			PCB complexity plays a major role in determining the cost. Designs with complex traces, smaller component
			placement, intricate via patterns, or multi-layer routing all increase the time and resources needed to
			manufacture the PCB.
		</p>
		<p class="text-gray-600 mb-4">
			Highly complex boards require specialized equipment and additional testing, which ultimately adds to the
			production cost. While simplifying your design can reduce costs, it’s important to balance cost with the board’s
			functional requirements.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Surface Finish</h2>
		<p class="text-gray-600 mb-4">
			The type of surface finish you choose for your PCB impacts the cost significantly. Standard finishes such as HASL
			(Hot Air Solder Leveling) are generally less expensive, while finishes like ENIG (Electroless Nickel Immersion
			Gold) are more costly due to their superior performance, durability, and solderability.
		</p>
		<p class="text-gray-600 mb-4">
			High-end finishes may also require additional processes like cleaning or more precise plating, which increases the
			overall price of the PCB.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Drilling and Vias</h2>
		<p class="text-gray-600 mb-4">
			Drilling and via creation contribute significantly to the cost of a PCB. The number and type of vias—whether they
			are through-hole, blind, or buried—add both material and labor costs.
		</p>
		<p class="text-gray-600 mb-4">
			Smaller vias or high-density interconnects (HDI) increase costs due to the additional precision required. Blind
			and buried vias, though essential for complex multi-layer designs, require more advanced manufacturing processes,
			further driving up the cost.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Quantity of PCBs Ordered</h2>
		<p class="text-gray-600 mb-4">
			Quantity is a key factor in pricing: the more units you order, the lower the per-unit cost. This is because setup
			costs (such as tool preparation and material procurement) are spread across a larger number of boards. Ordering in
			bulk allows manufacturers to optimize their production process and reduce costs.
		</p>
		<p class="text-gray-600 mb-4">
			For low-volume orders, you may find that individual board prices are higher due to the inability to capitalize on
			these economies of scale.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Lead Time</h2>
		<p class="text-gray-600 mb-4">
			Lead time is another critical element that affects pricing. Fast turn-around times or rush orders require
			expedited processes, and this often means paying a premium for priority manufacturing.
		</p>
		<p class="text-gray-600 mb-4">
			If you have a flexible timeline, opting for standard lead times will generally result in a more cost-effective
			PCB. However, for projects with tight deadlines, paying for quicker fabrication and shipping may be necessary.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Testing and Quality Control</h2>
		<p class="text-gray-600 mb-4">
			PCB testing and quality control ensure that the manufactured boards meet the necessary standards and function as
			intended. While basic electrical testing might be included, more complex tests such as flying probe testing, x-ray
			inspection, or optical inspection may increase costs.
		</p>
		<p class="text-gray-600 mb-4">
			Investing in thorough testing can help avoid costly failures later on, particularly for high-reliability
			applications like medical or aerospace devices.
		</p>

		<p class="text-gray-600">
			Understanding the factors that influence PCB pricing allows you to make informed decisions based on your design,
			budget, and timeline. At <span class="text-blue-600 font-semibold">MMWPCB</span>, we are committed to offering
			transparent pricing with no hidden costs. Reach out for a quote, and let us help you find the best solution for
			your PCB needs.
		</p>
	</div>
</Layout>
