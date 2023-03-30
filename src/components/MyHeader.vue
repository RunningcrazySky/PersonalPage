<template>
    <header>
        <!-- 左侧首页链接 -->
        <router-link to="/" class="left">
            <div><img src="@/assets/img/dreamer.png" alt=""></div>
        </router-link>
        <!-- 中间跳转链接 -->
        <div class="center">
            <router-link to="/article">
              <i class="iconfont icon-ziliaowenku"></i>
            </router-link>
            <router-link to="/friends">
              <i class="iconfont icon-shejiao"></i>
            </router-link>
            <a href="https://travellings.cn/go.html" target="_blank" >
                <img src="@/assets/img/travelling.jpg" alt="">
            </a>
        </div>
        <!-- 后台登录入口 -->
        <div class="right">
          <i class="iconfont icon-suo1"  @click="showLogin"></i>
        </div>
        <!-- 登录弹窗 -->
        <div class="login-box" v-if="loginVisible">
          <form class="login">
            <input type="text" placeholder="请输入账户" name="account" v-model.trim="username">
            <input type="password" placeholder="请输入密码" name="password"  v-model.trim="password">
            <button >登录</button>
          </form>
        </div>
    </header>
</template>

<script>
    export default {
        name:'MyHeader',
        data(){
          return {
            loginVisible:false,
            username:'',
            password:'',
            src:''
          }
        },
        methods:{
          showLogin(){
            this.loginVisible = !this.loginVisible
          },
          // login(){
          //   if(this.username === 'admin' && this.password === 123456){
          //     // this.src = 'http://localhost:8080/backend'
          //   }
          // }
        }
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
        color: var(--black);
        i, img{
          display: inline-block;
          width: 2.1875rem;
          height: 2.1875rem;
          border-radius: 50%;
          text-align: center;
          line-height: 2.1875rem;
          background-color: var(--white);
          font-size: 1.25rem;
          font-weight: 400;
          &:hover{
            box-shadow: 2px 1px 5px var(--black), 1px 1px 3px var(--black),-1px -1px 5px var(--white);
            transition: linear .2s;
          }
        }
        .icon-shejiao{
          font-weight: 600;
        }
      }
    }
    .right{
      padding-right: 130px;
      i{
        width: 2.1875rem;
        line-height: 2.1875rem;
        font-size: 1.25rem;
        color: var(--white);
        &:hover{
          cursor: pointer;
          color: var(--black);
          transition: linear .3s;
          text-shadow: 
          -2px -1px 2px var(--white), 
          1px 1px 3px var(--white),
          2px 1px 1px var(--black);
        }
      }
    }
  }
  // 登录窗口
  .login-box{
    position: absolute;
    right: 0;
    top: 100px;
    width: 260px;
    .login{
      display: flex;
      flex-direction: column;
      padding: 1.25rem;
      background-color:rgba(244,200,216,.3);
      border-radius: 5px;
      input{
        margin-bottom: 1rem;
        font-size: .875rem;
        padding: .3125rem .625rem;
        border: 0;
      }
      button{
        background: var(--white);
        color: var(--main-font-color);
        border: 0;
        font-size: .875rem;
        padding: .3125rem .625rem;
        cursor: pointer;
        &:hover{
          background: var(--main-font-color);
          color:var(--white)
        }
      }
    }
  }
</style>