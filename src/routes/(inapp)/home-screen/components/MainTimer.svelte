<script lang="ts">
    import { onDestroy } from 'svelte';

    export let timeInSeconds = 0;
    export let isRunning = false;

    let currentSec = timeInSeconds;
    let interval: ReturnType<typeof setInterval> | null = null;
    let prevTimeInSeconds = timeInSeconds;

    $: if (!isRunning && timeInSeconds !== prevTimeInSeconds) {
        currentSec = timeInSeconds;
        prevTimeInSeconds = timeInSeconds;
    }

    $: formattedTime = formatTime(currentSec);

    function formatTime(sec: number) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    $: {
        if (isRunning) {
            if (!interval) {
                interval = setInterval(() => {
                    if (currentSec > 0) {
                        currentSec--;
                    } else {
                        clearInterval(interval!);
                        interval = null;
                    }
                }, 1000);
            }
        } else if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
</script>

<time datetime={formattedTime} class="block text-8xl font-black">
    {formattedTime}
</time>
