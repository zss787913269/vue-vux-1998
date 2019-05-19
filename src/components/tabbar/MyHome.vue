<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 渲染录轮播图的数据到页面上 -->
            <mt-swipe-item v-for="item in lbtList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
            
        </mt-swipe>
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <router-link to="/home/newslist">
		                    <img src="../../imgs/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
                            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <img src="../../imgs/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div>
                            </router-link>
                        </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodlist">
		                    <img src="../../imgs/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/liuyan">
		                  <img src="../../imgs/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div>
                            </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                  <img src="../../imgs/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../imgs/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        
		        </ul> 
        
     

    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            lbtList:[]//保存轮播图的数组
        }
    },
    created(){
        this.getLbt();
    },
    methods: {
        getLbt(){
           this.$http.get("api/getlunbo").then(result => {
                console.log(result.data)
        if(result.data.status ===0){
            // 成功了
            this.lbtList = result.data.message;
        }else{
            Toast('加载轮播图失败')
        }

            })
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;

    .mint-swipe-item{
        &:nth-child(1){
             background:hotpink;
        }
         &:nth-child(2){
             background:green;
        }
         &:nth-child(3){
             background:cyan;
        }
        img{
            width: 100%;
            height: 100%;
        }
       
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
    img{
            width: 60px;
    height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
</style>