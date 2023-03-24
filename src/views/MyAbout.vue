<template>
  <div>
    <MyHeader/>
    <div class="container">
      <div class="left">
        <!-- 编辑器插入 -->
      </div>
      <div class="right">
        <HomeBloger/>
        <HomeContacts/>
      </div>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import HomeBloger from '../components/home/HomeBloger'
import HomeContacts from '../components/home/HomeContacts'
    export default {
        name:'MyAbout',
        components:{
          MyHeader,
          MyFooter,
          HomeBloger,
          HomeContacts,
        }
    }
</script>

<style lang='less' scoped>
  .container{
    display: flex;
    .left{
      background-color: var(--white);
    }
  }
</style>