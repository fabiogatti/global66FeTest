<template>
  <Toggle 
    class="left-2 top-2 z-50 hidden fixed md:flex" 
    :first="$t('components.en')" 
    :second="$t('components.es')" 
    :title="$t('components.lang')" 
    @toggled="toggleLanguage" 
  />
  <Toggle 
    class="right-2 top-2 z-50 hidden fixed md:flex" 
    :first="$t('components.light')" 
    :second="$t('components.dark')" 
    :title="$t('components.mode')" 
    @toggled="toggleDarkMode" 
  />
  <router-view class="w-full" @clicked="(fetchData)"></router-view>
  <transition>
    <Spinner v-show="showSpinner" />
  </transition>
  
</template>

<script setup>
import { ref } from 'vue'
import Home from './views/Home.vue'
import Spinner from './components/Spinner.vue'
import Toggle from './components/Toggle.vue'
import { useRouter } from 'vue-router'
import { usePokeStore } from './stores/poke.js'
import { useI18n } from "vue-i18n"

//DARK MODE
//document.documentElement.className += 'dark'

const router = useRouter() 
const showSpinner = ref(false)

const { t, locale } = useI18n()

const pokeStore = usePokeStore()

const fetchData = async() => {
  showSpinner.value = true

  await fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(async(response) => {
    const json = await response.json()
    
    pokeStore.createList(json.results)

    setTimeout(() => {
      showSpinner.value = false
      router.push({ path: 'all' })
    }, 750);

  }).catch((err) => {
    alert(t('components.noApi'))
  })
}

const toggleDarkMode = () => {
  console.log(document.documentElement.className)
  if(document.documentElement.className.includes('dark'))
    document.documentElement.className = ''
  else
    document.documentElement.className += 'dark'
}

const toggleLanguage = () => {
  console.log(locale.value)
  if(locale.value == 'en')
    locale.value = 'es'
  else
    locale.value = 'en'
}

</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
