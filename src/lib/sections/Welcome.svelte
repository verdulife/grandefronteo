<script>
	import LogoLive from '../components/LogoLive.svelte';
</script>

<section id="welcome" class="col acenter wfull">
	<picture>
		<LogoLive />
	</picture>

	<p class="tcenter">
		Tomás y Jonathan han encontrado una billetera de criptomonedas, pero no saben de quién es. Así
		que idean un plan para encontrar al dueño y pedirle una recompensa.
	</p>
</section>

<style lang="postcss">
	section {
		gap: 2em;
		padding: 15% 4em;
	}

	p {
		max-width: var(--media-md);
		font-size: var(--font-md);
	}
</style>
