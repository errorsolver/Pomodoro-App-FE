<script>
  import ComingBackBtn from '$lib/assets/img/BtnComingBack.svg?url';
  import CreateSpaceBtn from '$lib/assets/img/BtnCreateSpace.svg?url';
  import HeroGirl from '$lib/assets/img/HeroGirl.svg?url';
  import pomoChanLogo from '$lib/assets/logo.svg?url';
</script>

<nav id="header" class="flex justify-between pt-4 lg:px-16 sticky top-0">
  <img src={pomoChanLogo} alt="PomoChan Logo" width="auto" height="auto" />

  <div class="flex gap-5">
    <a title="create-space" href="/register">
      <img src={CreateSpaceBtn} alt="Create Space" width="auto" height="auto" />
    </a>

    <a title="comeback" href="/login">
      <img src={ComingBackBtn} alt="Come Back" width="auto" height="auto" />
    </a>
  </div>
</nav>

<div class="container mx-auto px-6 md:px-4 lg:px-48">
  <div id="flying-text" class="mt-8">
    <strong class="flex text-4xl">Take a seat,</strong>
    <strong class="flex flex-row-reverse text-4xl"
      >let the moment slow down.</strong
    >
  </div>

  <div id="hero" class="flex justify-center">
    <img src={HeroGirl} width="60%" height="auto" alt="Girl Sitting">
  </div>
</div>
