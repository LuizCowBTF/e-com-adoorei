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
    path: '/admin/categories',
    name: 'categories',
    component: () => import(/* webpackChunckname: "categories" */ '../views/CategoriesView.vue')
  },
  {
    path: '/admin/product/add',
    name: 'product',
    component: () => import(/* webpackChunckName: "product" */ '../views/AddProduct.vue')
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
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunckName: "carrinho" */ '../views/CarrinhoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
