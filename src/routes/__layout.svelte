<script>
	import { theme } from '../stores/ui.store';
</script>

<div class={$theme}>
	<slot />
</div>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
	}
	div {
		width: 100%;
		height: 100%;
		position: absolute;
		transition: background-color 0.5s ease;
	}
	.primary {
		background-color: aqua;
	}
	.secondary {
		background-color: beige;
	}
</style>
