<template>
  <div class="light " @click="changeBtn">
    <i class="iconfont icon-circle"></i>
  </div>
</template>

<script>
export default {
  name:'Light',
  data(){
    return {
      isLight:true,
    }
  },
  methods:{
    changeBtn(){
      this.isLight = ! this.isLight
      this.lightChange()
    },
    lightChange(){
      if(this.isLight){
        document.querySelector('html').classList.add('theme-dark')
      }else{
        document.querySelector('html').classList.remove('theme-dark')
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .light{
    width: 3.125rem;
    height: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    color: var(--white);
    cursor: pointer;
    &:hover{
      color: var(--black);
      transition: linear .3s;
      text-shadow: 
      -2px -1px 2px var(--white), 
      1px 1px 3px var(--white),
      2px 1px 3px var(--black);
    }
    i{
      font-size: 1.2rem;
    }
  }
</style>