import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import Detail from '../page/Detail.vue'
import List from '../page/List.vue'
import Add from '../page/Add.vue'
//只能在插件上使用，插件会带一个install方法
Vue.use(Router)
//将router中的类容，注册成全局组件
const router=new Router({
  routes: [

    {
      path: '/home',
      component: Home
    },
    {
      //this.$route.params.bid
      path: '/detail/:bid',
      component: Detail,
      name:'detail'
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '*',
      redirect:"./home" //如果文件找不到，跳转到首页
    }

  ]
});
router.push("/home");
export default router;
