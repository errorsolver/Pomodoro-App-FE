<script>
    import SleepingWoman from '$lib/assets/img/SleepingWoman.svg?url';
    import EyeOpen from '$lib/assets/img/EyeOpen.svg?url';
    import EyeClosed from '$lib/assets/img/EyeClosed.svg?url';
    import BtnLogin from '$lib/assets/img/BtnLogin.svg?url';
    import BtnSigninGoogle from '$lib/assets/img/BtnSigninGoogle.svg?url';
    import BtnSigninApple from '$lib/assets/img/BtnSigninApple.svg?url';
    import BtnSigninFacebook from '$lib/assets/img/BtnSigninFacebook.svg?url';

    let isShowPassword = false;
</script>

<div class="flex gap-40 justify-center h-screen items-center">
    <div>
        <img src={SleepingWoman} alt="Sleeping Woman" />
    </div>

    <div>
        <h1 class="text-5xl font-bold mb-2">Come back in</h1>
        <p class="patrickhand mb-8">Find your calm again.</p>

        <form class="flex flex-col">
            <label for="email" class="font-bold">Email</label>
            <input
                id="email"
                class="mb-4"
                name="email"
                type="email"
                placeholder="Enter your email"
            />

            <label for="password" class="font-bold">Password</label>
            <div class="input-wrapper">
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
                        on:click={() => (isShowPassword = !isShowPassword)}
                        style="cursor: pointer;"
                    >
                        {#if isShowPassword}
                            <img
                                src={EyeOpen}
                                class="-translate-y-1"
                                alt="Eye Closed"
                            />
                        {:else}
                            <img src={EyeClosed} alt="Eye Open" />
                        {/if}
                    </button>
                </span>
            </div>
            <a href={void 0} class="text-right font-bold text-red-500 mt-1 cursor-not-allowed">
                Forgot Password?
            </a>

            <button type="submit" class="mt-6 mb-2">
                <img src={BtnLogin} class="cursor-pointer" alt="" />
            </button>
        </form>
        <p class="text-center patrickhand mb-1">
            Don't have an account yet? <a
                href="/register"
                class="caveatregular underline font-bold">Sign Up</a
            >
        </p>
        <p class="patrickhand text-center mb-2">Or</p>
        <div class="flex flex-col gap-4">
            <a href={void 0} class="cursor-not-allowed">
                <img src={BtnSigninGoogle} alt="Login with Google" />
            </a>
            <a href={void 0} class="cursor-not-allowed">
                <img src={BtnSigninApple} alt="Login with Apple" />
            </a>
            <a href={void 0} class="cursor-not-allowed">
                <img src={BtnSigninFacebook} alt="Login with Facebook" />
            </a>
        </div>
    </div>
</div>

<style>
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
