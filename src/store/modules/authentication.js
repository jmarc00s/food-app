export default {
    state: {
        isAuthenticated: false,
        user: {},
      },
      mutations: {
        setUser(state, payload){
          state.isAuthenticated = true;
          state.user = payload;
        },
        removeUser(state) {
          state.user = {};
          state.isAuthenticated = false;
        }
      },
      actions: {
        logIn: ({commit}, payload) => commit('setUser', payload),
        logOut: ({commit}) => commit('removeUser')
      },
      getters: {
        user: state => state.user,
        isAuthenticated(state)  {
            return state.isAuthenticated
        } 
      }
};
