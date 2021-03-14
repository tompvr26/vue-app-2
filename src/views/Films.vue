<template>

  <div class="films">
    <h2>Films</h2>
    <div id="films" class="container">
      <label for="filmName">Entrez un nom de film</label> <br>
      <input type="text" v-model="searchQuery" placeholder="ex: Intouchable" id="filmName">
      <br> <br>
      <label for="date">Entrez la date de sortie (AAAA-MM-JJ)</label> <br>
      <input type="text" v-model="searchDate" placeholder="ex: 2011-11-02" id="date">
      <br> <br>
      <button type="submit" @click="getFilms">Envoyer les informations</button>

      <hr>
    </div>
    <p>
      <!--{{ getFilms() }}-->
    </p>

  </div>

</template>


<script>

  import axios from 'axios'
  //import { reactive } from "vue";
  //import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
  //import VueAxios from 'vue-axios'

  const apiURL = 'http://services.cineserie.com/v1/search/movies?q=';

  export default {
    name: 'films',
    data() {
      return {
        Film: [],
        title: "",
        url: "",
        videos: {
          ba: {
            link: ""
          },
        },
        searchQuery: null,
        searchDate: null,

      };
    },

    methods: {
      getFilms: function () {
        axios.get(apiURL + this.searchQuery + "&release_date=" + this.searchDate)
                .then(response => {
                  this.Film = response.data.message
                })
                .catch(e => {
                  this.errors = e
                })
      },
//      getFilm() {
//        const state = reactive({
//          searchResults: [],
//          loading: false,
//        });
//
//        const fetchSearchResults = async (name) => {
//          if(name){
//            const res = axios.get(
//                    `http://services.cineserie.com/v1/search/movies?q=${name}`
//            );
//            if (res.data) {
//              state.searchResults = res.data?.title;
//            }
//          }
//
//        };
//        return {
//          state,
//          fetchSearchResults,
//        };
//      },
    },
  };



</script>
