<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section id="welcome" class="col acenter wfull">
	<!-- <LogoLive size="7" /> -->
	<picture class="col acenter">
		<Image width="100%" src="/logo.gif" />
		<Image width="97%" src="/tagline.svg" />
	</picture>

	<footer class="row col@sm fcenter wfull">
		<a role="button" class="w2/3@sm" href="/#transmedia">¿TRANS QUÉ?</a>
		<a role="button" class="unset w2/3@sm" href="/#sinopsis">SINOPSIS</a>
	</footer>
</section>

<style lang="postcss">
	section {
		gap: 2em;
		padding: 14% 2em 4% 2em;

		@media (max-width: 600px) {
			padding-top: 50%;
		}

		& picture {
			width: 35%;
			min-width: 250px;
			gap: 0.75em;
		}
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
