<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="Multi-Layer Laminated Structure"
		description="Explore our multi-layer laminated PCB structures designed for complex, high-performance applications."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Multi-Layer Laminated Structure</h1>
			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we specialize in multi-layer laminated PCB
				structures that offer unparalleled performance and reliability for high-density, complex circuit designs.
			</p>
			<p class="text-gray-600 mb-8">
				Our multi-layer PCBs are engineered for demanding applications, from high-speed digital circuits to RF
				communications, automotive, medical devices, and industrial electronics. These PCBs are ideal for projects that
				require a compact design without compromising performance.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">What are Multi-Layer Laminated PCBs?</h2>
			<p class="text-gray-600 mb-4">
				Multi-layer laminated PCBs are boards that consist of three or more conductive layers separated by insulating
				layers, which are bonded together under high heat and pressure. These layers are interconnected through vias to
				create complex circuit paths.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Three or more conductive layers for complex circuit designs.</li>
				<li>Insulating layers for better signal integrity and isolation.</li>
				<li>Efficient use of space for compact, high-density designs.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Key Features of Multi-Layer Laminated PCBs</h2>
			<p class="text-gray-600 mb-4">
				Multi-layer laminated PCBs provide numerous advantages, including enhanced circuit density, improved signal
				integrity, and better electrical performance. These features make them a perfect choice for high-frequency and
				high-speed applications.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Improved signal integrity and reduced electromagnetic interference (EMI).</li>
				<li>Supports high-frequency and high-speed circuit designs.</li>
				<li>Compact and lightweight for space-constrained applications.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Design Considerations</h2>
			<p class="text-gray-600 mb-4">
				Designing a multi-layer PCB requires careful consideration of layer stacking, signal integrity, power
				management, and thermal management. Our experienced team ensures that every design is optimized for the highest
				performance and reliability.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Careful planning of signal layer placement to avoid interference.</li>
				<li>Power and ground planes for better current distribution and noise reduction.</li>
				<li>Thermal management to ensure proper heat dissipation.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Multi-Layer Laminated PCBs</h2>
			<p class="text-gray-600 mb-4">
				These advanced PCBs are widely used in industries that require high-density designs, such as telecommunications,
				automotive, medical, and aerospace sectors. Their versatility makes them suitable for a variety of applications,
				from consumer electronics to complex industrial systems.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Telecommunications: Used in RF and high-frequency circuits.</li>
				<li>Automotive: Essential for advanced control systems and sensors.</li>
				<li>Medical: Ideal for compact, reliable devices like pacemakers and diagnostic equipment.</li>
				<li>Aerospace: Used in satellites, avionics, and other space systems.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose Our Multi-Layer Laminated PCBs?</h2>
			<p class="text-gray-600 mb-4">
				At MMWPCB, we provide high-quality multi-layer laminated PCBs that meet your specific design requirements,
				delivering exceptional performance, durability, and reliability. Our state-of-the-art manufacturing process
				ensures every board is crafted with precision and attention to detail.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Top-tier manufacturing process for precision and accuracy.</li>
				<li>Rigorous testing and quality control for every board.</li>
				<li>Fast turnaround times and flexible design support to meet deadlines.</li>
			</ul>

			<p class="text-gray-600">
				Whether you're working on a high-speed digital circuit or an intricate aerospace project, our multi-layer
				laminated PCBs provide the reliability and performance you need to bring your designs to life.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="多层叠层结构"
		description="探索我们的多层叠层PCB结构，专为复杂的高性能应用设计。"
		button={{ title: '即时报价 & 在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">多层叠层结构</h1>
			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span>，我们专注于多层叠层PCB结构，
				这些结构提供了无与伦比的性能和可靠性，适用于高密度、复杂的电路设计。
			</p>
			<p class="text-gray-600 mb-8">
				我们的多层PCB专为要求苛刻的应用而设计，从高速数字电路到射频通信、汽车、医疗设备和工业电子产品。
				这些PCB非常适合需要紧凑设计而不妥协性能的项目。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">什么是多层叠层PCB？</h2>
			<p class="text-gray-600 mb-4">
				多层叠层PCB是由三层或更多导电层和绝缘层组成的电路板，这些层在高温和高压下粘合在一起。通过通孔连接这些层，
				以创建复杂的电路路径。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>三层或更多导电层，适用于复杂的电路设计。</li>
				<li>绝缘层提供更好的信号完整性和隔离性。</li>
				<li>有效利用空间，适用于紧凑的高密度设计。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">多层叠层PCB的主要特点</h2>
			<p class="text-gray-600 mb-4">
				多层叠层PCB提供了许多优势，包括增强的电路密度、改善的信号完整性和更好的电气性能。这些特点使其成为高速和高频应用的完美选择。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>改善信号完整性，减少电磁干扰（EMI）。</li>
				<li>支持高频和高速电路设计。</li>
				<li>紧凑轻巧，适用于空间受限的应用。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">设计考虑因素</h2>
			<p class="text-gray-600 mb-4">
				设计多层PCB需要仔细考虑层堆叠、信号完整性、电源管理和热管理。我们经验丰富的团队确保每个设计都针对最高的性能和可靠性进行优化。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>仔细规划信号层放置，以避免干扰。</li>
				<li>电源和接地平面，以更好地分配电流并减少噪声。</li>
				<li>热管理，确保适当的热散发。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">多层叠层PCB的应用</h2>
			<p class="text-gray-600 mb-4">
				这些先进的PCB广泛应用于需要高密度设计的行业，如通信、汽车、医疗和航空航天行业。其多功能性使其适用于各种应用，
				从消费电子到复杂的工业系统。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>通信：用于射频和高频电路。</li>
				<li>汽车：对先进的控制系统和传感器至关重要。</li>
				<li>医疗：适用于紧凑、可靠的设备，如心脏起搏器和诊断设备。</li>
				<li>航空航天：用于卫星、航空电子设备和其他空间系统。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么选择我们的多层叠层PCB？</h2>
			<p class="text-gray-600 mb-4">
				在MMWPCB，我们提供高质量的多层叠层PCB，满足您的特定设计需求，提供卓越的性能、耐用性和可靠性。
				我们的先进制造工艺确保每块电路板都精确制作，注重每个细节。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>顶级制造工艺，确保精度和准确性。</li>
				<li>严格的测试和质量控制，确保每块电路板的质量。</li>
				<li>快速周转时间和灵活的设计支持，以满足截止日期。</li>
			</ul>

			<p class="text-gray-600">
				无论您是在处理高速数字电路还是复杂的航空航天项目，我们的多层叠层PCB都能提供所需的可靠性和性能，
				帮助您将设计付诸实践。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Structure Laminée Multicouche"
		description="Explorez nos structures PCB multicouches laminées conçues pour des applications complexes et à haute performance."
		button={{ title: 'Devis Instantané & Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Structure Laminée Multicouche</h1>
			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous sommes spécialisés dans les structures PCB
				multicouches laminées qui offrent des performances et une fiabilité inégalées pour des conceptions de circuits
				complexes à haute densité.
			</p>
			<p class="text-gray-600 mb-8">
				Nos PCBs multicouches sont conçus pour des applications exigeantes, allant des circuits numériques haute vitesse
				aux communications RF, à l'automobile, aux dispositifs médicaux et à l'électronique industrielle. Ces PCBs sont
				idéaux pour des projets nécessitant une conception compacte sans compromettre la performance.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Qu'est-ce qu'un PCB Multicouche Laminé ?</h2>
			<p class="text-gray-600 mb-4">
				Les PCB multicouches laminés sont des cartes composées de trois couches ou plus de conducteurs séparées par des
				couches isolantes, lesquelles sont fusionnées ensemble sous haute température et pression. Ces couches sont
				interconnectées par des vias pour créer des chemins de circuit complexes.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Trois couches ou plus de conducteurs pour des conceptions de circuits complexes.</li>
				<li>Couches isolantes pour une meilleure intégrité du signal et une meilleure isolation.</li>
				<li>Utilisation efficace de l'espace pour des conceptions compactes et à haute densité.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				Caractéristiques principales des PCB Multicouches Laminés
			</h2>
			<p class="text-gray-600 mb-4">
				Les PCB multicouches laminés offrent de nombreux avantages, notamment une densité de circuits accrue, une
				meilleure intégrité du signal et une performance électrique améliorée. Ces caractéristiques en font le choix
				idéal pour des applications à haute fréquence et haute vitesse.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Amélioration de l'intégrité du signal et réduction des interférences électromagnétiques (EMI).</li>
				<li>Soutient les conceptions de circuits haute fréquence et haute vitesse.</li>
				<li>Compact et léger pour les applications à espace limité.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considérations de Conception</h2>
			<p class="text-gray-600 mb-4">
				La conception d'un PCB multicouche nécessite une planification minutieuse du empilement des couches, de
				l'intégrité du signal, de la gestion de l'alimentation et de la gestion thermique. Notre équipe expérimentée
				veille à ce que chaque conception soit optimisée pour des performances et une fiabilité maximales.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Planification minutieuse du placement des couches de signal pour éviter les interférences.</li>
				<li>Plans d'alimentation et de masse pour une meilleure distribution du courant et réduction du bruit.</li>
				<li>Gestion thermique pour assurer une dissipation thermique adéquate.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications des PCB Multicouches Laminés</h2>
			<p class="text-gray-600 mb-4">
				Ces PCB avancés sont largement utilisés dans les secteurs nécessitant des conceptions à haute densité, tels que
				les télécommunications, l'automobile, les dispositifs médicaux et l'aérospatiale. Leur polyvalence les rend
				adaptés à une variété d'applications, des produits électroniques grand public aux systèmes industriels
				complexes.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Télécommunications : Utilisés dans les circuits RF et haute fréquence.</li>
				<li>Automobile : Essentiels pour les systèmes de contrôle avancés et les capteurs.</li>
				<li>
					Médical : Idéals pour des dispositifs compacts et fiables tels que les stimulateurs cardiaques et les
					équipements de diagnostic.
				</li>
				<li>Aérospatiale : Utilisés dans les satellites, l'avionique et d'autres systèmes spatiaux.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi Choisir Nos PCB Multicouches Laminés ?</h2>
			<p class="text-gray-600 mb-4">
				Chez MMWPCB, nous fournissons des PCB multicouches laminés de haute qualité qui répondent à vos exigences de
				conception spécifiques, offrant des performances exceptionnelles, une durabilité et une fiabilité. Notre
				processus de fabrication de pointe garantit que chaque carte est réalisée avec précision et attention aux
				détails.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Processus de fabrication de premier ordre pour une précision et une exactitude maximales.</li>
				<li>Tests rigoureux et contrôle qualité pour chaque carte.</li>
				<li>Délais d'exécution rapides et soutien à la conception flexible pour respecter les échéances.</li>
			</ul>

			<p class="text-gray-600">
				Que vous travailliez sur un circuit numérique haute vitesse ou un projet complexe dans l'aérospatiale, nos PCB
				multicouches laminés offrent la fiabilité et la performance dont vous avez besoin pour concrétiser vos
				conceptions.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Estructura Laminada Multicapa"
		description="Explore nuestras estructuras PCB multicapa laminadas diseñadas para aplicaciones complejas y de alto rendimiento."
		button={{ title: 'Presupuesto Instantáneo y Ordena en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Estructura Laminada Multicapa</h1>
			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, nos especializamos en estructuras PCB multicapa
				laminadas que ofrecen un rendimiento y fiabilidad incomparables para diseños de circuitos complejos y de alta
				densidad.
			</p>
			<p class="text-gray-600 mb-8">
				Nuestros PCBs multicapa están diseñados para aplicaciones exigentes, desde circuitos digitales de alta velocidad
				hasta comunicaciones RF, automotriz, dispositivos médicos y electrónica industrial. Estos PCBs son ideales para
				proyectos que requieren un diseño compacto sin comprometer el rendimiento.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Qué son los PCB Multicapa Laminados?</h2>
			<p class="text-gray-600 mb-4">
				Los PCB multicapa laminados son placas que constan de tres o más capas conductoras separadas por capas
				aislantes, las cuales se unen bajo alta temperatura y presión. Estas capas se interconectan a través de vias
				para crear caminos de circuito complejos.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Tres o más capas conductoras para diseños de circuitos complejos.</li>
				<li>Capas aislantes para una mejor integridad de la señal y aislamiento.</li>
				<li>Uso eficiente del espacio para diseños compactos y de alta densidad.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Características Clave de los PCB Multicapa Laminados</h2>
			<p class="text-gray-600 mb-4">
				Los PCB multicapa laminados ofrecen numerosas ventajas, incluyendo una mayor densidad de circuitos, mejor
				integridad de la señal y un mejor rendimiento eléctrico. Estas características los convierten en la opción
				perfecta para aplicaciones de alta frecuencia y alta velocidad.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Mejora de la integridad de la señal y reducción de interferencias electromagnéticas (EMI).</li>
				<li>Soporta diseños de circuitos de alta frecuencia y alta velocidad.</li>
				<li>Compacto y ligero para aplicaciones con limitaciones de espacio.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Consideraciones de Diseño</h2>
			<p class="text-gray-600 mb-4">
				Diseñar un PCB multicapa requiere una planificación cuidadosa de la pila de capas, la integridad de la señal, la
				gestión de la energía y la gestión térmica. Nuestro equipo experimentado asegura que cada diseño esté optimizado
				para el mejor rendimiento y fiabilidad.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Planificación cuidadosa de la colocación de las capas de señal para evitar interferencias.</li>
				<li>Planes de energía y tierra para una mejor distribución de corriente y reducción de ruido.</li>
				<li>Gestión térmica para asegurar una disipación adecuada del calor.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Aplicaciones de los PCB Multicapa Laminados</h2>
			<p class="text-gray-600 mb-4">
				Estos avanzados PCBs se utilizan ampliamente en sectores que requieren diseños de alta densidad, como
				telecomunicaciones, automotriz, médicos y aeroespaciales. Su versatilidad los hace adecuados para una variedad
				de aplicaciones, desde electrónica de consumo hasta sistemas industriales complejos.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Telecomunicaciones: Utilizados en circuitos RF y de alta frecuencia.</li>
				<li>Automotriz: Esenciales para sistemas avanzados de control y sensores.</li>
				<li>Médico: Ideales para dispositivos compactos y fiables como marcapasos y equipos de diagnóstico.</li>
				<li>Aeroespacial: Utilizados en satélites, avionica y otros sistemas espaciales.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por Qué Elegir Nuestros PCB Multicapa Laminados?</h2>
			<p class="text-gray-600 mb-4">
				En MMWPCB, proporcionamos PCB multicapa laminados de alta calidad que cumplen con sus requisitos de diseño
				específicos, ofreciendo un rendimiento excepcional, durabilidad y fiabilidad. Nuestro proceso de fabricación de
				última generación garantiza que cada placa esté fabricada con precisión y atención a los detalles.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Proceso de fabricación de primer nivel para precisión y exactitud.</li>
				<li>Pruebas rigurosas y control de calidad para cada placa.</li>
				<li>Tiempos de entrega rápidos y soporte de diseño flexible para cumplir con los plazos.</li>
			</ul>

			<p class="text-gray-600">
				Ya sea que esté trabajando en un circuito digital de alta velocidad o en un intrincado proyecto aeroespacial,
				nuestros PCB multicapa laminados ofrecen la fiabilidad y el rendimiento que necesita para hacer realidad sus
				diseños.
			</p>
		</div>
	</Layout>
{/if}
