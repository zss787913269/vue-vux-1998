<template>
 <div class="shopcar-con">


 <div class="goods-list">
        <!-- 商品列表区域 -->
       <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch 
                        v-model="$store.getters.getGoodsSelected[item.id]"
                        @change="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                        <img :src="item.thumb_path" >
                        <div class="info">
                            <h1>{{item.title}}</h1>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <numbox 
                                :initcount="$store.getters.getGoodsCount[item.id]" 
                                :goodsid="item.id"></numbox>
                                    <a href="#" @click.prevent="remove(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>

    <!-- 结算区域 -->
     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
                            <p>总计(不含运费)</p>
                            <p>已经勾选<span class="red">{{$store.getters.getGoodsCountAndAmount.count}}</span>件 总价<span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
                             
                        </div>
                   <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>

    
  </div>

<p>{{$store.getters.getGoodsSelected}}</p>
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
        },
        remove(id,index){
            // 点击删除 把商品从store中根据传递的 ID删除 
            this.goodslist.splice(index,1);
            this.$store.commit('removeFormCar',id);
        },
        selectedChanged(id,val){
            // 每当点击开关 把最新的 开关状态 同步到store中
            // console.log(id+"---"+val)
            this.$store.commit('updateGoodsSelected',{id,selecetd:val})
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
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red{
            color:red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
