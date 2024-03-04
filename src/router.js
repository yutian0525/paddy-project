// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import DigitalPaddy from './views/DigitalPaddy.vue'
import GrowPredict from './views/GrowPredict.vue'
import DiseasePredict from './views/DiseasePredict.vue'
import ProjectIntroduction from './views/ProjectIntroduction.vue'
import Loginpage from './views/Loginpage.vue'
import RegisterPage from './views/RegisterPage.vue'
import UserPage from './views/UserPage.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/DigitalPaddy', component: DigitalPaddy },
  { path: '/GrowPredict', component: GrowPredict },
  { path: '/DiseasePredict', component: DiseasePredict },
  { path: '/ProjectIntroduction', component: ProjectIntroduction },
  { path: '/Loginpage', component: Loginpage },
  { path: '/RegisterPage',component: RegisterPage},
  { path:'/UserPage',component:UserPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
