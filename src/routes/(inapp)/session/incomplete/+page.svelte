<script>
    import CardShort from '$lib/components/CardShort.svelte';
    import ContainerAdd from '$lib/assets/img/ContainerAdd.svg?url';
    import ContainerProfile from '$lib/assets/img/ContainerProfile.svg?url';
    import Stepper from '$lib/components/Stepper.svelte';
    import BtnSave from '$lib/assets/img/BtnSave.svg?url';
    import BtnCancel from '$lib/assets/img/BtnCancel.svg?url';

    const handleSubmit = () => {
        alert('submit');
    };

    const handleCancel = () => {
        alert('cancel');
    };
</script>

<div class="grid grid-cols-12 gap-5 mt-8">
    <div
        id="list-card"
        class="col-span-3 col-start-4 flex flex-col gap-4 mb-24"
    >
        {#each { length: 40 } as item}
            <CardShort />
        {/each}
    </div>
    <form
        action="/"
        id="add-card"
        class="wrap sticky top-30 col-span-3 col-end-10 gap-4"
    >
        <div
            class="flex flex-col justify-center m-4 px-4 w-100 aspect-[457/558]"
        >
            <img
                src={ContainerAdd}
                class="background-image"
                alt=""
                width="auto"
                height="auto"
            />
            <img
                src={ContainerProfile}
                class="self-center"
                width="96px"
                alt="Profile"
            />

            <div class="pt-5 pb-5">
                <input
                    name="taskName"
                    class="font-bold text-xl mb-4 bg-transparent border-none p-0 w-full"
                    placeholder="Input Task Name Here"
                    autocomplete="off"
                />
                <div class="patrickhand flex justify-between mb-2">
                    <p>focus count</p>
                    <Stepper />
                </div>
                <div class="patrickhand flex justify-between mb-2">
                    <p>focus time</p>
                    <Stepper label={'min'} />
                </div>
                <div class="patrickhand flex justify-between mb-2">
                    <p>break time</p>
                    <Stepper label={'min'} />
                </div>
                <div class="patrickhand flex justify-between mb-2">
                    <p>long break time</p>
                    <Stepper label={'min'} />
                </div>
            </div>
            <div class="flex justify-evenly">
                <button type="submit" on:click={handleSubmit}>
                    <img
                        src={BtnSave}
                        alt="Save Button"
                        width="75"
                        height="auto"
                    />
                </button>
                <button type="button" on:click={handleCancel}>
                    <img
                        src={BtnCancel}
                        alt="Cancel Button"
                        width="75"
                        height="auto"
                    />
                </button>
            </div>
        </div>
    </form>
</div>

<style scoped>
    input:focus {
        box-shadow: none;
    }
    .wrap {
        aspect-ratio: 457 / 558;
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
        object-fit: fill;
        z-index: -1;
    }
</style>
