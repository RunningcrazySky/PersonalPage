import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // 懒加载
    component: () => import('../views/MyHome')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/MyArticle.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../views/MyFriends.vue')
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: () => import('../views/MyEntertainment.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/MyAbout.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
