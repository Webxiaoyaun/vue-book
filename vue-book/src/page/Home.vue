<template>
    <div class="home">
      <MHeader title='首页' :back="true"></MHeader>
      <div class="scroll">
        <Swiper :data="sliders"></Swiper>
        <h3>热门图书</h3>
        <Loading v-if="isLoading"></Loading>
        <ul class="hot-list">
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
            <span>{{book.bookName}}</span>
            <b class="priceColor">{{book.bookPrice | currency(2)}}</b>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  import MHeader from "../base/MHeader.vue"
  import Swiper from "../base/Swiper.vue"
  import axios from "axios"
  import Loading from "../base/Loading.vue"
    export default {
        data() {
            return {
              sliders:[],  //接收轮播图的
              books:[],  //获取图书的
              isLoading:true
            }
        },
        created() {
          this.getSliders();
          this.getHot();
        },
        activated(){
        //当你使用了keep-alive 切换路由时候，依然会走这个函数，不缓存的数据可以在这里重新获取
        this.getHot()
        },
        methods: {
          getSliders(){
            axios.get('/api/sliders').then(res=>{
              this.sliders=res.data;
            })
          },
          getHot(){
            //获取的数据有可能就是空数组，此时也获取完了
            axios.get('/api/hot').then(res=>{
              setTimeout(()=>{
                this.books=res.data;
                this.isLoading=false
              },1000)
            })
          }
        },
        computed: {},
        mounted() {
        },
      components:{
        MHeader,
        Swiper,
        Loading
      }
    }
</script>
<style scoped lang="stylus">
  .home
    //height 100%
  h3
    text-align center
    line-height 35px
    font-weight normal
  .hot-list
    display flex
    flex-wrap wrap //换行
    li
      width 50%
      flex-direction column //从上往下,每个占一行
      display flex
      align-items center  //水平居中
      img
        width 150px
        height 150px
      .priceColor
        color darkred

</style>
