import Vue from 'vue'
import Router from 'vue-router'

import MyHome from '../components/tabbar/MyHome.vue'
import MyMember from '../components/tabbar/MyMember.vue'
import MySearch from '../components/tabbar/MySearch.vue'
import MyShopcar from '../components/tabbar/MyShopcar.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    { path: '/home',component:   MyHome },
    { path: '/member',component:   MyMember},
    { path: '/search',component:   MySearch },
    { path: '/shopcar',component:   MyShopcar },
  ],
  linkActiveClass:'mui-active'
})
