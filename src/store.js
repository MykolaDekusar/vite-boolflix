import { reactive } from "vue";

const store = reactive({
  selectedLanguage: "it-IT",
  searchInput: "",
  apiSettings: {
    api_Key: "api_key=62e10cf8fb49cb3293f74ec81996598e",
    mainApi: "https://developers.themoviedb.org/3/",
    search: "search/",
    searchType: ["movie", "tv"],
  },
});
