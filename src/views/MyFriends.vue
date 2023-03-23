<template>
  <div class="container">
    <div class="left">
      
    </div>
    <div class="right">
      <HomeBloger/>
      <HomeContacts/>
    </div>
  </div>
</template>

<script>
  import HomeBloger from '@/components/home/HomeBloger'
  import HomeContacts from '@/components/home/HomeContacts'
    export default {
        name:'MyFriends',
        components:{
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