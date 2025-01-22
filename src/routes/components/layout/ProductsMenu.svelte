<script lang="ts">
	export let menus = [
		[
			{
				title: 'Printed Circuit Boards',
				subsections: [
					{ title: 'PCB Capabilities', href: '/printed-circuit-boards/pcb-capabilities' },
					{ title: 'Advanced PCB Capabilities', href: '/printed-circuit-boards/advanced-pcb-capabilities' },
					{ title: 'Multi-Layer Laminated Structure', href: '/printed-circuit-boards/multi-layer-laminated-structure' },
					{ title: 'Quick Turn PCB Fabrication', href: '/printed-circuit-boards/quick-turn-pcb-fabrication' },
					{ title: 'PCB Prototyping', href: '/printed-circuit-boards/pcb-prototyping' },
					{ title: 'Low-volume Production', href: '/printed-circuit-boards/low-volume-production' },
					{ title: 'Production Process', href: '/printed-circuit-boards/production-process' }
				]
			},
			{
				title: 'SMD-Stencils',
				subsections: [{ title: 'Laser Stencil', href: '/smd-stencils/laser-stencil' }]
			}
		],
		[
			{
				title: 'PCB Assembly',
				subsections: [
					{ title: 'PCB Assembly Overview', href: '/pcb-assembly/pcb-assembly-overview' },
					{ title: 'PCB Assembly Capabilities', href: '/pcb-assembly/pcb-assembly-capabilities' },
					{ title: 'Mixed Assembly Advantages', href: '/pcb-assembly/mixed-assembly-advantages' },
					{ title: 'Component Sourcing', href: '/pcb-assembly/component-sourcing' },
					{ title: 'PCB Assembly FAQ', href: '/pcb-assembly/pcb-assembly-faq' }
				]
			},
			{
				title: 'PCB Design-Aid',
				subsections: [
					{ title: 'PCB Materials', href: '/pcb-design-aid/pcb-materials' },
					{ title: 'PCB Design & layout', href: '/pcb-design-aid/pcb-design-layout' },
					{ title: 'PCB Price Composition', href: '/pcb-design-aid/pcb-price-composition' }
				]
			}
		],
		[
			{
				title: 'Surface',
				subsections: [
					{ title: 'Surface Finish', href: '/surface/surface-finish' },
					{ title: 'Solder Mask', href: '/surface/solder-mask' },
					{ title: 'Via Covering', href: '/surface/via-covering' },
					{ title: 'Silkscreen', href: '/surface/silkscreen' }
				]
			},
			{
				title: 'Drills & throughplating',
				subsections: [
					{ title: 'Blind & Buried Vias', href: '/drills-throughplating/blind-buried-vias' },
					{ title: 'Annular rings', href: '/drills-throughplating/annular-rings' },
					{ title: 'Sideplating', href: '/drills-throughplating/sideplating' },
					{ title: 'Plated Half-holes', href: '/drills-throughplating/plated-half-holes' }
				]
			}
		]
	];
</script>

<ul class="menu menu-horizontal bg-base-100 min-w-max shadow mt-2">
	{#each menus as submenus}
		<div>
			{#each submenus as { title, subsections }}
				<li>
					<a href="/pc{subsections[0].href}" class="font-semibold">{title}</a>
					<ul>
						{#each subsections as { title, href }}
							<li><a href="/pc{href}">{title}</a></li>
						{/each}
					</ul>
				</li>
			{/each}
		</div>
	{/each}
</ul>
