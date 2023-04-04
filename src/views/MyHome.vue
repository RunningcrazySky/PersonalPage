<template>
  <div>
    <MyHeader/>
    <div class="container">
        <Music/>
        <!-- 主内容区 -->
        <div class="left">
          <HomeTags/>
          <HomeArticle/>
          <HomeArticle/>
          <HomeArticle/>
          <HomeArticle/>
          <HomeArticle/>
          <HomeArticle/>
          <HomeArticle/>
          <HomeArticle/>
        </div>
        <!-- 侧边栏 -->
        <div class="right">
          <HomeBloger/>
          <HomeContacts/>
          <HomeLinks/>
        </div>
        <!-- 向上和灯光 -->
        <Fixedbox/>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
import Music from '@/components/music/Music'
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import HomeTags from'@/components/home/HomeTags.vue'
import HomeArticle from'@/components/home/HomeArticle.vue'
import HomeLinks from'@/components/home/HomeLinks.vue'
import HomeBloger from'@/components/home/HomeBloger.vue'
import HomeContacts from '../components/home/HomeContacts'
import Fixedbox from '../components/fixedset/FixedBox.vue'
    export default {
      name:'MyHome',
      components:{
        Music,
        MyHeader,
        MyFooter,
        HomeTags,
        HomeArticle,
        HomeLinks,
        HomeBloger,
        HomeContacts,
        Fixedbox
      }
    }
</script>

<style lang="less" scoped>
  .container{
    display: flex;
  }
</style>