<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="PCB Prototyping"
	description="Start your PCB design with prototyping. Quickly test, validate, and refine your designs before full production."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Prototyping</h1>

		<p class="text-gray-600 mb-4">
			Prototyping is the crucial first step in taking your PCB design from concept to reality. At <span
				class="text-blue-600 font-semibold">MMWPCB</span
			>, we understand how important it is to test your designs before full-scale production. Our PCB prototyping
			service offers fast turnaround, ensuring you can quickly iterate and optimize your design.
		</p>

		<p class="text-gray-600 mb-8">
			Whether you’re working on your first design or refining a complex product, we provide the tools and expertise to
			bring your ideas to life. Our prototyping services give you the flexibility to experiment with different
			configurations, materials, and features, helping you discover the best solution for your project.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose PCB Prototyping?</h2>
		<p class="text-gray-600 mb-4">
			Testing your PCB design with prototypes can save you time, money, and headaches in the long run. With our rapid
			prototyping service, you can catch potential issues early, validate design choices, and make adjustments as needed
			before moving into full production.
		</p>

		<p class="text-gray-600 mb-8">
			We handle designs from simple to complex, providing you with high-quality prototypes that accurately reflect your
			vision. Plus, you’ll receive clear feedback, so you can move forward with confidence when scaling up.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Rapid Turnaround for Quick Testing</h2>
		<p class="text-gray-600 mb-4">
			One of the key benefits of prototyping with <span class="text-blue-600 font-semibold">MMWPCB</span> is the speed at
			which we can turn around your designs. We understand that in today’s competitive market, speed is essential. Our process
			ensures that you can test and refine your designs faster than ever before, minimizing delays and accelerating your
			development cycle.
		</p>

		<p class="text-gray-600 mb-8">
			With fast turnaround times (as short as 48 hours), you’ll receive the prototypes you need to move forward with
			your project on time, every time.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">How Our PCB Prototyping Works</h2>
		<p class="text-gray-600 mb-4">
			Our prototyping process begins with a detailed review of your design files. Once we’ve analyzed your
			specifications, we’ll generate an instant quote for your project. From there, we’ll proceed with production, using
			the same precision and attention to detail that we apply to full-scale manufacturing.
		</p>

		<p class="text-gray-600 mb-8">
			We keep you informed throughout the process, providing timely updates so you know exactly when to expect your
			prototypes. After fabrication, each board undergoes rigorous testing to ensure it meets the desired functionality.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Flexibility in Design and Materials</h2>
		<p class="text-gray-600 mb-4">
			Our PCB prototyping service offers flexibility, allowing you to experiment with different designs and materials.
			Whether you’re exploring new shapes, components, or specialized materials, we can help bring your ideas to life
			with minimal risk.
		</p>

		<p class="text-gray-600 mb-8">
			We support a variety of materials, including FR4, Rogers, and flexible substrates, and we can accommodate
			different layer counts and board thicknesses. Whatever your design calls for, we can produce a prototype that
			matches your needs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications for PCB Prototyping</h2>
		<p class="text-gray-600 mb-4">
			PCB prototyping is essential for a wide range of industries, including electronics, automotive, medical devices,
			and telecommunications. By testing your design early on, you reduce the risk of errors during mass production and
			increase the chances of product success.
		</p>

		<p class="text-gray-600 mb-8">Our prototyping service is perfect for:</p>

		<p class="text-gray-600 mb-8">- **Electronics startups** testing new concepts and designs.</p>

		<p class="text-gray-600 mb-8">
			- **Automotive engineers** developing reliable and efficient electronic systems for vehicles.
		</p>

		<p class="text-gray-600 mb-8">
			- **Medical device manufacturers** creating PCBs for sensitive, life-saving equipment.
		</p>
	</div>
</Layout>
