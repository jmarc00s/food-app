<template>
  <div class="login">
    <p> Realize o login na aplicação</p>
    <div class="form" >
      <j-input id="form-login" v-model="form.login" type="text" label="Usuário"  />
      <j-input id="form-password" v-model="form.password" type="password" label="Senha"/>
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
    logIn(form){      
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
.form {
  @apply grid grid-cols-1 gap-4
}

.login {  
  @apply h-full bg-white flex flex-col container justify-center items-center mx-auto w-full rounded self-center gap-5
}

</style>