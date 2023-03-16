<script>
	import FacebookCard from '$lib/components/FacebookCard.svelte';
	import Chat from '$lib/components/Chat.svelte';
	import InstagramCard from '$lib/components/InstagramCard.svelte';
</script>

<section id="transmedia" class="col fcenter wfull">
	<FacebookCard />
	<Chat />
	<InstagramCard />
</section>

<style lang="postcss">
	section {
		background-color: var(--accent);
		clip-path: polygon(0 200px, 100% 0, 100% 100%, 0% 100%);
		padding-bottom: 4%;
	}
</style>
