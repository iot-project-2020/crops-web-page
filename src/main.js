import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueResource from 'vue-resource'
import vuetify from './plugins/vuetify';
import {
  firestorePlugin
} from 'vuefire'


Vue.use(firestorePlugin)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.http.options.root = "https://iot-crops.firebaseio.com/";

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')