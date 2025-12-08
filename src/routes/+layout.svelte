<script>
	import './layout.css';
	import pomoChanLogo from '$lib/assets/logo.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={pomoChanLogo} />
</svelte:head>

{@render children()}
