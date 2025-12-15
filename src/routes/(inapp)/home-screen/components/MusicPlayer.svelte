<script>
    import btnPlay from '$lib/assets/img/BtnPlay.svg?url';
    import btnPause from '$lib/assets/img/BtnPause.svg?url';
    import btnPrev from '$lib/assets/img/BtnPrev.svg?url';
    import btnNext from '$lib/assets/img/BtnNext.svg?url';

    let isPlaying = false;
    let musicTitle = 'Lo Fi Chill Out';

    const handlePlayPause = () => {
        isPlaying = !isPlaying;
    };
</script>

<div class="mx-auto flex justify-center gap-12 mt-4 mb-4">
    <button>
        <img src={btnPrev} alt="preview button" width="25px" />
    </button>
    <button on:click={handlePlayPause} class="play-btn">
        {#if !isPlaying}
            <img
                src={btnPlay}
                alt="play button"
                class="play-img"
                height="23px"
            />
        {:else}
            <img
                src={btnPause}
                alt="pause button"
                class="play-img"
                height="23px"
            />
        {/if}
    </button>
    <button>
        <img src={btnNext} alt="next button" width="25px" />
    </button>
</div>
<small class="patrickhand">{musicTitle}</small>

<style scoped>
    .play-btn {
        display: flex;
        justify-content: center;
        aspect-ratio: 1/1;
        width: 30px;
    }
</style>
