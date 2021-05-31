<template>
  <div class="home-container">
    <div class="card-grid">
        <j-card 
            v-for="dish in dishes" 
            :key="dish.id" 
            :title="dish.title" 
            :description="dish.description" />
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
    data() {
        return {
            dishes: [
                {id: 1, title: 'Food 01', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt error unde nostrum, eaque distinctio repudiandae molestias animi nemo autem expedita eos accusantium rem totam sint architecto non et minima harum.'},
                {id: 2, title: 'Food 02', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt error unde nostrum, eaque distinctio repudiandae molestias animi nemo autem expedita eos accusantium rem totam sint architecto non et minima harum.'},
                {id: 3, title: 'Food 03', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt error unde nostrum, eaque distinctio repudiandae molestias animi nemo autem expedita eos accusantium rem totam sint architecto non et minima harum.'}
            ]
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