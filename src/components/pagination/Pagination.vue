<template>
  <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
        
  </div>
</template>

<script>
export default {
    name:'Panigation',
    props: [
      'pageNum',
      'pageSize',
      'total'
    ],
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.$emit("onChange", val)
        // console.log(`当前页: ${val}`);
      }
    },
}
</script>

<style lang='less' scoped>
  .content .block{
      // min-width: 800px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
</style>