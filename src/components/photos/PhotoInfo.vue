<template>
    <div class="photoinfo-con">
      <h3>{{photoinfo.title}}</h3>
      <p class="subtitle">
          <span>发表时间：{{photoinfo.add_time|dateFormat}}</span>
          <span>点击：{{photoinfo.click}}次</span>
      </p>
      <hr>
    <!-- 缩略图区域 -->
 
  <div class="thumb">
      <vue-preview :slides="list"></vue-preview>
  </div>
  


    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 评论子组件 -->
    <comment :id="id"></comment>
    </div>
</template>

<script>
import comment from '../subcomponents/comment'
export default {
    data(){
        return {
            // 从路由中获取到的图片ID
            id:this.$route.params.id,
            photoinfo:{},//图片详情
            list:[],//缩略图数组
        //     slide2: [
        //   {
        //     src: "http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg",
        //     msrc: "http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg",
        //     w: 400,
        //     h: 400
        //   },
          
        // ]
        }
    },
    created(){
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods:{
        getPhotoInfo(){
            // 图片内容列表
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                if(result.data.status===0){
                    this.photoinfo = result.data.message[0]
                }
            })

        },
        getThumbs(){
            // 获取缩略图
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.data.status ===0){
                    // 循环每个图片数据 补全图片的宽和高
                    result.data.message.forEach(item=>{
                        item.msrc= item.src = item.src;
                        item.w = 600;
                        item.h = 400;
                    });
                    // 把完整的数据 保存在list中

                    this.list = result.data.message;
                }
            })
        }
    },
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-con{
    padding: 3px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumb{
        width: 100px;
    }
}
</style>
