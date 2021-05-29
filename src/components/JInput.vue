<template>
  <div class="grid gap-3">
    <label for="">{{label}}</label>
    <input 
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
    },
    updateValue(value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>

<style>
.input{
  @apply mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md
}
</style>