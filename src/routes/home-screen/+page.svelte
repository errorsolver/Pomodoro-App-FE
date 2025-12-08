<script>
  import Container from "$lib/assets/img/container.svg";
  import mainImg from "$lib/assets/img/main-img.svg";
</script>

<div class="hero-section">
  <img src={Container} alt="" class="background-image" />
  <div class="hero-content">
    <h1>Motivation Message</h1>
    <small>task name</small>
    <div>
      <button>Prev</button>
      <button>Start</button>
      <button>Next</button>
    </div>
    <small>Music</small>
    <time datetime="25:00">25:00</time>
    <div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="image">
      <img src={mainImg} alt="" />
    </div>
  </div>
</div>

<img src="/icons/meja.svg" alt="desk menu" />
<div class="flex">
  <button>
    <img src="/icons/stopwatch.svg" alt="stopwatch" />
  </button>
  <button>
    <img src="/icons/calendar.svg" alt="calendar" />
  </button>
  <button>
    <img src="/icons/task-list.svg" alt="task list" />
  </button>
  <button>
    <img src="/icons/settings.svg" alt="settings menu" />
  </button>
  <button>
    <img src="/icons/logout.svg" alt="logout" />
  </button>
</div>

<style>
  .hero-section {
    position: relative;
    width: 100%;
    min-height: 400px;
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

  .hero-content h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #333;
    margin: 0;
  }

  .flex {
    display: flex;
    gap: 1rem;
  }
</style>
