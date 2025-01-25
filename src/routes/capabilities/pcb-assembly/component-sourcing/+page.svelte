<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'pcbAssembly'}
		title="Component Sourcing"
		description="Explore how we manage component sourcing for reliable and high-quality PCB assemblies."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Component Sourcing</h1>

			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we understand that high-quality components are the
				backbone of a reliable PCB assembly. That’s why we focus on sourcing the best components, ensuring that your
				project is built to last. Our expert sourcing team ensures that every part meets the highest standards and
				arrives on time, keeping your production process smooth and efficient.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Global Supplier Network</h2>
			<p class="text-gray-600 mb-4">
				Our global network of trusted suppliers allows us to source components from top-tier manufacturers across the
				world. This broad sourcing capability ensures that you get access to the best quality parts at competitive
				prices, whether you're ordering standard components or hard-to-find specialty parts.
			</p>

			<p class="text-gray-600 mb-4">
				We carefully vet our suppliers to ensure that all components are genuine, certified, and meet industry
				standards. With reliable sourcing, we reduce the risks of counterfeit parts, ensuring the integrity of your
				final product.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Component Procurement Process</h2>
			<p class="text-gray-600 mb-4">
				Our component procurement process is designed for efficiency and accuracy. From order placement to delivery, we
				handle the logistics so you can focus on your design. Here’s how it works:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Order Review:</strong> We work closely with you to understand your component requirements and ensure all
					parts are specified correctly.
				</li>
				<li>
					<strong>Supplier Selection:</strong> Based on your needs, we select the best suppliers from our network, ensuring
					competitive pricing and on-time delivery.
				</li>
				<li>
					<strong>Quality Control:</strong> Every component undergoes rigorous quality control to meet your specifications
					and industry standards.
				</li>
				<li>
					<strong>Logistics Management:</strong> We manage the logistics and ensure that components arrive at your facility
					without delay.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Hard-to-Find Components</h2>
			<p class="text-gray-600 mb-4">
				For designs that require rare or discontinued components, our sourcing team excels at finding hard-to-get parts.
				Using our extensive network and industry knowledge, we can source even the most elusive components, ensuring
				that your design doesn’t hit a roadblock due to component unavailability.
			</p>

			<p class="text-gray-600 mb-4">
				We also offer lifecycle management services, helping you find replacements for components that may be
				approaching obsolescence, ensuring your designs remain up-to-date and manufacturable.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Inventory Management</h2>
			<p class="text-gray-600 mb-4">
				To help streamline your production process, we offer inventory management services that ensure components are
				available when needed. We keep track of your components and provide forecasts to avoid shortages or
				overstocking, optimizing your supply chain.
			</p>

			<p class="text-gray-600 mb-4">
				This service can significantly reduce lead times and help mitigate risks associated with supply chain
				disruptions, ensuring your project remains on schedule.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Cost Efficiency</h2>
			<p class="text-gray-600 mb-4">
				Our extensive network allows us to offer cost-effective sourcing options, ensuring that your project stays
				within budget. By negotiating directly with suppliers and consolidating orders, we can often pass on significant
				savings to you, without compromising on component quality.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Component Sourcing?</h2>
			<p class="text-gray-600 mb-4">
				Choosing <span class="text-blue-600 font-semibold">MMWPCB</span> for your component sourcing ensures a seamless and
				reliable supply chain. With our global network, expert procurement team, and commitment to quality, we provide a
				sourcing solution that saves time, reduces costs, and ensures your assemblies are made with the best components available.
			</p>
			<p class="text-gray-600 mb-4">
				We handle the complexities of sourcing, so you don’t have to. Whether you need standard components, hard-to-find
				parts, or custom specifications, we’ve got you covered every step of the way.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'pcbAssembly'}
		title="组件采购"
		description="探索我们如何管理组件采购，以实现可靠且高质量的PCB组装。"
		button={{ title: '即时报价与在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">组件采购</h1>

			<p class="text-gray-600 mb-4">
				在 <span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们深知高质量组件是可靠PCB组装的基石。因此，我们专注于采购最佳组件，确保您的项目经久耐用。我们的专业采购团队确保每个零件都符合最高标准并准时到达，让您的生产过程顺畅高效。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">全球供应商网络</h2>
			<p class="text-gray-600 mb-4">
				我们可信赖的全球供应商网络使我们能够从世界各地的一流制造商处采购组件。这种广泛的采购能力确保您能以具有竞争力的价格获得最优质的零件，无论是标准组件还是难以找到的特殊零件。
			</p>

			<p class="text-gray-600 mb-4">
				我们严格筛选供应商，确保所有组件都是正品、经过认证并符合行业标准。通过可靠的采购，我们降低了假冒零件的风险，确保您的最终产品的完整性。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">组件采购流程</h2>
			<p class="text-gray-600 mb-4">
				我们的组件采购流程旨在提高效率和准确性。从下单到交付，我们处理所有物流，让您专注于设计。流程如下：
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>订单审核：</strong> 我们与您密切合作，了解您的组件需求，确保所有零件正确指定。
				</li>
				<li>
					<strong>供应商选择：</strong> 根据您的需求，我们从网络中选择最佳供应商，确保具有竞争力的价格和准时交货。
				</li>
				<li>
					<strong>质量控制：</strong> 每个组件都经过严格的质量控制，以符合您的规格和行业标准。
				</li>
				<li>
					<strong>物流管理：</strong> 我们管理物流，确保组件准时到达您的设施。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">难以找到的组件</h2>
			<p class="text-gray-600 mb-4">
				对于需要稀有或停产组件的设计，我们的采购团队擅长寻找难以获取的零件。凭借广泛的网络和行业知识，我们能够找到最难觅的组件，确保您的设计不会因组件缺失而受阻。
			</p>

			<p class="text-gray-600 mb-4">
				我们还提供生命周期管理服务，帮助您为可能接近淘汰的组件找到替代品，确保您的设计始终保持最新并可生产。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">库存管理</h2>
			<p class="text-gray-600 mb-4">
				为了帮助简化您的生产流程，我们提供库存管理服务，确保组件在需要时可用。我们跟踪您的组件并提供预测，避免短缺或过量库存，优化您的供应链。
			</p>

			<p class="text-gray-600 mb-4">此服务可以显著缩短交货时间，并帮助缓解供应链中断的风险，确保您的项目按计划进行。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">成本效益</h2>
			<p class="text-gray-600 mb-4">
				我们的广泛网络使我们能够提供具有成本效益的采购选项，确保您的项目在预算范围内。通过直接与供应商谈判并整合订单，我们通常可以为您节省大量成本，同时不影响组件质量。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为何选择MMWPCB进行组件采购？</h2>
			<p class="text-gray-600 mb-4">
				选择 <span class="text-blue-600 font-semibold">MMWPCB</span> 进行组件采购，可确保供应链无缝可靠。凭借我们的全球网络、专业采购团队和对质量的承诺，我们提供节省时间、降低成本并确保您的组装使用最佳组件的采购解决方案。
			</p>
			<p class="text-gray-600 mb-4">
				我们处理采购的复杂性，让您无后顾之忧。无论您需要标准组件、难以找到的零件，还是定制规格，我们都将为您提供全面支持。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'pcbAssembly'}
		title="Approvisionnement en Composants"
		description="Découvrez comment nous gérons l'approvisionnement en composants pour des assemblages PCB fiables et de haute qualité."
		button={{ title: 'Devis Instantané et Commande en Ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Approvisionnement en Composants</h1>

			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous comprenons que des composants de haute
				qualité sont la clé d'un assemblage PCB fiable. C'est pourquoi nous nous concentrons sur l'approvisionnement des
				meilleurs composants, garantissant que votre projet est conçu pour durer. Notre équipe d'experts en
				approvisionnement veille à ce que chaque pièce réponde aux normes les plus élevées et soit livrée à temps,
				assurant un processus de production fluide et efficace.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Réseau Mondial de Fournisseurs</h2>
			<p class="text-gray-600 mb-4">
				Notre réseau mondial de fournisseurs de confiance nous permet de nous approvisionner auprès des meilleurs
				fabricants du monde entier. Cette capacité d'approvisionnement étendue garantit que vous bénéficiez des
				meilleures pièces de qualité à des prix compétitifs, que ce soit pour des composants standards ou des pièces
				spéciales difficiles à trouver.
			</p>

			<p class="text-gray-600 mb-4">
				Nous sélectionnons soigneusement nos fournisseurs pour nous assurer que tous les composants sont authentiques,
				certifiés et conformes aux normes de l'industrie. Grâce à un approvisionnement fiable, nous réduisons les
				risques liés aux pièces contrefaites, garantissant l'intégrité de votre produit final.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Processus d'Approvisionnement</h2>
			<p class="text-gray-600 mb-4">
				Notre processus d'approvisionnement en composants est conçu pour maximiser l'efficacité et la précision. De la
				commande à la livraison, nous gérons la logistique pour que vous puissiez vous concentrer sur votre conception.
				Voici comment cela fonctionne :
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Revue de Commande :</strong> Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins
					en composants et nous assurer que toutes les pièces sont correctement spécifiées.
				</li>
				<li>
					<strong>Sélection des Fournisseurs :</strong> En fonction de vos besoins, nous sélectionnons les meilleurs fournisseurs
					de notre réseau pour garantir des prix compétitifs et une livraison dans les délais.
				</li>
				<li>
					<strong>Contrôle Qualité :</strong> Chaque composant subit un contrôle qualité rigoureux pour répondre à vos spécifications
					et aux normes de l'industrie.
				</li>
				<li>
					<strong>Gestion Logistique :</strong> Nous gérons la logistique pour garantir que les composants arrivent sans
					retard dans vos installations.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Composants Difficiles à Trouver</h2>
			<p class="text-gray-600 mb-4">
				Pour les conceptions nécessitant des composants rares ou obsolètes, notre équipe d'approvisionnement excelle
				dans la recherche de pièces difficiles à obtenir. Grâce à notre vaste réseau et à notre expertise, nous pouvons
				trouver les composants les plus rares, garantissant que votre projet ne soit pas bloqué par des problèmes
				d'approvisionnement.
			</p>

			<p class="text-gray-600 mb-4">
				Nous offrons également des services de gestion du cycle de vie, vous aidant à trouver des alternatives pour les
				composants proches de l'obsolescence, afin de garantir que vos conceptions restent à jour et réalisables.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Gestion des Stocks</h2>
			<p class="text-gray-600 mb-4">
				Pour rationaliser votre processus de production, nous proposons des services de gestion des stocks qui
				garantissent la disponibilité des composants au moment où vous en avez besoin. Nous surveillons vos composants
				et fournissons des prévisions pour éviter les pénuries ou les surstocks, optimisant ainsi votre chaîne
				d'approvisionnement.
			</p>

			<p class="text-gray-600 mb-4">
				Ce service peut réduire considérablement les délais et aider à atténuer les risques liés aux perturbations de la
				chaîne d'approvisionnement, garantissant que votre projet respecte le calendrier.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Efficacité des Coûts</h2>
			<p class="text-gray-600 mb-4">
				Notre vaste réseau nous permet de proposer des options d'approvisionnement rentables, assurant que votre projet
				respecte votre budget. En négociant directement avec les fournisseurs et en regroupant les commandes, nous
				pouvons souvent vous faire bénéficier d'économies importantes, sans compromettre la qualité des composants.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi Choisir MMWPCB pour l'Approvisionnement ?</h2>
			<p class="text-gray-600 mb-4">
				Choisir <span class="text-blue-600 font-semibold">MMWPCB</span> pour votre approvisionnement en composants, c'est
				assurer une chaîne d'approvisionnement fluide et fiable. Grâce à notre réseau mondial, notre équipe experte en approvisionnement
				et notre engagement envers la qualité, nous offrons une solution qui permet de gagner du temps, réduire les coûts
				et garantir que vos assemblages sont réalisés avec les meilleurs composants disponibles.
			</p>
			<p class="text-gray-600 mb-4">
				Nous prenons en charge la complexité de l'approvisionnement pour que vous n'ayez pas à vous en soucier. Que vous
				ayez besoin de composants standards, de pièces difficiles à trouver ou de spécifications sur mesure, nous sommes
				là pour vous accompagner à chaque étape.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'pcbAssembly'}
		title="Abastecimiento de Componentes"
		description="Descubra cómo gestionamos el abastecimiento de componentes para ensamblajes de PCB fiables y de alta calidad."
		button={{ title: 'Cotización Instantánea y Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Abastecimiento de Componentes</h1>

			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, entendemos que los componentes de alta calidad son
				la base de un ensamblaje de PCB fiable. Por eso nos enfocamos en adquirir los mejores componentes, garantizando
				que su proyecto esté diseñado para durar. Nuestro equipo de expertos en abastecimiento asegura que cada pieza
				cumpla con los estándares más altos y llegue a tiempo, manteniendo su proceso de producción fluido y eficiente.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Red Global de Proveedores</h2>
			<p class="text-gray-600 mb-4">
				Nuestra red global de proveedores confiables nos permite obtener componentes de fabricantes de primer nivel en
				todo el mundo. Esta amplia capacidad de abastecimiento garantiza que tenga acceso a las mejores piezas de
				calidad a precios competitivos, ya sea que necesite componentes estándar o piezas especializadas difíciles de
				encontrar.
			</p>

			<p class="text-gray-600 mb-4">
				Seleccionamos cuidadosamente a nuestros proveedores para garantizar que todos los componentes sean auténticos,
				certificados y cumplan con los estándares de la industria. Con un abastecimiento confiable, reducimos los
				riesgos de componentes falsificados, asegurando la integridad de su producto final.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Proceso de Abastecimiento</h2>
			<p class="text-gray-600 mb-4">
				Nuestro proceso de abastecimiento de componentes está diseñado para ser eficiente y preciso. Desde la colocación
				del pedido hasta la entrega, gestionamos la logística para que pueda concentrarse en su diseño. Así es como
				funciona:
			</p>

			<ul class="list-disc list-inside text-gray-600 mb-8">
				<li>
					<strong>Revisión del Pedido:</strong> Trabajamos estrechamente con usted para comprender sus requisitos de componentes
					y asegurarnos de que todas las piezas estén correctamente especificadas.
				</li>
				<li>
					<strong>Selección de Proveedores:</strong> Según sus necesidades, seleccionamos a los mejores proveedores de nuestra
					red, asegurando precios competitivos y entregas puntuales.
				</li>
				<li>
					<strong>Control de Calidad:</strong> Cada componente pasa por un riguroso control de calidad para cumplir con sus
					especificaciones y los estándares de la industria.
				</li>
				<li>
					<strong>Gestión Logística:</strong> Nos encargamos de la logística para garantizar que los componentes lleguen
					sin retrasos a sus instalaciones.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Componentes Difíciles de Conseguir</h2>
			<p class="text-gray-600 mb-4">
				Para diseños que requieren componentes raros o descontinuados, nuestro equipo de abastecimiento sobresale en
				encontrar piezas difíciles de conseguir. Gracias a nuestra extensa red y experiencia en la industria, podemos
				obtener los componentes más raros, asegurando que su proyecto no se detenga debido a la falta de disponibilidad.
			</p>

			<p class="text-gray-600 mb-4">
				También ofrecemos servicios de gestión del ciclo de vida, ayudándole a encontrar alternativas para componentes
				que pueden estar cerca de la obsolescencia, asegurando que sus diseños sigan siendo actuales y fabricables.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Gestión de Inventario</h2>
			<p class="text-gray-600 mb-4">
				Para optimizar su proceso de producción, ofrecemos servicios de gestión de inventario que aseguran que los
				componentes estén disponibles cuando los necesite. Realizamos un seguimiento de sus componentes y proporcionamos
				pronósticos para evitar escasez o sobreabastecimiento, optimizando su cadena de suministro.
			</p>

			<p class="text-gray-600 mb-4">
				Este servicio puede reducir significativamente los tiempos de espera y ayudar a mitigar riesgos asociados con
				interrupciones en la cadena de suministro, asegurando que su proyecto se mantenga dentro del cronograma.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Eficiencia de Costos</h2>
			<p class="text-gray-600 mb-4">
				Nuestra amplia red nos permite ofrecer opciones de abastecimiento rentables, asegurando que su proyecto se
				mantenga dentro del presupuesto. Al negociar directamente con los proveedores y consolidar pedidos, a menudo
				podemos transferirle ahorros significativos sin comprometer la calidad de los componentes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por Qué Elegir MMWPCB para el Abastecimiento?</h2>
			<p class="text-gray-600 mb-4">
				Elegir <span class="text-blue-600 font-semibold">MMWPCB</span> para su abastecimiento de componentes asegura una
				cadena de suministro fluida y confiable. Con nuestra red global, nuestro equipo experto en adquisiciones y nuestro
				compromiso con la calidad, ofrecemos una solución de abastecimiento que ahorra tiempo, reduce costos y garantiza
				que sus ensamblajes se realicen con los mejores componentes disponibles.
			</p>
			<p class="text-gray-600 mb-4">
				Nos ocupamos de las complejidades del abastecimiento para que usted no tenga que hacerlo. Ya sea que necesite
				componentes estándar, piezas difíciles de encontrar o especificaciones personalizadas, estamos con usted en cada
				paso del camino.
			</p>
		</div>
	</Layout>
{/if}
