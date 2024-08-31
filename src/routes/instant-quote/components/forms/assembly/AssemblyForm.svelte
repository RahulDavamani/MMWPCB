<script lang="ts">
	import AssemblySide from './AssemblySide.svelte';
	import BoardType from './BoardType.svelte';
	import CustomizedServices from './CustomizedServices.svelte';
	import DetailedInformation from './DetailedInformation.svelte';
	import FlexibleOptions from './FlexibleOptions.svelte';
	import OtherParameters from './OtherParameters.svelte';
	import PayAttention from './PayAttention.svelte';
	import Quantity from './Quantity.svelte';
	import GerberFile from '../../GerberFile.svelte';
	import Name from './Name.svelte';
</script>

<GerberFile />
<Name />
<FlexibleOptions />
<BoardType />
<AssemblySide />
<Quantity />
<PayAttention />
<OtherParameters />
<CustomizedServices />
<DetailedInformation />
