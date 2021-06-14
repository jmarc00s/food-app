<template>
  <div class="alert" :class="type">      
      <span class="alert__message">{{message}}</span>
  </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'info',
            validation: (value) => ['success', 'danger', 'warning', 'info'].includes(value)
        }
    }
}
</script>

<style scoped>
    .alert {
        @apply w-full h-8 p-6 flex items-center rounded bg-opacity-50
    }    
    .alert__message {
        @apply text-base
    }
    .info {
        @apply bg-blue-500 bg-opacity-50 text-blue-800
    }
    .danger {
        @apply bg-red-500 bg-opacity-50 text-red-800
    }
    .success {
        @apply bg-green-600 bg-opacity-50 text-green-800
    }
    .warning {
        @apply bg-yellow-500 bg-opacity-50 text-yellow-800
    }
</style>