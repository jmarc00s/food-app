
import store from '../../store/index';

export default function(to, from, next) {  
  if(store.getters.isAuthenticated) 
    next();
  else 
    next({name: 'Login'}); 
}

