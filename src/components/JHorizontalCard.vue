<template>
  <div>
      <div class="w-full h-full overflow-hidden rounded-lg shadow-lg sm:flex bg-white">
        <div class="w-full sm:w-1/3">
            <img class="object-cover w-full h-full" :src="imageUrl"/>
        </div>
        <div class="flex-1 px-6 py-4">
            <h4 class="mb-3 text-xl font-medium tracking-tight text-gray-900">{{title}}</h4>
            <p class="leading-normal text-gray-600">Id do produto: {{id}}</p>
            <div class="flex flex-col mt-5 ">
              <span class="card__quantity">Quantidade: {{quantity}} </span> 
              <span class="card__total">Total: {{$filters.currency(total ?? 0)}} </span> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'imageUrl', 'id', 'quantity', 'price'],    
    computed: {
      total() {
        return this.quantity * this.price;
      }
    },
    methods: {

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
</style>