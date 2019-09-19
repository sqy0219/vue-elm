import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import axios from './util/https'

Vue.config.productionTip = false
axios.defaults.baseURL = "https://elm.cangdu.org/";
axios.defaults.withCredentials = true;

Vue.prototype.$axios = axios;
// console.log('axios>>>>>', axios.defaults)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')