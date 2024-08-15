<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.specialRequest;
</script>

<FormItem title={l.title}>
	<textarea class="textarea textarea-bordered w-full" rows="2" placeholder={l.placeholder} />
</FormItem>
