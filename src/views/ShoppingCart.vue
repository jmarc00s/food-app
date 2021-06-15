<template>
  <div class="cart__container">
      <div class="flex-1 w-full bg-gray-50 p-10">
          <div class="cart__header">            
            <h3 class="cart__title">Carrinho de compras</h3>
            <span>{{ cartItemsCount }} item(ns)</span>
          </div>
          <div class="cart__body">
              <div class="cart__items">
                    <JHorizontalCard 
                      class="cart__item"
                      v-for="cartItem in cartItems"
                      :key="cartItem.id" 
                      :title="cartItem.item.title" 
                      :imageUrl="cartItem.item.url"
                      :id="cartItem.item.id"
                      :price="cartItem.item.price"
                      :quantity="cartItem.quantity"
                      @increaseQuantity="increaseQuantity(cartItem)"
                      @decreaseQuantity="decreaseQuantity(cartItem)"/>
              </div>
              <div class="cart__summary">
                  <span class="font-semibold text-sm">Resumo</span>
                  <span>Total: {{$filters.currency(cartTotal ?? 0)}}</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import JHorizontalCard from '../components/JHorizontalCard.vue'

export default {
  components: { JHorizontalCard },
  computed: {
    cartItemsCount(){
      return this.$store.getters.shoppingCartItemsCount
    },
    cartItems() {
      return this.$store.getters.shoppingCartItems
    },
    cartTotal() {
      return (this.$store.getters.shoppingCartTotal).toFixed(2)
    }
  },
  methods: {
    increaseQuantity(cartItem) {      
      cartItem.quantity += 1;
    },
    decreaseQuantity(cartItem) {
      if(cartItem <= 1) return;

      cartItem.quantity -= 1;
    }
  }
}
</script>

<style>
.cart__container {
  @apply container mx-auto flex flex-col xl:p-8 
}
.cart__header {
  @apply flex items-center
}
.cart__title {
  @apply text-lg font-bold pr-2;
}
.cart__body {
  @apply grid grid-cols-1 lg:grid-cols-5 pt-10 gap-4
}
.cart__items {
  flex: 3;  
  @apply grid grid-cols-1 lg:grid-cols-2 col-span-4 gap-3
}

.cart__item {
  
}
.cart__summary {
  flex: .3;  
  @apply bg-white shadow-lg rounded-lg p-8 mt-5 md:mt-0 flex flex-col gap-2
}
</style>