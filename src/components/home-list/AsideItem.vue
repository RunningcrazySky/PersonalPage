<template>
    <div class="aside-item">
        <div class="hd">
           <h3>标题</h3>
        </div>
        <div class="bd">
            内容
        </div>
    </div>
</template>

<script>
    export default {
        name:'AsideItem',
    }
</script>

<style scoped lang='less'>
  .aside-item{
    min-height: 18.75rem;
    background-color: var(--white);
    text-align: left;
    margin-bottom: 10px;
    .hd{
        height: 3.75rem;
        line-height: 3.75rem;
        border-bottom: 2px solid var(--gray);
        padding-left: 1rem;
        h3{
            font-weight: 400;
        }
    }
    .bd{
        padding: 1rem;
    }
  }
</style>