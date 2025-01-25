import { derived } from 'svelte/store';
import { i18n } from './i18n.store';

export const capabilities = derived(i18n, ({ language: l }) => {
	const printedCircuitBoards = {
		title:
			l === 'en'
				? 'Printed Circuit Boards'
				: l === 'zh'
					? '印刷电路板'
					: l === 'fr'
						? 'Cartes de Circuit Imprimé'
						: 'Placas de Circuito Impreso',
		subsections: {
			pcbCapabilities: {
				title:
					l === 'en'
						? 'PCB Capabilities'
						: l === 'zh'
							? 'PCB 能力'
							: l === 'fr'
								? 'Capacités de PCB'
								: 'Capacidades de PCB',
				href: '/printed-circuit-boards/pcb-capabilities'
			},
			advancedPcbCapabilities: {
				title:
					l === 'en'
						? 'Advanced PCB Capabilities'
						: l === 'zh'
							? '高级PCB能力'
							: l === 'fr'
								? 'Capacités avancées de PCB'
								: 'Capacidades avanzadas de PCB',
				href: '/printed-circuit-boards/advanced-pcb-capabilities'
			},
			multiLayerLaminatedStructure: {
				title:
					l === 'en'
						? 'Multi-Layer Laminated Structure'
						: l === 'zh'
							? '多层层压结构'
							: l === 'fr'
								? 'Structure stratifiée multicouche'
								: 'Estructura laminada multicapa',
				href: '/printed-circuit-boards/multi-layer-laminated-structure'
			},
			quickTurnPcbFabrication: {
				title:
					l === 'en'
						? 'Quick Turn PCB Fabrication'
						: l === 'zh'
							? '快速PCB制造'
							: l === 'fr'
								? 'Fabrication rapide de PCB'
								: 'Fabricación rápida de PCB',
				href: '/printed-circuit-boards/quick-turn-pcb-fabrication'
			},
			pcbPrototyping: {
				title:
					l === 'en'
						? 'PCB Prototyping'
						: l === 'zh'
							? 'PCB原型制作'
							: l === 'fr'
								? 'Prototypage de PCB'
								: 'Prototipado de PCB',
				href: '/printed-circuit-boards/pcb-prototyping'
			},
			lowVolumeProduction: {
				title:
					l === 'en'
						? 'Low-volume Production'
						: l === 'zh'
							? '小批量生产'
							: l === 'fr'
								? 'Production en petite quantité'
								: 'Producción en pequeña cantidad',
				href: '/printed-circuit-boards/low-volume-production'
			},
			productionProcess: {
				title:
					l === 'en'
						? 'Production Process'
						: l === 'zh'
							? '生产过程'
							: l === 'fr'
								? 'Processus de production'
								: 'Proceso de producción',
				href: '/printed-circuit-boards/production-process'
			}
		}
	};
	const smdStencils = {
		title: l === 'en' ? 'SMD-Stencils' : l === 'zh' ? 'SMD模板' : l === 'fr' ? 'Pochoirs SMD' : 'Plantillas SMD',
		subsections: {
			laserStencil: {
				title:
					l === 'en' ? 'Laser Stencil' : l === 'zh' ? '激光模板' : l === 'fr' ? 'Pochoir laser' : 'Plantilla láser',
				href: '/smd-stencils/laser-stencil'
			}
		}
	};
	const pcbAssembly = {
		title:
			l === 'en' ? 'PCB Assembly' : l === 'zh' ? 'PCB组装' : l === 'fr' ? 'Assemblage de PCB' : 'Ensamblaje de PCB',
		subsections: {
			pcbAssemblyOverview: {
				title:
					l === 'en'
						? 'PCB Assembly Overview'
						: l === 'zh'
							? 'PCB组装概述'
							: l === 'fr'
								? "Aperçu de l'assemblage de PCB"
								: 'Resumen del ensamble de PCB',
				href: '/pcb-assembly/pcb-assembly-overview'
			},
			pcbAssemblyCapabilities: {
				title:
					l === 'en'
						? 'PCB Assembly Capabilities'
						: l === 'zh'
							? 'PCB组装能力'
							: l === 'fr'
								? "Capacités d'assemblage de PCB"
								: 'Capacidades de ensamblaje de PCB',
				href: '/pcb-assembly/pcb-assembly-capabilities'
			},
			mixedAssemblyAdvantages: {
				title:
					l === 'en'
						? 'Mixed Assembly Advantages'
						: l === 'zh'
							? '混合组装优势'
							: l === 'fr'
								? "Avantages de l'assemblage mixte"
								: 'Ventajas del ensamblaje mixto',
				href: '/pcb-assembly/mixed-assembly-advantages'
			},
			componentSourcing: {
				title:
					l === 'en'
						? 'Component Sourcing'
						: l === 'zh'
							? '元件采购'
							: l === 'fr'
								? 'Approvisionnement en composants'
								: 'Abastecimiento de componentes',
				href: '/pcb-assembly/component-sourcing'
			},
			pcbAssemblyFaq: {
				title:
					l === 'en'
						? 'PCB Assembly FAQ'
						: l === 'zh'
							? 'PCB组装常见问题'
							: l === 'fr'
								? "FAQ sur l'assemblage de PCB"
								: 'Preguntas frecuentes sobre el ensamblaje de PCB',
				href: '/pcb-assembly/pcb-assembly-faq'
			}
		}
	};
	const pcbDesignAid = {
		title:
			l === 'en'
				? 'PCB Design-Aid'
				: l === 'zh'
					? 'PCB设计辅助'
					: l === 'fr'
						? 'Aide à la conception de PCB'
						: 'Ayuda al diseño de PCB',
		subsections: {
			pcbMaterials: {
				title:
					l === 'en' ? 'PCB Materials' : l === 'zh' ? 'PCB材料' : l === 'fr' ? 'Matériaux de PCB' : 'Materiales de PCB',
				href: '/pcb-design-aid/pcb-materials'
			},
			pcbDesignLayout: {
				title:
					l === 'en'
						? 'PCB Design & Layout'
						: l === 'zh'
							? 'PCB设计与布局'
							: l === 'fr'
								? 'Conception et disposition de PCB'
								: 'Diseño y disposición de PCB',
				href: '/pcb-design-aid/pcb-design-layout'
			},
			pcbPriceComposition: {
				title:
					l === 'en'
						? 'PCB Price Composition'
						: l === 'zh'
							? 'PCB价格构成'
							: l === 'fr'
								? 'Composition du prix de PCB'
								: 'Composición del precio de PCB',
				href: '/pcb-design-aid/pcb-price-composition'
			}
		}
	};

	const surface = {
		title: l === 'en' ? 'Surface' : l === 'zh' ? '表面' : l === 'fr' ? 'Surface' : 'Superficie',
		subsections: {
			surfaceFinish: {
				title:
					l === 'en'
						? 'Surface Finish'
						: l === 'zh'
							? '表面处理'
							: l === 'fr'
								? 'Finition de surface'
								: 'Acabado de superficie',
				href: '/surface/surface-finish'
			},
			solderMask: {
				title:
					l === 'en' ? 'Solder Mask' : l === 'zh' ? '阻焊' : l === 'fr' ? 'Masque de soudure' : 'Máscara de soldadura',
				href: '/surface/solder-mask'
			},
			viaCovering: {
				title:
					l === 'en' ? 'Via Covering' : l === 'zh' ? '过孔覆盖' : l === 'fr' ? 'Couverture de via' : 'Cubierta de vía',
				href: '/surface/via-covering'
			},
			silkscreen: {
				title: l === 'en' ? 'Silkscreen' : l === 'zh' ? '丝印' : l === 'fr' ? 'Sérigraphie' : 'Serigrafía',
				href: '/surface/silkscreen'
			}
		}
	};

	const drillsThroughplating = {
		title:
			l === 'en'
				? 'Drills & throughplating'
				: l === 'zh'
					? '钻孔与通孔'
					: l === 'fr'
						? 'Perçages et métallisation'
						: 'Perforaciones y metalizado',
		subsections: {
			blindBuriedVias: {
				title:
					l === 'en'
						? 'Blind & Buried Vias'
						: l === 'zh'
							? '盲孔与埋孔'
							: l === 'fr'
								? 'Vias aveugles et enterrées'
								: 'Vías ciegas y enterradas',
				href: '/drills-throughplating/blind-buried-vias'
			},
			annularRings: {
				title:
					l === 'en'
						? 'Annular rings'
						: l === 'zh'
							? '环形焊盘'
							: l === 'fr'
								? 'Anneaux annulaires'
								: 'Anillos anulares',
				href: '/drills-throughplating/annular-rings'
			},
			sideplating: {
				title: l === 'en' ? 'Sideplating' : l === 'zh' ? '侧铜' : l === 'fr' ? 'Placage latéral' : 'Plateado lateral',
				href: '/drills-throughplating/sideplating'
			},
			platedHalfHoles: {
				title:
					l === 'en'
						? 'Plated Half-holes'
						: l === 'zh'
							? '金属化半孔'
							: l === 'fr'
								? 'Demi-trous métallisés'
								: 'Medio agujeros metalizados',
				href: '/drills-throughplating/plated-half-holes'
			}
		}
	};

	return { printedCircuitBoards, smdStencils, pcbAssembly, pcbDesignAid, surface, drillsThroughplating };
});
