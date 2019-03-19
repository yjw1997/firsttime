import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import test2 from '@/components/test2'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    // path: '/',
    // name: 'HelloWorld',
    // component: HelloWorld,
    // children:[
    // {path: '/test2', component: test2}
    // ]
    // },
    {
      path: '/',
      component: test,
      children: [
        {path: '/test2', component: test2}
      ]
    }
  ]
})
