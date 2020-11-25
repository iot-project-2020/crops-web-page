import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.http.options.root = "https://iot-crops.firebaseio.com/";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
