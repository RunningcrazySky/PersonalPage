<template>
  <div class="content"  style="minWidth: 800px">
    <div class="title">
      <!-- eslint-disable-next-line -->
      <input type="text" placeholder="新增分类" v-model.trim.lazy="articleType" @keyup.enter.trim.lazy="submitSort">
      <button class="submit" @click='submitSort'>提交</button>
    </div>
    <!-- 编辑弹窗 -->
    <el-dialog title="修改分类" :visible.sync="dialogFormVisible" style="text-align:left; min-width: 800px; max-width: 1000px">
        <el-form :model="form">
        <el-form-item label="旧分类" :label-width="formLabelWidth">
          <el-input v-model="form.oldSort" disabled autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新分类" 
        :label-width="formLabelWidth">
          <el-input v-model="form.newSort" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleModalConfirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="table">
      <el-table
      :data="convertTableData()"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      style="width: 100%">
        <!-- 标题 -->
          <el-table-column v-for="(val, key) in tableTitle" :key="key" :label=val :prop=key>
          </el-table-column>
          <el-table-column align="right">
            <!-- 搜索框 -->
            <!-- eslint-disable-next-line -->
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键词搜索"
                />
            </template>
            <!-- 按钮 -->
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <pagination :pageNum="pageNum" :pageSize="pageSize" @onChange="handleTableChange" :total="tableData.length"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import dayjs from 'dayjs'
import Pagination from '@/components/pagination/Pagination.vue'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  name:'BeArticleSort',
  components: { Pagination },
  data(){
    return {
      // 新增分类
      articleType: '',
      // 标题
      tableTitle:{
        sort:"文章分类",
        count:"文章数量",
        dateP:"创建日期",
        dateC:"修改日期",
      },
      // 弹窗表单
      dialogFormVisible: false,
      formLabelWidth: '15%',
      form: {
          oldSort: '111',
          newSort: '',
      },
      // 搜索框
      search: '',
      // 分页
      pageNum: 1,
      pageSize: 10,
      currentId: ''
    }
  },
  computed:{
    ...mapState('sort',['articleSort']),
    ...mapGetters('sort',['tableData']),
  },
  methods: {
    ...mapActions('sort',['addArticleSort', 'editArticleSort','deleteArticleSort', 'getList']),
    // 分页
    convertTableData() {
      const currentPage = this.pageNum;
      const prevPage = this.pageNum - 1;
      return this.tableData
      .filter(data => !this.search || data.sort.toLowerCase().includes(this.search.toLowerCase()) || data.dateP.toLowerCase().includes(this.search.toLowerCase()) || data.dateC.toLowerCase().includes(this.search.toLowerCase()))
      .filter((data, index) =>  index >= prevPage * this.pageSize && index <= currentPage * this.pageSize)
    },
    handleTableChange(page) {
      // console.log(page, 'page')
      this.pageNum = page;
    },

    // 弹窗编辑功能
    handleEdit(row) {
      this.form.oldSort = row.sort;
      this.currentId = row.id;
      this.dialogFormVisible = true;
    },
    // 删除功能
    handleDelete(row) {
      this.deleteArticleSort(row.id)
    },

    handleModalConfirm() {
      this.editArticleSort({
        id: this.currentId,
        newSort: this.form.newSort
      })

      this.dialogFormVisible = false
      this.currentId = '';
    },
    
    // 新增分类
    submitSort(){
        if(this.articleType){
          this.addArticleSort({
            id:nanoid(),
            sort: this.articleType,
            count:10,
            dateP:dayjs().format('YYYY-MM-DD hh:mm'),
            dateC:dayjs().format('YYYY-MM-DD hh:mm'),
        })
        }
        this.articleType = ''
    }
  },
}
</script>

<style lang='less' scoped>
 .title{
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    input, .submit{
      padding: 5px 10px;
      box-sizing: border-box;
      font-size: 16px;
      height: 30px;
      border: 1px solid gray;
      line-height: 16px;
    }
    .submit{
      cursor: pointer;
      vertical-align: middle;
      background-color: white;
      color: var(--main-font-color);
      border: 1px solid var(--main-font-color);
      border-radius: 0 5px 5px 0;
      min-width: 80px;
      &:hover{
        background: var(--main-font-color);
        color: white;
      }
    }
    input{
      width: 100%;
      border-right: 0;
      border-radius: 5px 0 0 5px;
    }
 }
</style>