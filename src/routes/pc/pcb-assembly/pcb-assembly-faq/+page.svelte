<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Assembly FAQ"
	description="Find answers to common questions about PCB assembly, processes, and services."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Assembly FAQ</h1>

		<p class="text-gray-600 mb-6">
			Here are the answers to some of the most frequently asked questions about PCB assembly. Whether you're a
			first-time customer or a seasoned engineer, this section will help clarify the key aspects of our assembly
			process.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. What is PCB assembly?</h2>
		<p class="text-gray-600 mb-6">
			PCB assembly refers to the process of placing electronic components onto a printed circuit board (PCB). The
			process includes various steps like component placement, soldering, testing, and inspection. The end result is a
			functional PCB ready for use in an electronic device.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. What types of PCB assembly do you offer?</h2>
		<p class="text-gray-600 mb-4">
			We offer both surface-mount technology (SMT) and through-hole technology (THT) assembly. We also provide
			mixed-technology assembly, which combines both SMT and THT processes in one PCB.
		</p>
		<p class="text-gray-600 mb-4">
			Our team can handle single, double, and multi-layer PCB assemblies, and we can support a variety of component
			types, from standard components to more complex, specialized parts.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. What is the lead time for PCB assembly?</h2>
		<p class="text-gray-600 mb-4">
			Lead time for PCB assembly depends on the complexity of the project, the number of layers, and the availability of
			components. Typically, we offer fast turnaround times, with prototype assemblies taking around 5-7 business days,
			and mass production orders taking longer depending on the order size and components.
		</p>
		<p class="text-gray-600 mb-4">
			For urgent orders, we provide expedited services to ensure a faster delivery, typically within 3-5 business days.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Do you offer PCB testing services?</h2>
		<p class="text-gray-600 mb-4">
			Yes, we offer a range of testing services to ensure that your PCB assemblies are fully functional and meet your
			specifications. Our testing services include:
		</p>
		<ul class="list-disc list-inside text-gray-600 mb-6">
			<li>Functional testing (FT)</li>
			<li>In-circuit testing (ICT)</li>
			<li>Automated optical inspection (AOI)</li>
			<li>Electrical testing</li>
		</ul>
		<p class="text-gray-600 mb-4">
			We work with you to ensure that all necessary tests are conducted before your PCBs are shipped to you.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Can I source my own components?</h2>
		<p class="text-gray-600 mb-4">
			Yes, you can source your own components and send them to us for assembly. If you prefer, we can also source
			components for you from our trusted suppliers. If you provide the parts, we will handle the assembly process,
			including soldering and inspection, to ensure your PCB is fully functional.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. What is the cost of PCB assembly?</h2>
		<p class="text-gray-600 mb-4">
			The cost of PCB assembly depends on several factors, such as the type of components, the number of layers,
			assembly complexity, and the quantity of boards required. We provide competitive pricing and offer cost-saving
			solutions for large-volume orders. For a precise estimate, we recommend using our instant quote tool.
		</p>
		<p class="text-gray-600 mb-4">
			Please feel free to contact us for a detailed quote based on your specific project requirements.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. What file formats do I need to provide?</h2>
		<p class="text-gray-600 mb-4">
			For PCB assembly, we typically require Gerber files, Bill of Materials (BOM), and Pick and Place files. These
			files should provide us with all the necessary information to assemble your PCB accurately.
		</p>
		<p class="text-gray-600 mb-4">
			If you're unsure about what files are needed, feel free to contact our team for guidance.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">8. Do you offer PCB assembly for prototypes?</h2>
		<p class="text-gray-600 mb-4">
			Yes, we specialize in PCB prototype assembly. We understand that prototypes often involve design iterations, and
			we offer flexible assembly options to meet the needs of rapid prototyping. Whether you need one board or a small
			batch for testing, we can provide fast turnarounds and competitive pricing for your prototype needs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">9. How do I place an order for PCB assembly?</h2>
		<p class="text-gray-600 mb-4">
			You can place an order for PCB assembly directly on our website through our instant quote tool. Simply upload your
			Gerber, BOM, and Pick and Place files, and we’ll provide you with an accurate quote based on your project details.
		</p>
		<p class="text-gray-600 mb-4">
			Alternatively, you can contact our sales team to discuss your project and receive a personalized quote.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">
			10. Can I request additional services like component soldering or rework?
		</h2>
		<p class="text-gray-600 mb-4">
			Yes, we offer additional services such as component soldering, rework, and custom modifications. If you have
			specific needs beyond standard assembly, our team can help you with additional services to ensure your PCB meets
			your exact requirements.
		</p>
	</div>
</Layout>
