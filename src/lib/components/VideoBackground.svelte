<script>
	export let src;
</script>

<picture class="full">
	<video class="full" {src} playsinline autoplay muted loop />
</picture>

<style lang="postcss">
	picture {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 0;
	}
</style>
