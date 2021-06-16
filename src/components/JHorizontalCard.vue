<template>
  <div>
      <div class="w-full h-full overflow-hidden rounded-lg shadow-lg sm:flex bg-white">
        <div class="w-full sm:w-1/3">
            <img class="object-cover w-full h-full" :src="imageUrl"/>
        </div>
        <div class="flex-1 px-6 py-4">
            <h4 class="mb-3 text-xl font-medium tracking-tight text-gray-900">{{title}}</h4>
            <p class="leading-normal text-gray-600">Id do produto: {{id}}</p>
            <div class="flex flex-col mt-5">
              <div class="card__quantity"> 
                Quantidade:  
                <button @click="decreaseQuantity()" class="card__quantity" :disabled="quantity <= 0"> - </button>  {{quantity}} <button class="card__quantity" @click="increaseQuantity()">+</button> 
              </div> 
              <span class="card__total">Total: {{$filters.currency(total ?? 0)}} </span> 
              <div class="w-full mt-3">
                <JButton title="Remover item" @onClick="removeFromCart(id)" />
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import JButton from '../components/JButton.vue'

export default {
  emits: ['increaseQuantity', 'decreaseQuantity'],
  components: { JButton },
  props: ['title', 'imageUrl', 'id', 'quantity', 'price'],    
  computed: {
    total() {
      return (this.quantity * this.price).toFixed(2)
    } 
  },
  methods: {
    removeFromCart(id) {         
      this.$store.dispatch('removeShoppingCartItemById', id);
    },
    increaseQuantity() {
      this.$emit('increaseQuantity');
    },
    decreaseQuantity(){
      this.$emit('decreaseQuantity');
    }
  }
}
</script>

<style>
.card__quantity {
  @apply text-gray-800 mb-3
}
.card__total {
  @apply text-gray-800 font-semibold
}
.card__quantity {
  outline: none;
  border: none;
  @apply px-4 text-lg
}
.card__quantity:active{
  outline: none;
  border: none;
}
.card__quantity:focus {
  outline: none;
  border: none;
}
</style>