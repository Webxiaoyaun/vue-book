<template>
  <div class="add">
    <MHeader title="修改图书" :back="true"></MHeader>
    <div class="scroll">
      <form>
        <div class="form-group">
          <label for="bookName" class="control-label">图书名字</label>
          <input type="text" class="form-control" id="bookName" v-model="book.bookName">
        </div>
        <div class="form-group">
          <label for="bookCover" class="control-label">图书地址</label>
          <input type="text" class="form-control" id="bookCover" v-model="book.bookCover">
        </div>
        <div class="form-group">
          <label for="bookPrice" class="control-label">价格</label>
          <input type="text" class="form-control" id="bookPrice" v-model="book.bookPrice">
        </div>
        <div class="form-group">
          <label for="bookInfo" class="control-label">详细信息</label>
          <input type="text" class="form-control" id="bookInfo" v-model="book.bookInfo">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-info" @click="update">确认修改</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import MHeader from "../base/MHeader.vue"
  import axios from "axios"
  export default {
    data() {
      return {
        book:{
          bookName:"",
          bookCover:"",
          bookPrice:"",
          bookInfo:""
        }
      }
    },
    watch:{
      //监控路径变化，可以进行数据获取
      $route(){
        this.getBook()
      }
    },
    created() {
      this.getBook();
    },
    methods: {
      getBook(){
        axios.get(`/api/book?id=${this.$route.params.bid}`).then(res=>{
          this.book=res.data;
        })
      },
      update(){
        axios.put(`/api/book?id=${this.$route.params.bid}`,this.book).then(res=>{
          this.$router.push("/list");
        })
      }
    },
    computed: {},
    components:{
      MHeader
    },
    mounted() {
    }
  }
</script>
<style scoped>
  *{
    font-size: 16px;
  }
  .form-group{
    width:80%;
    margin:20px auto;
  }
</style>
