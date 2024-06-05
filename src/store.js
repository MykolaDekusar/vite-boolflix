import { reactive } from "vue";
export const store = reactive({
  selectedLanguage: "it",
  searchInput: "",
  foundMovies: [],
  apiSettings: {
    api_Key: "62e10cf8fb49cb3293f74ec81996598e",
    mainApi: "https://api.themoviedb.org/3/",
    search: "search/",
    searchType: ["movie", "tv"],
  },
});
