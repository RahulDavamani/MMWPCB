<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Plated Half-holes"
	description="Learn about Plated Half-holes in PCB manufacturing, their application, and how they improve your designs."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Plated Half-holes</h1>

		<p class="text-gray-600 mb-6">
			Plated Half-holes, also known as partial vias or microvias, are a specialized technique in PCB manufacturing used
			to create more compact designs. These holes are partially plated, providing an electrical connection to specific
			layers of the board while leaving the other layers unplated. This process is typically used in high-density
			designs to improve performance and reduce size.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">What are Plated Half-holes?</h2>
		<p class="text-gray-600 mb-4">
			Plated Half-holes are vias that are plated on one side of the PCB, leaving the opposite side unplated. This allows
			for a more efficient use of space, as well as the ability to connect specific layers without interfering with
			others. The process involves selective plating where the hole is plated in the desired areas while leaving the
			rest of the hole open for other components or routing.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Advantages of Plated Half-holes</h2>
		<p class="text-gray-600 mb-4">
			Plated Half-holes offer several significant benefits to PCB designs, particularly in high-density and multi-layer
			applications:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Space Efficiency:</strong> By allowing for selective plating, Plated Half-holes help reduce the overall space
				required for connections in dense designs.
			</li>
			<li>
				<strong>Improved Signal Integrity:</strong> The reduced size of the via minimizes the signal path, which can improve
				the integrity of high-speed signals.
			</li>
			<li>
				<strong>Cost-Effective:</strong> They can offer cost savings in designs that require fewer vias and more efficient
				use of board space.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Plated Half-holes</h2>
		<p class="text-gray-600 mb-4">
			Plated Half-holes are typically used in applications where PCB real estate is limited, or where high-speed,
			high-density designs are required. Common applications include:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>High-Density Interconnect (HDI) Boards:</strong> In HDI designs, Plated Half-holes are used to connect specific
				layers without using larger, full vias.
			</li>
			<li>
				<strong>Smartphones and Wearable Devices:</strong> Plated Half-holes are commonly found in compact consumer electronics
				to save space while maintaining functionality.
			</li>
			<li>
				<strong>Advanced Electronics:</strong> Complex systems that require smaller, more efficient boards, such as automotive
				electronics, industrial controls, and IoT devices.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Plated Half-holes vs Regular Vias</h2>
		<p class="text-gray-600 mb-4">
			While both Plated Half-holes and regular vias are used to create electrical connections between PCB layers, there
			are some distinct differences:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Size:</strong> Plated Half-holes are much smaller than regular vias, making them ideal for high-density designs.
			</li>
			<li>
				<strong>Plating:</strong> Regular vias are plated through their entire length, while Plated Half-holes are only plated
				on one side.
			</li>
			<li>
				<strong>Cost:</strong> Plated Half-holes can sometimes be more cost-effective in specific designs, depending on the
				complexity of the board.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Design Considerations</h2>
		<p class="text-gray-600 mb-4">
			When designing a PCB with Plated Half-holes, it’s important to consider the following:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Layer Count:</strong> Plated Half-holes are ideal for multi-layer boards but may not be suitable for simple
				two-layer designs.
			</li>
			<li>
				<strong>Board Thickness:</strong> Ensure that the board thickness is appropriate to accommodate the specific requirements
				for Plated Half-holes.
			</li>
			<li>
				<strong>Manufacturing Process:</strong> Not all manufacturers support Plated Half-holes, so it’s important to verify
				that your PCB manufacturer can accommodate this technique.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Plated Half-holes?</h2>
		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we specialize in advanced PCB technologies, including
			Plated Half-holes. Our precise manufacturing process ensures high-quality, reliable PCBs with improved performance
			for even the most challenging designs. Whether you are developing high-speed, high-density boards or need to
			optimize space, we provide solutions tailored to your specific needs.
		</p>

		<p class="text-gray-600 mb-6">
			Reach out to us today for expert advice and an instant quote for your PCB design that includes Plated Half-holes!
		</p>
	</div>
</Layout>
