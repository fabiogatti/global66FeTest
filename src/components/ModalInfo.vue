<template>
    <div class="w-screen h-screen bg-grey bg-opacity-90 top-0 left-0 fixed flex items-center justify-center z-30">
        <div class="sm:w-[570px] w-full bg-white dark:bg-darkBg flex flex-col relative rounded-md">
            
            <div class="relative">
                <img class="rounded-t-md" src="../assets/background.png" alt="Pokemon background grass">
                <img class="center absolute h-full" :src="img" :alt="pokeObj.name + 'sprite'">
                <img @click="$emit('closeModal')" class="absolute right-[15px] top-[15px] cursor-pointer" src="../assets/close.svg" alt="Close icon">
            </div>
            <div class="py-5 px-[30px]">
                <div class="flex flex-col space-y-2.5">
                    <ModalText :title="$t('components.name')" :text="pokeObj.name" />
                    <ModalText :title="$t('components.weight')" :text="pokeObj.weight.toString()" />
                    <ModalText :title="$t('components.height')" :text="pokeObj.height.toString()" />
                    <ModalText :title="pokeObj.type.includes(',') ? $t('components.types') : $t('components.type')" :text="pokeObj.type" />
                </div>
                <div class="flex flex-row justify-between mt-5">
                    <button @click="copyStats" class="py-[11px] px-5">{{ $t('components.modalBtn') }}</button>
                    <img class="cursor-pointer" 
                        v-show="pokeStore.getList[pokeObj.number].isFav" 
                        src="../assets/active.svg"
                        alt="Is favorite" 
                        @click="toggleFav">
                    <img class="cursor-pointer" 
                        v-show="!(pokeStore.getList[pokeObj.number].isFav)" 
                        src="../assets/disabled.svg" 
                        alt="Its not favorite" 
                        @click="toggleFav">
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import ModalText from './ModalText.vue'
import { useI18n } from "vue-i18n"
import { computed } from 'vue'
import { usePokeStore } from '../stores/poke.js'

const props = defineProps({
    pokeObj: {
        type: Object,
        default: {
            name: 'Squirtle',
            weight: '20',
            height: '18',
            type: 'Normal, Water',
            number: '6',
        }
    }
})

const { t } = useI18n()

const pokeStore = usePokeStore()

const img = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(props.pokeObj.number)+1}.png`)

const toggleFav = () => {
    pokeStore.updateFav(props.pokeObj.number)
}

const copyStats = () => {
    let tempObj = {... props.pokeObj}
    delete tempObj['number']
    let str = Object.keys(tempObj).map(key => { return `${key}: ${tempObj[key]}` }).join(", ")
    navigator.clipboard.writeText(str)
    alert(t('components.textCopied'))
}
</script>

<style scoped>
.center{
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>