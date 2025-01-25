<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'surface'}
		title="Surface Finish"
		description="Explore the different surface finishes available for PCBs."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Surface Finish</h1>

			<p class="text-gray-600 mb-6">
				Surface finish plays a crucial role in the performance, durability, and solderability of your PCB. At <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, we offer a variety of surface finishes to meet the specific needs of your design and application.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Surface Finish Matters</h2>
			<p class="text-gray-600 mb-4">
				The surface finish directly impacts how well components solder to the PCB, ensuring good electrical connections
				and long-term reliability. Additionally, the choice of finish affects the board's resistance to oxidation and
				corrosion, making it an important consideration for various industries.
			</p>
			<p class="text-gray-600 mb-4">
				For designs that require precise soldering and high-performance capabilities, choosing the right surface finish
				is essential to avoid costly issues down the road.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Common Surface Finishes</h2>
			<p class="text-gray-600 mb-4">
				We offer a range of surface finishes to meet different needs. The most common finishes include:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>HASL (Hot Air Solder Leveling)</strong>: A cost-effective and widely used finish, ideal for general
					applications. Available in both leaded and lead-free versions.
				</li>
				<li>
					<strong>ENIG (Electroless Nickel Immersion Gold)</strong>: A premium finish that provides excellent
					solderability and resistance to oxidation. Ideal for high-end, high-reliability applications like medical
					devices and aerospace electronics.
				</li>
				<li>
					<strong>OSP (Organic Solderability Preservative)</strong>: A green finish that protects copper from oxidation,
					offering a smooth surface for soldering. It’s an environmentally friendly option.
				</li>
				<li>
					<strong>Immersion Silver</strong>: This finish offers excellent flatness and good electrical performance,
					suitable for high-speed applications.
				</li>
				<li>
					<strong>Immersion Tin</strong>: A lead-free option that offers good solderability and low cost, commonly used
					for simple applications.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Choosing the Right Surface Finish</h2>
			<p class="text-gray-600 mb-4">
				Selecting the correct surface finish for your PCB depends on several factors, including the type of components
				you’ll be using, the environment in which the PCB will operate, and the overall performance requirements.
			</p>
			<p class="text-gray-600 mb-4">
				For example, if your board will be exposed to harsh environmental conditions or requires high-frequency
				performance, finishes like ENIG or Immersion Silver are often the best choice. On the other hand, for low-cost,
				high-volume projects, HASL is a reliable option.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considerations for Selecting Surface Finish</h2>
			<p class="text-gray-600 mb-4">When selecting the right surface finish for your PCB, consider the following:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Solderability:</strong> The surface finish should provide a smooth surface that ensures reliable soldering.
				</li>
				<li>
					<strong>Oxidation Resistance:</strong> The finish should protect the PCB from corrosion and environmental factors,
					extending the board’s lifespan.
				</li>
				<li>
					<strong>Environmental Factors:</strong> Consider the environment your PCB will be used in (e.g., automotive, medical)
					and choose a finish that can handle those conditions.
				</li>
				<li>
					<strong>Cost Considerations:</strong> Some finishes are more expensive than others. Balance your design requirements
					with your budget.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
			<p class="text-gray-600 mb-4">
				Choosing the right surface finish for your PCB ensures its reliability, longevity, and functionality. At <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, we offer a wide range of surface finishes to suit your specific needs, whether you’re working on a simple
				consumer device or a complex, high-performance application.
			</p>
			<p class="text-gray-600 mb-4">
				Contact us today for assistance with selecting the optimal surface finish for your PCB project.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'surface'}
		title="表面处理"
		description="探索适用于PCB的不同表面处理。"
		button={{ title: '即时报价与在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">表面处理</h1>

			<p class="text-gray-600 mb-6">
				表面处理在PCB的性能、耐用性和可焊性中起着至关重要的作用。在 <span class="text-blue-600 font-semibold"
					>MMWPCB</span
				>，我们提供多种表面处理，满足您的设计和应用的具体需求。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么表面处理很重要</h2>
			<p class="text-gray-600 mb-4">
				表面处理直接影响元件与PCB的焊接效果，确保良好的电气连接和长期的可靠性。此外，处理的选择还影响板材的抗氧化和抗腐蚀能力，因此对于各个行业来说都是一个重要的考虑因素。
			</p>
			<p class="text-gray-600 mb-4">
				对于需要精确焊接和高性能的设计，选择合适的表面处理对于避免后期的高昂问题至关重要。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">常见的表面处理</h2>
			<p class="text-gray-600 mb-4">我们提供多种表面处理，以满足不同的需求。最常见的表面处理包括：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>HASL（热风平整焊接）</strong>：一种经济实用的广泛使用的处理方法，适用于一般应用。提供含铅和无铅版本。
				</li>
				<li>
					<strong>ENIG（化学镀镍金）</strong
					>：一种高端的表面处理，提供出色的可焊性和抗氧化性。适用于高端、高可靠性的应用，如医疗设备和航空电子。
				</li>
				<li>
					<strong>OSP（有机可焊性保护剂）</strong
					>：一种绿色表面处理，保护铜免受氧化，提供光滑的焊接表面。是一种环保选项。
				</li>
				<li>
					<strong>浸银</strong>：该处理提供出色的平整度和良好的电气性能，适用于高速应用。
				</li>
				<li>
					<strong>浸锡</strong>：一种无铅选项，提供良好的可焊性和低成本，通常用于简单应用。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">选择合适的表面处理</h2>
			<p class="text-gray-600 mb-4">
				为您的PCB选择合适的表面处理取决于多个因素，包括您将使用的组件类型、PCB的工作环境以及整体性能要求。
			</p>
			<p class="text-gray-600 mb-4">
				例如，如果您的板子将暴露在恶劣的环境条件下或需要高频性能，像ENIG或浸银这样的处理通常是最佳选择。另一方面，对于低成本、大批量项目，HASL是一个可靠的选择。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">选择表面处理的注意事项</h2>
			<p class="text-gray-600 mb-4">在选择适合您的PCB的表面处理时，请考虑以下因素：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>可焊性：</strong>表面处理应提供一个光滑的表面，确保可靠的焊接。
				</li>
				<li>
					<strong>抗氧化性：</strong>该处理应保护PCB免受腐蚀和环境因素的影响，延长板材的使用寿命。
				</li>
				<li>
					<strong>环境因素：</strong
					>考虑您的PCB将在何种环境中使用（例如，汽车、医疗），并选择能够应对这些条件的表面处理。
				</li>
				<li>
					<strong>成本考虑：</strong>一些表面处理比其他处理更昂贵。需要平衡设计要求和预算。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">结论</h2>
			<p class="text-gray-600 mb-4">
				选择合适的表面处理确保您的PCB的可靠性、寿命和功能性。在 <span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们提供广泛的表面处理，适应您的具体需求，无论您是在处理简单的消费电子设备还是复杂的高性能应用。
			</p>
			<p class="text-gray-600 mb-4">今天就联系我们，获得有关如何选择最适合您PCB项目的表面处理的帮助。</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'surface'}
		title="Finition de Surface"
		description="Explorez les différentes finitions de surface disponibles pour les PCB."
		button={{ title: 'Devis Instantané & Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Finition de Surface</h1>

			<p class="text-gray-600 mb-6">
				La finition de surface joue un rôle crucial dans les performances, la durabilité et la soudabilité de votre PCB.
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous proposons une variété de finitions de surface
				pour répondre aux besoins spécifiques de votre conception et application.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi la finition de surface est-elle importante ?</h2>
			<p class="text-gray-600 mb-4">
				La finition de surface influence directement la qualité de la soudure des composants sur le PCB, assurant ainsi
				une bonne connexion électrique et une fiabilité à long terme. De plus, le choix de la finition affecte la
				résistance de la carte à l'oxydation et à la corrosion, ce qui en fait un facteur important pour de nombreux
				secteurs.
			</p>
			<p class="text-gray-600 mb-4">
				Pour les conceptions nécessitant une soudure précise et des capacités de haute performance, choisir la bonne
				finition est essentiel pour éviter des problèmes coûteux à l'avenir.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Finitions de Surface Courantes</h2>
			<p class="text-gray-600 mb-4">
				Nous proposons une gamme de finitions de surface pour répondre à différents besoins. Les finitions les plus
				courantes comprennent :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>HASL (Hot Air Solder Leveling)</strong> : Une finition économique et largement utilisée, idéale pour des
					applications générales. Disponible en versions avec et sans plomb.
				</li>
				<li>
					<strong>ENIG (Nickel Électroless Immersion Gold)</strong> : Une finition haut de gamme offrant une excellente soudabilité
					et résistance à l'oxydation. Idéale pour des applications de haute qualité et haute fiabilité, telles que les dispositifs
					médicaux et l'électronique aérospatiale.
				</li>
				<li>
					<strong>OSP (Organic Solderability Preservative)</strong> : Une finition verte qui protège le cuivre de l'oxydation
					et offre une surface lisse pour la soudure. C'est une option respectueuse de l'environnement.
				</li>
				<li>
					<strong>Immersion Argent</strong> : Cette finition offre une excellente planéité et de bonnes performances électriques,
					adaptée aux applications haute vitesse.
				</li>
				<li>
					<strong>Immersion Étain</strong> : Une option sans plomb offrant une bonne soudabilité et un faible coût, couramment
					utilisée pour des applications simples.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Choisir la Bonne Finition de Surface</h2>
			<p class="text-gray-600 mb-4">
				Le choix de la finition de surface pour votre PCB dépend de plusieurs facteurs, y compris le type de composants
				que vous utilisez, l'environnement dans lequel le PCB fonctionnera et les exigences globales en matière de
				performance.
			</p>
			<p class="text-gray-600 mb-4">
				Par exemple, si votre carte sera exposée à des conditions environnementales sévères ou nécessite des
				performances à haute fréquence, des finitions telles que ENIG ou Immersion Argent sont souvent le meilleur
				choix. En revanche, pour des projets à faible coût et à fort volume, HASL est une option fiable.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considérations pour le Choix de la Finition de Surface</h2>
			<p class="text-gray-600 mb-4">
				Lors du choix de la finition de surface idéale pour votre PCB, tenez compte des éléments suivants :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Soudabilité :</strong> La finition de surface doit offrir une surface lisse qui garantit une soudure fiable.
				</li>
				<li>
					<strong>Résistance à l'oxydation :</strong> La finition doit protéger le PCB contre la corrosion et les facteurs
					environnementaux, prolongeant ainsi la durée de vie de la carte.
				</li>
				<li>
					<strong>Facteurs environnementaux :</strong> Prenez en compte l'environnement dans lequel votre PCB sera utilisé
					(par exemple, automobile, médical) et choisissez une finition capable de supporter ces conditions.
				</li>
				<li>
					<strong>Considérations de coût :</strong> Certaines finitions sont plus coûteuses que d'autres. Équilibrez vos
					exigences de conception avec votre budget.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
			<p class="text-gray-600 mb-4">
				Choisir la bonne finition de surface pour votre PCB garantit sa fiabilité, sa longévité et ses fonctionnalités.
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous offrons une large gamme de finitions de
				surface pour répondre à vos besoins spécifiques, que vous travailliez sur un simple appareil grand public ou une
				application complexe et haute performance.
			</p>
			<p class="text-gray-600 mb-4">
				Contactez-nous dès aujourd'hui pour obtenir de l'aide dans le choix de la finition de surface optimale pour
				votre projet PCB.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'surface'}
		title="Acabado de Superficie"
		description="Explora los diferentes acabados de superficie disponibles para PCB."
		button={{ title: 'Presupuesto Instantáneo y Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Acabado de Superficie</h1>

			<p class="text-gray-600 mb-6">
				El acabado de superficie juega un papel crucial en el rendimiento, la durabilidad y la soldabilidad de tu PCB.
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, ofrecemos una variedad de acabados de superficie
				para satisfacer las necesidades específicas de tu diseño y aplicación.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Por qué el Acabado de Superficie es Importante</h2>
			<p class="text-gray-600 mb-4">
				El acabado de superficie impacta directamente en la calidad de la soldadura de los componentes al PCB,
				asegurando una buena conexión eléctrica y fiabilidad a largo plazo. Además, la elección del acabado afecta la
				resistencia de la placa a la oxidación y la corrosión, lo que lo convierte en una consideración importante para
				varias industrias.
			</p>
			<p class="text-gray-600 mb-4">
				Para diseños que requieren una soldadura precisa y capacidades de alto rendimiento, elegir el acabado correcto
				es esencial para evitar problemas costosos en el futuro.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Acabados de Superficie Comunes</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos una variedad de acabados de superficie para satisfacer diferentes necesidades. Los acabados más
				comunes incluyen:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>HASL (Hot Air Solder Leveling)</strong>: Un acabado económico y ampliamente utilizado, ideal para
					aplicaciones generales. Disponible en versiones con y sin plomo.
				</li>
				<li>
					<strong>ENIG (Nickel Electroless Immersion Gold)</strong>: Un acabado de gama alta que ofrece excelente
					soldabilidad y resistencia a la oxidación. Ideal para aplicaciones de alta fiabilidad como dispositivos
					médicos y electrónica aeroespacial.
				</li>
				<li>
					<strong>OSP (Organic Solderability Preservative)</strong>: Un acabado ecológico que protege el cobre de la
					oxidación, ofreciendo una superficie lisa para la soldadura.
				</li>
				<li>
					<strong>Inmersión de Plata</strong>: Este acabado ofrece excelente planitud y buenas prestaciones eléctricas,
					adecuado para aplicaciones de alta velocidad.
				</li>
				<li>
					<strong>Inmersión de Estaño</strong>: Una opción sin plomo que ofrece buena soldabilidad y bajo coste,
					comúnmente utilizada en aplicaciones sencillas.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Elegir el Acabado de Superficie Correcto</h2>
			<p class="text-gray-600 mb-4">
				Seleccionar el acabado de superficie adecuado para tu PCB depende de varios factores, incluyendo el tipo de
				componentes que utilizarás, el entorno en el que operará el PCB y los requisitos de rendimiento global.
			</p>
			<p class="text-gray-600 mb-4">
				Por ejemplo, si tu placa estará expuesta a condiciones ambientales severas o requiere un rendimiento de alta
				frecuencia, acabados como ENIG o Inmersión de Plata suelen ser la mejor opción. Por otro lado, para proyectos de
				bajo coste y alto volumen, HASL es una opción fiable.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Consideraciones para Elegir el Acabado de Superficie</h2>
			<p class="text-gray-600 mb-4">
				Al seleccionar el acabado de superficie correcto para tu PCB, ten en cuenta los siguientes aspectos:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Soldabilidad:</strong> El acabado de superficie debe proporcionar una superficie lisa que garantice una
					soldadura fiable.
				</li>
				<li>
					<strong>Resistencia a la Oxidación:</strong> El acabado debe proteger el PCB de la corrosión y factores ambientales,
					prolongando la vida útil de la placa.
				</li>
				<li>
					<strong>Factores Ambientales:</strong> Considera el entorno en el que se utilizará tu PCB (por ejemplo, automotriz,
					médico) y elige un acabado que pueda manejar esas condiciones.
				</li>
				<li>
					<strong>Consideraciones de Coste:</strong> Algunos acabados son más costosos que otros. Equilibra los requisitos
					de diseño con tu presupuesto.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusión</h2>
			<p class="text-gray-600 mb-4">
				Elegir el acabado de superficie adecuado para tu PCB garantiza su fiabilidad, longevidad y funcionalidad. En <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, ofrecemos una amplia gama de acabados de superficie para satisfacer tus necesidades específicas, ya sea que
				trabajes en un dispositivo simple o en una aplicación compleja de alto rendimiento.
			</p>
			<p class="text-gray-600 mb-4">
				Contáctanos hoy mismo para obtener ayuda en la selección del acabado de superficie óptimo para tu proyecto PCB.
			</p>
		</div>
	</Layout>
{/if}
