<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.networkAnalyzers;
	$: service = section.services.N5291A;
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
		<div>
			The N5291A system comes preconfigured and operates from 900 Hz to 120 GHz and it includes five different options.
			Each option below comes with either a 2- or 4-port PNA or PNA-X, the N5292A millimeter wave test set controller
			for 2- or 4-port measurements, and the N5295AX03 120 GHz frequency extenders. The system includes all the
			interconnect cables required to connect the PNA or PNA-X to the controller.
		</div>
		<ul class="list-disc pl-6">
			<li>single-sweep solution with compact frequency extenders</li>
			<li>accurate leveled power gives you the ability to sweep power</li>
			<li>various software applications available for detailed analysis</li>
			<li>one product solution</li>
		</ul>
	{:else if lang === 'zh'}
		<div>
			N5291A系统预配置并运行在900 Hz至120 GHz的范围内，包含五种不同的选项。
			每个选项均包括2或4端口的PNA或PNA-X、用于2或4端口测量的N5292A毫米波测试集控制器，以及N5295AX03 120 GHz频率扩展器。
			系统包含所有连接PNA或PNA-X与控制器所需的互连电缆。
		</div>
		<ul class="list-disc pl-6">
			<li>配备紧凑型频率扩展器的单次扫描解决方案</li>
			<li>精确的功率调节支持功率扫描</li>
			<li>多种软件应用可用于详细分析</li>
			<li>一体化产品解决方案</li>
		</ul>
	{:else if lang === 'fr'}
		<div>
			Le système N5291A est préconfiguré et fonctionne de 900 Hz à 120 GHz et inclut cinq options différentes. Chaque
			option ci-dessous comprend soit un PNA ou PNA-X à 2 ou 4 ports, le contrôleur de banc de test onde millimétrique
			N5292A pour des mesures à 2 ou 4 ports, et les extensions de fréquence N5295AX03 120 GHz. Le système inclut tous
			les câbles d'interconnexion nécessaires pour connecter le PNA ou le PNA-X au contrôleur.
		</div>
		<ul class="list-disc pl-6">
			<li>solution de balayage unique avec des extensions de fréquence compactes</li>
			<li>puissance calibrée précise offrant la possibilité de balayer la puissance</li>
			<li>diverses applications logicielles disponibles pour une analyse détaillée</li>
			<li>solution produit unique</li>
		</ul>
	{:else}
		<div>
			El sistema N5291A viene preconfigurado y funciona desde 900 Hz hasta 120 GHz e incluye cinco opciones diferentes.
			Cada opción a continuación incluye un PNA o PNA-X de 2 o 4 puertos, el controlador de pruebas de ondas
			milimétricas N5292A para mediciones de 2 o 4 puertos, y los extensores de frecuencia de 120 GHz N5295AX03. El
			sistema incluye todos los cables de interconexión necesarios para conectar el PNA o PNA-X al controlador.
		</div>
		<ul class="list-disc pl-6">
			<li>solución de barrido único con extensores de frecuencia compactos</li>
			<li>potencia nivelada precisa que permite barrer la potencia</li>
			<li>diversas aplicaciones de software disponibles para análisis detallado</li>
			<li>solución de producto único</li>
		</ul>
	{/if}
</ServiceLayout>
