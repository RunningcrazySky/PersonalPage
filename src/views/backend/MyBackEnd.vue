<template>
    <el-container>
      <!-- 侧边栏 -->
      <div class="aside">
        <el-aside width="200px">
          <div class="bloger">
            <img src="@/assets/img/profile.jpg" alt="">
            <p>百日梦想家</p>
          </div>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                text-color="#999"
                background-color="#F4C8D8"
                active-text-color="#fff"
                @open="handleOpen"
                @close="handleClose">
                  <el-menu-item index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">主页</span>
                  </el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-document"></i>
                      <span>文章</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="2-1">所有文章</el-menu-item>
                      <el-menu-item index="2-2">发表文章</el-menu-item>
                      <el-menu-item index="2-3">文章分类</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="3">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">评论</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <i class="el-icon-user"></i>
                    <span slot="title">用户</span>
                  </el-menu-item>
                  <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
      </div>
      <el-container>
        <el-header>
          <div class="back">
            <i class="iconfont icon-tuichu3"></i>
            <router-link to="/" >退出</router-link>
          </div>
        </el-header>
          <el-main>Main</el-main>
          <el-footer>
            <span>Copyright©2023 百日梦想家</span>
          </el-footer>
        </el-container>
    </el-container>
</template>

<script>
  export default {
    name: 'MyBackEnd',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang='less' scpoed>
  html,
  body,
  #app,
  .el-container,
  .el-aside {
    height: 100%;
  }
  
  .el-header, .el-footer {
    background-color: #fff;
    color: #000;
    text-align: center;
    line-height: 60px;
  }

  .el-header .back{
    display: flex;
    justify-content: right;
    padding: 0 1.25rem;
    span{
      margin-left: .3125rem;
    }
  }
  .el-footer span{
    font-size: .75rem;
  }
  
  .el-main {
    background-color: #fafafa;
    color: #000;
    margin: .625rem auto;
  }

  .aside {
    background-color: var(--main-bg-color);
    .bloger{
      padding: 2rem;
      text-align: center;
      img{
        display: inline-block;
        width: 100px;
        border-radius: 50%;
      }
      p{
        margin-top: .625rem;
        font-weight: 600;
      }
    }
  }

  .el-menu-item span,
  .el-submenu span{
    margin-left: .625rem;
  }
</style>