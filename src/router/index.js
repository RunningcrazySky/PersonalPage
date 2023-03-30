import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyHome',
    // 懒加载
    component: () => import('../views/MyHome'),
  },
  {
    path: '/article',
    name: 'MyArticle',
    component: () => import('../views/MyArticle.vue')
  },
  {
    path: '/friends',
    name: 'MyFriends',
    component: () => import('../views/MyFriends.vue')
  },
  {
    path: '/blogs',
    name: 'MyBlogs',
    component: () => import('../views/MyBlogs.vue')
  },
  // 后台路由
  {
    path: '/backend',
    // 重定向
    redirect: '/backend/behome',
    name: 'MyBackEnd',
    component: () => import('../views/backend/MyBackEnd.vue'),
    children: [
      {
        path:'behome',
        name:'BeHome',
        component: () => import('../views/backend/BeHome.vue')
      },
      {
        path:'articleall',
        name:'BeArticleAll',
        component: () => import('../views/backend/BeArticleAll.vue')
      },
      {
        path:'articlepub',
        name:'BeArticlePub',
        component: () => import('../views/backend/BeArticlePub.vue')
      },
      {
        path:'articlesort',
        name:'BeArticleSort',
        component: () => import('../views/backend/BeArticleSort.vue')
      },
      {
        path:'comments',
        name:'BeComment',
        component: () => import('../views/backend/BeComment.vue')
      },
      {
        path:'set',
        name:'BeSet',
        component: () => import('../views/backend/BeSet.vue')
      },

    ]
    
  },
]

const router = new VueRouter({
  routes
})

export default router
