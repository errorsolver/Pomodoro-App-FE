<script>
  import { onDestroy } from 'svelte';
  import Container from '$lib/assets/img/Container.svg?url';
  import ReadingWoman from '$lib/assets/img/ReadingWoman.svg?url';
  import WomanNap from '$lib/assets/img/WomanNap.svg?url';
  import btnPlay from '$lib/assets/img/BtnPlay.svg?url';
  import btnPause from '$lib/assets/img/BtnPause.svg?url';
  import btnPrev from '$lib/assets/img/BtnPrev.svg?url';
  import btnNext from '$lib/assets/img/BtnNext.svg?url';
  import DotActive from '$lib/assets/img/DotActive.svg?url';
  import DotInActive from '$lib/assets/img/DotInActive.svg?url';
  import MenuTable from '$lib/components/MenuTable.svelte';
  import SetsProgress from './components/SetsProgress.svelte';
  import StatusImage from './components/StatusImage.svelte';
  import MusicPlayer from './components/MusicPlayer.svelte';
  import MotivationMessage from './components/MotivationMessage.svelte';
  import InputPomoName from './InputPomoName.svelte';

  let isRunning = false;
  let isWork = true;
  let isShortBreak = false;
  let isLongBreak = false;
  let timeInSeconds = 1 * 60;
  let interval;
  let sets = 1;
  const maxSet = 4;

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
  <img
    src={Container}
    alt=""
    class="background-image"
    width="auto"
    height="auto"
  />
  <div class="hero-content">
    <MotivationMessage />
    <InputPomoName />
    <MusicPlayer />

    <small class="patrickhand">Music - Lo Fi Chill Out</small>
    <time datetime={formattedTime} class="block text-8xl font-black"
      >
      {formattedTime}
    </time>
    <!-- TODO: Next buat tipe pomodoro dan run cycle short break long break -->
    <SetsProgress {sets} {maxSet} />
    <StatusImage {isWork} />

    <div class="mx-auto flex justify-center gap-12 mt-4">
      <button on:click={handleStart}>
        {#if isRunning}
          <img
            src={btnPause}
            class="run-btn"
            alt="pause button"
            loading="lazy"
          />
        {:else}
          <img src={btnPlay} class="run-btn" alt="play button" loading="lazy" />
        {/if}
      </button>
    </div>
  </div>
</div>

<style scoped>
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

  .run-btn {
    height: 25px;
  }
</style>
