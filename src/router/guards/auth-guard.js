
import store from '../../store/index';

export const authGuard = function(to, from, next) {
    if(store.getters.loggedIn){
      next();
      return;
    }
    next(''); 
}

