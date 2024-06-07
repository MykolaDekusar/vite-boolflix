<script>
import {store} from "../store";
export default {
    name:"SeriesNavigator",
    data(){
        return {
            store,
        }
    },
    methods:{
        nextPage(){
            this.store.tvPage++;
        },
        prevPage(){
            if(this.store.tvPage !== 1){
                this.store.tvPage--;
            } 
        }
    },
}
</script>

<template>
    <div class="navigate-tv"><button @click="prevPage(), $emit('cercaSerie')">prev</button><button @click="nextPage(), $emit('cercaSerie')">next</button></div>
</template>

<style scoped>

</style>