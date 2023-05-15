<script>
	import Image from '$lib/components/Image.svelte';
	import PlayIcon from '$lib/icons/PlayIcon.svelte';
	import PauseIcon from '$lib/icons/PauseIcon.svelte';

	let ibaiDuration,
		ibaiTime,
		ibaiPaused = true;

	let auronDuration,
		auronTime,
		auronPaused = true;
</script>

<article class="col acenter wfull">
	<ul class="col wfull">
		<li class="row left">
			<p>...pero qué tienes? 👻</p>
		</li>

		<li class="row right">
			<p>El guión de 6 episodios</p>
		</li>

		<li class="row right img">
			<picture>
				<Image src="/sunglasses.gif" />
			</picture>
		</li>

		<li class="row left">
			<p>Como de largos?</p>
		</li>

		<li class="row right">
			<p>Unas 35-40 pág.</p>
		</li>

		<li class="row fcenter right voice">
			<audio
				src="/ibai.mp3"
				bind:currentTime={ibaiTime}
				bind:duration={ibaiDuration}
				bind:paused={ibaiPaused}
			/>
			<button class="unset" on:click={() => (ibaiPaused = !ibaiPaused)}>
				{#if ibaiPaused}
					<PlayIcon width="20px" fill="#fff" />
				{:else}
					<PauseIcon width="20px" fill="#fff" />
				{/if}
			</button>
			<input type="range" min="0" max={ibaiDuration} value={ibaiTime || 0} step="0.01" />
		</li>

		<li class="row fcenter right voice">
			<audio
				src="/auron.mp3"
				bind:currentTime={auronTime}
				bind:duration={auronDuration}
				bind:paused={auronPaused}
			/>
			<button class="unset" on:click={() => (auronPaused = !auronPaused)}>
				{#if auronPaused}
					<PlayIcon width="20px" fill="#fff" />
				{:else}
					<PauseIcon width="20px" fill="#fff" />
				{/if}
			</button>
			<input type="range" min="0" max={auronDuration} value={auronTime || 0} step="0.01" />
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
				max-width: 100%;
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

			& .voice {
				gap: 1em;
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
