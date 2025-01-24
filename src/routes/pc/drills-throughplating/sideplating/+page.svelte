<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'drillsThroughplating'}
		title="Sideplating"
		description="Learn about Sideplating in PCB manufacturing and how it ensures reliable electrical connections in vias and holes."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Sideplating</h1>

			<p class="text-gray-600 mb-6">
				Sideplating is a technique used in PCB manufacturing to ensure that the electrical connection between the inner
				and outer layers of the PCB is stable and reliable. It involves plating the sides of vias and holes, which not
				only improves the electrical connection but also enhances the overall strength and durability of the PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">What is Sideplating?</h2>
			<p class="text-gray-600 mb-4">
				Sideplating refers to the process of applying a thin layer of metal plating onto the sides of a via or hole.
				This additional plating creates a better electrical pathway and prevents any issues caused by gaps in the
				plating that could occur during the standard through-plating process. It helps to improve the reliability of the
				PCB, particularly in high-frequency or high-power applications.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Benefits of Sideplating</h2>
			<p class="text-gray-600 mb-4">Sideplating provides several important benefits to PCB designs:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Improved Conductivity:</strong> By plating the sides of vias and holes, sideplating ensures better electrical
					conductivity, especially in high-frequency circuits.
				</li>
				<li>
					<strong>Enhanced Mechanical Strength:</strong> It strengthens the via connection, which is crucial for maintaining
					the integrity of multi-layer PCBs.
				</li>
				<li>
					<strong>Improved Durability:</strong> Sideplating increases the durability of the PCB by providing additional copper,
					which helps to prevent delamination or other mechanical failures.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Sideplating</h2>
			<p class="text-gray-600 mb-4">Sideplating is especially beneficial in certain PCB applications:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>High-Frequency PCBs:</strong> In high-frequency designs, where signal integrity is crucial, sideplating
					ensures that there are no interruptions in the signal path.
				</li>
				<li>
					<strong>Power Electronics:</strong> Power PCBs that carry high current benefit from sideplating to provide a more
					robust connection.
				</li>
				<li>
					<strong>Multi-layer PCBs:</strong> For multi-layer PCBs, sideplating helps ensure a strong and reliable connection
					between the various layers of the board.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Sideplating vs Throughplating</h2>
			<p class="text-gray-600 mb-4">
				Sideplating and throughplating are both methods of creating electrical connections in PCBs, but they differ in
				the way they apply metal to vias and holes. Throughplating is a more traditional method, which plates the entire
				hole from top to bottom. While effective for most designs, sideplating adds an extra layer of metal to the sides
				of vias, enhancing the conductivity and strength of the electrical connection.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considerations for Sideplating</h2>
			<p class="text-gray-600 mb-4">
				Although sideplating is an excellent way to enhance PCB performance, it is important to consider a few factors
				when designing a PCB that requires this technique:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Cost:</strong> Sideplating can increase the overall cost of PCB manufacturing due to the additional processing
					steps required.
				</li>
				<li>
					<strong>Design Complexity:</strong> Sideplating requires precise control over the plating process, which may increase
					the complexity of the design and manufacturing stages.
				</li>
				<li>
					<strong>Thickness Control:</strong> It's crucial to maintain the correct thickness of the plating, as too much
					metal could create issues with the vias or holes.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Sideplating?</h2>
			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we use state-of-the-art manufacturing techniques to
				provide high-quality sideplating on all our PCBs. Our experienced team ensures that your design is produced with
				precision and care, delivering reliable and robust performance.
			</p>

			<p class="text-gray-600 mb-6">
				Contact us today to discuss your project needs and get an instant quote for your PCB design and sideplating
				requirements.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'drillsThroughplating'}
		title="侧镀层"
		description="了解PCB制造中的侧镀层技术，以及它如何确保孔和通孔中的电气连接可靠性。"
		button={{ title: '即时报价 & 在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">侧镀层</h1>

			<p class="text-gray-600 mb-6">
				侧镀层是一种用于PCB制造的技术，确保PCB内外层之间的电气连接稳定可靠。它涉及在通孔和孔的侧面镀上一层金属，这不仅改善了电气连接，还增强了PCB的整体强度和耐用性。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">什么是侧镀层？</h2>
			<p class="text-gray-600 mb-4">
				侧镀层指的是将一层薄薄的金属镀层施加在通孔或孔的侧面。这种额外的镀层创建了更好的电气通路，防止在常规的通孔镀层过程中可能发生的镀层间隙问题。它有助于提高PCB的可靠性，尤其是在高频或高功率应用中。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">侧镀层的优点</h2>
			<p class="text-gray-600 mb-4">侧镀层为PCB设计提供了几项重要的好处：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>提高导电性：</strong> 通过在通孔和孔的侧面进行镀层，侧镀层确保更好的电气导电性，特别是在高频电路中。
				</li>
				<li>
					<strong>增强机械强度：</strong> 它加强了通孔连接，对于保持多层PCB的完整性至关重要。
				</li>
				<li>
					<strong>提高耐用性：</strong> 侧镀层通过提供额外的铜材料，增加了PCB的耐用性，帮助防止分层或其他机械故障。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">侧镀层的应用</h2>
			<p class="text-gray-600 mb-4">侧镀层在某些PCB应用中尤其有益：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>高频PCB：</strong> 在高频设计中，信号完整性至关重要，侧镀层确保信号路径没有中断。
				</li>
				<li>
					<strong>功率电子：</strong> 承载大电流的功率PCB通过侧镀层提供更强大的连接。
				</li>
				<li>
					<strong>多层PCB：</strong> 对于多层PCB，侧镀层有助于确保各层之间的强大可靠连接。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">侧镀层与通孔镀层的区别</h2>
			<p class="text-gray-600 mb-4">
				侧镀层和通孔镀层都是在PCB中创建电气连接的方法，但它们在应用金属到通孔和孔的方式上有所不同。通孔镀层是一种更传统的方法，镀层从顶部到底部覆盖整个孔。虽然对大多数设计有效，但侧镀层在通孔的侧面增加了一层金属，增强了电气连接的导电性和强度。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">侧镀层的注意事项</h2>
			<p class="text-gray-600 mb-4">
				虽然侧镀层是一种增强PCB性能的绝佳方式，但在设计需要使用此技术的PCB时，仍然需要考虑一些因素：
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>成本：</strong> 由于需要额外的加工步骤，侧镀层可能会增加PCB制造的整体成本。
				</li>
				<li>
					<strong>设计复杂性：</strong> 侧镀层要求对镀层过程进行精确控制，这可能会增加设计和制造阶段的复杂性。
				</li>
				<li>
					<strong>厚度控制：</strong> 必须保持正确的镀层厚度，因为过多的金属可能会导致通孔或孔出现问题。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么选择MMWPCB进行侧镀层？</h2>
			<p class="text-gray-600 mb-4">
				在<span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们使用最先进的制造技术，为所有PCB提供高质量的侧镀层。我们的经验丰富的团队确保您的设计精确生产，提供可靠和强大的性能。
			</p>

			<p class="text-gray-600 mb-6">今天就联系我们，讨论您的项目需求，并获取您PCB设计和侧镀层要求的即时报价。</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'drillsThroughplating'}
		title="Plaquage latéral"
		description="Découvrez le plaquage latéral dans la fabrication de PCB et comment il assure des connexions électriques fiables dans les vias et les trous."
		button={{ title: 'Devis instantané & Commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Plaquage latéral</h1>

			<p class="text-gray-600 mb-6">
				Le plaquage latéral est une technique utilisée dans la fabrication de PCB pour garantir que la connexion
				électrique entre les couches internes et externes du PCB soit stable et fiable. Il consiste à plaquer les côtés
				des vias et des trous, ce qui améliore non seulement la connexion électrique mais renforce également la solidité
				et la durabilité globale du PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Qu'est-ce que le plaquage latéral ?</h2>
			<p class="text-gray-600 mb-4">
				Le plaquage latéral fait référence au processus d'application d'une fine couche de métal sur les côtés d'un via
				ou d'un trou. Ce plaquage supplémentaire crée une meilleure voie électrique et empêche les problèmes causés par
				des lacunes dans le plaquage qui peuvent se produire lors du processus de plaquage à travers les trous standard.
				Cela aide à améliorer la fiabilité du PCB, notamment dans les applications à haute fréquence ou haute puissance.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Avantages du plaquage latéral</h2>
			<p class="text-gray-600 mb-4">
				Le plaquage latéral offre plusieurs avantages importants pour les conceptions de PCB :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Conductivité améliorée :</strong> En plaquant les côtés des vias et des trous, le plaquage latéral assure
					une meilleure conductivité électrique, en particulier dans les circuits à haute fréquence.
				</li>
				<li>
					<strong>Renforcement de la résistance mécanique :</strong> Il renforce la connexion des vias, ce qui est crucial
					pour maintenir l'intégrité des PCBs multicouches.
				</li>
				<li>
					<strong>Durabilité améliorée :</strong> Le plaquage latéral augmente la durabilité du PCB en fournissant du cuivre
					supplémentaire, ce qui aide à prévenir la délamination ou d'autres défaillances mécaniques.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications du plaquage latéral</h2>
			<p class="text-gray-600 mb-4">
				Le plaquage latéral est particulièrement bénéfique dans certaines applications de PCB :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>PCBs à haute fréquence :</strong> Dans les conceptions à haute fréquence, où l'intégrité du signal est
					cruciale, le plaquage latéral garantit qu'il n'y a pas d'interruption dans le chemin du signal.
				</li>
				<li>
					<strong>Électronique de puissance :</strong> Les PCB de puissance qui transportent un courant élevé bénéficient
					du plaquage latéral pour fournir une connexion plus robuste.
				</li>
				<li>
					<strong>PCBs multicouches :</strong> Pour les PCBs multicouches, le plaquage latéral aide à garantir une connexion
					forte et fiable entre les différentes couches du PCB.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Plaquage latéral vs Plaquage à travers les trous</h2>
			<p class="text-gray-600 mb-4">
				Le plaquage latéral et le plaquage à travers les trous sont deux méthodes de création de connexions électriques
				dans les PCB, mais elles diffèrent par la manière dont elles appliquent le métal sur les vias et les trous. Le
				plaquage à travers les trous est une méthode plus traditionnelle qui plaqué l'ensemble du trou de haut en bas.
				Bien que efficace pour la plupart des conceptions, le plaquage latéral ajoute une couche supplémentaire de métal
				sur les côtés des vias, améliorant ainsi la conductivité et la résistance de la connexion électrique.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considérations pour le plaquage latéral</h2>
			<p class="text-gray-600 mb-4">
				Bien que le plaquage latéral soit un excellent moyen d'améliorer les performances des PCB, il est important de
				considérer quelques facteurs lors de la conception d'un PCB nécessitant cette technique :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Coût :</strong> Le plaquage latéral peut augmenter le coût global de la fabrication des PCB en raison des
					étapes supplémentaires de traitement nécessaires.
				</li>
				<li>
					<strong>Complexité de la conception :</strong> Le plaquage latéral nécessite un contrôle précis du processus de
					plaquage, ce qui peut augmenter la complexité des étapes de conception et de fabrication.
				</li>
				<li>
					<strong>Contrôle de l'épaisseur :</strong> Il est crucial de maintenir l'épaisseur correcte du plaquage, car trop
					de métal pourrait créer des problèmes avec les vias ou les trous.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi choisir MMWPCB pour le plaquage latéral ?</h2>
			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous utilisons des techniques de fabrication de
				pointe pour offrir un plaquage latéral de haute qualité sur tous nos PCB. Notre équipe expérimentée s'assure que
				votre conception est produite avec précision et soin, offrant des performances fiables et robustes.
			</p>

			<p class="text-gray-600 mb-6">
				Contactez-nous dès aujourd'hui pour discuter de vos besoins en projet et obtenir un devis instantané pour la
				conception de vos PCB et vos besoins en plaquage latéral.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'drillsThroughplating'}
		title="Plataje lateral"
		description="Aprenda sobre el plataje lateral en la fabricación de PCBs y cómo asegura conexiones eléctricas confiables en vias y agujeros."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Plataje lateral</h1>

			<p class="text-gray-600 mb-6">
				El plataje lateral es una técnica utilizada en la fabricación de PCBs para asegurar que la conexión eléctrica
				entre las capas internas y externas del PCB sea estable y confiable. Consiste en aplicar un plataje a los lados
				de las vias y los agujeros, lo que no solo mejora la conexión eléctrica, sino que también aumenta la resistencia
				y durabilidad general del PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Qué es el plataje lateral?</h2>
			<p class="text-gray-600 mb-4">
				El plataje lateral se refiere al proceso de aplicar una capa delgada de metal a los lados de una via o agujero.
				Este plataje adicional crea una mejor ruta eléctrica y previene cualquier problema causado por huecos en el
				plataje que podrían ocurrir durante el proceso estándar de plataje a través de los agujeros. Ayuda a mejorar la
				confiabilidad del PCB, especialmente en aplicaciones de alta frecuencia o alta potencia.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Beneficios del plataje lateral</h2>
			<p class="text-gray-600 mb-4">El plataje lateral ofrece varios beneficios importantes para los diseños de PCB:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Mejora de la conductividad:</strong> Al aplicar un plataje a los lados de las vias y agujeros, el plataje
					lateral asegura una mejor conductividad eléctrica, especialmente en circuitos de alta frecuencia.
				</li>
				<li>
					<strong>Aumento de la resistencia mecánica:</strong> Refuerza la conexión de las vias, lo cual es crucial para
					mantener la integridad de los PCBs multicapa.
				</li>
				<li>
					<strong>Mayor durabilidad:</strong> El plataje lateral incrementa la durabilidad del PCB al proporcionar cobre
					adicional, lo que ayuda a prevenir la delaminación u otros fallos mecánicos.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Aplicaciones del plataje lateral</h2>
			<p class="text-gray-600 mb-4">El plataje lateral es especialmente beneficioso en ciertas aplicaciones de PCB:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>PCBs de alta frecuencia:</strong> En los diseños de alta frecuencia, donde la integridad de la señal es
					crucial, el plataje lateral garantiza que no haya interrupciones en el camino de la señal.
				</li>
				<li>
					<strong>Electrónica de potencia:</strong> Los PCBs de potencia que transportan altas corrientes se benefician del
					plataje lateral para proporcionar una conexión más robusta.
				</li>
				<li>
					<strong>PCBs multicapa:</strong> Para los PCBs multicapa, el plataje lateral ayuda a asegurar una conexión fuerte
					y confiable entre las distintas capas de la placa.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Plataje lateral vs Plataje a través de los agujeros</h2>
			<p class="text-gray-600 mb-4">
				El plataje lateral y el plataje a través de los agujeros son dos métodos para crear conexiones eléctricas en los
				PCBs, pero difieren en la forma en que aplican el metal a las vias y agujeros. El plataje a través de los
				agujeros es un método más tradicional, que cubre todo el agujero de arriba a abajo. Aunque es efectivo para la
				mayoría de los diseños, el plataje lateral agrega una capa adicional de metal a los lados de las vias, mejorando
				la conductividad y resistencia de la conexión eléctrica.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Consideraciones para el plataje lateral</h2>
			<p class="text-gray-600 mb-4">
				Aunque el plataje lateral es una excelente forma de mejorar el rendimiento del PCB, es importante considerar
				algunos factores al diseñar un PCB que requiera esta técnica:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Costo:</strong> El plataje lateral puede aumentar el costo total de la fabricación del PCB debido a los
					pasos adicionales de procesamiento necesarios.
				</li>
				<li>
					<strong>Complejidad del diseño:</strong> El plataje lateral requiere un control preciso del proceso de plataje,
					lo que puede aumentar la complejidad de las etapas de diseño y fabricación.
				</li>
				<li>
					<strong>Control del grosor:</strong> Es crucial mantener el grosor correcto del plataje, ya que un exceso de metal
					podría crear problemas con las vias o los agujeros.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por qué elegir MMWPCB para el plataje lateral?</h2>
			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, utilizamos técnicas de fabricación de última
				generación para proporcionar plataje lateral de alta calidad en todos nuestros PCBs. Nuestro equipo
				experimentado asegura que su diseño se produzca con precisión y cuidado, ofreciendo un rendimiento confiable y
				robusto.
			</p>

			<p class="text-gray-600 mb-6">
				Contáctenos hoy para discutir sus necesidades de proyecto y obtener una cotización instantánea para el diseño de
				su PCB y sus requisitos de plataje lateral.
			</p>
		</div>
	</Layout>
{/if}
