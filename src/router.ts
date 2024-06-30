import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/home', component: HomeView },
  { path: '/', component: HomeView },
  { path: '/*', component: NotFound, name: 'NotFound' },
]


export  const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
