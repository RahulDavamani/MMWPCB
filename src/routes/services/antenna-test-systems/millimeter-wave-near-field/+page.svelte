<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.antennaTestSystems;
	$: service = section.services.millimeterWaveNearField;
	$: l = section.l.specs;
	$: ({ minFrequency, maxFrequency } = service);
	$: specs = [
		{
			title: l.frequency,
			value: `${minFrequency}GHz - ${maxFrequency}GHz`
		}
	];
</script>

<ServiceLayout {section} {service} {specs}>
	{#if lang === 'en'}
		<div class="font-semibold">Antenna Near Field (75-110GHz) Testing System Configuration:</div>
		<div class="font-semibold mt-2">Chamber: <span class="font-normal">75GHz - 110GHz</span></div>
		<div class="font-semibold mt-2">Test Equipment:</div>
		<ul class="list-disc pl-6">
			<li>Vector Network Analyzer (VNA)：10 MHz – 26.5 GHz</li>
			<li>Millimeter-Wave Frequency Extension:75 GHz – 110 GHz</li>
			<li>Receive Probe: 75 GHz – 110 GHz</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Frequency Range (GHz)</th>
						<td class="border">75 – 110</td>
					</tr>
					<tr>
						<th class="border">Supported Polarizations</th>
						<td class="border">Linear, Circular</td>
					</tr>
					<tr>
						<th class="border">Radiation Pattern Display Range (degree)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Maximum Antenna Aperture (m)</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">Pattern Coordinate Types</th>
						<td class="border">Rectangular, Polar</td>
					</tr>
					<tr>
						<th class="border">Planar Scanning</th>
						<td class="border">
							• Width Range: 0.9 m<br />
							• Height Range: 0.9 m<br />
							• Depth Range (Front-Back): 0.58 m (manually extendable to 0.85 m)
						</td>
					</tr>
					<tr>
						<th class="border">Cylindrical Scanning</th>
						<td class="border">
							• Maximum Scan Radius: 0.86 m<br />
							• Height Range: 0.9 m<br />
							• AUT Horizontal Rotation: 360°
						</td>
					</tr>
					<tr>
						<th class="border">Spherical Scanning</th>
						<td class="border">
							• Maximum Scan Radius: 0.86 m<br />
							• AUT Horizontal Rotation: 360°<br />
							• AUT Vertical Rotation: 360°
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if lang === 'zh'}
		<div class="font-semibold">天线近场（75-110GHz）测试系统配置：</div>
		<div class="font-semibold mt-2">暗室：<span class="font-normal">75GHz - 110GHz</span></div>
		<div class="font-semibold mt-2">测试设备：</div>
		<ul class="list-disc pl-6">
			<li>矢量网络分析仪（VNA）：10 MHz – 26.5 GHz</li>
			<li>毫米波频率扩展器：75 GHz – 110 GHz</li>
			<li>接收探头：75 GHz – 110 GHz</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">频率范围 (GHz)</th>
						<td class="border">75 – 110</td>
					</tr>
					<tr>
						<th class="border">支持的极化方式</th>
						<td class="border">线极化、圆极化</td>
					</tr>
					<tr>
						<th class="border">辐射方向图显示范围 (度)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">最大天线口径 (米)</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">方向图坐标类型</th>
						<td class="border">直角坐标、极坐标</td>
					</tr>
					<tr>
						<th class="border">平面扫描</th>
						<td class="border">
							• 宽度范围：0.9 米<br />
							• 高度范围：0.9 米<br />
							• 深度范围（前后）：0.58 米（可手动扩展至 0.85 米）
						</td>
					</tr>
					<tr>
						<th class="border">圆柱扫描</th>
						<td class="border">
							• 最大扫描半径：0.86 米<br />
							• 高度范围：0.9 米<br />
							• 被测天线水平旋转：360°
						</td>
					</tr>
					<tr>
						<th class="border">球面扫描</th>
						<td class="border">
							• 最大扫描半径：0.86 米<br />
							• 被测天线水平旋转：360°<br />
							• 被测天线垂直旋转：360°
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if lang === 'fr'}
		<div class="font-semibold">Configuration du système de test en champ proche d'antenne (75-110GHz) :</div>
		<div class="font-semibold mt-2">Chambre : <span class="font-normal">75GHz - 110GHz</span></div>
		<div class="font-semibold mt-2">Équipements de test :</div>
		<ul class="list-disc pl-6">
			<li>Analyseur de réseau vectoriel (VNA) : 10 MHz – 26.5 GHz</li>
			<li>Extension de fréquence millimétrique : 75 GHz – 110 GHz</li>
			<li>Sonde de réception : 75 GHz – 110 GHz</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Plage de fréquence (GHz)</th>
						<td class="border">75 – 110</td>
					</tr>
					<tr>
						<th class="border">Polarisations prises en charge</th>
						<td class="border">Linéaire, Circulaire</td>
					</tr>
					<tr>
						<th class="border">Plage d'affichage du diagramme de rayonnement (degrés)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Ouverture maximale de l'antenne (m)</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">Types de coordonnées du diagramme</th>
						<td class="border">Rectangulaire, Polaire</td>
					</tr>
					<tr>
						<th class="border">Balayage planaire</th>
						<td class="border">
							• Plage de largeur : 0.9 m<br />
							• Plage de hauteur : 0.9 m<br />
							• Plage de profondeur (avant-arrière) : 0.58 m (extensible manuellement à 0.85 m)
						</td>
					</tr>
					<tr>
						<th class="border">Balayage cylindrique</th>
						<td class="border">
							• Rayon de balayage maximal : 0.86 m<br />
							• Plage de hauteur : 0.9 m<br />
							• Rotation horizontale de l’AUT : 360°
						</td>
					</tr>
					<tr>
						<th class="border">Balayage sphérique</th>
						<td class="border">
							• Rayon de balayage maximal : 0.86 m<br />
							• Rotation horizontale de l’AUT : 360°<br />
							• Rotation verticale de l’AUT : 360°
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else}
		<div class="font-semibold">Configuración del sistema de prueba de campo cercano de antena (75-110GHz):</div>
		<div class="font-semibold mt-2">Cámara: <span class="font-normal">75GHz - 110GHz</span></div>
		<div class="font-semibold mt-2">Equipo de prueba:</div>
		<ul class="list-disc pl-6">
			<li>Analizador de redes vectoriales (VNA): 10 MHz – 26.5 GHz</li>
			<li>Extensión de frecuencia de onda milimétrica: 75 GHz – 110 GHz</li>
			<li>Sonda receptora: 75 GHz – 110 GHz</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Rango de frecuencia (GHz)</th>
						<td class="border">75 – 110</td>
					</tr>
					<tr>
						<th class="border">Polarizaciones admitidas</th>
						<td class="border">Lineal, Circular</td>
					</tr>
					<tr>
						<th class="border">Rango de visualización del patrón de radiación (grados)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Apertura máxima de la antena (m)</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">Tipos de coordenadas del patrón</th>
						<td class="border">Rectangulares, Polares</td>
					</tr>
					<tr>
						<th class="border">Escaneo planar</th>
						<td class="border">
							• Rango de ancho: 0.9 m<br />
							• Rango de altura: 0.9 m<br />
							• Rango de profundidad (frontal-trasero): 0.58 m (extensible manualmente a 0.85 m)
						</td>
					</tr>
					<tr>
						<th class="border">Escaneo cilíndrico</th>
						<td class="border">
							• Radio máximo de escaneo: 0.86 m<br />
							• Rango de altura: 0.9 m<br />
							• Rotación horizontal del AUT: 360°
						</td>
					</tr>
					<tr>
						<th class="border">Escaneo esférico</th>
						<td class="border">
							• Radio máximo de escaneo: 0.86 m<br />
							• Rotación horizontal del AUT: 360°<br />
							• Rotación vertical del AUT: 360°
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	{/if}
</ServiceLayout>
