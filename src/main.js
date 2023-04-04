import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
// 引入评论功能 valine
import Valine from 'valine'
import "@/assets/css/base.css"
// 引入 iconfont
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";
// 引入markdown
import './assets/js/markdown/markdown'
// 按需引入 elementUI
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

Vue.use(element)
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://wyy-music-plum.vercel.app',

axios.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data
  }
}, err => {
  return Promise.reject(err)
})


Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

