import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const startFabrication = adminProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(async ({ input: { id } }) => {
		const {
			standardPcbs,
			advancedPcbs,
			flexiblePcbs,
			rigidFlexes,
			assemblies,
			stencils,
			cncs,
			sheetMetals,
			threePrintings,
			injectionMoldings,
			vacuumCastings
		} = await prisma.order
			.update({
				where: { id },
				data: { status: 'FABRICATION' },
				select: {
					standardPcbs: { select: { id: true } },
					advancedPcbs: { select: { id: true } },
					flexiblePcbs: { select: { id: true } },
					rigidFlexes: { select: { id: true } },
					assemblies: { select: { id: true } },
					stencils: { select: { id: true } },
					cncs: { select: { id: true } },
					sheetMetals: { select: { id: true } },
					threePrintings: { select: { id: true } },
					injectionMoldings: { select: { id: true } },
					vacuumCastings: { select: { id: true } }
				}
			})
			.catch(pe);

		const statuses = {
			standardPcb: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			advancedPcb: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			flexiblePcb: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			rigidFlex: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			assembly: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			stencil: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			cnc: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			sheetMetal: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			threePrinting: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			injectionMolding: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging'],
			vacuumCasting: ['Drill', 'Plating', 'Solder mask', 'Silkscreen', 'Test', 'Packaging']
		};

		const data = [
			standardPcbs.flatMap(({ id }) => statuses.standardPcb.map((status, num) => ({ standardPcbId: id, num, status }))),
			advancedPcbs.flatMap(({ id }) => statuses.advancedPcb.map((status, num) => ({ advancedPcbId: id, num, status }))),
			flexiblePcbs.flatMap(({ id }) => statuses.flexiblePcb.map((status, num) => ({ flexiblePcbId: id, num, status }))),
			rigidFlexes.flatMap(({ id }) => statuses.rigidFlex.map((status, num) => ({ rigidFlexId: id, num, status }))),
			assemblies.flatMap(({ id }) => statuses.assembly.map((status, num) => ({ assemblyId: id, num, status }))),
			stencils.flatMap(({ id }) => statuses.stencil.map((status, num) => ({ stencilId: id, num, status }))),
			cncs.flatMap(({ id }) => statuses.cnc.map((status, num) => ({ cncId: id, num, status }))),
			sheetMetals.flatMap(({ id }) => statuses.sheetMetal.map((status, num) => ({ sheetMetalId: id, num, status }))),
			threePrintings.flatMap(({ id }) =>
				statuses.threePrinting.map((status, num) => ({ threePrintingId: id, num, status }))
			),
			injectionMoldings.flatMap(({ id }) =>
				statuses.injectionMolding.map((status, num) => ({ injectionMoldingId: id, num, status }))
			),
			vacuumCastings.flatMap(({ id }) =>
				statuses.vacuumCasting.map((status, num) => ({ vacuumCastingId: id, num, status }))
			)
		].flat();

		await prisma.productFabricationStatus.createMany({ data }).catch(pe);
	});
