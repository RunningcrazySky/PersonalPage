<template>
    <div class="HomeLinks">
        <div class="hd">
           <h4>奇妙链接</h4>
        </div>
        <div class="bd">
            内容
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeLinks',
    }
</script>

<style scoped lang='less'>
  .HomeLinks{
    min-height: 18.75rem;
    background-color: var(--white);
    text-align: left;
    margin-bottom: 10px;
    .hd{
        height: 3.75rem;
        line-height: 3.75rem;
        border-bottom: 2px solid var(--gray);
        padding-left: 1rem;
        h4{
            font-weight: 400;
            letter-spacing: .0625rem;
        }
    }
    .bd{
        padding: 1rem;
        font-size: .875rem;
    }
  }
</style>