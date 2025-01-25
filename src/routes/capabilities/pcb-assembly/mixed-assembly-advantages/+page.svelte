<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'pcbAssembly'}
		title="Mixed Assembly Advantages"
		description="Discover the benefits of mixed PCB assembly, combining both surface-mount and through-hole technologies."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Mixed Assembly Advantages</h1>

			<p class="text-gray-600 mb-4">
				Mixed assembly involves the use of both Surface-Mount Technology (SMT) and Through-Hole Technology (THT) within
				a single PCB assembly process. This combination offers distinct advantages for creating efficient,
				high-performance boards suited for a wide range of applications.
			</p>

			<p class="text-gray-600 mb-8">
				By merging the benefits of both technologies, mixed assembly can produce designs that maximize the advantages of
				each, allowing for better functionality, cost-efficiency, and flexibility in production.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Optimized Performance</h2>
			<p class="text-gray-600 mb-4">
				Mixed assembly ensures the optimal performance of your PCB by utilizing SMT for compactness and precision, while
				incorporating THT for strength and reliability. This combination allows your design to benefit from the best of
				both worlds.
			</p>
			<p class="text-gray-600 mb-4">
				For example, SMT components are ideal for high-density designs with smaller footprints, while THT components
				provide strong mechanical connections that are well-suited for components that experience high stress or require
				better heat dissipation.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cost-Effective and Flexible Design</h2>
			<p class="text-gray-600 mb-4">
				Utilizing both SMT and THT enables cost savings without sacrificing quality. You can reduce the number of
				components that require more expensive THT by replacing them with SMT, thereby lowering overall assembly costs.
			</p>
			<p class="text-gray-600 mb-4">
				This flexibility allows your design to adapt to different requirements without needing multiple production runs
				or complicated redesigns. Whether you're working on a prototype or full-scale production, mixed assembly is a
				practical choice.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Reliability and Durability</h2>
			<p class="text-gray-600 mb-4">
				One of the biggest advantages of mixed assembly is the improved durability and reliability of the final product.
				THT components are more robust and are ideal for applications that involve higher mechanical stresses or need to
				be mounted in harsher environments.
			</p>
			<p class="text-gray-600 mb-4">
				SMT components, on the other hand, offer excellent electrical performance and compactness, making them ideal for
				high-performance applications where space is at a premium.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Improved Production Speed</h2>
			<p class="text-gray-600 mb-4">
				Mixed assembly can also improve production efficiency. SMT components are placed quickly and accurately using
				automated pick-and-place machines, while THT components can be inserted and soldered in parallel, reducing
				overall assembly time.
			</p>
			<p class="text-gray-600 mb-4">
				This parallel processing streamlines the production process and can lead to faster turnarounds, especially for
				complex designs that require both technologies.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Wide Application Range</h2>
			<p class="text-gray-600 mb-4">
				Combined SMT and THT technologies are often used in a variety of industries, such as automotive, medical
				devices, consumer electronics, and industrial control systems. The ability to meet the diverse needs of these
				industries while maintaining performance and durability makes mixed assembly an excellent choice for versatile
				designs.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose Mixed Assembly?</h2>
			<p class="text-gray-600 mb-4">
				Mixed assembly allows for a balanced approach to both cost and performance. It helps designers and manufacturers
				optimize their production by combining the benefits of both SMT and THT technologies. This leads to boards that
				are both high-performing and reliable, without unnecessary complexity or cost.
			</p>
			<p class="text-gray-600 mb-4">
				With mixed assembly, you can achieve the right combination of precision, strength, and cost-efficiency for your
				PCB projects. Whether you’re in need of high-density circuit boards or ruggedized products, mixed assembly has
				the flexibility to meet your needs.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'pcbAssembly'}
		title="混合组装的优势"
		description="了解混合PCB组装的好处，结合了表面贴装技术(SMT)和穿孔技术(THT)。"
		button={{ title: '即时报价 & 在线下单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">混合组装的优势</h1>

			<p class="text-gray-600 mb-4">
				混合组装涉及在单个PCB组装过程中同时使用表面贴装技术(SMT)和穿孔技术(THT)。这种组合为创建高效、高性能的电路板提供了独特的优势，适用于广泛的应用。
			</p>

			<p class="text-gray-600 mb-8">
				通过融合这两种技术的优点，混合组装可以产生最大化利用每种技术优势的设计，从而在功能、成本效率和生产灵活性方面提供更多可能。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">优化的性能</h2>
			<p class="text-gray-600 mb-4">
				混合组装通过使用SMT确保紧凑性和精度，同时结合THT提供强度和可靠性，从而确保您的PCB达到最佳性能。这个组合使您的设计能够从两种技术的最佳特性中受益。
			</p>
			<p class="text-gray-600 mb-4">
				例如，SMT组件非常适合高密度设计，具有较小的占地面积，而THT组件则提供强大的机械连接，非常适合承受高压力或需要更好散热的组件。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">具有成本效益和灵活的设计</h2>
			<p class="text-gray-600 mb-4">
				使用SMT和THT的结合可以在不牺牲质量的情况下节省成本。您可以通过用SMT替代更多昂贵的THT组件，从而降低整体组装成本。
			</p>
			<p class="text-gray-600 mb-4">
				这种灵活性使您的设计能够适应不同的要求，而无需多次生产运行或复杂的重新设计。无论您是在做原型设计还是大规模生产，混合组装都是一种实用的选择。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">可靠性和耐用性</h2>
			<p class="text-gray-600 mb-4">
				混合组装的最大优势之一是提高最终产品的耐用性和可靠性。THT组件更加坚固，适用于承受较高机械压力或需要在更恶劣环境中安装的应用。
			</p>
			<p class="text-gray-600 mb-4">另一方面，SMT组件提供优异的电气性能和紧凑性，非常适合空间有限的高性能应用。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">提高生产速度</h2>
			<p class="text-gray-600 mb-4">
				混合组装还可以提高生产效率。SMT组件通过自动贴片机快速准确地放置，而THT组件可以并行插入和焊接，从而减少整体组装时间。
			</p>
			<p class="text-gray-600 mb-4">
				这种并行处理简化了生产过程，尤其对于需要同时使用这两种技术的复杂设计，可以实现更快的周转时间。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">广泛的应用领域</h2>
			<p class="text-gray-600 mb-4">
				SMT和THT技术的结合通常用于汽车、医疗设备、消费电子和工业控制系统等多个行业。能够满足这些行业的多样化需求，同时保持性能和耐用性，使混合组装成为多用途设计的理想选择。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么选择混合组装?</h2>
			<p class="text-gray-600 mb-4">
				混合组装提供了一种平衡成本和性能的方法。它帮助设计师和制造商通过结合SMT和THT技术的优点，优化生产。这导致了既高性能又可靠的电路板，而无需复杂或昂贵的设计。
			</p>
			<p class="text-gray-600 mb-4">
				通过混合组装，您可以为PCB项目实现精度、强度和成本效益的最佳组合。无论您需要高密度电路板还是加强型产品，混合组装都具有满足您需求的灵活性。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'pcbAssembly'}
		title="Avantages de l'Assemblage Mixte"
		description="Découvrez les avantages de l'assemblage PCB mixte, combinant à la fois les technologies de montage en surface et de montage traversant."
		button={{ title: 'Devis Instantané & Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Avantages de l'Assemblage Mixte</h1>

			<p class="text-gray-600 mb-4">
				L'assemblage mixte implique l'utilisation à la fois de la Technologie de Montage en Surface (SMT) et de la
				Technologie de Montage Traversant (THT) dans un même processus d'assemblage PCB. Cette combinaison offre des
				avantages distincts pour la création de cartes efficaces et performantes, adaptées à une large gamme
				d'applications.
			</p>

			<p class="text-gray-600 mb-8">
				En fusionnant les avantages des deux technologies, l'assemblage mixte permet de produire des conceptions
				maximisant les avantages de chacune, offrant ainsi une meilleure fonctionnalité, une efficacité en termes de
				coûts et une flexibilité de production.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Performance Optimisée</h2>
			<p class="text-gray-600 mb-4">
				L'assemblage mixte garantit une performance optimale de votre PCB en utilisant la SMT pour la compacité et la
				précision, tout en intégrant la THT pour la solidité et la fiabilité. Cette combinaison permet à votre
				conception de bénéficier des meilleurs aspects des deux mondes.
			</p>
			<p class="text-gray-600 mb-4">
				Par exemple, les composants SMT sont idéaux pour les conceptions à haute densité avec des empreintes réduites,
				tandis que les composants THT offrent des connexions mécaniques solides, adaptées aux composants subissant des
				contraintes élevées ou nécessitant une meilleure dissipation thermique.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conception Économique et Flexible</h2>
			<p class="text-gray-600 mb-4">
				L'utilisation conjointe de la SMT et de la THT permet de réaliser des économies sans sacrifier la qualité. Vous
				pouvez réduire le nombre de composants nécessitant une THT plus coûteuse en les remplaçant par de la SMT,
				réduisant ainsi les coûts d'assemblage globaux.
			</p>
			<p class="text-gray-600 mb-4">
				Cette flexibilité permet à votre conception de s'adapter à différents besoins sans nécessiter plusieurs séries
				de production ou des reconceptions complexes. Que vous travailliez sur un prototype ou une production à grande
				échelle, l'assemblage mixte est un choix pratique.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Fiabilité et Durabilité</h2>
			<p class="text-gray-600 mb-4">
				L'un des plus grands avantages de l'assemblage mixte est la durabilité et la fiabilité améliorées du produit
				final. Les composants THT sont plus robustes et idéaux pour les applications impliquant des contraintes
				mécaniques élevées ou devant être montées dans des environnements plus difficiles.
			</p>
			<p class="text-gray-600 mb-4">
				Les composants SMT, quant à eux, offrent d'excellentes performances électriques et une compacité, ce qui les
				rend idéaux pour des applications haute performance où l'espace est limité.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Amélioration de la Vitesse de Production</h2>
			<p class="text-gray-600 mb-4">
				L'assemblage mixte peut également améliorer l'efficacité de la production. Les composants SMT sont placés
				rapidement et précisément à l'aide de machines automatiques de placement, tandis que les composants THT peuvent
				être insérés et soudés en parallèle, réduisant ainsi le temps d'assemblage global.
			</p>
			<p class="text-gray-600 mb-4">
				Ce traitement parallèle rationalise le processus de production et peut entraîner des délais plus courts, en
				particulier pour les conceptions complexes nécessitant les deux technologies.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Large Gamme d'Applications</h2>
			<p class="text-gray-600 mb-4">
				Les technologies combinées SMT et THT sont souvent utilisées dans une variété d'industries telles que
				l'automobile, les dispositifs médicaux, l'électronique grand public et les systèmes de contrôle industriel. La
				capacité de répondre aux besoins divers de ces industries tout en maintenant la performance et la durabilité
				fait de l'assemblage mixte un excellent choix pour des conceptions polyvalentes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi Choisir l'Assemblage Mixte ?</h2>
			<p class="text-gray-600 mb-4">
				L'assemblage mixte permet une approche équilibrée entre coût et performance. Il aide les concepteurs et les
				fabricants à optimiser leur production en combinant les avantages des technologies SMT et THT. Cela conduit à
				des cartes à la fois performantes et fiables, sans complexité ni coût inutiles.
			</p>
			<p class="text-gray-600 mb-4">
				Avec l'assemblage mixte, vous pouvez obtenir la combinaison idéale de précision, de solidité et d'efficacité des
				coûts pour vos projets PCB. Que vous ayez besoin de cartes à haute densité ou de produits robustes, l'assemblage
				mixte offre la flexibilité nécessaire pour répondre à vos besoins.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'pcbAssembly'}
		title="Ventajas del Ensamblaje Mixto"
		description="Descubre los beneficios del ensamblaje PCB mixto, combinando tanto las tecnologías de montaje en superficie como de montaje a través de agujeros."
		button={{ title: 'Presupuesto Instantáneo y Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Ventajas del Ensamblaje Mixto</h1>

			<p class="text-gray-600 mb-4">
				El ensamblaje mixto implica el uso tanto de la Tecnología de Montaje en Superficie (SMT) como de la Tecnología
				de Montaje a Través de Agujeros (THT) dentro de un solo proceso de ensamblaje de PCB. Esta combinación ofrece
				ventajas distintivas para la creación de placas eficientes y de alto rendimiento, adecuadas para una amplia
				variedad de aplicaciones.
			</p>

			<p class="text-gray-600 mb-8">
				Al combinar los beneficios de ambas tecnologías, el ensamblaje mixto puede producir diseños que maximizan las
				ventajas de cada una, permitiendo una mejor funcionalidad, eficiencia en costos y flexibilidad en la producción.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Rendimiento Optimizado</h2>
			<p class="text-gray-600 mb-4">
				El ensamblaje mixto asegura el rendimiento óptimo de tu PCB al utilizar SMT para la compacidad y precisión,
				mientras que incorpora THT para la resistencia y fiabilidad. Esta combinación permite que tu diseño se beneficie
				de lo mejor de ambos mundos.
			</p>
			<p class="text-gray-600 mb-4">
				Por ejemplo, los componentes SMT son ideales para diseños de alta densidad con huellas más pequeñas, mientras
				que los componentes THT proporcionan conexiones mecánicas fuertes, ideales para componentes que experimentan
				altas tensiones o requieren una mejor disipación de calor.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Diseño Rentable y Flexible</h2>
			<p class="text-gray-600 mb-4">
				Utilizar tanto SMT como THT permite ahorrar costos sin sacrificar la calidad. Puedes reducir el número de
				componentes que requieren THT, más costosos, reemplazándolos con SMT, lo que reduce los costos de ensamblaje
				globales.
			</p>
			<p class="text-gray-600 mb-4">
				Esta flexibilidad permite que tu diseño se adapte a diferentes necesidades sin necesidad de múltiples ciclos de
				producción o rediseños complicados. Ya sea que estés trabajando en un prototipo o en una producción a gran
				escala, el ensamblaje mixto es una opción práctica.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Fiabilidad y Durabilidad</h2>
			<p class="text-gray-600 mb-4">
				Uno de los mayores beneficios del ensamblaje mixto es la mayor durabilidad y fiabilidad del producto final. Los
				componentes THT son más robustos y son ideales para aplicaciones que involucran tensiones mecánicas más altas o
				que deben montarse en entornos más exigentes.
			</p>
			<p class="text-gray-600 mb-4">
				Los componentes SMT, por otro lado, ofrecen un excelente rendimiento eléctrico y compacidad, lo que los hace
				ideales para aplicaciones de alto rendimiento donde el espacio es limitado.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Mayor Velocidad de Producción</h2>
			<p class="text-gray-600 mb-4">
				El ensamblaje mixto también puede mejorar la eficiencia de producción. Los componentes SMT se colocan
				rápidamente y con precisión mediante máquinas automáticas de colocación, mientras que los componentes THT se
				pueden insertar y soldar en paralelo, reduciendo el tiempo total de ensamblaje.
			</p>
			<p class="text-gray-600 mb-4">
				Este procesamiento paralelo agiliza el proceso de producción y puede llevar a tiempos de entrega más rápidos,
				especialmente para diseños complejos que requieren ambas tecnologías.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Amplia Gama de Aplicaciones</h2>
			<p class="text-gray-600 mb-4">
				Las tecnologías combinadas SMT y THT se utilizan a menudo en una variedad de industrias, como la automotriz,
				dispositivos médicos, electrónica de consumo y sistemas de control industrial. La capacidad de satisfacer las
				diversas necesidades de estas industrias mientras se mantiene el rendimiento y la durabilidad hace que el
				ensamblaje mixto sea una excelente opción para diseños versátiles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por qué Elegir el Ensamblaje Mixto?</h2>
			<p class="text-gray-600 mb-4">
				El ensamblaje mixto permite un enfoque equilibrado entre costo y rendimiento. Ayuda a los diseñadores y
				fabricantes a optimizar su producción combinando los beneficios de las tecnologías SMT y THT. Esto da lugar a
				placas de circuito de alto rendimiento y fiabilidad, sin complejidad ni costos innecesarios.
			</p>
			<p class="text-gray-600 mb-4">
				Con el ensamblaje mixto, puedes lograr la combinación adecuada de precisión, resistencia y eficiencia en costos
				para tus proyectos de PCB. Ya sea que necesites placas de circuito de alta densidad o productos robustos, el
				ensamblaje mixto tiene la flexibilidad para satisfacer tus necesidades.
			</p>
		</div>
	</Layout>
{/if}
