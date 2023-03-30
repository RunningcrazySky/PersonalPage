<template>
  <div class="content" style="minWidth: 800px">
    <el-table
      :data="convertTableData(tableData)"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <!-- 循环标题 -->
      <el-table-column v-for="(val, key, i) in articleTitle" :key="i" :label="val" :prop="key">
      </el-table-column>
      <el-table-column align="right">
        <!-- eslint-disable-next-line -->
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <pagination :pageNum="pageNum" :pageSize="pageSize" :total="tableData.length" @onChange="handleCurrentChange"/>
  </div>
</template>

<script>
import Pagination from '@/components/pagination/Pagination.vue';
export default {
  name:'BeArticleAll',
  components: { Pagination },
  data() {
    return {
      // 循环标题
      articleTitle: {
          title: '标题',
          sort: '分类',
          dateP: '发表时间',
          dateC: '修改时间'
      },
      tableData: [
        {
        title:'文章1',
        sort: '前端',
        dateP: '2023-03-25',
        dateC: '2023-03-25',
        },  
      ],
      search: '',
      // 分页，当前页码，初始值为1
      pageNum: 1,
      pageSize: 10,
    }
  },
  methods: {
    // 搜索框 + 分页
    convertTableData(list){
      const currentPage = this.pageNum
      const prevPage = this.pageNum - 1
      return list
      .filter(data => !this.search || data.title.toLowerCase().includes(search.toLowerCase()) || data.sort.toLowerCase().includes(search.toLowerCase()) || data.dateP.toLowerCase().includes(search.toLowerCase()) || data.dateC.toLowerCase().includes(search.toLowerCase()))
      .filter((data, index) => index <= currentPage * this.pageSize && index >= prevPage * this.pageSize)
    },
    // 切换页码
    handleCurrentChange(page){
      this.pageNum = page
    },
    // 按钮方法
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      // console.log(index, row);
      return this.tableData.splice(index, 1)
    },
  },
}
</script>

