<template>
    <div class="flex flex-col items-center justify-center">
        <img class="aspect-square h-32 h-md:h-80 h-sm:h-56 h-xs:h-44" src="../assets/pikaHome.svg" alt="Logo Pikachu">
        <div class="mr-5 mt-4 h-md:mt-[60px] h-sm:mt-8">
            <h1 class="text-2.5xl font-bold mb-3 h-md:mb-[30px] h-sm:mt-6">{{ $t('home.title') }}</h1>
            <p class="text-lg font-medium mb-4 h-md:mb-[50px] h-sm:mb-8">{{ $t('home.subtitle') }}</p>
            <button @click="$emit('clicked')">{{ $t('home.button') }}</button>
        </div>
    </div>
</template>

<script setup>
</script>