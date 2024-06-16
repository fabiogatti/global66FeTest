<template>
    <div class=" w-full flex flex-col justify-center">
        <SearchBar @update-search="(val) => search = val" />
        <div v-show="currentList.length == 0 && search != ''">
            <PageNotFound/>
        </div>
        <div class="w-full m-auto flex justify-center" v-show="currentList.length > 0 || search==''">
            <div class="space-y-2.5 mb-20 mt-24 sm:w-[570px] w-full">
                <ListItem 
                    v-for="(pokemon,index) in currentList" 
                    :key="pokemon.name+'Fav'+indexKey"
                    :name="pokemon.name" 
                    :isFav="pokemon.isFav" 
                    @clicked-fav="toggleFav(pokemon.name)"
                    @open-modal="toggleModal(pokemon.name)"
                />
            </div>
            <AllFooter :allActive="viewAll" @show-all="changeList" />
        </div>
        <Transition>
            <ModalInfo :pokeObj="pokeObj" v-show="openModal" @close-modal="toggleModal('')" />
        </Transition>
        
    </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue'
import ListItem from '../components/ListItem.vue'
import AllFooter from '../components/AllFooter.vue'
import PageNotFound from '../components/PageNotFound.vue'
import ModalInfo from '../components/ModalInfo.vue'
import { usePokeStore } from '../stores/poke.js'
import { ref,computed } from 'vue'
import { useI18n } from "vue-i18n"
import { utils } from '../utils'

const pokeStore = usePokeStore()

const search = ref('')
const viewAll = ref(true)
const indexKey = ref(0)
const openModal = ref(false)
const pokeObj = ref({
            name: 'Squirtle',
            weight: '20',
            height: '18',
            type: 'Normal, Water',
            number: '6',
        })
const { t } = useI18n()

const changeList = (mode) => viewAll.value != mode ? viewAll.value = mode : ''

const currentList = computed(() => {
    if(viewAll.value)
        return pokeStore.getList.filter(poke => poke.name.includes(search.value))
    return pokeStore.getFavs.filter(poke => poke.name.includes(search.value))
})

const getPkmnNumber = (name) => {
    let realId
    pokeStore.getList.map((poke,index) => {
        if(poke.name == name)
            realId = index
    })
    return realId
}

const toggleFav = (name) => {
    pokeStore.updateFav(getPkmnNumber(name))
    indexKey.value++
}

const toggleModal = async(name) => {
    if(openModal.value)
        document.body.style.overflowY = "auto"
    else{
        document.body.style.overflowY = "hidden"
        let listNumber = getPkmnNumber(name)
        await fetch(`https://pokeapi.co/api/v2/pokemon/${listNumber+1}`).then(async(response) => {
            const json = await response.json()
            pokeObj.value = {
                name: utils.capitalizeFirst(name),
                height: json.height,
                weight: json.weight,
                number: listNumber,
                type: json.types.length > 1 ? 
                    `${utils.capitalizeFirst(json.types[0].type.name)}, ${utils.capitalizeFirst(json.types[1].type.name)}` :
                    utils.capitalizeFirst(json.types[0].type.name)
            }
        }).catch((err) => {
            alert(t('components.noApi'))
        })
    }
    
    setTimeout(() => {
        openModal.value = !openModal.value    
    }, 100);
    
}

</script>