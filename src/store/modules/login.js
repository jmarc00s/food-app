export default {
    state: {
        loggedIn: false,
        loggedUser: {},
      },
      mutations: {
        setUser(state, payload){
          state.loggedIn = true;
          state.loggedUser = payload;
        },
        removeUser(state) {
          state.loggedUser = {};
          state.loggedIn = false;
        }
      },
      actions: {
        logIn: ({commit}, payload) => commit('setUser', payload),
        logOut: ({commit}) => commit('removeUser')
      },
      getters: {
        user: state => state.loggedUser,
        loggedIn(state)  {
            return state.loggedIn
        } 
      }
};
