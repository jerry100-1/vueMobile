<template>
  <div style="min-height:100%;background:#f4f7f8">
      <div class="homFirPage1">
       <div class="div3">点击下拉添加新的信息</div>
       <img class="img1" src="../homepage/h-1.png" alt="">
       <img class="img2" src="../homepage/h-3.png" alt="">
     </div>
      <div class="homFirPage2">
        <img class="img3" src="../homepage/h-2.png" alt="">
        <img class="img4" src="../homepage/h-4.png" alt="">
        <div class="div4">暂无任何计划，快去创建一个吧</div>
      </div>

      <div class="homFirPage3">
          <div class="homFirPage3-1">
            <img src="../homepage/h-5.png" alt=""> 接种记录
          </div>
          <div class="homFirPage3-2"></div>
          <div class="homFirPage3-3" style="font-size:15px;">
            <img src="../homepage/h-6.png" alt=""> 门诊通知
          </div>
      </div>

      <div class="homFirPage4">

  -
        <swiper :options="swiperOption" ref="mySwiper" style="overflow:hidden;position: relative;top:-20px;">
          <!-- slides -->
          <swiper-slide>
            <img src="../homepage/h-7.png" alt="">

          </swiper-slide>
          <swiper-slide>
            <img src="../homepage/h-7.png" alt="">

          </swiper-slide>
          <swiper-slide>
            <img src="../homepage/h-7.png" alt="">


          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>//
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>

      </div>

      <div class="homFirPage5" style="position:relative;top:-10px;">
          <div class="homFirPage5p1">
             <div class="homFirPage5p1Left">
               <img src="../homepage/h-9.png" alt="">
               <h3>推荐文章</h3>
             </div>
            <div class="homFirPage5p1Right">
               查看更多 <img src="../homepage/h-8.png" alt="">
            </div>
          </div>

           <!--模型1-->
          <div class="homFirPage5p2" v-for="(item,i) in article" :key="i">

            <div class="homFirPage5p2-1">
                   <div class="homFirPage5p21Left">
                       <div class="leftTopText">
                            <h5>{{item.content}}</h5>
                       </div>
                       <div class="leftBottomText">
                              <span class="hhText1">{{item.looks}}万人阅读</span>
                              <span class="hhText2">{{item.commentnum}}人评论</span>
                       </div>
                   </div>
                   <div class="homFirPage5p21Right">
                     <img :src="item.pic" alt="">
                   </div>
            </div>

          </div>



      </div>
      <div class="homFirPage6">
        <div class="homFirPage5p1">
          <div class="homFirPage5p1Left">
            <img src="../homepage/h-9.png" alt="">
            <h3>热门课程</h3>
          </div>
          <div class="homFirPage5p1Right">
            查看更多 <img src="../homepage/h-8.png" alt="">
          </div>
        </div>

        <div class="wrapFourSmall">

            <!--模型1-->
            <div class="smallDivSimple" style="height:184px;width:48.5%;">
              <img class="ff-img1" src="../homepage/h-11.png" alt="">
              <h3 class="ff-text1">宝马哺育婴儿教育课程</h3>
              <div class="ff-text2">精选课程</div>
              <div class="ff-text3">4.3w人学过</div>
           </div>
          <!--模型1-->
           <div class="smallDivSimple" style="height:184px;width:48.5%;">
            <img class="ff-img1" src="../homepage/h-11.png" alt="">
            <h3 class="ff-text1">宝马哺育婴儿教育课程</h3>
            <div class="ff-text2">精选课程</div>
            <div class="ff-text3">4.3w人学过</div>
          </div>

          <!--模型1-->
          <div class="smallDivSimple" style="height:184px;width:48.5%;">
            <img class="ff-img1" src="../homepage/h-11.png" alt="">
            <h3 class="ff-text1">宝马哺育婴儿教育课程</h3>
            <div class="ff-text2">精选课程</div>
            <div class="ff-text3">4.3w人学过</div>
          </div>

          <!--模型1-->
          <div class="smallDivSimple" style="height:184px;width:48.5%;">
            <img class="ff-img1" src="../homepage/h-11.png" alt="">
            <h3 class="ff-text1">宝马哺育婴儿教育课程</h3>
            <div class="ff-text2">精选课程</div>
            <div class="ff-text3">4.3w人学过</div>
          </div>





        </div>



    </div>

   　　 <Tabbar></Tabbar>
  </div>
