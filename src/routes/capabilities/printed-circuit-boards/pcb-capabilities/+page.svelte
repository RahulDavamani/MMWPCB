<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="PCB Capabilities"
		description="PCB Production fabrication and pcb assembly capabilities."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Capabilities</h1>
			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we offer a wide range of PCB manufacturing solutions
				to cater to diverse project requirements. Whether you need standard PCBs, advanced high-frequency boards, or
				custom prototypes, we've got you covered.
			</p>
			<p class="text-gray-600 mb-8">
				Our state-of-the-art facilities and experienced team ensure that we deliver top-quality products with precision
				and speed. Below is an overview of our capabilities and features that make us stand out.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Manufacturing Capabilities</h2>
			<p class="text-gray-600 mb-4">
				Our manufacturing capabilities are designed to meet the most demanding requirements of today's electronics
				industry. From single-layer boards to complex multilayer designs, we deliver with consistency and accuracy.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Layer count: Single-layer, double-layer, and multilayer PCBs (up to 20 layers).</li>
				<li>Board thickness: 0.2mm to 6.0mm.</li>
				<li>Material types: FR4, Rogers, Aluminum, High-TG, and more.</li>
				<li>Copper thickness: 0.5oz to 6oz.</li>
				<li>Minimum trace width/spacing: 3mil/3mil.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Surface Finishing</h2>
			<p class="text-gray-600 mb-4">
				We provide a variety of surface finishing options to meet the specific needs of your design. These finishes not
				only improve the durability of your PCBs but also ensure optimal solderability and performance.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>HASL (Lead-Free or Leaded)</li>
				<li>ENIG (Electroless Nickel Immersion Gold)</li>
				<li>OSP (Organic Solderability Preservative)</li>
				<li>Immersion Silver/Immersion Tin</li>
				<li>Gold Finger Plating</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Drilling Capabilities</h2>
			<p class="text-gray-600 mb-4">
				Drilling precision is critical for creating reliable connections in your PCB. Our advanced drilling techniques
				ensure accuracy, even for the most intricate designs.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Minimum drill hole size: 0.15mm.</li>
				<li>Blind and buried vias supported.</li>
				<li>Via filling options: Conductive, non-conductive, and copper-filled.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Special Features</h2>
			<p class="text-gray-600 mb-4">
				We go beyond standard PCB manufacturing to offer features that enable cutting-edge designs. Whether you're
				developing flexible PCBs for wearable tech or HDI boards for advanced electronics, we can support your vision.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Flexible PCBs and rigid-flex PCBs available.</li>
				<li>Impedance-controlled PCBs.</li>
				<li>High-frequency material handling (e.g., Rogers).</li>
				<li>HDI designs with microvias and via-in-pad.</li>
			</ul>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="PCB能力"
		description="PCB生产制造和组装能力。"
		button={{ title: '在线快速报价并下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB能力</h1>
			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span>，我们提供多种PCB制造解决方案以满足各种项目需求。
				无论您需要标准PCB、高频板，还是定制原型，我们都能满足您的需求。
			</p>
			<p class="text-gray-600 mb-8">
				我们的先进设施和经验丰富的团队确保能够以高精度和高速度交付高质量的产品。以下是我们的能力概览以及让我们脱颖而出的特点。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">制造能力</h2>
			<p class="text-gray-600 mb-4">
				我们的制造能力旨在满足当今电子行业最苛刻的要求。从单层板到复杂的多层设计，我们都能始终如一地高质量交付。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>层数：单层、双层及多层PCB（最多20层）。</li>
				<li>板厚：0.2mm至6.0mm。</li>
				<li>材料类型：FR4、Rogers、铝、高TG等。</li>
				<li>铜厚：0.5oz至6oz。</li>
				<li>最小线宽/间距：3mil/3mil。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">表面处理</h2>
			<p class="text-gray-600 mb-4">
				我们提供多种表面处理选项，以满足您设计的具体需求。这些处理不仅提高了PCB的耐用性，还确保了最佳的可焊性和性能。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>HASL（无铅或含铅）</li>
				<li>ENIG（化学镀镍浸金）</li>
				<li>OSP（有机可焊性保护层）</li>
				<li>沉银/沉锡</li>
				<li>金手指镀层</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">钻孔能力</h2>
			<p class="text-gray-600 mb-4">
				钻孔精度对于创建可靠的PCB连接至关重要。我们先进的钻孔技术确保了即使是最复杂设计的精确性。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>最小钻孔直径：0.15mm。</li>
				<li>支持盲孔和埋孔。</li>
				<li>孔填充选项：导电、非导电和铜填充。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">特殊功能</h2>
			<p class="text-gray-600 mb-4">
				我们不仅提供标准的PCB制造，还提供支持前沿设计的功能。无论您是在开发可穿戴设备的柔性PCB，还是用于高级电子产品的HDI板，我们都可以支持您的愿景。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>柔性PCB和刚柔结合PCB。</li>
				<li>阻抗控制PCB。</li>
				<li>高频材料处理（例如Rogers）。</li>
				<li>带微孔和埋孔设计的HDI。</li>
			</ul>
		</div>
	</Layout>
{:else if $i18n.language === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Capacités des PCB"
		description="Fabrication et assemblage de circuits imprimés."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Capacités des PCB</h1>
			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous proposons une large gamme de solutions de
				fabrication de PCB pour répondre à divers besoins de projet. Que vous ayez besoin de PCB standards, de cartes
				haute fréquence avancées ou de prototypes personnalisés, nous sommes là pour vous.
			</p>
			<p class="text-gray-600 mb-8">
				Nos installations de pointe et notre équipe expérimentée garantissent des produits de haute qualité, livrés avec
				précision et rapidité. Voici un aperçu de nos capacités et des caractéristiques qui nous démarquent.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Capacités de fabrication</h2>
			<p class="text-gray-600 mb-4">
				Nos capacités de fabrication sont conçues pour répondre aux exigences les plus élevées de l'industrie
				électronique actuelle. Des cartes monocouches aux conceptions multicouches complexes, nous livrons avec
				constance et précision.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Nombre de couches : PCB monocouches, double couches et multicouches (jusqu'à 20 couches).</li>
				<li>Épaisseur de la carte : 0,2 mm à 6,0 mm.</li>
				<li>Types de matériaux : FR4, Rogers, Aluminium, High-TG, etc.</li>
				<li>Épaisseur du cuivre : 0,5 oz à 6 oz.</li>
				<li>Largeur/espacement minimum des traces : 3 mil/3 mil.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Finitions de surface</h2>
			<p class="text-gray-600 mb-4">
				Nous proposons diverses options de finition de surface pour répondre aux besoins spécifiques de votre
				conception. Ces finitions améliorent non seulement la durabilité des PCB, mais garantissent également une
				soudabilité et des performances optimales.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>HASL (sans plomb ou avec plomb)</li>
				<li>ENIG (nickel chimique immersion or)</li>
				<li>OSP (conservation organique de la soudabilité)</li>
				<li>Immersion argent/immersion étain</li>
				<li>Placage doigts d'or</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Capacités de perçage</h2>
			<p class="text-gray-600 mb-4">
				La précision du perçage est essentielle pour créer des connexions fiables dans votre PCB. Nos techniques de
				perçage avancées assurent une grande précision, même pour les conceptions les plus complexes.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Diamètre minimum des trous de perçage : 0,15 mm.</li>
				<li>Vias borgnes et enterrés pris en charge.</li>
				<li>Options de remplissage des vias : conductif, non-conductif et rempli de cuivre.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Caractéristiques spéciales</h2>
			<p class="text-gray-600 mb-4">
				Nous allons au-delà de la fabrication standard de PCB pour offrir des fonctionnalités permettant des conceptions
				de pointe. Que vous développiez des PCB flexibles pour la technologie portable ou des cartes HDI pour des
				électroniques avancées, nous pouvons soutenir votre vision.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>PCB flexibles et rigides-flexibles disponibles.</li>
				<li>PCB avec contrôle d'impédance.</li>
				<li>Gestion des matériaux haute fréquence (par ex. Rogers).</li>
				<li>Conceptions HDI avec microvias et vias dans les pastilles.</li>
			</ul>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Capacidades de PCB"
		description="Fabricación y ensamblaje de PCB."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Capacidades de PCB</h1>
			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, ofrecemos una amplia gama de soluciones de
				fabricación de PCB para satisfacer diversos requisitos de proyectos. Ya sea que necesite PCBs estándar, placas
				avanzadas de alta frecuencia o prototipos personalizados, lo tenemos cubierto.
			</p>
			<p class="text-gray-600 mb-8">
				Nuestras instalaciones de vanguardia y equipo experimentado aseguran productos de alta calidad entregados con
				precisión y rapidez. A continuación, se presenta una descripción general de nuestras capacidades y
				características que nos hacen destacar.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Capacidades de fabricación</h2>
			<p class="text-gray-600 mb-4">
				Nuestras capacidades de fabricación están diseñadas para satisfacer los requisitos más exigentes de la industria
				electrónica actual. Desde placas de una sola capa hasta diseños multicapa complejos, entregamos con consistencia
				y precisión.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Número de capas: PCBs de una sola capa, doble capa y multicapa (hasta 20 capas).</li>
				<li>Grosor de la placa: 0.2mm a 6.0mm.</li>
				<li>Tipos de materiales: FR4, Rogers, Aluminio, High-TG y más.</li>
				<li>Grosor del cobre: 0.5oz a 6oz.</li>
				<li>Ancho/espaciado mínimo de traza: 3mil/3mil.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Acabado superficial</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos una variedad de opciones de acabado superficial para satisfacer las necesidades específicas de su
				diseño. Estos acabados no solo mejoran la durabilidad de los PCBs, sino que también garantizan una soldabilidad
				y desempeño óptimos.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>HASL (sin plomo o con plomo)</li>
				<li>ENIG (Níquel químico inmersión oro)</li>
				<li>OSP (Conservante de soldabilidad orgánico)</li>
				<li>Inmersión en plata/estaño</li>
				<li>Recubrimiento con dedos de oro</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Capacidades de perforación</h2>
			<p class="text-gray-600 mb-4">
				La precisión en la perforación es crítica para crear conexiones confiables en su PCB. Nuestras técnicas
				avanzadas aseguran precisión, incluso para los diseños más intrincados.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Tamaño mínimo de perforación: 0.15mm.</li>
				<li>Vías ciegas y enterradas soportadas.</li>
				<li>Opciones de relleno de vías: conductivo, no conductivo y relleno de cobre.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Características especiales</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos más allá de la fabricación estándar de PCB para incluir características que permiten diseños
				innovadores. Ya sea que esté desarrollando PCBs flexibles para tecnología portátil o tarjetas HDI para
				electrónica avanzada, podemos apoyar su visión.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>PCBs flexibles y rígido-flexibles disponibles.</li>
				<li>PCBs con control de impedancia.</li>
				<li>Manejo de materiales de alta frecuencia (por ejemplo, Rogers).</li>
				<li>Diseños HDI con microvías y vías en las almohadillas.</li>
			</ul>
		</div>
	</Layout>
{/if}
