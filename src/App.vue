<template>
  <div id="main">   
    <j-navbar v-if="isAuthenticated" />
    <router-view/>
  </div>
</template>
<script>
import JNavbar from './components/JNavBar';
export default {
  components: { JNavbar },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
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
