<template>
    <div class="add">
      <MHeader title="添加图书"></MHeader>
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
            <button type="button" class="btn btn-info" @click="add">提交</button>
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
        created() {
        },
        methods: {
          add(){
            axios.post("/api/book",this.book).then((res)=>{
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
