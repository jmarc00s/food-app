<template>
  <div class="login">
    <p> Realize o login na aplicação</p>
    <div class="formulario-login">
      <j-input v-model="form.login" type="text" label="Usuário"  />
      <j-input v-model="form.password" type="password" label="Senha"/>
      <j-button title="Entrar" v-on:onClick="logIn(form)"/>
    </div>
  </div>  
</template>

<script>
import JInput from '../components/JInput';
import JButton from '../components/JButton';
import { http } from '../plugins/axios';
import md5 from 'md5';

export default {
  components: { JInput, JButton },
  data() {
    return {
      form: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    logIn: function(form){      
      if(!this._checkFormData(form)) return;

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
    _checkFormData(form) {
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

<style>
.formulario-login {
  @apply flex flex-col gap-2 
}

.login {  
  @apply h-96 bg-white flex flex-col container justify-center items-center mx-auto w-full rounded self-center gap-5
}

</style>