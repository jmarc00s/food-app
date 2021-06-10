export default {
    state: {
        items: [],
      },
      mutations: {
        addItem(state, payload){
          state.items.push(payload);
        },
        removeItem(state, payload) {
          const item = state.items.filter(c => c.item.id === payload.id)[0];
          state.items.splice(state.items.indexOf(item), 1);
        },
        increaseQuantity(state, payload) {
          const item = state.items.filter(c => c.item.id === payload.id)[0];
          state.items[state.items.indexOf(item)].quantity += 1;
        }        
      },
      actions: {
        addShoppingCartItem: ({commit, state}, payload) => {
          if(state.items.some(c => c.item.id === payload.id)){
            commit('increaseQuantity', payload)
            return;
          }
          commit('addItem', payload)
        },
        removeShoppingCartItem: ({commit}, payload) => commit('removeItem', payload)
      },
      getters: {
        shoppingCartItems: state => state.items,
        shoppingCartItemsCount: state => state.items.length,
        shoppingCartTotal: state => state.items.reduce((acc, curr) => acc += curr.item.price * curr.quantity, 0)
      }
};
