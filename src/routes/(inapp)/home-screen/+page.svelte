<script>
  import { onDestroy } from 'svelte';
  import Container from '$lib/assets/img/Container.svg?url';
  import ReadingWoman from '$lib/assets/img/ReadingWoman.svg?url';
  import btnPlay from '$lib/assets/img/BtnPlay.svg?url';
  import btnPause from '$lib/assets/img/BtnPause.svg?url';
  import btnPrev from '$lib/assets/img/BtnPrev.svg?url';
  import btnNext from '$lib/assets/img/BtnNext.svg?url';
  import DotActive from '$lib/assets/img/DotActive.svg?url';
  import DotInActive from '$lib/assets/img/DotInActive.svg?url';
  import MenuTable from '$lib/components/MenuTable.svelte';

  let isRunning = false;
  let timeInSeconds = 1 * 60;
  let interval;

  $: minutes = Math.floor(timeInSeconds / 60);
  $: seconds = timeInSeconds % 60;
  $: formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleStart = () => {
    isRunning = !isRunning;

    if (isRunning) {
      interval = setInterval(() => {
        if (timeInSeconds > 0) {
          timeInSeconds--;
        } else {
          isRunning = false;
          if (interval) {
            clearInterval(interval);
          }
        }
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }
  };

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<div class="hero-section px-100 py-6 mt-5">
  <img src={Container} alt="" class="background-image" width="auto" height="auto" />
  <div class="hero-content">
    <p class="caveatbold text-4xl mb-2">Motivation Message</p>
    <input
      class="patrickhand text-center w-full bg-transparent border-none"
      placeholder="Click here to change task name"
      value=""
    />
    <div class="mx-auto flex justify-center gap-12 mt-4 mb-4">
      <button>
        <img src={btnPrev} alt="preview button" width="25px" />
      </button>
      <button>
        <img src={btnPlay} alt="play button" width="20px" />
      </button>
      <button>
        <img src={btnNext} alt="next button" width="25px" />
      </button>
    </div>
    <small class="patrickhand">Music - Lo Fi Chill Out</small>
    <time datetime={formattedTime} class="block text-8xl font-black"
      >{formattedTime}</time
    >
    <!-- TODO: Next buat tipe pomodoro dan run cycle short break long break -->
    <div class="flex justify-center gap-4 mt-4">
      <img src={DotActive} class="dot" alt="active dot" width="18px" />
      <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
      <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
      <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
    </div>
    <div class="image mt-8">
      <img src={ReadingWoman} alt="" width="auto" height="auto" />
    </div>

    <div class="mx-auto flex justify-center gap-12 mt-4">
      <button on:click={handleStart}>
        {#if isRunning}
          <img src={btnPause} alt="pause button" width="20px" />
        {:else}
          <img src={btnPlay} alt="play button" width="20px" />
        {/if}
      </button>
    </div>
  </div>
</div>

<style scoped>
  input {
    box-shadow: none;
  }
  .hero-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
  }
</style>
