<template>
  <div class="left-hd">
    <div class="type">
      <ul>
            <li>全部标签</li>
            <li>thml</li>
            <li>css</li>
            <li>three.js</li>
        </ul>
    </div>
    <div class="order">
      <ul>
            <li>默认排序</li>
            <li>更新时间</li>
            <li>阅读人次</li>
            <li>点赞数量</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .left-hd{
      background-color: var(--white);
      ul{
          display: flex;
          padding: 1rem;
          border-bottom: 1px solid var(--gray);
        li{
          width: 70px;
          margin: 0 1rem;
          letter-spacing: .0625rem;
          cursor: pointer;
          &:hover{
            font-weight: bold;
          }
        }
      }
    }
</style>