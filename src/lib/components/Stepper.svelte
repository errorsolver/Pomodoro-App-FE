<script>
  import BtnArrowLeftOutline from "$lib/assets/img/BtnArrowLeftOutline.svg";
  import BtnArrowRightOutline from "$lib/assets/img/BtnArrowRightOutline.svg";

  let { label = "" } = $$props;
  let value = 1;

  const increment = () => {
    value += 1;
  };
  const decrement = () => {
    if (value > 1) {
      value -= 1;
    }
  };
</script>

<div class="flex w-24">
  <button type="button" on:click={decrement}>
    <img src={BtnArrowLeftOutline} alt="" />
  </button>
  <span class="patrickhand text-center grow">{value} {label}</span>
  <button type="button" on:click={increment}>
    <img src={BtnArrowRightOutline} alt="" />
  </button>
</div>
