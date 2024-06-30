import './style.css'
import './scroll.js'
import 'flowbite';
import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
