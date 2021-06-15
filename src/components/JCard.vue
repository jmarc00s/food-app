<template>
   <div class="p-4 w-full h-full">
    <div class="rounded overflow-hidden shadow-lg bg-gray-100 w-full h-full">
      <img class="max-w-full" :src="imageUrl" alt="dishImage">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{title}}</div>
        <p class="text-gray-700 text-base h-full">
          {{description}}
        </p>
      </div>
      <div class="px-6 py-6">
          <j-button :disabled="disabled" title="Adicionar ao carrinho" @onClick="emitAddToCart"/>
      </div>
    </div>
  </div>
</template>

<script>
import JButton from './JButton.vue';

export default {
  emits: ['addToCart'],
  components: { JButton },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String
        },
        disabled: {
            type: Boolean
        }
    },
    data() {
        return {

        }
    },
    methods: {
      emitAddToCart(){
        this.$emit('addToCart');
      }
    }
}
</script>

<style>
.card {
    @apply max-w-sm rounded overflow-hidden shadow-lg p-4
}
</style>