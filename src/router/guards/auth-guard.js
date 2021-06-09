
import store from '../../store/index';

export const authGuard = function(to, from, next) {
  
  if(store.getters.isAuthenticated) 
    next();    
  else 
    next({name: 'Login'}); 
}

