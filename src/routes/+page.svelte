<script lang="ts">
    import ComingBackBtn from '$lib/assets/img/BtnComingBack.svg?url';
    import CreateSpaceBtn from '$lib/assets/img/BtnCreateSpace.svg?url';
    import HeroGirl from '$lib/assets/img/HeroGirl.svg?url';
    import pomoChanLogo from '$lib/assets/logo.svg?url';

    export const prerender = true;
</script>

<nav id="header" class="flex justify-between pt-4 lg:px-16 sticky top-0">
    <img src={pomoChanLogo} alt="Pomo Chan Logo" width="auto" height="auto" />

    <div class="flex gap-5">
        <a title="create-space" href="/register">
            <img
                src={CreateSpaceBtn}
                alt="Create Space Button"
                width="auto"
                height="auto"
            />
        </a>

        <a title="comeback" href="/login">
            <img
                src={ComingBackBtn}
                alt="Come Back Button"
                width="auto"
                height="auto"
            />
        </a>
    </div>
</nav>

<div class="container mx-auto px-6 md:px-4 lg:px-48">
    <div id="flying-text" class="mt-8">
        <strong class="flex text-4xl">Take a seat,</strong>
        <strong class="flex flex-row-reverse text-4xl">
            let the moment slow down.
        </strong>
    </div>

    <div id="hero" class="flex justify-center">
        <img src={HeroGirl} width="60%" height="auto" alt="Hero Girl Sitting" />
    </div>
</div>

<div id="anggota-kelompok" class="flex justify-center mt-30 mb-65">
    <div class="w-fit">
        <h2 class="text-4xl">
            Anggota Kelompok:
        </h2>
        <ul class="list-disc ms-5 text-2xl">
            <li>Gilang Faturrahman - (A18.2023.00036) - UI/UX Desain</li>
            <li>Izulsyauki Imani - (A18.2023.00029) - Back End</li>
            <li>Siti Rosidah Nurhanifah - (A18.2024.00163) - Business Analyst</li>
            <li>Vincentius Hadianta Wibawa - (A18.2023.00026) - Front End</li>
        </ul>
    </div>
</div>
