<template>
    <div @click="$emit('openModal')" class="item cursor-pointer bg-white dark:bg-darkGrey  flex flex-row justify-between items-center rounded-md">
        <p class="text-[22px] font-medium text-darkGrey dark:text-white1 pl-5">{{ utils.capitalizeFirst(name) }}</p>
        <!--
            Avoided this implementation because sometimes it flickers when switching src after its clicked
        <img class="pr-2.5 py-2 cursor-pointer" :src="isFav ? active:disabled" :alt="isFav ? 'Is favorite':'Its not favorite'" @click="$emit('clickedFav')">-->
        <img class="pr-2.5 py-2 cursor-pointer dark:opacity-80" v-show="isFav" :src="active" alt="Is favorite" @click="$emit('clickedFav')">
        <img class="pr-2.5 py-2 cursor-pointer dark:opacity-60" v-show="!isFav" :src="disabled" alt="Its not favorite" @click="$emit('clickedFav')">
    </div>
</template>

<script setup>
import active from '../assets/active.svg'
import disabled from '../assets/disabled.svg'
import { utils } from '../utils'
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  isFav:{
    type: Boolean,
    default: false,
  }
})

</script>

<style scoped>
.item{
    transition: all 0.4s;
}
.item:hover{
    scale:1.05
}
img:active {
  border-style: outset;
}
</style>