<script>
	import { onMount } from 'svelte';
	import VideoBackground from '$lib/components/VideoBackground.svelte';

	onMount(() => {
		const followEl = document.querySelector('#follow');
		const { width, height } = document.body.getBoundingClientRect();
		const halfWidth = width / 2;
		const halfHeight = height / 2;
		const move_threshold = 20;

		function setFollow(e) {
			e.stopPropagation();
			let deviceX, deviceY;

			if (e.accelerationIncludingGravity) {
				deviceX = e.accelerationIncludingGravity.x;
				deviceY = e.accelerationIncludingGravity.y;
			} else {
				deviceX = e.pageX;
				deviceY = e.pageY;
			}

			const moveX = ((deviceX - halfWidth) / halfWidth) * move_threshold;
			const moveY = ((deviceY - halfHeight) / halfHeight) * move_threshold;

			followEl.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
		}

		followEl.addEventListener('mousemove', setFollow);
		window.addEventListener('devicemotion', setFollow, true);
	});
</script>

<VideoBackground src="/noise.mp4" />
<div id="tunel" class="full" />

<div id="follow">
	<div class="scrollbar">
		<slot />
	</div>
</div>

<style>
	#follow {
		position: fixed;
		top: -5%;
		left: -5%;
		width: 110%;
		height: 110%;
		backface-visibility: hidden;
		mix-blend-mode: screen;
	}

	#tunel {
		position: fixed;
		top: 0;
		left: 0;
		background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.6));
		pointer-events: none;
		z-index: 99;
	}

	.scrollbar {
		padding: 5%;
	}
</style>
