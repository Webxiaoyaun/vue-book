<template>
  <div id="app">
    <!--缓存，不会再调用created方法-->
    <transition name="slide">
      <keep-alive>
        <router-view style="position:absolute;width:100%;height:100%;top:0;left:0"></router-view>
      </keep-alive>
    </transition>
    <Navbar></Navbar>
  </div>
</template>
<script>
import Navbar from "./base/Navbar.vue"
export default {
    data(){
      return {

      }
    },
  components:{
    Navbar
  }
}
</script>

<style lang="stylus">
  .slide-enter
    transform translateX(100%)
  .slide-enter-active
    transition all 0.4s
  .slide-leave-active
    opacity 0
    transition all 0.3s
  *
    margin 0
    padding 0
    body,html,#app
      width 100%
      height 100%
      overflow hidden
  ul,li
    list-style none
  a
    text-decoration none
    color #ccc
  .scroll
    width 100%
    position fixed
    top 44px
    bottom 60px
    overflow-x hidden
    overflow-y scroll


</style>
