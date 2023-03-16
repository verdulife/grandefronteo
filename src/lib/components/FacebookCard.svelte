<script>
	import Like from '$lib/icons/Like.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<article class="col">
	<header class="row jbetween acenter wfull">
		<h2>SERIE TRANSMEDIA</h2>
		<aside class="row">
			<span />
			<span />
			<span />
		</aside>
	</header>

	<main class="col wfull">
		<header class="col jcenter wfull">
			<video class="wfull" src="/wtf.mp4" playsinline autoplay loop muted />
			<h1>
				¿A QUE
				<br />
				C🤬J🤬NES
				<br />
				TE REFIERES?
			</h1>
		</header>

		<div class="like row acenter wfull">
			<Like />
			<p>Youplanet y 24 productoras más</p>
		</div>

		<div class="buttons row wfull">
			<div class="fake-btn row fcenter w1/2 hfull">Me gusta</div>
			<div class="fake-btn row fcenter w1/2 hfull">Comentar</div>
		</div>

		<p>
			Grande Fronteo es un proyecto pensado para formato de serie. Donde la audiencia puede
			interactuar directamente con los personajes ficticios que aparecen, a través de las redes
			sociales.
			<br /><br />
			A su vez, personas reales, del mundo del stream y de redes sociales, aparecen en la série interpretándose
			a ellos mismos e interactuando con los personajes ficticios, rompiendo la barrera entre realidad
			y ficción en todo momento.
		</p>

		<footer class="col wfull">
			<div class="comments row">
				<picture avatar>
					<Image src="/ibai.png" />
				</picture>
				<aside class="col">
					<small><b>Ibai</b></small>
					<small>De locos! Cuándo sale?</small>
				</aside>
			</div>

			<div class="new-comment row wfull">
				<picture avatar>
					<Image src="/alec.jpg" />
				</picture>
				<aside class="col grow">
					<small class="wfull">Escribe un comentario...</small>
				</aside>
			</div>
		</footer>
	</main>
</article>

<style lang="postcss">
	article {
		width: calc(100% - 4em);
		max-width: var(--media-md);
		background-color: var(--base);
		border-radius: 1em;
		margin-top: clamp(200px, 10%, 10%);
		overflow: hidden;
		z-index: 1;
	}

	header {
		padding: 1.5em 2em;

		& h2 {
			font-family: var(--font-title);
		}

		& aside {
			gap: 0.5em;
		}

		& span {
			width: 0.5em;
			height: 0.5em;
			background-color: var(--base-500);
			border-radius: 50%;
		}
	}

	main {
		& header {
			position: relative;
			aspect-ratio: 500/228;

			& video {
				position: absolute;
				inset: 0;
				z-index: 0;
			}

			& h1 {
				position: relative;
				color: var(--base);
				font-family: var(--font-title);
				line-height: 1;
				z-index: 1;
			}
		}

		& .like {
			padding: 1em;

			& p {
				font-size: var(--font-xs);
				color: var(--base-500);
			}
		}

		& .buttons {
			height: 60px;
			border-top: 1px solid var(--base-200);
			border-bottom: 1px solid var(--base-200);

			& .fake-btn {
				&:first-of-type {
					border-right: 1px solid var(--base-200);
				}
			}
		}

		& p {
			padding: 1em;
		}

		& footer {
			gap: 0.5em;
			border-top: 1px solid var(--base-200);
			padding: 1em;

			& .comments {
				gap: 0.5em;

				& picture {
					width: 36px;
				}

				& aside {
					background-color: var(--base-100);
					border-radius: 0.5em;
					padding: 0.75em;
				}
			}

			& .new-comment {
				gap: 0.5em;

				& picture {
					width: 36px;
				}

				& aside {
					background-color: var(--base-100);
					border-radius: 0.5em;
					padding: 0.75em;
				}
			}
		}
	}
</style>
