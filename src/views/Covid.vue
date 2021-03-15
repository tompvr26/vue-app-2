<template>

    <div class="Covid">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <h3>STATISTIQUES COVID-19</h3>

        <div id="covid" class="container">
            <label for="country">Entrez un Pays</label> <br>
            <input type="text" v-model="searchQuery" placeholder="ex: France" id="country">
            <br> <br>
            <button type="submit" @click="getStats" class="btn btn-success">Rechercher</button>

            <hr>
        </div>

        <div class="card" v-if="data">
            <h5 class="card-header">{{ data.location }}</h5>
            <div class="card-body">
                <h5 class="card-title">Dernière mise à jour: {{ data.lastChecked }}</h5>
                <p class="card-text">Morts: {{ data.deaths }}</p>
                <p class="card-text">Cas covid: {{ data.confirmed }}</p>
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

    const apiURL = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=';

    const headers = {
            'x-rapidapi-key': 'bae9f86238msh30eafe6a89a1f0bp1274fdjsnac82f157c759',
            'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }

    export default {
        name: 'covid',
        data() {
            return {
                data: undefined,
                searchQuery: null,

            };
        },

        methods: {
            getStats: function () {
                axios.get(apiURL + this.searchQuery, {}, headers)
                    .then(response => {
                        this.data = response.data
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
