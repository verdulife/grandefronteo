<script>
	import Image from '$lib/components/Image.svelte';
</script>

<article class="row wfull">
	<picture class="w1/2">
		<Image src="/instagram.jpg" alt="Sinopsis" />
	</picture>

	<aside class="col jbetween w1/2">
		<header class="col wfull">
			<h2><b>🤑 Sinopsis</b></h2>
			<p>
				A Tomás y a Jonathan los acaban de echar del piso de su abuela, donde vivían del free.
				Necesitan conseguir 20k para pagar el impuesto de sucesiones y tienen 6 meses para
				conseguirlo. Así que ahora mismo están <a
					href="https://www.instagram.com/explore/tags/homeless/"
					target="_blank"
					rel="noreferrer"
				>
					#homeless
				</a>.
				<br /><br />
				Por p🤬ta casualidad, encuentran una wallet de bitcoins (o vete tú a saber de qué), pero está
				protegida por huella dactilar y no pueden acceder.
				<br /><br />
				Y se les ocurre la genial idea de encontrar al dueño por vía de las redes sociales, para conseguir
				acceder al dinero y recuperar su piso.
				<br />
				<a
					href="https://www.instagram.com/explore/tags/grandefronteo/"
					target="_blank"
					rel="noreferrer"
				>
					#grandefronteo
				</a>
				<a href="https://www.instagram.com/explore/tags/serie/" target="_blank" rel="noreferrer">
					#serie
				</a>
				<a
					href="https://www.instagram.com/explore/tags/transmedia/"
					target="_blank"
					rel="noreferrer"
				>
					#transmedia
				</a>
			</p>
		</header>

		<div class="actions row jbetween acenter wfull">
			<div class="row acenter">
				<Image />
				<Image />
				<Image />
			</div>

			<Image />
		</div>

		<div class="comment row jbetween acenter wfull">
			<div class="row acenter">
				<Image />
				<small>Añadir comentario...</small>
			</div>
			<button class="unset">Publicar</button>
		</div>
	</aside>
</article>

<style lang="postcss">
	article {
		max-width: var(--media-xl);
		background-color: var(--base);
		border-radius: 1em;
		margin-top: -4%;
		overflow: hidden;

		& picture {
			aspect-ratio: 1;
		}

		& aside {
			aspect-ratio: 1;

			& header {
				padding: 2em;

				& p {
					margin-top: 1em;

					& a {
						color: var(--info);
					}
				}
			}

			& .actions {
				border-top: 1px solid var(--base-300);
				padding: 1em 2em;
			}

			& .comment {
				border-top: 1px solid var(--base-300);
				padding: 1em 2em;
			}
		}
	}
</style>
