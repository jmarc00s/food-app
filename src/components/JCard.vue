<template>
   <div class="p-4 w-full">
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg bg-gray-100 w-full">
      <img class="w-full" :src="imageUrl" alt="dishImage">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{title}}</div>
        <p class="text-gray-700 text-base">
          {{description}}
        </p>
      </div>
      <div class="px-6 py-6">   
          <j-button title="Comprar" @onClick="emitBuy()"/>
      </div>
    </div>
  </div>
</template>

<script>
import JButton from './JButton.vue';

export default {
  emits: ['buyClick'],
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
        }
    },
    data() {
        return {

        }
    },
    methods: {
      emitBuy(){
        this.$emit('buyClick');
      }
    }
}
</script>

<style>
.card {
    @apply max-w-sm rounded overflow-hidden shadow-lg p-4
}
</style>