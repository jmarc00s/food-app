<template>
  <div>
      <div class="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex bg-white">
        <div class="w-full sm:w-1/3">
            <img class="object-cover w-full h-48" :src="imageUrl"/>
        </div>
        <div class="flex-1 px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{{title}}</h4>
            <p class="leading-normal text-gray-700">Id do produto: {{id}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'imageUrl', 'id', 'quantity', 'price'],
    methods: {

    }
}
</script>

<style>

</style>