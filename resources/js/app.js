require('./bootstrap');
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from 'vue-router';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import storeDate from "./store/store"
import routes from "./router/router"

import MainApp from "./MainApp"
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
const store = new Vuex.Store(storeDate);
const router = new VueRouter({
    routes,
    mode: 'history',
});
const app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        MainApp,
    },
});
