<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'drillsThroughplating'}
		title="Plated Half-holes"
		description="Learn about Plated Half-holes in PCB manufacturing, their application, and how they improve your designs."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Plated Half-holes</h1>

			<p class="text-gray-600 mb-6">
				Plated Half-holes, also known as partial vias or microvias, are a specialized technique in PCB manufacturing
				used to create more compact designs. These holes are partially plated, providing an electrical connection to
				specific layers of the board while leaving the other layers unplated. This process is typically used in
				high-density designs to improve performance and reduce size.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">What are Plated Half-holes?</h2>
			<p class="text-gray-600 mb-4">
				Plated Half-holes are vias that are plated on one side of the PCB, leaving the opposite side unplated. This
				allows for a more efficient use of space, as well as the ability to connect specific layers without interfering
				with others. The process involves selective plating where the hole is plated in the desired areas while leaving
				the rest of the hole open for other components or routing.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Advantages of Plated Half-holes</h2>
			<p class="text-gray-600 mb-4">
				Plated Half-holes offer several significant benefits to PCB designs, particularly in high-density and
				multi-layer applications:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Space Efficiency:</strong> By allowing for selective plating, Plated Half-holes help reduce the overall
					space required for connections in dense designs.
				</li>
				<li>
					<strong>Improved Signal Integrity:</strong> The reduced size of the via minimizes the signal path, which can improve
					the integrity of high-speed signals.
				</li>
				<li>
					<strong>Cost-Effective:</strong> They can offer cost savings in designs that require fewer vias and more efficient
					use of board space.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Plated Half-holes</h2>
			<p class="text-gray-600 mb-4">
				Plated Half-holes are typically used in applications where PCB real estate is limited, or where high-speed,
				high-density designs are required. Common applications include:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>High-Density Interconnect (HDI) Boards:</strong> In HDI designs, Plated Half-holes are used to connect
					specific layers without using larger, full vias.
				</li>
				<li>
					<strong>Smartphones and Wearable Devices:</strong> Plated Half-holes are commonly found in compact consumer electronics
					to save space while maintaining functionality.
				</li>
				<li>
					<strong>Advanced Electronics:</strong> Complex systems that require smaller, more efficient boards, such as automotive
					electronics, industrial controls, and IoT devices.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Plated Half-holes vs Regular Vias</h2>
			<p class="text-gray-600 mb-4">
				While both Plated Half-holes and regular vias are used to create electrical connections between PCB layers,
				there are some distinct differences:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Size:</strong> Plated Half-holes are much smaller than regular vias, making them ideal for high-density
					designs.
				</li>
				<li>
					<strong>Plating:</strong> Regular vias are plated through their entire length, while Plated Half-holes are only
					plated on one side.
				</li>
				<li>
					<strong>Cost:</strong> Plated Half-holes can sometimes be more cost-effective in specific designs, depending on
					the complexity of the board.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Design Considerations</h2>
			<p class="text-gray-600 mb-4">
				When designing a PCB with Plated Half-holes, it’s important to consider the following:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Layer Count:</strong> Plated Half-holes are ideal for multi-layer boards but may not be suitable for simple
					two-layer designs.
				</li>
				<li>
					<strong>Board Thickness:</strong> Ensure that the board thickness is appropriate to accommodate the specific requirements
					for Plated Half-holes.
				</li>
				<li>
					<strong>Manufacturing Process:</strong> Not all manufacturers support Plated Half-holes, so it’s important to verify
					that your PCB manufacturer can accommodate this technique.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why Choose MMWPCB for Plated Half-holes?</h2>
			<p class="text-gray-600 mb-4">
				At <span class="text-blue-600 font-semibold">MMWPCB</span>, we specialize in advanced PCB technologies,
				including Plated Half-holes. Our precise manufacturing process ensures high-quality, reliable PCBs with improved
				performance for even the most challenging designs. Whether you are developing high-speed, high-density boards or
				need to optimize space, we provide solutions tailored to your specific needs.
			</p>

			<p class="text-gray-600 mb-6">
				Reach out to us today for expert advice and an instant quote for your PCB design that includes Plated
				Half-holes!
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'drillsThroughplating'}
		title="镀半孔"
		description="了解PCB制造中的镀半孔、它们的应用以及它们如何提升您的设计。"
		button={{ title: '即时报价 & 在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">镀半孔</h1>

			<p class="text-gray-600 mb-6">
				镀半孔，也称为部分通孔或微通孔，是一种在PCB制造中使用的专业技术，用于创建更紧凑的设计。这些孔只在部分区域镀层，为板子的特定层提供电连接，而其他层则保持未镀层。这个过程通常用于高密度设计，以提升性能并减少尺寸。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">什么是镀半孔？</h2>
			<p class="text-gray-600 mb-4">
				镀半孔是只在PCB的一侧镀层的通孔，另一侧保持未镀层。这允许更有效地使用空间，并能够连接特定的层，而不干扰其他层。该过程涉及选择性镀层，在需要的区域对孔进行镀层，而让孔的其余部分保持开放，以便用于其他元件或布线。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">镀半孔的优势</h2>
			<p class="text-gray-600 mb-4">镀半孔为PCB设计提供了几个显著的优势，特别是在高密度和多层应用中：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>空间效率：</strong>通过允许选择性镀层，镀半孔有助于减少高密度设计中所需的连接空间。
				</li>
				<li>
					<strong>改善信号完整性：</strong>通孔的尺寸减少了信号路径，从而可以提高高速信号的完整性。
				</li>
				<li>
					<strong>成本效益：</strong>在需要更少通孔并更高效利用板面空间的设计中，镀半孔可以节省成本。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">镀半孔的应用</h2>
			<p class="text-gray-600 mb-4">镀半孔通常用于PCB空间有限或需要高速、高密度设计的应用。常见的应用包括：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>高密度互连（HDI）板：</strong>在HDI设计中，镀半孔用于连接特定的层，而不使用更大、更完整的通孔。
				</li>
				<li>
					<strong>智能手机和可穿戴设备：</strong>镀半孔通常出现在紧凑型消费电子产品中，节省空间同时保持功能性。
				</li>
				<li>
					<strong>先进电子设备：</strong>需要更小、更高效的电路板的复杂系统，如汽车电子、工业控制和物联网设备。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">镀半孔与常规通孔的对比</h2>
			<p class="text-gray-600 mb-4">虽然镀半孔和常规通孔都用于在PCB层之间创建电连接，但它们之间有一些显著的区别：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>尺寸：</strong>镀半孔比常规通孔小得多，使其非常适合高密度设计。
				</li>
				<li>
					<strong>镀层：</strong>常规通孔的镀层贯穿整个长度，而镀半孔只在一侧镀层。
				</li>
				<li>
					<strong>成本：</strong>在特定设计中，镀半孔有时比常规通孔更具成本效益，具体取决于电路板的复杂度。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">设计考虑因素</h2>
			<p class="text-gray-600 mb-4">在设计包含镀半孔的PCB时，需要考虑以下因素：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>层数：</strong>镀半孔非常适合多层电路板，但可能不适用于简单的两层设计。
				</li>
				<li>
					<strong>电路板厚度：</strong>确保电路板的厚度适合镀半孔的特定要求。
				</li>
				<li>
					<strong>制造工艺：</strong>并非所有制造商都支持镀半孔，因此需要确认您的PCB制造商是否能够支持这一技术。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么选择MMWPCB的镀半孔技术？</h2>
			<p class="text-gray-600 mb-4">
				在<span class="text-blue-600 font-semibold">MMWPCB</span
				>，我们专注于先进的PCB技术，包括镀半孔。我们的精确制造过程确保了高质量、可靠的PCB，即使是在最具挑战性的设计中，也能提高性能。无论您是开发高速高密度电路板，还是需要优化空间，我们都提供量身定制的解决方案。
			</p>

			<p class="text-gray-600 mb-6">今天就联系我们，获取专家建议和关于包含镀半孔的PCB设计的即时报价！</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'drillsThroughplating'}
		title="Trous semi-platés"
		description="Découvrez les trous semi-platés dans la fabrication de PCB, leur application et comment ils améliorent vos conceptions."
		button={{ title: 'Devis instantané & Commandez en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Trous Semi-Platés</h1>

			<p class="text-gray-600 mb-6">
				Les trous semi-platés, également appelés vias partiels ou microvias, sont une technique spécialisée dans la
				fabrication de PCB utilisée pour créer des conceptions plus compactes. Ces trous sont partiellement plaqués,
				offrant une connexion électrique à des couches spécifiques de la carte tout en laissant les autres couches non
				plaquées. Ce processus est généralement utilisé dans les conceptions à haute densité pour améliorer les
				performances et réduire la taille.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Qu'est-ce que les Trous Semi-Platés ?</h2>
			<p class="text-gray-600 mb-4">
				Les trous semi-platés sont des vias plaqués sur un côté du PCB, laissant l'autre côté non plaqué. Cela permet
				une utilisation plus efficace de l'espace, ainsi que la possibilité de connecter des couches spécifiques sans
				interférer avec les autres. Le processus implique un plaquage sélectif où le trou est plaqué dans les zones
				souhaitées tout en laissant le reste du trou ouvert pour d'autres composants ou routage.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Avantages des Trous Semi-Platés</h2>
			<p class="text-gray-600 mb-4">
				Les trous semi-platés offrent plusieurs avantages significatifs pour les conceptions de PCB, en particulier dans
				les applications à haute densité et multicouches :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Efficacité de l'Espace :</strong> En permettant un plaquage sélectif, les trous semi-platés aident à réduire
					l'espace global nécessaire pour les connexions dans les conceptions denses.
				</li>
				<li>
					<strong>Intégrité du Signal Améliorée :</strong> La taille réduite du via minimise le chemin du signal, ce qui
					peut améliorer l'intégrité des signaux haute vitesse.
				</li>
				<li>
					<strong>Rentable :</strong> Ils peuvent offrir des économies de coûts dans les conceptions nécessitant moins de
					vias et une utilisation plus efficace de l'espace sur la carte.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications des Trous Semi-Platés</h2>
			<p class="text-gray-600 mb-4">
				Les trous semi-platés sont généralement utilisés dans des applications où l'espace du PCB est limité ou lorsque
				des conceptions haute vitesse, à haute densité sont nécessaires. Les applications courantes incluent :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Cartes HDI (High-Density Interconnect) :</strong> Dans les conceptions HDI, les trous semi-platés sont
					utilisés pour connecter des couches spécifiques sans utiliser de vias plus grands et complets.
				</li>
				<li>
					<strong>Smartphones et Appareils Connectés :</strong> Les trous semi-platés sont couramment utilisés dans les appareils
					électroniques compacts pour économiser de l'espace tout en maintenant la fonctionnalité.
				</li>
				<li>
					<strong>Électronique Avancée :</strong> Des systèmes complexes nécessitant des cartes plus petites et plus efficaces,
					tels que l'électronique automobile, les contrôles industriels et les appareils IoT.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Trous Semi-Platés vs Vias Traditionnels</h2>
			<p class="text-gray-600 mb-4">
				Alors que les trous semi-platés et les vias traditionnels sont utilisés pour créer des connexions électriques
				entre les couches du PCB, il existe certaines différences distinctes :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Taille :</strong> Les trous semi-platés sont beaucoup plus petits que les vias traditionnels, ce qui les
					rend idéaux pour les conceptions haute densité.
				</li>
				<li>
					<strong>Plantage :</strong> Les vias traditionnels sont plaqués sur toute leur longueur, tandis que les trous semi-platés
					sont plaqués uniquement d'un côté.
				</li>
				<li>
					<strong>Coût :</strong> Les trous semi-platés peuvent parfois être plus rentables dans des conceptions spécifiques,
					en fonction de la complexité de la carte.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considérations de Conception</h2>
			<p class="text-gray-600 mb-4">
				Lors de la conception d'un PCB avec des trous semi-platés, il est important de prendre en compte les éléments
				suivants :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Nombre de Couches :</strong> Les trous semi-platés sont idéaux pour les cartes multicouches, mais peuvent
					ne pas convenir pour des conceptions simples à deux couches.
				</li>
				<li>
					<strong>Épaisseur de la Carte :</strong> Assurez-vous que l'épaisseur de la carte est appropriée pour répondre
					aux exigences spécifiques des trous semi-platés.
				</li>
				<li>
					<strong>Processus de Fabrication :</strong> Tous les fabricants ne prennent pas en charge les trous semi-platés,
					il est donc important de vérifier que votre fabricant de PCB peut accepter cette technique.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi Choisir MMWPCB pour les Trous Semi-Platés ?</h2>
			<p class="text-gray-600 mb-4">
				Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous nous spécialisons dans les technologies
				avancées de PCB, y compris les trous semi-platés. Notre processus de fabrication précis garantit des PCB de
				haute qualité et fiables, avec des performances améliorées même pour les conceptions les plus complexes. Que
				vous développiez des cartes haute vitesse, haute densité ou que vous ayez besoin d'optimiser l'espace, nous
				proposons des solutions adaptées à vos besoins spécifiques.
			</p>

			<p class="text-gray-600 mb-6">
				Contactez-nous dès aujourd'hui pour des conseils d'experts et un devis instantané pour votre conception de PCB
				incluant des trous semi-platés !
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'drillsThroughplating'}
		title="Agujeros Semi-Dorados"
		description="Descubre los agujeros semi-dorados en la fabricación de PCB, su aplicación y cómo mejoran tu diseño."
		button={{ title: 'Cotización Instantánea & Pedido en Línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Agujeros Semi-Dorados</h1>

			<p class="text-gray-600 mb-6">
				Los agujeros semi-dorados, también conocidos como vias parciales o microvias, son una técnica especializada
				utilizada en la fabricación de PCB para crear diseños más compactos. Estos agujeros solo se doran parcialmente,
				proporcionando una conexión eléctrica a capas específicas de la placa mientras que otras capas permanecen sin
				dorar. Este proceso se utiliza comúnmente en diseños de alta densidad para mejorar el rendimiento y reducir el
				tamaño.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Qué son los Agujeros Semi-Dorados?</h2>
			<p class="text-gray-600 mb-4">
				Los agujeros semi-dorados son vias doradas en un lado de la PCB, mientras que el otro lado permanece sin dorar.
				Esto permite un uso más eficiente del espacio, así como la capacidad de conectar capas específicas sin
				interferir con otras capas. El proceso implica un dorado selectivo en el que solo se doran las áreas necesarias
				y el resto del agujero permanece abierto para otros componentes o enrutamiento.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Ventajas de los Agujeros Semi-Dorados</h2>
			<p class="text-gray-600 mb-4">
				Los agujeros semi-dorados ofrecen varias ventajas significativas para los diseños de PCB, especialmente en
				aplicaciones de alta densidad y de múltiples capas:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Eficiencia del Espacio:</strong> Al permitir el dorado selectivo, los agujeros semi-dorados ayudan a reducir
					el espacio necesario para las conexiones en diseños de alta densidad.
				</li>
				<li>
					<strong>Mejora de la Integridad de la Señal:</strong> El tamaño reducido del via minimiza el camino de la señal,
					lo que puede mejorar la integridad de las señales de alta velocidad.
				</li>
				<li>
					<strong>Ahorro de Costos:</strong> Pueden ser rentables en diseños que requieren menos vias y un uso más eficiente
					del espacio en la placa.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Aplicaciones de los Agujeros Semi-Dorados</h2>
			<p class="text-gray-600 mb-4">
				Los agujeros semi-dorados generalmente se utilizan en aplicaciones donde el espacio en la PCB es limitado o
				donde se requieren diseños de alta velocidad y alta densidad. Las aplicaciones comunes incluyen:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Placas HDI (Interconexión de Alta Densidad):</strong> En los diseños HDI, los agujeros semi-dorados se
					utilizan para conectar capas específicas sin utilizar vias más grandes y completas.
				</li>
				<li>
					<strong>Teléfonos Inteligentes y Dispositivos Portátiles:</strong> Los agujeros semi-dorados se utilizan comúnmente
					en dispositivos electrónicos compactos para ahorrar espacio mientras se mantiene la funcionalidad.
				</li>
				<li>
					<strong>Electrónica Avanzada:</strong> Sistemas complejos que requieren placas más pequeñas y eficientes, como
					la electrónica para automóviles, control industrial y dispositivos IoT.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Agujeros Semi-Dorados vs Vias Tradicionales</h2>
			<p class="text-gray-600 mb-4">
				Tanto los agujeros semi-dorados como las vias tradicionales se utilizan para crear conexiones eléctricas entre
				las capas de la PCB, pero existen algunas diferencias clave:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Tamaño:</strong> Los agujeros semi-dorados son mucho más pequeños que las vias tradicionales, lo que los
					hace ideales para diseños de alta densidad.
				</li>
				<li>
					<strong>Dorado:</strong> Las vias tradicionales están doradas a lo largo de toda su longitud, mientras que los
					agujeros semi-dorados solo se doran en un lado.
				</li>
				<li>
					<strong>Costo:</strong> Los agujeros semi-dorados pueden ser más rentables en ciertos diseños dependiendo de la
					complejidad de la placa.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Consideraciones de Diseño</h2>
			<p class="text-gray-600 mb-4">
				Al diseñar una PCB con agujeros semi-dorados, es importante tener en cuenta los siguientes factores:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Número de Capas:</strong> Los agujeros semi-dorados son ideales para placas multicapa, pero pueden no ser
					adecuados para diseños sencillos de dos capas.
				</li>
				<li>
					<strong>Espesor de la Placa:</strong> Asegúrese de que el grosor de la placa sea adecuado para los requisitos específicos
					de los agujeros semi-dorados.
				</li>
				<li>
					<strong>Proceso de Fabricación:</strong> No todos los fabricantes admiten agujeros semi-dorados, por lo que es
					importante verificar que su fabricante de PCB pueda manejar esta técnica.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por Qué Elegir MMWPCB para los Agujeros Semi-Dorados?</h2>
			<p class="text-gray-600 mb-4">
				En <span class="text-blue-600 font-semibold">MMWPCB</span>, nos especializamos en tecnologías avanzadas de PCB,
				incluidos los agujeros semi-dorados. Nuestro proceso de fabricación preciso garantiza PCBs de alta calidad y
				confiables que mejoran el rendimiento, incluso en los diseños más complejos. Ya sea que esté desarrollando
				placas de alta velocidad, alta densidad o necesite optimizar el espacio, ofrecemos soluciones personalizadas
				para satisfacer sus necesidades.
			</p>

			<p class="text-gray-600 mb-6">
				¡Contáctenos hoy mismo para obtener asesoría experta y una cotización instantánea para su diseño de PCB que
				incluya agujeros semi-dorados!
			</p>
		</div>
	</Layout>
{/if}
