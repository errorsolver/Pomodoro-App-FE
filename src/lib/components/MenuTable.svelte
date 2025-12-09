<div class="flex flex-col items-center justify-self-center mt-8 fixed bottom-4 z-999">
  <div class="mt-10">
    <img src="/icons/meja.svg" alt="desk menu" />
  </div>
  <div class="absolute grid grid-cols-5 gap-12">
    <button on:click={alert('stopwatch')}>
      <img src="/icons/stopwatch.svg" alt="stopwatch" />
    </button>
    <button on:click={alert('calendar')}>
      <img src="/icons/calendar.svg" alt="calendar" />
    </button>
    <button on:click={alert('task list')}>
      <img src="/icons/task-list.svg" alt="task list" />
    </button>
    <button on:click={alert('settings menu')}>
      <img src="/icons/settings.svg" alt="settings menu" />
    </button>
    <button on:click={alert('logout')}>
      <img src="/icons/logout.svg" alt="logout" />
    </button>
  </div>
</div>
