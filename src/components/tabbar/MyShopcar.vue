<template>
 <div class="shopcar-con">


 <div class="goods-list">
        <!-- 商品列表区域 -->
       <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
                        <img :src="item.thumb_path" >
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox></numbox>
                                    <a href="#">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>

    <!-- 结算区域 -->
     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>


  </div>


 </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_box"
export default {
    data(){
        return {
            goodslist:[]
            // 购物车中所有商品的数据
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            // 1.获取到store中 所有商品的ID 然后拼接出一个 用逗号分隔的字符串
            var idArr = []
            this.$store.state.car.forEach(item=>idArr.push(item.id));
            // 如果购物车中 没有商品 直接返回
            if(idArr.length<=0){
                return;
            }
            // 获取购物车商品列表
            this.$http.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result=>{
                if(result.data.status ===0){
                    this.goodslist = result.data.message;
                }
            })
        }
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-con{
    background-color: #eee;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            align-items: center
        }

        img{
            width: 60px;
            height: 60px;
        }
        h1{
            font-size: 13px;
        }
        p{
            padding: 10px;
        }
        .info{
           
            .price{color:red;font-weight: bold}
        }
    }
}
</style>
