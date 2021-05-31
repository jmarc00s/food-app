import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import store from '../store/index'


const routes = [
  {
    path: '',
    component: Login
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    beforeEnter: (to, from, next) => {
      if(store.getters.loggedIn){
        next();
        return;
      }
      next('');      
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
