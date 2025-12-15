<script>
	import './layout.css';
	import pomoChanLogo from '$lib/assets/logo.svg?url';

	let { children } = $props();
</script>

<svelte:head>
	<title>Pomo Chan</title>
	<meta
		name="description"
		content="Pomo Chan adalah aplikasi Pomodoro dengan karakter cewek Jepang yang manis dan penuh semangat. Ia bakal nemenin kamu fokus, kasih dukungan imut, dan bikin kerja atau belajar jadi lebih fun serta bikin hati hangat setiap sesi."
	/>
	<link rel="icon" href={pomoChanLogo} />
</svelte:head>

{@render children()}
