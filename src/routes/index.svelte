<script lang="ts">
	import SmoothPage from '../components/SmoothPage.svelte';
	import { fly } from 'svelte/transition';
	import { theme, bug, data, selection } from '../stores/ui.store';
	import { goto } from '$app/navigation';

	$theme = 'primary';

	function navigate() {
		$bug = false;
		goto('/page2');
	}
</script>

<SmoothPage>
	<div class="home">
		<h1 transition:fly={{ y: -100, duration: 1500 }}>Pagina 1</h1>

		{#if !$data.buttons.length}
			Laden...
		{/if}

		{#each $data.buttons as button, index}
			<a
				transition:fly={{ x: index % 2 ? 100 : -100, duration: 2000 }}
				href="/page2"
				on:click={() => ($selection.button = index + 1)}
			>
				Knop {button}
			</a>
		{/each}
	</div>
</SmoothPage>

<style>
	.home {
		background-color: rgba(0, 0, 0, 0.2);
		width: 100%;
	}
	a {
		display: inline-block;
	}
	/* button {
		bottom: 0;
		position: absolute;
	} */
</style>
