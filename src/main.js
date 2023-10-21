import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './plugins/store'
import router from './plugins/router'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n'
import util from './plugins/util'
import VueGoogleCharts from 'vue-google-charts'


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
require("firebase/compat/auth");

import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// don't forget to import CSS styles
import 'tiptap-vuetify/dist/main.css'
// Vuetify's CSS styles
import 'vuetify/dist/vuetify.min.css'


var firebaseConfig = {
    //Must add your own firebase config
};

firebase.initializeApp(firebaseConfig);
firebase.auth().currentUser


Vue.use(VueGoogleCharts)
Vue.config.productionTip = false

// use this package's plugin
Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'mdi'
})


window.addEventListener("load", function() {
    new Vue({
        router,
        store,
        vuetify,
        i18n,
        render: h => h(App)
    }).$mount('#app');
});
