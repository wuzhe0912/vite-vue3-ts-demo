import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuex from './store'

// styles
import './scss/main.scss'

const app = createApp(App);

app.use(router);
app.use(vuex);
app.mount('#app');
