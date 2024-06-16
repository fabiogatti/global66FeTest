<template>
    <div class="w-full bg-white2 dark:bg-darkBg top-0 left-0 flex justify-center fixed pt-[35px] px-[30px] pb-10 z-10">
        <div class="bg-white dark:bg-grey search-bar flex flex-row items-center rounded-md h-[50px] sm:w-[570px] w-full">
            <img class="py-4 pl-4 pr-2.5" src="../assets/search.svg" alt="Search Icon">
            <input class="bg-white dark:bg-grey font-medium text-darkGrey dark:text-white1 w-full h-full rounded-md" :placeholder="$t('components.search')" type="search" v-model="search" @input="event => $emit('update-search',event.target.value)">
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
</script>

<style scoped>
.search-bar{
    transition: box-shadow 0.3s;
}
.search-bar:focus-within{
    box-shadow: 0.2px 3px 0 0 #F22539;
}
.dark .search-bar:focus-within{
    box-shadow: 0.2px 3px 0 0 #FFFFFF;
}
input{
    font-family: "Montserrat", sans-serif;
}
input:focus-within{
    outline: none;
}
input::placeholder{
    @apply text-lightGrey;
}
</style>