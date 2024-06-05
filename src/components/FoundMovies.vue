<script>
import {store} from "../store";
export default {
    name:"FoundMovies",
    data(){
        return {
            store,
        }
    },
    methods:{
        languageConverter(lang){
            if(lang === "en")return "us";
            else return lang;
        }   
    },
}
</script>

<template>
    <h2>Film</h2>
        <!-- ciclo per ogni oggetto nell'array di film trovati -->
        <div v-for="data in store.foundMovies" v-show="!(data.imagePath===null)">
        <h3>Titolo: {{ data.title }}</h3>
        <img :src="store.apiSettings.imageData+data.imagePath" :alt="data.title">
        <p>Titolo d'origine: {{ data.originalTitle }}</p>
        <p>Lingua d'origine: <img class="languageFlag" :src="'./src/assets/img/flags/4x3/' + languageConverter(data.originalLanguage) + '.svg'" ></p>
        <p> Voto medio: {{ data.averageVote}}</p>
        </div>
</template>

<style>
</style>