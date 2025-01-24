<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="Production Process"
		description="Overview of our comprehensive PCB production process from design to delivery."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Production Process</h1>

			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we take pride in offering a seamless and efficient
				PCB production process. From design to delivery, we prioritize precision, quality, and speed. Our production
				process is designed to meet the demands of high-performance applications while maintaining cost-effectiveness,
				even for low-volume runs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. Design & Review</h2>
			<p class="text-gray-600 mb-4">
				The first step in the production process is design verification. Once you submit your design files, our
				engineers conduct a thorough review to ensure all specifications are met. This includes checking the electrical
				properties, material choices, and design integrity. Any issues are flagged and resolved before moving forward,
				ensuring that there are no delays later in the process.
			</p>

			<p class="text-gray-600 mb-8">
				We work closely with our clients at this stage to address any questions or adjustments. Our team is dedicated to
				making sure that your design is ready for the next phase of production.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. PCB Fabrication</h2>
			<p class="text-gray-600 mb-4">
				Once the design is finalized, the PCB fabrication process begins. This is where the magic happens, as we turn
				your design into a physical product. Our advanced machinery ensures that every layer is accurately aligned, and
				copper is etched to perfection.
			</p>

			<p class="text-gray-600 mb-4">
				We use high-quality materials, including FR4, Rogers, and other specialized materials, to create robust,
				high-performance PCBs. Whether it's a single-layer board or a complex multi-layer structure, we ensure precision
				at every step.
			</p>

			<p class="text-gray-600 mb-8">
				Our fabrication process includes copper etching, drilling, lamination, and layer stacking, followed by a
				thorough inspection to ensure there are no defects before moving on to surface finishing.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Surface Finishing</h2>
			<p class="text-gray-600 mb-4">
				Once the PCB is fabricated, it undergoes surface finishing. This is a crucial step that determines the board's
				durability and solderability. Depending on your specifications, we offer various surface finishes such as ENIG,
				HASL, OSP, and more.
			</p>

			<p class="text-gray-600 mb-8">
				Each finish is carefully selected to meet the needs of your project, ensuring long-term reliability and
				performance. Our goal is to provide the best finish for your specific application, whether it’s for consumer
				electronics, medical devices, or industrial equipment.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Testing & Quality Control</h2>
			<p class="text-gray-600 mb-4">
				Quality control is a critical part of our production process. We perform comprehensive electrical and visual
				testing to detect any flaws or potential failures. Our automated testing systems check for electrical
				continuity, short circuits, and open circuits, while visual inspections ensure there are no defects in the
				board's physical structure.
			</p>

			<p class="text-gray-600 mb-8">
				Our stringent quality assurance process ensures that every PCB meets your design specifications and functions
				correctly. We also offer additional testing services, such as X-ray inspection for high-density designs and
				thermal cycling for components sensitive to temperature fluctuations.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Assembly & Integration</h2>
			<p class="text-gray-600 mb-4">
				For PCBs that require assembly, we offer full integration services. This includes component placement,
				soldering, and final assembly. Our automated pick-and-place machines ensure high-speed, precise component
				placement, and our skilled team handles any manual assembly work required.
			</p>

			<p class="text-gray-600 mb-8">
				We support both surface-mount and through-hole technology (THT) and offer additional services like component
				sourcing and stencil printing. Each assembly is carefully tested to ensure functionality before shipment.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Packaging & Shipping</h2>
			<p class="text-gray-600 mb-4">
				Once your PCBs are fabricated and assembled, they are carefully packaged to prevent any damage during shipping.
				We use high-quality packaging materials to ensure that your order arrives in perfect condition, regardless of
				its destination.
			</p>

			<p class="text-gray-600 mb-8">
				Our shipping department works with reliable carriers to ensure fast and secure delivery. You can track your
				order at every stage, and we offer various shipping options to meet your needs, whether you require express or
				standard shipping.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="生产流程"
		description="从设计到交付，我们全面的PCB生产流程概述。"
		button={{ title: '即时报价 & 在线下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">生产流程</h1>

			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们自豪地提供无缝且高效的PCB生产流程。从设计到交付，我们优先考虑精度、质量和速度。我们的生产流程旨在满足高性能应用的需求，同时保持低成本，即使是低批量生产也能做到。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. 设计与审核</h2>
			<p class="text-gray-600 mb-4">
				生产流程的第一步是设计验证。提交设计文件后，我们的工程师会进行全面审核，确保所有规格都得到满足。这包括检查电气属性、材料选择和设计完整性。在继续之前，任何问题都会被标记并解决，确保后续流程不会出现延迟。
			</p>

			<p class="text-gray-600 mb-8">
				我们在这个阶段与客户紧密合作，解决任何问题或调整。我们的团队致力于确保您的设计准备好进入下一阶段的生产。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. PCB制造</h2>
			<p class="text-gray-600 mb-4">
				设计定稿后，PCB制造过程开始。这是将您的设计转化为实际产品的过程。我们的先进设备确保每一层都精确对齐，铜层雕刻完美。
			</p>

			<p class="text-gray-600 mb-4">
				我们使用高质量的材料，包括FR4、Rogers以及其他专用材料，制造坚固且高性能的PCB。无论是单层板还是复杂的多层结构，我们都确保每一步都精确无误。
			</p>

			<p class="text-gray-600 mb-8">
				我们的制造过程包括铜蚀刻、钻孔、层压和层叠，之后进行彻底检查，确保没有缺陷，才进入表面处理阶段。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. 表面处理</h2>
			<p class="text-gray-600 mb-4">
				PCB制造完成后，将进行表面处理。这是决定电路板耐用性和可焊性的关键步骤。根据您的规格要求，我们提供多种表面处理方法，如ENIG、HASL、OSP等。
			</p>

			<p class="text-gray-600 mb-8">
				每种表面处理都经过精心挑选，以满足您的项目需求，确保长期的可靠性和性能。我们的目标是为您的特定应用提供最佳的表面处理，无论是消费电子、医疗设备还是工业设备。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. 测试与质量控制</h2>
			<p class="text-gray-600 mb-4">
				质量控制是我们生产流程的重要部分。我们进行全面的电气和视觉测试，以发现任何缺陷或潜在故障。我们的自动化测试系统检查电气连续性、短路和开路，而视觉检查确保电路板的物理结构没有缺陷。
			</p>

			<p class="text-gray-600 mb-8">
				我们的严格质量保证过程确保每块PCB都符合您的设计规格，并且功能正常。我们还提供额外的测试服务，如高密度设计的X射线检查和温度变化敏感元件的热循环测试。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. 装配与集成</h2>
			<p class="text-gray-600 mb-4">
				对于需要装配的PCB，我们提供完整的集成服务。包括元件放置、焊接和最终装配。我们的自动化贴片机确保高速、精确的元件放置，我们的熟练团队处理所有需要的手工装配工作。
			</p>

			<p class="text-gray-600 mb-8">
				我们支持表面贴装技术和通孔技术（THT），并提供元件采购和模板打印等附加服务。每个装配都会经过仔细测试，确保功能正常后再发货。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. 包装与运输</h2>
			<p class="text-gray-600 mb-4">
				一旦您的PCB制造和装配完成，它们将被小心包装，以防在运输过程中损坏。我们使用高质量的包装材料，确保无论目的地在哪里，您的订单都能完好无损地送达。
			</p>

			<p class="text-gray-600 mb-8">
				我们的运输部门与可靠的承运人合作，确保快速、安全的交货。您可以在每个阶段追踪您的订单，我们提供各种运输选项，以满足您的需求，无论是快速运输还是标准运输。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Processus de Production"
		description="Aperçu de notre processus de production complet de PCB, de la conception à la livraison."
		button={{ title: 'Devis Instantané & Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Processus de Production</h1>

			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous sommes fiers d'offrir un processus de
				production de PCB fluide et efficace. De la conception à la livraison, nous privilégions la précision, la
				qualité et la rapidité. Notre processus de production est conçu pour répondre aux exigences des applications
				haute performance tout en restant rentable, même pour les séries de faible volume.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. Conception & Révision</h2>
			<p class="text-gray-600 mb-4">
				La première étape du processus de production est la vérification de la conception. Une fois vos fichiers de
				conception soumis, nos ingénieurs effectuent une révision complète pour s'assurer que toutes les spécifications
				sont respectées. Cela inclut la vérification des propriétés électriques, des choix de matériaux et de
				l'intégrité de la conception. Tout problème est signalé et résolu avant de passer à l'étape suivante,
				garantissant ainsi qu'il n'y ait pas de retard plus tard dans le processus.
			</p>

			<p class="text-gray-600 mb-8">
				Nous travaillons en étroite collaboration avec nos clients à cette étape pour répondre à toutes les questions ou
				ajustements. Notre équipe se consacre à s'assurer que votre conception est prête pour la phase suivante de la
				production.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. Fabrication de PCB</h2>
			<p class="text-gray-600 mb-4">
				Une fois la conception finalisée, le processus de fabrication des PCB commence. C'est là que la magie opère, car
				nous transformons votre conception en un produit physique. Nos machines de pointe garantissent que chaque couche
				est parfaitement alignée et que le cuivre est gravé à la perfection.
			</p>

			<p class="text-gray-600 mb-4">
				Nous utilisons des matériaux de haute qualité, notamment le FR4, Rogers et d'autres matériaux spécialisés, pour
				créer des PCB robustes et haute performance. Que ce soit pour une carte à une seule couche ou une structure
				multi-couches complexe, nous garantissons la précision à chaque étape.
			</p>

			<p class="text-gray-600 mb-8">
				Notre processus de fabrication comprend le gravage du cuivre, le perçage, le stratifié et l'empilement des
				couches, suivi d'un contrôle rigoureux pour s'assurer qu'il n'y a pas de défauts avant de passer à la finition
				de surface.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Finition de Surface</h2>
			<p class="text-gray-600 mb-4">
				Une fois le PCB fabriqué, il subit une finition de surface. Il s'agit d'une étape cruciale qui détermine la
				durabilité et la soudabilité du circuit imprimé. Selon vos spécifications, nous proposons différentes finitions
				de surface telles que ENIG, HASL, OSP, et bien d'autres.
			</p>

			<p class="text-gray-600 mb-8">
				Chaque finition est soigneusement sélectionnée pour répondre aux besoins de votre projet, garantissant une
				fiabilité et une performance à long terme. Notre objectif est de fournir la meilleure finition pour votre
				application spécifique, que ce soit pour l'électronique grand public, les dispositifs médicaux ou les
				équipements industriels.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Tests & Contrôle de Qualité</h2>
			<p class="text-gray-600 mb-4">
				Le contrôle de qualité est une partie essentielle de notre processus de production. Nous effectuons des tests
				électriques et visuels complets pour détecter toute anomalie ou défaillance potentielle. Nos systèmes de test
				automatisés vérifient la continuité électrique, les courts-circuits et les circuits ouverts, tandis que les
				inspections visuelles garantissent qu'il n'y a pas de défauts dans la structure physique du PCB.
			</p>

			<p class="text-gray-600 mb-8">
				Notre processus rigoureux d'assurance qualité garantit que chaque PCB respecte vos spécifications de conception
				et fonctionne correctement. Nous proposons également des services de test supplémentaires, tels que l'inspection
				aux rayons X pour les conceptions haute densité et le cyclage thermique pour les composants sensibles aux
				variations de température.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Assemblage & Intégration</h2>
			<p class="text-gray-600 mb-4">
				Pour les PCB nécessitant un assemblage, nous proposons des services d'intégration complets. Cela inclut le
				placement des composants, la soudure et l'assemblage final. Nos machines automatisées de pick-and-place
				garantissent un placement précis et rapide des composants, et notre équipe qualifiée prend en charge tous les
				travaux d'assemblage manuel nécessaires.
			</p>

			<p class="text-gray-600 mb-8">
				Nous soutenons à la fois la technologie de montage en surface et la technologie à trous traversants (THT) et
				proposons des services supplémentaires tels que l'approvisionnement en composants et l'impression de pochoirs.
				Chaque assemblage est soigneusement testé pour garantir son bon fonctionnement avant expédition.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Emballage & Expédition</h2>
			<p class="text-gray-600 mb-4">
				Une fois vos PCB fabriqués et assemblés, ils sont soigneusement emballés pour éviter tout dommage pendant le
				transport. Nous utilisons des matériaux d'emballage de haute qualité pour garantir que votre commande arrive en
				parfait état, quel que soit sa destination.
			</p>

			<p class="text-gray-600 mb-8">
				Notre département expéditions travaille avec des transporteurs fiables pour garantir une livraison rapide et
				sécurisée. Vous pouvez suivre votre commande à chaque étape, et nous proposons diverses options d'expédition
				pour répondre à vos besoins, que vous nécessitiez une expédition express ou standard.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Proceso de Producción"
		description="Resumen de nuestro proceso integral de producción de PCB, desde el diseño hasta la entrega."
		button={{ title: 'Cotización Instantánea & Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Proceso de Producción</h1>

			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, nos enorgullece ofrecer un proceso de producción de
				PCB fluido y eficiente. Desde el diseño hasta la entrega, priorizamos la precisión, calidad y rapidez. Nuestro
				proceso de producción está diseñado para satisfacer las demandas de aplicaciones de alto rendimiento,
				manteniendo la rentabilidad, incluso para producciones de bajo volumen.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. Diseño & Revisión</h2>
			<p class="text-gray-600 mb-4">
				El primer paso en el proceso de producción es la verificación del diseño. Una vez que envíes tus archivos de
				diseño, nuestros ingenieros realizarán una revisión exhaustiva para asegurarse de que todas las especificaciones
				sean cumplidas. Esto incluye la comprobación de las propiedades eléctricas, las opciones de materiales y la
				integridad del diseño. Cualquier problema será marcado y resuelto antes de continuar, asegurando que no haya
				retrasos en el proceso.
			</p>

			<p class="text-gray-600 mb-8">
				Trabajamos estrechamente con nuestros clientes en esta etapa para abordar cualquier pregunta o ajuste. Nuestro
				equipo está dedicado a asegurarse de que tu diseño esté listo para la siguiente fase de producción.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. Fabricación de PCB</h2>
			<p class="text-gray-600 mb-4">
				Una vez que el diseño esté finalizado, comienza el proceso de fabricación de PCB. Aquí es donde ocurre la magia,
				transformando tu diseño en un producto físico. Nuestra maquinaria avanzada asegura que cada capa esté
				perfectamente alineada y que el cobre sea grabado a la perfección.
			</p>

			<p class="text-gray-600 mb-4">
				Utilizamos materiales de alta calidad, como FR4, Rogers y otros materiales especializados, para crear PCB
				robustos y de alto rendimiento. Ya sea una placa de una sola capa o una estructura compleja de varias capas,
				garantizamos precisión en cada paso.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestro proceso de fabricación incluye grabado de cobre, perforación, laminado y apilado de capas, seguido de
				una inspección exhaustiva para garantizar que no haya defectos antes de pasar a la fase de acabado superficial.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Acabado de Superficie</h2>
			<p class="text-gray-600 mb-4">
				Una vez que el PCB ha sido fabricado, pasa por el acabado de superficie. Este es un paso crucial que determina
				la durabilidad y la soldabilidad de la placa. Según tus especificaciones, ofrecemos varios acabados de
				superficie como ENIG, HASL, OSP, entre otros.
			</p>

			<p class="text-gray-600 mb-8">
				Cada acabado se selecciona cuidadosamente para cumplir con las necesidades de tu proyecto, garantizando
				fiabilidad y rendimiento a largo plazo. Nuestro objetivo es proporcionar el mejor acabado para tu aplicación
				específica, ya sea para electrónica de consumo, dispositivos médicos o equipos industriales.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Pruebas & Control de Calidad</h2>
			<p class="text-gray-600 mb-4">
				El control de calidad es una parte crítica de nuestro proceso de producción. Realizamos pruebas eléctricas y
				visuales completas para detectar cualquier defecto o posible fallo. Nuestros sistemas de pruebas automatizadas
				revisan la continuidad eléctrica, cortocircuitos y circuitos abiertos, mientras que las inspecciones visuales
				aseguran que no haya defectos en la estructura física de la placa.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestro proceso riguroso de aseguramiento de calidad garantiza que cada PCB cumpla con tus especificaciones de
				diseño y funcione correctamente. También ofrecemos servicios adicionales de pruebas, como inspección por rayos X
				para diseños de alta densidad y ciclos térmicos para componentes sensibles a fluctuaciones de temperatura.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Ensamblaje & Integración</h2>
			<p class="text-gray-600 mb-4">
				Para los PCB que requieren ensamblaje, ofrecemos servicios completos de integración. Esto incluye la colocación
				de componentes, soldadura y ensamblaje final. Nuestras máquinas automatizadas de pick-and-place aseguran una
				colocación precisa y rápida de los componentes, y nuestro equipo especializado maneja cualquier trabajo de
				ensamblaje manual requerido.
			</p>

			<p class="text-gray-600 mb-8">
				Soportamos tanto la tecnología de montaje superficial como la tecnología de orificio pasante (THT) y ofrecemos
				servicios adicionales como la obtención de componentes e impresión de plantillas. Cada ensamblaje es
				cuidadosamente probado para garantizar su funcionamiento antes de ser enviado.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Embalaje & Envío</h2>
			<p class="text-gray-600 mb-4">
				Una vez que tus PCB han sido fabricados y ensamblados, son cuidadosamente embalados para evitar cualquier daño
				durante el envío. Utilizamos materiales de embalaje de alta calidad para asegurar que tu pedido llegue en
				perfectas condiciones, sin importar el destino.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestro departamento de envíos trabaja con transportistas confiables para garantizar una entrega rápida y
				segura. Puedes rastrear tu pedido en cada etapa y ofrecemos diversas opciones de envío para satisfacer tus
				necesidades, ya sea que necesites envío exprés o estándar.
			</p>
		</div>
	</Layout>
{/if}
