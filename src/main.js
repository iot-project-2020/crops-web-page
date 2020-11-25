import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource);
Vue.http.options.root = "https://iot-crops.firebaseio.com/";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
