<script lang="ts">
	import GerberFile from '../../GerberFile.svelte';
	import BoardType from './BoardType.svelte';
	import CustomizedServices from './CustomizedServices.svelte';
	import DifferentDesign from './DifferentDesign.svelte';
	import DoubleSidedTape from './DoubleSidedTape.svelte';
	import EdgeConnector from './EdgeConnector.svelte';
	import EMIShieldingFilm from './EMIShieldingFilm.svelte';
	import Etest from './Etest.svelte';
	import FinishedCopper from './FinishedCopper.svelte';
	import Layers from './Layers.svelte';
	import Material from './Material.svelte';
	import MinHoleSize from './MinHoleSize.svelte';
	import MinTrack from './MinTrack.svelte';
	import Name from './Name.svelte';
	import PanelOptions from './PanelOptions.svelte';
	import PETType from './PETType.svelte';
	import Quantity from './Quantity.svelte';
	import SilkscreenColor from './SilkscreenColor.svelte';
	import Size from './Size.svelte';
	import SolderMaskColor from './SolderMaskColor.svelte';
	import SpecialRequests from './SpecialRequests.svelte';
	import Stiffener from './Stiffener.svelte';
	import SurfaceFinish from './SurfaceFinish.svelte';
	import SurfaceThickness from './SurfaceThickness.svelte';
	import Tape from './Tape.svelte';
	import Thickness from './Thickness.svelte';
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
<PETType />
<Thickness />
<MinTrack />
<MinHoleSize />
<div class="divider" />
<SolderMaskColor />
<SilkscreenColor />
<EdgeConnector />
<Stiffener />
<div class="divider" />
<SurfaceFinish />
<SurfaceThickness />
<FinishedCopper />
<div class="divider" />
<Etest />
<Tape />
<DoubleSidedTape />
<EMIShieldingFilm />
<CustomizedServices />
<SpecialRequests />
