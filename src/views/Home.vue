<template>
  <div class="home-container">
    <div class="card-grid">
        <j-card 
            v-for="dish in dishes" 
            :key="dish.id" 
            :title="dish.title" 
            :description="dish.description"
            :imageUrl="dish.url"
            @buyClick="addToCart(dish.id)" />
    </div> 
  </div>
</template>

<script>
import JCard from '../components/JCard';
import { http } from '../plugins/axios';

export default {  
    components: { JCard },  
    computed: {
        user(){
            return this.$store.getters.user;
        } 
    },
    beforeRouteEnter(to, from, next){
        const pDishes = http('dishes');
        pDishes.then(res => next(vm => vm.setDishes(res.data)), err => console.log(err));
    },    
    data() {
        return {
            dishes: []
        }
    },
    methods: {
        setDishes(dishes) {
            this.dishes = dishes;
        },
        addToCart(id) {
            console.log(id);
        }
    }
}
</script>

<style scoped>
.card-grid{ 
    @apply grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1
}
.home-container{
    @apply container mx-auto flex xl:p-40
}
</style>