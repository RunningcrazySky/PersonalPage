<template>
    <header class="clearfix">
        <!-- 左侧首页链接 -->
        <router-link to="/" class="left">
            <h1>百日梦想岛</h1>
        </router-link>
        <!-- 中间跳转链接 -->
        <div class="center">
            <router-link to="/article">
              <h3>文库</h3>
            </router-link>
            <router-link to="/social">
              <h3>社交</h3>
            </router-link>
            <router-link to="/entertainment">
              <h3>休闲</h3>
            </router-link>
            <router-link to="/web">
              <h3>关于</h3>
            </router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name:'MyHeader',
    }
</script>

<style lang='less' scoped>
  header{
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 81.25rem;
    height: 6.25rem;
    background-color: var(--main-bg-color);
    z-index: 1;
  }
  header .left{
    float: left;
    margin: 1.875rem;
  }
  header .center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    justify-content: center;
    a{
        padding: 2.5rem;
        letter-spacing: .1875rem;
        color: #000;
        h3{
          display: inline-block;
          background-color: #fff;
          padding: .3125rem .9375rem;
          border-radius: 10px;
        }
        h3:hover{
          background-color: #000;
          color: #fff;
        }
    }
  }
</style>