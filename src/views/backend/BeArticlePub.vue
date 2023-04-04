<template>
  <div class="publish" :model='articleData'>
    <div class="title">
      <select v-model.trim.lazy="articleData.tags">
        <option v-for="(val, key) in articleData.options" :key="key" value="原创">{{ val.label }}</option>
      </select>
      <input type="text" placeholder="标题" v-model.trim.lazy="articleData.title">
    </div>
    <!-- markdown文本编辑 -->
        <v-md-editor v-model.trim.lazy="articleData.text" height="40.625rem"></v-md-editor>
    <!-- 提交按钮 -->
    <button @click="submitArticle">提 交</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'BeArticlePub',
    data(){
      return{
        articleData: [
          {
            id:nanoid(),
            tags:'',
            options:[
              {value:'1', label:'前端'},
              {value:'2', label:'生活'},
            ],
            title:'',
            text:''
          }
        ], // 批量保存数据
      }
    },
    mounted() {
      console.log(this.articleList, 'articleList');
    },
    // computed:{
    //   ...mapState({
    //     a: state => state.articleList
    //   })
    // },
    computed: {
      ...mapState('article',['articleList'])
    },
    methods:{
      ...mapMutations(['addArticleList']),
      submitArticle(){
        this.addArticleList('articleData')
      }
    }
}
</script>

<style lang="less" scoped>
  .publish{
    min-width: 800px;
    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      min-width: 500px;
      select, input{
        border: 1px solid gray;
        font-size: 16px;
        padding: .3125rem .625rem;
        box-sizing: border-box;
        min-height: 30px;
      }
      select{
        border: 1px solid var(--main-font-color);
        color: var(--main-font-color);
        cursor: pointer;
      }
      input{
        border-left: 0;
        width: 100%;
      }
    }
  }
  
  button{
    float: right;
    padding: 5px 20px;
    border-radius: 5px;
    background: var(--white);
    color: var(--main-font-color);
    border: 1px solid var(--main-font-color);
    font-size: 1rem;
    cursor: pointer;
    margin-top: 10px;
    &:hover{
      background: var(--main-font-color);
      color: var(--white);
    }
  }
  

</style>