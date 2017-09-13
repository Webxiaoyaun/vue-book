export default {
  //写一个插件
  install(Vue){
    Vue.component('my-button',{
      render:h=>h('button',"点我")
    });
  }
}
