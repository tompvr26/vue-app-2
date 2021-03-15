<template>

  <div class="films">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <h2>Films</h2>
    <div id="films" class="container">
      <label for="filmName">Entrez un nom de film</label> <br>
      <input type="text" v-model="npm " placeholder="ex: Intouchable" id="filmName">
      <br> <br>
      <label for="date">Entrez la date de sortie (AAAA-MM-JJ)</label> <br>
      <input type="text" v-model="searchDate" placeholder="ex: 2011-11-02" id="date">
      <br> <br>
      <button type="submit" @click="getFilms" class="btn btn-success">Envoyer les informations</button>

      <hr>
    </div>
    <div class="card" style="width: 18rem;" v-if="filmdata">
      <div class="card-body">
        <h3 class="card-title"> {{ filmdata.title }}</h3>

        <a :href="filmdata.url" class="btn btn-success">Lien du site</a>
        <br> <br>
        <a :href="filmdata.videos['Bande Annonce'].fr" class="btn btn-success"> Lien de la bande annonce</a>
      </div>
    </div>

  </div>

</template>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>

  import axios from 'axios'
  //import { reactive } from "vue";
  //import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
  //import VueAxios from 'vue-axios'

  const apiURL = 'https://wiki-wars.fr/tom/redirect_movies.php?q=';

  export default {
    name: 'films',
    data() {
      return {
        filmdata: undefined,
        searchQuery: null,
        searchDate: null,

      };
    },

    methods: {
      getFilms: function () {
        axios.get(apiURL + this.searchQuery + "&release_date=" + this.searchDate)
                .then(response => {
                  this.filmdata = response.data
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

<style>
  .card{
    margin-left: auto;
    margin-right: auto;
  }
</style>
