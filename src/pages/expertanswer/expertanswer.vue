<template>
  <div class="expertanswer-container">
          <!-- 标题 -->
          <mt-header fixed title="专家问答"></mt-header>

          <!-- 轮播图 -->
          <div class="expertanswer-swipe">
            <div class="swipe">
              <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,i) in photolist" :key="i">
                  <a href="#">
                    <img :src="item.imgurl" alt>
                  </a>
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>

          <!-- 质询提问 -->
          <div class="person-wrap" ref="personWrap">
            <div class="person-list hot-activity-ad" ref="personTab">
              <div class="hot-activity-item">
                <img src="./exImages/ic_expert_answer_recycler1_1.png" alt>
                <p>洁牙检查矫正0元起</p>
              </div>
              <div class="hot-activity-item">
                <img src="./exImages/儿保咨询.png" alt>
                <p>洁牙检查矫正0元起</p>
              </div>
              <div class="hot-activity-item">
                <img src="./exImages/儿保咨询.png" alt>
                <p>洁牙检查矫正0元起</p>
              </div>
            </div>
          </div>

          <!-- 所有医生 -->
          <div class="AllDoctors">
            <div class="AllDoctors-header">
              <div class="AllDoctors-header-left">
                <img src="./exImages/ic_all_doctor_tap.png" alt>
                <h3>所有医生</h3>
              </div>
            </div>

            <!-- 所有医生列表 -->
            <router-link tag="div" :to="'/askDoctor/'+item.id" class="AllDoctors-info-item" v-for="(item,i) in expertList" :key="i">
              <img :src="item.avatar" alt>
              <div class="AllDoctors-item-user">
                <div class="AllDoctors-item-user-left">
                    <div class="AllDoctors-item-user-title">
                        <h3>{{item.name}}</h3>
                        <p>{{item.typeText}}</p>
                    </div>
                     <h4>{{item.cidText}}</h4>
                     <p>{{item.introduce}}</p>
                </div>

                <div class="like-reply">
                  <p>今日剩余13个提问名额</p>
                  <!-- <mt-button type="primary" plain>接种咨询</mt-button> -->
                  <img src="./exImages/ic_jiezhong_zixun.png" alt="">
                </div>
              </div>
            </router-link>

            <!-- 快速提问按钮 -->
            <mt-button size="large" @click="askFlag=true">快速提问</mt-button>

          </div>


          <div class="ask-popup" v-show="askFlag">
              <div class="ask-popup-list">
                <div class="ask-popup-list-left">
                    <div class="ask-popup-list-item">
                      <a href="#">
                        <img src="./exImages/ic_quick_ask_child.png" alt="">
                        <p>儿童保健</p>
                      </a>
                  </div>
                  <div class="ask-popup-list-item">
                      <a href="#">
                        <img src="./exImages/ic_quick_ask_baby.png" alt="">
                        <p>预防接种</p>
                      </a>
                  </div>
                  <div class="ask-popup-list-item">
                      <a href="#">
                        <img src="./exImages/ic_quick_ask_adult.png" alt="">
                        <p>成人体检</p>
                      </a>
                  </div>
                </div>

                <mt-button size="large" @click="askFlag=false">取消</mt-button>

              </div>

          </div>


          <Tabbar></Tabbar>

  </div>
</template>

<script>
//引入better-scroll
import Tabbar from '@/components/Tabbar'
import BScroll from "better-scroll";

export default {
  name: "expertanswer",
  data() {
    return {
      //提问显示与隐藏
      askFlag:false,
      // 专家问答轮播图
      photolist:[],
      //所有专家列表
      expertList:[]
    };
  },

  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
    //专家问答轮播图
    this.getphoto()
    //获取所有医生列表
    this.allexpertList()
  },
  methods: {
    personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 4 * 135;
      this.$refs.personTab.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    //获取专家问答轮播图
    getphoto(){
       this.axios
        .get("/index/Lunboimgs/getlist", {
          params: {
            type:3
          }
        })
        .then(response => {
            if(response.status == "1"){
              this.photolist=response.result.list
            }

        });
    },
    //所有医生列表
    allexpertList(){
      this.axios.get('/index/expert/getlist',{
        params:{
          page:1,
          limit:18,
          token:this.$store.state.token
        }
      }).then(response=>{
        if(response.status == "1"){
              this.expertList=response.result.list
            }

      })
    }
  },
  components:{
    Tabbar
  }
};
</script>

