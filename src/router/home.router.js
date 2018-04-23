/**
 * @author yangbin
 * @date 2018/4/16
 * @Description: 首页路由
 */
import Index from '../components/home/index.vue'
import Home from '../components/home/home.vue'
import Detail from '../components/detail/index.vue'

export default [
  {
    path: '/',
    component: Home,
    children: [{
      path: '/order/:oc/:type',
      component: Index,
      name: 'order',
      meta: {keepAlive: true}
    },{
      path: '/contract/:oc/:type',
      component: Index,
      name: 'contract',
      meta: {keepAlive: true}
    },{
      path: '/detail/:oc/:type/:id',
      component: Detail,
      name: 'detail',
      meta: {keepAlive: true}
    },{
      path: '/',
      redirect: '/order/o/0'
    }]
  },
]