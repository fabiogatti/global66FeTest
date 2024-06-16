import { defineStore } from 'pinia'

export const usePokeStore = defineStore('poke', {
  state: () => ({
    pokeList: []
  }),
  getters: {
    getList(){
      return this.pokeList
    },
    getFavs(){
      return this.pokeList.filter(poke => poke.isFav == true)
    }
  },
  actions: {
    createList(array){
      this.pokeList = array.map(poke => {return {... poke, isFav: false } })
    },
    updateFav(id){
      this.pokeList[id].isFav = !this.pokeList[id].isFav
    }
  }
})