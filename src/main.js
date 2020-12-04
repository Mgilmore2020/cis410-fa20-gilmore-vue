import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


import router from './routes.js'
import store from './store'

axios.defaults.baseURL = "https://cis410-fa20-gilmore-api.azurewebsites.net/";


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
