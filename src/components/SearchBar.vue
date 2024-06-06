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
<header>
    <div class="container">
    <div class="row">
        <div class="logo">boolflix</div>
        <div class="search">
            <input @keyup.enter="$emit('cercaFilm'), $emit('cercaTv')" v-model="store.searchInput" type="text" placeholder="Che cosa vuoi guardare?">
            <button @click="$emit('cercaFilm'), $emit('cercaTv')">Cerca</button>
        </div>
    </div>
</div>
</header>
</template>
<style scoped>
header {
    background-color: black;
}
.logo {
    text-transform: uppercase;
    font-size: 5rem;
    color: red;
    font-weight: 600;
}
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
}

.search input {
    width: 15rem;
    height: 35px;
    border: 1px solid red;
    border-right: none;
    padding: 1rem;
}

.search button {
    height:35px;
    width: 50px;
    border:1px solid red;
    border-radius: 0;
    background-color: rgb(95, 95, 95);
    color: white;
}
</style>