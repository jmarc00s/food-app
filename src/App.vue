<template>
  <div id="main">   
    <j-navbar v-if="loggedIn" />
    <router-view/>
  </div>
</template>
<script>
import JNavbar from './components/JNavBar';
export default {
  components: { JNavbar },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    } 
  }
}
</script>
<style scoped>
#main {      
  height: 100vh;
  @apply flex flex-col bg-gray-200 p-0 m-0
}
</style>
