<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.oscilloscopes;
	$: service = section.services.DSOS804A;
	$: l = section.l.specs;
	$: ({ bandwidth, maxMemoryDepth, maxSampleRate, type } = service);
	$: specs = [
		{
			title: l.bandwidth,
			value: bandwidth < 1 ? bandwidth * 1000 + ' MHz' : bandwidth + ' GHz'
		},
		{ title: l.maxMemoryDepth, value: maxMemoryDepth + ' Mpts' },
		{ title: l.maxSampleRate, value: maxSampleRate + ' GSa/s' },
		{ title: l.type, value: type ?? 'N/A' }
	];
</script>

<ServiceLayout {section} {service} {specs}>
	{#if lang === 'en'}
		<ul class="list-disc pl-6">
			<li>8 GHz bandwidth</li>
			<li>4 analog channels</li>
			<li>Achieve up to 16 bits of vertical resolution with our advanced system architecture</li>
			<li>Capture a longer signal trace with 20 GSa/s maximum sample rate and 100 Mpts/channel of standard memory</li>
			<li>
				Get superior signal integrity with an average system effective number of bits (ENOB) of 8.1 bits at full
				bandwidth
			</li>
			<li>
				Gain increased usability with the multi-touch supported 15-inch capacitive touch screen and solid state drive
				for fast boot and reliability
			</li>
			<li>Improve your testing with a wide range of protocol, compliance, and analysis software</li>
		</ul>
		<div>
			What's included:
			<ul class="list-disc pl-6">
				<li>Four N2873A 500-MHz passive probes</li>
				<li>Probe accessory pouch</li>
				<li>Keysight I/O libraries suite</li>
				<li>Localized power cord, front panel cover</li>
				<li>8 GHz BNC calibration cable</li>
				<li>Keyboard and mouse</li>
				<li>User guide and programmer’s guide ship on oscilloscope drive</li>
				<li>Service guide available on Keysight.com</li>
				<li>Download BenchVue Basic app for free to control your instruments</li>
			</ul>
		</div>
	{:else if lang === 'zh'}
		<ul class="list-disc pl-6">
			<li>8 GHz带宽</li>
			<li>4个模拟通道</li>
			<li>通过我们先进的系统架构实现高达16位的垂直分辨率</li>
			<li>以20 GSa/s的最大采样率和每通道100 Mpts的标准内存捕获更长的信号轨迹</li>
			<li>在全带宽下获得8.1位的平均系统有效位数（ENOB），从而实现卓越的信号完整性</li>
			<li>通过支持多点触控的15英寸电容式触摸屏和固态硬盘实现更高的可用性，快速启动并提高可靠性</li>
			<li>通过广泛的协议、合规性和分析软件提高测试性能</li>
		</ul>
		<div>
			包含内容：
			<ul class="list-disc pl-6">
				<li>四个N2873A 500-MHz被动探头</li>
				<li>探头配件袋</li>
				<li>Keysight I/O库套件</li>
				<li>本地化电源线，前面板盖</li>
				<li>8 GHz BNC校准电缆</li>
				<li>键盘和鼠标</li>
				<li>用户指南和程序员指南存储在示波器驱动器上</li>
				<li>在Keysight.com上可获得服务指南</li>
				<li>免费下载BenchVue Basic应用程序以控制仪器</li>
			</ul>
		</div>
	{:else if lang === 'fr'}
		<ul class="list-disc pl-6">
			<li>Bande passante de 8 GHz</li>
			<li>4 canaux analogiques</li>
			<li>Atteignez jusqu'à 16 bits de résolution verticale grâce à notre architecture système avancée</li>
			<li>
				Capturez une trace de signal plus longue avec un taux d'échantillonnage maximum de 20 GSa/s et 100 Mpts/canal de
				mémoire standard
			</li>
			<li>
				Obtenez une intégrité du signal supérieure avec un nombre moyen de bits efficaces (ENOB) de 8,1 bits à pleine
				bande passante
			</li>
			<li>
				Améliorez l'utilisabilité avec un écran tactile capacitif de 15 pouces prenant en charge le multi-touch et un
				disque SSD pour un démarrage rapide et une fiabilité accrue
			</li>
			<li>Améliorez vos tests grâce à une large gamme de logiciels de protocole, de conformité et d'analyse</li>
		</ul>
		<div>
			Contenu inclus :
			<ul class="list-disc pl-6">
				<li>Quatre sondes passives N2873A 500 MHz</li>
				<li>Pochette d'accessoires pour sonde</li>
				<li>Suite de bibliothèques E/S Keysight</li>
				<li>Cordon d'alimentation localisé, couvercle de panneau avant</li>
				<li>Câble de calibration BNC 8 GHz</li>
				<li>Clavier et souris</li>
				<li>Guide d'utilisation et guide du programmeur inclus dans le disque de l'oscilloscope</li>
				<li>Guide de service disponible sur Keysight.com</li>
				<li>Téléchargez gratuitement l'application BenchVue Basic pour contrôler vos instruments</li>
			</ul>
		</div>
	{:else}
		<ul class="list-disc pl-6">
			<li>Ancho de banda de 8 GHz</li>
			<li>4 canales analógicos</li>
			<li>Logre hasta 16 bits de resolución vertical con nuestra arquitectura de sistema avanzada</li>
			<li>
				Capture una traza de señal más larga con una tasa de muestreo máxima de 20 GSa/s y 100 Mpts/canal de memoria
				estándar
			</li>
			<li>
				Obtenga una integridad de señal superior con un número promedio de bits efectivos (ENOB) del sistema de 8.1 bits
				a ancho de banda completo
			</li>
			<li>
				Aumente la usabilidad con la pantalla táctil capacitiva de 15 pulgadas compatible con multitouch y la unidad de
				estado sólido para un arranque rápido y mayor confiabilidad
			</li>
			<li>Mejore sus pruebas con una amplia gama de software de protocolo, cumplimiento y análisis</li>
		</ul>
		<div>
			¿Qué incluye?:
			<ul class="list-disc pl-6">
				<li>Cuatro sondas pasivas N2873A de 500 MHz</li>
				<li>Bolsa de accesorios para sonda</li>
				<li>Suite de bibliotecas de E/S de Keysight</li>
				<li>Cable de alimentación localizado, cubierta del panel frontal</li>
				<li>Cable de calibración BNC de 8 GHz</li>
				<li>Teclado y ratón</li>
				<li>Guía del usuario y guía del programador almacenadas en el disco del osciloscopio</li>
				<li>Guía de servicio disponible en Keysight.com</li>
				<li>Descargue la aplicación BenchVue Basic de forma gratuita para controlar sus instrumentos</li>
			</ul>
		</div>
	{/if}
</ServiceLayout>
