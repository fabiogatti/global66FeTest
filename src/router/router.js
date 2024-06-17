import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import AllList from '../views/AllList.vue'
import NotFound from '../components/PageNotFound.vue'
import { usePokeStore } from '../stores/poke'


const routes = [
  { path: '/', component: Home },
  { path: '/all', 
    component: AllList,
    beforeEnter: (to, from) => {
      //Reject the navigation if the list is empty
      const store = usePokeStore()
      if(store.getList.length == 0)
        return { path: '/' }
    },
  },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export const router = createRouter({
  history: createWebHistory('/global66FeTest/'),
  routes,
})