<script>
  import Container from "$lib/assets/img/container.svg";
  import mainImg from "$lib/assets/img/main-img.svg";
  import btnPlay from "$lib/assets/icons/BtnPlay.svg";
  import btnPrev from "$lib/assets/icons/BtnPrev.svg";
  import btnNext from "$lib/assets/icons/BtnNext.svg";
  import DotActive from "$lib/assets/icons/DotActive.svg";
  import DotInActive from "$lib/assets/icons/DotInActive.svg";
  import MenuTable from "$lib/components/MenuTable.svelte";
</script>

<div class="hero-section px-100 py-6 mt-5">
  <img src={Container} alt="" class="background-image" />
  <div class="hero-content">
    <p class="caveatbold text-4xl mb-2">Motivation Message</p>
    <p class="patrickhand">task name</p>
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
    <time datetime="25:00" class="block text-8xl font-black">25:00</time>
    <div class="flex justify-center gap-4 mt-4">
      <img src={DotActive} class="dot" alt="active dot" width="18px" />
      <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
      <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
      <img src={DotInActive} class="dot" alt="inactive dot" width="18px" />
    </div>
    <div class="image mt-8">
      <img src={mainImg} alt="" />
    </div>

    <div class="mx-auto flex justify-center gap-12 mt-4">
      <button>
        <img src={btnPlay} alt="play button" width="20px" />
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
</style>
