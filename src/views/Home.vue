<template>
  <div class="home-container">
    <div class="card-grid">
        <j-card 
            v-for="dish in dishes" 
            :key="dish.id" 
            :title="dish.title" 
            :description="dish.description"
            :imageUrl="dish.url" />
    </div> 
  </div>
</template>

<script>
import JCard from '../components/JCard';

export default {  
    components: { JCard },  
    computed: {
        user(){
            return this.$store.getters.user;
        } 
    },
    created() {        
        this.dishes = this.$route.meta.dishes;
        console.log(this.dishes);
    },
    data() {
        return {
            dishes: []
        }
    },
    methods: {

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