<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'smdStencils'}
		title="Laser Stencil"
		description="Precision laser-cut stencils for accurate solder paste application in PCB assembly."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Laser Stencil</h1>

			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we provide top-quality laser-cut stencils for SMD
				assembly, designed to ensure precise solder paste application. Our laser stencils are the go-to choice for PCB
				assembly because of their exceptional accuracy, clean edges, and ability to handle intricate designs with ease.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Precision Cutting</h2>
			<p class="text-gray-600 mb-4">
				Our laser-cut stencils are made using advanced laser technology that offers a high level of precision. This
				ensures the accurate transfer of solder paste to your PCB pads, which is crucial for the performance and
				reliability of the final assembly. The laser cutting process allows for detailed aperture designs, even for
				small or complex pad geometries.
			</p>

			<p class="text-gray-600 mb-8">
				Whether you're working with fine-pitch components or standard SMD packages, our laser stencils offer
				unparalleled accuracy, reducing the risk of defects like bridging and tombstoning in your assembly.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Benefits of Laser Stencils</h2>
			<p class="text-gray-600 mb-4">
				Laser-cut stencils offer several advantages over traditional methods. The key benefits include:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>High precision, ideal for fine-pitch components.</li>
				<li>Clean edges for improved paste release and uniformity.</li>
				<li>Ability to produce complex aperture shapes and designs.</li>
				<li>Quick turnaround time for fast project delivery.</li>
				<li>Reusable stencils, reducing overall production costs.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Custom Design & Materials</h2>
			<p class="text-gray-600 mb-4">
				We offer fully customizable laser stencils, tailored to your specific PCB design. Whether you need a stencil for
				a prototype or a high-volume production run, we can create a stencil that meets your exact requirements. We also
				offer different materials for stencils, such as stainless steel and nickel, depending on your project's needs.
			</p>

			<p class="text-gray-600 mb-8">
				Our team works closely with you to ensure that the stencil is optimized for your PCB, with proper alignment and
				aperture sizes. We can also offer advice on stencil thickness and other variables to ensure the highest-quality
				results.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications</h2>
			<p class="text-gray-600 mb-4">Laser-cut stencils are ideal for a wide range of applications, including:</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Prototype PCB assembly.</li>
				<li>Low to medium-volume PCB production.</li>
				<li>High-precision, fine-pitch SMD assemblies.</li>
				<li>Flexible PCBs and complex designs requiring custom apertures.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				No matter your project’s scale, our laser stencils deliver the precision and reliability you need to ensure the
				success of your PCB assembly.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'smdStencils'}
		title="激光模板"
		description="精密激光切割模板，用于在PCB组装中精确地涂布焊膏。"
		button={{ title: '即时报价 & 在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">激光模板</h1>

			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span>，我们提供顶级的激光切割模板，用于SMD
				组装，旨在确保焊膏的精确涂布。我们的激光模板因其卓越的准确性、干净的边缘和能够轻松处理复杂设计的能力，而成为PCB组装的首选。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">精密切割</h2>
			<p class="text-gray-600 mb-4">
				我们的激光切割模板采用先进的激光技术制造，提供高精度。这确保了焊膏能够精确地转移到PCB焊盘上，这对于最终组装的性能和可靠性至关重要。激光切割过程能够进行详细的孔径设计，即使对于小型或复杂的焊盘几何形状也能精确处理。
			</p>

			<p class="text-gray-600 mb-8">
				无论您使用的是精密间距组件还是标准的SMD封装，我们的激光模板都能提供无与伦比的精度，减少桥接和“墓碑”现象等缺陷的风险。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">激光模板的优势</h2>
			<p class="text-gray-600 mb-4">激光切割模板相比传统方法提供了若干优势，主要包括：</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>高精度，适用于精密间距组件。</li>
				<li>干净的边缘，改善焊膏释放和均匀性。</li>
				<li>能够生产复杂的孔径形状和设计。</li>
				<li>快速的交货周期，确保项目按时交付。</li>
				<li>可重复使用的模板，减少整体生产成本。</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">定制设计与材料</h2>
			<p class="text-gray-600 mb-4">
				我们提供完全定制的激光模板，专为您的PCB设计量身定制。无论您需要用于原型制作还是大批量生产的模板，我们都可以根据您的确切需求制作符合要求的模板。我们还提供多种材料的模板，如不锈钢和镍，具体取决于您的项目需求。
			</p>

			<p class="text-gray-600 mb-8">
				我们的团队将与您密切合作，确保模板经过优化，以便于您的PCB设计，确保对准和孔径尺寸正确。我们还可以提供关于模板厚度和其他变量的建议，确保获得最高质量的结果。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">应用领域</h2>
			<p class="text-gray-600 mb-4">激光切割模板非常适用于广泛的应用，包括：</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>原型PCB组装。</li>
				<li>中低批量PCB生产。</li>
				<li>高精度、精密间距SMD组装。</li>
				<li>需要定制孔径的柔性PCB和复杂设计。</li>
			</ul>

			<p class="text-gray-600 mb-8">
				无论您的项目规模如何，我们的激光模板都能提供您所需的精度和可靠性，确保您的PCB组装成功。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'smdStencils'}
		title="Pochoir Laser"
		description="Pochoirs découpés au laser de précision pour une application précise de la pâte à souder dans l'assemblage de PCB."
		button={{ title: 'Devis Instantané & Commandez en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Pochoir Laser</h1>

			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous fournissons des pochoirs découpés au laser de
				haute qualité pour l'assemblage SMD, conçus pour garantir une application précise de la pâte à souder. Nos
				pochoirs laser sont le choix idéal pour l'assemblage de PCB grâce à leur précision exceptionnelle, leurs bords
				nets et leur capacité à gérer facilement des conceptions complexes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Découpe Précise</h2>
			<p class="text-gray-600 mb-4">
				Nos pochoirs découpés au laser sont fabriqués à l'aide de technologies laser avancées offrant un haut niveau de
				précision. Cela garantit le transfert précis de la pâte à souder sur les pads du PCB, ce qui est crucial pour la
				performance et la fiabilité du montage final. Le processus de découpe au laser permet des conceptions de trous
				détaillées, même pour les géométries de pads petites ou complexes.
			</p>

			<p class="text-gray-600 mb-8">
				Que vous travailliez avec des composants à pas fin ou des boîtiers SMD standard, nos pochoirs laser offrent une
				précision inégalée, réduisant le risque de défauts tels que les ponts ou les "tombstones" dans votre assemblage.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Avantages des Pochoirs Laser</h2>
			<p class="text-gray-600 mb-4">
				Les pochoirs découpés au laser offrent plusieurs avantages par rapport aux méthodes traditionnelles. Les
				principaux avantages incluent :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Haute précision, idéale pour les composants à pas fin.</li>
				<li>Bords nets pour une meilleure libération de la pâte et une uniformité accrue.</li>
				<li>Capacité à produire des formes et conceptions de trous complexes.</li>
				<li>Délai de traitement rapide pour une livraison rapide des projets.</li>
				<li>Pochoirs réutilisables, réduisant les coûts de production globaux.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conception et Matériaux Personnalisés</h2>
			<p class="text-gray-600 mb-4">
				Nous proposons des pochoirs laser entièrement personnalisables, adaptés à la conception spécifique de votre PCB.
				Que vous ayez besoin d'un pochoir pour un prototype ou une production à grande échelle, nous pouvons créer un
				pochoir qui répond à vos exigences exactes. Nous proposons également différents matériaux pour les pochoirs,
				tels que l'acier inoxydable et le nickel, en fonction des besoins de votre projet.
			</p>

			<p class="text-gray-600 mb-8">
				Notre équipe travaille en étroite collaboration avec vous pour garantir que le pochoir soit optimisé pour votre
				PCB, avec un alignement correct et des tailles de trous adaptées. Nous pouvons également vous conseiller sur
				l'épaisseur du pochoir et d'autres variables pour garantir des résultats de la plus haute qualité.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications</h2>
			<p class="text-gray-600 mb-4">
				Les pochoirs découpés au laser sont idéaux pour une large gamme d'applications, notamment :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Assemblage de PCB prototype.</li>
				<li>Production de PCB à faible et moyen volume.</li>
				<li>Assemblages SMD de haute précision et à pas fin.</li>
				<li>PCBs flexibles et conceptions complexes nécessitant des trous personnalisés.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Quel que soit l'envergure de votre projet, nos pochoirs laser offrent la précision et la fiabilité dont vous
				avez besoin pour garantir le succès de votre assemblage de PCB.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'smdStencils'}
		title="Plantilla Láser"
		description="Plantillas cortadas con láser de precisión para una aplicación precisa de pasta de soldadura en el ensamblaje de PCB."
		button={{ title: 'Presupuesto Instantáneo & Pedir en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Plantilla Láser</h1>

			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, ofrecemos plantillas de alta calidad cortadas con
				láser para el ensamblaje SMD, diseñadas para garantizar una aplicación precisa de pasta de soldadura. Nuestras
				plantillas láser son la opción preferida para el ensamblaje de PCB debido a su precisión excepcional, bordes
				limpios y la capacidad de manejar diseños complejos con facilidad.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Corte de Precisión</h2>
			<p class="text-gray-600 mb-4">
				Las plantillas cortadas con láser se fabrican utilizando tecnología láser avanzada que ofrece un alto nivel de
				precisión. Esto asegura que la pasta de soldadura se transfiera con precisión a los pads de su PCB, lo cual es
				crucial para el rendimiento y la fiabilidad del ensamblaje final. El proceso de corte láser permite diseños
				detallados de aperturas, incluso para geometrías pequeñas o complejas de pads.
			</p>

			<p class="text-gray-600 mb-8">
				Ya sea que esté trabajando con componentes de paso fino o paquetes SMD estándar, nuestras plantillas láser
				ofrecen una precisión inigualable, reduciendo el riesgo de defectos como puentes o "tombstoning" en su
				ensamblaje.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Beneficios de las Plantillas Láser</h2>
			<p class="text-gray-600 mb-4">
				Las plantillas cortadas con láser ofrecen varias ventajas sobre los métodos tradicionales. Los beneficios clave
				incluyen:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Alta precisión, ideal para componentes de paso fino.</li>
				<li>Bordes limpios para una mejor liberación de la pasta y uniformidad.</li>
				<li>Capacidad para producir formas y diseños de aperturas complejos.</li>
				<li>Tiempo de respuesta rápido para entrega rápida de proyectos.</li>
				<li>Plantillas reutilizables, lo que reduce los costos de producción generales.</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Diseño y Materiales Personalizados</h2>
			<p class="text-gray-600 mb-4">
				Ofrecemos plantillas láser completamente personalizables, adaptadas al diseño específico de su PCB. Ya sea que
				necesite una plantilla para un prototipo o una producción a gran escala, podemos crear una plantilla que cumpla
				con sus requisitos exactos. También ofrecemos diferentes materiales para las plantillas, como acero inoxidable y
				níquel, según las necesidades de su proyecto.
			</p>

			<p class="text-gray-600 mb-8">
				Nuestro equipo trabaja estrechamente con usted para garantizar que la plantilla esté optimizada para su PCB, con
				una alineación adecuada y tamaños de aperturas. También podemos ofrecerle asesoramiento sobre el grosor de la
				plantilla y otras variables para garantizar los mejores resultados.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Aplicaciones</h2>
			<p class="text-gray-600 mb-4">
				Las plantillas cortadas con láser son ideales para una amplia gama de aplicaciones, incluyendo:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>Ensamblaje de PCB prototipo.</li>
				<li>Producción de PCB de bajo a mediano volumen.</li>
				<li>Ensamblajes SMD de alta precisión y paso fino.</li>
				<li>PCBs flexibles y diseños complejos que requieren aperturas personalizadas.</li>
			</ul>

			<p class="text-gray-600 mb-8">
				Cualquiera que sea la escala de su proyecto, nuestras plantillas láser ofrecen la precisión y fiabilidad que
				necesita para garantizar el éxito de su ensamblaje de PCB.
			</p>
		</div>
	</Layout>
{/if}
