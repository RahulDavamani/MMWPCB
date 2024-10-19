<script lang="ts">
	import GerberFile from '../../GerberFile.svelte';
	import BoardType from './BoardType.svelte';
	import CustomizedServices from './CustomizedServices.svelte';
	import DifferentDesign from './DifferentDesign.svelte';
	import EdgeConnector from './EdgeConnector.svelte';
	import FinalInspectionReport from './FinalInspectionReport.svelte';
	import FpcCoverlay from './FpcCoverlay.svelte';
	import FpcFinishedCoper from './FpcFinishedCoper.svelte';
	import FpcLayers from './FpcLayers.svelte';
	import FpcSilkscreen from './FpcSilkscreen.svelte';
	import FpcThickness from './FpcThickness.svelte';
	import Layers from './Layers.svelte';
	import Material from './Material.svelte';
	import MinHoleSize from './minHoleSize.svelte';
	import MinTrack from './minTrack.svelte';
	import Name from './Name.svelte';
	import PanelOptions from './PanelOptions.svelte';
	import Quantity from './Quantity.svelte';
	import RpcFinishedCopper from './RpcFinishedCopper.svelte';
	import RpcSilkscreen from './RpcSilkscreen.svelte';
	import RpcSolderMask from './RpcSolderMask.svelte';
	import Size from './Size.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import SurfaceFinish from './SurfaceFinish.svelte';
	import SurfaceThickness from './SurfaceThickness.svelte';
	import Thickness from './Thickness.svelte';
	import ViaProcess from './ViaProcess.svelte';
</script>

<GerberFile />
<Name />
<BoardType />
<PanelOptions />
<DifferentDesign />
<Size />
<Quantity />
<Layers />
<div class="divider" />
<Material />
<Thickness />
<MinTrack />
<MinHoleSize />
<div class="divider" />
<SurfaceFinish />
<SurfaceThickness />
<EdgeConnector />
<ViaProcess />
<div class="divider" />
<div class="text-xl font-semibold">Flex Part</div>
<FpcLayers />
<FpcThickness />
<FpcCoverlay />
<FpcSilkscreen />
<FpcFinishedCoper />
<div class="divider" />
<div class="text-xl font-semibold">Rigid Part</div>
<RpcSolderMask />
<RpcSilkscreen />
<RpcFinishedCopper />
<CustomizedServices />
<FinalInspectionReport />
<SpecialRequests />
