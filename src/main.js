import Vue from 'vue'
import App from './App.vue'
import routes from './router/router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  routes,
  store,
  render: h => h(App)
}).$mount('#app')
