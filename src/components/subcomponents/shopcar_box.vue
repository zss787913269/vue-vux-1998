<template>
	<div class="mui-numbox" data-numbox-min='1' style="height:25px">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initcount" 
		@change="countChanged" ref="numbox" readnoly/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
   
</template>
<script>
import mui from '../../lib/mui/js/mui'
export default {
    mounted(){
        // 初始化数字选择框组件
        mui(".mui-numbox").numbox();
	},
	methods:{
		countChanged(){
			// console.log(this.$refs.numbox.value)
			this.$store.commit('updateGoodsInfo',{
				id:this.goodsid,
				count:this.$refs.numbox.value})
			// 每当数量改变 则立即把最新的数量同步到购物车的store中 覆盖原来的值
		}
	},
	props:["initcount",'goodsid']
	
}
</script>

<style lang="scss" scoped>

</style>