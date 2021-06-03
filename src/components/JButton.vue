<template>
  <div class="flex">
      <button :disabled="disabled" @click="$emit('onClick')" class="btn">
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
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.btn {
    @apply p-2 bg-indigo-500 text-white text-sm rounded-xl shadow-sm cursor-pointer w-full outline-none transition-all 
}
.btn:hover {
    @apply bg-indigo-600
}
.btn:disabled {
    @apply bg-gray-300 text-gray-500 cursor-default
}
</style>