<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Assembly Overview"
	description="Comprehensive PCB assembly services for your custom designs, from prototyping to full-scale production."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Assembly Overview</h1>

		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we offer a comprehensive range of PCB assembly
			services designed to meet the needs of any project, from initial prototype to large-scale production. Whether you
			are creating a custom PCB for a new product or require assembly for a batch of prototypes, our team provides the
			expertise and technology to ensure your design is brought to life with precision and quality.
		</p>

		<p class="text-gray-600 mb-8">
			With advanced machinery, experienced engineers, and rigorous quality control, we deliver assemblies that meet the
			highest industry standards. Below is an overview of our PCB assembly process and capabilities.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Assembly Process</h2>
		<p class="text-gray-600 mb-4">
			Our PCB assembly process is designed to be efficient, scalable, and precise. We follow industry best practices to
			ensure that each board is assembled with the utmost attention to detail. The process includes the following steps:
		</p>

		<p class="text-gray-600 mb-4">
			<strong>1. Solder Paste Printing:</strong> The first step in the assembly process involves applying solder paste to
			the PCB using an SMD stencil. This ensures accurate paste application for reliable solder joints.
		</p>
		<p class="text-gray-600 mb-4">
			<strong>2. Component Placement:</strong> Automated pick-and-place machines accurately place components onto the PCB
			based on your design files.
		</p>
		<p class="text-gray-600 mb-4">
			<strong>3. Reflow Soldering:</strong> The board is then passed through a reflow oven, where the solder paste is melted
			to create secure solder joints.
		</p>
		<p class="text-gray-600 mb-4">
			<strong>4. Inspection & Testing:</strong> After soldering, the boards undergo a series of inspections, including visual
			checks, automated optical inspection (AOI), and electrical testing to ensure quality and functionality.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Types of PCB Assembly</h2>
		<p class="text-gray-600 mb-4">
			We provide multiple types of PCB assembly services to accommodate various design requirements. These include:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>
				<strong>Surface-Mount Technology (SMT):</strong> Ideal for high-density designs, SMT allows components to be placed
				directly onto the surface of the PCB.
			</li>
			<li>
				<strong>Through-Hole Technology (THT):</strong> Suitable for high-power components and rugged applications where
				reliability is key.
			</li>
			<li>
				<strong>Mixed Technology:</strong> Combines both SMT and THT for designs that require a combination of component
				types.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Quality Control & Testing</h2>
		<p class="text-gray-600 mb-4">
			Our commitment to quality ensures that each PCB assembly meets rigorous standards. We implement extensive testing
			at each stage of the process to guarantee the final product is fully functional and meets your specifications. Our
			quality control methods include:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li><strong>Visual Inspections:</strong> Performed by skilled technicians to catch any obvious defects.</li>
			<li>
				<strong>Automated Optical Inspection (AOI):</strong> High-speed inspection machines to detect soldering and component
				placement issues.
			</li>
			<li>
				<strong>Electrical Testing:</strong> Ensuring the functionality of the circuit by checking for shorts, opens, and
				continuity.
			</li>
			<li>
				<strong>In-Circuit Testing (ICT):</strong> A detailed test to identify functional and operational defects.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Benefits of Our PCB Assembly Services</h2>
		<p class="text-gray-600 mb-4">
			By choosing <span class="text-blue-600 font-semibold">MMWPCB</span> for your PCB assembly needs, you benefit from:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Fast turnaround times for both prototypes and production runs.</li>
			<li>High-quality boards that meet all necessary standards and regulations.</li>
			<li>Access to a team of experts for advice and guidance on design, assembly, and testing.</li>
			<li>Cost-effective solutions for low to high-volume production.</li>
		</ul>

		<p class="text-gray-600 mb-8">
			Whether you’re assembling a few prototypes or scaling up for large production, our PCB assembly services are
			designed to meet your specific needs. Let us help bring your designs to life with exceptional quality and
			efficiency.
		</p>
	</div>
</Layout>
