<template>
  <div class="login">        
    <div @keypress.enter="logIn(form)" class="form">
      <div class="form__header">
        <img class="form__icon" src="../assets/dish.svg" alt="dish">
        <h2 class="brand">ThaiApp</h2>
        <h4 class="text-sm">Faça o login para acessar a aplicação.</h4>
      </div>
      <div class="form__body">
        <j-input :required="true" class="form__user" id="form-user" v-model="form.user" type="text" label="Usuário"  />
        <j-input :required="true" class="form__password" id="form-password" v-model="form.password" type="password" label="Senha"/>
        <div class="form__options">       
          <j-checkbox label="Manter conectado" id="manter-conectado" v-model="form.keepLoggedIn" />  
          <router-link to="/" class="form__link">Esqueceu a senha ?</router-link>     
        </div>
        <j-button class="form__button" title="Entrar" v-on:onClick="logIn(form)"/>
        <div class="form__signUp">    
          <p>Ainda não tem uma conta?</p>
          <router-link to="/sign-up"  class="form__link">Cadastre-se</router-link>
        </div>
      </div>            
    </div>
  </div>  
</template>

<script>
import JInput from '../components/JInput';
import JButton from '../components/JButton';
import JCheckbox from '../components/JCheckbox';

import { http } from '../plugins/axios';
import md5 from 'md5';

export default {
  components: { JInput, JButton, JCheckbox },
  data() {
    return {
      form: {
        user: '',
        password: '',
        keepLoggedIn: false
      }
    }
  },
  methods: {
    logIn(form){      
      if(!this._validateLoginForm(form)) return;

      const pLogin = http.get(`users?login=${form.user}&password=${md5(form.password)}`);
      pLogin.then(res => {
        if(res.data.length) {
          this.$store.dispatch('logIn', res.data[0]);
          this.$router.push('/home');
          return;
        }
        window.alert('Usuário e/ou senha incorretos');
      }).catch(e => console.error(e));
    },
    _validateLoginForm(form) {
      
      if(!form){
        window.alert("É necessário informar dados para login.");
        return false;
      }
      if(!form.user){
        window.alert("Login não informado.");
        return false;
      }
      if(!form.password){
        window.alert("Senha não informado.");
        return false;
      }

      return true;
    }
  }

}
</script>

<style scoped>
.brand {
  @apply text-3xl font-extrabold tracking-wide
}
 
.form {
  @apply flex flex-col bg-white pt-8 px-10 rounded-lg w-full md:h-2/3 sm:h-full shadow
}

.form__icon {
  @apply w-16 pb-5 
}

.form__body {
  @apply mt-3
}

.form__user {
  @apply pt-3
}

.form__password {
  @apply py-3
}

.form__options {
  @apply flex justify-between my-3 
}

.form__button {
  @apply mt-5
}

.form__signUp {
  @apply flex justify-center mt-5 text-sm
}

.form__link {
  @apply text-indigo-500 ml-3 text-sm
}

.form__link:hover {
  @apply underline
}

.login {   
  @apply flex flex-col justify-center items-center mx-auto rounded-lg self-center gap-5 h-full sm:w-full md:w-1/5
}

</style>