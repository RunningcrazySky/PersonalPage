<template>
  <div class="ArticleHot">
    <div class="hd"><h3>最热文章排行榜</h3></div>
    <div class="bd">
        <ul>
            <li>
                <span class="num">1</span>
                <span class="title row3">标题</span>
            </li>
            <li>
                <span class="num">2</span>
                <span class="title row3">标题</span>
            </li>
            <li>
                <span class="num">3</span>
                <span class="title row3">标题</span>
            </li>
            <li>
                <span class="num">4</span>
                <span class="title row3">标题</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name:'ArticleHot',
    }
</script>

<style lang='less' scoped>
    .ArticleHot{
        background-color: var(--white);
        .hd{
            padding: 2rem;
            letter-spacing: .0625rem;
            border-bottom: 2px solid var(--gray);
        }
        .bd{
            li{
                margin: 1rem 2rem;
                text-align: left;
                word-break: break-all;
                .num{
                    height: 1rem;
                    line-height: 1rem;
                    margin-right: 1rem;
                }
                .title{
                    cursor: pointer;
                    &:hover{
                        color:var(--main-font-color)
                    }
                }
            }
            li:first-child .num{
                color: rgb(255, 0, 0);
            }
            li:nth-child(2) .num{
                color: rgb(255, 85, 0);
            }
            li:nth-child(3) .num{
                color: rgb(255, 165, 0);
            }
        }
    }
</style>