<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'printedCircuitBoards'}
		title="Low-volume Production"
		description="High-quality PCB manufacturing for low-volume production runs. Ideal for startups and niche applications."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Low-volume Production</h1>

			<p class="text-gray-600 mb-4">
				When scaling up your project is too risky or expensive, <span class="text-blue-600 font-semibold">MMWPCB</span> offers
				low-volume production services that allow you to manufacture high-quality PCBs without the commitment of mass production.
				Whether you’re a startup, an R&D team, or working on a niche project, our low-volume production service is designed
				to meet your needs.
			</p>

			<p class="text-gray-600 mb-8">
				We understand the unique challenges of low-volume production, and we’re here to offer a flexible and
				cost-effective solution. Our team works closely with you to ensure your designs are brought to life with
				precision, efficiency, and the same quality you’d expect from larger production runs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Perfect for Startups and Prototyping</h2>
			<p class="text-gray-600 mb-4">
				Low-volume production is ideal for startups looking to validate their designs in the market or refine
				prototypes. With our services, you can produce a small batch of PCBs for testing, pilot runs, or initial product
				launches. This approach ensures that you only produce what’s needed, keeping costs low while still maintaining
				high quality.
			</p>

			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we use the same rigorous processes for low-volume
				runs as we do for high-volume production, ensuring the quality of every PCB. Whether you need 10, 50, or 500
				boards, we offer the flexibility to produce precisely what you need without the overhead of large-scale
				manufacturing.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cost-Effective and Flexible</h2>
			<p class="text-gray-600 mb-4">
				One of the greatest advantages of low-volume production is cost savings. When compared to traditional
				large-batch production, low-volume runs allow you to focus on the specific needs of your project. You’ll save
				money on materials and reduce excess stock, only producing the quantity necessary for your current demand.
			</p>

			<p class="text-gray-600 mb-8">
				We also provide flexibility in production timelines, material choices, and customizations, allowing you to
				refine your design and address any challenges without the financial burden of mass production. Whether you’re
				testing new components, designs, or features, our service gives you the ability to iterate quickly and
				affordably.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Streamlined Manufacturing Process</h2>
			<p class="text-gray-600 mb-4">
				Our low-volume production service is designed to be efficient. From the moment you submit your design, we begin
				working on a streamlined production plan that ensures a quick turnaround time. With our advanced manufacturing
				technology, we’re able to meet tight deadlines without compromising on quality.
			</p>

			<p class="text-gray-600 mb-8">
				We know that in the fast-paced world of electronics, time is critical. Our team is dedicated to providing clear
				communication and fast response times, ensuring that your PCBs are fabricated, tested, and delivered as quickly
				as possible. Whether you need a few prototypes or a small batch for market testing, we work to meet your
				timeline.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Precision and Quality</h2>
			<p class="text-gray-600 mb-4">
				Even with low-volume runs, precision is key. We ensure that every PCB, regardless of batch size, meets strict
				quality standards. Our team uses advanced equipment to inspect and test every board before delivery, ensuring
				that all of your requirements are met.
			</p>

			<p class="text-gray-600 mb-8">
				Our low-volume production service is perfect for industries where high standards are essential, such as medical
				devices, automotive electronics, and telecommunications. Whether you're producing simple single-layer boards or
				more complex multi-layer designs, we guarantee that each board is manufactured to the highest standards.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Industries Served</h2>
			<p class="text-gray-600 mb-4">
				Our low-volume production service serves a wide range of industries. From automotive to medical devices, we help
				companies create high-quality PCBs that meet their specific needs. Our customers include electronics startups,
				R&D departments, and enterprises testing new products.
			</p>

			<p class="text-gray-600 mb-8">
				By offering flexibility, quality, and cost-effectiveness, we empower industries to bring their innovative
				products to market without the risk of overproduction. This service is particularly useful for companies working
				on niche applications that require small quantities of PCBs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Low-volume Production?</h2>
			<p class="text-gray-600 mb-4">
				With <span class="text-blue-600 font-semibold">MMWPCB</span>, you gain access to the latest PCB manufacturing
				technology, a skilled team, and flexible solutions. We specialize in producing high-quality PCBs in low volumes,
				offering you a unique advantage in your product development cycle.
			</p>

			<p class="text-gray-600 mb-8">
				Our focus is on quality, speed, and customer satisfaction. Whether you need a small batch for testing or a niche
				product for a specialized market, we are equipped to handle your low-volume production needs with precision and
				care.
			</p>

			<p class="text-gray-600">
				Ready to get started with your low-volume PCB production? Contact us today for an instant quote, and we’ll help
				bring your project to life with top-quality PCBs that meet your exact specifications.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'printedCircuitBoards'}
		title="小批量生产"
		description="高质量的PCB制造，适用于小批量生产。非常适合初创公司和特定应用。"
		button={{ title: '立即报价并在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">小批量生产</h1>

			<p class="text-gray-600 mb-4">
				当项目扩展过于冒险或成本过高时，<span class="text-blue-600 font-semibold">MMWPCB</span> 提供 小批量生产服务，使您能够制造高质量的PCB，而无需承诺大规模生产。
				无论您是初创公司、研发团队，还是从事特定项目，我们的小批量生产服务旨在 满足您的需求。
			</p>

			<p class="text-gray-600 mb-8">
				我们理解小批量生产的独特挑战，我们在这里提供灵活且具有成本效益的解决方案。
				我们的团队与您紧密合作，确保您的设计得以精准、高效地实现，并保证质量与 大规模生产相同。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">完美适合初创公司和原型制作</h2>
			<p class="text-gray-600 mb-4">
				小批量生产非常适合初创公司，用于验证市场设计或改进原型。
				通过我们的服务，您可以生产一小批PCB用于测试、试运行或初期产品发布。
				这种方式确保您只生产所需的数量，从而保持低成本并确保高质量。
			</p>

			<p class="text-gray-600 mb-4">
				在<span class="text-blue-600 font-semibold">MMWPCB</span>，我们对小批量生产使用与大批量生产相同的严格流程，
				确保每个PCB的质量。无论您需要10块、50块还是500块，我们都提供灵活的生产方案，
				让您只生产所需数量，无需承担大规模制造的额外成本。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">成本效益与灵活性</h2>
			<p class="text-gray-600 mb-4">
				小批量生产的最大优势之一是节省成本。与传统的大批量生产相比，小批量生产使您能够
				专注于项目的具体需求。您可以节省材料费用并减少多余的库存，只生产当前需求的数量。
			</p>

			<p class="text-gray-600 mb-8">
				我们还提供生产时间表、材料选择和定制化的灵活性，允许您在没有大规模生产的财务负担下
				调整设计并解决任何挑战。无论您是测试新组件、设计还是功能，我们的服务使您能够快速且经济地 进行迭代。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">简化的生产过程</h2>
			<p class="text-gray-600 mb-4">
				我们的低量生产服务旨在提高效率。从您提交设计的那一刻起，我们开始制定简化的生产计划，
				确保快速的交货时间。借助我们的先进制造技术，我们能够在不妥协质量的情况下满足紧迫的 交期。
			</p>

			<p class="text-gray-600 mb-8">
				我们知道，在快速发展的电子行业中，时间至关重要。我们的团队致力于提供清晰的沟通和
				快速的响应时间，确保您的PCB被制造、测试并尽快交付。无论您需要几块原型板还是小批量
				市场测试板，我们都会努力按您的时间表完成。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">精准与质量</h2>
			<p class="text-gray-600 mb-4">
				即使是小批量生产，精度仍然是关键。我们确保每个PCB，无论批量大小，都符合严格的质量标准。
				我们的团队使用先进设备检查和测试每块电路板，确保满足您的所有要求。
			</p>

			<p class="text-gray-600 mb-8">
				我们的低量生产服务非常适合那些对质量要求极高的行业，如医疗设备、汽车电子和电信。
				无论您是生产简单的单层板，还是更复杂的多层设计，我们都保证每块电路板都按照最高标准 制造。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">服务的行业</h2>
			<p class="text-gray-600 mb-4">
				我们的低量生产服务服务于广泛的行业。从汽车到医疗设备，我们帮助公司创造满足其
				特定需求的高质量PCB。我们的客户包括电子初创公司、研发部门和测试新产品的企业。
			</p>

			<p class="text-gray-600 mb-8">
				通过提供灵活性、质量和成本效益，我们使行业能够将创新产品推向市场，而无需担心过度生产的风险。
				该服务特别适用于从事特定应用、需要小批量PCB的公司。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为何选择MMWPCB进行小批量生产？</h2>
			<p class="text-gray-600 mb-4">
				选择<span class="text-blue-600 font-semibold">MMWPCB</span>，您将获得最新的PCB制造技术、技术精湛的团队
				以及灵活的解决方案。我们专注于小批量生产高质量PCB，为您的产品开发周期提供独特的优势。
			</p>

			<p class="text-gray-600 mb-8">
				我们的重点是质量、速度和客户满意度。无论您需要少量的测试板，还是专门市场的小众产品，
				我们都能以精准和关怀来满足您的小批量生产需求。
			</p>

			<p class="text-gray-600">
				准备好开始您的小批量PCB生产了吗？立即联系我们获取报价，我们将帮助您通过顶级质量的PCB
				将项目实现成型，完全符合您的规格要求。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'printedCircuitBoards'}
		title="Production à faible volume"
		description="Fabrication de PCB de haute qualité pour des productions à faible volume. Idéal pour les startups et les applications de niche."
		button={{ title: 'Devis instantané & Commandez en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Production à faible volume</h1>

			<p class="text-gray-600 mb-4">
				Lorsque l'extension de votre projet est trop risquée ou coûteuse, <span class="text-blue-600 font-semibold"
					>MMWPCB</span
				> propose des services de production à faible volume vous permettant de fabriquer des PCB de haute qualité sans l'engagement
				de la production de masse. Que vous soyez une startup, une équipe de R&D ou que vous travailliez sur un projet de
				niche, notre service de production à faible volume est conçu pour répondre à vos besoins.
			</p>

			<p class="text-gray-600 mb-8">
				Nous comprenons les défis uniques de la production à faible volume, et nous sommes là pour offrir une solution
				flexible et économique. Notre équipe travaille en étroite collaboration avec vous pour garantir que vos
				conceptions prennent vie avec précision, efficacité et la même qualité que vous attendez des productions de
				grande envergure.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Idéal pour les startups et la création de prototypes</h2>
			<p class="text-gray-600 mb-4">
				La production à faible volume est idéale pour les startups souhaitant valider leurs conceptions sur le marché ou
				affiner des prototypes. Avec nos services, vous pouvez produire une petite série de PCB pour des tests, des
				essais pilotes ou des lancements de produits initiaux. Cette approche garantit que vous ne produisez que ce qui
				est nécessaire, maintenant les coûts bas tout en maintenant une haute qualité.
			</p>

			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous appliquons les mêmes processus rigoureux pour
				les productions à faible volume que pour les productions de grande envergure, garantissant la qualité de chaque
				PCB. Que vous ayez besoin de 10, 50 ou 500 cartes, nous offrons la flexibilité de produire exactement ce dont
				vous avez besoin sans les coûts supplémentaires de la fabrication à grande échelle.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Économique et flexible</h2>
			<p class="text-gray-600 mb-4">
				L'un des plus grands avantages de la production à faible volume est l'économie de coûts. Par rapport à la
				production traditionnelle à grande échelle, les séries à faible volume vous permettent de vous concentrer sur
				les besoins spécifiques de votre projet. Vous économiserez sur les matériaux et réduirez les stocks
				excédentaires, ne produisant que la quantité nécessaire à votre demande actuelle.
			</p>

			<p class="text-gray-600 mb-8">
				Nous offrons également de la flexibilité dans les délais de production, les choix de matériaux et les
				personnalisations, vous permettant d'affiner votre conception et de résoudre tout problème sans le fardeau
				financier de la production de masse. Que vous testiez de nouveaux composants, conceptions ou fonctionnalités,
				notre service vous permet d'itérer rapidement et à moindre coût.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Processus de fabrication rationalisé</h2>
			<p class="text-gray-600 mb-4">
				Notre service de production à faible volume est conçu pour être efficace. Dès que vous soumettez votre
				conception, nous commençons à travailler sur un plan de production rationalisé qui garantit un délai d'exécution
				rapide. Grâce à notre technologie de fabrication avancée, nous pouvons respecter des délais serrés sans
				compromettre la qualité.
			</p>

			<p class="text-gray-600 mb-8">
				Nous savons que dans le monde rapide de l'électronique, le temps est crucial. Notre équipe est dédiée à fournir
				une communication claire et des délais de réponse rapides, garantissant que vos PCB soient fabriqués, testés et
				livrés aussi rapidement que possible. Que vous ayez besoin de quelques prototypes ou d'une petite série pour un
				test sur le marché, nous travaillons pour respecter votre calendrier.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Précision et qualité</h2>
			<p class="text-gray-600 mb-4">
				Même pour des productions à faible volume, la précision est essentielle. Nous nous assurons que chaque PCB,
				quelle que soit la taille du lot, respecte des normes de qualité strictes. Notre équipe utilise des équipements
				avancés pour inspecter et tester chaque carte avant livraison, garantissant que toutes vos exigences sont
				respectées.
			</p>

			<p class="text-gray-600 mb-8">
				Notre service de production à faible volume est parfait pour les industries où des normes de haute qualité sont
				essentielles, telles que les dispositifs médicaux, les électroniques automobiles et les télécommunications. Que
				vous produisiez des cartes simples à une seule couche ou des conceptions plus complexes à plusieurs couches,
				nous garantissons que chaque carte est fabriquée selon les normes les plus strictes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Secteurs desservis</h2>
			<p class="text-gray-600 mb-4">
				Notre service de production à faible volume dessert un large éventail de secteurs. De l'automobile aux
				dispositifs médicaux, nous aidons les entreprises à créer des PCB de haute qualité qui répondent à leurs besoins
				spécifiques. Nos clients incluent des startups électroniques, des départements R&D et des entreprises testant de
				nouveaux produits.
			</p>

			<p class="text-gray-600 mb-8">
				En offrant flexibilité, qualité et rentabilité, nous permettons aux industries de mettre leurs produits
				innovants sur le marché sans risquer la surproduction. Ce service est particulièrement utile pour les
				entreprises travaillant sur des applications de niche nécessitant de petites quantités de PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				Pourquoi choisir MMWPCB pour la production à faible volume ?
			</h2>
			<p class="text-gray-600 mb-4">
				Avec <span class="text-blue-600 font-semibold">MMWPCB</span>, vous accédez aux dernières technologies de
				fabrication de PCB, à une équipe qualifiée et à des solutions flexibles. Nous nous spécialisons dans la
				production de PCB de haute qualité en faible volume, vous offrant un avantage unique dans votre cycle de
				développement de produits.
			</p>

			<p class="text-gray-600 mb-8">
				Notre priorité est la qualité, la rapidité et la satisfaction client. Que vous ayez besoin d'une petite série
				pour des tests ou d'un produit de niche pour un marché spécialisé, nous sommes prêts à gérer vos besoins de
				production à faible volume avec précision et soin.
			</p>

			<p class="text-gray-600">
				Prêt à commencer votre production de PCB à faible volume ? Contactez-nous dès aujourd'hui pour un devis
				instantané, et nous vous aiderons à concrétiser votre projet avec des PCB de qualité supérieure qui respectent
				vos spécifications exactes.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'printedCircuitBoards'}
		title="Producción a Baja Escala"
		description="Fabricación de PCB de alta calidad para producciones a baja escala. Ideal para startups y aplicaciones de nicho."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Producción a Baja Escala</h1>

			<p class="text-gray-600 mb-4">
				Cuando escalar tu proyecto es demasiado arriesgado o costoso, <span class="text-blue-600 font-semibold"
					>MMWPCB</span
				> ofrece servicios de producción a baja escala que te permiten fabricar PCBs de alta calidad sin el compromiso de
				la producción en masa. Tanto si eres una startup, un equipo de I+D o trabajas en un proyecto de nicho, nuestro servicio
				de producción a baja escala está diseñado para satisfacer tus necesidades.
			</p>

			<p class="text-gray-600 mb-8">
				Entendemos los desafíos únicos de la producción a baja escala y estamos aquí para ofrecer una solución flexible
				y costosa. Nuestro equipo trabaja de cerca contigo para asegurar que tus diseños cobren vida con precisión,
				eficiencia y la misma calidad que esperarías de producciones a gran escala.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Ideal para Startups y Prototipos</h2>
			<p class="text-gray-600 mb-4">
				La producción a baja escala es ideal para startups que buscan validar sus diseños en el mercado o refinar
				prototipos. Con nuestros servicios, puedes producir un pequeño lote de PCBs para pruebas, pruebas piloto o
				lanzamientos de productos iniciales. Este enfoque garantiza que solo produzcas lo que necesitas, manteniendo los
				costos bajos y manteniendo la alta calidad.
			</p>

			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, utilizamos los mismos procesos rigurosos para
				producciones a baja escala que para producciones a gran escala, asegurando la calidad de cada PCB. Ya sea que
				necesites 10, 50 o 500 placas, ofrecemos la flexibilidad de producir exactamente lo que necesitas sin los costos
				adicionales de la fabricación a gran escala.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Rentable y Flexible</h2>
			<p class="text-gray-600 mb-4">
				Una de las mayores ventajas de la producción a baja escala es el ahorro de costos. En comparación con la
				producción tradicional a gran escala, las producciones a baja escala te permiten centrarte en las necesidades
				específicas de tu proyecto. Ahorrarás dinero en materiales y reducirás el stock sobrante, produciendo solo la
				cantidad necesaria para tu demanda actual.
			</p>

			<p class="text-gray-600 mb-8">
				También ofrecemos flexibilidad en los plazos de producción, elección de materiales y personalizaciones,
				permitiéndote refinar tu diseño y abordar cualquier desafío sin la carga financiera de la producción en masa. Ya
				sea que estés probando nuevos componentes, diseños o características, nuestro servicio te permite iterar
				rápidamente y de manera asequible.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Proceso de Fabricación Simplificado</h2>
			<p class="text-gray-600 mb-4">
				Nuestro servicio de producción a baja escala está diseñado para ser eficiente. Desde el momento en que envíes tu
				diseño, comenzamos a trabajar en un plan de producción simplificado que garantiza un tiempo de respuesta rápido.
				Con nuestra tecnología avanzada de fabricación, podemos cumplir con plazos ajustados sin comprometer la calidad.
			</p>

			<p class="text-gray-600 mb-8">
				Sabemos que en el mundo acelerado de la electrónica, el tiempo es crítico. Nuestro equipo está dedicado a
				proporcionar comunicación clara y tiempos de respuesta rápidos, asegurando que tus PCBs sean fabricados,
				probados y entregados lo más rápido posible. Ya sea que necesites algunos prototipos o un pequeño lote para
				probar en el mercado, trabajamos para cumplir con tu cronograma.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Precisión y Calidad</h2>
			<p class="text-gray-600 mb-4">
				Aún en producciones a baja escala, la precisión es clave. Nos aseguramos de que cada PCB, sin importar el tamaño
				del lote, cumpla con estrictos estándares de calidad. Nuestro equipo utiliza equipos avanzados para inspeccionar
				y probar cada placa antes de la entrega, asegurando que todos tus requisitos sean cumplidos.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestro servicio de producción a baja escala es perfecto para industrias donde los estándares de calidad son
				esenciales, como dispositivos médicos, electrónica automotriz y telecomunicaciones. Ya sea que produzcas placas
				simples de una sola capa o diseños más complejos de varias capas, garantizamos que cada placa se fabrique según
				los más altos estándares.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Industrias que Atendemos</h2>
			<p class="text-gray-600 mb-4">
				Nuestro servicio de producción a baja escala atiende a una amplia variedad de industrias. Desde la automoción
				hasta los dispositivos médicos, ayudamos a las empresas a crear PCBs de alta calidad que cumplen con sus
				necesidades específicas. Nuestros clientes incluyen startups electrónicas, departamentos de I+D y empresas que
				prueban nuevos productos.
			</p>

			<p class="text-gray-600 mb-8">
				Ofreciendo flexibilidad, calidad y rentabilidad, empoderamos a las industrias para llevar sus productos
				innovadores al mercado sin el riesgo de sobreproducción. Este servicio es particularmente útil para empresas que
				trabajan en aplicaciones de nicho que requieren pequeñas cantidades de PCBs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">
				¿Por qué elegir MMWPCB para la Producción a Baja Escala?
			</h2>
			<p class="text-gray-600 mb-4">
				Con <span class="text-blue-600 font-semibold">MMWPCB</span>, obtienes acceso a la última tecnología de
				fabricación de PCBs, un equipo capacitado y soluciones flexibles. Nos especializamos en la producción de PCBs de
				alta calidad en bajos volúmenes, ofreciéndote una ventaja única en tu ciclo de desarrollo de productos.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestra prioridad es la calidad, la rapidez y la satisfacción del cliente. Ya sea que necesites un pequeño lote
				para pruebas o un producto de nicho para un mercado especializado, estamos preparados para manejar tus
				necesidades de producción a baja escala con precisión y cuidado.
			</p>

			<p class="text-gray-600">
				¿Listo para comenzar con la producción de tus PCBs a baja escala? Contáctanos hoy mismo para una cotización
				instantánea, y te ayudaremos a llevar tu proyecto a la vida con PCBs de la más alta calidad que cumplan con tus
				especificaciones exactas.
			</p>
		</div>
	</Layout>
{/if}
