<script>
	export let src;
</script>

<picture class="fill">
	<video class="fill" {src} playsinline autoplay muted loop />
</picture>

<style lang="postcss">
	picture {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
