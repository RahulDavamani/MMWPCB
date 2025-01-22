<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import PCBanner from '$lib/assets/pc-banner.png';
	import HigherQuality from '$lib/assets/why-us/higher-quality.jpg';
	import LowerCost from '$lib/assets/why-us/lower-cost.png';
	import FasterDelivery from '$lib/assets/why-us/faster-delivery.png';
</script>

<Layout pageTitle="Why Us?">
	<div slot="top-main">
		<div style="background-color: #17191e;">
			<div class="container mx-auto flex justify-start items-center">
				<div class="absolute text-accent">
					<div class="font-semibold text-3xl mb-1">Welcome to MMWPCB</div>
					<div class="mb-2 max-w-lg">
						We produce reliable PCBs for customers with demanding needs. Get your quote in seconds, PCBs shipped in as
						fast as 1 day!
					</div>
					<div class="btn btn-sm btn-outline btn-accent">Get Instant Quote</div>
				</div>
				<img src={PCBanner} alt="PCB Capabilities Banner" />
			</div>
		</div>
	</div>

	<div class="text-lg">
		<div class="font-bold text-3xl text-primary mb-4">Faster One-stop Electronic Manufacturing</div>
		<div class="mb-2">
			MMWPCB works on building a one-stop industrial electronic platform, realizing digital PCBA processing by
			incorporating EDA, PCB, parts sourcing, and PCBA services. With increasing investment in innovation and digital
			system, we have been growing fast, and becoming a leading global PCB & PCBA manufacturer, providing the rapid
			production of high-reliability and cost-effective products.
		</div>

		<div class="grid grid-cols-4 mb-8">
			<div class="stat">
				<div class="stat-value text-secondary">31000+</div>
				<div class="stat-title">Orders/year</div>
			</div>
			<div class="stat">
				<div class="stat-value text-secondary">8400+</div>
				<div class="stat-title">Customers</div>
			</div>
			<div class="stat">
				<div class="stat-value text-secondary">180+</div>
				<div class="stat-title">Countries</div>
			</div>
			<div class="stat">
				<div class="stat-value text-secondary">24/7</div>
				<div class="stat-title">Online Service</div>
			</div>
		</div>

		<div class="font-bold text-3xl text-primary mb-4">Our Mission</div>
		<div>
			MMWPCB aims to accelerate hardware innovation by providing millions of enterprises, research institutes, and
			engineers with one-stop integrated electronic/mechanical service, including EDA software, PCB manufacturing, PCB
			Assembly, 3D Printing, and CNC Machining. MMWPCB empowers flexible manufacturing through the integration of
			digital technology, self-built order platform, automated production, and intelligent warehousing. This enables us
			to meet customer demands for prototypes, small batch production, and the "fast delivery, high quality,
			customization, one-stop" experience.
		</div>

		<div class="flex items-center gap-10">
			<img src={HigherQuality} alt="Higher Quality" class="w-1/3" />
			<div>
				<div class="text-2xl font-semibold mb-4">Higher Quality</div>
				<div>
					Ensuring quality and its consistent improvement are the two main guidelines of our company. Our advanced PCB
					technology allows us to provide high precision boards suitable for industrial, military, aerospace, and
					medical applications. We are continuously investing top-level base materials and advanced equipments for fully
					automated production lines, which enables us to offer our customers high throughput with consistently high
					quality.
				</div>
			</div>
		</div>
		<div class="flex items-center gap-10">
			<div>
				<div class="text-2xl font-semibold mb-4">Lower Cost</div>
				<div>
					Since 2006, MMWPCB continuously driven to become more efficient and reduce costs. We promise to offer
					customers the most economic PCBs forever. MMWPCB makes cheapest but top quality PCBs possibly because of scale
					effect, extremely high production efficiency and less manpower cost.
				</div>
			</div>
			<img src={LowerCost} alt="Lower Cost" class="w-1/3" />
		</div>
		<div class="flex items-center gap-10 mt-10">
			<img src={FasterDelivery} alt="Faster Delivery" class="w-1/3" />
			<div>
				<div class="text-2xl font-semibold mb-4">Faster Delivery</div>
				<div>
					Our easy-to-use online ordering system, professional and efficient customer service, digital manufacturing
					technology, full-automatic production lines, and stable logistics partners make every step to deliver you PCBs
					faster.
				</div>
			</div>
		</div>

		<div class="grid grid-cols-3 mt-20 gap-10">
			<div class="text-center">
				<div class="text-xl font-semibold mb-2">No Minimum Requirements</div>
				<div class="text-base">
					You may order as small as 5pcs of PCB from us. We do not force you to buy what you do not need indeed to save
					your expenses.
				</div>
			</div>
			<div class="text-center">
				<div class="text-xl font-semibold mb-2">Fair Pricing</div>
				<div class="text-base">
					Our pricing structure is transparent and has no hidden cost in it. Our price is one of the most competitive in
					the world and is just a fraction of what other American or European fabricators normally charge you. Even many
					price-sensitive customers like students and hobbyists largely rely on us for their PCB prototype, low-volume
					fabrication and assembly needs. We try our utmost to save you money and time.
				</div>
			</div>
			<div class="text-center">
				<div class="text-xl font-semibold mb-2">Free DFM Check</div>
				<div class="text-base">
					All your orders will receive a free engineering file review service from our trained and professional
					technicians before you pay in the most timely manner.
				</div>
			</div>
			<div class="text-center">
				<div class="text-xl font-semibold mb-2">On-time Shipping</div>
				<div class="text-base">
					Through the years we are proud to have been keeping an on-time delivery rate of 99%. We work in three shifts
					to make sure your PCBs will be on your desk as scheduled and as early as possible. You may choose DHL and
					other courier services for a balance of speed and budget. We only use services from dependable and reputable
					companies.
				</div>
			</div>
			<div class="text-center">
				<div class="text-xl font-semibold mb-2">Return and Refund</div>
				<div class="text-base">
					Dissatisfaction does occur from time to time. In case our PCB or assembled boards are not usable due to our
					fault, you can ask for compensation. We can refund to your account directly or credit your MMWPCB account,
					these credits are available to pay for your next orders with us. We can also rework the unusable boards or
					re-fabricate your PCB and re-ship to you at our cost, but please cooperate to solve the problem if need to
					rework.
				</div>
			</div>
			<div class="text-center">
				<div class="text-xl font-semibold mb-2">24 hours Customer Service</div>
				<div class="text-base">
					Whenever you have any problems, you can always reach to a live customer service person to respond to your
					emails or messages. Our service people will follow your orders from the time you submit your Gerber file to
					the minute you receive your PCB and assembled PCBs in a satisfactory mood.
				</div>
			</div>
		</div>
	</div>
</Layout>
