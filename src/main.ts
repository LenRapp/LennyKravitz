import { createApp, type App as VueApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/tailwind.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faMagnifyingGlass, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faPlay, faPause)
const app: VueApp = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
