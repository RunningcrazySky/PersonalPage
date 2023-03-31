import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

