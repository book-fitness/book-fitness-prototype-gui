import Vue from 'vue'
import App from './App.vue'
import Store from './store'

Vue.config.productionTip = false

new Vue({
  data: Store,
  render: h => h(App),
}).$mount('#app')
