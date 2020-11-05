import Vue from 'vue';
import App from './App.vue';
import Store from './store';
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.config.productionTip = false
Vue.use( CKEditor );
new Vue({
  data: Store,
  render: h => h(App),
}).$mount('#app')
