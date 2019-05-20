<template>
    <div>
          <mt-swipe :auto="4000">
            <!-- 渲染录轮播图的数据到页面上 -->
            <!-- 谁使用 轮播图组件 谁为我们传递 lbtList-->
            <!-- 此时 lbtList 应该是 夫组件向子组件传值 -->
            <mt-swipe-item v-for="item in lbtList" :key="item.id">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
            
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lbtList","isfull"]
    
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height:200px;

    .mint-swipe-item{
        text-align: center;
        
        img{
            // width: 100%;
            height: 100%;
        }
       
    }
}
.full{
    width:100%;
}
</style>