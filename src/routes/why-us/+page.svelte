<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import CapabilitiesBanner from '$lib/assets/capabilities-banner.png';
	import HigherQuality from '$lib/assets/why-us/higher-quality.jpg';
	import LowerCost from '$lib/assets/why-us/lower-cost.png';
	import FasterDelivery from '$lib/assets/why-us/faster-delivery.png';
	import { i18n } from '../../stores/i18n.store';

	$: lang = $i18n.language;
</script>

{#if lang === 'en'}
	<Layout pageTitle="Why Us?">
		<div slot="top-main">
			<div style="background-color: #17191e;">
				<div class="container mx-auto flex justify-start items-center">
					<div class="absolute text-accent">
						<div class="font-semibold text-3xl mb-1">Welcome to MMWPCB</div>
						<div class="mb-2 max-w-lg">
							We produce reliable PCBs for customers with demanding needs. Get your quote in seconds, PCBs shipped in as
							fast as 1 day!
						</div>
					</div>
					<img src={CapabilitiesBanner} alt="Why Us Banner" />
				</div>
			</div>
		</div>

		<div class="text-lg">
			<div class="font-bold text-3xl text-primary mb-4">Faster One-stop Electronic Manufacturing</div>
			<div class="mb-2">
				MMWPCB works on building a one-stop industrial electronic platform, realizing digital PCBA processing by
				incorporating EDA, PCB, parts sourcing, and PCBA services. With increasing investment in innovation and digital
				system, we have been growing fast, and becoming a leading global PCB & PCBA manufacturer, providing the rapid
				production of high-reliability and cost-effective products.
			</div>

			<div class="grid grid-cols-4 mb-8">
				<div class="stat">
					<div class="stat-value text-secondary">31000+</div>
					<div class="stat-title">Orders/year</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">8400+</div>
					<div class="stat-title">Customers</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">180+</div>
					<div class="stat-title">Countries</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">24/7</div>
					<div class="stat-title">Online Service</div>
				</div>
			</div>

			<div class="font-bold text-3xl text-primary mb-4">Our Mission</div>
			<div>
				MMWPCB aims to accelerate hardware innovation by providing millions of enterprises, research institutes, and
				engineers with one-stop integrated electronic/mechanical service, including EDA software, PCB manufacturing, PCB
				Assembly, 3D Printing, and CNC Machining. MMWPCB empowers flexible manufacturing through the integration of
				digital technology, self-built order platform, automated production, and intelligent warehousing. This enables
				us to meet customer demands for prototypes, small batch production, and the "fast delivery, high quality,
				customization, one-stop" experience.
			</div>

			<div class="flex items-center gap-10 my-4">
				<img src={HigherQuality} alt="Higher Quality" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">Higher Quality</div>
					<div>
						Ensuring quality and its consistent improvement are the two main guidelines of our company. Our advanced PCB
						technology allows us to provide high precision boards suitable for industrial, military, aerospace, and
						medical applications. We are continuously investing top-level base materials and advanced equipments for
						fully automated production lines, which enables us to offer our customers high throughput with consistently
						high quality.
					</div>
				</div>
			</div>
			<div class="flex items-center gap-10 my-4">
				<div>
					<div class="text-2xl font-semibold mb-4">Lower Cost</div>
					<div>
						Since 2006, MMWPCB continuously driven to become more efficient and reduce costs. We promise to offer
						customers the most economic PCBs forever. MMWPCB makes cheapest but top quality PCBs possibly because of
						scale effect, extremely high production efficiency and less manpower cost.
					</div>
				</div>
				<img src={LowerCost} alt="Lower Cost" class="w-1/4" />
			</div>
			<div class="flex items-center gap-10 my-4">
				<img src={FasterDelivery} alt="Faster Delivery" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">Faster Delivery</div>
					<div>
						Our easy-to-use online ordering system, professional and efficient customer service, digital manufacturing
						technology, full-automatic production lines, and stable logistics partners make every step to deliver you
						PCBs faster.
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">No Minimum Requirements</div>
					<div class="text-base">
						You may order as small as 5pcs of PCB from us. We do not force you to buy what you do not need indeed to
						save your expenses.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Fair Pricing</div>
					<div class="text-base">
						Our pricing structure is transparent and has no hidden cost in it. Our price is one of the most competitive
						in the world and is just a fraction of what other American or European fabricators normally charge you. Even
						many price-sensitive customers like students and hobbyists largely rely on us for their PCB prototype,
						low-volume fabrication and assembly needs. We try our utmost to save you money and time.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Free DFM Check</div>
					<div class="text-base">
						All your orders will receive a free engineering file review service from our trained and professional
						technicians before you pay in the most timely manner.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">On-time Shipping</div>
					<div class="text-base">
						Through the years we are proud to have been keeping an on-time delivery rate of 99%. We work in three shifts
						to make sure your PCBs will be on your desk as scheduled and as early as possible. You may choose DHL and
						other courier services for a balance of speed and budget. We only use services from dependable and reputable
						companies.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Return and Refund</div>
					<div class="text-base">
						Dissatisfaction does occur from time to time. In case our PCB or assembled boards are not usable due to our
						fault, you can ask for compensation. We can refund to your account directly or credit your MMWPCB account,
						these credits are available to pay for your next orders with us. We can also rework the unusable boards or
						re-fabricate your PCB and re-ship to you at our cost, but please cooperate to solve the problem if need to
						rework.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">24 hours Customer Service</div>
					<div class="text-base">
						Whenever you have any problems, you can always reach to a live customer service person to respond to your
						emails or messages. Our service people will follow your orders from the time you submit your Gerber file to
						the minute you receive your PCB and assembled PCBs in a satisfactory mood.
					</div>
				</div>
			</div>
		</div>
	</Layout>
{:else if lang === 'zh'}
	<Layout pageTitle="为什么选择我们？">
		<div slot="top-main">
			<div style="background-color: #17191e;">
				<div class="container mx-auto flex justify-start items-center">
					<div class="absolute text-accent">
						<div class="font-semibold text-3xl mb-1">欢迎来到 MMWPCB</div>
						<div class="mb-2 max-w-lg">我们为需求严格的客户提供可靠的PCB产品。秒级获取报价，最快一天发货！</div>
						<div class="btn btn-sm btn-outline btn-accent">立即获取报价</div>
					</div>
					<img src={CapabilitiesBanner} alt="PCB功能横幅" />
				</div>
			</div>
		</div>

		<div class="text-lg">
			<div class="font-bold text-3xl text-primary mb-4">更快速的一站式电子制造</div>
			<div class="mb-2">
				MMWPCB
				专注于打造一站式工业电子平台，通过集成EDA、PCB、元器件采购和PCBA服务实现数字化PCBA加工。随着创新和数字系统的不断投入，我们快速发展，成为全球领先的PCB和PCBA制造商，提供高可靠性和高性价比的快速生产服务。
			</div>

			<div class="grid grid-cols-4 mb-8">
				<div class="stat">
					<div class="stat-value text-secondary">31000+</div>
					<div class="stat-title">每年订单量</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">8400+</div>
					<div class="stat-title">客户数量</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">180+</div>
					<div class="stat-title">覆盖国家</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">24/7</div>
					<div class="stat-title">在线服务</div>
				</div>
			</div>

			<div class="font-bold text-3xl text-primary mb-4">我们的使命</div>
			<div>
				MMWPCB
				旨在通过提供包括EDA软件、PCB制造、PCB组装、3D打印和CNC加工在内的一站式集成电子/机械服务，加速硬件创新。通过数字技术、订单平台、自建自动化生产和智能仓储的整合，我们实现了灵活的制造，满足客户对原型、小批量生产以及“快速交付、高质量、定制化、一站式”体验的需求。
			</div>

			<div class="flex items-center gap-10 my-4">
				<img src={HigherQuality} alt="更高质量" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">更高质量</div>
					<div>
						确保质量及其持续改进是我们公司的两大指导方针。我们的先进PCB技术使我们能够提供适用于工业、军事、航空航天和医疗应用的高精度电路板。我们不断投资顶级基材和先进设备，实现全自动化生产线，从而以高产出提供始终如一的高质量产品。
					</div>
				</div>
			</div>
			<div class="flex items-center gap-10 my-4">
				<div>
					<div class="text-2xl font-semibold mb-4">更低成本</div>
					<div>
						自2006年以来，MMWPCB
						一直致力于提高效率并降低成本。我们承诺始终为客户提供最经济的PCB。规模效应、极高的生产效率以及更低的人力成本使我们能够提供最便宜但高质量的PCB。
					</div>
				</div>
				<img src={LowerCost} alt="更低成本" class="w-1/4" />
			</div>
			<div class="flex items-center gap-10 my-4">
				<img src={FasterDelivery} alt="更快交付" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">更快交付</div>
					<div>
						我们易于使用的在线订购系统、专业高效的客户服务、数字制造技术、全自动生产线以及稳定的物流合作伙伴，让每一步都帮助您更快地收到PCB。
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">无最小起订量</div>
					<div class="text-base">
						您可以从我们这里订购最少5块PCB。我们不会强迫您购买不需要的东西，以帮助您节省开支。
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">公平定价</div>
					<div class="text-base">
						我们的定价结构透明且没有隐藏成本。我们的价格在全球具有竞争力，仅为许多其他美欧制造商的价格的一小部分。即使是价格敏感的客户，如学生和业余爱好者，也大量依赖我们满足其PCB原型、低批量制造和组装需求。我们竭尽全力为您节省时间和金钱。
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">免费DFM检查</div>
					<div class="text-base">所有订单在您支付前都会由我们的专业技术人员进行免费工程文件审核，确保及时处理。</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">准时发货</div>
					<div class="text-base">
						多年来，我们以99%的准时交付率为荣。我们实行三班倒工作制，确保您的PCB按时甚至提前送达。您可以选择DHL或其他快递服务，以平衡速度和预算。我们仅使用可靠和有信誉的公司提供服务。
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">退换货政策</div>
					<div class="text-base">
						若因我们的错误导致您的PCB或组装板无法使用，您可以申请赔偿。我们可以直接退款到您的账户或将金额存入您的 MMWPCB
						账户，以便用于后续订单。我们也可以重新加工或重新制造PCB并免费重新发货，但请配合解决问题。
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">24小时客户服务</div>
					<div class="text-base">
						无论何时遇到问题，您都可以随时联系到真人客服，回复您的邮件或消息。我们的服务人员将从您提交Gerber文件到您满意收到PCB和组装板的每一步，跟踪您的订单。
					</div>
				</div>
			</div>
		</div>
	</Layout>
{:else if lang === 'fr'}
	<Layout pageTitle="Pourquoi Nous Choisir ?">
		<div slot="top-main">
			<div style="background-color: #17191e;">
				<div class="container mx-auto flex justify-start items-center">
					<div class="absolute text-accent">
						<div class="font-semibold text-3xl mb-1">Bienvenue chez MMWPCB</div>
						<div class="mb-2 max-w-lg">
							Nous produisons des PCB fiables pour répondre aux besoins exigeants des clients. Obtenez votre devis en
							quelques secondes, avec une livraison en seulement 1 jour !
						</div>
						<div class="btn btn-sm btn-outline btn-accent">Obtenez un devis instantané</div>
					</div>
					<img src={CapabilitiesBanner} alt="Bannière des capacités PCB" />
				</div>
			</div>
		</div>

		<div class="text-lg">
			<div class="font-bold text-3xl text-primary mb-4">Fabrication Électronique Tout-en-un, Plus Rapide</div>
			<div class="mb-2">
				MMWPCB travaille à construire une plateforme électronique industrielle tout-en-un, intégrant EDA, PCB,
				approvisionnement en composants et services PCBA pour réaliser le traitement numérique des PCBA. Avec des
				investissements croissants dans l'innovation et les systèmes numériques, nous connaissons une croissance rapide
				et devenons un leader mondial dans la fabrication de PCB et PCBA, offrant des produits fiables, rapides et
				économiques.
			</div>

			<div class="grid grid-cols-4 mb-8">
				<div class="stat">
					<div class="stat-value text-secondary">31000+</div>
					<div class="stat-title">Commandes/an</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">8400+</div>
					<div class="stat-title">Clients</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">180+</div>
					<div class="stat-title">Pays</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">24/7</div>
					<div class="stat-title">Service en ligne</div>
				</div>
			</div>

			<div class="font-bold text-3xl text-primary mb-4">Notre Mission</div>
			<div>
				MMWPCB vise à accélérer l'innovation matérielle en fournissant aux entreprises, instituts de recherche et
				ingénieurs des services intégrés tout-en-un, incluant des logiciels EDA, la fabrication de PCB, l'assemblage de
				PCB, l'impression 3D et l'usinage CNC. En intégrant les technologies numériques, une plateforme de commandes,
				une production automatisée et un entrepôt intelligent, nous offrons une fabrication flexible pour répondre aux
				besoins de prototypes, de petites séries et d'expériences "rapide, haute qualité, personnalisée, tout-en-un".
			</div>

			<div class="flex items-center gap-10 my-4">
				<img src={HigherQuality} alt="Qualité Supérieure" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">Qualité Supérieure</div>
					<div>
						Garantir la qualité et son amélioration continue sont nos deux principes fondamentaux. Notre technologie
						avancée en PCB nous permet de fournir des cartes de haute précision adaptées aux applications industrielles,
						militaires, aérospatiales et médicales. Nous investissons continuellement dans des matériaux de base de haut
						niveau et des équipements avancés pour des lignes de production entièrement automatisées, garantissant ainsi
						un haut débit avec une qualité constante.
					</div>
				</div>
			</div>
			<div class="flex items-center gap-10 my-4">
				<div>
					<div class="text-2xl font-semibold mb-4">Coût Réduit</div>
					<div>
						Depuis 2006, MMWPCB s'efforce de devenir plus efficace et de réduire les coûts. Nous promettons d'offrir à
						nos clients les PCB les plus économiques. Grâce à l'effet d'échelle, une efficacité de production
						extrêmement élevée et des coûts de main-d'œuvre réduits, nous pouvons fournir les PCB les moins chers, mais
						de haute qualité.
					</div>
				</div>
				<img src={LowerCost} alt="Coût Réduit" class="w-1/4" />
			</div>
			<div class="flex items-center gap-10 my-4">
				<img src={FasterDelivery} alt="Livraison Plus Rapide" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">Livraison Plus Rapide</div>
					<div>
						Notre système de commande en ligne simple d'utilisation, notre service client professionnel et efficace,
						notre technologie de fabrication numérique, nos lignes de production automatisées et nos partenaires
						logistiques stables facilitent chaque étape pour vous livrer vos PCB plus rapidement.
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Pas de Quantité Minimale</div>
					<div class="text-base">
						Vous pouvez commander aussi peu que 5 pièces de PCB chez nous. Nous ne vous forçons pas à acheter ce dont
						vous n'avez pas besoin pour économiser vos dépenses.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Tarifs Équitables</div>
					<div class="text-base">
						Notre structure tarifaire est transparente et ne comporte aucun coût caché. Nos prix sont parmi les plus
						compétitifs au monde et représentent une fraction de ce que d'autres fabricants américains ou européens
						facturent habituellement. Même de nombreux clients sensibles aux prix, comme les étudiants et les amateurs,
						comptent sur nous pour leurs prototypes de PCB, la fabrication à faible volume et les besoins d'assemblage.
						Nous faisons tout notre possible pour vous faire économiser temps et argent.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Vérification DFM Gratuite</div>
					<div class="text-base">
						Toutes vos commandes bénéficieront d'un service gratuit de révision de fichiers d'ingénierie par nos
						techniciens formés et professionnels avant paiement.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Expédition à Temps</div>
					<div class="text-base">
						Au fil des ans, nous sommes fiers de maintenir un taux de livraison ponctuelle de 99 %. Nous travaillons en
						trois équipes pour garantir que vos PCB seront sur votre bureau comme prévu et le plus tôt possible. Vous
						pouvez choisir DHL et d'autres services de messagerie pour équilibrer vitesse et budget. Nous ne faisons
						appel qu'à des entreprises fiables et réputées.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Retour et Remboursement</div>
					<div class="text-base">
						Si nos PCB ou cartes assemblées sont inutilisables en raison de notre faute, vous pouvez demander une
						compensation. Nous pouvons rembourser directement votre compte ou créditer votre compte MMWPCB, ces crédits
						étant utilisables pour vos prochaines commandes chez nous. Nous pouvons également retravailler les cartes
						inutilisables ou les refabriquer et les réexpédier à nos frais, mais veuillez coopérer pour résoudre le
						problème si un retravail est nécessaire.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Service Client 24h/24</div>
					<div class="text-base">
						Chaque fois que vous rencontrez un problème, vous pouvez toujours contacter un service client en direct pour
						répondre à vos emails ou messages. Nos équipes suivront vos commandes depuis la soumission de votre fichier
						Gerber jusqu'à la réception de vos PCB et cartes assemblées avec satisfaction.
					</div>
				</div>
			</div>
		</div>
	</Layout>
{:else}
	<Layout pageTitle="¿Por Qué Nosotros?">
		<div slot="top-main">
			<div style="background-color: #17191e;">
				<div class="container mx-auto flex justify-start items-center">
					<div class="absolute text-accent">
						<div class="font-semibold text-3xl mb-1">Bienvenido a MMWPCB</div>
						<div class="mb-2 max-w-lg">
							Producimos PCB confiables para clientes con necesidades exigentes. Obtén tu cotización en segundos, con
							envío de PCB en tan solo 1 día.
						</div>
						<div class="btn btn-sm btn-outline btn-accent">Obtén Cotización Instantánea</div>
					</div>
					<img src={CapabilitiesBanner} alt="Banner de Capacidades de PCB" />
				</div>
			</div>
		</div>

		<div class="text-lg">
			<div class="font-bold text-3xl text-primary mb-4">Fabricación Electrónica Integral y Más Rápida</div>
			<div class="mb-2">
				MMWPCB trabaja para construir una plataforma electrónica industrial integral, integrando EDA, PCB, adquisición
				de componentes y servicios de PCBA para lograr un procesamiento digital de PCBA. Con inversiones crecientes en
				innovación y sistemas digitales, estamos creciendo rápidamente y convirtiéndonos en un líder global en la
				fabricación de PCB y PCBA, ofreciendo productos confiables, rápidos y rentables.
			</div>

			<div class="grid grid-cols-4 mb-8">
				<div class="stat">
					<div class="stat-value text-secondary">31000+</div>
					<div class="stat-title">Pedidos/año</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">8400+</div>
					<div class="stat-title">Clientes</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">180+</div>
					<div class="stat-title">Países</div>
				</div>
				<div class="stat">
					<div class="stat-value text-secondary">24/7</div>
					<div class="stat-title">Servicio en línea</div>
				</div>
			</div>

			<div class="font-bold text-3xl text-primary mb-4">Nuestra Misión</div>
			<div>
				MMWPCB tiene como objetivo acelerar la innovación en hardware al proporcionar a millones de empresas, institutos
				de investigación e ingenieros servicios electrónicos/mecánicos integrados y todo-en-uno, incluyendo software
				EDA, fabricación de PCB, ensamblaje de PCB, impresión 3D y mecanizado CNC. MMWPCB potencia la fabricación
				flexible mediante la integración de tecnología digital, una plataforma de pedidos propia, producción
				automatizada y almacenamiento inteligente. Esto nos permite satisfacer las demandas de los clientes para
				prototipos, producción en pequeñas series y una experiencia de "entrega rápida, alta calidad, personalización y
				todo-en-uno".
			</div>

			<div class="flex items-center gap-10 my-4">
				<img src={HigherQuality} alt="Mayor Calidad" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">Mayor Calidad</div>
					<div>
						Asegurar la calidad y su mejora continua son los dos principios principales de nuestra empresa. Nuestra
						tecnología avanzada en PCB nos permite proporcionar placas de alta precisión adecuadas para aplicaciones
						industriales, militares, aeroespaciales y médicas. Invertimos continuamente en materiales de base de alto
						nivel y equipos avanzados para líneas de producción completamente automatizadas, lo que nos permite ofrecer
						a nuestros clientes una alta producción con calidad constante.
					</div>
				</div>
			</div>
			<div class="flex items-center gap-10 my-4">
				<div>
					<div class="text-2xl font-semibold mb-4">Menor Costo</div>
					<div>
						Desde 2006, MMWPCB se esfuerza por ser más eficiente y reducir costos. Prometemos ofrecer a los clientes los
						PCB más económicos para siempre. Gracias al efecto de escala, una eficiencia de producción extremadamente
						alta y menores costos de mano de obra, logramos producir PCB económicos pero de alta calidad.
					</div>
				</div>
				<img src={LowerCost} alt="Menor Costo" class="w-1/4" />
			</div>
			<div class="flex items-center gap-10 my-4">
				<img src={FasterDelivery} alt="Entrega Más Rápida" class="w-1/4" />
				<div>
					<div class="text-2xl font-semibold mb-4">Entrega Más Rápida</div>
					<div>
						Nuestro sistema de pedidos en línea fácil de usar, el servicio al cliente profesional y eficiente, la
						tecnología de fabricación digital, las líneas de producción totalmente automatizadas y nuestros socios
						logísticos estables hacen que cada paso para entregarte tus PCB sea más rápido.
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10">
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Sin Requisitos Mínimos</div>
					<div class="text-base">
						Puedes pedir desde tan solo 5 unidades de PCB. No te obligamos a comprar lo que no necesitas, ayudándote a
						ahorrar.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Precios Justos</div>
					<div class="text-base">
						Nuestra estructura de precios es transparente y no tiene costos ocultos. Nuestros precios son de los más
						competitivos en el mundo y representan solo una fracción de lo que otros fabricantes en América o Europa
						suelen cobrar. Incluso muchos clientes sensibles al precio, como estudiantes y aficionados, confían en
						nosotros para sus prototipos de PCB, fabricación de bajo volumen y necesidades de ensamblaje. Hacemos todo
						lo posible por ahorrar tu dinero y tiempo.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Revisión DFM Gratuita</div>
					<div class="text-base">
						Todos tus pedidos recibirán un servicio gratuito de revisión de archivos de ingeniería por parte de nuestros
						técnicos capacitados y profesionales antes de realizar el pago.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Envío Puntual</div>
					<div class="text-base">
						A lo largo de los años, estamos orgullosos de mantener una tasa de entrega puntual del 99 %. Trabajamos en
						tres turnos para garantizar que tus PCB lleguen a tiempo. Puedes elegir DHL u otros servicios de mensajería
						para equilibrar velocidad y presupuesto. Solo usamos servicios de empresas confiables y reputadas.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Devolución y Reembolso</div>
					<div class="text-base">
						Si nuestros PCB o placas ensambladas no son utilizables debido a nuestro error, puedes solicitar una
						compensación. Podemos reembolsar directamente a tu cuenta o acreditar tu cuenta de MMWPCB, estos créditos
						estarán disponibles para pagar tus próximos pedidos con nosotros. También podemos volver a trabajar las
						placas inutilizables o volver a fabricarlas y enviarlas nuevamente a nuestro costo. Por favor, coopera para
						resolver el problema si es necesario un retrabajo.
					</div>
				</div>
				<div class="text-center">
					<div class="text-xl font-semibold mb-2">Atención al Cliente 24 Horas</div>
					<div class="text-base">
						Cada vez que tengas un problema, siempre puedes comunicarte con un servicio al cliente en vivo para
						responder a tus correos electrónicos o mensajes. Nuestro equipo seguirá tus pedidos desde la presentación de
						tu archivo Gerber hasta que recibas tus PCB y placas ensambladas de manera satisfactoria.
					</div>
				</div>
			</div>
		</div>
	</Layout>
{/if}
