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
        },
        starCalc(number){
            if(number === 0)return "Nessun Voto";
            const stars= Math.round(number/2);
            return stars;
        },
        emptyStars(number){
            let temp = 5;
            if(temp-number > 0){
                return temp-number;
            }else return 0;
        },
    },
}
</script>

<template>
        <!-- ciclo per ogni oggetto nell'array di film trovati -->
    <div draggable="false" class="card" v-for="data in store.foundMovies" v-show="!(data.imagePath===null)">
        <img class="cover-img" :src="store.apiSettings.imageData+data.imagePath" :alt="data.title">
            <div class="card-data">
                <h3>Titolo: {{ data.title }}</h3>
                <p>Titolo d'origine: {{ data.originalTitle }}</p>
                <p>Lingua d'origine: <img class="languageFlag" :src="'./src/assets/img/flags/4x3/' + languageConverter(data.originalLanguage) + '.svg'" ></p>
                <!-- STARS -->
                <div class="stars" v-if="starCalc(data.averageVote)!== 'Nessun Voto'">
                    <span v-for="stars in starCalc(data.averageVote)"><font-awesome-icon :icon="['fas', 'star']" style="color: #FFD43B;"/></span>
                    <span v-for="stars in emptyStars(starCalc(data.averageVote))"><font-awesome-icon :icon="['fas', 'star']" style="color: #ffffff;"/></span>
                </div>
                <p v-else>Nessun Voto</p>
            </div>
    </div>
</template>