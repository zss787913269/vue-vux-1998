<template>
    <div class="cmt-con">
       <h3>发表评论</h3>
       <hr>
       <textarea v-model="msg" placeholder="请输入要评论的内容(最多吐槽120字)" maxlength="120"></textarea>
       <mt-button @click="postComment" type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
                <div class="cmt-title">第{{i+1}}楼 用户:匿名用户 发表时间:{{item.add_time|dateFormat}}</div>
                <div class="cmt-body">{{item.content==="undefined"?"此用户很懒 啥都没说":item.content}}</div>
            </div>
              
             
        </div>
       <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            pageIndex:1,//默认展示第一页数据
            comments:[],
            msg:''//评论输入的内容
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        // 获取评论
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result =>{
                if(result.data.status === 0){
                    // this.comments = result.data.message;
                    // 每当 获取 新评论数据的时候 不要把数据清空 覆盖
                    // 而是应该以老数据 拼接上新数据
                    this.comments = this.comments.concat(result.data.message)
                }else{
                  Toast('获取评论失败')
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getComments();
        },
        postComment(){
            if(this.msg.trim().length===0){
                return Toast("评论内容不能为空！")
            }
            // 参数1：请求的URL地址
            // 参数2：提交给服务器的数据对象｛content:this.msg｝
            // $route.params.id 你要评论的那条资讯的ID
            this.$http.post('api/postcomment/'+this.$route.params.id,{
                content:this.msg.trim()
            }).then(result=>{
                if(result.data.status ===0){
                    var cmt = {
                        // 拼接一个评论对象
                        user_name :"匿名用户",
                        add_time:Date.now(),
                        content:this.msg.trim()
                        };
                        // 把评论对象跟内容添加到列表里
                        this.comments.unshift(cmt);
                        // 
                        this.msg = "";
                }
            })
        }
    },
    // 使用props来接收 父组件传递的ID值
    props:["id"]
    
}
</script>

<style lang="scss" scoped>
.cmt-con{
    h3{font-size: 18px;}
    textarea{font-size: 12px;height: 85px;margin: 0;}
}
.cmt-list{
    margin: 5px 0;
    .cmt-item{
        font-size: 13px;
        .cmt-title{line-height: 30px; background-color: #ccc}
        .cmt-body{line-height: 35px;text-indent: 2em;}
    }
}
</style>
