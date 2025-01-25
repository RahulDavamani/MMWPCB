<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'pcbAssembly'}
		title="PCB Assembly Overview"
		description="Comprehensive PCB assembly services for your custom designs, from prototyping to full-scale production."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Assembly Overview</h1>

			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we offer a comprehensive range of PCB assembly
				services designed to meet the needs of any project, from initial prototype to large-scale production. Whether
				you are creating a custom PCB for a new product or require assembly for a batch of prototypes, our team provides
				the expertise and technology to ensure your design is brought to life with precision and quality.
			</p>

			<p class="text-gray-600 mb-8">
				With advanced machinery, experienced engineers, and rigorous quality control, we deliver assemblies that meet
				the highest industry standards. Below is an overview of our PCB assembly process and capabilities.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Assembly Process</h2>
			<p class="text-gray-600 mb-4">
				Our PCB assembly process is designed to be efficient, scalable, and precise. We follow industry best practices
				to ensure that each board is assembled with the utmost attention to detail. The process includes the following
				steps:
			</p>

			<p class="text-gray-600 mb-4">
				<strong>1. Solder Paste Printing:</strong> The first step in the assembly process involves applying solder paste
				to the PCB using an SMD stencil. This ensures accurate paste application for reliable solder joints.
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
				<strong>4. Inspection & Testing:</strong> After soldering, the boards undergo a series of inspections, including
				visual checks, automated optical inspection (AOI), and electrical testing to ensure quality and functionality.
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
				Our commitment to quality ensures that each PCB assembly meets rigorous standards. We implement extensive
				testing at each stage of the process to guarantee the final product is fully functional and meets your
				specifications. Our quality control methods include:
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
{:else if lang === 'zh'}
	<Layout
		section={'pcbAssembly'}
		title="PCB组装概览"
		description="为您的定制设计提供全面的PCB组装服务，从原型制作到大规模生产。"
		button={{ title: '在线即时报价与下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB组装概览</h1>

			<p class="text-gray-600 mb-4">
				在<span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们提供一系列全面的PCB组装服务，以满足任何项目的需求，
				从初始原型到大规模生产。不论您是为新产品设计定制PCB，还是需要组装一批原型，我们的团队都具备专业知识和技术，
				确保您的设计以精确和高质量的方式实现。
			</p>

			<p class="text-gray-600 mb-8">
				凭借先进的设备、经验丰富的工程师和严格的质量控制，我们交付的组装产品符合最高的行业标准。以下是我们的PCB组装流程和能力概述。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">组装流程</h2>
			<p class="text-gray-600 mb-4">
				我们的PCB组装流程设计高效、可扩展且精确。我们遵循行业最佳实践，确保每块电路板都以极高的细节关注完成组装。具体步骤包括：
			</p>

			<p class="text-gray-600 mb-4">
				<strong>1. 锡膏印刷：</strong> 组装的第一步是使用贴片模板将锡膏精确地涂敷到PCB上，确保焊点可靠。
			</p>
			<p class="text-gray-600 mb-4">
				<strong>2. 元件贴装：</strong> 自动贴片机根据您的设计文件，将元器件精确地放置在PCB上。
			</p>
			<p class="text-gray-600 mb-4">
				<strong>3. 回流焊接：</strong> PCB经过回流焊接炉，熔化锡膏并形成牢固的焊点。
			</p>
			<p class="text-gray-600 mb-4">
				<strong>4. 检查与测试：</strong> 焊接后，电路板会经过一系列检查，包括目视检查、自动光学检测（AOI）和电气测试，以确保质量和功能。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCB组装类型</h2>
			<p class="text-gray-600 mb-4">我们提供多种PCB组装服务，以满足不同设计需求。这些包括：</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>表面贴装技术（SMT）：</strong> 适用于高密度设计，SMT可直接将元件安装到PCB表面。
				</li>
				<li>
					<strong>通孔技术（THT）：</strong> 适用于高功率元件和需要高可靠性的应用场景。
				</li>
				<li>
					<strong>混合技术：</strong> 将SMT和THT结合，用于需要多种元件类型的设计。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">质量控制与测试</h2>
			<p class="text-gray-600 mb-4">
				我们致力于质量，确保每块PCB组装都符合严格的标准。我们在流程的每个阶段都实施全面的测试，以确保最终产品完全功能正常并符合您的规格。我们的质量控制方法包括：
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li><strong>目视检查：</strong> 由技术熟练的人员进行，以发现任何明显缺陷。</li>
				<li>
					<strong>自动光学检测（AOI）：</strong> 高速检测机器用于发现焊接和元件放置问题。
				</li>
				<li>
					<strong>电气测试：</strong> 通过检查短路、开路和连续性来确保电路的功能。
				</li>
				<li>
					<strong>在线测试（ICT）：</strong> 详细检测，识别功能和操作缺陷。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">我们的PCB组装服务优势</h2>
			<p class="text-gray-600 mb-4">
				选择<span class="text-blue-600 font-semibold">MMWPCB</span>作为您的PCB组装服务提供商，您将享受到以下优势：
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>快速交付时间，适用于原型和生产运行。</li>
				<li>高质量的电路板，符合所有必要的标准和法规。</li>
				<li>由专家团队提供的设计、组装和测试建议和指导。</li>
				<li>为低至高量生产提供具有成本效益的解决方案。</li>
			</ul>

			<p class="text-gray-600 mb-8">
				无论是组装少量原型，还是大规模生产，我们的PCB组装服务都旨在满足您的特定需求。让我们以卓越的质量和效率帮助您将设计变为现实。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'pcbAssembly'}
		title="Aperçu de l'assemblage PCB"
		description="Services complets d'assemblage de PCB pour vos conceptions personnalisées, du prototypage à la production à grande échelle."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Aperçu de l'assemblage PCB</h1>

			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous offrons une gamme complète de services
				d'assemblage de PCB pour répondre aux besoins de tout projet, du prototype initial à la production à grande
				échelle. Que vous conceviez un PCB personnalisé pour un nouveau produit ou que vous ayez besoin d'assembler une
				série de prototypes, notre équipe fournit l'expertise et la technologie nécessaires pour concrétiser votre
				conception avec précision et qualité.
			</p>

			<p class="text-gray-600 mb-8">
				Grâce à des équipements avancés, des ingénieurs expérimentés et un contrôle qualité rigoureux, nous livrons des
				assemblages conformes aux normes les plus élevées de l'industrie. Voici un aperçu de notre processus et de nos
				capacités en matière d'assemblage de PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Processus d'assemblage</h2>
			<p class="text-gray-600 mb-4">
				Notre processus d'assemblage de PCB est conçu pour être efficace, évolutif et précis. Nous suivons les
				meilleures pratiques de l'industrie pour garantir que chaque carte est assemblée avec une attention minutieuse
				aux détails. Les étapes comprennent :
			</p>

			<p class="text-gray-600 mb-4">
				<strong>1. Impression de pâte à souder :</strong> La première étape consiste à appliquer de la pâte à souder sur
				le PCB à l'aide d'un pochoir SMD, garantissant une application précise pour des soudures fiables.
			</p>
			<p class="text-gray-600 mb-4">
				<strong>2. Placement des composants :</strong> Des machines de placement automatisées positionnent avec précision
				les composants sur le PCB selon vos fichiers de conception.
			</p>
			<p class="text-gray-600 mb-4">
				<strong>3. Soudure par refusion :</strong> La carte passe ensuite dans un four de refusion où la pâte à souder fond
				pour créer des connexions solides.
			</p>
			<p class="text-gray-600 mb-4">
				<strong>4. Inspection et tests :</strong> Après la soudure, les cartes sont soumises à une série d'inspections, y
				compris des vérifications visuelles, des inspections optiques automatisées (AOI) et des tests électriques pour garantir
				la qualité et la fonctionnalité.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Types d'assemblage PCB</h2>
			<p class="text-gray-600 mb-4">
				Nous proposons plusieurs types de services d'assemblage PCB pour répondre aux différentes exigences de
				conception, notamment :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Technologie à montage en surface (SMT) :</strong> Idéale pour les conceptions à haute densité, SMT permet
					de placer les composants directement sur la surface du PCB.
				</li>
				<li>
					<strong>Technologie à travers les trous (THT) :</strong> Convient aux composants haute puissance et aux applications
					robustes où la fiabilité est essentielle.
				</li>
				<li>
					<strong>Technologie mixte :</strong> Combine SMT et THT pour les conceptions nécessitant une combinaison de types
					de composants.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Contrôle qualité et tests</h2>
			<p class="text-gray-600 mb-4">
				Notre engagement envers la qualité garantit que chaque assemblage PCB respecte des normes strictes. Nous mettons
				en œuvre des tests approfondis à chaque étape du processus pour garantir que le produit final est pleinement
				fonctionnel et conforme à vos spécifications. Nos méthodes de contrôle qualité comprennent :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Inspections visuelles :</strong> Effectuées par des techniciens qualifiés pour détecter tout défaut évident.
				</li>
				<li>
					<strong>Inspection optique automatisée (AOI) :</strong> Machines d'inspection à grande vitesse pour détecter les
					problèmes de soudure et de placement des composants.
				</li>
				<li>
					<strong>Tests électriques :</strong> Vérification de la fonctionnalité du circuit en détectant les courts-circuits,
					les circuits ouverts et la continuité.
				</li>
				<li>
					<strong>Test en circuit (ICT) :</strong> Un test détaillé pour identifier les défauts fonctionnels et opérationnels.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Avantages de nos services d'assemblage PCB</h2>
			<p class="text-gray-600 mb-4">
				En choisissant <span class="text-blue-600 font-semibold">MMWPCB</span> pour vos besoins en assemblage PCB, vous bénéficierez
				:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>De délais d'exécution rapides pour les prototypes et les séries de production.</li>
				<li>De cartes de haute qualité conformes à toutes les normes et réglementations nécessaires.</li>
				<li>
					D'un accès à une équipe d'experts pour des conseils et un accompagnement sur la conception, l'assemblage et
					les tests.
				</li>
				<li>De solutions rentables pour des productions de faible à grande envergure.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Que vous assembliez quelques prototypes ou que vous passiez à une production à grande échelle, nos services
				d'assemblage PCB sont conçus pour répondre à vos besoins spécifiques. Permettez-nous de donner vie à vos
				conceptions avec une qualité et une efficacité exceptionnelles.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'pcbAssembly'}
		title="Resumen de Ensamblaje de PCB"
		description="Servicios integrales de ensamblaje de PCB para tus diseños personalizados, desde prototipos hasta producción a gran escala."
		button={{ title: 'Cotización Instantánea y Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Resumen de Ensamblaje de PCB</h1>

			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, ofrecemos una amplia gama de servicios de ensamblaje
				de PCB diseñados para satisfacer las necesidades de cualquier proyecto, desde prototipos iniciales hasta
				producción a gran escala. Ya sea que estés creando un PCB personalizado para un nuevo producto o necesites
				ensamblar una serie de prototipos, nuestro equipo brinda la experiencia y la tecnología necesarias para
				materializar tu diseño con precisión y calidad.
			</p>

			<p class="text-gray-600 mb-8">
				Con maquinaria avanzada, ingenieros experimentados y un control de calidad riguroso, entregamos ensamblajes que
				cumplen con los estándares más altos de la industria. A continuación, encontrarás un resumen de nuestro proceso
				de ensamblaje de PCB y nuestras capacidades.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Proceso de Ensamblaje</h2>
			<p class="text-gray-600 mb-4">
				Nuestro proceso de ensamblaje de PCB está diseñado para ser eficiente, escalable y preciso. Seguimos las mejores
				prácticas de la industria para garantizar que cada placa sea ensamblada con la máxima atención al detalle. El
				proceso incluye los siguientes pasos:
			</p>

			<p class="text-gray-600 mb-4">
				<strong>1. Impresión de Pasta de Soldadura:</strong> El primer paso en el proceso de ensamblaje consiste en aplicar
				pasta de soldadura al PCB utilizando una plantilla SMD. Esto asegura una aplicación precisa para juntas de soldadura
				fiables.
			</p>
			<p class="text-gray-600 mb-4">
				<strong>2. Colocación de Componentes:</strong> Las máquinas automáticas de pick-and-place colocan los componentes
				con precisión en el PCB según tus archivos de diseño.
			</p>
			<p class="text-gray-600 mb-4">
				<strong>3. Soldadura por Reflujo:</strong> La placa pasa por un horno de reflujo donde la pasta de soldadura se derrite
				para crear conexiones sólidas.
			</p>
			<p class="text-gray-600 mb-4">
				<strong>4. Inspección y Pruebas:</strong> Después de la soldadura, las placas se someten a una serie de inspecciones,
				incluidas revisiones visuales, inspección óptica automatizada (AOI) y pruebas eléctricas para garantizar la calidad
				y funcionalidad.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Tipos de Ensamblaje de PCB</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos varios tipos de servicios de ensamblaje de PCB para satisfacer diferentes requisitos de diseño,
				incluidos:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Tecnología de Montaje Superficial (SMT):</strong> Ideal para diseños de alta densidad, SMT permite que
					los componentes se coloquen directamente en la superficie del PCB.
				</li>
				<li>
					<strong>Tecnología de Montaje a Través de Agujeros (THT):</strong> Adecuada para componentes de alta potencia y
					aplicaciones robustas donde la confiabilidad es clave.
				</li>
				<li>
					<strong>Tecnología Mixta:</strong> Combina SMT y THT para diseños que requieren una combinación de tipos de componentes.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Control de Calidad y Pruebas</h2>
			<p class="text-gray-600 mb-4">
				Nuestro compromiso con la calidad garantiza que cada ensamblaje de PCB cumpla con estándares rigurosos.
				Implementamos pruebas exhaustivas en cada etapa del proceso para garantizar que el producto final sea
				completamente funcional y cumpla con tus especificaciones. Nuestros métodos de control de calidad incluyen:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Inspecciones Visuales:</strong> Realizadas por técnicos calificados para detectar defectos evidentes.
				</li>
				<li>
					<strong>Inspección Óptica Automatizada (AOI):</strong> Máquinas de alta velocidad para detectar problemas de soldadura
					y colocación de componentes.
				</li>
				<li>
					<strong>Pruebas Eléctricas:</strong> Verificación de la funcionalidad del circuito comprobando cortocircuitos,
					circuitos abiertos y continuidad.
				</li>
				<li>
					<strong>Pruebas en Circuito (ICT):</strong> Una prueba detallada para identificar defectos funcionales y operativos.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Beneficios de Nuestros Servicios de Ensamblaje de PCB</h2>
			<p class="text-gray-600 mb-4">
				Al elegir <span class="text-blue-600 font-semibold">MMWPCB</span> para tus necesidades de ensamblaje de PCB, te beneficias
				de:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Tiempos de entrega rápidos tanto para prototipos como para series de producción.</li>
				<li>Placas de alta calidad que cumplen con todos los estándares y regulaciones necesarios.</li>
				<li>Acceso a un equipo de expertos para asesoramiento y orientación sobre diseño, ensamblaje y pruebas.</li>
				<li>Soluciones rentables para producciones de bajo a gran volumen.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Ya sea que estés ensamblando algunos prototipos o ampliando la producción a gran escala, nuestros servicios de
				ensamblaje de PCB están diseñados para satisfacer tus necesidades específicas. Permítenos dar vida a tus diseños
				con calidad y eficiencia excepcionales.
			</p>
		</div>
	</Layout>
{/if}
