<script>
import SearchBar from './SearchBar.vue';
import FoundMovies from './FoundMovies.vue';
import FoundTv from './FoundTv.vue';
import NavigateMovies from './NavigateMovies.vue';
import NavigateTv from './NavigateTv.vue';
import {store} from '../store.js';
import { dragscroll } from 'vue-dragscroll';
import axios from 'axios';
export default {
    name:"MainApp",
    data(){
        return {
            store,
            found:false,
            filmPages:null,
            tvPages:null,
        }
    },
    components:{
        SearchBar,
        FoundMovies,
        FoundTv,
        NavigateMovies,
        NavigateTv,
    },
    directives: {
        dragscroll,
  },
    
    methods:{
        searchMovies(){
            if(this.store.searchInput=== '') this.store.searchInput= "Marvel";
            if(this.store.moviePage>this.filmPages) this.store.moviePage=1;
            axios.get(this.store.apiSettings.mainApi + this.store.apiSettings.search + this.store.apiSettings.searchType[0], {
                params: {
                    api_key:this.store.apiSettings.api_Key,
                    query:this.store.searchInput,
                    language:this.store.selectedLanguage,
                    page:this.store.moviePage,
                }
            }).then(results =>{
                this.filmPages=results.data.total_pages;
                console.log(results.data.total_pages);
                console.log(this.store.moviePage);
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
        if(this.store.searchInput=== '') this.store.searchInput= "Marvel";
        if(this.store.tvPage>this.tvPages) this.store.tvPage=1;
        axios.get(this.store.apiSettings.mainApi + this.store.apiSettings.search + this.store.apiSettings.searchType[1], {
            params: {
                api_key:this.store.apiSettings.api_Key,
                query:this.store.searchInput,
                language:this.store.selectedLanguage,
                page:this.store.tvPage,
            }
        }).then(results =>{
            this.found=false;
            this.tvPages=results.data.total_pages;
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
    },
    mounted(){
        this.searchMovies();
        this.searchTv();
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
        <!-- NAV BAR MOVIES -->
        <NavigateMovies @cercaFilm="searchMovies"/>
        <h2>Series</h2>
        <div v-dragscroll class="serieTv">
            <FoundTv/>
        </div>
        <NavigateTv @cercaSerie="searchTv"/>
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