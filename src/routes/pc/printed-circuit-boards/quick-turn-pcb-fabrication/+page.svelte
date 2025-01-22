<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Quick Turn PCB Fabrication"
	description="Get your PCBs fabricated quickly without compromising on quality. Learn about our fast-track PCB services."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Quick Turn PCB Fabrication</h1>

		<p class="text-gray-600 mb-4">
			When time is of the essence, <span class="text-blue-600 font-semibold">MMWPCB</span> offers quick turn PCB fabrication
			services that guarantee speedy production without sacrificing quality. Our streamlined process ensures your boards
			are ready faster than traditional PCB manufacturing methods, making us an ideal choice for prototypes and small production
			runs.
		</p>

		<p class="text-gray-600 mb-8">
			Our quick turn capabilities allow us to produce high-performance PCBs in as little as 24 to 72 hours, offering you
			rapid prototyping and testing for your designs. Whether you're launching a new product or iterating on existing
			designs, we make sure your PCB fabrication process is as efficient as possible.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Faster Turnaround, Same High Quality</h2>
		<p class="text-gray-600 mb-4">
			What sets our service apart is that we don’t compromise quality for speed. We use the same advanced manufacturing
			processes for quick turn PCBs as we do for standard fabrication. This means you get high-quality boards that meet
			your specifications with minimal delays.
		</p>

		<p class="text-gray-600 mb-8">
			Whether it’s single-layer, double-sided, or multilayer boards, our quick turn service can handle various designs
			with the same precision. Additionally, our extensive inventory of materials ensures we have the right options
			available to meet your needs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">How It Works</h2>
		<p class="text-gray-600 mb-4">
			The process begins when you submit your design files. Our team reviews them promptly, providing an instant quote
			and production timeline. Once approved, we begin the fabrication process, using our fast-track methods to turn
			your design into a fully functional PCB.
		</p>

		<p class="text-gray-600 mb-8">
			With multiple shifts running in our fabrication plant, we can handle even the most time-sensitive projects. Your
			boards are then quality-checked, ensuring that they meet the required standards before being shipped directly to
			you. It’s a simple, yet effective process designed to get your project moving fast.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Industries That Benefit</h2>
		<p class="text-gray-600 mb-4">
			Quick turn PCB fabrication is ideal for several industries, including consumer electronics, telecommunications,
			automotive, and medical devices. For example, engineers working on a new product prototype or startups needing
			small batches for testing can benefit from the accelerated timeline.
		</p>

		<p class="text-gray-600 mb-8">
			In fields like telecommunications and medical equipment, where time is critical, quick turn PCBs ensure that
			essential components can be tested and refined swiftly. We understand that these sectors require reliability, and
			we’re here to deliver it quickly.
		</p>
	</div>
</Layout>
