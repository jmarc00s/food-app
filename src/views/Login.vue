<template>
  <div class="login">        
    <div class="form">
      <div class="form__header">
        <h2 class="brand">ThaiApp</h2>
        <h4>Faça o login para acessar a aplicação</h4>
      </div>

      <j-input class="form__user" id="form-user" v-model="form.user" type="text" label="Usuário"  />
      <j-input class="form__password" id="form-password" v-model="form.password" type="password" label="Senha"/>
      <div class="form__options">       
        <j-checkbox label="Manter conectado" id="manter-conectado" v-model="form.keepLoggedIn" />       
      </div>
      <j-button class="form__button" title="Entrar" v-on:onClick="logIn(form)"/>
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

      const pLogin = http.get(`users?login=${form.login}&password=${md5(form.password)}`);
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
      if(!form.login){
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

.form__header {
  @apply text-center;
}

.brand {
  @apply text-center text-3xl font-bold tracking-wide pb-3
}
 
.form {
  @apply flex flex-col justify-center bg-white py-5 px-10 rounded w-full h-1/3
}

.form__user {
  @apply pt-3
}

.form__password {
  @apply py-3
}

.form__options {
  @apply flex justify-between py-3 
}

.form__button {
  
}

.login {   
  @apply  flex flex-col justify-center items-center mx-auto rounded self-center gap-5 h-full sm:w-52 md:w-1/4
}

</style>