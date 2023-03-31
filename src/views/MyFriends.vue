<template>
  <div>
    <MyHeader/>
    <div class="container">
      <div class="left">
        
      </div>
      <div class="right">
        <HomeBloger/>
        <HomeContacts/>
      </div>
    </div>
    <Fixedbox/>
    <MyFooter/>
  </div>
</template>

<script>
  import MyHeader from '@/components/MyHeader'
  import MyFooter from '@/components/MyFooter'
  import HomeBloger from '@/components/home/HomeBloger'
  import HomeContacts from '@/components/home/HomeContacts'
  import Fixedbox from '../components/fixedset/FixedBox.vue'
    export default {
        name:'MyFriends',
        components:{
          MyHeader,
          HomeBloger,
          HomeContacts,
          MyFooter,
          Fixedbox
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