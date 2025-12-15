<script>
    import TableMenu from '$lib/assets/img/TableMenu.svg?url';
    import Stopwatch from '$lib/assets/img/Stopwatch.svg?url';
    import Calendar from '$lib/assets/img/Calendar.svg?url';
    import TaskList from '$lib/assets/img/TaskList.svg?url';
    import Settings from '$lib/assets/img/Settings.svg?url';
    import Logout from '$lib/assets/img/Logout.svg?url';
</script>

<div
    class="flex flex-col items-center justify-self-center fixed bottom-0 pb-4 w-screen z-50 bg-linear-to-t from-[#F8F8F6] from-54% to-transparent to-88%"
>
    <div class="mt-10">
        <img src={TableMenu} alt="menu background" />
    </div>
    <div class="absolute grid grid-cols-5 gap-12">
        <a href="/home-screen">
            <img src={Stopwatch} alt="Stopwatch" />
        </a>
        <a href={void 0} class="cursor-not-allowed">
            <img src={Calendar} alt="Calendar" />
        </a>
        <a href="/session/incomplete">
            <img src={TaskList} alt="Task List" />
        </a>
        <a href={void 0} class="cursor-not-allowed">
            <img src={Settings} alt="Settings" />
        </a>
        <a href="/">
            <img src={Logout} alt="Logout" />
        </a>
    </div>
</div>
