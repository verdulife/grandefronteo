<script>
	import FacebookCard from '../components/FacebookCard.svelte';
</script>

<section id="transmedia" class="col fcenter wfull">
	<FacebookCard />
</section>

<style lang="postcss">
	section {
		background-color: var(--accent);
		clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
		padding: clamp(120px, 4%, 6%) 2em;
	}
</style>
