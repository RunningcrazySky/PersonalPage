<template>
    <div class="HomeTags">
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
        name:'HomeTags',
    }
</script>

<style scoped lang='less'>
  .HomeTags{
    background-color: var(--white);
    border-bottom: 1px solid var(--gray);
    ul{
      display: flex;
      padding: 1rem;
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