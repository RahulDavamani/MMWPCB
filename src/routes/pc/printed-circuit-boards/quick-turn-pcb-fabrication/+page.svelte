<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="Quick Turn PCB Fabrication"
		description="Get your PCBs fabricated quickly without compromising on quality. Learn about our fast-track PCB services."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
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
				Our quick turn capabilities allow us to produce high-performance PCBs in as little as 24 to 72 hours, offering
				you rapid prototyping and testing for your designs. Whether you're launching a new product or iterating on
				existing designs, we make sure your PCB fabrication process is as efficient as possible.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Faster Turnaround, Same High Quality</h2>
			<p class="text-gray-600 mb-4">
				What sets our service apart is that we don’t compromise quality for speed. We use the same advanced
				manufacturing processes for quick turn PCBs as we do for standard fabrication. This means you get high-quality
				boards that meet your specifications with minimal delays.
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
				essential components can be tested and refined swiftly. We understand that these sectors require reliability,
				and we’re here to deliver it quickly.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="快速交付PCB制造"
		description="在不妥协质量的前提下快速制造您的PCB。了解我们的快速通道PCB服务。"
		button={{ title: '即时报价和在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">快速交付PCB制造</h1>

			<p class="text-gray-600 mb-4">
				当时间至关重要时，<span class="text-blue-600 font-semibold">MMWPCB</span> 提供快速交付PCB制造服务，确保快速生产而不牺牲质量。我们的精简流程确保您的PCB比传统制造方法更快完成，使我们成为原型和小批量生产的理想选择。
			</p>

			<p class="text-gray-600 mb-8">
				我们的快速交付能力使我们能够在24至72小时内生产高性能的PCB，为您的设计提供快速原型制作和测试。无论您是推出新产品还是优化现有设计，我们都确保您的PCB制造过程尽可能高效。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">更快的交付，始终保持高质量</h2>
			<p class="text-gray-600 mb-4">
				我们的服务与众不同之处在于我们不以牺牲质量为代价追求速度。我们使用与标准制造相同的先进制造工艺来生产快速交付的PCB。这意味着您可以获得符合规格的高质量电路板，且延迟最小。
			</p>

			<p class="text-gray-600 mb-8">
				无论是单层、双面还是多层电路板，我们的快速交付服务都能以相同的精度处理各种设计。此外，我们丰富的材料库存确保我们有适当的选项来满足您的需求。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">工作原理</h2>
			<p class="text-gray-600 mb-4">
				当您提交设计文件时，过程开始。我们的团队会迅速审查这些文件，提供即时报价和生产时间表。一旦批准，我们将开始制造过程，使用快速通道方法将您的设计转化为功能完备的PCB。
			</p>

			<p class="text-gray-600 mb-8">
				通过在我们的制造工厂中轮班工作，我们可以处理即使是最紧迫的项目。然后，您的电路板会进行质量检查，确保符合所需标准，然后直接发货给您。这是一个简单而有效的过程，旨在让您的项目快速推进。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">受益行业</h2>
			<p class="text-gray-600 mb-4">
				快速交付PCB制造适用于多个行业，包括消费电子、通信、汽车和医疗设备。例如，正在开发新产品原型的工程师或需要进行小批量测试的初创公司可以受益于加速的时间表。
			</p>

			<p class="text-gray-600 mb-8">
				在通信和医疗设备等对时间至关重要的领域，快速交付PCB确保能够快速测试和完善关键组件。我们了解这些行业对可靠性的需求，我们将在最短时间内为您提供可靠的服务。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Fabrication PCB à Livraison Rapide"
		description="Obtenez vos PCB fabriqués rapidement sans compromettre la qualité. Découvrez nos services de PCB accélérés."
		button={{ title: 'Devis Instantané & Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Fabrication PCB à Livraison Rapide</h1>

			<p class="text-gray-600 mb-4">
				Quand le temps est essentiel, <span class="text-blue-600 font-semibold">MMWPCB</span> propose des services de fabrication
				PCB à livraison rapide garantissant une production rapide sans sacrifier la qualité. Notre processus simplifié garantit
				que vos cartes sont prêtes plus rapidement que les méthodes traditionnelles de fabrication PCB, faisant de nous un
				choix idéal pour les prototypes et les petites productions.
			</p>

			<p class="text-gray-600 mb-8">
				Nos capacités de fabrication à livraison rapide nous permettent de produire des PCB haute performance en aussi
				peu que 24 à 72 heures, offrant ainsi une prototypage et des tests rapides pour vos conceptions. Que vous
				lanciez un nouveau produit ou itériez sur des conceptions existantes, nous nous assurons que votre processus de
				fabrication PCB soit aussi efficace que possible.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Livraison Plus Rapide, Même Haute Qualité</h2>
			<p class="text-gray-600 mb-4">
				Ce qui distingue notre service, c'est que nous ne sacrifions pas la qualité pour la rapidité. Nous utilisons les
				mêmes processus de fabrication avancés pour les PCB à livraison rapide que pour les PCB de fabrication standard.
				Cela signifie que vous obtenez des cartes de haute qualité qui respectent vos spécifications avec des délais
				minimes.
			</p>

			<p class="text-gray-600 mb-8">
				Qu'il s'agisse de cartes simples, double face ou multicouches, notre service de livraison rapide peut traiter
				diverses conceptions avec la même précision. De plus, notre inventaire étendu de matériaux garantit que nous
				avons les bonnes options disponibles pour répondre à vos besoins.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Comment ça fonctionne</h2>
			<p class="text-gray-600 mb-4">
				Le processus commence lorsque vous soumettez vos fichiers de conception. Notre équipe les examine rapidement,
				fournissant un devis instantané et un calendrier de production. Une fois approuvé, nous commençons le processus
				de fabrication, en utilisant nos méthodes accélérées pour transformer votre conception en un PCB pleinement
				fonctionnel.
			</p>

			<p class="text-gray-600 mb-8">
				Grâce aux multiples équipes travaillant dans notre usine de fabrication, nous pouvons traiter même les projets
				les plus urgents. Vos cartes sont ensuite contrôlées pour garantir qu'elles respectent les normes requises avant
				d'être expédiées directement à vous. C'est un processus simple mais efficace conçu pour faire avancer rapidement
				votre projet.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				Secteurs Bénéficiant de la Fabrication PCB à Livraison Rapide
			</h2>
			<p class="text-gray-600 mb-4">
				La fabrication PCB à livraison rapide est idéale pour plusieurs secteurs, y compris l'électronique grand public,
				les télécommunications, l'automobile et les dispositifs médicaux. Par exemple, les ingénieurs travaillant sur un
				prototype de nouveau produit ou les startups ayant besoin de petites séries pour des tests peuvent bénéficier du
				délai accéléré.
			</p>

			<p class="text-gray-600 mb-8">
				Dans des domaines tels que les télécommunications et les équipements médicaux, où le temps est essentiel, les
				PCB à livraison rapide garantissent que les composants essentiels puissent être testés et affinés rapidement.
				Nous comprenons que ces secteurs nécessitent une grande fiabilité, et nous sommes là pour vous fournir cela
				rapidement.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Fabricación Rápida de PCB"
		description="Obtén tus PCB fabricados rápidamente sin comprometer la calidad. Descubre nuestros servicios de PCB acelerados."
		button={{ title: 'Cotización Instantánea y Ordenar en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Fabricación Rápida de PCB</h1>

			<p class="text-gray-600 mb-4">
				Cuando el tiempo es esencial, <span class="text-blue-600 font-semibold">MMWPCB</span> ofrece servicios de fabricación
				rápida de PCB que garantizan una producción veloz sin sacrificar la calidad. Nuestro proceso optimizado asegura que
				tus placas estén listas más rápido que los métodos tradicionales de fabricación de PCB, lo que nos convierte en la
				opción ideal para prototipos y pequeñas producciones.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestras capacidades de fabricación rápida nos permiten producir PCB de alto rendimiento en tan solo 24 a 72
				horas, brindándote prototipos rápidos y pruebas para tus diseños. Ya sea que estés lanzando un nuevo producto o
				iterando sobre diseños existentes, nos aseguramos de que tu proceso de fabricación de PCB sea lo más eficiente
				posible.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Entrega Más Rápida, Misma Alta Calidad</h2>
			<p class="text-gray-600 mb-4">
				Lo que diferencia nuestro servicio es que no sacrificamos la calidad por la velocidad. Utilizamos los mismos
				procesos avanzados de fabricación para los PCB de entrega rápida que para los de fabricación estándar. Esto
				significa que obtienes placas de alta calidad que cumplen con tus especificaciones con mínimos retrasos.
			</p>

			<p class="text-gray-600 mb-8">
				Ya sean placas de una capa, de doble cara o multicapa, nuestro servicio de entrega rápida puede manejar diversos
				diseños con la misma precisión. Además, nuestro extenso inventario de materiales garantiza que tengamos las
				opciones adecuadas disponibles para satisfacer tus necesidades.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cómo Funciona</h2>
			<p class="text-gray-600 mb-4">
				El proceso comienza cuando envías tus archivos de diseño. Nuestro equipo los revisa rápidamente, proporcionando
				una cotización instantánea y un cronograma de producción. Una vez aprobado, comenzamos el proceso de
				fabricación, utilizando nuestros métodos acelerados para convertir tu diseño en un PCB totalmente funcional.
			</p>

			<p class="text-gray-600 mb-8">
				Con múltiples turnos en nuestra planta de fabricación, podemos manejar incluso los proyectos más urgentes. Tus
				placas luego se someten a un control de calidad para garantizar que cumplan con los estándares requeridos antes
				de ser enviadas directamente a ti. Es un proceso simple pero efectivo diseñado para mover tu proyecto
				rápidamente.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Industrias que se Benefician</h2>
			<p class="text-gray-600 mb-4">
				La fabricación rápida de PCB es ideal para varios sectores, incluyendo electrónica de consumo,
				telecomunicaciones, automotriz y dispositivos médicos. Por ejemplo, los ingenieros que trabajan en un nuevo
				prototipo de producto o las startups que necesitan pequeñas series para pruebas pueden beneficiarse del tiempo
				acelerado.
			</p>

			<p class="text-gray-600 mb-8">
				En sectores como las telecomunicaciones y equipos médicos, donde el tiempo es crítico, los PCB de entrega rápida
				aseguran que los componentes esenciales puedan ser probados y refinados rápidamente. Sabemos que estos sectores
				requieren fiabilidad, y estamos aquí para ofrecerla rápidamente.
			</p>
		</div>
	</Layout>
{/if}
