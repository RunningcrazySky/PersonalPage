<template>
    <div class="list-header">
        <ul>
            <li>全部标签</li>
            <li>标签1</li>
            <li>标签2</li>
            <li>标签3</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'ListHeader',
    }
</script>

<style scoped lang='less'>
  .list-header{
    border-bottom: 1px solid var(--gray);
    ul{
      display: flex;
      padding: 1rem;
      li{
        width: 70px;
        margin: 0 1rem;
        cursor: pointer;
        &:hover{
          font-weight: bold;
        }
      }
    }
  }
</style>