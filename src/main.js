// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import echarts from 'echarts'
// 前台界面
import myView from './myView'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import './css/common.less' /* 引入公共样式 */
Vue.prototype.$echarts = echarts
Vue.use(iView)
Vue.config.productionTip = false

// router.push('infor')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#app',
//   router,
//   components: { myView },
//   template: '<myView/>'
// })
