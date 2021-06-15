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
        addShoppingCartItem: ({commit}, payload) => {
          commit('addItem', payload)
        },
        removeShoppingCartItem: ({commit}, payload) => commit('removeItem', payload),
        removeShoppingCartItemById: function({commit, state}, id) {
          const item = state.items.filter(c => c.item.id === id)[0];
          commit('removeItem', item);
        }
      },
      getters: {
        shoppingCartItems: state => state.items,
        shoppingCartItemsCount: state => state.items.length,
        shoppingCartTotal: state => state.items.reduce((acc, curr) => acc += curr.item.price * curr.quantity, 0),
        dishInCart: (state) => (dishId) => state.items.map(c => c.item.id).includes(dishId)
      }
};
