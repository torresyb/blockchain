// 全局样式
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

// 引入依赖
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import NProgress from 'vue-nprogress'
import Moment from 'moment'
import * as filters from './filters'
import * as storage from './storage/index'

global.moment = Moment
global.storage = storage // localstorage

// 注册依赖
Vue.use(ElementUI)
Vue.use(NProgress)

// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const nprogress = new NProgress({parent: '.nprogress-container'})

Vue.config.productionTip = false

window.vm = new Vue({
  nprogress,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
