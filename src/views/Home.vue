<template>
  <div class="home-container">
      <h1>HOME COMPONENT</h1>
      {{ user }}
      <j-button title="LogOff" v-on:onClick="logOff()"/>
  </div>
</template>

<script>
import JButton from '../components/JButton'

export default {
    components: { JButton } ,
    computed: {
        user(){
            return this.$store.getters.user;
        } 
    },
    methods: {
        logOff() {
            this.$store.dispatch('logOff')
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.home-container{
    @apply container mx-auto flex p-40;
}
</style>