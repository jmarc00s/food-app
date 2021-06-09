import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import { authGuard } from "./guards/auth-guard.js";

const routes = [
  {
    path: '',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next)
  },
  {
    path: '/checkout',
    component: () => import('../views/Checkout.vue'),
    beforeEnter: (to, from, next) => authGuard(to, from, next)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
