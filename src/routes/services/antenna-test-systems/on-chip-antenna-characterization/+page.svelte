<script lang="ts">
	import { services } from '../../../../stores/service.store';
	import ServiceLayout from '../../components/ServiceLayout.svelte';
	import { i18n } from '../../../../stores/i18n.store';

	$: lang = $i18n.language;

	$: section = $services.antennaTestSystems;
	$: service = section.services.onChipAntennaCharacterization;
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
		<div class="font-semibold">Antenna on Chip (18-500GHz) Testing Function：</div>

		<div class="font-semibold mt-2">Near-Far Field Transformation:</div>
		<ul class="list-disc pl-6">
			<li>Converts near-field amplitude-phase data into far-field radiation patterns.</li>
		</ul>

		<div class="font-semibold mt-2">Antenna Directivity:</div>
		<ul class="list-disc pl-6">
			<li>Includes coefficient calculation and antenna gain analysis.</li>
		</ul>

		<div class="font-semibold mt-2">Data Export Function:</div>
		<ul class="list-disc pl-6">
			<li>Supports exporting both near-field measurement data and transformed far-field data.</li>
		</ul>

		<div class="font-semibold mt-2">Radiation Pattern Display:</div>
		<ul class="list-disc pl-6">
			<li>Supports 2D pattern display in rectangular and polar coordinates.</li>
			<li>3D pattern visualization options: intensity map, contour plot, 3D surface plot, and polar sphere plot.</li>
		</ul>

		<div class="font-semibold mt-2">2D Pattern Analysis: Automatically extracts key parameters including:</div>
		<ul class="list-disc pl-6">
			<li>Main lobe position & level</li>
			<li>Side lobe position & level</li>
			<li>n-dB beamwidth</li>
			<li>Null position & level</li>
		</ul>

		<div class="font-semibold mt-2">Normalization Function:</div>
		<ul class="list-disc pl-6">
			<li>Normalizes radiation patterns using either fixed-value normalization or self-normalization.</li>
		</ul>

		<div class="font-semibold mt-2">Multi-Curve Display:</div>
		<ul class="list-disc pl-6">
			<li>Enables simultaneous display and comparison of multiple radiation patterns and cross-sections.</li>
		</ul>

		<div class="font-semibold mt-2">Additional Features:</div>
		<ul class="list-disc pl-6">
			<li>Automatic loading of measurement data</li>
			<li>Pre-transformation data cropping</li>
			<li>Transformation to multiple polarizations and far-field coordinate systems</li>
		</ul>

		<div class="font-semibold mt-6">Antenna on Chip (18-500GHz) Testing System Configuration</div>

		<div class="font-semibold mt-2">Chamber Dimensions:</div>
		<ul class="list-disc pl-6">
			<li>3m (L) × 3m (W) × 3m (H), featuring cleanroom-grade absorbing materials</li>
		</ul>

		<div class="font-semibold mt-2">Test Equipment:</div>
		<ul class="list-disc pl-6">
			<li>Vector Network Analyzer (VNA) with S-parameter modules (18GHz-500GHz)</li>
			<li>Power amplifier</li>
			<li>Duplexer module</li>
			<li>Probe and standard horn antenna</li>
		</ul>

		<div class="font-semibold mt-2">Feeding Method:</div>
		<ul class="list-disc pl-6">
			<li>Waveguide probe</li>
		</ul>

		<div class="font-semibold mt-2">Probing Platform:</div>
		<ul class="list-disc pl-6">
			<li>Precision probe station with 0.05-1mm positioning accuracy</li>
			<li>3-axis adjustable sample stage</li>
			<li>4-dimension adjustable probe holder</li>
			<li>Vacuum-chuck sample holder</li>
			<li>Pneumatic anti-vibration system for sample stage</li>
			<li>800× movable digital microscope</li>
		</ul>

		<div class="font-semibold mt-2">Mechanical System:</div>
		<ul class="list-disc pl-6">
			<li>Automated controller with dual-axis tilt positioner for E-plane/H-plane measurements</li>
		</ul>

		<div class="font-semibold mt-2">Measurement Software:</div>
		<ul class="list-disc pl-6">
			<li>Real-time measurement and test analysis software</li>
		</ul>

		<div class="font-semibold mt-2">Test Accessories:</div>
		<ul class="list-disc pl-6">
			<li>Low-loss cables</li>
			<li>Waveguide and coaxial adapters</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Operating Frequency Range (GHz)</th>
						<td class="border">18 – 500</td>
					</tr>
					<tr>
						<th class="border">Gain Measurement Uncertainty (dB)</th>
						<td class="border">±0.5</td>
					</tr>
					<tr>
						<th class="border">-15 dB Sidelobe Level Uncertainty (dB)</th>
						<td class="border">±1.5</td>
					</tr>
					<tr>
						<th class="border">-25 dB Sidelobe Level Uncertainty (dB)</th>
						<td class="border">±2.5</td>
					</tr>
					<tr>
						<th class="border">-35 dB Sidelobe Level Uncertainty (dB)</th>
						<td class="border">±3.5</td>
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
		<div class="font-semibold">芯片天线（18-500GHz）测试功能：</div>

		<div class="font-semibold mt-2">近-远场变换：</div>
		<ul class="list-disc pl-6">
			<li>将近场幅相数据转换为远场辐射图。</li>
		</ul>

		<div class="font-semibold mt-2">天线方向性：</div>
		<ul class="list-disc pl-6">
			<li>包括系数计算和天线增益分析。</li>
		</ul>

		<div class="font-semibold mt-2">数据导出功能：</div>
		<ul class="list-disc pl-6">
			<li>支持导出近场测量数据和变换后的远场数据。</li>
		</ul>

		<div class="font-semibold mt-2">辐射图显示：</div>
		<ul class="list-disc pl-6">
			<li>支持以矩形坐标和极坐标显示二维图。</li>
			<li>三维图可视化选项：强度图、等高线图、三维表面图和极坐标球图。</li>
		</ul>

		<div class="font-semibold mt-2">二维图分析：自动提取关键参数，包括：</div>
		<ul class="list-disc pl-6">
			<li>主瓣位置与水平</li>
			<li>旁瓣位置与水平</li>
			<li>n-dB 波束宽度</li>
			<li>零点位置与水平</li>
		</ul>

		<div class="font-semibold mt-2">归一化功能：</div>
		<ul class="list-disc pl-6">
			<li>可使用固定值或自我归一化方式对辐射图进行归一化。</li>
		</ul>

		<div class="font-semibold mt-2">多曲线显示：</div>
		<ul class="list-disc pl-6">
			<li>可同时显示并比较多个辐射图和截面。</li>
		</ul>

		<div class="font-semibold mt-2">其他功能：</div>
		<ul class="list-disc pl-6">
			<li>测量数据自动加载</li>
			<li>变换前数据裁剪</li>
			<li>支持转换为多种极化方式和远场坐标系</li>
		</ul>

		<div class="font-semibold mt-6">芯片天线（18-500GHz）测试系统配置：</div>

		<div class="font-semibold mt-2">暗室尺寸：</div>
		<ul class="list-disc pl-6">
			<li>3米（长）× 3米（宽）× 3米（高），配备洁净室等级吸波材料</li>
		</ul>

		<div class="font-semibold mt-2">测试设备：</div>
		<ul class="list-disc pl-6">
			<li>带有S参数模块的矢量网络分析仪（18GHz-500GHz）</li>
			<li>功率放大器</li>
			<li>双工器模块</li>
			<li>探针和标准喇叭天线</li>
		</ul>

		<div class="font-semibold mt-2">馈电方式：</div>
		<ul class="list-disc pl-6">
			<li>波导探针</li>
		</ul>

		<div class="font-semibold mt-2">探测平台：</div>
		<ul class="list-disc pl-6">
			<li>定位精度为0.05-1mm的精密探针台</li>
			<li>三轴可调样品台</li>
			<li>四维可调探针支架</li>
			<li>真空吸盘样品支架</li>
			<li>样品台采用气动防震系统</li>
			<li>800倍可移动数字显微镜</li>
		</ul>

		<div class="font-semibold mt-2">机械系统：</div>
		<ul class="list-disc pl-6">
			<li>带双轴倾斜定位器的自动控制器，用于E面/H面测量</li>
		</ul>

		<div class="font-semibold mt-2">测量软件：</div>
		<ul class="list-disc pl-6">
			<li>实时测量与测试分析软件</li>
		</ul>

		<div class="font-semibold mt-2">测试附件：</div>
		<ul class="list-disc pl-6">
			<li>低损耗电缆</li>
			<li>波导和同轴适配器</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">工作频率范围（GHz）</th>
						<td class="border">18 – 500</td>
					</tr>
					<tr>
						<th class="border">增益测量不确定度（dB）</th>
						<td class="border">±0.5</td>
					</tr>
					<tr>
						<th class="border">-15 dB 旁瓣电平不确定度（dB）</th>
						<td class="border">±1.5</td>
					</tr>
					<tr>
						<th class="border">-25 dB 旁瓣电平不确定度（dB）</th>
						<td class="border">±2.5</td>
					</tr>
					<tr>
						<th class="border">-35 dB 旁瓣电平不确定度（dB）</th>
						<td class="border">±3.5</td>
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
						<th class="border">天线最大口径（米）</th>
						<td class="border">0.5</td>
					</tr>
					<tr>
						<th class="border">图形坐标类型</th>
						<td class="border">矩形、极坐标</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else if lang === 'fr'}
		<div class="font-semibold">Fonction de Test de l’Antenne sur Puce (18–500 GHz) :</div>

		<div class="font-semibold mt-2">Transformation Champ Proche - Champ Lointain :</div>
		<ul class="list-disc pl-6">
			<li>
				Convertit les données d’amplitude et de phase du champ proche en diagrammes de rayonnement du champ lointain.
			</li>
		</ul>

		<div class="font-semibold mt-2">Directivité de l’Antenne :</div>
		<ul class="list-disc pl-6">
			<li>Comprend le calcul des coefficients et l’analyse du gain de l’antenne.</li>
		</ul>

		<div class="font-semibold mt-2">Fonction d’Exportation de Données :</div>
		<ul class="list-disc pl-6">
			<li>
				Prend en charge l’exportation des données de mesure du champ proche et des données transformées du champ
				lointain.
			</li>
		</ul>

		<div class="font-semibold mt-2">Affichage du Diagramme de Rayonnement :</div>
		<ul class="list-disc pl-6">
			<li>Affichage 2D en coordonnées rectangulaires et polaires.</li>
			<li>Visualisation 3D : carte d’intensité, tracé en contours, surface 3D, sphère polaire.</li>
		</ul>

		<div class="font-semibold mt-2">Analyse de Diagramme 2D : Extraction automatique des paramètres clés :</div>
		<ul class="list-disc pl-6">
			<li>Position et niveau du lobe principal</li>
			<li>Position et niveau du lobe secondaire</li>
			<li>Largeur de faisceau à n dB</li>
			<li>Position et niveau du minimum (null)</li>
		</ul>

		<div class="font-semibold mt-2">Fonction de Normalisation :</div>
		<ul class="list-disc pl-6">
			<li>Normalisation par valeur fixe ou auto-normalisation.</li>
		</ul>

		<div class="font-semibold mt-2">Affichage Multi-Courbes :</div>
		<ul class="list-disc pl-6">
			<li>Affichage et comparaison simultanés de plusieurs diagrammes de rayonnement et coupes transversales.</li>
		</ul>

		<div class="font-semibold mt-2">Fonctionnalités Supplémentaires :</div>
		<ul class="list-disc pl-6">
			<li>Chargement automatique des données de mesure</li>
			<li>Découpage des données avant transformation</li>
			<li>Transformation vers plusieurs polarisations et systèmes de coordonnées du champ lointain</li>
		</ul>

		<div class="font-semibold mt-6">Configuration du Système de Test d’Antenne sur Puce (18–500 GHz)</div>

		<div class="font-semibold mt-2">Dimensions de la Chambre :</div>
		<ul class="list-disc pl-6">
			<li>3m (L) × 3m (l) × 3m (H), avec matériaux absorbants de qualité salle blanche</li>
		</ul>

		<div class="font-semibold mt-2">Équipements de Test :</div>
		<ul class="list-disc pl-6">
			<li>Analyseur de réseau vectoriel (VNA) avec modules S-paramètres (18GHz–500GHz)</li>
			<li>Amplificateur de puissance</li>
			<li>Module duplexeur</li>
			<li>Sonde et antenne cornet standard</li>
		</ul>

		<div class="font-semibold mt-2">Méthode d’Alimentation :</div>
		<ul class="list-disc pl-6">
			<li>Sonde à guide d’ondes</li>
		</ul>

		<div class="font-semibold mt-2">Plateforme de Sondage :</div>
		<ul class="list-disc pl-6">
			<li>Station de sondage de précision avec une précision de positionnement de 0,05 à 1 mm</li>
			<li>Plateau d’échantillon réglable sur 3 axes</li>
			<li>Support de sonde réglable sur 4 dimensions</li>
			<li>Support d’échantillon à vide</li>
			<li>Système pneumatique anti-vibrations pour le plateau</li>
			<li>Microscope numérique mobile avec zoom 800×</li>
		</ul>

		<div class="font-semibold mt-2">Système Mécanique :</div>
		<ul class="list-disc pl-6">
			<li>Contrôleur automatisé avec positionneur d’inclinaison à double axe pour les mesures en plans E et H</li>
		</ul>

		<div class="font-semibold mt-2">Logiciel de Mesure :</div>
		<ul class="list-disc pl-6">
			<li>Logiciel de mesure et d’analyse en temps réel</li>
		</ul>

		<div class="font-semibold mt-2">Accessoires de Test :</div>
		<ul class="list-disc pl-6">
			<li>Câbles à faibles pertes</li>
			<li>Adaptateurs coaxiaux et à guide d’ondes</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Plage de Fréquences de Fonctionnement (GHz)</th>
						<td class="border">18 – 500</td>
					</tr>
					<tr>
						<th class="border">Incertitude de Mesure du Gain (dB)</th>
						<td class="border">±0,5</td>
					</tr>
					<tr>
						<th class="border">Incertitude Niveau Lobe Secondaire -15 dB (dB)</th>
						<td class="border">±1,5</td>
					</tr>
					<tr>
						<th class="border">Incertitude Niveau Lobe Secondaire -25 dB (dB)</th>
						<td class="border">±2,5</td>
					</tr>
					<tr>
						<th class="border">Incertitude Niveau Lobe Secondaire -35 dB (dB)</th>
						<td class="border">±3,5</td>
					</tr>
					<tr>
						<th class="border">Précision de Pointage du Faisceau (degré)</th>
						<td class="border">≤ largeur de faisceau × 1 % (si largeur ≥ 2°)</td>
					</tr>
					<tr>
						<th class="border">Plage d’Affichage du Diagramme de Rayonnement (degré)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Ouverture Maximale de l’Antenne (m)</th>
						<td class="border">0,5</td>
					</tr>
					<tr>
						<th class="border">Types de Coordonnées de Diagramme</th>
						<td class="border">Rectangulaire, Polaire</td>
					</tr>
				</tbody>
			</table>
		</div>
	{:else}
		<div class="font-semibold">Función de Prueba de Antena Integrada (18–500 GHz):</div>

		<div class="font-semibold mt-2">Transformación de Campo Cercano a Campo Lejano:</div>
		<ul class="list-disc pl-6">
			<li>Convierte los datos de amplitud y fase del campo cercano en patrones de radiación de campo lejano.</li>
		</ul>

		<div class="font-semibold mt-2">Directividad de la Antena:</div>
		<ul class="list-disc pl-6">
			<li>Incluye el cálculo de coeficientes y el análisis de la ganancia de la antena.</li>
		</ul>

		<div class="font-semibold mt-2">Función de Exportación de Datos:</div>
		<ul class="list-disc pl-6">
			<li>Soporta la exportación de datos medidos del campo cercano y transformados del campo lejano.</li>
		</ul>

		<div class="font-semibold mt-2">Visualización de Patrones de Radiación:</div>
		<ul class="list-disc pl-6">
			<li>Gráficos 2D en coordenadas rectangulares y polares.</li>
			<li>Visualización 3D: mapa de intensidad, gráfico de contorno, superficie 3D, esfera polar.</li>
		</ul>

		<div class="font-semibold mt-2">Análisis de Gráficas 2D: Extracción Automática de Parámetros Clave:</div>
		<ul class="list-disc pl-6">
			<li>Posición y nivel del lóbulo principal</li>
			<li>Posición y nivel del lóbulo secundario</li>
			<li>Ancho de haz a n dB</li>
			<li>Posición y nivel del nulo</li>
		</ul>

		<div class="font-semibold mt-2">Función de Normalización:</div>
		<ul class="list-disc pl-6">
			<li>Normalización con un valor fijo o auto-normalización.</li>
		</ul>

		<div class="font-semibold mt-2">Visualización de Múltiples Curvas:</div>
		<ul class="list-disc pl-6">
			<li>Visualización y comparación simultánea de múltiples patrones de radiación y cortes.</li>
		</ul>

		<div class="font-semibold mt-2">Funciones Adicionales:</div>
		<ul class="list-disc pl-6">
			<li>Carga automática de datos de medición</li>
			<li>Recorte de datos antes de la transformación</li>
			<li>Transformación en múltiples polarizaciones y sistemas de coordenadas de campo lejano</li>
		</ul>

		<div class="font-semibold mt-6">Configuración del Sistema de Prueba de Antena Integrada (18–500 GHz)</div>

		<div class="font-semibold mt-2">Dimensiones de la Cámara:</div>
		<ul class="list-disc pl-6">
			<li>3m (L) × 3m (An) × 3m (Al), con material absorbente tipo sala limpia</li>
		</ul>

		<div class="font-semibold mt-2">Equipos de Prueba:</div>
		<ul class="list-disc pl-6">
			<li>Analizador de redes vectoriales (VNA) con módulos S-paramétricos (18GHz–500GHz)</li>
			<li>Amplificador de potencia</li>
			<li>Módulo dúplex</li>
			<li>Sonda y antena tipo bocina estándar</li>
		</ul>

		<div class="font-semibold mt-2">Método de Alimentación:</div>
		<ul class="list-disc pl-6">
			<li>Sonda de guía de ondas</li>
		</ul>

		<div class="font-semibold mt-2">Plataforma de Medición:</div>
		<ul class="list-disc pl-6">
			<li>Estación de medición de precisión con posicionamiento de 0,05 a 1 mm</li>
			<li>Plataforma de muestra ajustable en 3 ejes</li>
			<li>Soporte de sonda ajustable en 4 dimensiones</li>
			<li>Plataforma de vacío para muestras</li>
			<li>Sistema neumático antivibraciones para la plataforma</li>
			<li>Microscopio digital móvil con zoom de 800×</li>
		</ul>

		<div class="font-semibold mt-2">Sistema Mecánico:</div>
		<ul class="list-disc pl-6">
			<li>Controlador automático con posicionador de inclinación de doble eje para mediciones en planos E y H</li>
		</ul>

		<div class="font-semibold mt-2">Software de Medición:</div>
		<ul class="list-disc pl-6">
			<li>Software de medición y análisis en tiempo real</li>
		</ul>

		<div class="font-semibold mt-2">Accesorios de Medición:</div>
		<ul class="list-disc pl-6">
			<li>Cables de baja pérdida</li>
			<li>Adaptadores coaxiales y de guía de ondas</li>
		</ul>

		<div class="overflow-x-auto mt-6">
			<table class="table text-center">
				<tbody>
					<tr>
						<th class="border">Rango de Frecuencia Operativa (GHz)</th>
						<td class="border">18 – 500</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de Medición de Ganancia (dB)</th>
						<td class="border">±0,5</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de Lóbulo Secundario -15 dB (dB)</th>
						<td class="border">±1,5</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de Lóbulo Secundario -25 dB (dB)</th>
						<td class="border">±2,5</td>
					</tr>
					<tr>
						<th class="border">Incertidumbre de Lóbulo Secundario -35 dB (dB)</th>
						<td class="border">±3,5</td>
					</tr>
					<tr>
						<th class="border">Precisión del Ángulo de Apuntamiento (grados)</th>
						<td class="border">≤ ancho de haz × 1 % (si ancho ≥ 2°)</td>
					</tr>
					<tr>
						<th class="border">Rango de Visualización del Patrón (grados)</th>
						<td class="border">±180</td>
					</tr>
					<tr>
						<th class="border">Apertura Máxima de la Antena (m)</th>
						<td class="border">0,5</td>
					</tr>
					<tr>
						<th class="border">Tipos de Coordenadas de Patrón</th>
						<td class="border">Rectangulares, Polares</td>
					</tr>
				</tbody>
			</table>
		</div>
	{/if}
</ServiceLayout>
