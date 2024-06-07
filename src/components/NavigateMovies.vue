<script>
import {store} from "../store";
export default {
    name:"MovieNavigator",
    data(){
        return {
            store,
        }
    },
    methods:{
        nextPage(){
            this.store.moviePage++;
        },
        prevPage(){
            if(this.store.moviePage !== 1){
                this.store.moviePage--;
            } 
        }
    },
}
</script>

<template>
    <div class="navigate-movie"><button @click="prevPage(), $emit('cercaFilm')">prev</button><button @click="nextPage(), $emit('cercaFilm')">next</button></div>
</template>

<style scoped>

</style>