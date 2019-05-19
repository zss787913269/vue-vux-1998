<template>
    <div>
		<!-- 顶部滑动区域 -->
        	<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id ==0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

			</div>
		<!-- 图片列表区域 -->
		<ul class="photo-list">
			<router-link tag="li" v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" >
				<img v-lazy="item.img_url">
				<div class="info">
					<h1 class="info-title">
						{{ item.title}}
					</h1>
					<div class="info-body">
						{{item.zhaiyao}}
					</div>
				</div>
			</router-link>
		</ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui';

export default {
    data(){
		return {
			cates:[],//s所有分类的列表数组
			list:[],//图片列表的数组
		}
	},
	created(){
		this.getAllCategory()
		// 默认进来就显示所有列表的数据
		this.getPhotoListByCateId(0)
	},
	mounted(){//当组件中的DOM结构 被渲染好 并被放到页面中后 会执行 这个钩子函数
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	methods:{
		getAllCategory(){
			// 获取所有的图片分类
			this.$http.get('api/getimgcategory').then(result=>{
				if(result.data.status===0){
					// 手动拼接出一个最完整的 分类列表
					result.data.message.unshift({title:"全部",id:0})
					this.cates = result.data.message;
				}
			})
		},
		getPhotoListByCateId(imgid){
			//根据分类ID 获取图片列表
			this.$http.get('api/getimages/'+imgid).then(result=>{
				if(result.data.status===0){
					this.list = result.data.message;
				}
			})
		}
	}
	
}
</script>

<style lang="scss" scoped>
*{
	touch-action: pan-y;
}
.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;
	padding-bottom: 0;
	li{
		position: relative;
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		img{
			width: 100%;
			vertical-align: middle;
		}
		img[lazy="loading"]{
			width:40px;
			height: 300px;
			margin: auto;
		}
		.info{
			color:white;
			text-align: left;
			position: absolute;
			bottom: 0;
			background-color: rgba(0,0,0,0.4);
			max-height: 84px;
			.info-title{
				font-size: 14px;
			}
			.info-body{
				font-size: 13px;
			}
		}
	}
}

</style>