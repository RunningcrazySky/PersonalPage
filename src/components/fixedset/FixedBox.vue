<template>
    <div class="fixedbox">
        <Light/>
        <Up/>
    </div>
</template>

<script>
import Light from './Light'
import Up from './Up'
export default {
    name:'Fixedbox',
    components:{
        Light,
        Up
    },
}
</script>

<style lang='less' scoped>
    .fixedbox{
        position: fixed;
        right: 10px;
        bottom: 150px;
        box-sizing:border-box;
        background: var(--main-bg-color);
        border-radius: 3px;
    }
</style>