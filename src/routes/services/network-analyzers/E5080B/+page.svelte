<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.networkAnalyzers;
	$: service = section.services.E5080B;
	$: l = section.l.specs;
	$: ({ builtInPorts, maxFrequency, internalSources, vnaSeries, vnaType } = service);
	$: specs = [
		{ title: l.builtInPorts, value: builtInPorts.join(', ') },
		{
			title: l.maxFrequency,
			value: maxFrequency < 1 ? `${maxFrequency * 1000} MHz` : `${maxFrequency} GHz`
		},
		{ title: l.internalSources, value: internalSources.join(', ') },
		{ title: l.vnaSeries, value: vnaSeries },
		{ title: l.vnaType, value: vnaType }
	];
</script>

<ServiceLayout {section} {service} {specs}>
	{#if lang === 'en'}
		<div class="text-center">Industry's Most Flexible and Integrated ENA Vector Network Analyzer</div>
		<div>
			Highly integrated devices require an RF and microwave measurement solution offering complete characterization. The
			Keysight E5080B vector network analyzer (VNA) provides R&D performance up to 53 GHz and advanced test flexibility.
			Dynamic range, trace noise, and temperature stability guarantee reliability and repeatability.
		</div>
		<div>
			The E5080B VNA enables complete device characterization for passive components, amplifiers, mixers, and frequency
			converters. Integrated DC sources, bias tees, pulse generators, pulse modulators, and an internal second source
			enable more measurements on one instrument. Gain deeper insights with software applications including spectrum
			analysis, mixer measurements, and noise figure.
		</div>
		<div>
			The E5080B utilizes the same measurement science as other Keysight vector network analyzers such as the PNA, PXI,
			and USB VNA. The common software platform makes it easy to balance measurement, performance, and budget needs.
			This commonality guarantees measurement consistency, repeatability, and a common remote programming interface
			across R&D and manufacturing instruments.
		</div>
		<ul class="list-disc pl-6">
			<li>Choose either a 2- or 4-port option</li>
			<li>Select a frequency range from 9 kHz to 4.5/6.5/9/14/20 GHz or 100 kHz to 26.5/32/44/53 GHz</li>
			<li>
				Achieve complete device characterization with optional built-in DC sources, bias tees, pulse generators and
				pulse modulators
			</li>
			<li>Capture device performance with a wide dynamic range of 140 dB</li>
			<li>
				Test from R&D through production with confidence using the same UI and SCPI commands as high-end PNA network
				analyzers
			</li>
			<li>
				Improve throughput using spectrum analysis, pulsed-RF measurements, vector mixer measurements, noise figure, and
				more software applications on a single instrument
			</li>
		</ul>
	{:else if lang === 'zh'}
		<div class="text-center">业界最灵活和集成的ENA矢量网络分析仪</div>
		<div>
			高度集成的设备需要提供全面表征的射频和微波测量解决方案。Keysight E5080B矢量网络分析仪（VNA）提供高达53
			GHz的研发性能和先进的测试灵活性。 动态范围、迹线噪声和温度稳定性保证了可靠性和可重复性。
		</div>
		<div>
			E5080B
			VNA能够对无源元件、放大器、混频器和频率转换器进行全面表征。集成的直流源、偏置T、脉冲发生器、脉冲调制器和内部第二源
			使得在一台仪器上进行更多测量成为可能。通过包括频谱分析、混频器测量和噪声系数在内的软件应用获得更深入的洞察。
		</div>
		<div>
			E5080B采用与其他Keysight矢量网络分析仪（如PNA、PXI和USB
			VNA）相同的测量科学。通用的软件平台使得在测量、性能和预算需求之间实现平衡变得容易。
			这种共性保证了测量的一致性、可重复性，以及跨研发和制造仪器的通用远程编程接口。
		</div>
		<ul class="list-disc pl-6">
			<li>选择2端口或4端口选项</li>
			<li>选择9 kHz至4.5/6.5/9/14/20 GHz或100 kHz至26.5/32/44/53 GHz的频率范围</li>
			<li>通过可选的内置直流源、偏置T、脉冲发生器和脉冲调制器实现完整的设备表征</li>
			<li>以140 dB的宽动态范围捕获设备性能</li>
			<li>使用与高端PNA网络分析仪相同的UI和SCPI命令，从研发到生产信心满满地进行测试</li>
			<li>通过单台仪器上的频谱分析、脉冲射频测量、矢量混频器测量、噪声系数等软件应用提高吞吐量</li>
		</ul>
	{:else if lang === 'fr'}
		<div class="text-center">Analyseur de Réseau Vectoriel ENA le Plus Flexible et Intégré du Secteur</div>
		<div>
			Les dispositifs hautement intégrés nécessitent une solution de mesure RF et micro-ondes offrant une
			caractérisation complète. L'analyseur de réseau vectoriel (VNA) Keysight E5080B offre des performances R&D allant
			jusqu'à 53 GHz et une flexibilité avancée des tests. La plage dynamique, le bruit de trace et la stabilité de la
			température garantissent fiabilité et répétabilité.
		</div>
		<div>
			Le VNA E5080B permet une caractérisation complète des dispositifs pour les composants passifs, amplificateurs,
			mélangeurs et convertisseurs de fréquence. Les sources DC intégrées, les T de polarisation, les générateurs
			d'impulsions, les modulateurs d'impulsions et une seconde source interne permettent d'effectuer davantage de
			mesures sur un seul instrument. Obtenez des informations plus approfondies grâce aux applications logicielles, y
			compris l'analyse spectrale, les mesures de mélangeurs et le facteur de bruit.
		</div>
		<div>
			Le E5080B utilise la même science de mesure que les autres analyseurs de réseau vectoriels Keysight tels que le
			PNA, le PXI et le USB VNA. La plateforme logicielle commune facilite l'équilibrage des besoins de mesure, de
			performance et de budget. Cette communité garantit une cohérence, une répétabilité des mesures et une interface de
			programmation à distance commune à travers les instruments de R&D et de production.
		</div>
		<ul class="list-disc pl-6">
			<li>Choisissez une option à 2 ou 4 ports</li>
			<li>Sélectionnez une plage de fréquences de 9 kHz à 4.5/6.5/9/14/20 GHz ou 100 kHz à 26.5/32/44/53 GHz</li>
			<li>
				Obtenez une caractérisation complète des dispositifs grâce aux sources DC intégrées, aux T de polarisation, aux
				générateurs d'impulsions et aux modulateurs d'impulsions en option
			</li>
			<li>Capturez les performances des dispositifs avec une large plage dynamique de 140 dB</li>
			<li>
				Testez avec confiance de la R&D à la production en utilisant la même interface utilisateur et les mêmes
				commandes SCPI que les analyseurs de réseau PNA haut de gamme
			</li>
			<li>
				Améliorez le débit grâce aux applications logicielles d'analyse spectrale, de mesures RF pulsées, de mesure de
				mélangeurs vectoriels, de facteur de bruit, et plus encore sur un seul instrument
			</li>
		</ul>
	{:else}
		<div class="text-center">El Analizador de Red Vectorial ENA Más Flexible e Integrado de la Industria</div>
		<div>
			Los dispositivos altamente integrados requieren una solución de medición RF y de microondas que ofrezca una
			caracterización completa. El analizador de red vectorial (VNA) Keysight E5080B proporciona un rendimiento de I+D
			de hasta 53 GHz y una flexibilidad avanzada en pruebas. El rango dinámico, el ruido de traza y la estabilidad de
			temperatura garantizan confiabilidad y repetibilidad.
		</div>
		<div>
			El E5080B VNA permite una caracterización completa de dispositivos para componentes pasivos, amplificadores,
			mezcladores y convertidores de frecuencia. Las fuentes de DC integradas, tees de polarización, generadores de
			pulsos, moduladores de pulsos y una segunda fuente interna permiten realizar más mediciones en un solo
			instrumento. Obtenga información más profunda con aplicaciones de software que incluyen análisis espectral,
			mediciones de mezcladores y figura de ruido.
		</div>
		<div>
			El E5080B utiliza la misma ciencia de medición que otros analizadores de red vectorial Keysight como el PNA, PXI y
			USB VNA. La plataforma de software común facilita equilibrar las necesidades de medición, rendimiento y
			presupuesto. Esta comunión garantiza consistencia y repetibilidad en las mediciones, así como una interfaz de
			programación remota común en instrumentos de I+D y producción.
		</div>
		<ul class="list-disc pl-6">
			<li>Elija una opción de 2 o 4 puertos</li>
			<li>Seleccione un rango de frecuencias de 9 kHz a 4.5/6.5/9/14/20 GHz o de 100 kHz a 26.5/32/44/53 GHz</li>
			<li>
				Logre una caracterización completa del dispositivo con fuentes de DC integradas opcionales, tees de
				polarización, generadores de pulsos y moduladores de pulsos
			</li>
			<li>Capture el rendimiento del dispositivo con un amplio rango dinámico de 140 dB</li>
			<li>
				Realice pruebas desde I+D hasta la producción con confianza utilizando la misma interfaz de usuario y los mismos
				comandos SCPI que los analizadores de red PNA de gama alta
			</li>
			<li>
				Mejore el rendimiento utilizando análisis espectral, mediciones de RF pulsado, mediciones de mezcladores
				vectoriales, figura de ruido y más aplicaciones de software en un solo instrumento
			</li>
		</ul>
	{/if}
</ServiceLayout>
