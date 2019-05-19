import Vue from 'vue'
import Router from 'vue-router'

import MyHome from '../components/tabbar/MyHome.vue'
import MyMember from '../components/tabbar/MyMember.vue'
import MySearch from '../components/tabbar/MySearch.vue'
import MyShopcar from '../components/tabbar/MyShopcar.vue'
import NewsList from '../components/News/NewsList.vue'
import NewsInfo from '../components/News/NewsInfo.vue'
import photos from '../components/photos/PhotoList.vue'
import PhotoInfo from '../components/photos/PhotoInfo.vue'
import GoodList from '../components/GoodList/GoodList.vue'
import LiuYan  from '../components/LiuYan/LiuYan.vue'
import GoodsInfo from '../components/GoodList/GoodInfo.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    { path: '/home',component:   MyHome },
    { path: '/member',component:   MyMember},
    { path: '/search',component:   MySearch },
    { path: '/shopcar',component:   MyShopcar },
    { path: '/home/newslist',component:NewsList},
    { path: '/home/newsinfo/:id',component:NewsInfo},
    { path: '/home/photolist',component:photos},
    { path:'/home/photoinfo/:id',component:PhotoInfo},
    { path:'/home/goodlist',component:GoodList},
    { path:'/home/liuyan',component:LiuYan},
    { path:'/home/goodsinfo/:id',component:GoodsInfo}

  ],
  linkActiveClass:'mui-active'
})
