<template>
    <div class="m-header">
      {{title}}
      <i v-if="back" class="iconfont icon-fanhui" @click="goBack()"></i>
    </div>
</template>
<script>
    export default {
        props:{
          title:{},
          back:{type:Boolean,default:false}
          },
        data() {
            return {}
        },
        created() {
        },
        methods: {
          goBack(){
            this.$router.history.go(-1)
          }
        },
        computed: {},
        mounted() {
        }
    }
</script>
<style scoped lang="stylus">
  .m-header
    background orangered
    color #FFFFFF
    text-align center
    height 44px
    line-height 44px
    position fixed
    top 0px
    left 0px
    width 100%
    i
      position absolute
      left 10px
      top 0
</style>
