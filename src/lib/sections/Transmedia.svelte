<script>
	import FacebookCard from '../components/FacebookCard.svelte';
	import Chat from '../components/Chat.svelte';
</script>

<section id="transmedia" class="col fcenter wfull">
	<FacebookCard />
	<Chat />
</section>

<style lang="postcss">
	section {
		background-color: var(--accent);
		clip-path: polygon(0 200px, 100% 0, 100% 100%, 0% 100%);
	}
</style>
