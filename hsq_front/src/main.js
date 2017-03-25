import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"
import Cors from "cors"
import resource from "vue-resource"
import $ from "jquery"

Vue.use(Cors)
Vue.use(VueRouter)
Vue.use(resource)




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
