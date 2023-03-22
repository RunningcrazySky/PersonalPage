import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Valine from 'valine'
import "@/assets/css/base.css"
import "@/assets/fonts/iconfont/iconfont.css";
import "@/assets/fonts/iconfont/iconfont.js";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

