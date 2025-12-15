<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import btnPlay from '$lib/assets/img/BtnPlay.svg?url';
    import btnPause from '$lib/assets/img/BtnPause.svg?url';

    export let isRunning = false;

    const dispatch = createEventDispatcher();
    const handleStart = () => {
        isRunning = !isRunning;
        dispatch('run', { isRunning });
    };
</script>

<div class="mx-auto flex justify-center gap-12 mt-4">
    <button on:click={handleStart}>
        {#if isRunning}
            <img
                src={btnPause}
                class="run-btn"
                alt="Pause Button"
                loading="lazy"
            />
        {:else}
            <img
                src={btnPlay}
                class="run-btn"
                alt="Play Button"
                loading="lazy"
            />
        {/if}
    </button>
</div>
