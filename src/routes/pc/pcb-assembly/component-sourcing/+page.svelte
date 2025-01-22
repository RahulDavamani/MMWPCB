<script lang="ts">
	import Layout from '../../Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import { goto } from '$app/navigation';
	import { section } from '../section';
</script>

<Layout
	title="Component Sourcing"
	description="Explore how we manage component sourcing for reliable and high-quality PCB assemblies."
	button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	bannerImage={PCBanner}
	section={section.title}
	subsections={section.subsections}
>
	<div class="container mx-auto px-4 py-8">
		<h1 class="text-3xl font-bold text-gray-800 mb-6">Component Sourcing</h1>

		<p class="text-gray-600 mb-4">
			At <span class="text-blue-600 font-semibold">MMWPCB</span>, we understand that high-quality components are the
			backbone of a reliable PCB assembly. That’s why we focus on sourcing the best components, ensuring that your
			project is built to last. Our expert sourcing team ensures that every part meets the highest standards and arrives
			on time, keeping your production process smooth and efficient.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Global Supplier Network</h2>
		<p class="text-gray-600 mb-4">
			Our global network of trusted suppliers allows us to source components from top-tier manufacturers across the
			world. This broad sourcing capability ensures that you get access to the best quality parts at competitive prices,
			whether you're ordering standard components or hard-to-find specialty parts.
		</p>

		<p class="text-gray-600 mb-4">
			We carefully vet our suppliers to ensure that all components are genuine, certified, and meet industry standards.
			With reliable sourcing, we reduce the risks of counterfeit parts, ensuring the integrity of your final product.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Component Procurement Process</h2>
		<p class="text-gray-600 mb-4">
			Our component procurement process is designed for efficiency and accuracy. From order placement to delivery, we
			handle the logistics so you can focus on your design. Here’s how it works:
		</p>

		<ul class="list-disc list-inside text-gray-600 mb-8">
			<li>
				<strong>Order Review:</strong> We work closely with you to understand your component requirements and ensure all
				parts are specified correctly.
			</li>
			<li>
				<strong>Supplier Selection:</strong> Based on your needs, we select the best suppliers from our network, ensuring
				competitive pricing and on-time delivery.
			</li>
			<li>
				<strong>Quality Control:</strong> Every component undergoes rigorous quality control to meet your specifications
				and industry standards.
			</li>
			<li>
				<strong>Logistics Management:</strong> We manage the logistics and ensure that components arrive at your facility
				without delay.
			</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Hard-to-Find Components</h2>
		<p class="text-gray-600 mb-4">
			For designs that require rare or discontinued components, our sourcing team excels at finding hard-to-get parts.
			Using our extensive network and industry knowledge, we can source even the most elusive components, ensuring that
			your design doesn’t hit a roadblock due to component unavailability.
		</p>

		<p class="text-gray-600 mb-4">
			We also offer lifecycle management services, helping you find replacements for components that may be approaching
			obsolescence, ensuring your designs remain up-to-date and manufacturable.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Inventory Management</h2>
		<p class="text-gray-600 mb-4">
			To help streamline your production process, we offer inventory management services that ensure components are
			available when needed. We keep track of your components and provide forecasts to avoid shortages or overstocking,
			optimizing your supply chain.
		</p>

		<p class="text-gray-600 mb-4">
			This service can significantly reduce lead times and help mitigate risks associated with supply chain disruptions,
			ensuring your project remains on schedule.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cost Efficiency</h2>
		<p class="text-gray-600 mb-4">
			Our extensive network allows us to offer cost-effective sourcing options, ensuring that your project stays within
			budget. By negotiating directly with suppliers and consolidating orders, we can often pass on significant savings
			to you, without compromising on component quality.
		</p>

		<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Component Sourcing?</h2>
		<p class="text-gray-600 mb-4">
			Choosing <span class="text-blue-600 font-semibold">MMWPCB</span> for your component sourcing ensures a seamless and
			reliable supply chain. With our global network, expert procurement team, and commitment to quality, we provide a sourcing
			solution that saves time, reduces costs, and ensures your assemblies are made with the best components available.
		</p>
		<p class="text-gray-600 mb-4">
			We handle the complexities of sourcing, so you don’t have to. Whether you need standard components, hard-to-find
			parts, or custom specifications, we’ve got you covered every step of the way.
		</p>
	</div>
</Layout>
