// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入app跟组件
import App from './App'
// 导入路由组件
import router from './router'
// 导入mint-ui
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css'
import './assets/my-mint.scss'; //核心，多了这一行用上边的样式覆盖默认的primary颜色
Vue.use(MintUI);

import './lib/mui-master/dist/css/mui.min.css'

// 按需导入 Mint-UI中的组件







import { Header } from 'mint-ui';
Vue.component(Header.name, Header)


Vue.config.productionTip = false

console.log("ok")
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
