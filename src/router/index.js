import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/eletronic',
    name: 'eletronic',
    component: () => import(/* webpackChunckName: "eletronic" */ '../views/EletronicView.vue')
  },
  {
    path: '/eletronicsAll',
    name: 'eletronicsAll',
    component: () => import(/* webpackChunckName: "eletronicsAll" */ '../views/EletronicsAllView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunckName: "products" */ '../views/ProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