</template>
<script>
  import Tabbar from '@/components/Tabbar'
  import Swiper from 'swiper';
  import Vue from 'vue';
  import VueAwesomeSwiper from 'vue-awesome-swiper';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        name: "firstpage",

        data()
        {
          return{

            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              notNextTick: true,
              // swiper configs 所有的配置同swiper官方api配置
              autoplay: 1000,
              grabCursor : true,
              setWrapperSize :true,
              autoHeight: true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              // prevButton:'.swiper-button-prev',//上一张
              // nextButton:'.swiper-button-next',//下一张
              scrollbar:'none',//滚动条
              mousewheelControl : true,
              observeParents:true,
              // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
              debugger: true,
            },
            //轮播图
            photoList:[],
            //推荐文章
            article:[],
            // 热门活动
            curriculum:[]


          }
        },


        components:{
          swiper,
          swiperSlide,
          Tabbar
        },
        mounted(){
          new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            // pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            speed:4000,
            scrollbar: '.swiper-scrollbar',
            autoplay:{
              delay:2,
              autoplayDisableOnInteraction:false
           },
            // spaceBetween:0,
            // slidesPerView:8,
            allowTouchMove:false,
            autoplayDisableOnInteraction: true
          })
        },
        created () {
          //获取轮播图
          this.getphoto()
          //推荐文章
          this.getArticles()
          //热门课程
          this.getcurriculum()
        },
        methods: {
          // 获取轮播图
           getphoto(){
            this.axios.get('/index/Lunboimgs/getlist',{
              params:{
                type:1
        }
      }).then(response=>{
        if(response.status == "1"){
           this.photoList=response.result.list
        }
      })
    },
    //推荐文章
    getArticles(){
       this.axios.get('/index/first/getClassroom',{
              params:{
                 token:this.$store.state.token
          }
      }).then(response=>{
        if(response.status == "1"){
           this.curriculum=response.result.list
        }
      })
    },
    // 热门课程

    getcurriculum(){
      console.log(123)
      this.axios.get('/index/first/getClassroom',{
              params:{
                 token:this.$store.state.token
          }
      }).then(response=>{
        if(response.status == "1"){
           this.curriculum=response.result.list
        }
      })
    }


      }
    }
</script>

