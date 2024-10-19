<script lang="ts">
	import GerberFile from '../../GerberFile.svelte';
	import BoardSpec from './BoardSpec.svelte';
	import BoardType from './BoardType.svelte';
	import CustomizedServices from './CustomizedServices.svelte';
	import DifferentDesign from './DifferentDesign.svelte';
	import EdgeConnector from './EdgeConnector.svelte';
	import FinalInspectionReport from './FinalInspectionReport.svelte';
	import FinishedCopper from './FinishedCopper.svelte';
	import InnerCopper from './InnerCopper.svelte';
	import LayerOptions from './LayerOptions.svelte';
	import Layers from './Layers.svelte';
	import Material from './Material.svelte';
	import MaterialOptions from './MaterialOptions.svelte';
	import MinHoleSize from './MinHoleSize.svelte';
	import MinTrack from './MinTrack.svelte';
	import Name from './Name.svelte';
	import PanelOptions from './PanelOptions.svelte';
	import PcbType from './PCBType.svelte';
	import Quantity from './Quantity.svelte';
	import SilkscreenColor from './SilkscreenColor.svelte';
	import Size from './Size.svelte';
	import SolderMaskColor from './SolderMaskColor.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import SurfaceFinish from './SurfaceFinish.svelte';
	import SurfaceThickness from './SurfaceThickness.svelte';
	import Thickness from './Thickness.svelte';
</script>

<GerberFile />
<Name />
<PcbType />
<BoardSpec />
<BoardType />
<PanelOptions />
<DifferentDesign />
<Size />
<Quantity />
<Layers />
<LayerOptions />
<div class="divider" />
<Material />
<MaterialOptions />
<Thickness />
<MinTrack />
<MinHoleSize />
<div class="divider" />
<SolderMaskColor />
<SilkscreenColor />
<EdgeConnector />
<div class="divider" />
<SurfaceFinish />
<SurfaceThickness />
<FinishedCopper />
<InnerCopper />
<CustomizedServices />
<FinalInspectionReport />
<SpecialRequests />
