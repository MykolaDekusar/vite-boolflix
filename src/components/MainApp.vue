<script>
import SearchBar from './SearchBar.vue';
import FoundMovies from './FoundMovies.vue'
import {store} from '../store.js';
import axios from 'axios';
export default {
    name:"MainApp",
    data(){
        return {
            store,
            found:false,
        }
    },
    components:{
        SearchBar,
        FoundMovies
    },
    
    methods:{
        searchMovies(){
            axios.get(this.store.apiSettings.mainApi + this.store.apiSettings.search + this.store.apiSettings.searchType[0], {
                params: {
                    api_key:this.store.apiSettings.api_Key,
                    query:this.store.searchInput,
                    language:this.store.selectedLanguage,
                }
            }).then(results =>{
                this.store.foundMovies=[];
                for(let i =0; i< results.data.results.length;i++ ){
                    const temp = results.data.results[i];
                    this.store.foundMovies.push({
                        title:temp.title,
                        originalTitle:temp.original_title, 
                        originalLanguage:temp.original_language, 
                        averageVote:temp.vote_average,
                        });
                    }console.log(this.store.foundMovies);
                    this.found=true;
            })},
    }
}

</script>

<template>
<SearchBar @cerca="searchMovies"/>
<FoundMovies v-if="found"/>
</template>

<style>

</style>