<template>
  <div class="h-full">
    <Auth title="Cadastre-se" description="Preencha o formulário para realizar o cadastro.">
      <j-input required class="form__name" id="form-name" v-model="form.name" type="text" label="Nome" />
      <j-input required class="form__lastname mt-2" id="form-lastname" v-model="form.lastName" type="text" label="Sobrenome" />
      <j-input required class="form__email mt-2" id="form-email" v-model="form.email" type="text" label="Email" />
      <j-input required validatePassword class="form__password mt-2" id="form-password" v-model="form.password" type="password" label="Senha" />
      <j-input required validatePassword class="form__password mt-2" id="form-password-confirm" v-model="form.passwordConfirm" type="password" label="Confirmação de senha" />
      <j-button class="pt-3" title="Cadastrar" @click="signUp(form)"/>
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

import md5 from 'md5';

export default {
  components: { Auth, JInput, JButton },  
  setup(){
    const form = ref({
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });
    
    return {
      form
    }
  },
  methods: {
    async signUp() {
      const users = await this.$http('users');

      const id = ++(users.data.length);
      
      if(this._validateSignupForm(this.form)){
        this._encryptPassword(this.form);
        await this._createUser({id, ...this.form});
      }
    },
    async _createUser(body) { 
      const data = await this.$http.post('users', body);

      if(data) {
        window.alert('Cadastro realizado com sucesso!');
        this.$router.push('/');
      }

    },
    _encryptPassword(form) {
      form.password = md5(form.password);
      form.passwordConfirm = md5(form.passwordConfirm);
    },
    _validateSignupForm(form) {

      if(!form) {
        window.alert('É necessário informar dados para realizar o cadastro.');
        return false;
      }

      if(!form.name){
        window.alert('É necessário informar um nome.');
        return false;
      }

      if(!form.lastName){
        window.alert('É necessário informar um sobrenome.');
        return false;
      }

      if(!form.email){
        window.alert('É necessário informar um email.');
        return false;
      }

      if(!form.password){
        window.alert('É necessário informar uma senha.');
        return false;
      }

      if(!form.passwordConfirm){
        window.alert('É necessário informar a confirmação da senha.');
        return false;
      }

      if(form.password !== form.passwordConfirm){
        window.alert('Senha e confirmação não correspondem.');
        return false;
      }

      return true;
    }
  }
}
</script>

<style scoped>
.form__login {
  @apply flex justify-center mt-3 text-sm
}

.form__link {
  @apply text-indigo-500 ml-3 text-sm
}

.form__link:hover {
  @apply underline
}
</style>