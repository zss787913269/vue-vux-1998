<template>
  <div id="app" class="con">
    
    <mt-header  type="danger" fixed title="张骚骚的Vue项目">
      <span slot="left" @click="goBack" v-show="flag">
      <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 顶部 Header区域 -->




  <!-- 中间的路由 router-view区域 -->
<transition>

	<router-view></router-view>

</transition>




  <!-- 底部Tabbar区域 -->
	
  <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-zss" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-zss" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-zss" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ this.$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-zss" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
 
   
  </div>
</template>

<script>
export default {

  data(){
    return {
      flag:false
    }
  },
  methods:{
    // 点击后退
    goBack(){
      this.$router.go(-1)
    }
  },
  created(){
    this.flag = this.$route.path === '/home'?false :true;
  },
  watch:{
    "$route.path":function(newVal){
      if(newVal === '/home'){
        this.flag = false
      }else{
        this.flag = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-header{
  z-index: 999;
}
.con{
  padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
}

.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease
}
.mui-bar-tab .mui-tab-item-zss.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-zss {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;}
.mui-bar-tab .mui-tab-item-zss .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zss .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