<style lang="less">
.expertanswer-container {
  overflow-x: hidden;
  padding-top: 40px;
  padding-bottom: 53px;
  position: relative;
  .mint-header {
    width: 100%;
    border-bottom: 1px solid #eee;
    color: #000;
    background-color: #fff;
  }
  .expertanswer-swipe {
    background-color: #fff;
    overflow: hidden;
    padding: 16px 12px 12px 12px;
    .swipe {
      position: relative;
      .mint-swipe {
        width: 100%;
        height: 145px;
        display: block;
        .mint-swipe-items-wrap {
          .mint-swipe-item {
            a {
              width: 100%;
              height: 100%;
              display: block;
              img {
                width: 100%;
                height: 100%;
                display: block;
                max-height: 145px;

              }
            }
          }
        }
         .mint-swipe-indicators{
            .mint-swipe-indicator{
                width: 11px;
                height: 2px;
                background: #fff;
                opacity: 0.1;
            }
            .mint-swipe-indicator.is-active{
                background: #61D8BE;
                opacity: 1;
            }
        }
      }
    }
  }

  .person-wrap {
    background-color: #fff;
    margin-top: 7px;
    padding: 16px 12px 5px 12px;
    .hot-activity-ad {
      display: flex;
      .hot-activity-item {
        margin: 0 6px;
        img {
          width: 167px;
          height: 99px;
        }
        p {
          padding: 5px;
          font-size: 12px;
          margin-top: 3px;
          color: #959595;
          line-height: 20px;
        }
      }
    }
  }

  .AllDoctors {
    margin-top: 7px;
    padding: 16px 12px 12px 12px;
    background-color: #fff;
    .AllDoctors-header {
      display: flex;
      justify-content: space-between;
      .AllDoctors-header-left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 5px;
          height: 17px;
          margin-right: 5px;
        }
        p {
          font-size: 16px;
          color: #323333;
        }
      }
    }
    .AllDoctors-info-item {
      display: flex;
      margin-top: 17px;
      border-bottom: 1px solid #e8e8e8;
      &:first-of-type {
        margin-top: 0;
      }
      img {
        width:40px;
        height: 40px;
        border-radius:50%;
      }
      .AllDoctors-item-user {
        text-align: left;
        margin-left: 10px;
        width: 100%;
        .AllDoctors-item-user-left {
          .AllDoctors-item-user-title{
            display: flex;
            // align-items: center;
            line-height: 25px;
            h3{
              color: #333333;
            }
            p{
              color: #5A5A66;
              font-size: 13px;
              margin-left: 9px;
            }
          }
          h4{
            font-size: 13px;
            color:#555555;
            line-height: 20px;
          }
          p{
            font-size: 13px;
            color: #8D8D8D;
             overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
          }
        }

        p {
          font-size: 13px;
          color: #666;
          line-height: 20px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .comment {
          height: 51px;
          background-color: #f0f5f4;
          padding: 10px;
          margin-bottom: 15px;
          p {
            font-size: 12px;
            color: #000;
            span {
              color: #00d3c2;
            }
          }
        }
        .like-reply {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          p {
            font-size: 11px;
            color: #999999;
          }
          img{
            width:67px;
            height: 24px;
            border-radius:0;
          }
        }
      }
    }
    .mint-button--large {
      background-color: #00d3c2;
      color: #fff;
    }
  }
  // 快速提问框
  .ask-popup{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0,0.4);
    .ask-popup-list{
      position: absolute;
      bottom: 0;
      width: 100%;

      background-color: #fff;
      .ask-popup-list-left{
      display: flex;
      justify-content: space-between;
      .ask-popup-list-item{
        width: 30%;
        height: 139px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
          a{
            img{
              height: 64px;
            }
            p{
              font-size: 12px;
              color: #666666;
              line-height: 30px;
            }
          }
      }
    }
    button{
      font-size: 15px;
      color: #555555;
    }
    }

  }
}
</style>
