<script>
import {store} from "../store";
export default {
    name:"SearchBar",
    emits:["cerca"],
    data(){
        return {
            store,
        }
    }

}
</script>

<template>
    <input v-model="store.searchInput" type="text" placeholder="Inserisci il film che vuoi cercare">
    <button @click="$emit('cerca')">Cerca</button>
</template>