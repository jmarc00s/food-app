import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import { authGuard } from "./guards/auth-guard.js";
import { dishResolver } from './resolver/dish-resolver.js';

const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      authGuard(to, from, next)
      dishResolver(to, from, next)
    }
  },
  {
    path: '/sign-up',
    component: () => import('../views/Signup.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
