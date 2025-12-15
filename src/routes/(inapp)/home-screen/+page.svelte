<script lang="ts">
    import Container from '$lib/assets/img/Container.svg?url';
    import SetsProgress from './components/SetsProgress.svelte';
    import StatusImage from './components/StatusImage.svelte';
    import MusicPlayer from './components/MusicPlayer.svelte';
    import MotivationMessage from './components/MotivationMessage.svelte';
    import InputPomoName from './components/InputPomoName.svelte';
    import MainTimer from './components/MainTimer.svelte';
    import MainBtn from './components/MainBtn.svelte';

    let isRunning = false;
    let isWork = true;
    let isShortBreak = false;
    let isLongBreak = false;
    let sets = 1;
    const maxSet = 4;

    const WORK_DURATION = 0.2 * 60;
    const SHORT_BREAK_DURATION = 0.1 * 60;
    const LONG_BREAK_DURATION = 0.3 * 60;

    let timeInSeconds = WORK_DURATION;

    function nextPhase() {
        if (isWork) {
            isWork = false;
            isShortBreak = true;
            isLongBreak = false;
            timeInSeconds = SHORT_BREAK_DURATION;
        } else if (isShortBreak) {
            sets += 1;
            if (sets > maxSet) {
                isWork = false;
                isShortBreak = false;
                isLongBreak = true;
                timeInSeconds = LONG_BREAK_DURATION;
            } else {
                isWork = true;
                isShortBreak = false;
                isLongBreak = false;
                timeInSeconds = WORK_DURATION;
            }
        } else if (isLongBreak) {
            sets = 1;
            isWork = true;
            isShortBreak = false;
            isLongBreak = false;
            timeInSeconds = WORK_DURATION;
        }
    }

    function handleTimerEnd() {
        nextPhase();
        isRunning = true;
    }
</script>

<div class="hero-section px-100 py-6 mt-5">
    <img
        src={Container}
        alt="Background Container"
        class="background-image"
        width="auto"
        height="auto"
    />
    <div class="hero-content">
        <MotivationMessage />
        <InputPomoName />
        <MusicPlayer />

        <MainTimer {timeInSeconds} {isRunning} on:end={handleTimerEnd} />

        <!-- TODO: Next buat tipe pomodoro dan run cycle short break long break -->
        <SetsProgress {sets} {maxSet} />
        <StatusImage {isWork} />

        <MainBtn {isRunning} on:run={() => (isRunning = !isRunning)} />
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
</style>
