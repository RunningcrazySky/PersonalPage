<template>
  <div>
    <MyHeader/>
    <router-view/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'

  export default {
    components:{
      MyHeader,
      MyFooter
    }
  }
</script>

<style>

</style>