import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import router from './router'
app.use(router)

import ligaolin from "ligaolin"
app.use(ligaolin)

app.mount('#app')
