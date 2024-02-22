import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory } from 'vue-router'
import { createRouter } from 'vue-router'
import routes from "./Routes"

const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router)

app.mount('#app')