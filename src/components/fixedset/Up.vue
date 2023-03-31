<template>
  <div class="up" @click="backTop" v-show="showBtn">
        <i class="iconfont icon-xiangshang"></i>
  </div>
</template>

<script>
export default {
  name:'Up',
  data(){
    return {
      showBtn:false,
    }
  },
  mounted() {
      window.addEventListener("scroll", this.showBtnF, true);
  },
  methods:{
    backTop(){
        const timer = setInterval(() => {
            // 页面距顶部的距离
            let scrollTop  = document.documentElement.scrollTop
            // console.log(scrollTop +'-------');
            // 页面距顶部距离正值/5
            let ispeed = Math.floor(-scrollTop  / 5);
            // console.log(ispeed);
            document.documentElement.scrollTop = scrollTop  + ispeed;
            if (scrollTop  === 0) {
                clearInterval(timer);
            }
        }, 20)
    },
    showBtnF(){
        let scrollTop = document.documentElement.scrollTop
        if (scrollTop > 300) {
            this.showBtn = true;
        } else {
            this.showBtn = false;
        }
    },

  }
}
</script>

<style lang='less' scoped>
  .up{
    width: 3.125rem;
    height: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    text-align: center;
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