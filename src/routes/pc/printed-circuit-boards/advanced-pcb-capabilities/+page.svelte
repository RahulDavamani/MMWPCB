<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="Advanced PCB Capabilities"
		description="Explore our advanced PCB manufacturing capabilities for high-performance designs."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Advanced PCB Capabilities</h1>
			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we specialize in advanced PCB solutions that cater
				to the needs of modern electronics. From high-frequency applications to precision microelectronics, our advanced
				manufacturing capabilities ensure that your designs meet the highest performance standards.
			</p>
			<p class="text-gray-600 mb-8">
				We use cutting-edge technology and top-quality materials to produce PCBs that offer unparalleled reliability,
				accuracy, and speed, ensuring they are perfect for a wide range of industries like telecommunications,
				aerospace, automotive, and medical devices.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">High-Frequency PCBs</h2>
			<p class="text-gray-600 mb-4">
				For applications requiring superior signal integrity and minimal loss, our high-frequency PCBs are designed to
				handle frequencies up to 100 GHz, using materials such as Rogers and Teflon.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Materials: Rogers, Teflon, and other high-frequency substrates.</li>
				<li>Impedance control for stable signal transmission.</li>
				<li>Supports microwave and millimeter-wave applications.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">HDI (High-Density Interconnect) PCBs</h2>
			<p class="text-gray-600 mb-4">
				HDI PCBs are perfect for applications that need a compact form factor with high performance. These boards allow
				for the integration of more components in a smaller area, ideal for mobile devices, wearables, and IoT.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Microvias, via-in-pad, and stacked vias for dense designs.</li>
				<li>High precision and accuracy in layer alignment.</li>
				<li>Ideal for mobile devices, wearable tech, and IoT devices.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Flexible and Rigid-Flex PCBs</h2>
			<p class="text-gray-600 mb-4">
				Our flexible and rigid-flex PCBs are engineered for applications that require boards to bend, fold, or twist
				without compromising performance. These solutions are commonly used in wearable devices, complex aerospace
				applications, and more.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Available in single-sided, double-sided, and multilayer configurations.</li>
				<li>Custom shapes and sizes for unique designs.</li>
				<li>Supports extreme temperatures and harsh environments.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Our flexible PCBs offer high durability and flexibility, ensuring that your designs maintain integrity and
				performance even under challenging conditions.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Impedance-Controlled PCBs</h2>
			<p class="text-gray-600 mb-4">
				Impedance control is essential for high-speed circuits, where signal integrity is paramount. Our impedance-
				controlled PCBs maintain precise impedance values across the entire board, making them ideal for applications
				like data transmission and RF circuits.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Maintains precise impedance values for stable signal transmission.</li>
				<li>Ideal for high-speed digital and analog circuits.</li>
				<li>Used in applications such as 5G, data centers, and RF circuits.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Advanced Drilling and Via Technology</h2>
			<p class="text-gray-600 mb-4">
				Our drilling capabilities support complex designs, including microvias and blind vias, to create the high-
				precision holes needed for advanced PCBs. We also offer via-in-pad and stacked vias to meet the most demanding
				design requirements.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Microvias as small as 0.1mm in diameter.</li>
				<li>Via-in-pad and blind/buried vias for complex designs.</li>
				<li>Drill hole tolerances as tight as ±0.05mm.</li>
			</ul>

			<p class="text-gray-600">
				These advanced drilling and via technologies ensure that every design, no matter how intricate, is produced with
				high precision, delivering reliable and functional PCBs for even the most demanding applications.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="高级PCB能力"
		description="探索我们为高性能设计提供的先进PCB制造能力。"
		button={{ title: '即时报价并在线下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">高级PCB能力</h1>
			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们专注于提供先进的PCB解决方案，满足现代电子产品的需求。
				从高频应用到精密微电子，我们的先进制造能力确保您的设计符合最高的性能标准。
			</p>
			<p class="text-gray-600 mb-8">
				我们采用最先进的技术和顶级材料，生产具有无与伦比的可靠性、准确性和速度的PCB，确保其适用于电信、航空航天、汽车和医疗设备等多个行业。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">高频PCB</h2>
			<p class="text-gray-600 mb-4">
				对于需要卓越信号完整性和最小损耗的应用，我们的高频PCB设计可处理高达100 GHz的频率，采用Rogers和特氟龙等材料。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>材料：Rogers、特氟龙等高频基板。</li>
				<li>阻抗控制以确保稳定的信号传输。</li>
				<li>支持微波和毫米波应用。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">HDI（高密度互连）PCB</h2>
			<p class="text-gray-600 mb-4">
				HDI
				PCB非常适合需要紧凑外形和高性能的应用。这些电路板允许在较小区域内集成更多组件，非常适用于移动设备、可穿戴设备和物联网。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>微孔、焊盘内孔和堆叠孔用于密集设计。</li>
				<li>层对齐的高精度和准确性。</li>
				<li>适用于移动设备、可穿戴技术和物联网设备。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">柔性和刚柔结合PCB</h2>
			<p class="text-gray-600 mb-4">
				我们的柔性和刚柔结合PCB专为需要弯曲、折叠或扭曲的应用而设计，同时不影响性能。这些解决方案通常用于可穿戴设备、复杂的航空航天应用等。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>提供单面、双面和多层配置。</li>
				<li>为独特设计提供定制形状和尺寸。</li>
				<li>支持极端温度和恶劣环境。</li>
			</ul>

			<p class="text-gray-600 mb-8">我们的柔性PCB提供高耐用性和灵活性，确保您的设计在挑战性环境下保持完整性和性能。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">阻抗控制PCB</h2>
			<p class="text-gray-600 mb-4">
				阻抗控制对于高速电路至关重要，其中信号完整性是关键。我们的阻抗控制PCB确保整个电路板的阻抗值保持精确，非常适合数据传输和射频电路等应用。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>保持精确的阻抗值以确保稳定的信号传输。</li>
				<li>非常适用于高速数字和模拟电路。</li>
				<li>广泛应用于5G、数据中心和射频电路。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">先进的钻孔和孔技术</h2>
			<p class="text-gray-600 mb-4">
				我们的钻孔能力支持复杂设计，包括微孔和盲孔，以创建所需的高精度孔洞。我们还提供焊盘内孔和堆叠孔，以满足最苛刻的设计要求。
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>最小钻孔直径为0.1mm。</li>
				<li>焊盘内孔和盲孔/埋孔支持复杂设计。</li>
				<li>钻孔公差可达到±0.05mm。</li>
			</ul>

			<p class="text-gray-600">
				这些先进的钻孔和孔技术确保每个设计无论多么复杂，都能以高精度生产，提供可靠和功能强大的PCB，满足最苛刻的应用需求。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Capacités Avancées de PCB"
		description="Explorez nos capacités de fabrication de PCB avancées pour des conceptions haute performance."
		button={{ title: 'Devis Instantané & Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Capacités Avancées de PCB</h1>
			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous nous spécialisons dans les solutions PCB
				avancées qui répondent aux besoins de l'électronique moderne. Des applications haute fréquence aux
				microélectroniques de précision, nos capacités de fabrication avancées garantissent que vos conceptions
				respectent les normes de performance les plus élevées.
			</p>
			<p class="text-gray-600 mb-8">
				Nous utilisons des technologies de pointe et des matériaux de haute qualité pour produire des PCB offrant une
				fiabilité, une précision et une vitesse inégalées, garantissant leur adéquation avec une large gamme
				d'industries comme les télécommunications, l'aérospatiale, l'automobile et les dispositifs médicaux.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCB Haute Fréquence</h2>
			<p class="text-gray-600 mb-4">
				Pour les applications nécessitant une intégrité de signal supérieure et des pertes minimales, nos PCB haute
				fréquence sont conçus pour traiter des fréquences allant jusqu'à 100 GHz, en utilisant des matériaux tels que
				Rogers et Téflon.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Matériaux : Rogers, Téflon et autres substrats haute fréquence.</li>
				<li>Contrôle d'impédance pour une transmission de signal stable.</li>
				<li>Prise en charge des applications micro-ondes et des ondes millimétriques.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">HDI (Interconnexion à Haute Densité) PCB</h2>
			<p class="text-gray-600 mb-4">
				Les PCB HDI sont parfaits pour les applications nécessitant un facteur de forme compact avec des performances
				élevées. Ces cartes permettent l'intégration de plus de composants dans une zone plus petite, idéales pour les
				appareils mobiles, les dispositifs portables et l'IoT.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Microvia, via-in-pad et vias empilées pour des conceptions denses.</li>
				<li>Haute précision et exactitude dans l'alignement des couches.</li>
				<li>Idéal pour les appareils mobiles, les technologies portables et les dispositifs IoT.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCB Flexibles et Rigid-Flex</h2>
			<p class="text-gray-600 mb-4">
				Nos PCB flexibles et rigid-flex sont conçus pour des applications nécessitant des cartes qui se plient, se
				plient ou se tordent sans compromettre les performances. Ces solutions sont couramment utilisées dans les
				dispositifs portables, les applications aérospatiales complexes et bien plus encore.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Disponible en configurations simple face, double face et multicouche.</li>
				<li>Formes et tailles personnalisées pour des conceptions uniques.</li>
				<li>Prend en charge des températures extrêmes et des environnements hostiles.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Nos PCB flexibles offrent une grande durabilité et flexibilité, garantissant que vos conceptions maintiennent
				leur intégrité et performances même dans des conditions difficiles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCB à Contrôle d'Impédance</h2>
			<p class="text-gray-600 mb-4">
				Le contrôle d'impédance est essentiel pour les circuits haute vitesse, où l'intégrité du signal est primordiale.
				Nos PCB à contrôle d'impédance maintiennent des valeurs d'impédance précises sur toute la carte, ce qui les rend
				idéaux pour des applications comme les transmissions de données et les circuits RF.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Maintient des valeurs d'impédance précises pour une transmission stable du signal.</li>
				<li>Idéal pour les circuits numériques et analogiques haute vitesse.</li>
				<li>Utilisé dans des applications telles que la 5G, les centres de données et les circuits RF.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Technologie Avancée de Perçage et de Via</h2>
			<p class="text-gray-600 mb-4">
				Nos capacités de perçage supportent des conceptions complexes, y compris les microvias et les vias aveugles,
				pour créer les trous de haute précision nécessaires pour les PCB avancés. Nous proposons également des vias dans
				des pads et des vias empilés pour répondre aux exigences de conception les plus exigeantes.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Microvias aussi petites que 0.1mm de diamètre.</li>
				<li>Vias dans pads et vias aveugles/enterrés pour des conceptions complexes.</li>
				<li>Tolérance de perçage aussi précise que ±0.05mm.</li>
			</ul>

			<p class="text-gray-600">
				Ces technologies de perçage et de vias avancées garantissent que chaque conception, aussi complexe soit-elle,
				est produite avec une grande précision, offrant des PCB fiables et fonctionnels même pour les applications les
				plus exigeantes.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Capacidades Avanzadas de PCB"
		description="Explore nuestras capacidades avanzadas de fabricación de PCB para diseños de alto rendimiento."
		button={{ title: 'Cotización Instantánea y Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Capacidades Avanzadas de PCB</h1>
			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, nos especializamos en soluciones avanzadas de PCB
				que satisfacen las necesidades de la electrónica moderna. Desde aplicaciones de alta frecuencia hasta
				microelectrónica de precisión, nuestras capacidades de fabricación avanzadas garantizan que sus diseños cumplan
				con los más altos estándares de rendimiento.
			</p>
			<p class="text-gray-600 mb-8">
				Usamos tecnología de vanguardia y materiales de alta calidad para producir PCB que ofrecen una fiabilidad,
				precisión y velocidad incomparables, garantizando que sean perfectos para una amplia gama de industrias como
				telecomunicaciones, aeroespacial, automotriz y dispositivos médicos.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCBs de Alta Frecuencia</h2>
			<p class="text-gray-600 mb-4">
				Para aplicaciones que requieren una integridad de señal superior y mínima pérdida, nuestros PCBs de alta
				frecuencia están diseñados para manejar frecuencias de hasta 100 GHz, utilizando materiales como Rogers y
				Teflón.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Materiales: Rogers, Teflón y otros sustratos de alta frecuencia.</li>
				<li>Control de impedancia para transmisión estable de señales.</li>
				<li>Soporta aplicaciones de microondas y ondas milimétricas.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCBs HDI (Interconexión de Alta Densidad)</h2>
			<p class="text-gray-600 mb-4">
				Los PCBs HDI son perfectos para aplicaciones que requieren un factor de forma compacto con un alto rendimiento.
				Estas placas permiten la integración de más componentes en un área más pequeña, ideales para dispositivos
				móviles, dispositivos portátiles e IoT.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Microvias, vias en pad y vias apiladas para diseños densos.</li>
				<li>Alta precisión y exactitud en la alineación de capas.</li>
				<li>Ideales para dispositivos móviles, tecnología portátil e IoT.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCBs Flexibles y Rigid-Flex</h2>
			<p class="text-gray-600 mb-4">
				Nuestros PCBs flexibles y rigid-flex están diseñados para aplicaciones que requieren placas que se doblen,
				plieguen o torzan sin comprometer el rendimiento. Estas soluciones se utilizan comúnmente en dispositivos
				portátiles, aplicaciones aeroespaciales complejas y más.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Disponible en configuraciones de una cara, dos caras y multicapa.</li>
				<li>Formas y tamaños personalizados para diseños únicos.</li>
				<li>Soporta temperaturas extremas y ambientes hostiles.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Nuestros PCBs flexibles ofrecen alta durabilidad y flexibilidad, asegurando que sus diseños mantengan su
				integridad y rendimiento incluso bajo condiciones desafiantes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCBs con Control de Impedancia</h2>
			<p class="text-gray-600 mb-4">
				El control de impedancia es esencial para los circuitos de alta velocidad, donde la integridad de la señal es
				clave. Nuestros PCBs con control de impedancia mantienen valores precisos de impedancia a través de toda la
				placa, lo que los hace ideales para aplicaciones como transmisión de datos y circuitos RF.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Mantiene valores precisos de impedancia para una transmisión estable de señales.</li>
				<li>Ideal para circuitos digitales y analógicos de alta velocidad.</li>
				<li>Utilizado en aplicaciones como 5G, centros de datos y circuitos RF.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Tecnología Avanzada de Perforación y Vías</h2>
			<p class="text-gray-600 mb-4">
				Nuestras capacidades de perforación soportan diseños complejos, incluyendo microvias y vías ciegas, para crear
				los agujeros de alta precisión necesarios para PCBs avanzados. También ofrecemos vías en pad y vías apiladas
				para satisfacer los requisitos más exigentes de diseño.
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Microvias tan pequeñas como 0.1mm de diámetro.</li>
				<li>Vías en pad y vías ciegas/enterradas para diseños complejos.</li>
				<li>Tolerancias de perforación tan precisas como ±0.05mm.</li>
			</ul>

			<p class="text-gray-600">
				Estas tecnologías avanzadas de perforación y vías aseguran que cada diseño, por más intrincado que sea, se
				produzca con alta precisión, proporcionando PCBs fiables y funcionales incluso para las aplicaciones más
				exigentes.
			</p>
		</div>
	</Layout>
{/if}
