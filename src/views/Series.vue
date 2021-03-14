<template>
    <div class="series">
        <h2>Séries</h2>
        <div id="demo" class="container">
            <label for="name">Entrez un nom de série</label> <br>
            <input type="text" v-model="searchQuery" placeholder="ex: The Walking Dead" id="name">
            <br> <br>
            <button type="button" @click="getSerie">Envoyer les informations</button>
            <hr>
            <div class="card" style="width: 18rem;" v-if="seriedata">
                <div class="card-body">
                    <h5 class="card-title"> {{ seriedata.title }}</h5>

                    <a :href="filmdata.url">Lien du site</a>
                    <br>
                    <a :href="filmdata.videos['Bande Annonce'].fr"> Lien de la bande annonce</a>
                </div>

            </div>
        </div>


</template>


<script>

    import axios from 'axios'
    //import { reactive } from "vue";
    //import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
    //import VueAxios from 'vue-axios'

    const apiURL = 'https://wiki-wars.fr/tom/redirect_series.php?q=';

    export default {
        name: 'series',
        data() {
            return {
                seriedata: undefined,
                searchQuery: null,

            };
        },

        methods: {
            getSerie: function () {
                axios.get(apiURL + this.searchQuery)
                    .then(response => {
                        this.seriedata = response.data
                    })
                    .catch(e => {
                        this.errors = e
                    })
            },
        },
    };



</script>

<style>

    .card{
        margin-left: auto;
        margin-right: auto;
    }

</style>
