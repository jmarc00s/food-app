import { createStore } from 'vuex'

export default createStore({
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
    logOff: ({commit}) => commit('removeUser')
  },
  getters: {
    user: state => state.loggedUser,
    loggedIn: state => state.loggedIn
  }
})
