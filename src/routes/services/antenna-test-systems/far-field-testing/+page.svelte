<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.antennaTestSystems;
	$: service = section.services.farFieldTesting;
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
		<div class="font-semibold">Antenna Far Field (0.6–50 GHz) Testing Function:</div>
		<ul class="list-disc pl-6">
			<li>
				Cylindrical/Planar Near-Far Field Transformation Function: Convert near-field amplitude-phase data to far-field
				radiation patterns
			</li>
			<li>Antenna Directivity: Coefficient calculation, antenna gain analysis</li>
			<li>Data Export Function: Export near-field measurement data and transformed far-field data</li>
			<li>
				Radiation Pattern Display Function: Supports rectangular and polar coordinate displays for 2D patterns, as well
				as 3D pattern intensity maps, contour plots, 3D surface plots, and polar sphere plots
			</li>
			<li>
				2D Pattern Analysis Function: Automatically provides main lobe position and level, side lobe position and level,
				n-dB beamwidth, null position and level, etc.
			</li>
			<li>
				Normalization Function: Normalize radiation patterns, supporting fixed-value normalization and
				self-normalization
			</li>
			<li>
				Multi-Curve Display Function: Simultaneous display and comparison of multiple radiation patterns and
				cross-sections
			</li>
			<li>
				Supports automatic loading of measurement data, pre-transformation data cropping, and transformation to multiple
				polarizations and far-field coordinate systems
			</li>
		</ul>

		<div class="font-semibold mt-4">Antenna Far Field (0.6–50 GHz) Testing System Configuration:</div>

		<div class="font-semibold mt-2">Chamber Dimensions:</div>
		<ul class="list-disc pl-6">
			<li>6m (L) × 3m (W) × 3m (H)</li>
		</ul>

		<div class="font-semibold mt-2">Test Equipment:</div>
		<ul class="list-disc pl-6">
			<li>Vector Network Analyzer (VNA)：600 MHz – 50 GHz</li>
			<li>Probe & Standard Horn Antenna</li>
		</ul>

		<div class="font-semibold mt-2">Mechanical Setup:</div>
		<ul class="list-disc pl-6">
			<li>4-Axis Positioner (Azimuth, Elevation, Polarization; Repeatability ≤ 0.1°)</li>
			<li>4-Axis Scanner (X, Z, Y-axis repeatability: 0.05 mm; P-axis repeatability: 0.1°)</li>
			<li>Scanner Controller</li>
		</ul>

		<div class="font-semibold mt-2">Measurement Software:</div>
		<ul class="list-disc pl-6">
			<li>Real-time measurement software & test analysis software</li>
		</ul>

		<div class="font-semibold mt-2">Test Accessories:</div>
		<ul class="list-disc pl-6">
			<li>Low-loss cables, coaxial adapters</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Frequency Range (GHz)</th>
						<td class="border">0.6 – 50</td>
					</tr>
					<tr>
						<th class="border">Gain Measurement Uncertainty (dB)</th>
						<td class="border">±0.5 (Near Field); ±0.5 (Far Field)</td>
					</tr>
					<tr>
						<th class="border">-15 dB Sidelobe Level Uncertainty (dB)</th>
						<td class="border">±1 (Near Field); ±1.5 (Far Field)</td>
					</tr>
					<tr>
						<th class="border">-25 dB Sidelobe Level Uncertainty (dB)</th>
						<td class="border">±2 (Near Field); ±2.5 (Far Field)</td>
					</tr>
					<tr>
						<th class="border">-35 dB Sidelobe Level Uncertainty (dB)</th>
						<td class="border">±3 (Near Field); ±3.5 (Far Field)</td>
					</tr>
					<tr>
						<th class="border">Beam Pointing Accuracy (degree)</th>
						<td class="border">≤ Beamwidth × 1% (Beamwidth ≥ 2°)</td>
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
				</tbody>
			</table>
		</div>
	{:else if lang === 'zh'}
		<div class="font-semibold">天线远场 (0.6–50 GHz) 测试功能：</div>
		<ul class="list-disc pl-6">
			<li>圆柱/平面近远场变换功能：将近场幅度-相位数据转换为远场辐射图</li>
			<li>天线方向性：系数计算、天线增益分析</li>
			<li>数据导出功能：导出近场测量数据及变换后的远场数据</li>
			<li>辐射图显示功能：支持二维矩形坐标和极坐标显示，以及三维图强度图、等高线图、三维表面图和极球图</li>
			<li>二维图分析功能：自动提供主瓣位置和电平、副瓣位置和电平、n-dB波束宽度、零点位置和电平等</li>
			<li>归一化功能：对辐射图进行固定值归一化或自归一化</li>
			<li>多曲线显示功能：可同时显示和比较多个辐射图和剖面图</li>
			<li>支持自动加载测量数据、变换前裁剪数据，并转换为多种极化和远场坐标系统</li>
		</ul>

		<div class="font-semibold mt-4">天线远场 (0.6–50 GHz) 测试系统配置：</div>

		<div class="font-semibold mt-2">暗室尺寸：</div>
		<ul class="list-disc pl-6">
			<li>6米（长）× 3米（宽）× 3米（高）</li>
		</ul>

		<div class="font-semibold mt-2">测试设备：</div>
		<ul class="list-disc pl-6">
			<li>矢量网络分析仪 (VNA)：600 MHz – 50 GHz</li>
			<li>探头 & 标准喇叭天线</li>
		</ul>

		<div class="font-semibold mt-2">机械装置：</div>
		<ul class="list-disc pl-6">
			<li>4轴定位器（方位角、俯仰角、极化角；重复精度 ≤ 0.1°）</li>
			<li>4轴扫描器（X、Z、Y轴重复精度：0.05 mm；P轴重复精度：0.1°）</li>
			<li>扫描器控制器</li>
		</ul>

		<div class="font-semibold mt-2">测量软件：</div>
		<ul class="list-disc pl-6">
			<li>实时测量软件和测试分析软件</li>
		</ul>

		<div class="font-semibold mt-2">测试附件：</div>
		<ul class="list-disc pl-6">
			<li>低损耗电缆、同轴适配器</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">频率范围 (GHz)</th>
						<td class="border">0.6 – 50</td>
					</tr>
					<tr>
						<th class="border">增益测量不确定度 (dB)</th>
						<td class="border">±0.5（近场）；±0.5（远场）</td>
					</tr>
					<tr>
						<th class="border">-15 dB 副瓣电平不确定度 (dB)</th>
						<td class="border">±1（近场）；±1.5（远场）</td>
					</tr>
					<tr>
						<th class="border">-25 dB 副瓣电平不确定度 (dB)</th>
						<td class="border">±2（近场）；±2.5（远场）</td>
					</tr>
					<tr>
						<th class="border">-35 dB 副瓣电平不确定度 (dB)</th>
						<td class="border">±3（近场）；±3.5（远场）</td>
					</tr>
					<tr>
						<th class="border">波束指向精度 (度)</th>
						<td class="border">≤ 波束宽度 × 1%（波束宽度 ≥ 2°）</td>
					</tr>
					<tr>
						<th class="border">辐射图显示范围 (度)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">最大天线孔径 (米)</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">图形坐标类型</th>
						<td class="border">矩形坐标，极坐标</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if lang === 'fr'}
		<div class="font-semibold mt-10">Fonction de test du champ lointain d’antenne (0,6–50 GHz) :</div>
		<ul class="list-disc pl-6">
			<li>
				Transformation champ proche-lointain cylindrique/plan : convertir les données amplitude-phase en diagrammes de
				rayonnement
			</li>
			<li>Directivité de l’antenne : calcul du coefficient, analyse du gain</li>
			<li>Exportation des données : données de mesure champ proche et données transformées champ lointain</li>
			<li>
				Affichage des diagrammes de rayonnement : support des affichages 2D rectangulaires/polaires et cartes
				d’intensité 3D, contours, surfaces, sphères
			</li>
			<li>Analyse des diagrammes 2D : lobe principal, lobes secondaires, largeur à n dB, positions de minimum, etc.</li>
			<li>Fonction de normalisation : normalisation fixe ou auto-normalisation</li>
			<li>Affichage multi-courbes : affichage simultané de plusieurs diagrammes et sections</li>
			<li>
				Chargement automatique des données, découpage pré-transformation, transformation vers différentes polarisations
				et systèmes de coordonnées
			</li>
		</ul>

		<div class="font-semibold mt-4">Configuration du système de test du champ lointain (0,6–50 GHz) :</div>

		<div class="font-semibold mt-2">Dimensions de la chambre :</div>
		<ul class="list-disc pl-6">
			<li>6 m (L) × 3 m (l) × 3 m (H)</li>
		</ul>

		<div class="font-semibold mt-2">Équipements de test :</div>
		<ul class="list-disc pl-6">
			<li>Analyseur de réseau vectoriel (VNA) : 600 MHz – 50 GHz</li>
			<li>Sonde & antenne cornet standard</li>
		</ul>

		<div class="font-semibold mt-2">Installation mécanique :</div>
		<ul class="list-disc pl-6">
			<li>Positionneur 4 axes (azimut, élévation, polarisation ; répétabilité ≤ 0,1°)</li>
			<li>Scanner 4 axes (répétabilité X/Z/Y : 0,05 mm ; axe P : 0,1°)</li>
			<li>Contrôleur de scanner</li>
		</ul>

		<div class="font-semibold mt-2">Logiciel de mesure :</div>
		<ul class="list-disc pl-6">
			<li>Logiciel de mesure en temps réel et d’analyse</li>
		</ul>

		<div class="font-semibold mt-2">Accessoires de test :</div>
		<ul class="list-disc pl-6">
			<li>Câbles à faibles pertes, adaptateurs coaxiaux</li>
		</ul>

		<h2 class="font-semibold mt-4">Configuration du système de test du champ lointain :</h2>
		<ul class="list-disc pl-6">
			<li><strong>Dimensions de la chambre :</strong> 6 m (L) × 3 m (l) × 3 m (h)</li>
			<li>
				<strong>Équipements de test :</strong> Analyseur de réseau vectoriel (VNA) : 600 MHz – 50 GHz, sonde et antenne cornet
				standard
			</li>
			<li>
				<strong>Configuration mécanique :</strong> Positionneur 4 axes (azimut, élévation, polarisation, répétabilité ≤ 0,1°),
				Scanner 4 axes (répétabilité XYZ : 0,05 mm ; P : 0,1°), contrôleur de scanner
			</li>
			<li><strong>Logiciels de mesure :</strong> Logiciels temps réel et d’analyse de tests</li>
			<li><strong>Accessoires de test :</strong> Câbles faibles pertes, adaptateurs coaxiaux</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Plage de fréquences (GHz)</th>
						<td class="border">0.6 – 50</td>
					</tr>
					<tr>
						<th class="border">Incertitude de mesure du gain (dB)</th>
						<td class="border">±0.5 (Champ proche) ; ±0.5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Incertitude niveau de lobe secondaire -15 dB (dB)</th>
						<td class="border">±1 (Champ proche) ; ±1.5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Incertitude niveau de lobe secondaire -25 dB (dB)</th>
						<td class="border">±2 (Champ proche) ; ±2.5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Incertitude niveau de lobe secondaire -35 dB (dB)</th>
						<td class="border">±3 (Champ proche) ; ±3.5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Précision de pointage du faisceau (degré)</th>
						<td class="border">≤ Largeur du faisceau × 1% (≥ 2°)</td>
					</tr>
					<tr>
						<th class="border">Plage d’affichage du diagramme (degré)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Ouverture maximale de l’antenne (m)</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">Types de coordonnées du diagramme</th>
						<td class="border">Rectangulaire, Polaire</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else}
		<div class="font-semibold mt-10">Función de prueba de campo lejano de antena (0.6–50 GHz):</div>
		<ul class="list-disc pl-6">
			<li>
				Transformación de campo cercano a lejano (cilíndrico/plano): convierte datos de amplitud-fase a patrones de
				radiación lejanos
			</li>
			<li>Directividad de la antena: cálculo de coeficiente y análisis de ganancia</li>
			<li>Función de exportación de datos: exporta datos medidos en campo cercano y transformados en campo lejano</li>
			<li>
				Visualización de patrones de radiación: soporta coordenadas rectangulares y polares en 2D, mapas de intensidad
				3D, contornos, superficies y esferas polares
			</li>
			<li>Análisis de patrones 2D: lóbulo principal y secundarios, ancho de haz n-dB, posiciones de nulos, etc.</li>
			<li>Función de normalización: normalización fija y auto-normalización</li>
			<li>Visualización de múltiples curvas: comparación simultánea de múltiples patrones y cortes</li>
			<li>
				Soporte para carga automática de datos, recorte previo a transformación y conversión a múltiples polarizaciones
				y sistemas de coordenadas
			</li>
		</ul>

		<div class="font-semibold mt-4">Configuración del sistema de prueba de campo lejano (0.6–50 GHz):</div>

		<div class="font-semibold mt-2">Dimensiones de la cámara:</div>
		<ul class="list-disc pl-6">
			<li>6 m (L) × 3 m (An) × 3 m (Al)</li>
		</ul>

		<div class="font-semibold mt-2">Equipo de prueba:</div>
		<ul class="list-disc pl-6">
			<li>Analizador de redes vectoriales (VNA): 600 MHz – 50 GHz</li>
			<li>Sonda y antena de bocina estándar</li>
		</ul>

		<div class="font-semibold mt-2">Configuración mecánica:</div>
		<ul class="list-disc pl-6">
			<li>Posicionador de 4 ejes (azimut, elevación, polarización; repetibilidad ≤ 0.1°)</li>
			<li>Escáner de 4 ejes (repetibilidad en X/Z/Y: 0.05 mm; eje P: 0.1°)</li>
			<li>Controlador de escáner</li>
		</ul>

		<div class="font-semibold mt-2">Software de medición:</div>
		<ul class="list-disc pl-6">
			<li>Software de medición en tiempo real y análisis</li>
		</ul>

		<div class="font-semibold mt-2">Accesorios de prueba:</div>
		<ul class="list-disc pl-6">
			<li>Cables de baja pérdida, adaptadores coaxiales</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Rango de frecuencia (GHz)</th>
						<td class="border">0.6 – 50</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de medición de ganancia (dB)</th>
						<td class="border">±0.5 (Campo cercano); ±0.5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de nivel de lóbulo lateral -15 dB (dB)</th>
						<td class="border">±1 (Campo cercano); ±1.5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de nivel de lóbulo lateral -25 dB (dB)</th>
						<td class="border">±2 (Campo cercano); ±2.5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de nivel de lóbulo lateral -35 dB (dB)</th>
						<td class="border">±3 (Campo cercano); ±3.5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Precisión de apuntamiento del haz (grados)</th>
						<td class="border">≤ Ancho del haz × 1% (≥ 2°)</td>
					</tr>
					<tr>
						<th class="border">Rango de visualización del patrón (grados)</th>
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
				</tbody>
			</table>
		</div>
	{/if}
</ServiceLayout>
