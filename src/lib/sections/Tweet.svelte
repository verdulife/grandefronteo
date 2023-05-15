<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section id="contacto" class="col fcenter wfull">
	<article class="col wfull">
		<header class="row jbetween acenter wfull">
			<h2>Tweet</h2>
		</header>

		<main class="row wfull">
			<picture avatar>
				<Image src="/alec.jpg" />
			</picture>

			<aside class="col wfull">
				<h3>
					Alec Hernández
					<br />
					<span>@AlecHernandezC</span>
				</h3>

				<p>Ojalá en 2023 hagamos un proyecto grande de ficción o empecemos una película.</p>

				<footer>
					<p>6:30 p. m. · 31 dic. 2022 · <b>406,2 mil</b> Reproducciones</p>
				</footer>
			</aside>
		</main>

		<main class="row wfull">
			<picture avatar>
				<Image src="/profile.svg" />
			</picture>

			<aside class="col wfull">
				<h3>Grande Fronteo <span>@grandefronteo · Ahora</span></h3>

				<p>
					Cuando quieras!
					<br />
					Si el proyecto te ha parecido interesante y quieres saber más, no dudes en ponerte en contacto
					conmigo en:
					<a href="mailto:roberto.v.lopez@gmail.com" rel="noopener">roberto.v.lopez@gmail.com</a>
					¡Gracias por tu tiempo!
					<br /><br />
				</p>

				<picture class="col fcenter wfull">
					<Image width="102%" src="/instagram.jpg" />
				</picture>
			</aside>
		</main>
	</article>
</section>

<style lang="postcss">
	section {
		background-color: var(--base-900);
		margin-top: -8%;
		padding: 0 2em;
	}

	article {
		position: relative;
		max-width: var(--media-md);
		padding: 8% 0;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 1px;
			height: 100%;
			display: flex;
			background: linear-gradient(to bottom, transparent, var(--base-800) 40%);
		}
		&:after {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			width: 1px;
			height: 100%;
			display: flex;
			background: linear-gradient(to bottom, transparent, var(--base-800) 40%);
		}
	}

	header {
		border-bottom: 1px solid var(--base-800);
		padding: 2em;

		& h2 {
			color: var(--base);
		}
	}

	main {
		gap: 1em;
		padding: 2em;

		&:last-of-type {
			border-top: 1px solid var(--base-800);

			& aside {
				gap: 0;
			}
		}

		& > picture {
			width: 70px;
		}

		& aside {
			gap: 1em;

			& picture {
				aspect-ratio: 1;
				border-radius: 1em;
				margin-bottom: 2em;
			}
		}

		& h3 {
			font-size: var(--font-md);
			color: var(--base);

			& span {
				color: var(--base-400);
			}
		}

		& p {
			color: var(--base);

			& a {
				color: var(--accent);
			}
		}

		& footer {
			& p {
				color: var(--base-400);
			}

			& b {
				color: var(--base);
				font-family: 'inter';
				font-weight: bold;
			}
		}
	}
</style>
