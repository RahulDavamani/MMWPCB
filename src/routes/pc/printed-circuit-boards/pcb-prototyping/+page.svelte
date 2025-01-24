<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}<Layout
		section={'printedCircuitBoards'}
		title="PCB Prototyping"
		description="Start your PCB design with prototyping. Quickly test, validate, and refine your designs before full production."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Prototyping</h1>

			<p class="text-gray-600 mb-4">
				Prototyping is the crucial first step in taking your PCB design from concept to reality. At <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, we understand how important it is to test your designs before full-scale production. Our PCB prototyping
				service offers fast turnaround, ensuring you can quickly iterate and optimize your design.
			</p>

			<p class="text-gray-600 mb-8">
				Whether you’re working on your first design or refining a complex product, we provide the tools and expertise to
				bring your ideas to life. Our prototyping services give you the flexibility to experiment with different
				configurations, materials, and features, helping you discover the best solution for your project.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose PCB Prototyping?</h2>
			<p class="text-gray-600 mb-4">
				Testing your PCB design with prototypes can save you time, money, and headaches in the long run. With our rapid
				prototyping service, you can catch potential issues early, validate design choices, and make adjustments as
				needed before moving into full production.
			</p>

			<p class="text-gray-600 mb-8">
				We handle designs from simple to complex, providing you with high-quality prototypes that accurately reflect
				your vision. Plus, you’ll receive clear feedback, so you can move forward with confidence when scaling up.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Rapid Turnaround for Quick Testing</h2>
			<p class="text-gray-600 mb-4">
				One of the key benefits of prototyping with <span class="text-blue-600 font-semibold">MMWPCB</span> is the speed
				at which we can turn around your designs. We understand that in today’s competitive market, speed is essential. Our
				process ensures that you can test and refine your designs faster than ever before, minimizing delays and accelerating
				your development cycle.
			</p>

			<p class="text-gray-600 mb-8">
				With fast turnaround times (as short as 48 hours), you’ll receive the prototypes you need to move forward with
				your project on time, every time.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">How Our PCB Prototyping Works</h2>
			<p class="text-gray-600 mb-4">
				Our prototyping process begins with a detailed review of your design files. Once we’ve analyzed your
				specifications, we’ll generate an instant quote for your project. From there, we’ll proceed with production,
				using the same precision and attention to detail that we apply to full-scale manufacturing.
			</p>

			<p class="text-gray-600 mb-8">
				We keep you informed throughout the process, providing timely updates so you know exactly when to expect your
				prototypes. After fabrication, each board undergoes rigorous testing to ensure it meets the desired
				functionality.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Flexibility in Design and Materials</h2>
			<p class="text-gray-600 mb-4">
				Our PCB prototyping service offers flexibility, allowing you to experiment with different designs and materials.
				Whether you’re exploring new shapes, components, or specialized materials, we can help bring your ideas to life
				with minimal risk.
			</p>

			<p class="text-gray-600 mb-8">
				We support a variety of materials, including FR4, Rogers, and flexible substrates, and we can accommodate
				different layer counts and board thicknesses. Whatever your design calls for, we can produce a prototype that
				matches your needs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications for PCB Prototyping</h2>
			<p class="text-gray-600 mb-4">
				PCB prototyping is essential for a wide range of industries, including electronics, automotive, medical devices,
				and telecommunications. By testing your design early on, you reduce the risk of errors during mass production
				and increase the chances of product success.
			</p>

			<p class="text-gray-600 mb-8">Our prototyping service is perfect for:</p>

			<p class="text-gray-600 mb-8">- **Electronics startups** testing new concepts and designs.</p>

			<p class="text-gray-600 mb-8">
				- **Automotive engineers** developing reliable and efficient electronic systems for vehicles.
			</p>

			<p class="text-gray-600 mb-8">
				- **Medical device manufacturers** creating PCBs for sensitive, life-saving equipment.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}<Layout
		section={'printedCircuitBoards'}
		title="PCB原型制作"
		description="从原型制作开始您的PCB设计。快速测试、验证和完善您的设计，确保在全面生产前做好准备。"
		button={{ title: '即时报价与在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB原型制作</h1>

			<p class="text-gray-600 mb-4">
				原型制作是将您的PCB设计从概念转化为现实的关键第一步。在<span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们理解在全面生产前测试您的设计的重要性。我们的PCB原型制作服务提供快速的周转时间，确保您可以快速迭代和优化您的设计。
			</p>

			<p class="text-gray-600 mb-8">
				无论您是在进行第一个设计，还是在完善复杂的产品，我们都提供所需的工具和专业知识，帮助您实现创意。我们的原型制作服务让您有灵活的选择，可以尝试不同的配置、材料和功能，帮助您发现最适合您项目的解决方案。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么选择PCB原型制作？</h2>
			<p class="text-gray-600 mb-4">
				通过原型测试您的PCB设计，可以节省时间、金钱和避免长期的麻烦。通过我们的快速原型制作服务，您可以提前发现潜在问题，验证设计选择，并在进入全面生产前进行必要的调整。
			</p>

			<p class="text-gray-600 mb-8">
				我们处理从简单到复杂的设计，提供高质量的原型，准确反映您的愿景。此外，您将收到清晰的反馈，以便您在扩大生产时充满信心。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">快速周转，快速测试</h2>
			<p class="text-gray-600 mb-4">
				通过<span class="text-blue-600 font-semibold">MMWPCB</span
				>进行原型制作的一个主要好处是我们可以快速处理您的设计。我们理解在当今竞争激烈的市场中，速度至关重要。我们的流程确保您可以比以往更快地测试和完善设计，最大程度地减少延迟，加快您的开发周期。
			</p>

			<p class="text-gray-600 mb-8">
				凭借快速的周转时间（最短48小时），您将按时收到所需的原型，每次都能准时推进您的项目。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">我们的PCB原型制作流程</h2>
			<p class="text-gray-600 mb-4">
				我们的原型制作流程始于对您的设计文件的详细审查。一旦我们分析了您的规格，我们将为您的项目生成即时报价。从那里开始，我们将继续生产，使用与全规模生产相同的精度和细节关注。
			</p>

			<p class="text-gray-600 mb-8">
				在整个过程中，我们会保持与您的沟通，提供及时的更新，让您清楚地知道何时能收到您的原型。制造后，每块板都会经过严格的测试，以确保其符合预期的功能。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">设计和材料的灵活性</h2>
			<p class="text-gray-600 mb-4">
				我们的PCB原型制作服务提供灵活性，允许您尝试不同的设计和材料。无论您是在探索新形状、组件，还是专用材料，我们都可以帮助您以最小的风险将创意变为现实。
			</p>

			<p class="text-gray-600 mb-8">
				我们支持多种材料，包括FR4、Rogers和柔性基板，并且能够适应不同的层数和板厚。不论您的设计要求如何，我们都能制作出符合需求的原型。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">PCB原型制作的应用</h2>
			<p class="text-gray-600 mb-4">
				PCB原型制作对于电子、汽车、医疗设备和通信等多个行业至关重要。通过早期测试设计，您可以减少大规模生产中的错误风险，并提高产品成功的机会。
			</p>

			<p class="text-gray-600 mb-8">我们的原型制作服务非常适合：</p>

			<p class="text-gray-600 mb-8">- **电子初创公司**测试新概念和设计。</p>

			<p class="text-gray-600 mb-8">- **汽车工程师**开发可靠高效的车辆电子系统。</p>

			<p class="text-gray-600 mb-8">- **医疗设备制造商**为敏感的、生命攸关的设备制作PCB。</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Prototypage PCB"
		description="Commencez votre conception PCB avec le prototypage. Testez, validez et affinez rapidement vos conceptions avant la production complète."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Prototypage PCB</h1>

			<p class="text-gray-600 mb-4">
				Le prototypage est l'étape cruciale pour passer de la conception de votre PCB à la réalité. Chez <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, nous comprenons l'importance de tester vos conceptions avant la production à grande échelle. Notre service de
				prototypage PCB offre un délai rapide, vous permettant d'itérer et d'optimiser rapidement vos conceptions.
			</p>

			<p class="text-gray-600 mb-8">
				Que vous travailliez sur votre première conception ou que vous affiniez un produit complexe, nous fournissons
				les outils et l'expertise nécessaires pour concrétiser vos idées. Nos services de prototypage vous offrent la
				flexibilité d'expérimenter différentes configurations, matériaux et fonctionnalités, vous aidant à découvrir la
				meilleure solution pour votre projet.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi choisir le prototypage PCB ?</h2>
			<p class="text-gray-600 mb-4">
				Tester votre conception PCB avec des prototypes peut vous faire économiser du temps, de l'argent et des tracas à
				long terme. Avec notre service de prototypage rapide, vous pouvez identifier les problèmes potentiels tôt,
				valider vos choix de conception et effectuer des ajustements avant de passer à la production complète.
			</p>

			<p class="text-gray-600 mb-8">
				Nous gérons des conceptions simples à complexes, vous fournissant des prototypes de haute qualité qui reflètent
				fidèlement votre vision. De plus, vous recevrez des retours clairs, ce qui vous permettra d'avancer en toute
				confiance lors de la montée en production.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Délai rapide pour des tests rapides</h2>
			<p class="text-gray-600 mb-4">
				L'un des principaux avantages du prototypage avec <span class="text-blue-600 font-semibold">MMWPCB</span> est la
				rapidité avec laquelle nous pouvons traiter vos conceptions. Nous comprenons que dans le marché concurrentiel d'aujourd'hui,
				la vitesse est essentielle. Notre processus garantit que vous pouvez tester et affiner vos conceptions plus rapidement
				que jamais, minimisant les retards et accélérant votre cycle de développement.
			</p>

			<p class="text-gray-600 mb-8">
				Grâce à des délais rapides (aussi courts que 48 heures), vous recevrez les prototypes dont vous avez besoin pour
				avancer dans votre projet à temps, à chaque fois.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Comment fonctionne notre prototypage PCB</h2>
			<p class="text-gray-600 mb-4">
				Notre processus de prototypage commence par un examen détaillé de vos fichiers de conception. Une fois que nous
				avons analysé vos spécifications, nous générons un devis instantané pour votre projet. Ensuite, nous procédons à
				la production, en utilisant la même précision et attention aux détails que nous appliquons à la production à
				grande échelle.
			</p>

			<p class="text-gray-600 mb-8">
				Nous vous tenons informé tout au long du processus, vous fournissant des mises à jour en temps réel pour que
				vous sachiez exactement quand attendre vos prototypes. Après fabrication, chaque carte subit des tests rigoureux
				pour garantir qu'elle répond à la fonctionnalité souhaitée.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Flexibilité dans la conception et les matériaux</h2>
			<p class="text-gray-600 mb-4">
				Notre service de prototypage PCB offre une grande flexibilité, vous permettant d'expérimenter différentes
				conceptions et matériaux. Que vous exploriez de nouvelles formes, des composants ou des matériaux spécialisés,
				nous pouvons vous aider à concrétiser vos idées avec un risque minimal.
			</p>

			<p class="text-gray-600 mb-8">
				Nous supportons une variété de matériaux, y compris FR4, Rogers et des substrats flexibles, et nous pouvons
				adapter différents nombres de couches et épaisseurs de cartes. Quel que soit votre besoin, nous pouvons produire
				un prototype qui correspond à vos exigences.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications du prototypage PCB</h2>
			<p class="text-gray-600 mb-4">
				Le prototypage PCB est essentiel pour de nombreux secteurs, notamment l'électronique, l'automobile, les
				dispositifs médicaux et les télécommunications. Tester votre conception tôt dans le processus réduit les risques
				d'erreurs pendant la production de masse et augmente les chances de succès du produit.
			</p>

			<p class="text-gray-600 mb-8">Notre service de prototypage est idéal pour :</p>

			<p class="text-gray-600 mb-8">- **Les start-ups électroniques** testant de nouveaux concepts et designs.</p>

			<p class="text-gray-600 mb-8">
				- **Les ingénieurs automobiles** développant des systèmes électroniques fiables et efficaces pour les véhicules.
			</p>

			<p class="text-gray-600 mb-8">
				- **Les fabricants de dispositifs médicaux** créant des PCB pour des équipements sensibles et vitaux.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Prototipado de PCB"
		description="Comienza tu diseño de PCB con prototipado. Prueba, valida y perfecciona rápidamente tus diseños antes de la producción completa."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Prototipado de PCB</h1>

			<p class="text-gray-600 mb-4">
				El prototipado es el primer paso crucial para llevar tu diseño de PCB del concepto a la realidad. En <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, entendemos lo importante que es probar tus diseños antes de la producción a gran escala. Nuestro servicio de
				prototipado de PCB ofrece un tiempo de respuesta rápido, asegurando que puedas iterar y optimizar rápidamente tu
				diseño.
			</p>

			<p class="text-gray-600 mb-8">
				Ya sea que estés trabajando en tu primer diseño o perfeccionando un producto complejo, proporcionamos las
				herramientas y la experiencia para dar vida a tus ideas. Nuestros servicios de prototipado te dan la
				flexibilidad de experimentar con diferentes configuraciones, materiales y características, ayudándote a
				descubrir la mejor solución para tu proyecto.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por qué elegir el prototipado de PCB?</h2>
			<p class="text-gray-600 mb-4">
				Probar tu diseño de PCB con prototipos puede ahorrarte tiempo, dinero y dolores de cabeza a largo plazo. Con
				nuestro servicio de prototipado rápido, puedes detectar posibles problemas temprano, validar las elecciones de
				diseño y hacer ajustes según sea necesario antes de pasar a la producción completa.
			</p>

			<p class="text-gray-600 mb-8">
				Manejamos diseños desde los más simples hasta los más complejos, proporcionándote prototipos de alta calidad que
				reflejan con precisión tu visión. Además, recibirás comentarios claros, para que puedas avanzar con confianza
				cuando escales la producción.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Tiempo de respuesta rápido para pruebas rápidas</h2>
			<p class="text-gray-600 mb-4">
				Uno de los principales beneficios del prototipado con <span class="text-blue-600 font-semibold">MMWPCB</span> es
				la velocidad con la que podemos realizar tus diseños. Entendemos que en el mercado competitivo de hoy, la velocidad
				es esencial. Nuestro proceso asegura que puedas probar y perfeccionar tus diseños más rápido que nunca, minimizando
				retrasos y acelerando tu ciclo de desarrollo.
			</p>

			<p class="text-gray-600 mb-8">
				Con tiempos de respuesta rápidos (tan cortos como 48 horas), recibirás los prototipos que necesitas para avanzar
				con tu proyecto a tiempo, siempre.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cómo funciona nuestro prototipado de PCB</h2>
			<p class="text-gray-600 mb-4">
				Nuestro proceso de prototipado comienza con una revisión detallada de tus archivos de diseño. Una vez que
				hayamos analizado tus especificaciones, generaremos una cotización instantánea para tu proyecto. Desde ahí,
				procederemos con la producción, utilizando la misma precisión y atención al detalle que aplicamos en la
				fabricación a gran escala.
			</p>

			<p class="text-gray-600 mb-8">
				Te mantendremos informado a lo largo del proceso, proporcionando actualizaciones oportunas para que sepas
				exactamente cuándo esperar tus prototipos. Después de la fabricación, cada placa se someterá a rigurosas pruebas
				para garantizar que cumpla con la funcionalidad deseada.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Flexibilidad en diseño y materiales</h2>
			<p class="text-gray-600 mb-4">
				Nuestro servicio de prototipado de PCB ofrece flexibilidad, lo que te permite experimentar con diferentes
				diseños y materiales. Ya sea que estés explorando nuevas formas, componentes o materiales especializados,
				podemos ayudarte a dar vida a tus ideas con un riesgo mínimo.
			</p>

			<p class="text-gray-600 mb-8">
				Soportamos una variedad de materiales, incluidos FR4, Rogers y sustratos flexibles, y podemos adaptarnos a
				diferentes cantidades de capas y grosores de placas. Sea cual sea tu diseño, podemos producir un prototipo que
				se ajuste a tus necesidades.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Aplicaciones del prototipado de PCB</h2>
			<p class="text-gray-600 mb-4">
				El prototipado de PCB es esencial para una amplia gama de industrias, incluidas la electrónica, la automotriz,
				los dispositivos médicos y las telecomunicaciones. Al probar tu diseño temprano, reduces el riesgo de errores
				durante la producción en masa y aumentas las posibilidades de éxito del producto.
			</p>

			<p class="text-gray-600 mb-8">Nuestro servicio de prototipado es perfecto para:</p>

			<p class="text-gray-600 mb-8">- **Startups electrónicas** que prueban nuevos conceptos y diseños.</p>

			<p class="text-gray-600 mb-8">
				- **Ingenieros automotrices** desarrollando sistemas electrónicos confiables y eficientes para vehículos.
			</p>

			<p class="text-gray-600 mb-8">
				- **Fabricantes de dispositivos médicos** creando PCBs para equipos sensibles y vitales.
			</p>
		</div>
	</Layout>
{/if}
