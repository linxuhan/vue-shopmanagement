import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/style/style.css'

import axios from 'axios'

Vue.use(ElementUI)

axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.withCredentials = false
axios.interceptors.request.use(config => {
  console.log(config);
  config.headers.authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
