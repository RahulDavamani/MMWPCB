<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.antennaTestSystems;
	$: service = section.services.nearFieldTesting;
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
		<div class="font-semibold">Antenna Near Field (0.6–50 GHz) Testing Function:</div>
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

		<div class="font-semibold mt-4">Antenna Near Field (0.6–50 GHz) Testing System Configuration:</div>

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
		<div class="font-semibold">天线近场（0.6–50 GHz）测试功能：</div>
		<ul class="list-disc pl-6">
			<li>圆柱/平面近-远场变换功能：将近场幅度-相位数据转换为远场辐射图</li>
			<li>天线方向性：系数计算，天线增益分析</li>
			<li>数据导出功能：导出近场测量数据及变换后的远场数据</li>
			<li>辐射图显示功能：支持二维矩形坐标图、极坐标图，三维强度图、等高线图、三维表面图和极坐标球图</li>
			<li>二维图分析功能：自动提供主瓣位置和水平、副瓣位置和水平、n dB波束宽度、零点位置和水平等</li>
			<li>归一化功能：辐射图归一化，支持固定值归一和自归一化</li>
			<li>多曲线显示功能：可同时显示和对比多组辐射图及其截面</li>
			<li>支持测量数据自动加载、变换前数据裁剪、多极化与多种远场坐标系统变换</li>
		</ul>

		<div class="font-semibold mt-4">天线近场（0.6–50 GHz）测试系统配置：</div>

		<div class="font-semibold mt-2">暗室尺寸：</div>
		<ul class="list-disc pl-6">
			<li>6米（长）× 3米（宽）× 3米（高）</li>
		</ul>

		<div class="font-semibold mt-2">测试设备：</div>
		<ul class="list-disc pl-6">
			<li>矢量网络分析仪（VNA）：600 MHz – 50 GHz</li>
			<li>探头与标准喇叭天线</li>
		</ul>

		<div class="font-semibold mt-2">机械设置：</div>
		<ul class="list-disc pl-6">
			<li>4轴位置器（方位角、俯仰角、极化；重复性 ≤ 0.1°）</li>
			<li>4轴扫描仪（X、Z、Y轴重复性：0.05mm；P轴重复性：0.1°）</li>
			<li>扫描仪控制器</li>
		</ul>

		<div class="font-semibold mt-2">测量软件：</div>
		<ul class="list-disc pl-6">
			<li>实时测量软件与测试分析软件</li>
		</ul>

		<div class="font-semibold mt-2">测试配件：</div>
		<ul class="list-disc pl-6">
			<li>低损耗电缆、同轴适配器</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">频率范围（GHz）</th>
						<td class="border">0.6 – 50</td>
					</tr>
					<tr>
						<th class="border">增益测量不确定度（dB）</th>
						<td class="border">±0.5（近场）；±0.5（远场）</td>
					</tr>
					<tr>
						<th class="border">-15 dB旁瓣水平不确定度（dB）</th>
						<td class="border">±1（近场）；±1.5（远场）</td>
					</tr>
					<tr>
						<th class="border">-25 dB旁瓣水平不确定度（dB）</th>
						<td class="border">±2（近场）；±2.5（远场）</td>
					</tr>
					<tr>
						<th class="border">-35 dB旁瓣水平不确定度（dB）</th>
						<td class="border">±3（近场）；±3.5（远场）</td>
					</tr>
					<tr>
						<th class="border">波束指向精度（度）</th>
						<td class="border">≤ 波束宽度 × 1%（波束宽度 ≥ 2°）</td>
					</tr>
					<tr>
						<th class="border">辐射图显示范围（度）</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">最大天线孔径（米）</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">辐射图坐标类型</th>
						<td class="border">矩形、极坐标</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if lang === 'fr'}
		<div class="font-semibold">Fonction de test du champ proche de l'antenne (0,6–50 GHz) :</div>
		<ul class="list-disc pl-6">
			<li>
				Fonction de transformation champ proche-champ lointain cylindrique/plan : Convertir les données
				d'amplitude-phase du champ proche en diagrammes de radiation du champ lointain
			</li>
			<li>Directivité de l'antenne : Calcul des coefficients, analyse du gain de l'antenne</li>
			<li>
				Fonction d'exportation des données : Exporter les données de mesure du champ proche et les données transformées
				du champ lointain
			</li>
			<li>
				Fonction d'affichage du diagramme de radiation : Prise en charge des affichages en coordonnées rectangulaires et
				polaires pour les diagrammes 2D, ainsi que des cartes d'intensité 3D, des courbes de contours, des graphiques de
				surface 3D et des graphiques de sphère polaire
			</li>
			<li>
				Fonction d'analyse des diagrammes 2D : Fournit automatiquement la position et le niveau du lobe principal, la
				position et le niveau du lobe secondaire, la largeur de faisceau à n dB, la position et le niveau des nœuds,
				etc.
			</li>
			<li>
				Fonction de normalisation : Normaliser les diagrammes de radiation, en prenant en charge la normalisation à
				valeur fixe et la normalisation autonome
			</li>
			<li>
				Fonction d'affichage multi-courbes : Affichage simultané et comparaison de plusieurs diagrammes de radiation et
				de coupes transversales
			</li>
			<li>
				Prise en charge du chargement automatique des données de mesure, de la découpe des données avant transformation
				et de la transformation vers plusieurs polarités et systèmes de coordonnées du champ lointain
			</li>
		</ul>

		<div class="font-semibold mt-4">Configuration du système de test du champ proche de l'antenne (0,6–50 GHz) :</div>

		<div class="font-semibold mt-2">Dimensions de la chambre :</div>
		<ul class="list-disc pl-6">
			<li>6m (L) × 3m (l) × 3m (H)</li>
		</ul>

		<div class="font-semibold mt-2">Équipement de test :</div>
		<ul class="list-disc pl-6">
			<li>Analyseur de réseau vectoriel (VNA) : 600 MHz – 50 GHz</li>
			<li>Probes et antenne à cornet standard</li>
		</ul>

		<div class="font-semibold mt-2">Configuration mécanique :</div>
		<ul class="list-disc pl-6">
			<li>Positionneur à 4 axes (azimut, élévation, polarisation ; répétabilité ≤ 0,1°)</li>
			<li>Scanneur à 4 axes (répétabilité des axes X, Z, Y : 0,05 mm ; répétabilité de l'axe P : 0,1°)</li>
			<li>Contrôleur du scanneur</li>
		</ul>

		<div class="font-semibold mt-2">Logiciel de mesure :</div>
		<ul class="list-disc pl-6">
			<li>Logiciel de mesure en temps réel et logiciel d'analyse des tests</li>
		</ul>

		<div class="font-semibold mt-2">Accessoires de test :</div>
		<ul class="list-disc pl-6">
			<li>Câbles à faible perte, adaptateurs coaxiaux</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Plage de fréquence (GHz)</th>
						<td class="border">0,6 – 50</td>
					</tr>
					<tr>
						<th class="border">Incertitude de mesure du gain (dB)</th>
						<td class="border">±0,5 (Champ proche) ; ±0,5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Incertitude du niveau des lobes secondaires à -15 dB (dB)</th>
						<td class="border">±1 (Champ proche) ; ±1,5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Incertitude du niveau des lobes secondaires à -25 dB (dB)</th>
						<td class="border">±2 (Champ proche) ; ±2,5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Incertitude du niveau des lobes secondaires à -35 dB (dB)</th>
						<td class="border">±3 (Champ proche) ; ±3,5 (Champ lointain)</td>
					</tr>
					<tr>
						<th class="border">Précision du pointage du faisceau (degré)</th>
						<td class="border">≤ Largeur du faisceau × 1% (Largeur du faisceau ≥ 2°)</td>
					</tr>
					<tr>
						<th class="border">Plage d'affichage du diagramme de radiation (degré)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Aperture maximale de l'antenne (m)</th>
						<td class="border">0,5</td>
					</tr>
					<tr>
						<th class="border">Types de coordonnées du diagramme</th>
						<td class="border">Rectangulaire, polaire</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else}
		<div class="font-semibold">Función de prueba de campo cercano de antena (0,6–50 GHz):</div>
		<ul class="list-disc pl-6">
			<li>
				Función de transformación de campo cercano-lejano cilíndrica/planar: Convertir los datos de amplitud-fase del
				campo cercano en diagramas de radiación del campo lejano
			</li>
			<li>Directividad de la antena: Cálculo de coeficientes, análisis de ganancia de la antena</li>
			<li>
				Función de exportación de datos: Exportar datos de medición de campo cercano y datos transformados de campo
				lejano
			</li>
			<li>
				Función de visualización de diagramas de radiación: Soporta gráficos en coordenadas rectangulares y polares para
				patrones 2D, así como mapas de intensidad 3D, gráficos de contorno, gráficos de superficie 3D y gráficos
				esféricos polares
			</li>
			<li>
				Función de análisis de patrones 2D: Proporciona automáticamente la posición y nivel del lóbulo principal, la
				posición y nivel de los lóbulos laterales, el ancho de haz a n dB, la posición y nivel de los nudos, etc.
			</li>
			<li>
				Función de normalización: Normaliza los diagramas de radiación, soportando normalización de valor fijo y
				auto-normalización
			</li>
			<li>
				Función de visualización de múltiples curvas: Muestra y compara simultáneamente múltiples diagramas de radiación
				y secciones transversales
			</li>
			<li>
				Soporta carga automática de datos de medición, recorte de datos previos a la transformación y transformación a
				múltiples polarizaciones y sistemas de coordenadas de campo lejano
			</li>
		</ul>

		<div class="font-semibold mt-4">Configuración del sistema de prueba de campo cercano de antena (0,6–50 GHz):</div>

		<div class="font-semibold mt-2">Dimensiones de la cámara:</div>
		<ul class="list-disc pl-6">
			<li>6m (L) × 3m (An) × 3m (Al)</li>
		</ul>

		<div class="font-semibold mt-2">Equipo de prueba:</div>
		<ul class="list-disc pl-6">
			<li>Analizador de red vectorial (VNA): 600 MHz – 50 GHz</li>
			<li>Sonda y antena de cuerno estándar</li>
		</ul>

		<div class="font-semibold mt-2">Configuración mecánica:</div>
		<ul class="list-disc pl-6">
			<li>Posicionador de 4 ejes (Azimut, Elevación, Polarización; Repetibilidad ≤ 0,1°)</li>
			<li>Escáner de 4 ejes (Repetibilidad de ejes X, Z, Y: 0,05 mm; Repetibilidad del eje P: 0,1°)</li>
			<li>Controlador del escáner</li>
		</ul>

		<div class="font-semibold mt-2">Software de medición:</div>
		<ul class="list-disc pl-6">
			<li>Software de medición en tiempo real y software de análisis de pruebas</li>
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
						<td class="border">0,6 – 50</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de medición de ganancia (dB)</th>
						<td class="border">±0,5 (Campo cercano); ±0,5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de nivel de lóbulos laterales a -15 dB (dB)</th>
						<td class="border">±1 (Campo cercano); ±1,5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de nivel de lóbulos laterales a -25 dB (dB)</th>
						<td class="border">±2 (Campo cercano); ±2,5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de nivel de lóbulos laterales a -35 dB (dB)</th>
						<td class="border">±3 (Campo cercano); ±3,5 (Campo lejano)</td>
					</tr>
					<tr>
						<th class="border">Precisión de apuntamiento del haz (grados)</th>
						<td class="border">≤ Ancho de haz × 1% (Ancho de haz ≥ 2°)</td>
					</tr>
					<tr>
						<th class="border">Rango de visualización del patrón de radiación (grados)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Apertura máxima de la antena (m)</th>
						<td class="border">0,5</td>
					</tr>
					<tr>
						<th class="border">Tipos de coordenadas del patrón</th>
						<td class="border">Rectangular, Polar</td>
					</tr>
				</tbody>
			</table>
		</div>
	{/if}
</ServiceLayout>