<style scoped>

  .swiper-button-prev
  {
    display:none;
  }
  .swiper-button-next
  {
    display:none;
  }
  *{
    margin:0;
    padding:0;
  }
  .homFirPage6
  {
    min-height:184px;
    background: #fff;
    margin-bottom:60px;
  }
  .ff-img1
  {
    margin-top:10px;
    width:170px;
    height:112px;
  }
  h3.ff-text1
  {
    font-size:15px;
    text-align:left;
    margin-top:4px;
    margin-left:4px;
  }
  .ff-text2
  {
    font-size:12px;
    text-align:left;
    margin-top:3px;
    color:red;
    margin-left:4px;
  }
  .ff-text3
  {
    font-size:12px;
    text-align:left;
    margin-top:1px;
    color:rgba(0,0,0,0.36);
    margin-left:4px;
  }

  .swiper-slide img
  {
    width:100%;
    height:145px;
  }
  .homFirPage1
  {
    width:100%;
    height:175px;
    background-image:url("../homepage/ic_home_page_bg.png");
    background-size:100% 175px;
    background-repeat:no-repeat;
    position: relative;
    text-align:center;
  }
  .leftBottomTextWr
  {
    position:absolute;
    bottom:10px;
    font-size:12px;
    color:rgba(0,0,0,0.16);
    left:0px;
  }
  .swiper-container {
    width: 100%;
    height:150px;
    margin: 0px auto;
  }

  .homFirPage3-1 img
  {
    width:20px;
    height:20px;
  }
  .homFirPage3-3 img
  {
    width:20px;
    height:20px;
    position: relative;
    top:2px;
  }
  .homFirPage1 .img1
  {
    width:35px;
    height:35px;
    position:absolute;
    left:50%;
    margin-left:-17.5px;
    bottom:30px;
  }
  .homFirPage1 .div3
  {
    width:100%;
    height:40px;
    color:#fff;
    font-size:18px;
    letter-spacing:2px;
    position:absolute;
    top:62px;
  }
  .homFirPage1 .img2
  {
    width:9px;
    height:8px;
    position:absolute;
    left:50%;
    margin-left:-5px;
    bottom:12px;
  }
  .homFirPage2
  {
    width:100%;
    height:150px;
    text-align:center;
    position:relative;
    overflow:hidden;
  }
  .homFirPage2 .img3
  {
    width:100%;
    height:150px;
  }
  .homFirPage2 .img4
  {
    width:106px;
    height:87px;
    position:absolute;
    top:35%;
    left:50%;
    margin-left:-53px;
    margin-top:-44px;
  }
  .homFirPage2 .div4
  {
    width:375px;
    height:40px;
    position:absolute;
    bottom:0px;
    color:#55D9CE;
    font-size:15px;
    margin-top:-16px;
    left:50%;
    letter-spacing:1px;
    margin-left:-188px;
  }


  .homFirPage3
  {
    width:100%;
    height:44px;
    /*border:1px solid red;*/
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
  }
  .homFirPage3-1
  {
    flex:1;
    align-items:center;
    justify-content:center;
    font-size:14px;
    letter-spacing:1px;
  }
  .homFirPage3-2
  {
    width:0px;
    height:44px;
    border-right:1px solid rgba(0,0,0,0.04);
  }
  .homFirPage3-3
  {
    flex:1;
    align-items:center;
    letter-spacing:1px;
    fpnt-size:14px;
    justify-content:center;
  }
  .homFirPage4
  {
    width:100%;
    height:150px;
  }

  .homFirPage5p1
  {
    width:100%;
    height:40px;
    background:#fff;
    border-bottom:1px solid rgba(0,0,0,0.16);
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
  .homFirPage5p1Left
  {
    flex:1;
    font-size:18px;
    text-align:left;
    padding-left:20px;
    align-items:center;
  }

  .homFirPage5p1Left h3
  {
    font-size:16px;
    margin-top:6px;
    display:inline;
    vertical-align:middle;
    margin-left:10px;
  }
  .homFirPage5p1Right
  {
    flex:1;
    font-size:14px;
    color:rgba(0,0,0,0.36);
    align-items:center;
    text-align:right;
    padding-right:20px;
  }
  .homFirPage5p1Right img
  {
    width:6px;
    height:11px;
    margin-top:5px;
    margin-left:2px;
  }
  .homFirPage5p1Left img
  {
    width:5px;
    display:inline;
    vertical-align:middle;
    height:17px;
    margin-right:3px;
  }
  .homFirPage5p2
  {
    width:100%;
    min-height:110px;
    background:#fff;
  }
  .homFirPage5p2-1
  {
    width:95%;
    height:110px;
    border-bottom:1px solid rgba(0,0,0,0.06);
    margin:0 auto;
    display:flex;
    flex-direction:row;
    position: relative;
    background:#fff;
  }
  .homFirPage5p21Left
  {
    flex:1;
    width:60%;
  }
  .homFirPage5p21Right
  {
    width:124px;
    height:110px;
  }
  .homFirPage5p21Right img
  {
    width:124px;
    height:90px;
    margin-top:10px;
  }
  .leftTopText
  {
    text-align:left;
    margin-top:12px;
    padding-right:14px;
    padding-left:10px;
    letter-spacing:1px;
    font-size:18px;
  }
  .leftBottomText
  {
    text-align:left;
    margin-top:12px;
    padding-right:14px;
    padding-left:10px;
    font-size:12px;
    position:absolute;
    bottom:10px;
  }
  .wrapFourSmall
  {
    width:95%;
    background:#fff;
    display:flex;
    margin:0 auto;
    /*flex-direction:row;*/
    justify-content:space-between;
    align-items:center;
    margin-left:2.5%;
    flex-wrap: wrap;
  }
  .hhText1,.hhText2
  {
    display:inline-block;
    color:rgba(0,0,0,0.36);
  }
  .hhText2
  {
    margin-left:25px;
  }


</style>
