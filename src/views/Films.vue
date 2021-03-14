<template>
  <div class="films">
    <h2>Films</h2>
    <div id="demo" class="container">
      <input type="text" placeholder="Entrez un nom de film" id="name">
      <button type="button" onclick="getFilm();">Envoyer les informations</button>

    </div>
    <p>
      <!--{{ getFilm() }}-->
    </p>

  </div>

</template>


<script>

  import axios from 'axios'
  import { reactive } from "vue";
  //import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
  //import VueAxios from 'vue-axios'

  //const apiURL = 'http://services.cineserie.com/v1/search/movies?q=${filmName}';

  export default {
    name: 'films',

    methods: {
      getFilm() {
        const state = reactive({
          searchResults: [],
          loading: false,
        });

        const fetchSearchResults = async (name) => {
          if(name){
            const res = axios.get(
                    `http://services.cineserie.com/v1/search/movies?q=${name}`
            );
            if (res.data) {
              state.searchResults = res.data?.title;
            }
          }

        };
        return {
          state,
          fetchSearchResults,
        };
      },
    },
  };



</script>
