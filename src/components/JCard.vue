<template>
   <div class="p-4 w-full">
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg bg-gray-100">
      <img class="w-full" :src="imageUrl" alt="dishImage">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{title}}</div>
        <p class="text-gray-700 text-base">
          {{description}}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#thailand</span>        
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

    }
}
</script>

<style>
.card {
    @apply max-w-sm rounded overflow-hidden shadow-lg p-4
}
</style>