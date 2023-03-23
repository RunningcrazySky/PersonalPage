<template>
    <footer>
      <div class="copyright">Copyright©2023 百日梦想家</div>
      <div class="count">
      <!-- 点击量统计 -->
        <span class="sum-count">本站访问量：<span id="busuanzi_value_site_pv">？</span>次</span>
        <span class="person-count">本站访客数：<span id="busuanzi_value_site_uv">？</span>人</span>
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
    .copyright{
      height: 40px;
      margin: 0 auto;
      text-align: center;
    }
    .count{
      width: 500px;
      height: 50px;
      margin: 0 auto;
      text-align: center;
      .sum-count{
        margin-right: 1.25rem;
      }
    }
  }
</style>