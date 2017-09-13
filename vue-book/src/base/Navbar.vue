<template>
  <nav>
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiaoyetuanqi"></i>
      <span>列表页</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjiayemian"></i>
      <span>添加页</span>
    </router-link>
  </nav>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {
        },
        methods: {},
        computed: {},
        mounted() {
        }
    }
</script>
<!--
display:flex;
flex-direction :column  //上下
flex:1 //等分
justify-content: center; //垂直
align-items: center;//水平
-->
<style scoped lang="stylus">
  nav
    position fixed
    bottom 0
    left 0
    width 100%
    height 60px
    display flex
    border-top 1px solid #cacaca
    a
      flex 1
      display flex
      align-items center
      justify-content center
      flex-direction column
    .router-link-active
      color orangered

</style>
