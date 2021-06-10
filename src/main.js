import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../style.css'
import { http } from './plugins/axios';


const app = createApp(App);

app.config.globalProperties.$filters = {
    currency: value => 'R$' + value.toString().replace('.', ','),
};

app.config.globalProperties.$http = http;

app.use(store).use(router).mount('#app');
