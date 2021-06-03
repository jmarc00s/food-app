<template>
  <div class="h-full">
    <Auth title="Cadastre-se" description="Teste de descrição">
      <j-input :required="true" class="form__name" id="form-name" v-model="form.name" type="text" label="Nome" />
      <j-input :required="true" class="form__lastname" id="form-lastname" v-model="form.lastName" type="text" label="Sobrenome" />
      <j-input :required="true" class="form__email" id="form-email" v-model="form.email" type="text" label="Email" />
      <j-input :required="true" class="form__password" id="form-password" v-model="form.password" type="password" label="Senha" />
      <j-button class="pt-6" title="Cadastrar" />
      <div class="form__login">    
        <p>Já é cadastrado?</p>
        <router-link to="/"  class="form__link">Realize o login</router-link>
      </div>
    </Auth>    
  </div>
</template>

<script>
import { ref } from 'vue';
import Auth from '../components/auth/Auth';
import JInput from '../components/JInput';
import JButton from '../components/JButton';

export default {
  components: { Auth, JInput, JButton},
  setup(){
    const form = ref({
      name: '',
      lastName: '',
      email: '',
      password: ''
    });

    

    return {
      form
    }
  }
}
</script>

<style scoped>
.form__login {
  @apply flex justify-center mt-5 text-sm
}

.form__link {
  @apply text-indigo-500 ml-3 text-sm
}

.form__link:hover {
  @apply underline
}
</style>