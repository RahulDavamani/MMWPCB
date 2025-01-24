<script lang="ts">
	import Layout from '../../Layout.svelte';
	import { goto } from '$app/navigation';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout
		section={'pcbDesignAid'}
		title="PCB Materials"
		description="Explore the various materials used in PCB design and fabrication."
		button={{ title: 'Instant Quote & Order Online', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB Materials</h1>

			<p class="text-gray-600 mb-6">
				When designing a printed circuit board (PCB), the choice of materials plays a significant role in determining
				the performance, durability, and cost of the final product. At <span class="text-blue-600 font-semibold"
					>MMWPCB</span
				>, we offer a wide range of high-quality materials suited for different applications.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. FR4 – The Standard</h2>
			<p class="text-gray-600 mb-4">
				FR4 is the most commonly used material for PCB fabrication. It’s a composite made of woven fiberglass and epoxy
				resin, known for its reliability, cost-effectiveness, and electrical insulation properties. FR4 is the material
				of choice for most consumer electronics and general-purpose PCBs.
			</p>
			<p class="text-gray-600 mb-4">
				While it provides excellent performance for low-frequency applications, it may not be suitable for
				high-frequency or high-speed applications. However, for most standard PCBs, FR4 is an excellent balance of
				performance and cost.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. High-TG Materials</h2>
			<p class="text-gray-600 mb-4">
				High-TG (glass transition temperature) materials are designed for applications that involve higher temperatures.
				They have a higher resistance to heat compared to standard FR4, making them ideal for high-performance and
				high-frequency designs. High-TG materials are commonly used in industries like automotive, telecommunications,
				and aerospace.
			</p>
			<p class="text-gray-600 mb-4">
				Using high-TG materials ensures better thermal stability, allowing the PCB to withstand the stresses of heat
				during soldering and in operational conditions.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Rogers – High-Frequency Applications</h2>
			<p class="text-gray-600 mb-4">
				Rogers is a brand known for its high-frequency laminates, making it the material of choice for RF (radio
				frequency) and microwave applications. These materials provide superior electrical performance at high
				frequencies, ensuring minimal signal loss and reduced electromagnetic interference (EMI).
			</p>
			<p class="text-gray-600 mb-4">
				Rogers materials are ideal for applications like satellite communications, radar systems, and 5G technology,
				where maintaining signal integrity at high speeds is crucial.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Flexible PCB Materials</h2>
			<p class="text-gray-600 mb-4">
				For designs that require bending, flexing, or conforming to tight spaces, flexible PCB materials are the
				solution. These materials are often made from polyimide or other flexible polymers that allow the PCB to bend
				without damaging the circuit.
			</p>
			<p class="text-gray-600 mb-4">
				Flexible PCBs are widely used in wearables, medical devices, and automotive applications, where space is
				limited, and flexibility is key.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. Aluminum PCBs</h2>
			<p class="text-gray-600 mb-4">
				Aluminum PCBs are designed for applications that require excellent heat dissipation. The aluminum base allows
				for better thermal conductivity, making these materials suitable for power electronics, LED lighting, and
				automotive systems.
			</p>
			<p class="text-gray-600 mb-4">
				They are especially useful in applications where the PCB needs to handle high power and maintain performance at
				higher temperatures.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Polyimide Materials</h2>
			<p class="text-gray-600 mb-4">
				Polyimide materials are high-performance polymers known for their excellent thermal stability and resistance to
				harsh chemicals. They are widely used in high-temperature and high-performance applications, such as aerospace
				and military electronics.
			</p>
			<p class="text-gray-600 mb-4">
				Polyimide-based PCBs are ideal for extreme environments and are known for their durability and resilience, even
				under challenging conditions.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. CEM1 and CEM3 Materials</h2>
			<p class="text-gray-600 mb-4">
				CEM1 and CEM3 are composite materials used in PCBs. CEM1 is a single-sided laminate, while CEM3 is a more
				commonly used double-sided laminate material. Both materials are more affordable alternatives to FR4 and offer
				good electrical insulation properties.
			</p>
			<p class="text-gray-600 mb-4">
				CEM1 is often used for basic designs, while CEM3 is used for designs requiring double-sided PCBs, though both
				materials may not offer the same performance as FR4 in demanding applications.
			</p>

			<p class="text-gray-600">
				Choosing the right material for your PCB depends on your specific requirements, including performance,
				environmental conditions, and budget. At <span class="text-blue-600 font-semibold">MMWPCB</span>, we provide
				high-quality materials that suit a wide range of applications, from everyday consumer electronics to
				cutting-edge high-frequency designs.
			</p>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout
		section={'pcbDesignAid'}
		title="PCB材料"
		description="探索在PCB设计和制造中使用的各种材料。"
		button={{ title: '即时报价与在线订单', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">PCB材料</h1>

			<p class="text-gray-600 mb-6">
				在设计印刷电路板(PCB)时，材料的选择在决定最终产品的性能、耐用性和成本方面发挥着重要作用。在 <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>，我们提供各种适用于不同应用的高质量材料。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. FR4 - 标准材料</h2>
			<p class="text-gray-600 mb-4">
				FR4是最常用的PCB制造材料。它是一种由编织玻璃纤维和环氧树脂组成的复合材料，因其可靠性、成本效益和电气绝缘性能而闻名。FR4是大多数消费电子和通用PCB的首选材料。
			</p>
			<p class="text-gray-600 mb-4">
				虽然它在低频应用中表现优异，但可能不适用于高频或高速应用。然而，对于大多数标准PCB来说，FR4是性能和成本的最佳平衡。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. 高TG材料</h2>
			<p class="text-gray-600 mb-4">
				高TG（玻璃化转变温度）材料是为高温应用设计的。与标准FR4相比，它们具有更高的耐热性，使其成为高性能和高频设计的理想选择。高TG材料通常用于汽车、电信和航空航天等行业。
			</p>
			<p class="text-gray-600 mb-4">
				使用高TG材料可以确保更好的热稳定性，使PCB能够承受焊接过程中的热应力和工作条件下的热负荷。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Rogers – 高频应用</h2>
			<p class="text-gray-600 mb-4">
				Rogers是一个以其高频层压板而闻名的品牌，使其成为射频(RF)和微波应用的首选材料。这些材料在高频下提供优越的电气性能，确保最小的信号损失和减少电磁干扰(EMI)。
			</p>
			<p class="text-gray-600 mb-4">
				Rogers材料非常适合卫星通信、雷达系统和5G技术等应用，这些应用需要在高速下保持信号完整性。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. 弯曲PCB材料</h2>
			<p class="text-gray-600 mb-4">
				对于需要弯曲、柔性或适应狭小空间的设计，柔性PCB材料是解决方案。这些材料通常由聚酰亚胺或其他柔性聚合物制成，使PCB可以弯曲而不损坏电路。
			</p>
			<p class="text-gray-600 mb-4">柔性PCB广泛应用于可穿戴设备、医疗设备和汽车应用，其中空间有限且灵活性至关重要。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. 铝PCB</h2>
			<p class="text-gray-600 mb-4">
				铝PCB设计用于需要优异散热性能的应用。铝基底允许更好的热导率，使这些材料适用于功率电子、LED照明和汽车系统。
			</p>
			<p class="text-gray-600 mb-4">它们特别适用于需要处理高功率并在较高温度下保持性能的应用。</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. 聚酰亚胺材料</h2>
			<p class="text-gray-600 mb-4">
				聚酰亚胺材料是一种高性能聚合物，以其出色的热稳定性和抗化学腐蚀性著称。它们广泛应用于高温和高性能应用，如航空航天和军事电子。
			</p>
			<p class="text-gray-600 mb-4">
				基于聚酰亚胺的PCB非常适合极端环境，因其耐用性和弹性，即使在恶劣条件下也能保持卓越性能。
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. CEM1和CEM3材料</h2>
			<p class="text-gray-600 mb-4">
				CEM1和CEM3是用于PCB的复合材料。CEM1是单面层压板，而CEM3是更常用的双面层压板材料。这两种材料都是FR4的经济替代品，提供良好的电气绝缘性能。
			</p>
			<p class="text-gray-600 mb-4">
				CEM1通常用于基础设计，而CEM3用于需要双面PCB的设计，尽管这两种材料在高要求应用中可能无法提供与FR4相同的性能。
			</p>

			<p class="text-gray-600">
				选择适合您PCB的材料取决于您的具体需求，包括性能、环境条件和预算。在 <span class="text-blue-600 font-semibold"
					>MMWPCB</span
				>，我们提供适用于广泛应用的高质量材料，从日常消费电子到前沿的高频设计。
			</p>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout
		section={'pcbDesignAid'}
		title="Matériaux PCB"
		description="Explorez les différents matériaux utilisés dans la conception et la fabrication des PCB."
		button={{ title: 'Devis instantané et commande en ligne', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Matériaux PCB</h1>

			<p class="text-gray-600 mb-6">
				Lors de la conception d'un circuit imprimé (PCB), le choix des matériaux joue un rôle important dans la
				détermination de la performance, de la durabilité et du coût du produit final. Chez <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>
				, nous proposons une large gamme de matériaux de haute qualité adaptés à diverses applications.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. FR4 – Le standard</h2>
			<p class="text-gray-600 mb-4">
				FR4 est le matériau le plus couramment utilisé pour la fabrication des PCB. C'est un composite constitué de
				fibre de verre tissée et de résine époxy, connu pour sa fiabilité, son rapport qualité/prix et ses propriétés
				d'isolation électrique. Le FR4 est le matériau de choix pour la plupart des appareils électroniques grand public
				et des PCB généralistes.
			</p>
			<p class="text-gray-600 mb-4">
				Bien qu'il offre d'excellentes performances pour les applications à basse fréquence, il peut ne pas être adapté
				aux applications haute fréquence ou haute vitesse. Cependant, pour la plupart des PCB standard, le FR4 constitue
				un excellent compromis entre performance et coût.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. Matériaux High-TG</h2>
			<p class="text-gray-600 mb-4">
				Les matériaux High-TG (Température de transition vitreuse) sont conçus pour les applications impliquant des
				températures plus élevées. Ils ont une résistance thermique plus élevée par rapport au FR4 standard, ce qui les
				rend idéaux pour les conceptions haute performance et haute fréquence. Les matériaux High-TG sont couramment
				utilisés dans les secteurs de l'automobile, des télécommunications et de l'aérospatiale.
			</p>
			<p class="text-gray-600 mb-4">
				L'utilisation de matériaux High-TG garantit une meilleure stabilité thermique, permettant au PCB de supporter
				les tensions thermiques pendant la soudure et dans les conditions opérationnelles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Rogers – Applications haute fréquence</h2>
			<p class="text-gray-600 mb-4">
				Rogers est une marque reconnue pour ses stratifiés haute fréquence, en faisant le matériau de choix pour les
				applications RF (radiofréquence) et micro-ondes. Ces matériaux offrent des performances électriques supérieures
				à haute fréquence, assurant une perte de signal minimale et une réduction des interférences électromagnétiques
				(EMI).
			</p>
			<p class="text-gray-600 mb-4">
				Les matériaux Rogers sont idéaux pour des applications telles que les communications par satellite, les systèmes
				radar et la technologie 5G, où il est crucial de maintenir l'intégrité du signal à grande vitesse.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Matériaux PCB flexibles</h2>
			<p class="text-gray-600 mb-4">
				Pour les conceptions nécessitant des courbures, des flexions ou une adaptation à des espaces restreints, les
				matériaux PCB flexibles sont la solution. Ces matériaux sont souvent fabriqués à partir de polyimide ou d'autres
				polymères flexibles permettant au PCB de se plier sans endommager le circuit.
			</p>
			<p class="text-gray-600 mb-4">
				Les PCB flexibles sont largement utilisés dans les dispositifs portables, les équipements médicaux et les
				applications automobiles, où l'espace est limité et la flexibilité est essentielle.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. PCBs en aluminium</h2>
			<p class="text-gray-600 mb-4">
				Les PCBs en aluminium sont conçus pour des applications nécessitant une excellente dissipation thermique. La
				base en aluminium permet une meilleure conductivité thermique, ce qui rend ces matériaux adaptés aux
				électroniques de puissance, à l'éclairage LED et aux systèmes automobiles.
			</p>
			<p class="text-gray-600 mb-4">
				Ils sont particulièrement utiles dans les applications où le PCB doit gérer une puissance élevée et maintenir
				ses performances à des températures plus élevées.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Matériaux polyimides</h2>
			<p class="text-gray-600 mb-4">
				Les matériaux polyimides sont des polymères haute performance connus pour leur excellente stabilité thermique et
				leur résistance aux produits chimiques agressifs. Ils sont largement utilisés dans des applications haute
				température et hautes performances, telles que l'aérospatiale et l'électronique militaire.
			</p>
			<p class="text-gray-600 mb-4">
				Les PCBs à base de polyimide sont idéaux pour les environnements extrêmes et sont connus pour leur durabilité et
				leur résilience, même dans des conditions difficiles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. Matériaux CEM1 et CEM3</h2>
			<p class="text-gray-600 mb-4">
				CEM1 et CEM3 sont des matériaux composites utilisés dans les PCB. CEM1 est un stratifié monoface, tandis que
				CEM3 est un matériau de stratifié double face plus couramment utilisé. Les deux matériaux sont des alternatives
				plus abordables au FR4 et offrent de bonnes propriétés d'isolation électrique.
			</p>
			<p class="text-gray-600 mb-4">
				CEM1 est souvent utilisé pour des conceptions simples, tandis que CEM3 est utilisé pour des conceptions
				nécessitant des PCBs double face, bien que ces matériaux n'offrent peut-être pas les mêmes performances que le
				FR4 dans les applications exigeantes.
			</p>

			<p class="text-gray-600">
				Le choix du bon matériau pour votre PCB dépend de vos besoins spécifiques, y compris les performances, les
				conditions environnementales et votre budget. Chez <span class="text-blue-600 font-semibold">MMWPCB</span>, nous
				fournissons des matériaux de haute qualité adaptés à une large gamme d'applications, des appareils électroniques
				grand public aux conceptions haute fréquence de pointe.
			</p>
		</div>
	</Layout>
{:else}
	<Layout
		section={'pcbDesignAid'}
		title="Materiales PCB"
		description="Explora los diferentes materiales utilizados en el diseño y fabricación de PCB."
		button={{ title: 'Cotización instantánea y pedido en línea', onClick: () => goto('/instant-quote') }}
	>
		<div class="container mx-auto px-4 py-8">
			<h1 class="text-3xl font-bold text-gray-800 mb-6">Materiales PCB</h1>

			<p class="text-gray-600 mb-6">
				En el diseño de un circuito impreso (PCB), la elección del material juega un papel importante en la
				determinación del rendimiento, durabilidad y costo del producto final. En <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>
				ofrecemos una amplia variedad de materiales de alta calidad para diversas aplicaciones.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">1. FR4 – El estándar</h2>
			<p class="text-gray-600 mb-4">
				FR4 es el material más utilizado para la fabricación de PCB. Es un compuesto de fibra de vidrio tejida y resina
				epóxica, conocido por su fiabilidad, relación calidad-precio y propiedades de aislamiento eléctrico. FR4 es la
				opción principal para la mayoría de dispositivos electrónicos de consumo y PCB generales.
			</p>
			<p class="text-gray-600 mb-4">
				Aunque ofrece un excelente rendimiento para aplicaciones de baja frecuencia, puede no ser adecuado para
				aplicaciones de alta frecuencia o alta velocidad. Sin embargo, para la mayoría de los PCB estándar, FR4 es el
				mejor equilibrio entre rendimiento y costo.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">2. Materiales High-TG</h2>
			<p class="text-gray-600 mb-4">
				Los materiales High-TG (Temperatura de transición vítrea) están diseñados para aplicaciones de alta temperatura.
				Tienen una mayor resistencia térmica en comparación con el FR4 estándar, lo que los convierte en la opción ideal
				para diseños de alto rendimiento y alta frecuencia. Los materiales High-TG se utilizan ampliamente en sectores
				como el automotriz, telecomunicaciones y aeroespacial.
			</p>
			<p class="text-gray-600 mb-4">
				Usar materiales High-TG garantiza una mejor estabilidad térmica, permitiendo que el PCB soporte las tensiones
				térmicas durante el proceso de soldadura y en condiciones operativas.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">3. Rogers – Aplicaciones de alta frecuencia</h2>
			<p class="text-gray-600 mb-4">
				Rogers es una marca conocida por sus estratificados de alta frecuencia, lo que lo convierte en el material
				preferido para aplicaciones de RF (radiofrecuencia) y microondas. Estos materiales ofrecen un rendimiento
				eléctrico superior a alta frecuencia, asegurando una mínima pérdida de señal y reduciendo la interferencia
				electromagnética (EMI).
			</p>
			<p class="text-gray-600 mb-4">
				Los materiales Rogers son ideales para aplicaciones como comunicaciones por satélite, sistemas de radar y la
				tecnología 5G, donde es crucial mantener la integridad de la señal a alta velocidad.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">4. Materiales PCB flexibles</h2>
			<p class="text-gray-600 mb-4">
				Para diseños que requieren curvaturas, flexibilidad o adaptarse a espacios reducidos, los materiales PCB
				flexibles son la solución. Estos materiales suelen fabricarse con poliamida u otros polímeros flexibles que
				permiten que el PCB se curve sin dañar el circuito.
			</p>
			<p class="text-gray-600 mb-4">
				Los PCB flexibles se utilizan ampliamente en dispositivos portátiles, equipos médicos y aplicaciones
				automotrices, donde el espacio es limitado y la flexibilidad es esencial.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">5. PCBs de aluminio</h2>
			<p class="text-gray-600 mb-4">
				Los PCBs de aluminio están diseñados para aplicaciones que requieren una excelente disipación térmica. La base
				de aluminio permite una mejor conductividad térmica, lo que hace que estos materiales sean adecuados para la
				electrónica de potencia, la iluminación LED y los sistemas automotrices.
			</p>
			<p class="text-gray-600 mb-4">
				Son particularmente útiles en aplicaciones donde el PCB debe manejar alta potencia y mantener su rendimiento a
				temperaturas más altas.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">6. Materiales de poliamida</h2>
			<p class="text-gray-600 mb-4">
				Los materiales de poliamida son polímeros de alto rendimiento conocidos por su excelente estabilidad térmica y
				resistencia a productos químicos agresivos. Se utilizan ampliamente en aplicaciones de alta temperatura y alto
				rendimiento, como la aeroespacial y la electrónica militar.
			</p>
			<p class="text-gray-600 mb-4">
				Los PCB basados en poliamida son ideales para entornos extremos y son conocidos por su durabilidad y
				resistencia, incluso en condiciones difíciles.
			</p>

			<h2 class="text-2xl font-semibold text-gray-700 mb-4">7. Materiales CEM1 y CEM3</h2>
			<p class="text-gray-600 mb-4">
				CEM1 y CEM3 son materiales compuestos utilizados en los PCB. CEM1 es un estratificado de una sola cara, mientras
				que CEM3 es un material de estratificado de doble cara más comúnmente utilizado. Ambos materiales son
				alternativas más asequibles al FR4 y ofrecen buenas propiedades de aislamiento eléctrico.
			</p>
			<p class="text-gray-600 mb-4">
				CEM1 se utiliza generalmente para diseños simples, mientras que CEM3 se utiliza para diseños que requieren PCB
				de doble cara, aunque estos materiales no ofrecen el mismo rendimiento que el FR4 en aplicaciones exigentes.
			</p>

			<p class="text-gray-600">
				La elección del material adecuado para su PCB depende de sus necesidades específicas, incluidas las
				características de rendimiento, las condiciones ambientales y su presupuesto. En <span
					class="text-blue-600 font-semibold">MMWPCB</span
				>, ofrecemos materiales de alta calidad que se adaptan a una amplia gama de aplicaciones, desde dispositivos
				electrónicos de consumo hasta diseños de alta frecuencia de vanguardia.
			</p>
		</div>
	</Layout>
{/if}
