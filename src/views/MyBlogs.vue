<template>
  <div class="container">
    <div class="left">
        <ArticleContent/>
    </div>
    <div class="right">
        <ArticleHot/>
    </div>
    </div>
</template>

<script>
import ArticleContent from '../components/article/ArticleContent'
import ArticleHot from '../components/article/ArticleHot'
export default {
    name:'MyBlogs',
    components:{
        ArticleContent,
        ArticleHot,
    }
}
</script>

<style lang="less" scoped>
    .container{
        padding: .625rem;
        display: flex;
        .left{
            padding: 1rem;
            background-color: var(--white);
            
        }
        .right{
            background-color: var(--white);
        }
    }
</style>