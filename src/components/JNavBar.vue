<template>
  <div class="navbar">
     <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
        <div @click="toggleMobileMenu()" class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" class="mobile-menu-button" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div class="menu"> 
            <div class="title">
                <span><a to="/home">ThaiFood</a></span>
            </div>
            <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">                
                    <router-link active-class="active" to="/home" class="menu-item" aria-current="page" exact>Início</router-link>                    
                    <router-link active-class="active" to="/cart" class="menu-item" aria-current="page" exact>
                        Carrinho
                        <j-badge v-if="cartItemsCount" :value="cartItemsCount" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span class="text-white hidden md:block">Bem vindo, {{ user.name }}. </span>
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
            <div>
                <button @click="toggleUserMenu()" type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1" alt="">
                </button>
            </div>
            <div v-if="showUserMenu" class="dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">                            
                <a href="#"  @click="logOut()" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sair</a>
            </div>
            </div>
        </div>
        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMobileMenu" class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link active-class="active" to="/home" class="menu-item block" aria-current="page" exact>Início</router-link>
            <router-link active-class="active" to="/checkout" class="menu-item block" aria-current="page" exact>Carrinho</router-link>
        </div>
    </div>
    </nav>

  </div>
</template>

<script>
import JBadge from './JBadge.vue'
export default {
    components: { JBadge },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        cartItemsCount() {
            return this.$store.getters.shoppingCartItemsCount
        }
    },
    data() {
        return {
            showUserMenu: false,
            showMobileMenu: false
        }
    },
    methods: {
        toggleMobileMenu(){
            this.showMobileMenu = !this.showMobileMenu; 
        },
        toggleUserMenu() {
            this.showUserMenu = !this.showUserMenu;
        },
        logOut() {
            this.$store.dispatch('logOut')
            this.$router.push('/')
        }
    }
}
</script>

<style>
.mobile-menu-button {
    @apply inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
}
.title {
    @apply text-gray-300 flex items-center
}
.active {
    @apply bg-gray-900 text-white
}
.menu {
    @apply flex-1 flex items-center justify-center sm:items-stretch sm:justify-start
}
.menu-item {
    @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
}
.dropdown-menu {
    @apply origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
}
</style>