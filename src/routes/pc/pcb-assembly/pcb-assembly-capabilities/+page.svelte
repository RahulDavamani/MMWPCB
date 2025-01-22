<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Assembly Capabilities"
	description="Explore the extensive capabilities of our PCB assembly services for diverse applications."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Assembly Capabilities</h1>

		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, our PCB assembly capabilities are designed to
			accommodate a wide range of designs, from simple prototypes to complex, high-volume production runs. Whether
			you're working on small consumer electronics or advanced industrial applications, our team is equipped to deliver
			precision and reliability across various industries.
		</p>

		<p class="text-gray-600 mb-8">
			We leverage advanced equipment and extensive experience to provide comprehensive assembly services that include
			surface-mount technology (SMT), through-hole technology (THT), and mixed technology assembly, ensuring your
			designs are brought to life with accuracy and quality.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">High-Volume Production</h2>
		<p class="text-gray-600 mb-4">
			We excel in high-volume PCB assembly production, offering fast turnaround times without compromising on quality.
			Our automated assembly lines, coupled with advanced inspection systems, allow us to handle large-scale orders
			efficiently while maintaining precision across all units.
		</p>
		<p class="text-gray-600 mb-4">
			From automotive electronics to consumer gadgets, we can support industries that demand both quality and speed in
			large production runs. Our production lines are optimized for high throughput while ensuring the integrity of each
			board.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Prototyping and Low-Volume Assembly</h2>
		<p class="text-gray-600 mb-4">
			For companies looking to test new designs, our prototyping and low-volume assembly services are a perfect fit. We
			offer fast-turnaround prototypes, giving you the ability to validate your designs before committing to mass
			production.
		</p>
		<p class="text-gray-600 mb-4">
			We understand that prototyping is a crucial stage of development, and our team ensures that each prototype is
			assembled to the highest standards. This helps you refine your design and make improvements before moving forward
			with larger runs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Advanced Assembly Technologies</h2>
		<p class="text-gray-600 mb-4">
			We offer a variety of advanced assembly technologies that are tailored to specific needs. These technologies
			include:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>
				<strong>Fine-pitch Component Placement:</strong> Ideal for designs with small components, ensuring accuracy and reliability.
			</li>
			<li>
				<strong>Ball Grid Array (BGA) Assembly:</strong> For complex and high-performance devices, we offer precise BGA soldering
				using advanced reflow techniques.
			</li>
			<li>
				<strong>Flex and Rigid-Flex PCBs:</strong> Capable of handling flexible and rigid-flex PCB assembly, ideal for applications
				where space constraints and bending are factors.
			</li>
			<li>
				<strong>HDI Assembly:</strong> High-Density Interconnect (HDI) boards are supported for applications requiring higher
				component density and signal integrity.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Component Sourcing</h2>
		<p class="text-gray-600 mb-4">
			We work with trusted component suppliers to ensure that the right parts are sourced for your assembly project.
			Whether you're using standard components or specialized parts, we can handle all your sourcing needs. Our sourcing
			capabilities include:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Component procurement from certified suppliers worldwide.</li>
			<li>End-to-end management of component sourcing, including inventory control and logistics.</li>
			<li>Support for obsolete or hard-to-find components through alternative sourcing methods.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Testing & Quality Assurance</h2>
		<p class="text-gray-600 mb-4">
			We have a robust testing and quality assurance program that ensures every PCB assembly meets the highest
			standards. From in-circuit testing (ICT) to functional testing, we perform comprehensive checks to ensure your
			PCBs operate as intended.
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>Automated Optical Inspection (AOI) for visual checks on solder joints and component placement.</li>
			<li>In-circuit testing (ICT) to ensure proper functionality.</li>
			<li>Functional testing to validate the overall performance of the assembly.</li>
			<li>Environmental testing for temperature, humidity, and other factors that may affect performance.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB?</h2>
		<p class="text-gray-600 mb-4">
			When you choose <span class="text-blue-600 font-semibold">MMWPCB</span> for your PCB assembly, you’re partnering with
			a team that has extensive experience and a commitment to quality. Our full range of capabilities ensures that we can
			meet the demands of any project, no matter how complex. From fast prototyping to large-scale production, we’re here
			to help bring your designs to life.
		</p>
	</div>
</Layout>
