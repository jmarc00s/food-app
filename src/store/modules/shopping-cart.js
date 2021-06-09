export default {
    state: {
        items: [],
      },
      mutations: {
        addItem(state, payload){
          state.items.push(payload);
        },
        removeItem(state, payload) {
            state.items.splice(state.items.indexOf(payload), 1);
        }
      },
      actions: {
        addShoppingCartItem: ({commit}, payload) => commit('addItem', payload),
        removeShoppingCartItem: ({commit}, payload) => commit('removeItem', payload)
      },
      getters: {
        shoppingCartItems: state => state.items,
        shoppingCartItemsCount: state => state.items.length
      }
};
