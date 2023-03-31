<template>
  <div>
    <MyHeader/>
      <div class="container">
            <div class="left">
                <ArticleContent/>
            </div>
            <div class="right">
                <ArticleHot/>
            </div>
        </div>
    <Fixedbox/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import ArticleContent from '../components/article/ArticleContent'
import ArticleHot from '../components/article/ArticleHot'
import Fixedbox from '../components/fixedset/FixedBox.vue'
export default {
    name:'MyBlogs',
    components:{
        MyHeader,
        MyFooter,
        ArticleContent,
        ArticleHot,
        Fixedbox,
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