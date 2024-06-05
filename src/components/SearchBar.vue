<script>
import {store} from "../store";
export default {
    name:"SearchBar",
    emits:["cercaFilm", "cercaTv"],
    data(){
        return {
            store,
        }
    },
}
</script>

<template>
    <input @keyup.enter="$emit('cercaFilm'), $emit('cercaTv')" v-model="store.searchInput" type="text" placeholder="Inserisci il film che vuoi cercare">
    <button @click="$emit('cercaFilm'), $emit('cercaTv')">Cerca</button>
</template>