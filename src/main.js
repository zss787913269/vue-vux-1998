import Vue from 'vue'
import App from './App'
import router from './router'

// 注册vuex 
import Vuex from "vuex"
Vue.use(Vuex)
// 每次刚进入我们的网址 肯定会调用main.js调用的时候  先从本地存储中 把购物车的数据读出来 放到store中
var car = JSON.parse(localStorage.getItem('car')||"[]")
var store = new Vuex.Store({
  state:{
    // 获取state里面的数据 this.$store.state.***
    car:car //将购物车中 商品的数据 用一个数组存储起来，在car 数组中 存储一些商品的对象
    // 可以暂时将这个商品的对象 设置成这个样子｛ID：商品的ID ，conut:要购买的数量，price:商品的价格
    // selected:false｝

  },
  mutations:{
    // 获取mutations里面方法的 this.$store.commit('方法的名称'，"按需传递唯一的参数"")
    addToCar(state,goodsinfo){
      // 点击加入购物车 把商品信息 保存到store中的 car上
      //分析：
      // 如果 购物车中 之前 就有已经有这个对应的商品了  那么只需要更新数量
      // 如果没有 则直接把 商品数据 push 到car中 即可

      // 假设 在购物车 没有找到对应的商品
      var flag = false;
      state.car.some(item=>{
        if(item.id == goodsinfo.id){
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true 
        }
      })
      // 如果 最终循环完毕 得到的还是flag 
      if(!flag){
        state.car.push(goodsinfo)
      }
      // 当更新 car 之后 把car数组 存储到本地的localStorage
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo) {
      //修改购物车中商品的数量制
    },
  },
  getters:{
    // 相对于计算属性
    getAllCount(state){
      var c = 0;
      state.car.forEach(item=>{
        c += item.count
      })
      return c
    }
    // this.$store.getters.***
  }
})


// 导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

axios.defaults.baseURL = 'http://www.liulongbin.top:3005';

// 导入mint-ui

// 按需导入 Mint-UI中的组件
// import { Header ,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.min.css'
import './assets/my-mint.scss'; //核心，多了这一行用上边的样式覆盖默认的primary颜色

// 导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 安装图片缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



import moment from 'moment'
// 定义全局的过滤器
Vue.filter("dateFormat",function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return   moment(dataStr).format(pattern)
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store //挂载store状态管理对象
})
