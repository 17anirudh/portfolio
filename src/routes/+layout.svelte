<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<style lang="scss">
	div#main-body{
		background-color: black;
		color: aliceblue;
	}
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div id="main-body">
	{@render children?.()}
</div>