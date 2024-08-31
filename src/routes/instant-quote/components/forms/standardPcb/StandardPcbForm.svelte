<script lang="ts">
	import BoardType from './BoardType.svelte';
	import DifferentDesign from './DifferentDesign.svelte';
	import Size from './Size.svelte';
	import Quantity from './Quantity.svelte';
	import Layers from './Layers.svelte';
	import LayerOptions from './LayerOptions.svelte';
	import Material from './Material.svelte';
	import Fr4Tg from './Fr4TG.svelte';
	import Rogers from './Rogers.svelte';
	import ThermalConductivity from './ThermalConductivity.svelte';
	import ThermoelectricSeparation from './ThermoelectricSeparation.svelte';
	import StructureMcpcb from './StructureMCPCB.svelte';
	import PanelOptions from './PanelOptions.svelte';
	import Thickness from './Thickness.svelte';
	import MinTrack from './MinTrack.svelte';
	import MinHoleSize from './MinHoleSize.svelte';
	import SolderMaskColor from './SolderMaskColor.svelte';
	import SilkscreenColor from './SilkscreenColor.svelte';
	import UvPrinting from './uvPrinting.svelte';
	import EdgeConnector from './edgeConnector.svelte';
	import SurfaceFinish from './SurfaceFinish.svelte';
	import ViaProcess from './ViaProcess.svelte';
	import FinishedCopper from './FinishedCopper.svelte';
	import InnerCopper from './InnerCopper.svelte';
	import RemoveProductNo from './RemoveProductNo.svelte';
	import CustomizedServices from './CustomizedServices.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import Name from './Name.svelte';
	import GerberFile from '../../GerberFile.svelte';
</script>

<GerberFile />
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
<SpecialRequests />
