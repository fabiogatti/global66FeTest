<template>
    <div class="h-full w-full overflow-hidden bg-white2 dark:bg-darkBg flex items-center justify-center absolute left-0 top-0">
        <img class="loader" src="../assets/loader.svg" alt="Loader pokeball">
    </div>
</template>

<style>
.loader{
    /*animation: rotate cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s infinite;*/
    animation: rotate cubic-bezier(.17,.67,1,1.23) 0.5s infinite;
}

@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(180deg);
    scale:1.25;
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>