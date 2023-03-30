<template>
  <div class="publish">
    <div class="title">
      <select>
        <option value="原创">原创</option>
        <option value="转载">转载</option>
      </select>
      <select>
        <option value="原创">前端</option>
        <option value="转载">生活</option>
      </select>
      <input type="text" placeholder="标题">
    </div>
    <!-- markdown文本编辑 -->
    <div id='md-content' style='z-index:1 !importment'>
      <textarea name="md-content" id="" cols="30" rows="10" placeholder="博客内容">
      </textarea>
    </div>
    <!-- 提交按钮 -->
    <button>提 交</button>
  </div>
</template>

<script>
export default {
    name:'BeArticlePub',
}
</script>

<style lang="less" scoped>
  .publish{
    margin: 0 auto;
    text-align: center;
  }
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
      &:first-child{
        border-right: 0;
      }
    }
    input{
      border-left: 0;
      width: 100%;
    }
  }
  #md-content{
    height: 100%;
    min-width: 500px;
    border-radius: 5px;
    textarea{
      width: 100%;
      height: 100%;
      padding: 10px;
      font-size: 16px;
      border-radius: 0;
      min-height: 650px;
      resize: none;
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