<template>
    <div class="newinfo-con">
        <!-- 大标题 -->
        <h3 class="title">{{newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
            <span>点击：{{newsinfo.click}}</span>

        </p>
        <hr>
        <!-- 内容区域 -->
        <div class="content" v-html="newsinfo.content"></div>
        <!-- 评论子组件区域 -->
        <comment-box :id='this.id'> </comment-box>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import comment from '../subcomponents/comment'
export default {
    data(){
        return {
            // 将url地址中 传递过来的ID 挂载到data上 方便用户使用
            id:this.$route.params.id,
            newsinfo:{}//新闻对象
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        // 获取新闻详情
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.data.status === 0){
                    this.newsinfo = result.data.message[0];
                }else{
                    Toast('获取新闻失败')
                }
            })
        }
    },
    components:{
        'comment-box':comment,
    }
    
}
</script>

<style lang="scss" scoped>
.newinfo-con{
    padding: 0 4px;
    .title{
       font-size: 16px;
       text-align: center;
       margin: 15px 0 ;
       color: red
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
   

}
</style>
