<script>
	import { fly } from 'svelte/transition';
	import SmoothPage from '../components/SmoothPage.svelte';
	import { selection } from '../stores/ui.store';
</script>

<SmoothPage>
	<div class="page3">
		<h1 transition:fly={{ y: -100, duration: 1500 }}>Pagina 3</h1>
		{$selection.item}
		<a href="/">Go to root</a>
	</div>
</SmoothPage>

<style>
	.page3 {
		width: 100%;
		background: orange;
	}
</style>
