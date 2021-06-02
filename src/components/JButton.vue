<template>
  <div class="flex">
      <button @click="$emit('onClick')" class="btn">
          {{title}}
      </button>
  </div>
</template>

<script>
export default {
    emits: ['onClick'],
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.btn {
    @apply p-2 bg-indigo-500 text-white text-sm rounded shadow-sm cursor-pointer w-full outline-none
}
.btn:hover {
    @apply bg-indigo-600
}
</style>