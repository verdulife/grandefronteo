<script>
	import VideoBackground from '$lib/components/VideoBackground.svelte';
</script>

<section id="welcome" class="col fcenter fill">
	<VideoBackground src="/bg.mp4" />

	<picture class="icon">
		<video src="logo.mp4" playsinline autoplay muted loop />
	</picture>
</section>

<style lang="postcss">
	video {
		width: 70%;
		mix-blend-mode: screen;
	}
</style>
