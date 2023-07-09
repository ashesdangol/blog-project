import { createApp } from 'vue'
import './index.css'
import { store } from './store/store'
import App from './App.vue'

import VueCookies from "vue3-cookies"
import router from './router'


createApp(App).use(store).use(VueCookies, { expires: "3h", sameSite: 'none' }).use(router).mount('#app')
