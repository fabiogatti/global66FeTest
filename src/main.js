import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { translateObj } from './i18n.js'
import { router } from './router/router'
import './style.css'
import App from './App.vue'

const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    ...translateObj
})
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
