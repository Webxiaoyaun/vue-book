import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import 'bootstrap/dist/css/bootstrap.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//图片懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
//注册轮播图插件
Vue.use(VueAwesomeSwiper)
//图片懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img01.taopic.com/160312/267851-16031210562321.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662594759_1140x0.gif',
  attempt: 1
});
//全局的过滤器
Vue.filter(
  'currency',function (input,e) {
    //input是管道符前面的值
    return '￥'+parseFloat(input).toFixed(e)
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
