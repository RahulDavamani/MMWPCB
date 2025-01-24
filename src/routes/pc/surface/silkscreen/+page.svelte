<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'surface'}
		title="Silkscreen"
		description="Explore the role and importance of silkscreen in PCB manufacturing for component labeling and visual identification."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Silkscreen</h1>

			<p class="text-gray-600 mb-6">
				The silkscreen layer on a printed circuit board (PCB) serves both practical and aesthetic purposes. It provides
				a clear, visible method for labeling components, reference designators, logos, and other important markers.
				These markings help with assembly, troubleshooting, and product identification.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">What is Silkscreen?</h2>
			<p class="text-gray-600 mb-4">
				Silkscreen is a layer of ink applied to the surface of a PCB, typically in white, yellow, or other high-contrast
				colors. This layer contains important information such as component labels (e.g., R1, C2), part numbers, logos,
				and any other relevant details required for assembly and testing.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Why is Silkscreen Important?</h2>
			<p class="text-gray-600 mb-4">The silkscreen layer serves several essential functions:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Assembly Guidance:</strong> Silkscreen helps assembly technicians easily identify the correct placement
					for components during the PCB assembly process.
				</li>
				<li>
					<strong>Troubleshooting:</strong> Having clear labels on the silkscreen layer assists in diagnosing problems during
					testing and repairs.
				</li>
				<li>
					<strong>Identification:</strong> It enables easier identification of the PCB and its components, even after the
					board is in use or embedded in a larger system.
				</li>
				<li>
					<strong>Aesthetics:</strong> The silkscreen also provides an opportunity for branding, such as company logos, product
					names, and other graphical elements that help make the PCB visually recognizable.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Silkscreen Material and Application</h2>
			<p class="text-gray-600 mb-4">
				The silkscreen ink is typically made of epoxy-based materials, ensuring durability and resistance to harsh
				environments. This ink is applied through a screen printing process where a stencil is used to transfer the
				design onto the PCB's surface. The ink is then cured, typically using heat, to form a long-lasting, highly
				visible marking.
			</p>
			<p class="text-gray-600 mb-4">
				The most common colors for silkscreen are white or yellow, which offer high contrast against the copper or green
				solder mask. However, other colors can be used for aesthetic or branding purposes.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Silkscreen Placement Considerations</h2>
			<p class="text-gray-600 mb-4">
				Proper placement of the silkscreen is crucial for maintaining board functionality and aesthetic appeal. The
				silkscreen layer should not interfere with pads, vias, or any other critical areas of the PCB, as it could cause
				short circuits or hinder component placement.
			</p>
			<p class="text-gray-600 mb-4">
				The silkscreen is typically applied to the top and bottom of the PCB, depending on the design requirements. When
				working with multi-layer PCBs, extra care is taken to ensure the markings align correctly with the respective
				layers.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Silkscreen in Advanced PCB Designs</h2>
			<p class="text-gray-600 mb-4">
				For more complex designs, such as high-density interconnect (HDI) PCBs, ensuring that the silkscreen layer is
				placed carefully around dense components or fine-pitch leads is vital. In these cases, the layout might require
				careful consideration to ensure the silkscreen does not obstruct electrical or mechanical components.
			</p>
			<p class="text-gray-600 mb-6">
				Advanced designs may also use specialized silkscreen techniques like laser marking or direct part marking (DPM)
				for more detailed, high-precision labeling that can withstand harsher environments.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Silkscreen and PCB Reliability</h2>
			<p class="text-gray-600 mb-4">
				While the primary function of the silkscreen is for labeling, it also contributes to the overall reliability of
				the PCB. Properly applied silkscreen can prevent solder bridges and short circuits by ensuring that component
				pads and vias are free from ink.
			</p>
			<p class="text-gray-600 mb-4">
				Choosing the right silkscreen material, application method, and placement is essential for creating a reliable,
				high-performance PCB.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
			<p class="text-gray-600 mb-4">
				Silkscreen is an essential aspect of PCB manufacturing, providing important labeling, functional guidance, and
				branding opportunities. At <span class="text-blue-600 font-semibold">MMWPCB</span>, we ensure that the
				silkscreen layer is applied with precision to meet your design needs and support the performance of your PCBs.
			</p>
			<p class="text-gray-600 mb-6">
				For more information on how we can incorporate silkscreen in your PCB design, contact us today for a custom
				quote.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'surface'}
		title="丝网印刷"
		description="探索丝网印刷在PCB制造中对元件标记和视觉识别的重要性。"
		button={{ title: '即时报价与在线订购', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">丝网印刷</h1>

			<p class="text-gray-600 mb-6">
				印刷电路板（PCB）上的丝网印刷层具有实际功能和美学目的。它提供了一种清晰、可见的标记方法，用于标注元件、参考设计符号、商标以及其他重要标记。这些标记有助于组装、故障排除和产品识别。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">什么是丝网印刷？</h2>
			<p class="text-gray-600 mb-4">
				丝网印刷是一层墨水，通常应用于PCB的表面，颜色为白色、黄色或其他高对比度的颜色。该层包含重要信息，如元件标签（例如，R1、C2）、零件号、商标以及任何其他组装和测试所需的相关细节。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">为什么丝网印刷很重要？</h2>
			<p class="text-gray-600 mb-4">丝网印刷层具有几个重要功能：</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>组装指导：</strong>丝网印刷帮助组装技术人员在PCB组装过程中轻松识别正确的元件位置。
				</li>
				<li>
					<strong>故障排除：</strong>在丝网印刷层上清晰的标签有助于在测试和修理过程中诊断问题。
				</li>
				<li>
					<strong>识别：</strong>它使PCB及其元件在使用后或嵌入到更大系统中时更易于识别。
				</li>
				<li>
					<strong>美学：</strong
					>丝网印刷还提供了品牌化的机会，如公司商标、产品名称和其他图形元素，帮助使PCB在视觉上具有识别度。
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">丝网印刷材料与应用</h2>
			<p class="text-gray-600 mb-4">
				丝网印刷墨水通常由环氧树脂基材料制成，确保耐用性和抵抗恶劣环境的能力。这种墨水通过丝网印刷工艺应用，利用模板将设计转移到PCB的表面。然后通过加热固化，形成持久且高可见度的标记。
			</p>
			<p class="text-gray-600 mb-4">
				丝网印刷的最常见颜色是白色或黄色，它们与铜或绿色焊接掩膜之间形成高对比度。然而，其他颜色也可以用于美学或品牌目的。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">丝网印刷的位置考虑</h2>
			<p class="text-gray-600 mb-4">
				丝网印刷的正确位置对于保持板功能性和美学吸引力至关重要。丝网印刷层不应干扰PCB的焊盘、通孔或任何其他关键区域，因为这可能导致短路或妨碍元件的放置。
			</p>
			<p class="text-gray-600 mb-4">
				丝网印刷通常应用于PCB的顶部和底部，具体取决于设计要求。在处理多层PCB时，需要特别注意确保标记正确对齐到相应的层次。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">先进PCB设计中的丝网印刷</h2>
			<p class="text-gray-600 mb-4">
				对于更复杂的设计，如高密度互联（HDI）PCB，确保丝网印刷层精确地放置在密集元件或细间距引脚周围至关重要。在这些情况下，布局可能需要仔细考虑，以确保丝网印刷不会妨碍电气或机械组件。
			</p>
			<p class="text-gray-600 mb-6">
				先进设计还可能使用专门的丝网印刷技术，如激光标记或直接零件标记（DPM），用于更详细的高精度标签，能够承受更恶劣的环境。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">丝网印刷与PCB的可靠性</h2>
			<p class="text-gray-600 mb-4">
				虽然丝网印刷的主要功能是用于标记，但它也有助于PCB的整体可靠性。正确应用的丝网印刷可以防止焊接桥接和短路，确保元件焊盘和通孔不被墨水污染。
			</p>
			<p class="text-gray-600 mb-4">选择合适的丝网印刷材料、应用方法和位置对于创建可靠的高性能PCB至关重要。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">结论</h2>
			<p class="text-gray-600 mb-4">
				丝网印刷是PCB制造的一个重要方面，提供了重要的标记、功能指导和品牌机会。在<span
					class="text-blue-600 font-semibold">MMWPCB</span
				>，我们确保丝网印刷层精确应用，以满足您的设计需求并支持PCB的性能。
			</p>
			<p class="text-gray-600 mb-6">欲了解更多有关如何将丝网印刷纳入您的PCB设计的信息，请今天联系我们获取定制报价。</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'surface'}
		title="Sérigraphie"
		description="Explorez le rôle et l'importance de la sérigraphie dans la fabrication des PCB pour l'étiquetage des composants et l'identification visuelle."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Sérigraphie</h1>

			<p class="text-gray-600 mb-6">
				La couche de sérigraphie sur une carte de circuit imprimé (PCB) a des fins pratiques et esthétiques. Elle
				fournit une méthode claire et visible pour étiqueter les composants, les désignations de référence, les logos et
				d'autres repères importants. Ces marquages aident à l'assemblage, au dépannage et à l'identification du produit.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Qu'est-ce que la sérigraphie ?</h2>
			<p class="text-gray-600 mb-4">
				La sérigraphie est une couche d'encre appliquée à la surface d'un PCB, généralement en blanc, jaune ou d'autres
				couleurs à fort contraste. Cette couche contient des informations importantes telles que les étiquettes des
				composants (par exemple, R1, C2), les numéros de pièce, les logos et d'autres détails pertinents nécessaires à
				l'assemblage et aux tests.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Pourquoi la sérigraphie est-elle importante ?</h2>
			<p class="text-gray-600 mb-4">La couche de sérigraphie remplit plusieurs fonctions essentielles :</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Guide d'assemblage :</strong> La sérigraphie aide les techniciens d'assemblage à identifier facilement
					l'emplacement correct des composants pendant le processus d'assemblage du PCB.
				</li>
				<li>
					<strong>Dépannage :</strong> Les étiquettes claires sur la couche de sérigraphie aident à diagnostiquer les problèmes
					lors des tests et des réparations.
				</li>
				<li>
					<strong>Identification :</strong> Elle permet une identification plus facile du PCB et de ses composants, même
					après que la carte a été utilisée ou intégrée dans un système plus large.
				</li>
				<li>
					<strong>Esthétique :</strong> La sérigraphie offre également une opportunité de marque, comme les logos d'entreprise,
					les noms de produits et d'autres éléments graphiques qui aident à rendre le PCB visuellement reconnaissable.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Matériau et application de la sérigraphie</h2>
			<p class="text-gray-600 mb-4">
				L'encre de sérigraphie est généralement fabriquée à partir de matériaux à base d'époxy, garantissant durabilité
				et résistance aux environnements difficiles. Cette encre est appliquée par un processus de sérigraphie où un
				pochoir est utilisé pour transférer le design à la surface du PCB. L'encre est ensuite durcie, généralement par
				chauffage, pour former un marquage durable et très visible.
			</p>
			<p class="text-gray-600 mb-4">
				Les couleurs les plus courantes pour la sérigraphie sont le blanc ou le jaune, qui offrent un fort contraste
				avec le cuivre ou le masque à soudure vert. Cependant, d'autres couleurs peuvent être utilisées à des fins
				esthétiques ou de branding.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Considérations sur le placement de la sérigraphie</h2>
			<p class="text-gray-600 mb-4">
				Un placement approprié de la sérigraphie est crucial pour maintenir la fonctionnalité de la carte et son attrait
				esthétique. La couche de sérigraphie ne doit pas interférer avec les pastilles, les vias ou toute autre zone
				critique du PCB, car cela pourrait entraîner des courts-circuits ou nuire à l'assemblage des composants.
			</p>
			<p class="text-gray-600 mb-4">
				La sérigraphie est généralement appliquée sur le dessus et le dessous du PCB, en fonction des exigences de
				conception. Lors de la conception de PCB multicouches, une attention particulière est portée pour s'assurer que
				les marquages sont correctement alignés avec les couches respectives.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">La sérigraphie dans les conceptions avancées de PCB</h2>
			<p class="text-gray-600 mb-4">
				Pour les conceptions plus complexes, comme les PCB à haute densité d'interconnexion (HDI), il est vital de
				s'assurer que la couche de sérigraphie est placée soigneusement autour des composants denses ou des fils à pas
				fin. Dans ces cas, la mise en page peut nécessiter une attention particulière pour garantir que la sérigraphie
				n'obstrue pas les composants électriques ou mécaniques.
			</p>
			<p class="text-gray-600 mb-6">
				Les conceptions avancées peuvent également utiliser des techniques de sérigraphie spécialisées, comme le
				marquage au laser ou le marquage direct des pièces (DPM), pour des étiquettes plus détaillées et de haute
				précision, capables de résister à des environnements plus difficiles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">La sérigraphie et la fiabilité des PCB</h2>
			<p class="text-gray-600 mb-4">
				Bien que la fonction principale de la sérigraphie soit l'étiquetage, elle contribue également à la fiabilité
				globale du PCB. Une sérigraphie correctement appliquée peut prévenir les ponts de soudure et les courts-circuits
				en garantissant que les pastilles et les vias des composants sont exempts d'encre.
			</p>
			<p class="text-gray-600 mb-4">
				Choisir le bon matériau de sérigraphie, la méthode d'application et le placement est essentiel pour créer un PCB
				fiable et performant.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h2>
			<p class="text-gray-600 mb-4">
				La sérigraphie est un aspect essentiel de la fabrication des PCB, fournissant un étiquetage important, des
				conseils fonctionnels et des opportunités de branding. Chez <span class="text-blue-600 font-semibold"
					>MMWPCB</span
				>, nous nous assurons que la couche de sérigraphie est appliquée avec précision pour répondre à vos besoins de
				conception et soutenir la performance de vos PCB.
			</p>
			<p class="text-gray-600 mb-6">
				Pour plus d'informations sur la façon dont nous pouvons intégrer la sérigraphie dans votre conception PCB,
				contactez-nous dès aujourd'hui pour un devis personnalisé.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'surface'}
		title="Serigrafía"
		description="Explore el papel y la importancia de la serigrafía en la fabricación de PCB para el etiquetado de componentes e identificación visual."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Serigrafía</h1>

			<p class="text-gray-600 mb-6">
				La capa de serigrafía en una placa de circuito impreso (PCB) tiene propósitos tanto prácticos como estéticos.
				Proporciona un método claro y visible para etiquetar componentes, designadores de referencia, logotipos y otras
				marcas importantes. Estos marcados ayudan con el ensamblaje, la resolución de problemas y la identificación del
				producto.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Qué es la Serigrafía?</h2>
			<p class="text-gray-600 mb-4">
				La serigrafía es una capa de tinta aplicada a la superficie de un PCB, generalmente en blanco, amarillo o otros
				colores de alto contraste. Esta capa contiene información importante como las etiquetas de los componentes (por
				ejemplo, R1, C2), números de parte, logotipos y cualquier otro detalle relevante necesario para el ensamblaje y
				las pruebas.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">¿Por qué es importante la Serigrafía?</h2>
			<p class="text-gray-600 mb-4">La capa de serigrafía cumple varias funciones esenciales:</p>
			<ul class="list-disc list-inside text-gray-600 mb-6">
				<li>
					<strong>Guía de ensamblaje:</strong> La serigrafía ayuda a los técnicos de ensamblaje a identificar fácilmente
					la ubicación correcta de los componentes durante el proceso de ensamblaje del PCB.
				</li>
				<li>
					<strong>Solución de problemas:</strong> Tener etiquetas claras en la capa de serigrafía ayuda a diagnosticar problemas
					durante las pruebas y reparaciones.
				</li>
				<li>
					<strong>Identificación:</strong> Facilita la identificación del PCB y sus componentes, incluso después de que la
					placa se haya utilizado o se haya integrado en un sistema más grande.
				</li>
				<li>
					<strong>Estética:</strong> La serigrafía también ofrece una oportunidad de marca, como los logotipos de la empresa,
					los nombres de productos y otros elementos gráficos que ayudan a que el PCB sea visualmente reconocible.
				</li>
			</ul>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Material y Aplicación de la Serigrafía</h2>
			<p class="text-gray-600 mb-4">
				La tinta de serigrafía generalmente está hecha de materiales a base de epoxi, lo que garantiza durabilidad y
				resistencia a entornos difíciles. Esta tinta se aplica a través de un proceso de serigrafía en el que se usa una
				plantilla para transferir el diseño a la superficie del PCB. Luego, la tinta se cura, generalmente con calor,
				para formar una marca duradera y altamente visible.
			</p>
			<p class="text-gray-600 mb-4">
				Los colores más comunes para la serigrafía son el blanco o el amarillo, que ofrecen un alto contraste con el
				cobre o la máscara de soldadura verde. Sin embargo, se pueden usar otros colores para fines estéticos o de
				marca.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Consideraciones de Colocación de la Serigrafía</h2>
			<p class="text-gray-600 mb-4">
				El lugar adecuado para colocar la serigrafía es crucial para mantener la funcionalidad de la placa y su
				atractivo estético. La capa de serigrafía no debe interferir con las almohadillas, los orificios o cualquier
				otra área crítica del PCB, ya que podría causar cortocircuitos o dificultar el ensamblaje de los componentes.
			</p>
			<p class="text-gray-600 mb-4">
				La serigrafía generalmente se aplica en la parte superior e inferior del PCB, según los requisitos del diseño.
				Al trabajar con PCBs multicapa, se tiene especial cuidado para asegurarse de que las marcas se alineen
				correctamente con las capas respectivas.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Serigrafía en Diseños Avanzados de PCB</h2>
			<p class="text-gray-600 mb-4">
				Para diseños más complejos, como los PCBs de interconexión de alta densidad (HDI), es vital asegurarse de que la
				capa de serigrafía esté cuidadosamente colocada alrededor de los componentes densos o de los pines de paso fino.
				En estos casos, el diseño puede requerir una consideración cuidadosa para asegurarse de que la serigrafía no
				obstruya los componentes eléctricos o mecánicos.
			</p>
			<p class="text-gray-600 mb-6">
				Los diseños avanzados también pueden utilizar técnicas de serigrafía especializadas, como el marcado láser o el
				marcado directo de piezas (DPM), para etiquetas más detalladas y de alta precisión que puedan resistir entornos
				más difíciles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Serigrafía y Fiabilidad de los PCB</h2>
			<p class="text-gray-600 mb-4">
				Aunque la función principal de la serigrafía es el etiquetado, también contribuye a la fiabilidad general del
				PCB. Una serigrafía correctamente aplicada puede prevenir puentes de soldadura y cortocircuitos al garantizar
				que las almohadillas de los componentes y los orificios estén libres de tinta.
			</p>
			<p class="text-gray-600 mb-4">
				Elegir el material adecuado para la serigrafía, el método de aplicación y la colocación es esencial para crear
				un PCB fiable y de alto rendimiento.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">Conclusión</h2>
			<p class="text-gray-600 mb-4">
				La serigrafía es un aspecto esencial de la fabricación de PCBs, proporcionando etiquetado importante,
				orientación funcional y oportunidades de marca. En <span class="text-blue-600 font-semibold">MMWPCB</span>, nos
				aseguramos de que la capa de serigrafía se aplique con precisión para cumplir con sus necesidades de diseño y
				apoyar el rendimiento de sus PCBs.
			</p>
			<p class="text-gray-600 mb-6">
				Para obtener más información sobre cómo podemos incorporar la serigrafía en su diseño de PCB, contáctenos hoy
				mismo para una cotización personalizada.
			</p>
		</div>
	</Layout>
{/if}
