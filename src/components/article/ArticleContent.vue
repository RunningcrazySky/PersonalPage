<template>
  <div class="ArticleContent">
        <h1>标题</h1>
        <div class="info">
            <ul>
                <li>
                    <span>发表时间：2023-03-20</span><i>|</i>
                </li>
                <li>
                    <span>更新时间：2023-03-20</span><i>|</i>
                </li>
                <li>
                    <span>阅读人次：10</span><i>|</i>
                </li>
                <li>
                    <span>点赞数量：10</span>
                </li>
            </ul>
        </div>
        <div class="content">
            内容首行缩进2字符的案例展示如下。需要多写几行看效果，需要多写几行看效果，需要多写几行看效果，需要多写几行看效果，需要多写几行看效果，需要多写几行看效果，需要多写几行看效果。
        </div>
        <div class="comments">
        </div>
  </div>
</template>

<script>
import ArticleHot from '../article/ArticleHot'
export default {
    name:'ArticleContent',
    components:{
        ArticleHot,
    }
}
</script>

<style lang='less' scoped>
    .ArticleContent{
        .info{
            margin: 1rem;
            ul{
                display: flex;
                justify-content: center;
                font-size: .875rem;
                i{
                    margin: .625rem;
                    font-family: normal;
                }
            }
        }
        .content{
            margin: 1rem;
            text-align: left;
            text-indent: 2rem;
        }
        .comments{
            margin: 1rem;
        }
    }
    
</style>