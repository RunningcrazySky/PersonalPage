import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Valine from 'valine'
import "@/assets/css/base.css"
// 引入 iconfont
import "@/assets/fonts/iconfont/iconfont.css";
import "@/assets/fonts/iconfont/iconfont.js";
// 按需引入 elementUI
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

