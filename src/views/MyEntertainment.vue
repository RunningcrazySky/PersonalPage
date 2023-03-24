<template>
  <div>
    <MyHeader/>
    <div class="MyArticle">
      <MyArticle/>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import MyArticle from './MyArticle'
    export default {
        name:'MyEntertainment',
        components:{
          MyHeader,
          MyArticle,
          MyFooter
        }
    }
</script>

<style>

</style>