import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/components/WelcomePage.vue'
import ProductList from '@/components/ProductList.vue'
import CartPage from '@/components/CartPage.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import PaymentPage from '../components/PaymentPage.vue'

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/payment',
    component: () => import('@/components/PaymentPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/tees/'), // ✅ Add base URL here
  routes
})

export default router
