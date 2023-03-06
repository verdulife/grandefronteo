<script>
	import LogoLive from '../components/LogoLive.svelte';
</script>

<section id="welcome" class="col acenter wfull">
	<LogoLive size="7" />

	<p class="tcenter">
		Tomás y Jonathan han encontrado una billetera de criptomonedas, pero no saben de quién es. Así
		que idean un plan para encontrar al dueño y pedirle una recompensa.
	</p>

	<footer class="row col@sm fcenter wfull">
		<a role="button" class="w2/3@sm" href="/">LEER GUIÓN</a>
		<a role="button" class="unset w2/3@sm" href="/">CONTACTO</a>
	</footer>
</section>

<style lang="postcss">
	section {
		gap: 2em;
		padding: clamp(120px, 4%, 6%) 2em;
	}

	p {
		color: var(--base);
		max-width: var(--media-lg);
		font-size: var(--font-md);
	}

	footer {
		gap: 2em;

		& a {
			min-width: 200px;

			&.unset {
				color: var(--base);
			}
		}
	}
</style>
