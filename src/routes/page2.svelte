<script lang="ts">
	import SmoothPage from '../components/SmoothPage.svelte';
	import { fly } from 'svelte/transition';

	import { theme, bug, data, selection } from '../stores/ui.store';
	$theme = 'secondary';
	$bug = true;

	$: items = $data.items.filter((d, index) => {
		if ($selection.button === 1) return !(index % 2);
		return index % 2;
	});
</script>

<SmoothPage>
	<div class="page2">
		<h1 transition:fly={{ y: 100, duration: 500 }}>Pagina 2</h1>

		{#if items.length}
			<ul>
				{#each items as item, index}
					<li transition:fly={{ y: 100, duration: 1500, delay: 100 * index }}>
						<a href="/page3" on:click={() => ($selection.item = item)}>
							{item}
						</a>
					</li>
				{/each}
			</ul>
		{/if}

		<a href="/">Naar de root</a>
	</div>
</SmoothPage>

<style>
	.page2 {
		background-color: rgba(255, 255, 0, 0.2);
		width: 100%;
	}
	/* a {
		bottom: 0;
		position: absolute;
	} */
</style>
