// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import DigitalPaddy from './views/DigitalPaddy.vue'
import GrowPredict from './views/GrowPredict.vue'
import DiseasePredict from './views/DiseasePredict.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/DigitalPaddy', component: DigitalPaddy },
  { path: '/GrowPredict', component: GrowPredict },
  { path: '/DiseasePredict', component: DiseasePredict }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
