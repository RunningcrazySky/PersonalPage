<template>
  <div>
    <MyHeader/>
    <div class="container">
      <div class="left">
        <ArticleTags/>
        <HomeArticle/>
      </div>
      <div class="right">
        <ArticleHot/>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader'
  import MyFooter from '@/components/MyFooter'
  import ArticleTags from '@/components/article/ArticleTags.vue'
  import HomeArticle from '@/components/home/HomeArticle.vue'
  import ArticleHot from '@/components/article/ArticleHot.vue'
    export default {
        name:'MyArticle',
        components:{
          MyHeader,
          ArticleTags,
          HomeArticle,
          ArticleHot,
          MyFooter
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