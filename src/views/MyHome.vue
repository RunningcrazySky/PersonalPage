<template>
  <div class="container">
    
      <!-- 主内容区 -->
      <main>
        <ListHeader/>
        <ListItem/>
      </main>
      <!-- 侧边栏 -->
      <aside>
        <AsideInfo/>
        <AsideItem/>
      </aside>
  </div>
</template>

<script>
import ListHeader from'@/components/home-list/ListHeader.vue'
import ListItem from'@/components/home-list/ListItem.vue'
import AsideItem from'@/components/home-list/AsideItem.vue'
import AsideInfo from'@/components/home-list/AsideInfo.vue'
    export default {
      name:'MyHome',
      components:{
        ListHeader,
        ListItem,
        AsideItem,
        AsideInfo,
      }
    }
</script>

<style scoped lang='less'>
  .container{
    display: flex;
    main{
      flex:3;
      background-color: var(--white);
      margin-right: .625rem;
    }
    aside{
      flex:1;
    }
  }
  
</style>