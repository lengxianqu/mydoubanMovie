import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 引入组件
import Moving from '@/components/moving.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'moving',
      component: Moving
    }
  ]
})
