import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue'
import Clientes from '../pages/Clientes.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/clientes', component: Clientes, meta: { requiereAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
