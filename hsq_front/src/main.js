import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"
import Cors from "cors"
import resource from "vue-resource"
import $ from "jquery"
import { Loadmore } from 'mint-ui';
import vueFilter from 'vue-filter';


//Vue.install(vueFilter);
Vue.component(Loadmore.name, Loadmore);
Vue.use(Cors)
Vue.use(VueRouter)
Vue.use(resource)




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
