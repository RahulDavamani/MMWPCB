<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import Carousel1 from '$lib/assets/carousel/carousel1.jpg';
	import Carousel2 from '$lib/assets/carousel/carousel2.jpg';
	import Carousel3 from '$lib/assets/carousel/carousel3.jpg';
</script>

<Splide options={{ autoplay: true, rewind: true }}>
	<SplideSlide>
		<img src={Carousel1} alt="Carousel 1" width="100%" />
	</SplideSlide>
	<SplideSlide>
		<img src={Carousel1} alt="Carousel 1" width="100%" />
	</SplideSlide>
	<SplideSlide>
		<img src={Carousel1} alt="Carousel 1" width="100%" />
	</SplideSlide>
</Splide>
