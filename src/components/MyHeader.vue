<template>
    <header>
        <!-- 左侧首页链接 -->
        <router-link to="/" class="left">
            <div><img src="@/assets/img/dreamer.png" alt=""></div>
        </router-link>
        <!-- 中间跳转链接 -->
        <div class="center">
            <router-link to="/article">
              <h3>文库</h3>
            </router-link>
            <router-link to="/entertainment">
              <h3>休闲</h3>
            </router-link>
            <router-link to="/friends">
              <h3>社交</h3>
            </router-link>
            <router-link to="/about">
              <h3>关于</h3>
            </router-link>
        </div>
        <!-- 后台登录入口 -->
        <router-link to="/backend" class="right">
          <img src="@/assets/img/profile.jpg" alt="岛主">
          <span>私人重地</span>
        </router-link>
    </header>
</template>

<script>
    export default {
        name:'MyHeader',
    }
</script>

<style lang='less' scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 81.25rem;
    height: 6.25rem;
    background-color: var(--main-bg-color);
    z-index: 1;
    .left{
    display: inline-block;
      div{
        height: 6.25rem;
        overflow: hidden;
      }
      img{
        width: 18.75rem;
        margin-top: -6.25rem;
      }
    }
    .center{
    display: flex;
    justify-content: center;
      a{
          padding: 2.5rem;
          letter-spacing: .1875rem;
          color: var(--black);
          h3{
            display: inline-block;
            background-color: var(--white);
            padding: .3125rem .9375rem;
            border-radius: 3px;
          }
          h3:hover{
            background-color: var(--black);
            color: var(--white);
          }
      }
    }
    .right{
      padding: 3.125rem;
      img{
        width: 3.125rem;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 1.25rem;
      }
      span{
        line-height: 6.25rem;
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
        &:hover{
          color: var(--black);
          text-shadow: 2px 2px 3px var(--white);
        }
      }
    }
  }
</style>