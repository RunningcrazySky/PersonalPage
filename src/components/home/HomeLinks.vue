<template>
    <div class="HomeLinks">
        <div class="hd">
           <h4>奇妙链接</h4>
        </div>
        <div class="bd">
            <ul>
                <li>
                    <a href="https://travellings.cn/go.html" target="_blank" > <img src="https://camo.githubusercontent.com/1dca7c2d8a991a7050c82bef074c5c10e28c93b9717b9faef9adf765b4076fcc/68747470733a2f2f7777772e74726176656c6c696e67732e636e2f6173736574732f6c6f676f2e676966" alt="" style="width:auto;height:1.7rem;"
                    title="开往"> </a>
                </li>
                <li>
                    <a href="https://www.foreverblog.cn/go.html" target="_blank"> <img src="https://img.foreverblog.cn/wormhole_2.gif" alt="" style="width:auto;height:32px;" title="穿梭虫洞-随机访问十年之约友链博客"></a>
                </li>
                <li>
                    <a href="https://www.foreverblog.cn/" target="_blank" > <img src="https://img.foreverblog.cn/logo_en_default.png" alt="" style="width:auto;height:1.5rem;"
                    title="十年之约"> </a>
                </li>
                <li>
                    <a href="https://cssbattle.dev/" target="_blank" >
                        <button class="btn-2">
                            CSS BATTLE
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://neumorphism.io" target="_blank" >
                        <button class="btn-1">
                            Neumorphism.io
                        </button>
                    </a>
                </li>
            </ul>
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
        li{
            padding: .5rem;
            padding-left: 1rem;
            button{
                cursor: pointer;
                border: none;
                padding: .3rem .3125rem ;
                border-radius: 10px;
            }
            .btn-1 {
                color: rgb(59,132,60);
                border: 3px solid #e0e0e0;
                font-weight: 900;
                box-shadow:  2px 2px 6px #bebebe,-2px -2px 6px #ffffff;
            }
            .btn-2 {
                padding: .3125rem 1.25rem ;
                border-radius: 0;
                font-weight: 600;
                color: rgb(255, 223, 0);
                letter-spacing: .125rem;
                background-color: rgb(15,17,23);
            }
        }   
    }
  }


</style>