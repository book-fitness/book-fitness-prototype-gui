import Vue from 'vue';
import App from './App.vue';
import Store from './store';
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd';
import WelcomePage from "@/components/WelcomePage.vue";
import Login from "@/components/Login.vue";
import Registration from "@/components/Registration.vue";
import MainPage from "@/components/MainPage.vue";
import RegistrationSuccess from "@/components/RegistrationSuccess.vue";
import axios from 'axios';

// dev url
//axios.defaults.baseURL = "http://localhost:8080/BookPrototype";
// prod
axios.defaults.baseURL = "/BookPrototype";
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const routes = [
  { path: '/', name: 'welcomepage', component: WelcomePage},
  { path: '/login', name: 'login', component: Login},
  { path: '/registration', name: 'registration', component: Registration},
  { path: '/mainpage', name: 'mainpage', component: MainPage},
  { path: '/registrationSuccess', name: 'registrationSuccess', component: RegistrationSuccess},
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.use( CKEditor );
Vue.use(VueRouter);
new Vue({
  router,
  data: Store,
  render: h => h(App),
}).$mount('#app')
