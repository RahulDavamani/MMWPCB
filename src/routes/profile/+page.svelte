<script lang="ts">
	import { lg } from '../../stores/i18n.store';
	import Layout from '../components/layout/Layout.svelte';
	import PersonalInformation from './components/PersonalInformation.svelte';
	import Addresses from './components/Addresses.svelte';

	$: l = $lg.profile;
</script>

<Layout pageTitle={l.pageTitle}>
	<div class="text-xl font-bold">{l.myProfile}</div>

	<PersonalInformation />
	<Addresses />
</Layout>
