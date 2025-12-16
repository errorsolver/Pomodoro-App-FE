<script lang="ts">
    import BtnCreateASpace from '$lib/assets/img/BtnCreateASpace.svg?url';
    import SleepingWoman from '$lib/assets/img/SleepingWoman.svg?url';
    import EyeOpen from '$lib/assets/img/EyeOpen.svg?url';
    import EyeClosed from '$lib/assets/img/EyeClosed.svg?url';

    export const prerender = true;
    
    let isShowPassword = false;
</script>

<div class="flex gap-40 justify-center h-screen items-center">
    <div>
        <img src={SleepingWoman} alt="Sleeping Woman Illustration" fetchpriority="high" />
    </div>

    <div>
        <h1 class="text-5xl font-bold mb-2">Create a space</h1>
        <p class="patrickhand mb-8">A calm place to keep your focus.</p>

        <form action="/login" class="flex flex-col">
            <label for="spaceName" class="font-bold">Full Name</label>
            <input
                id="spaceName"
                class="mb-4"
                name="spaceName"
                type="text"
                placeholder="Enter your space name"
            />

            <label for="email" class="font-bold">Email</label>
            <input
                id="email"
                class="mb-4"
                name="email"
                type="email"
                placeholder="Enter your email"
            />

            <label for="password" class="font-bold">Password</label>
            <div class="input-wrapper mb-4">
                <input
                    id="password"
                    class="w-full"
                    name="password"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                />
                <span class="eye">
                    <button
                        class="block"
                        type="button"
                        on:click={() => (isShowPassword = !isShowPassword)}
                        style="cursor: pointer;"
                    >
                        {#if isShowPassword}
                            <img
                                src={EyeOpen}
                                class="-translate-y-1"
                                alt="Show Password"
                            />
                        {:else}
                            <img src={EyeClosed} alt="Hide Password" />
                        {/if}
                    </button>
                </span>
            </div>

            <button type="submit" class="mt-4 cursor-pointer">
                <img src={BtnCreateASpace} alt="Create Space Button" />
            </button>
        </form>
        <p class="mt-4 text-center patrickhand">
            Already have an account?
            <a href="/login" class="caveatregular underline font-bold"
                >Sign In</a
            >
        </p>
    </div>
</div>

<style scoped>
    input {
        background-color: transparent;
        box-shadow: none;
    }

    input:focus {
        border-color: unset;
        box-shadow: unset;
    }

    .input-wrapper {
        position: relative;
    }
    .input-wrapper .eye {
        position: absolute;
        top: 50%;
        right: 15px;
    }
</style>
