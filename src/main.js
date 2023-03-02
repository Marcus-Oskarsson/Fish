import { createApp } from 'vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import App from './App.vue';
import toastOptions from './fishNotification';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toast, toastOptions);
app.mount('#app');
