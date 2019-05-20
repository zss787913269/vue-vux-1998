<template>
    <div class="container">
       <h3 class="title">{{info.title}}</h3>
       <hr>
       <div class="content" v-html="info.content">
           
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
            info:{}//图文数据
        }
    },
    created(){
        this.getGoodsInfo()
    },
    methods:{
        getGoodsInfo(){
            this
            .$http.get('api/goods/getdesc/'+this.$route.params.id)
            .then(result=>{
                if(result.data.status===0){
                    this.info = result.data.message[0];
                }
            })
        }
    }
}
</script>

<style lang="scss">
.container{
    padding: 4px;
    .title{
        font-size: 16px;
        color:#226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>