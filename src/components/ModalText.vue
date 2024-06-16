<template>
    <div class="flex flex-row text-[18px] text-grey dark:text-white1">
        <p class="font-bold">{{ title }}:&nbsp;</p>
        <p class="font-medium">{{ text }}</p>
    </div>
    <hr>
</template>

<script setup>
defineProps({
    title:{
        type: String,
        default: 'Name',
    },
    text:{
        type: String,
        default: 'Squirtle'
    }
})
</script>

<style scoped>
hr{
    height: 1px;
    width: 100%;
    background-color: #E8E8E8;
    opacity: 0.2;
}
</style>