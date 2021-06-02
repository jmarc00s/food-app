<template>
  <div class="flex justify-center">
      <input 
        class="input" 
        :value="modelValue" 
        @input="updateValue($event.target.checked)" 
        type="checkbox" 
        :id="id">
        
      <label class="label" :for="id">{{label}}</label>
  </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        modelValue: [Boolean]
    },
    methods: {
        updateValue(value){
            this.$emit('update:modelValue', value);
        }
    }
}
</script>

<style scoped>

.input{
    @apply text-lg w-4 h-4 text-indigo-500
}
.label {
    @apply text-sm pl-2
}

</style>