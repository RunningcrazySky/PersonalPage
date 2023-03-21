<template>
  <div class="container">
    <div class="left">
      <ArticleTags/>
      <HomeArticle/>
    </div>
    <div class="right">
      <ArticleHot/>
    </div>
  </div>
</template>

<script>
import ArticleTags from '@/components/article/ArticleTags.vue'
import HomeArticle from '@/components/home/HomeArticle.vue'
import ArticleHot from '@/components/article/ArticleHot.vue'
    export default {
        name:'MyArticle',
        components:{
          ArticleTags,
          HomeArticle,
          ArticleHot,
        }
    }
</script>

<style lang="less" scoped>
  .container{
    display: flex;
    .right{
      background-color: var(--white);
    }
  }
</style>