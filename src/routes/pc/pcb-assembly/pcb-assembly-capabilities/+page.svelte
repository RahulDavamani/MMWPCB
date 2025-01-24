<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'pcbAssembly'}
		title="PCB Assembly Capabilities"
		description="Explore the extensive capabilities of our PCB assembly services for diverse applications."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Assembly Capabilities</h1>

			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, our PCB assembly capabilities are designed to
				accommodate a wide range of designs, from simple prototypes to complex, high-volume production runs. Whether
				you're working on small consumer electronics or advanced industrial applications, our team is equipped to
				deliver precision and reliability across various industries.
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
				large production runs. Our production lines are optimized for high throughput while ensuring the integrity of
				each board.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Prototyping and Low-Volume Assembly</h2>
			<p class="text-gray-600 mb-4">
				For companies looking to test new designs, our prototyping and low-volume assembly services are a perfect fit.
				We offer fast-turnaround prototypes, giving you the ability to validate your designs before committing to mass
				production.
			</p>
			<p class="text-gray-600 mb-4">
				We understand that prototyping is a crucial stage of development, and our team ensures that each prototype is
				assembled to the highest standards. This helps you refine your design and make improvements before moving
				forward with larger runs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Advanced Assembly Technologies</h2>
			<p class="text-gray-600 mb-4">
				We offer a variety of advanced assembly technologies that are tailored to specific needs. These technologies
				include:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Fine-pitch Component Placement:</strong> Ideal for designs with small components, ensuring accuracy and
					reliability.
				</li>
				<li>
					<strong>Ball Grid Array (BGA) Assembly:</strong> For complex and high-performance devices, we offer precise BGA
					soldering using advanced reflow techniques.
				</li>
				<li>
					<strong>Flex and Rigid-Flex PCBs:</strong> Capable of handling flexible and rigid-flex PCB assembly, ideal for
					applications where space constraints and bending are factors.
				</li>
				<li>
					<strong>HDI Assembly:</strong> High-Density Interconnect (HDI) boards are supported for applications requiring
					higher component density and signal integrity.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Component Sourcing</h2>
			<p class="text-gray-600 mb-4">
				We work with trusted component suppliers to ensure that the right parts are sourced for your assembly project.
				Whether you're using standard components or specialized parts, we can handle all your sourcing needs. Our
				sourcing capabilities include:
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
				When you choose <span class="text-blue-600 font-semibold">MMWPCB</span> for your PCB assembly, you’re partnering
				with a team that has extensive experience and a commitment to quality. Our full range of capabilities ensures that
				we can meet the demands of any project, no matter how complex. From fast prototyping to large-scale production, we’re
				here to help bring your designs to life.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'pcbAssembly'}
		title="PCB 组装能力"
		description="探索我们 PCB 组装服务在多种应用中的广泛能力。"
		button={{ title: '即时报价 & 在线下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB 组装能力</h1>

			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span>，我们的 PCB
				组装能力旨在满足各种设计需求，从简单的原型设计到复杂的大批量生产。无论您是开发小型消费电子产品还是高级工业应用，我们的团队都具备为各种行业提供精确和可靠服务的能力。
			</p>

			<p class="text-gray-600 mb-8">
				我们利用先进的设备和丰富的经验，提供全面的组装服务，包括表面贴装技术 (SMT)、通孔技术 (THT)
				和混合技术组装，确保您的设计以高精度和高质量实现。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">大批量生产</h2>
			<p class="text-gray-600 mb-4">
				我们在大批量 PCB
				组装生产方面表现卓越，提供快速周转时间且不影响质量。我们的自动化组装线结合先进的检测系统，可以高效处理大规模订单，同时保证所有单元的精确性。
			</p>
			<p class="text-gray-600 mb-4">
				从汽车电子到消费电子产品，我们可以支持那些对大批量生产质量和速度都有需求的行业。我们的生产线经过优化，可实现高吞吐量，同时确保每块电路板的完整性。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">原型和小批量组装</h2>
			<p class="text-gray-600 mb-4">
				对于希望测试新设计的公司，我们的原型和小批量组装服务是理想选择。我们提供快速周转的原型，让您可以在大批量生产前验证设计。
			</p>
			<p class="text-gray-600 mb-4">
				我们了解原型开发是关键的开发阶段，我们的团队确保每个原型都按照最高标准组装。这有助于您优化设计并在大规模生产前进行改进。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">先进的组装技术</h2>
			<p class="text-gray-600 mb-4">我们提供多种针对特定需求定制的先进组装技术。这些技术包括：</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>细间距元件贴装：</strong> 适用于小型元件的设计，确保精确性和可靠性。
				</li>
				<li>
					<strong>球栅阵列 (BGA) 组装：</strong> 适用于复杂和高性能设备，我们使用先进的回流技术进行精确的 BGA 焊接。
				</li>
				<li>
					<strong>柔性和刚柔结合 PCB：</strong> 能够处理柔性和刚柔结合 PCB 组装，适合空间有限和需要弯曲的应用。
				</li>
				<li>
					<strong>高密度互连 (HDI) 组装：</strong> 支持高元件密度和信号完整性要求的应用。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">元件采购</h2>
			<p class="text-gray-600 mb-4">
				我们与可信的元件供应商合作，确保为您的组装项目采购合适的元件。无论您使用的是标准元件还是专业元件，我们都可以满足您的所有采购需求。我们的采购能力包括：
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>从全球认证供应商采购元件。</li>
				<li>元件采购的端到端管理，包括库存控制和物流。</li>
				<li>通过替代采购方法支持过时或难以找到的元件。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">测试与质量保证</h2>
			<p class="text-gray-600 mb-4">
				我们拥有完善的测试与质量保证计划，确保每个 PCB 组装符合最高标准。从在线测试 (ICT)
				到功能测试，我们进行全面检查，确保您的 PCB 正常运行。
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>自动光学检测 (AOI) 用于检查焊点和元件贴装。</li>
				<li>在线测试 (ICT) 确保功能正常。</li>
				<li>功能测试验证组装的整体性能。</li>
				<li>环境测试，包括温度、湿度等可能影响性能的因素。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么选择 MMWPCB？</h2>
			<p class="text-gray-600 mb-4">
				选择 <span class="text-blue-600 font-semibold">MMWPCB</span> 作为您的 PCB 组装合作伙伴，意味着与一个拥有丰富经验和对质量承诺的团队合作。我们全面的能力确保能够满足任何项目的需求，无论其复杂程度如何。从快速原型开发到大规模生产，我们都可以帮助您将设计变为现实。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}<Layout
		section={'pcbAssembly'}
		title="Capacités d'assemblage PCB"
		description="Explorez les vastes capacités de nos services d'assemblage PCB pour diverses applications."
		button={{ title: 'Devis instantané & Commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Capacités d'assemblage PCB</h1>

			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nos capacités d'assemblage PCB sont conçues pour
				accueillir une large gamme de conceptions, des prototypes simples aux séries de production complexes et en grand
				volume. Que vous travailliez sur de petits appareils électroniques grand public ou des applications
				industrielles avancées, notre équipe est équipée pour offrir précision et fiabilité dans divers secteurs.
			</p>

			<p class="text-gray-600 mb-8">
				Nous utilisons des équipements de pointe et une expérience approfondie pour fournir des services d'assemblage
				complets incluant la technologie de montage en surface (SMT), la technologie à trous traversants (THT) et
				l'assemblage de technologies mixtes, garantissant que vos conceptions prennent vie avec précision et qualité.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Production en grand volume</h2>
			<p class="text-gray-600 mb-4">
				Nous excellons dans la production d'assemblage PCB en grand volume, offrant des délais de traitement rapides
				sans compromettre la qualité. Nos lignes de montage automatisées, associées à des systèmes d'inspection avancés,
				nous permettent de traiter efficacement les commandes à grande échelle tout en maintenant la précision de chaque
				unité.
			</p>
			<p class="text-gray-600 mb-4">
				Des électroniques automobiles aux gadgets grand public, nous pouvons soutenir les secteurs qui exigent à la fois
				qualité et rapidité pour les productions en grand volume. Nos lignes de production sont optimisées pour un débit
				élevé tout en assurant l'intégrité de chaque carte.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Prototypage et assemblage en petit volume</h2>
			<p class="text-gray-600 mb-4">
				Pour les entreprises cherchant à tester de nouvelles conceptions, nos services de prototypage et d'assemblage en
				petit volume sont un choix parfait. Nous offrons des prototypes à retour rapide, vous permettant de valider vos
				conceptions avant de passer à la production de masse.
			</p>
			<p class="text-gray-600 mb-4">
				Nous comprenons que le prototypage est une étape cruciale du développement, et notre équipe s'assure que chaque
				prototype est assemblé selon les normes les plus élevées. Cela vous aide à affiner votre conception et à
				apporter des améliorations avant de passer à des séries plus importantes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Technologies d'assemblage avancées</h2>
			<p class="text-gray-600 mb-4">
				Nous proposons une variété de technologies d'assemblage avancées adaptées à des besoins spécifiques. Ces
				technologies comprennent :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Placement de composants à pas fin :</strong> Idéal pour les conceptions avec des composants de petite taille,
					garantissant précision et fiabilité.
				</li>
				<li>
					<strong>Assemblage Ball Grid Array (BGA) :</strong> Pour des appareils complexes et haute performance, nous proposons
					un soudage BGA précis en utilisant des techniques de refusion avancées.
				</li>
				<li>
					<strong>PCB flexibles et rigides-flexibles :</strong> Capables de gérer l'assemblage de PCB flexibles et rigides-flexibles,
					idéaux pour des applications où les contraintes d'espace et les flexions sont des facteurs importants.
				</li>
				<li>
					<strong>Assemblage HDI :</strong> Les cartes haute densité d'interconnexion (HDI) sont prises en charge pour des
					applications nécessitant une densité élevée de composants et une intégrité des signaux.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Approvisionnement en composants</h2>
			<p class="text-gray-600 mb-4">
				Nous collaborons avec des fournisseurs de composants de confiance pour garantir que les bonnes pièces sont
				sourcées pour votre projet d'assemblage. Que vous utilisiez des composants standard ou des pièces spécialisées,
				nous pouvons gérer tous vos besoins en matière d'approvisionnement. Nos capacités d'approvisionnement incluent :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Approvisionnement en composants auprès de fournisseurs certifiés à l'échelle mondiale.</li>
				<li>
					Gestion de l'approvisionnement des composants de bout en bout, y compris le contrôle des stocks et la
					logistique.
				</li>
				<li>
					Support pour les composants obsolètes ou difficiles à trouver grâce à des méthodes d'approvisionnement
					alternatives.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Tests et assurance qualité</h2>
			<p class="text-gray-600 mb-4">
				Nous avons un programme rigoureux de tests et d'assurance qualité qui garantit que chaque assemblage PCB
				respecte les normes les plus élevées. Des tests en circuit (ICT) aux tests fonctionnels, nous effectuons des
				contrôles complets pour nous assurer que vos PCB fonctionnent comme prévu.
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					Inspection optique automatisée (AOI) pour les vérifications visuelles des joints de soudure et de la position
					des composants.
				</li>
				<li>Tests en circuit (ICT) pour vérifier le bon fonctionnement.</li>
				<li>Tests fonctionnels pour valider la performance globale de l'assemblage.</li>
				<li>
					Tests environnementaux pour la température, l'humidité et d'autres facteurs pouvant affecter la performance.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi choisir MMWPCB ?</h2>
			<p class="text-gray-600 mb-4">
				En choisissant <span class="text-blue-600 font-semibold">MMWPCB</span> pour votre assemblage PCB, vous vous associez
				à une équipe ayant une grande expérience et un engagement envers la qualité. Notre gamme complète de capacités garantit
				que nous pouvons répondre aux exigences de tout projet, peu importe sa complexité. Que ce soit pour des prototypes
				rapides ou pour une production à grande échelle, nous sommes là pour donner vie à vos conceptions.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'pcbAssembly'}
		title="Capacidades de ensamblaje PCB"
		description="Explora las amplias capacidades de nuestros servicios de ensamblaje PCB para diversas aplicaciones."
		button={{ title: 'Cotización instantánea & Pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Capacidades de ensamblaje PCB</h1>

			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, nuestras capacidades de ensamblaje PCB están
				diseñadas para adaptarse a una amplia variedad de diseños, desde prototipos simples hasta producciones complejas
				y a gran escala. Ya sea que esté trabajando en dispositivos electrónicos de consumo pequeños o aplicaciones
				industriales avanzadas, nuestro equipo está capacitado para ofrecer precisión y confiabilidad en diversas
				industrias.
			</p>

			<p class="text-gray-600 mb-8">
				Utilizamos equipos de última generación y una amplia experiencia para ofrecer servicios de ensamblaje completos,
				que incluyen tecnología de montaje superficial (SMT), tecnología de orificio pasante (THT) y ensamblaje de
				tecnología mixta, asegurando que sus diseños cobren vida con precisión y calidad.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Producción a gran escala</h2>
			<p class="text-gray-600 mb-4">
				Excellamos en la producción de ensamblaje PCB a gran escala, ofreciendo tiempos de respuesta rápidos sin
				comprometer la calidad. Nuestras líneas de ensamblaje automatizadas, combinadas con sistemas avanzados de
				inspección, nos permiten procesar eficientemente pedidos a gran escala manteniendo la precisión de cada unidad.
			</p>
			<p class="text-gray-600 mb-4">
				Desde la electrónica automotriz hasta los dispositivos electrónicos de consumo, podemos respaldar las industrias
				que requieren tanto calidad como rapidez para producciones a gran escala. Nuestras líneas de producción están
				optimizadas para un alto rendimiento mientras mantenemos la integridad de cada placa.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Prototipos y ensamblaje a pequeña escala</h2>
			<p class="text-gray-600 mb-4">
				Para las empresas que buscan probar nuevos diseños, nuestros servicios de prototipos y ensamblaje a pequeña
				escala son la opción perfecta. Ofrecemos prototipos con tiempos de respuesta rápidos, lo que le permite validar
				sus diseños antes de pasar a la producción masiva.
			</p>
			<p class="text-gray-600 mb-4">
				Entendemos que el prototipado es una etapa clave del desarrollo, y nuestro equipo se asegura de que cada
				prototipo se ensamble según los estándares más altos. Esto le ayuda a perfeccionar su diseño y realizar mejoras
				antes de pasar a la producción a gran escala.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Tecnologías avanzadas de ensamblaje</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos una variedad de tecnologías avanzadas de ensamblaje adaptadas a necesidades específicas. Estas
				tecnologías incluyen:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Montaje de componentes de paso fino:</strong> Ideal para diseños con componentes pequeños, asegurando precisión
					y confiabilidad.
				</li>
				<li>
					<strong>Ensamblaje de Ball Grid Array (BGA):</strong> Para dispositivos complejos y de alto rendimiento, ofrecemos
					soldadura BGA precisa utilizando técnicas avanzadas de refusión.
				</li>
				<li>
					<strong>PCB flexibles y rígido-flexibles:</strong> Capaces de manejar ensamblajes de PCB flexibles y rígido-flexibles,
					ideales para aplicaciones donde el espacio limitado y las flexiones son factores importantes.
				</li>
				<li>
					<strong>Ensamblaje HDI:</strong> Se admiten placas de alta densidad de interconexión (HDI) para aplicaciones que
					requieren una alta densidad de componentes y la integridad de las señales.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Suministro de componentes</h2>
			<p class="text-gray-600 mb-4">
				Trabajamos con proveedores de componentes confiables para garantizar que se adquieran las piezas adecuadas para
				su proyecto de ensamblaje. Tanto si utiliza componentes estándar como piezas especializadas, podemos manejar
				todas sus necesidades de suministro. Nuestras capacidades de suministro incluyen:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Adquisición de componentes de proveedores certificados a nivel mundial.</li>
				<li>Gestión de suministro de componentes de principio a fin, incluyendo control de inventarios y logística.</li>
				<li>Apoyo para componentes obsoletos o difíciles de encontrar mediante métodos alternativos de adquisición.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pruebas y garantía de calidad</h2>
			<p class="text-gray-600 mb-4">
				Contamos con un programa de pruebas y garantía de calidad integral que garantiza que cada ensamblaje PCB cumpla
				con los más altos estándares. Desde pruebas en circuito (ICT) hasta pruebas funcionales, realizamos inspecciones
				exhaustivas para asegurarnos de que sus PCB funcionen como se espera.
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					Inspección óptica automatizada (AOI) para verificar visualmente las soldaduras y la colocación de componentes.
				</li>
				<li>Pruebas en circuito (ICT) para verificar la funcionalidad.</li>
				<li>Pruebas funcionales para validar el rendimiento general del ensamblaje.</li>
				<li>Pruebas ambientales para factores como temperatura, humedad y otros que puedan afectar el rendimiento.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por qué elegir MMWPCB?</h2>
			<p class="text-gray-600 mb-4">
				Al elegir <span class="text-blue-600 font-semibold">MMWPCB</span> para su ensamblaje PCB, está asociándose con un
				equipo que tiene una gran experiencia y un compromiso con la calidad. Nuestra gama completa de capacidades asegura
				que podemos satisfacer los requisitos de cualquier proyecto, sin importar su complejidad. Tanto si se trata de prototipos
				rápidos o de producción a gran escala, estamos aquí para hacer realidad sus diseños.
			</p>
		</div>
	</Layout>
{/if}
