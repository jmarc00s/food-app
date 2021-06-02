<template>
  <div class="grid">
    <label class="label" :for="id">{{label}}</label>
    <input 
      autocomplete="off"
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
    modelValue: [String],
    required: {
      type: Boolean,
      default: false
    }
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

<style scoped>
.label {
  @apply text-sm p-0 pb-1
}
.input{
  @apply block w-full shadow-sm sm:text-sm rounded h-11 p-4 outline-none border-solid border border-gray-400 
}
.input:focus{
  @apply border-indigo-500
}
</style>