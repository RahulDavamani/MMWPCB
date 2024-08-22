<script lang="ts">
	import { lg } from '../../stores/i18n.store';

	export let address: {
		name: string;
		phone: string;
		addressLine1: string;
		addressLine2: string;
		city: string;
		state: string;
		country: string;
		postalCode: string;
	};
	$: ({ name, phone, addressLine1, addressLine2, city, state, country, postalCode } = address);
</script>

<div class="font-semibold">{name}</div>
<div>{$lg.user.phone}: {phone}</div>

<div class="mt-1">{addressLine1},</div>
<div>{addressLine2},</div>
<div>{city}, {state},</div>
<div>{country} - {postalCode}</div>
