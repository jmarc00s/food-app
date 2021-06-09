
import store from '../../store/index';

export const authGuard = function(to, from, next) {
  console.log(store.getters.isAuthenticated);

  if(store.getters.isAuthenticated) 
    next();    
  else 
    next({name: 'Login'}); 
}

