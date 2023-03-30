<template>
    <footer>
      <div class="copyright">Copyright©2023 百日梦想家</div>
      <div class="count">
      <!-- 点击量统计 -->
        <span class="sum-count">访问量:
          <span id="busuanzi_value_site_pv">counting...</span>
        </span>
        <span class="divide">|</span>
        <span class="person-count">访客数:
          <span id="busuanzi_value_site_uv">counting...</span>
        </span>
        <!-- 本文总阅读量<span id="busuanzi_value_page_pv"></span>次 -->
      </div>
    </footer>
</template>

<script>
    export default {
        name:'MyFooter',
    }
</script>

<style lang='less' scoped>
  footer{
    box-sizing: border-box;
    background-color: var(--white);
    height: 9.375rem;
    padding: 3.125rem;
    font-size: .875rem;
    font-weight: 600;
    z-index: 1;
    .copyright{
      height: 40px;
      margin: 0 auto;
      text-align: center;
    }
    .count{
      text-align: center;
      .divide{
        padding: 0 10px;
      }
    }
  }
</style>