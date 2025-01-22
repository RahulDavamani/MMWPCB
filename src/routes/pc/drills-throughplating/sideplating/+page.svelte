<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Sideplating"
	description="Learn about Sideplating in PCB manufacturing and how it ensures reliable electrical connections in vias and holes."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Sideplating</h1>

		<p class="text-gray-600 mb-6">
			Sideplating is a technique used in PCB manufacturing to ensure that the electrical connection between the inner
			and outer layers of the PCB is stable and reliable. It involves plating the sides of vias and holes, which not
			only improves the electrical connection but also enhances the overall strength and durability of the PCB.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">What is Sideplating?</h2>
		<p class="text-gray-600 mb-4">
			Sideplating refers to the process of applying a thin layer of metal plating onto the sides of a via or hole. This
			additional plating creates a better electrical pathway and prevents any issues caused by gaps in the plating that
			could occur during the standard through-plating process. It helps to improve the reliability of the PCB,
			particularly in high-frequency or high-power applications.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Benefits of Sideplating</h2>
		<p class="text-gray-600 mb-4">Sideplating provides several important benefits to PCB designs:</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Improved Conductivity:</strong> By plating the sides of vias and holes, sideplating ensures better electrical
				conductivity, especially in high-frequency circuits.
			</li>
			<li>
				<strong>Enhanced Mechanical Strength:</strong> It strengthens the via connection, which is crucial for maintaining
				the integrity of multi-layer PCBs.
			</li>
			<li>
				<strong>Improved Durability:</strong> Sideplating increases the durability of the PCB by providing additional copper,
				which helps to prevent delamination or other mechanical failures.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Sideplating</h2>
		<p class="text-gray-600 mb-4">Sideplating is especially beneficial in certain PCB applications:</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>High-Frequency PCBs:</strong> In high-frequency designs, where signal integrity is crucial, sideplating ensures
				that there are no interruptions in the signal path.
			</li>
			<li>
				<strong>Power Electronics:</strong> Power PCBs that carry high current benefit from sideplating to provide a more
				robust connection.
			</li>
			<li>
				<strong>Multi-layer PCBs:</strong> For multi-layer PCBs, sideplating helps ensure a strong and reliable connection
				between the various layers of the board.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Sideplating vs Throughplating</h2>
		<p class="text-gray-600 mb-4">
			Sideplating and throughplating are both methods of creating electrical connections in PCBs, but they differ in the
			way they apply metal to vias and holes. Throughplating is a more traditional method, which plates the entire hole
			from top to bottom. While effective for most designs, sideplating adds an extra layer of metal to the sides of
			vias, enhancing the conductivity and strength of the electrical connection.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considerations for Sideplating</h2>
		<p class="text-gray-600 mb-4">
			Although sideplating is an excellent way to enhance PCB performance, it is important to consider a few factors
			when designing a PCB that requires this technique:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>
				<strong>Cost:</strong> Sideplating can increase the overall cost of PCB manufacturing due to the additional processing
				steps required.
			</li>
			<li>
				<strong>Design Complexity:</strong> Sideplating requires precise control over the plating process, which may increase
				the complexity of the design and manufacturing stages.
			</li>
			<li>
				<strong>Thickness Control:</strong> It's crucial to maintain the correct thickness of the plating, as too much metal
				could create issues with the vias or holes.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Sideplating?</h2>
		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we use state-of-the-art manufacturing techniques to
			provide high-quality sideplating on all our PCBs. Our experienced team ensures that your design is produced with
			precision and care, delivering reliable and robust performance.
		</p>

		<p class="text-gray-600 mb-6">
			Contact us today to discuss your project needs and get an instant quote for your PCB design and sideplating
			requirements.
		</p>
	</div>
</Layout>
