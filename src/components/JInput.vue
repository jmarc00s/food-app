<template>
  <div class="grid">
    <label class="label" :class="{'error': inputWithError}" :for="id">{{label}}</label>
    <input 
      @blur="afterBlur"
      autocomplete="off"
      :id="id"
      class="input" 
      :class="{'error': inputWithError}"
      :value="modelValue" 
      :type="type" 
      :placeholder="placeholder"
      @input="updateValue($event.target.value)">
    <p class="error-message" v-if="inputWithError" >{{errorMessage}}</p>
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
      inputWithError: false,
      errorMessage: ''
    }
  },
  created() {
    this._validateProps();
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    },
    afterBlur(){
      this._validateRequired(this.modelValue);
    },
    _validateProps() {
      if(!this.type) console.error('É necessário informar um tipo para o input.');
      if(!this.label) console.error('É necessário informar um label para o input.');
      if(!this.id) console.error('É necessário informar um id para o input.');
    },
    _validateRequired(value) {
      this.inputWithError = this.required && !value.length;
      this.errorMessage = 'Campo obrigatório';
    }
  },
  watch: {
    modelValue: function(val) {
      this._validateRequired(val);
    },
    inputWithError: function(val) {
      if(!val) 
        this.$emit('valid', true);
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
.input.error {
  @apply border-red-600 
}
label.error {
  @apply text-red-600
}
.error-message {
  @apply text-xs pt-1 text-red-600 
}
</style>