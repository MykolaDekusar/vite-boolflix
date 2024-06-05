i<script>
import {store} from "../store";
export default {
    name:"FoundMovies",
    emits:["cerca"],
    data(){
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- ciclo per ogni oggetto nell'array di film trovati -->
    <div v-for="data in store.foundMovies">
    <h2>Titolo: {{ data.title }}</h2>
    <p>Titolo d'origine: {{ data.originalTitle }}</p>
    <p>Lingua d'origine: {{ data.originalLanguage}}</p>
    <p> Voto medio: {{ data.averageVote}}</p>
    </div>
</template>