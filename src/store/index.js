import { createStore } from 'vuex';
import authentication from './modules/authentication';
import shoppingCart from './modules/shopping-cart';

export default createStore({
  modules: {
    authentication,
    shoppingCart
  }
})
