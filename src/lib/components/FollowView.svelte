<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const followEl = document.querySelector('#follow');
		const { width, height } = document.body.getBoundingClientRect();
		const halfWidth = width / 2;
		const halfHeight = height / 2;
		const move_threshold = 30;
		const rotation_threshold = 6;

		followEl.addEventListener('mousemove', (e) => {
			e.stopPropagation();

			const { pageX, pageY } = e;

			const moveX = ((pageX - halfWidth) / halfWidth) * move_threshold * -1;
			const moveY = ((pageY - halfHeight) / halfHeight) * move_threshold * -1;
			const rotationX = ((pageX - halfWidth) / halfWidth) * rotation_threshold;
			const rotationY = ((pageY - halfHeight) / halfHeight) * rotation_threshold;

			followEl.style.transform = `translateX(${moveX}px) translateY(${moveY}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
		});
	});
</script>

<div id="follow">
	<div id="tunel" class="viewport" />
	<slot />
</div>

<style>
	#follow {
		position: absolute;
		top: -5%;
		left: -5%;
		width: 110%;
		height: 110%;
		perspective: 1000px;
		backface-visibility: hidden;
	}

	#tunel {
		position: absolute;
		top: 0;
		left: 0;
		background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.6));
		pointer-events: none;
    z-index: 99;
	}
</style>
