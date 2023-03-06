<script>
	import Image from '$lib/components/Image.svelte';
</script>

<article class="col acenter wfull">
	<ul class="col wfull">
		<li class="row left">
			<p>...pero qué tienes? 👻</p>
		</li>

		<li class="row right">
			<p>Tengo un guión</p>
		</li>

		<li class="row right img">
			<picture>
				<Image src="/sunglasses.gif" />
			</picture>
		</li>

		<li class="row left">
			<p>Es muy largo?</p>
		</li>

		<li class="row right">
			<p>Unas 40 pág.</p>
		</li>

		<li class="row left">
			<p>Hazme un resumen</p>
		</li>

		<li class="row right">
			<p>👇</p>
		</li>
	</ul>
</article>

<style lang="postcss">
	article {
		min-height: 100vh;
		background: var(--base-900) url('/chat-bg.svg') no-repeat center;
		background-size: cover;
		margin-top: -4%;
		padding: 8% 2em;

		& ul {
			max-width: var(--media-sm);
			gap: 1em;

			& li {
				position: relative;
				background-color: var(--base-700);
				padding: 1em 2em;

				& p {
					font-size: var(--font-lg);
					color: var(--base);
				}
			}

			& .left {
				border-radius: 0 0.75em 0.75em 0.75em;

				&:before {
					content: '';
					position: absolute;
					top: 0;
					right: calc(100% - 1px);
					width: 15px;
					height: 15px;
					display: flex;
					background-color: var(--base-700);
					clip-path: polygon(100% 0, 0 0, 100% 100%);
					border-radius: 0.25em 0 0 0;
					overflow: hidden;
				}
			}

			& .right {
				background-color: #074540;
				border-radius: 0.75em 0 0.75em 0.75em;
				margin-left: auto;

				&:before {
					content: '';
					position: absolute;
					top: 0;
					left: calc(100% - 1px);
					width: 15px;
					height: 15px;
					display: flex;
					background-color: #074540;
					clip-path: polygon(0 0, 0% 100%, 100% 0);
					border-radius: 0 0.25em 0 0;
					overflow: hidden;
				}
			}

      & .img {
        padding: 0.5em;

        & picture {
          border-radius: 0.5em;
        }
      }
		}
	}
</style>
