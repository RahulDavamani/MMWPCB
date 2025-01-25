<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'surface'}
		title="Solder Mask"
		description="Learn about the importance of solder mask and its role in PCB manufacturing."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Solder Mask</h1>

			<p class="text-gray-600 mb-6">
				Solder mask, also known as solder resist, is an essential part of PCB fabrication. It is a protective layer that
				covers the copper traces on the PCB, preventing accidental short circuits, oxidation, and improving the overall
				durability of the board.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">What is Solder Mask?</h2>
			<p class="text-gray-600 mb-4">
				Solder mask is a thin layer of polymer applied to the PCB surface, except for areas where components need to be
				soldered. It is used to protect the copper traces from oxidation and prevent solder bridges during the assembly
				process.
			</p>
			<p class="text-gray-600 mb-6">
				This coating also provides electrical insulation between traces, helping ensure the proper functioning of the
				PCB in electronic devices.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Types of Solder Mask</h2>
			<p class="text-gray-600 mb-4">
				There are different types of solder mask finishes, each offering unique properties. The most common types
				include:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Green Solder Mask</strong>: The most common solder mask color, providing reliable protection and good
					visibility for inspection. It offers excellent adhesion and durability.
				</li>
				<li>
					<strong>Red, Blue, and Black Solder Masks</strong>: These colors are used for aesthetic purposes or when
					specific needs for contrast arise, but they generally offer the same protection as green masks.
				</li>
				<li>
					<strong>Liquid Photo-Imageable (LPI) Solder Mask</strong>: This is a photoresist solder mask applied in liquid
					form and cured under UV light. It allows for finer detail and more precise application.
				</li>
				<li>
					<strong>Epoxy-based Solder Mask</strong>: A more durable, high-temperature-resistant option often used in
					automotive or military applications, offering better resistance to wear and harsh conditions.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Benefits of Solder Mask</h2>
			<p class="text-gray-600 mb-6">
				Solder mask offers several benefits to the PCB manufacturing process and the overall performance of the PCB:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Prevents Short Circuits:</strong> By covering the copper traces, solder mask prevents accidental solder
					bridges that could cause shorts.
				</li>
				<li>
					<strong>Protects Against Oxidation:</strong> It protects the copper traces from oxidizing, especially in humid
					environments, maintaining the integrity of the PCB.
				</li>
				<li>
					<strong>Improves Durability:</strong> The solder mask increases the mechanical strength of the PCB and prevents
					damage during handling and assembly.
				</li>
				<li>
					<strong>Enhances Visual Inspection:</strong> The color contrast of the solder mask aids in the visual inspection
					of the PCB for defects or issues.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications of Solder Mask</h2>
			<p class="text-gray-600 mb-4">
				Solder masks are used in a wide range of applications, from consumer electronics to automotive and industrial
				devices. Depending on the type of PCB and its end-use, the solder mask ensures the board performs reliably in
				various environments.
			</p>
			<p class="text-gray-600 mb-6">
				For example, in high-frequency PCBs, such as those used in RF and microwave applications, solder mask helps in
				maintaining signal integrity. In military and aerospace applications, high-durability solder masks provide
				protection in harsh environments.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Factors to Consider for Solder Mask</h2>
			<p class="text-gray-600 mb-4">
				Choosing the right solder mask requires careful consideration of the following factors:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>PCB Complexity:</strong> Highly complex PCBs with fine traces may require a high-precision photoimageable
					solder mask.
				</li>
				<li>
					<strong>Application Environment:</strong> Select a solder mask material that aligns with the operational environment
					of the PCB, whether it’s high temperature or exposure to chemicals.
				</li>
				<li>
					<strong>Cost vs. Performance:</strong> While green solder mask is cost-effective, specialty finishes may be required
					for specific applications, balancing price and performance needs.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
			<p class="text-gray-600 mb-4">
				Solder mask is a vital component in PCB manufacturing, offering protection and ensuring the functionality of the
				board. At <span class="text-blue-600 font-semibold">MMWPCB</span>, we offer a wide range of solder mask options
				that ensure the durability, reliability, and performance of your PCBs.
			</p>
			<p class="text-gray-600 mb-6">
				Contact us today to discuss your specific solder mask requirements and get a quote for your PCB project.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'surface'}
		title="焊接掩膜"
		description="了解焊接掩膜的重要性及其在PCB制造中的作用。"
		button={{ title: '即时报价 & 在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">焊接掩膜</h1>

			<p class="text-gray-600 mb-6">
				焊接掩膜，也称为焊接阻焊，是PCB制造中不可或缺的一部分。它是覆盖PCB铜迹的保护层，防止意外短路、氧化，并提高板材的整体耐用性。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">什么是焊接掩膜？</h2>
			<p class="text-gray-600 mb-4">
				焊接掩膜是一层薄薄的聚合物，涂覆在PCB表面，除了需要焊接元件的区域。它用于保护铜迹不被氧化，并防止在组装过程中形成焊接桥。
			</p>
			<p class="text-gray-600 mb-6">这种涂层还提供了电气绝缘，帮助确保PCB在电子设备中的正常功能。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">焊接掩膜的种类</h2>
			<p class="text-gray-600 mb-4">焊接掩膜有不同的类型，每种类型都提供独特的特性。最常见的类型包括：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>绿色焊接掩膜</strong>:
					最常见的焊接掩膜颜色，提供可靠的保护和良好的可视性，便于检查。它具有出色的附着力和耐久性。
				</li>
				<li>
					<strong>红色、蓝色和黑色焊接掩膜</strong>:
					这些颜色用于美学目的，或在需要对比度时使用，但它们通常提供与绿色掩膜相同的保护效果。
				</li>
				<li>
					<strong>液态光刻焊接掩膜（LPI）</strong>:
					这是一种光刻胶焊接掩膜，以液态形式涂覆，并在紫外光下固化。它允许更精细的细节和更精确的涂覆。
				</li>
				<li>
					<strong>环氧基焊接掩膜</strong>:
					这是一种更耐用的高温耐受选项，通常用于汽车或军事应用，提供更好的耐磨性和恶劣环境的抵抗力。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">焊接掩膜的好处</h2>
			<p class="text-gray-600 mb-6">焊接掩膜为PCB制造过程和PCB的整体性能提供了多个好处：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>防止短路：</strong>通过覆盖铜迹，焊接掩膜防止了可能导致短路的焊接桥。
				</li>
				<li>
					<strong>防止氧化：</strong>它保护铜迹不被氧化，特别是在潮湿环境中，保持PCB的完整性。
				</li>
				<li>
					<strong>提高耐久性：</strong>焊接掩膜提高了PCB的机械强度，防止在处理和组装过程中损坏。
				</li>
				<li>
					<strong>增强视觉检查：</strong>焊接掩膜的颜色对比有助于在视觉检查中识别PCB缺陷或问题。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">焊接掩膜的应用</h2>
			<p class="text-gray-600 mb-4">
				焊接掩膜广泛应用于消费电子、汽车和工业设备等多个领域。根据PCB的类型及其最终用途，焊接掩膜确保在不同环境下PCB的可靠性。
			</p>
			<p class="text-gray-600 mb-6">
				例如，在高频PCB中，如用于射频和微波应用的PCB，焊接掩膜有助于维持信号完整性。在军事和航空航天应用中，高耐久性的焊接掩膜在恶劣环境中提供保护。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">选择焊接掩膜时的考虑因素</h2>
			<p class="text-gray-600 mb-4">选择合适的焊接掩膜需要仔细考虑以下因素：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>PCB复杂性：</strong>具有细铜迹的高度复杂PCB可能需要高精度的光刻可成像焊接掩膜。
				</li>
				<li>
					<strong>应用环境：</strong>选择与PCB操作环境相匹配的焊接掩膜材料，无论是高温还是化学品暴露。
				</li>
				<li>
					<strong>成本与性能：</strong
					>虽然绿色焊接掩膜成本较低，但特定应用可能需要特殊的涂层，在价格和性能之间取得平衡。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">结论</h2>
			<p class="text-gray-600 mb-4">
				焊接掩膜是PCB制造中的重要组成部分，它提供了保护并确保电路板的功能性。在<span class="text-blue-600 font-semibold"
					>MMWPCB</span
				>，我们提供多种焊接掩膜选项，确保您的PCB具有耐用性、可靠性和卓越的性能。
			</p>
			<p class="text-gray-600 mb-6">今天就联系我们，讨论您的焊接掩膜需求，并获取PCB项目的报价。</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'surface'}
		title="Masque de soudure"
		description="Découvrez l'importance du masque de soudure et son rôle dans la fabrication de PCB."
		button={{ title: 'Devis instantané & Commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Masque de soudure</h1>

			<p class="text-gray-600 mb-6">
				Le masque de soudure, également connu sous le nom de résine de soudure, est une partie essentielle de la
				fabrication des PCB. Il s'agit d'une couche protectrice qui recouvre les traces de cuivre sur le PCB, empêchant
				les courts-circuits accidentels, l'oxydation et améliorant la durabilité générale du circuit imprimé.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Qu'est-ce que le masque de soudure ?</h2>
			<p class="text-gray-600 mb-4">
				Le masque de soudure est une fine couche de polymère appliquée sur la surface du PCB, à l'exception des zones où
				les composants doivent être soudés. Il est utilisé pour protéger les traces de cuivre contre l'oxydation et
				prévenir les ponts de soudure pendant le processus d'assemblage.
			</p>
			<p class="text-gray-600 mb-6">
				Ce revêtement offre également une isolation électrique entre les traces, garantissant le bon fonctionnement du
				PCB dans les appareils électroniques.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Types de masque de soudure</h2>
			<p class="text-gray-600 mb-4">
				Il existe différents types de finitions de masque de soudure, chacune offrant des propriétés uniques. Les types
				les plus courants sont les suivants :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Masque de soudure vert</strong> : La couleur la plus courante du masque de soudure, offrant une protection
					fiable et une bonne visibilité pour l'inspection. Il offre une excellente adhésion et durabilité.
				</li>
				<li>
					<strong>Masques de soudure rouge, bleu et noir</strong> : Ces couleurs sont utilisées à des fins esthétiques ou
					lorsqu'un contraste spécifique est nécessaire, mais elles offrent généralement la même protection que les masques
					verts.
				</li>
				<li>
					<strong>Masque de soudure photoimageable liquide (LPI)</strong> : Il s'agit d'un masque de soudure photo-résistant
					appliqué sous forme liquide et durci sous lumière UV. Il permet des détails plus fins et une application plus précise.
				</li>
				<li>
					<strong>Masque de soudure à base d'époxy</strong> : Une option plus durable et résistante à haute température,
					souvent utilisée dans les applications automobiles ou militaires, offrant une meilleure résistance à l'usure et
					aux conditions difficiles.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Avantages du masque de soudure</h2>
			<p class="text-gray-600 mb-6">
				Le masque de soudure offre plusieurs avantages pour le processus de fabrication des PCB et la performance
				globale du PCB :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Prévention des courts-circuits :</strong> En couvrant les traces de cuivre, le masque de soudure empêche
					les ponts de soudure accidentels qui pourraient causer des courts-circuits.
				</li>
				<li>
					<strong>Protection contre l'oxydation :</strong> Il protège les traces de cuivre contre l'oxydation, en particulier
					dans des environnements humides, maintenant ainsi l'intégrité du PCB.
				</li>
				<li>
					<strong>Amélioration de la durabilité :</strong> Le masque de soudure augmente la résistance mécanique du PCB et
					empêche les dommages pendant la manipulation et l'assemblage.
				</li>
				<li>
					<strong>Amélioration de l'inspection visuelle :</strong> Le contraste de couleur du masque de soudure aide à l'inspection
					visuelle du PCB pour détecter les défauts ou problèmes.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Applications du masque de soudure</h2>
			<p class="text-gray-600 mb-4">
				Les masques de soudure sont utilisés dans une large gamme d'applications, allant de l'électronique grand public
				aux appareils automobiles et industriels. En fonction du type de PCB et de son utilisation finale, le masque de
				soudure garantit la performance fiable de la carte dans divers environnements.
			</p>
			<p class="text-gray-600 mb-6">
				Par exemple, dans les PCB haute fréquence, comme ceux utilisés dans les applications RF et micro-ondes, le
				masque de soudure aide à maintenir l'intégrité du signal. Dans les applications militaires et aérospatiales, les
				masques de soudure haute durabilité offrent une protection dans des environnements difficiles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Facteurs à considérer pour le masque de soudure</h2>
			<p class="text-gray-600 mb-4">
				Choisir le bon masque de soudure nécessite de prendre en compte les facteurs suivants :
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Complexité du PCB :</strong> Les PCB hautement complexes avec des traces fines peuvent nécessiter un masque
					de soudure photoimageable à haute précision.
				</li>
				<li>
					<strong>Environnement d'application :</strong> Sélectionnez un matériau de masque de soudure adapté à l'environnement
					opérationnel du PCB, qu'il soit à haute température ou exposé à des produits chimiques.
				</li>
				<li>
					<strong>Coût vs. performance :</strong> Bien que le masque de soudure vert soit économique, des finitions spéciales
					peuvent être nécessaires pour des applications spécifiques, en équilibrant les besoins de prix et de performance.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
			<p class="text-gray-600 mb-4">
				Le masque de soudure est un composant vital dans la fabrication des PCB, offrant une protection et garantissant
				la fonctionnalité de la carte. Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous proposons une
				large gamme d'options de masques de soudure qui assurent la durabilité, la fiabilité et la performance de vos
				PCB.
			</p>
			<p class="text-gray-600 mb-6">
				Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques en matière de masque de soudure et
				obtenir un devis pour votre projet PCB.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'surface'}
		title="Máscara de soldadura"
		description="Aprenda sobre la importancia de la máscara de soldadura y su papel en la fabricación de PCB."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Máscara de soldadura</h1>

			<p class="text-gray-600 mb-6">
				La máscara de soldadura, también conocida como resistencia de soldadura, es una parte esencial de la fabricación
				de PCB. Es una capa protectora que cubre las trazas de cobre en el PCB, evitando cortocircuitos accidentales,
				oxidación y mejorando la durabilidad general de la placa.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Qué es la máscara de soldadura?</h2>
			<p class="text-gray-600 mb-4">
				La máscara de soldadura es una capa delgada de polímero aplicada a la superficie del PCB, excepto en las áreas
				donde deben soldarse los componentes. Se utiliza para proteger las trazas de cobre de la oxidación y prevenir
				los puentes de soldadura durante el proceso de ensamblaje.
			</p>
			<p class="text-gray-600 mb-6">
				Este recubrimiento también proporciona aislamiento eléctrico entre las trazas, ayudando a garantizar el correcto
				funcionamiento del PCB en dispositivos electrónicos.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Tipos de máscara de soldadura</h2>
			<p class="text-gray-600 mb-4">
				Existen diferentes tipos de acabados de máscara de soldadura, cada uno con propiedades únicas. Los tipos más
				comunes incluyen:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Máscara de soldadura verde</strong>: El color más común de la máscara de soldadura, que ofrece una
					protección confiable y buena visibilidad para la inspección. Ofrece excelente adhesión y durabilidad.
				</li>
				<li>
					<strong>Máscaras de soldadura roja, azul y negra</strong>: Estos colores se usan con fines estéticos o cuando
					surge la necesidad de un contraste específico, pero generalmente ofrecen la misma protección que las máscaras
					verdes.
				</li>
				<li>
					<strong>Máscara de soldadura fotoimagenable líquida (LPI)</strong>: Esta es una máscara de soldadura
					fotoresistente aplicada en forma líquida y curada bajo luz UV. Permite detalles más finos y una aplicación más
					precisa.
				</li>
				<li>
					<strong>Máscara de soldadura a base de epoxi</strong>: Una opción más duradera y resistente a altas
					temperaturas, a menudo utilizada en aplicaciones automotrices o militares, que ofrece mejor resistencia al
					desgaste y a condiciones extremas.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Beneficios de la máscara de soldadura</h2>
			<p class="text-gray-600 mb-6">
				La máscara de soldadura ofrece varios beneficios para el proceso de fabricación de PCB y el rendimiento general
				del PCB:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Previene cortocircuitos:</strong> Al cubrir las trazas de cobre, la máscara de soldadura previene los puentes
					de soldadura accidentales que podrían causar cortocircuitos.
				</li>
				<li>
					<strong>Protege contra la oxidación:</strong> Protege las trazas de cobre de la oxidación, especialmente en ambientes
					húmedos, manteniendo la integridad del PCB.
				</li>
				<li>
					<strong>Mejora la durabilidad:</strong> La máscara de soldadura aumenta la resistencia mecánica del PCB y previene
					daños durante el manejo y ensamblaje.
				</li>
				<li>
					<strong>Mejora la inspección visual:</strong> El contraste de color de la máscara de soldadura ayuda en la inspección
					visual del PCB para detectar defectos o problemas.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Aplicaciones de la máscara de soldadura</h2>
			<p class="text-gray-600 mb-4">
				Las máscaras de soldadura se utilizan en una amplia gama de aplicaciones, desde la electrónica de consumo hasta
				dispositivos automotrices e industriales. Dependiendo del tipo de PCB y su uso final, la máscara de soldadura
				garantiza que la placa funcione de manera confiable en varios entornos.
			</p>
			<p class="text-gray-600 mb-6">
				Por ejemplo, en los PCB de alta frecuencia, como los utilizados en aplicaciones de RF y microondas, la máscara
				de soldadura ayuda a mantener la integridad de la señal. En aplicaciones militares y aeroespaciales, las
				máscaras de soldadura de alta durabilidad brindan protección en entornos exigentes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Factores a considerar para la máscara de soldadura</h2>
			<p class="text-gray-600 mb-4">
				Elegir la máscara de soldadura adecuada requiere una cuidadosa consideración de los siguientes factores:
			</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Complejidad del PCB:</strong> Los PCB altamente complejos con trazas finas pueden requerir una máscara
					de soldadura fotoimagenable de alta precisión.
				</li>
				<li>
					<strong>Entorno de aplicación:</strong> Seleccione un material de máscara de soldadura que se alinee con el entorno
					operativo del PCB, ya sea a alta temperatura o expuesto a productos químicos.
				</li>
				<li>
					<strong>Coste vs. rendimiento:</strong> Aunque la máscara de soldadura verde es económica, pueden ser necesarias
					acabados especiales para aplicaciones específicas, equilibrando el precio y las necesidades de rendimiento.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusión</h2>
			<p class="text-gray-600 mb-4">
				La máscara de soldadura es un componente vital en la fabricación de PCB, ofreciendo protección y garantizando la
				funcionalidad de la placa. En <span class="text-blue-600 font-semibold">MMWPCB</span>, ofrecemos una amplia gama
				de opciones de máscara de soldadura que garantizan la durabilidad, fiabilidad y rendimiento de sus PCB.
			</p>
			<p class="text-gray-600 mb-6">
				Contáctenos hoy para discutir sus necesidades específicas de máscara de soldadura y obtener una cotización para
				su proyecto de PCB.
			</p>
		</div>
	</Layout>
{/if}
