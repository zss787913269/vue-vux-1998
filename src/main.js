import Vue from 'vue'
import App from './App'
import router from './router'

// 导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

// 导入mint-ui
import 'mint-ui/lib/style.min.css'
import './assets/my-mint.scss'; //核心，多了这一行用上边的样式覆盖默认的primary颜色
// 按需导入 Mint-UI中的组件
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
