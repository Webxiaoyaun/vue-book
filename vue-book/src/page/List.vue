<template>
    <div class="list">
      <MHeader title='列表页' :back="true"></MHeader>
      <div class="scroll">
        <Loading v-if="isLoading"></Loading>
        <ul>
          <router-link tag="li" v-for="(book,index) in books" :to="{name:'detail',params:{bid:book.id}}" :key="index">
              <img v-lazy="book.bookCover" alt="">
            <div class="listInfo">
              <h4>{{book.bookName}}</h4>
              <p>{{book.bookInfo}}</p>
              <strong class="priceColor">{{book.bookPrice | currency(2)}}</strong>
              <button class="btn btn-danger" @click="remove(book.id)">删除</button>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from "../base/MHeader.vue"
  import axios from "axios"
  import Loading from "../base/Loading.vue"
    export default {
        data() {
            return {
              books:[],
              isLoading:true
            }
        },
        created() {
          this.getList()
        },
        methods: {
          getList(){
            axios.get('/api/book').then(res=>{
              setTimeout(()=>{
                this.books=res.data;
                this.isLoading=false;
              },2000)

            })
          },
          remove(id){
            axios.delete(`/api/book?id=${id}`).then(res=>{

              this.books=this.books.filter(book=>book.id!==id);
            })
          }
        },
        activated(){
          //当你使用了keep-alive 切换路由时候，依然会走这个函数，不缓存的数据可以在这里重新获取
          this.getList()
        },
        computed: {},
        mounted() {
        },
      components:{
        MHeader,
        Loading
      }
    }
</script>
<style scoped lang="stylus">
  .list
    //height 100%
    ul
      padding 1.5%
      li
        display flex
        margin 2% 0
        img
          width 150px
          height 150px
          flex 0 0 150px
        .listInfo
          flex 1
          font-size 18px
          justify-content center //垂直居中
          display flex
          flex-direction column
          .btn-danger
            width:80px
</style>
