<template>
    <div class="series">
        <h2>Séries</h2>
        <div id="demo" class="container">
            <label for="name">Entrez un nom de série</label> <br>
            <input type="text" v-model="searchQuery" placeholder="ex: The Walking Dead" id="name">
            <br> <br>
            <button type="button" @click="getSerie">Envoyer les informations</button>
            <hr>
        </div>
        <p>
            <!--{{ getSerie() }}-->
        </p>

    </div>

</template>


<script>

    import axios from 'axios'
    //import { reactive } from "vue";
    //import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
    //import VueAxios from 'vue-axios'

    const apiURL = 'http://services.cineserie.com/v1/search/series?q=';

    export default {
        name: 'series',
        data() {
            return {
                Serie: [],
                title: "",
                url: "",
                videos: {
                    ba: {
                        link: ""
                    },
                },
                searchQuery: null,

            };
        },

        methods: {
            getSerie: function () {
                axios.get(apiURL + this.searchQuery)
                    .then(response => {
                        this.Serie = response.data.message
                    })
                    .catch(e => {
                        this.errors = e
                    })
            },
        },
    };



</script>
