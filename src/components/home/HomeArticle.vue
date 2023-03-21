<template>
    <!-- list 开头 -->
    <div class="HomeArticle">
        <!-- list 标题 -->
        <div class="item-hd">
            <h3 class="title">
                <router-link to="blogs">标题</router-link>
            </h3>
            <div class="tag">
                <span>标签</span>
            </div>
        </div>
        
        <!-- list 主体 -->
        <div class="item-bd">
            <p class="content row1 row2">
                主体内容ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </p>
            <div class="item-ft">
                <div class="left">
                    <span>
                        <i class="iconfont icon-gongkai"></i>
                        0
                    </span>
                    <span>
                        <i class="iconfont icon-dianzan"></i>
                        0
                    </span>
                </div>
                <div class="right">
                    <span class="update">2023-03-18</span>
                </div>
            </div>
        </div>
    </div>
    <!-- list 结尾 -->
</template>

<script>
import MyBlogs from '@/views/MyBlogs.vue'
    export default {
        name:'HomeArticle',
        components:{
            MyBlogs,
        }
    }
</script>

<style scoped lang='less'>
    .HomeArticle{
        background-color: var(--white);
        min-height: 1.875rem;
        padding: 1rem;
        border-top: 1px solid var(--gray);
        border-bottom: 1px solid var(--gray);
        .item-hd{
            display: flex;
            align-items: center;
            .title{
                font-weight: 400;
                letter-spacing: .0625rem;
                & a:hover {
                    color: var(--main-font-color);
                }
            }
            .tag{
                margin-left: .3125rem;
                padding: .1875rem;
                border: 1px solid var(--main-font-color);
                border-radius: 3px;
                color: var(--main-font-color);
                transform: scale(calc(7/12));
                cursor: pointer;
            }
        }
        .item-bd{
            text-align: left;
            font-size: 15px;
            .content{
                font-weight: 400;
            }
            .item-ft{
                display: flex;
                justify-content: center;
                margin-top: .5rem;
                .left span{
                    margin: 0 .625rem;
                }
                .right{
                    text-align: right;
                    margin: 0 .625rem;
                }
            }
        }
    }
</style>