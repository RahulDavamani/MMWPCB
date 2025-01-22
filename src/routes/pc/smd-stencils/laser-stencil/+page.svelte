<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Laser Stencil"
	description="Precision laser-cut stencils for accurate solder paste application in PCB assembly."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Laser Stencil</h1>

		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we provide top-quality laser-cut stencils for SMD
			assembly, designed to ensure precise solder paste application. Our laser stencils are the go-to choice for PCB
			assembly because of their exceptional accuracy, clean edges, and ability to handle intricate designs with ease.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Precision Cutting</h2>
		<p class="text-gray-600 mb-4">
			Our laser-cut stencils are made using advanced laser technology that offers a high level of precision. This
			ensures the accurate transfer of solder paste to your PCB pads, which is crucial for the performance and
			reliability of the final assembly. The laser cutting process allows for detailed aperture designs, even for small
			or complex pad geometries.
		</p>

		<p class="text-gray-600 mb-8">
			Whether you're working with fine-pitch components or standard SMD packages, our laser stencils offer unparalleled
			accuracy, reducing the risk of defects like bridging and tombstoning in your assembly.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Benefits of Laser Stencils</h2>
		<p class="text-gray-600 mb-4">
			Laser-cut stencils offer several advantages over traditional methods. The key benefits include:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>High precision, ideal for fine-pitch components.</li>
			<li>Clean edges for improved paste release and uniformity.</li>
			<li>Ability to produce complex aperture shapes and designs.</li>
			<li>Quick turnaround time for fast project delivery.</li>
			<li>Reusable stencils, reducing overall production costs.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Custom Design & Materials</h2>
		<p class="text-gray-600 mb-4">
			We offer fully customizable laser stencils, tailored to your specific PCB design. Whether you need a stencil for a
			prototype or a high-volume production run, we can create a stencil that meets your exact requirements. We also
			offer different materials for stencils, such as stainless steel and nickel, depending on your project's needs.
		</p>

		<p class="text-gray-600 mb-8">
			Our team works closely with you to ensure that the stencil is optimized for your PCB, with proper alignment and
			aperture sizes. We can also offer advice on stencil thickness and other variables to ensure the highest-quality
			results.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications</h2>
		<p class="text-gray-600 mb-4">Laser-cut stencils are ideal for a wide range of applications, including:</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Prototype PCB assembly.</li>
			<li>Low to medium-volume PCB production.</li>
			<li>High-precision, fine-pitch SMD assemblies.</li>
			<li>Flexible PCBs and complex designs requiring custom apertures.</li>
		</ul>

		<p class="text-gray-600 mb-8">
			No matter your project’s scale, our laser stencils deliver the precision and reliability you need to ensure the
			success of your PCB assembly.
		</p>
	</div>
</Layout>
