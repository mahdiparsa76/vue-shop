import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CartPage from '../views/CartPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: CartPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
