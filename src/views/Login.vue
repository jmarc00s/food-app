<template>
  <Auth @keyup.enter="logIn(form)" title="ThaiApp" description="Faça o login para acessar a aplicação.">
     <j-input required class="form__email" id="form-email" v-model="form.email" type="text" label="E-mail"  />
      <j-input required class="form__password" id="form-password" v-model="form.password" type="password" label="Senha"/>
      <div class="form__options">       
        <j-checkbox label="Manter conectado" id="manter-conectado" v-model="form.keepLoggedIn" />  
        <router-link to="/" class="form__link">Esqueceu a senha ?</router-link>     
      </div>
      <j-button class="form__button" title="Entrar" v-on:onClick="logIn(form)"/>
      <div class="form__signUp">    
        <p>Ainda não tem uma conta?</p>
        <router-link to="/sign-up"  class="form__link">Cadastre-se</router-link>
      </div>
  </Auth>
</template>

<script>
import JInput from '../components/JInput';
import JButton from '../components/JButton';
import JCheckbox from '../components/JCheckbox';
import Auth from '../components/auth/Auth.vue'
import md5 from 'md5';

export default {
  components: { JInput, JButton, JCheckbox, Auth },
  data() {
    return {
      form: {
        email: '',
        password: '',
        keepLoggedIn: false
      }
    }
  },
  methods: {
    logIn(form){      
      if(!this._validateLoginForm(form)) return;

      const pLogin = this.$http(`users?email=${form.email}&password=${md5(form.password)}`);
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
      if(!form.email){
        window.alert("Email não informado.");
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
  @apply flex flex-col justify-center items-center mx-auto rounded-lg self-center gap-5 h-full w-full lg:w-2/5 xl:w-2/6
}

</style>