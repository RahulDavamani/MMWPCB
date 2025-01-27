<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.oscilloscopes;
	$: service = section.services.HD304MSO;
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
			<li>Experience bandwidths from 200 MHz to 1 GHz and four analog channels.</li>
			<li>
				Increase vertical resolution by four times with the 14-bit analog-to-digital converter (ADC) versus a 12-bit
				ADC.
			</li>
			<li>View and analyze your signals easily with the 10.1-inch capacitive touch screen.</li>
			<li>See smaller signals with a 50 µVRMS noise floor.</li>
			<li>Isolate signals in seconds with exclusive zone triggering.</li>
			<li>See more signal detail with the uncompromised 1.3 M waveform / second update rate.</li>
			<li>Benefit from all-new custom technology optimized for oscilloscope measurements.</li>
			<li>Capture more data with up to 100 Mpts memory.</li>
			<li>
				Experience a brand-new user interface with advanced capabilities, including split grids and bandwidth-limiting
				options.
			</li>
			<li>
				Expand your measurement capabilities with full upgradability; add bandwidth, system upgrades, and advanced
				application software at any time.
			</li>
		</ul>
		<div>
			What's included:
			<ul class="list-disc pl-6">
				<li>Keysight InfiniiVision HD3 Series oscilloscopes with four analog channels</li>
				<li>four-pack of 500 MHz passive probes</li>
				<li>Fault Hunter</li>
				<li>frequency response analysis</li>
				<li>zone triggering</li>
				<li>segmented memory</li>
				<li>MSO license (compatible with 3000A / T / G and 4000A / G X-Series MSO cables)</li>
				<li>mask testing</li>
				<li>waveform and measurement histograms and fast Fourier transform</li>
				<li>KeysightCare technical support</li>
				<li>three-year factory warranty</li>
				<li>localized power cord, interface, and front-panel overlay</li>
			</ul>
		</div>
	{:else if lang === 'zh'}
		<ul class="list-disc pl-6">
			<li>体验200 MHz到1 GHz的带宽和四个模拟通道。</li>
			<li>通过14位模数转换器（ADC）相比12位ADC，垂直分辨率提高四倍。</li>
			<li>使用10.1英寸电容式触摸屏轻松查看和分析信号。</li>
			<li>通过50 µVRMS噪声底限看到更小的信号。</li>
			<li>通过独特的区域触发功能在几秒内隔离信号。</li>
			<li>通过无损的1.3 M波形/秒更新速率查看更多信号细节。</li>
			<li>受益于为示波器测量优化的全新自定义技术。</li>
			<li>使用高达100 Mpts的内存捕获更多数据。</li>
			<li>体验全新的用户界面，具有高级功能，包括分屏网格和带宽限制选项。</li>
			<li>通过完全可升级性扩展测量能力；可随时添加带宽、系统升级和高级应用软件。</li>
		</ul>
		<div>
			包含内容：
			<ul class="list-disc pl-6">
				<li>Keysight InfiniiVision HD3系列示波器，带有四个模拟通道</li>
				<li>四个500 MHz被动探头</li>
				<li>故障猎人</li>
				<li>频率响应分析</li>
				<li>区域触发</li>
				<li>分段内存</li>
				<li>MSO许可证（兼容3000A / T / G和4000A / G X系列MSO电缆）</li>
				<li>掩模测试</li>
				<li>波形和测量直方图及快速傅里叶变换</li>
				<li>KeysightCare技术支持</li>
				<li>三年出厂保修</li>
				<li>本地化电源线、界面和前面板覆盖</li>
			</ul>
		</div>
	{:else if lang === 'fr'}
		<ul class="list-disc pl-6">
			<li>Profitez de bandes passantes de 200 MHz à 1 GHz et de quatre canaux analogiques.</li>
			<li>
				Augmentez la résolution verticale par quatre avec le convertisseur analogique-numérique (ADC) 14 bits par
				rapport à un ADC 12 bits.
			</li>
			<li>Visualisez et analysez vos signaux facilement avec l'écran tactile capacitif de 10,1 pouces.</li>
			<li>Observez des signaux plus faibles avec un plancher de bruit de 50 µVRMS.</li>
			<li>Isoler les signaux en quelques secondes grâce au déclenchement par zone exclusif.</li>
			<li>
				Voyez plus de détails sur les signaux grâce à la fréquence de mise à jour inégalée de 1,3 M formes
				d'onde/seconde.
			</li>
			<li>Bénéficiez de nouvelles technologies sur mesure optimisées pour les mesures d'oscilloscope.</li>
			<li>Capturez plus de données avec une mémoire allant jusqu'à 100 Mpts.</li>
			<li>
				Découvrez une toute nouvelle interface utilisateur avec des capacités avancées, y compris des grilles divisées
				et des options de limitation de bande passante.
			</li>
			<li>
				Étendez vos capacités de mesure grâce à une évolutivité complète : ajoutez de la bande passante, des mises à
				jour système et des logiciels d'application avancés à tout moment.
			</li>
		</ul>
		<div>
			Comprend :
			<ul class="list-disc pl-6">
				<li>Oscilloscopes Keysight InfiniiVision HD3 Series avec quatre canaux analogiques</li>
				<li>Pack de quatre sondes passives de 500 MHz</li>
				<li>Fault Hunter</li>
				<li>Analyse de réponse en fréquence</li>
				<li>Déclenchement par zone</li>
				<li>Mémoire segmentée</li>
				<li>Licence MSO (compatible avec les câbles MSO des séries 3000A / T / G et 4000A / G X)</li>
				<li>Test de masque</li>
				<li>Histogrammes de formes d'onde et de mesures, et transformée de Fourier rapide</li>
				<li>Support technique KeysightCare</li>
				<li>Garantie usine de trois ans</li>
				<li>Cordon d'alimentation, interface et panneau avant localisés</li>
			</ul>
		</div>
	{:else}
		<ul class="list-disc pl-6">
			<li>Experimente anchos de banda de 200 MHz a 1 GHz y cuatro canales analógicos.</li>
			<li>
				Aumente la resolución vertical cuatro veces con el convertidor analógico-digital (ADC) de 14 bits en comparación
				con un ADC de 12 bits.
			</li>
			<li>Vea y analice sus señales fácilmente con la pantalla táctil capacitiva de 10,1 pulgadas.</li>
			<li>Vea señales más pequeñas con un nivel de ruido de 50 µVRMS.</li>
			<li>Aisle señales en segundos con el disparo por zona exclusivo.</li>
			<li>
				Vea más detalles de la señal con la velocidad de actualización sin compromisos de 1,3 M formas de onda/segundo.
			</li>
			<li>Benefíciese de tecnología personalizada completamente nueva optimizada para mediciones de osciloscopio.</li>
			<li>Capture más datos con hasta 100 Mpts de memoria.</li>
			<li>
				Experimente una interfaz de usuario completamente nueva con capacidades avanzadas, que incluyen cuadrículas
				divididas y opciones de limitación de ancho de banda.
			</li>
			<li>
				Amplíe sus capacidades de medición con una capacidad de actualización completa; agregue ancho de banda,
				actualizaciones del sistema y software de aplicaciones avanzadas en cualquier momento.
			</li>
		</ul>
		<div>
			¿Qué está incluido?:
			<ul class="list-disc pl-6">
				<li>Osciloscopios Keysight InfiniiVision HD3 Series con cuatro canales analógicos</li>
				<li>Paquete de cuatro sondas pasivas de 500 MHz</li>
				<li>Fault Hunter</li>
				<li>Análisis de respuesta de frecuencia</li>
				<li>Disparo por zona</li>
				<li>Memoria segmentada</li>
				<li>Licencia MSO (compatible con cables MSO de las series 3000A / T / G y 4000A / G X)</li>
				<li>Pruebas de máscara</li>
				<li>Histograma de formas de onda y mediciones, y transformada rápida de Fourier</li>
				<li>Soporte técnico KeysightCare</li>
				<li>Garantía de fábrica de tres años</li>
				<li>Cable de alimentación, interfaz y superposición de panel frontal localizados</li>
			</ul>
		</div>
	{/if}
</ServiceLayout>
