<template>
    <div id="md-content">
        <textarea placeholder="博客内容" name="content" style="display:none;">
        </textarea>
    </div>
</template>

<script>
    $(function() {
      const editor = editormd("md-content", {
        width: "100%",
        height: 640,
        syncScrolling :"single",
        path : "../../static/lib/editormd/lib/"  //选中editormd下的lib下的所有文件
      });
    });
    export default {
        name:'ArticleEdit',
    }
</script>

<style>
    #md-content{
        display: none;
    }
</style>