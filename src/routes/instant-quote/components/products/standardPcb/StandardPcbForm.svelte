<script lang="ts">
	import Icon from '@iconify/svelte';
	import BoardType from './formItems/BoardType.svelte';
	import DifferentDesign from './formItems/DifferentDesign.svelte';
	import { quote } from '../../../../../stores/quote.store';
	import Size from './formItems/Size.svelte';
	import Quantity from './formItems/Quantity.svelte';
	import Layers from './formItems/Layers.svelte';
	import LayerOptions from './formItems/LayerOptions.svelte';
	import Material from './formItems/Material.svelte';
	import Fr4Tg from './formItems/Fr4TG.svelte';
	import Rogers from './formItems/Rogers.svelte';
	import ThermalConductivity from './formItems/ThermalConductivity.svelte';
	import ThermoelectricSeparation from './formItems/ThermoelectricSeparation.svelte';
	import StructureMcpcb from './formItems/StructureMCPCB.svelte';
	import PanelOptions from './formItems/PanelOptions.svelte';
	import Thickness from './formItems/Thickness.svelte';
	import MinTrack from './formItems/MinTrack.svelte';
	import MinHoleSize from './formItems/MinHoleSize.svelte';
	import SolderMaskColor from './formItems/SolderMaskColor.svelte';
	import SilkscreenColor from './formItems/SilkscreenColor.svelte';
	import UvPrinting from './formItems/uvPrinting.svelte';
	import EdgeConnector from './formItems/edgeConnector.svelte';
	import SurfaceFinish from './formItems/SurfaceFinish.svelte';
	import ViaProcess from './formItems/ViaProcess.svelte';
	import FinishedCopper from './formItems/FinishedCopper.svelte';
	import InnerCopper from './formItems/InnerCopper.svelte';
	import RemoveProductNo from './formItems/RemoveProductNo.svelte';
	import CustomizedServices from './formItems/CustomizedServices.svelte';
	import SpecialRequest from './formItems/SpecialRequest.svelte';
	import Name from './formItems/Name.svelte';
</script>

<div class="flex-grow rounded shadow border p-4">
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center">
			<Icon icon="mdi:form-outline" width={24} />
			<div class="text-lg font-bold">Standard PCB Specifications</div>
		</div>
		<button class="btn btn-error btn-sm" on:click={quote.reset}>
			<Icon icon="mdi:refresh" width={16} />
			Reset
		</button>
	</div>
	<div class="divider mt-0" />

	<Name />
	<BoardType />
	<PanelOptions />
	<DifferentDesign />
	<Size />
	<Quantity />
	<Layers />
	<LayerOptions />
	<div class="divider" />
	<Material />
	<Fr4Tg />
	<Rogers />
	<ThermalConductivity />
	<ThermoelectricSeparation />
	<StructureMcpcb />
	<Thickness />
	<MinTrack />
	<MinHoleSize />
	<div class="divider" />
	<SolderMaskColor />
	<SilkscreenColor />
	<UvPrinting />
	<EdgeConnector />
	<div class="divider" />
	<SurfaceFinish />
	<ViaProcess />
	<FinishedCopper />
	<InnerCopper />
	<RemoveProductNo />
	<CustomizedServices />
	<SpecialRequest />
</div>
