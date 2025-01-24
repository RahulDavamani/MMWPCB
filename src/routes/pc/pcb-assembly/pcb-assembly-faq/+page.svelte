<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'pcbAssembly'}
		title="PCB Assembly FAQ"
		description="Find answers to common questions about PCB assembly, processes, and services."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Assembly FAQ</h1>

			<p class="text-gray-600 mb-6">
				Here are the answers to some of the most frequently asked questions about PCB assembly. Whether you're a
				first-time customer or a seasoned engineer, this section will help clarify the key aspects of our assembly
				process.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. What is PCB assembly?</h2>
			<p class="text-gray-600 mb-6">
				PCB assembly refers to the process of placing electronic components onto a printed circuit board (PCB). The
				process includes various steps like component placement, soldering, testing, and inspection. The end result is a
				functional PCB ready for use in an electronic device.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. What types of PCB assembly do you offer?</h2>
			<p class="text-gray-600 mb-4">
				We offer both surface-mount technology (SMT) and through-hole technology (THT) assembly. We also provide
				mixed-technology assembly, which combines both SMT and THT processes in one PCB.
			</p>
			<p class="text-gray-600 mb-4">
				Our team can handle single, double, and multi-layer PCB assemblies, and we can support a variety of component
				types, from standard components to more complex, specialized parts.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. What is the lead time for PCB assembly?</h2>
			<p class="text-gray-600 mb-4">
				Lead time for PCB assembly depends on the complexity of the project, the number of layers, and the availability
				of components. Typically, we offer fast turnaround times, with prototype assemblies taking around 5-7 business
				days, and mass production orders taking longer depending on the order size and components.
			</p>
			<p class="text-gray-600 mb-4">
				For urgent orders, we provide expedited services to ensure a faster delivery, typically within 3-5 business
				days.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Do you offer PCB testing services?</h2>
			<p class="text-gray-600 mb-4">
				Yes, we offer a range of testing services to ensure that your PCB assemblies are fully functional and meet your
				specifications. Our testing services include:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>Functional testing (FT)</li>
				<li>In-circuit testing (ICT)</li>
				<li>Automated optical inspection (AOI)</li>
				<li>Electrical testing</li>
			</ul>
			<p class="text-gray-600 mb-4">
				We work with you to ensure that all necessary tests are conducted before your PCBs are shipped to you.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Can I source my own components?</h2>
			<p class="text-gray-600 mb-4">
				Yes, you can source your own components and send them to us for assembly. If you prefer, we can also source
				components for you from our trusted suppliers. If you provide the parts, we will handle the assembly process,
				including soldering and inspection, to ensure your PCB is fully functional.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. What is the cost of PCB assembly?</h2>
			<p class="text-gray-600 mb-4">
				The cost of PCB assembly depends on several factors, such as the type of components, the number of layers,
				assembly complexity, and the quantity of boards required. We provide competitive pricing and offer cost-saving
				solutions for large-volume orders. For a precise estimate, we recommend using our instant quote tool.
			</p>
			<p class="text-gray-600 mb-4">
				Please feel free to contact us for a detailed quote based on your specific project requirements.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. What file formats do I need to provide?</h2>
			<p class="text-gray-600 mb-4">
				For PCB assembly, we typically require Gerber files, Bill of Materials (BOM), and Pick and Place files. These
				files should provide us with all the necessary information to assemble your PCB accurately.
			</p>
			<p class="text-gray-600 mb-4">
				If you're unsure about what files are needed, feel free to contact our team for guidance.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">8. Do you offer PCB assembly for prototypes?</h2>
			<p class="text-gray-600 mb-4">
				Yes, we specialize in PCB prototype assembly. We understand that prototypes often involve design iterations, and
				we offer flexible assembly options to meet the needs of rapid prototyping. Whether you need one board or a small
				batch for testing, we can provide fast turnarounds and competitive pricing for your prototype needs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">9. How do I place an order for PCB assembly?</h2>
			<p class="text-gray-600 mb-4">
				You can place an order for PCB assembly directly on our website through our instant quote tool. Simply upload
				your Gerber, BOM, and Pick and Place files, and we’ll provide you with an accurate quote based on your project
				details.
			</p>
			<p class="text-gray-600 mb-4">
				Alternatively, you can contact our sales team to discuss your project and receive a personalized quote.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				10. Can I request additional services like component soldering or rework?
			</h2>
			<p class="text-gray-600 mb-4">
				Yes, we offer additional services such as component soldering, rework, and custom modifications. If you have
				specific needs beyond standard assembly, our team can help you with additional services to ensure your PCB meets
				your exact requirements.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'pcbAssembly'}
		title="PCB组装常见问题"
		description="了解有关PCB组装、流程和服务的常见问题解答。"
		button={{ title: '在线获取报价并下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB组装常见问题</h1>

			<p class="text-gray-600 mb-6">
				以下是关于PCB组装的一些常见问题解答。无论您是第一次使用服务的客户还是经验丰富的工程师，此部分都将帮助您更好地了解我们的组装流程。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. 什么是PCB组装？</h2>
			<p class="text-gray-600 mb-6">
				PCB组装是将电子元件安装到印刷电路板（PCB）上的过程。该流程包括元件放置、焊接、测试和检查等多个步骤。最终结果是一个可以在电子设备中使用的功能性PCB。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. 你们提供哪些类型的PCB组装？</h2>
			<p class="text-gray-600 mb-4">
				我们提供表面贴装技术（SMT）和通孔技术（THT）的组装服务。此外，我们还提供混合技术组装服务，即在一个PCB中同时使用SMT和THT工艺。
			</p>
			<p class="text-gray-600 mb-4">
				我们的团队能够处理单面、双面和多层PCB组装，并支持多种元件类型，包括标准元件和更复杂的特殊元件。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. PCB组装的交付周期是多久？</h2>
			<p class="text-gray-600 mb-4">
				PCB组装的交付周期取决于项目的复杂性、层数以及元件的可用性。通常情况下，原型组装的交付周期为5-7个工作日，大批量生产订单的交付时间则根据订单规模和元件情况有所不同。
			</p>
			<p class="text-gray-600 mb-4">对于紧急订单，我们提供加急服务，通常可在3-5个工作日内交付。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. 你们是否提供PCB测试服务？</h2>
			<p class="text-gray-600 mb-4">
				是的，我们提供多种测试服务，确保您的PCB组装完全符合功能要求并达到规格标准。我们的测试服务包括：
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>功能测试（FT）</li>
				<li>在线测试（ICT）</li>
				<li>自动光学检测（AOI）</li>
				<li>电气测试</li>
			</ul>
			<p class="text-gray-600 mb-4">我们与您合作，确保在您的PCB发货之前完成所有必要的测试。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. 我可以自行采购元件吗？</h2>
			<p class="text-gray-600 mb-4">
				可以，您可以自行采购元件并将其发送给我们进行组装。如果您愿意，我们也可以通过我们的可信供应商为您采购元件。如果您提供元件，我们将负责组装过程，包括焊接和检查，确保您的PCB完全正常工作。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. PCB组装的成本是多少？</h2>
			<p class="text-gray-600 mb-4">
				PCB组装的成本取决于多个因素，例如元件类型、层数、组装复杂性以及所需的板子数量。我们提供具有竞争力的价格，并为大批量订单提供成本节约解决方案。对于准确的报价，我们建议您使用我们的即时报价工具。
			</p>
			<p class="text-gray-600 mb-4">您也可以随时联系我们，根据您的具体项目需求获取详细报价。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. 我需要提供哪些文件格式？</h2>
			<p class="text-gray-600 mb-4">
				对于PCB组装，我们通常需要Gerber文件、物料清单（BOM）和贴装文件。这些文件应提供所有必要的信息，以确保您的PCB能够准确地完成组装。
			</p>
			<p class="text-gray-600 mb-4">如果您不确定需要哪些文件，请随时联系团队获取指导。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">8. 你们是否提供原型PCB组装服务？</h2>
			<p class="text-gray-600 mb-4">
				是的，我们专注于PCB原型组装服务。我们了解原型通常涉及设计迭代，因此提供灵活的组装选项以满足快速原型开发的需求。无论您需要一个板子还是小批量测试，我们都能提供快速交付和具有竞争力的定价。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">9. 我该如何下单进行PCB组装？</h2>
			<p class="text-gray-600 mb-4">
				您可以通过我们的网站上的即时报价工具直接下单进行PCB组装。只需上传您的Gerber文件、BOM和贴装文件，我们将根据您的项目详细信息提供准确的报价。
			</p>
			<p class="text-gray-600 mb-4">您也可以联系销售团队讨论您的项目，并获得个性化的报价。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">10. 我可以请求额外的服务，例如元件焊接或返工吗？</h2>
			<p class="text-gray-600 mb-4">
				可以，我们提供额外的服务，例如元件焊接、返工和定制修改。如果您有标准组装以外的特定需求，我们的团队可以提供额外服务，确保您的PCB完全符合您的具体要求。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'pcbAssembly'}
		title="FAQ sur l'assemblage de PCB"
		description="Trouvez des réponses aux questions courantes sur l'assemblage de PCB, les processus et les services."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">FAQ sur l'assemblage de PCB</h1>

			<p class="text-gray-600 mb-6">
				Voici les réponses aux questions les plus fréquemment posées sur l'assemblage de PCB. Que vous soyez un client
				pour la première fois ou un ingénieur expérimenté, cette section vous aidera à clarifier les aspects clés de
				notre processus d'assemblage.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. Qu'est-ce que l'assemblage de PCB ?</h2>
			<p class="text-gray-600 mb-6">
				L'assemblage de PCB désigne le processus de placement des composants électroniques sur une carte de circuit
				imprimé (PCB). Ce processus comprend diverses étapes telles que le placement des composants, la soudure, les
				tests et l'inspection. Le résultat final est un PCB fonctionnel prêt à être utilisé dans un appareil
				électronique.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. Quels types d'assemblage de PCB proposez-vous ?</h2>
			<p class="text-gray-600 mb-4">
				Nous proposons des services d'assemblage par technologie de montage en surface (SMT) et technologie à trous
				traversants (THT). Nous proposons également un assemblage par technologie mixte, combinant à la fois SMT et THT
				dans un même PCB.
			</p>
			<p class="text-gray-600 mb-4">
				Notre équipe peut gérer des assemblages de PCB simple face, double face et multicouches, et nous prenons en
				charge une grande variété de types de composants, des composants standards aux pièces spécialisées plus
				complexes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Quel est le délai pour l'assemblage de PCB ?</h2>
			<p class="text-gray-600 mb-4">
				Le délai d'assemblage de PCB dépend de la complexité du projet, du nombre de couches et de la disponibilité des
				composants. En général, nous proposons des délais d'exécution rapides, avec des assemblages de prototypes en 5-7
				jours ouvrables, et des commandes de production en série prenant plus de temps en fonction de la taille de la
				commande et des composants.
			</p>
			<p class="text-gray-600 mb-4">
				Pour les commandes urgentes, nous offrons des services accélérés garantissant une livraison plus rapide,
				généralement en 3-5 jours ouvrables.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Proposez-vous des services de test pour PCB ?</h2>
			<p class="text-gray-600 mb-4">
				Oui, nous proposons une gamme de services de test pour garantir que vos assemblages de PCB sont pleinement
				fonctionnels et répondent à vos spécifications. Nos services de test incluent :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>Test fonctionnel (FT)</li>
				<li>Test en circuit (ICT)</li>
				<li>Inspection optique automatisée (AOI)</li>
				<li>Test électrique</li>
			</ul>
			<p class="text-gray-600 mb-4">
				Nous collaborons avec vous pour nous assurer que tous les tests nécessaires sont effectués avant l'expédition de
				vos PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Puis-je fournir mes propres composants ?</h2>
			<p class="text-gray-600 mb-4">
				Oui, vous pouvez fournir vos propres composants et nous les envoyer pour l'assemblage. Si vous préférez, nous
				pouvons également nous approvisionner en composants auprès de nos fournisseurs de confiance. Si vous fournissez
				les pièces, nous prendrons en charge le processus d'assemblage, y compris la soudure et l'inspection, pour
				garantir que votre PCB est pleinement fonctionnel.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Quel est le coût de l'assemblage de PCB ?</h2>
			<p class="text-gray-600 mb-4">
				Le coût de l'assemblage de PCB dépend de plusieurs facteurs, tels que le type de composants, le nombre de
				couches, la complexité de l'assemblage et la quantité de cartes nécessaires. Nous proposons des prix compétitifs
				et des solutions d'économie de coûts pour les commandes en gros volumes. Pour un devis précis, nous vous
				recommandons d'utiliser notre outil de devis instantané.
			</p>
			<p class="text-gray-600 mb-4">
				N'hésitez pas à nous contacter pour un devis détaillé en fonction des besoins spécifiques de votre projet.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. Quels formats de fichiers dois-je fournir ?</h2>
			<p class="text-gray-600 mb-4">
				Pour l'assemblage de PCB, nous avons généralement besoin de fichiers Gerber, de la nomenclature (BOM) et des
				fichiers de placement. Ces fichiers doivent fournir toutes les informations nécessaires pour assembler
				correctement votre PCB.
			</p>
			<p class="text-gray-600 mb-4">
				Si vous ne savez pas quels fichiers sont requis, n'hésitez pas à contacter notre équipe pour obtenir des
				conseils.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">8. Proposez-vous l'assemblage de prototypes de PCB ?</h2>
			<p class="text-gray-600 mb-4">
				Oui, nous sommes spécialisés dans l'assemblage de prototypes de PCB. Nous comprenons que les prototypes
				impliquent souvent des itérations de conception, et nous proposons des options d'assemblage flexibles pour
				répondre aux besoins du prototypage rapide. Que vous ayez besoin d'une carte ou d'une petite série pour des
				tests, nous offrons des délais rapides et des prix compétitifs pour vos besoins en prototypes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				9. Comment passer une commande pour l'assemblage de PCB ?
			</h2>
			<p class="text-gray-600 mb-4">
				Vous pouvez passer une commande pour l'assemblage de PCB directement sur notre site Web via notre outil de devis
				instantané. Il vous suffit de télécharger vos fichiers Gerber, BOM et de placement, et nous vous fournirons un
				devis précis basé sur les détails de votre projet.
			</p>
			<p class="text-gray-600 mb-4">
				Vous pouvez également contacter notre équipe commerciale pour discuter de votre projet et recevoir un devis
				personnalisé.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				10. Puis-je demander des services supplémentaires comme la soudure de composants ou la retouche ?
			</h2>
			<p class="text-gray-600 mb-4">
				Oui, nous offrons des services supplémentaires tels que la soudure de composants, la retouche et les
				modifications personnalisées. Si vous avez des besoins spécifiques au-delà de l'assemblage standard, notre
				équipe peut vous fournir des services supplémentaires pour garantir que votre PCB répond exactement à vos
				exigences.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'pcbAssembly'}
		title="Preguntas Frecuentes sobre Ensamblaje de PCB"
		description="Encuentra respuestas a las preguntas más comunes sobre el ensamblaje de PCB, procesos y servicios."
		button={{ title: 'Cotización Instantánea y Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Preguntas Frecuentes sobre Ensamblaje de PCB</h1>

			<p class="text-gray-600 mb-6">
				Aquí encontrarás respuestas a las preguntas más frecuentes sobre el ensamblaje de PCB. Ya seas un cliente nuevo
				o un ingeniero experimentado, esta sección te ayudará a comprender los aspectos clave de nuestro proceso de
				ensamblaje.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. ¿Qué es el ensamblaje de PCB?</h2>
			<p class="text-gray-600 mb-6">
				El ensamblaje de PCB se refiere al proceso de colocar componentes electrónicos en una placa de circuito impreso
				(PCB). Este proceso incluye varias etapas, como la colocación de componentes, soldadura, pruebas e inspección.
				El producto final es un PCB funcional listo para su uso en un dispositivo electrónico.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. ¿Qué tipos de ensamblaje de PCB ofrecen?</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos tecnología de montaje en superficie (SMT) y tecnología de orificios pasantes (THT). También
				proporcionamos ensamblaje de tecnología mixta, que combina tanto SMT como THT en una sola PCB.
			</p>
			<p class="text-gray-600 mb-4">
				Nuestro equipo puede manejar ensamblajes de PCB de una sola cara, de doble cara y multicapa, y podemos trabajar
				con una variedad de tipos de componentes, desde los estándar hasta piezas especializadas más complejas.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				3. ¿Cuál es el tiempo de entrega para el ensamblaje de PCB?
			</h2>
			<p class="text-gray-600 mb-4">
				El tiempo de entrega para el ensamblaje de PCB depende de la complejidad del proyecto, el número de capas y la
				disponibilidad de componentes. Generalmente, ofrecemos tiempos de respuesta rápidos, con ensamblajes de
				prototipos que tardan alrededor de 5-7 días hábiles, y pedidos de producción masiva que pueden tomar más tiempo
				dependiendo del tamaño del pedido y los componentes.
			</p>
			<p class="text-gray-600 mb-4">
				Para pedidos urgentes, ofrecemos servicios exprés para garantizar una entrega más rápida, generalmente dentro de
				3-5 días hábiles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. ¿Ofrecen servicios de prueba para PCB?</h2>
			<p class="text-gray-600 mb-4">
				Sí, ofrecemos una variedad de servicios de prueba para garantizar que tus ensamblajes de PCB sean completamente
				funcionales y cumplan con tus especificaciones. Nuestros servicios de prueba incluyen:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>Pruebas funcionales (FT)</li>
				<li>Pruebas en circuito (ICT)</li>
				<li>Inspección óptica automatizada (AOI)</li>
				<li>Pruebas eléctricas</li>
			</ul>
			<p class="text-gray-600 mb-4">
				Trabajamos contigo para asegurarnos de que todas las pruebas necesarias se realicen antes de enviar tus PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. ¿Puedo proporcionar mis propios componentes?</h2>
			<p class="text-gray-600 mb-4">
				Sí, puedes proporcionar tus propios componentes y enviárnoslos para el ensamblaje. Si lo prefieres, también
				podemos obtener los componentes de nuestros proveedores de confianza. Si proporcionas las piezas, nos
				encargaremos del proceso de ensamblaje, incluida la soldadura e inspección, para garantizar que tu PCB sea
				completamente funcional.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. ¿Cuál es el costo del ensamblaje de PCB?</h2>
			<p class="text-gray-600 mb-4">
				El costo del ensamblaje de PCB depende de varios factores, como el tipo de componentes, el número de capas, la
				complejidad del ensamblaje y la cantidad de placas requeridas. Ofrecemos precios competitivos y soluciones
				económicas para pedidos de gran volumen. Para obtener un presupuesto preciso, te recomendamos usar nuestra
				herramienta de cotización instantánea.
			</p>
			<p class="text-gray-600 mb-4">
				No dudes en contactarnos para obtener un presupuesto detallado basado en los requisitos específicos de tu
				proyecto.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. ¿Qué formatos de archivo debo proporcionar?</h2>
			<p class="text-gray-600 mb-4">
				Para el ensamblaje de PCB, generalmente necesitamos archivos Gerber, la Lista de Materiales (BOM) y archivos de
				posicionamiento. Estos archivos deben proporcionarnos toda la información necesaria para ensamblar tu PCB
				correctamente.
			</p>
			<p class="text-gray-600 mb-4">
				Si no estás seguro de qué archivos son necesarios, no dudes en contactar a nuestro equipo para obtener
				orientación.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">8. ¿Ofrecen ensamblaje de prototipos de PCB?</h2>
			<p class="text-gray-600 mb-4">
				Sí, nos especializamos en el ensamblaje de prototipos de PCB. Entendemos que los prototipos a menudo implican
				iteraciones de diseño, y ofrecemos opciones de ensamblaje flexibles para satisfacer las necesidades de
				prototipado rápido. Ya sea que necesites una placa o un lote pequeño para pruebas, ofrecemos tiempos de
				respuesta rápidos y precios competitivos para tus necesidades de prototipos.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">9. ¿Cómo hago un pedido de ensamblaje de PCB?</h2>
			<p class="text-gray-600 mb-4">
				Puedes hacer un pedido de ensamblaje de PCB directamente en nuestro sitio web a través de nuestra herramienta de
				cotización instantánea. Simplemente sube tus archivos Gerber, BOM y de posicionamiento, y te proporcionaremos
				una cotización precisa basada en los detalles de tu proyecto.
			</p>
			<p class="text-gray-600 mb-4">
				También puedes contactar a nuestro equipo de ventas para discutir tu proyecto y recibir una cotización
				personalizada.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				10. ¿Puedo solicitar servicios adicionales como soldadura de componentes o retrabajo?
			</h2>
			<p class="text-gray-600 mb-4">
				Sí, ofrecemos servicios adicionales como soldadura de componentes, retrabajo y modificaciones personalizadas. Si
				tienes necesidades específicas más allá del ensamblaje estándar, nuestro equipo puede proporcionarte servicios
				adicionales para garantizar que tu PCB cumpla exactamente con tus requisitos.
			</p>
		</div>
	</Layout>
{/if}
