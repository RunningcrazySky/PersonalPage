<template>
    <div class="HomeBloger">
        <div class="hd">
            <img src="@/assets/img/profile.jpg" alt="" class="avatar">
            <div class="info">
                <router-link to="#">SKY</router-link>
                <p><i class="iconfont icon-dingwei3"></i>张家口, 中国</p>
            </div>
        </div>
        <div class="bd">
            <p>95后文科狗，冲进IT领域看看写写，随笔生活，欢迎沟通交流。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeBloger',
    }
</script>

<style scoped lang='less'>
  .HomeBloger{
    height: 13.75rem;
    background-color: var(--white);
    margin-bottom: .625rem;
    padding: 2rem;
    text-align: left;
    .hd{
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background-color: red;
        height:60%;
        img{
            width: 35%;
            border-radius: 50%;
        }
        .info{
            padding-right: 2.5rem;
            a{
                font-weight: 600;
                letter-spacing: .125rem;
                &:hover{
                    color: var(--main-font-color);
                    cursor: pointer;
                }
            }
            p{
                margin: 10px 0;
                font-size: .875rem;
            }
            .iconfont{
                margin-right: 5px;
            }
        }
    }
    .bd{
        margin-top: .9375rem;
        font-size: .875rem;
    }
  }
</style>