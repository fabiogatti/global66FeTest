<template>
    <div class="bg-white dark:bg-darkGrey w-full fixed bottom-0 left-0 flex justify-center py-[18px]">
        <div class="flex space-x-5 sm:w-[570px] w-full px-[30px]">
            <button @click="$emit('showAll',true)" :class="[allActive ? 'active' : 'inactive']" class="cursor-pointer button flex justify-center flex-1 space-x-2.5 items-center">
                <img src="../assets/list.svg" alt="All list icon">
                <p>{{ $t('components.all') }}</p>
            </button>
            <button @click="$emit('showAll',false)" :class="[allActive ? 'inactive' : 'active']" class="cursor-pointer button flex justify-center flex-1 space-x-2.5 items-center">
                <img src="../assets/favorite.svg" alt="Only favorites icon">
                <p>{{ $t('components.favorites') }}</p>
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    allActive:{
        type: Boolean,
        default: true
    }
})
</script>

<style scoped>
img{
    height: 22px;
}
p{
    @apply font-bold;
    font-size: 18px;
    font-family: "Lato", sans-serif;
}
.button{
    @apply text-white;
    padding: 11px;
    border-radius: 60px;
}
.active{
    @apply bg-red
}
.inactive{
    @apply bg-lightGrey;
}
</style>