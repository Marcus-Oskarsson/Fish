import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import toastOptions from './fishNotification'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(Toast, toastOptions).mount('#app')
