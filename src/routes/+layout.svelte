<script>
	import './layout.css';
	import pomoChanLogo from '$lib/assets/logo.svg?url';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={pomoChanLogo} />
</svelte:head>

{@render children()}
