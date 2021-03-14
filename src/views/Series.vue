<template>
    <div class="series">
        <h2>Séries</h2>
        <div id="demo" class="container">
            <input type="text" placeholder="Entrez un nom de série" id="name">
            <button type="button" onclick="getSerie();">Envoyer les informations</button>

        </div>
        <p>
            <!--{{ getSerie() }}-->
        </p>

    </div>

</template>


<script>

    import axios from 'axios'
    import { reactive } from "vue";
    //import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
    //import VueAxios from 'vue-axios'

    //const apiURL = 'http://services.cineserie.com/v1/search/series?q=${name}';

    export default {
        name: 'series',

        methods: {
            getSerie() {
                const state = reactive({
                    searchResults: [],
                    loading: false,
                });

                const fetchSearchResults = async (name) => {
                    if(name){
                        const res = axios.get(
                            `http://services.cineserie.com/v1/search/series?q=${name}`
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
