<template>
  <div class="grid gap-3">
    <label :for="id">{{label}}</label>
    <input 
      :id="id"
      class="input" 
      :value="modelValue" 
      :type="type" 
      :placeholder="placeholder"
      @input="updateValue($event.target.value)">
  </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String, 
      required: true,
    },
    placeholder: [String],
    modelValue: [String]
  },
  data() {
    return {
      text: ''
    }
  },
  created() {
    this._validateProps();
  },
  methods: {
    _validateProps() {
      if(!this.type) console.error('É necessário informar um tipo para o input.');
      if(!this.label) console.error('É necessário informar um label para o input.');
      if(!this.id) console.error('É necessário informar um id para o input.');
    },
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>

<style>
.input{
  @apply mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-11 bg-gray-100 p-4
}
.input:focus{
  @apply border-purple-400
}
</style>