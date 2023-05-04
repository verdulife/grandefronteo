<script>
	import Image from '$lib/components/Image.svelte';
</script>

<section id="contacto" class="col fcenter wfull">
	<article class="col wfull">
		<header class="row jbetween acenter wfull">
			<h2>Tweet</h2>
		</header>

		<main class="row wfull">
			<span>🤑</span>

			<aside class="col wfull">
				<h3>Grande Fronteo <span>@grandefronte · 5h</span></h3>

				<p>
					Si el proyecto te ha parecido interesante y quieres saber más, no dudes en ponerte en
					contacto conmigo en: <a href="mailto:roberto.v.lopez@gmail.com" rel="noopener"
						>roberto.v.lopez@gmail.com</a
					> ¡Gracias por tu tiempo!
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

		& > span {
			font-size: 3em;
		}

		& aside {
			gap: 1em;

			& picture {
				aspect-ratio: 1;
				border-radius: 1em;
			}
		}

		& h3 {
			color: var(--base);

			& span {
				color: var(--base-400);
			}
		}

		& p {
			color: var(--base);

			& a {
				color: var(--info);
			}
		}
	}
</style>
