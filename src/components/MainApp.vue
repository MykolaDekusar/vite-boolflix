<script>
import SearchBar from './SearchBar.vue';
import FoundMovies from './FoundMovies.vue';
import FoundTv from './FoundTv.vue';
import {store} from '../store.js';
import { dragscroll } from 'vue-dragscroll';
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
        FoundMovies,
        FoundTv,
    },
    directives: {
        dragscroll,
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
                this.found=false;
                this.store.foundMovies=[];//resetting search
                for(let i =0; i< results.data.results.length;i++ ){
                    const temp = results.data.results[i];
                    this.store.foundMovies.push({
                        title:temp.title,
                        originalTitle:temp.original_title, 
                        originalLanguage:temp.original_language, 
                        averageVote:temp.vote_average,
                        imagePath:temp.poster_path,
                        });
                }
                    this.found=true;
            })},
        searchTv(){
        axios.get(this.store.apiSettings.mainApi + this.store.apiSettings.search + this.store.apiSettings.searchType[1], {
            params: {
                api_key:this.store.apiSettings.api_Key,
                language:this.store.selectedLanguage,
                query:this.store.searchInput,
            }
        }).then(results =>{
            this.found=false;
            this.store.foundTv=[];//resetting search
            for(let i =0; i< results.data.results.length;i++ ){
                const temp = results.data.results[i];
                this.store.foundTv.push({
                    title:temp.name,
                    originalTitle:temp.original_name, 
                    originalLanguage:temp.original_language, 
                    averageVote:temp.vote_average,
                    imagePath:temp.poster_path,
                    });
            }
                this.found=true;
        })},
    }
}
</script>

<template>
<SearchBar @cercaFilm="searchMovies" @cercaTv="searchTv"/>
<div class="container" ondragstart="return false;" ondrop="return false;">
    <div class="media" v-show="found">
        <h2>Films</h2>
        <div v-dragscroll class="film"  >
            <FoundMovies/>
        </div>
        <h2>Series</h2>
        <div v-dragscroll class="serieTv">
            <FoundTv/>
        </div>
    </div>
</div>
</template>

<style scoped>

h2 {
    font-size: 3rem;
    margin-top: 3rem;
    color: white;
}
.film,
.serieTv {
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
    overflow: hidden;
}
</style>