<template>
  <div class="container">
    
      <!-- 主内容区 -->
      <div class="left">
        <HomeTags/>
        <HomeArticle/>
      </div>
      <!-- 侧边栏 -->
      <div class="right">
        <HomeBloger/>
        <HomeLinks/>
      </div>
  </div>
</template>

<script>
import HomeTags from'@/components/home/HomeTags.vue'
import HomeArticle from'@/components/home/HomeArticle.vue'
import HomeLinks from'@/components/home/HomeLinks.vue'
import HomeBloger from'@/components/home/HomeBloger.vue'
    export default {
      name:'MyHome',
      components:{
        HomeTags,
        HomeArticle,
        HomeLinks,
        HomeBloger,
      }
    }
</script>

<style lang="less" scoped>
  .container{
    display: flex;
  }
</style>