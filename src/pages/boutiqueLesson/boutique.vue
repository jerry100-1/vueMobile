<template>
  <div class="boutiqueContainer">
      <!-- header头部 -->
        <div class="header">
          <!-- 头部 -->
          <mt-header title="精品课堂" fixed>
            <router-link to="/" slot="left">
              <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
          </mt-header>
          <!-- 搜索框 -->
          <mt-search v-model="searchContent" cancel-text placeholder="输入关键字进行搜索"></mt-search>

          <!-- 精品推荐 -->
          <div class="recommend">
            <div class="recommend-left">
              <h2>精选推荐</h2>
              <img src="./boimages/ic_good_class_tag_jingxuan.png" alt>
            </div>
            <img src="./boimages/ic_listen.png" alt>
          </div>

          <!-- 轮播图 -->
          <div class="swipe">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="(item,i) in photoList" :key="i">
                <a href="#">
                  <img :src="item.imgurl" alt>
                </a>
              </mt-swipe-item>
            </mt-swipe>
          </div>

          <!-- nav -->
          <div class="boutique-nav">
            <router-link tag="div" to="/boutiqueVaccine/?id=1" class="boutique-nav-item">
              <img src="./boimages/ic_good_class_recycler1_icon1.png" alt>
              <p>疫苗</p>
            </router-link>

            <router-link tag="div" to="/boutiqueVaccine/?id=2" class="boutique-nav-item">
              <img src="./boimages/ic_good_class_recycler1_icon2.png" alt>
              <p>育儿</p>
            </router-link>

            <router-link tag="div" to="/boutiqueVaccine/?id=3" class="boutique-nav-item">
              <img src="./boimages/ic_good_class_recycler1_icon3.png" alt>
              <p>微课堂</p>
            </router-link>

            <router-link tag="div" to="/boutiqueVaccine/?id=4" class="boutique-nav-item">
              <img src="./boimages/ic_good_class_recycler1_icon4.png" alt>
              <p>活动</p>
            </router-link>

            <router-link tag="div" to="/boutiqueVaccine/?id=5" class="boutique-nav-item">
              <img src="./boimages/ic_good_class_recycler1_icon5.png" alt>
              <p>专题</p>
            </router-link>

          </div>

          <div class="boutique-ad">
            <div class="boutique-ad-item">
              <a href="#">
                <img src="./boimages/ic_good_class_go1.png" alt>
              </a>
            </div>
            <div class="boutique-ad-item">
              <a href="#">
                <img src="./boimages/ic_good_class_go2.png" alt>
              </a>
            </div>
          </div>
        </div>

        <!-- main主体 -->
        <div class="main">
                <!-- 妈妈必修课 -->
            <div class="mom">
                <div class="mom-top">
                    <div class="mom-top-left">
                        <img src="./boimages/ic_good_class_tab.png" alt="">
                        <h3>妈咪必修课</h3>
                    </div>
                    <router-link tag="div" to="/boutiqueVaccine/?id=3" class="mom-top-right">
                            <p>查看更多</p>
                            <img src="./boimages/gegtty12.png" alt="">
                    </router-link>
                </div>
                <router-link tag="div" to="MicroClassInfo" class="mom-item">
                    <div class="mom-item-left">
                        <div class="mom-item-left-title">
                            <img src="./boimages/ic_jing_bg.png" alt="">
                            <a>掌握主动权:妈咪最需要的人生成长课</a>
                        </div>
                        <h3>周警训&nbsp;武汉市妇幼保健院长</h3>
                    <div class="mom-item-left-bottom">
                        <p class="mom-item-left-bottom-money"><span>0</span>&nbsp;元</p>
                        <p class="mom-item-left-bottom-study"><span>38398</span>人已学习</p>
                    </div>
                    </div>
                    <div class="mom-item-right">
                        <a href="#">
                            <img src="./boimages/ic_good_class_recycler_2.png" alt="">
                        </a>
                        <div class="mom-item-right-video">
                            <p>图文+视频</p>
                        </div>
                    </div>
                </router-link>


                <div class="mom-item">
                    <div class="mom-item-left">
                        <div class="mom-item-left-title">
                            <img src="./boimages/ic_jing_bg.png" alt="">
                            <a>掌握主动权:妈咪最需要的人生成长课</a>
                        </div>
                        <h3>周警训&nbsp;武汉市妇幼保健院长</h3>
                    <div class="mom-item-left-bottom">
                        <p class="mom-item-left-bottom-money"><span>0</span>&nbsp;元</p>
                        <p class="mom-item-left-bottom-study"><span>38398</span>人已学习</p>
                    </div>
                    </div>
                    <div class="mom-item-right">
                        <a href="#">
                            <img src="./boimages/ic_good_class_recycler_2.png" alt="">
                        </a>
                        <div class="mom-item-right-video">
                            <p>图文+视频</p>
                        </div>
                    </div>
                </div>
                <div class="mom-item">
                    <div class="mom-item-left">
                        <div class="mom-item-left-title">
                            <img src="./boimages/ic_jing_bg.png" alt="">
                            <a>掌握主动权:妈咪最需要的人生成长课</a>
                        </div>
                        <h3>周警训&nbsp;武汉市妇幼保健院长</h3>
                    <div class="mom-item-left-bottom">
                        <p class="mom-item-left-bottom-money"><span>0</span>&nbsp;元</p>
                        <p class="mom-item-left-bottom-study"><span>38398</span>人已学习</p>
                    </div>
                    </div>
                    <div class="mom-item-right">
                        <a href="#">
                            <img src="./boimages/ic_good_class_recycler_2.png" alt="">
                        </a>
                        <div class="mom-item-right-video">
                            <p>图文+视频</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

           <!-- 热门活动 -->
        <div class="active">
               <!-- 热门头部 -->
               <div class="hot-activity">
                <div class="hot-activity-top">
                    <div class="hot-activity-top-left">
                        <img src="./boimages/ic_good_class_tab.png" alt="">
                        <h3>热门活动</h3>
                    </div>
                    <router-link tag="div" to="/boutiqueVaccine/?id=4" class="hot-activity-top-right">
                            <p>查看更多</p>
                            <img src="./boimages/gegtty12.png" alt="">
                    </router-link>
                </div>
                <!-- 广告部分 -->

              <div class="person-wrap" ref="personWrap">

                <div class="person-list hot-activity-ad" ref="personTab">
                    <div class="hot-activity-item">
                         <img src="./boimages/ic_good_class_recycler3.png" alt="">
                         <p>洁牙检查矫正0元起</p>
                    </div>
                    <div class="hot-activity-item">
                         <img src="./boimages/ic_good_class_recycler3.png" alt="">
                         <p>洁牙检查矫正0元起</p>
                    </div>
                    <div class="hot-activity-item">
                         <img src="./boimages/ic_good_class_recycler3.png" alt="">
                         <p>洁牙检查矫正0元起</p>
                    </div>

             </div>
            </div>

            </div>
          </div>


        <!-- access部分 -->
        <div class="fast-access">
        <div class="speed">
            <div class="speed-top">
                <div class="speed-top-left">
                    <img src="./boimages/ic_good_class_tab.png" alt="">
                    <h3>快速通道</h3>
                </div>
            </div>

            <div class="speed-fotter">
                <mt-button type="primary" plain>精选课程</mt-button>
                <mt-button type="primary" plain>热门活动</mt-button>
                <mt-button type="primary" plain>免费疫苗</mt-button>
                <mt-button type="primary" plain>宝宝体检</mt-button>
                <mt-button type="primary" plain>医师文珍</mt-button>
                <mt-button type="primary" plain>牙齿矫正</mt-button>
                <mt-button type="primary" plain>健康知识</mt-button>
                <mt-button type="primary" plain>育儿交流</mt-button>
            </div>

        </div>
    </div>

        <Tabbar></Tabbar>

    </div>
</template>


<script>
//引入better-scroll
import BScroll from "better-scroll";
import Tabbar from '@/components/Tabbar'
export default {
  name: "boutique",
  data() {
    return {
      searchContent: "",
      //轮播图
      photoList:[]
    };
  },
  created() {
    //横向滚动
    this.$nextTick(() => {
      this.personScroll();
    });
    this.getphoto();
  },
   methods: {

     //横向滚动
    personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      let width = 3 * 130;
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
    getphoto(){
      this.axios.get('/index/Lunboimgs/getlist',{
        params:{
          type:2
        }
      }).then(response=>{
        if(response.status == "1"){
           this.photoList=response.result.list
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
.mint-searchbar-inner .mintui-search {
  font-size: 16px;
  color: #d9d9d9;
}
.boutiqueContainer {
  background-color: #f4f4f4;
  padding-top: 40px;
  width: 100%;
  .header {
    background-color: #fff;
    padding-bottom: 5px;
    .mint-header {
      background-color: #fcfcfc;
      color: #000;
      border-bottom: 1px solid #eee;
      z-index: 99;
      font-size: 18px;
      .mint-header-button{
        a{
          button{
            // font-weight: 700;
          }
        }
      }
      .mint-header-title{
        // font-weight: 700;
      }
    }
    .mint-search {
      height: 100%;
    }
    .mint-searchbar {
      background-color: #fff;
      .mint-searchbar-inner {
        border: none;
        position: relative;
        top: 0;
        .mintui {
          position: absolute;
          left: 50%;
          top: 31%;
          transform: translateX(-550%);
        }

        input {
          background-color: #eee;
          border-radius: 15px;
          text-align: center;
          padding-left: 10px;
        }
      }
      .mint-searchbar-cancel {
        display: none;
      }
    }
    .recommend {
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      & > img {
        height: 18px;
        margin-top: 10px;
      }
      .recommend-left {
        h2 {
          color: #000;
          font-weight: 700;
          padding: 5px 0;
        }
        img {
          height: 4px;
        }
      }
    }
    .swipe {
      padding: 0 15px;
      position: relative;
      margin-bottom: 10px;
      .mint-swipe {
        width: 100%;
        height: 153px;
        // display: block;
        .mint-swipe-items-wrap {
          .mint-swipe-item {
            a {
              width: 100%;
              height: 100%;
              display: block;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .mint-swipe-indicators{
          .mint-swipe-indicator{

          }
        }
        .mint-swipe-indicators .is-active{
          background-color: #fff;
        }
      }
    }
    .boutique-nav {
      margin-top: 20px;
      display: flex;
      .boutique-nav-item {
        width: 18%;
        margin: 0 10px;
        img {
          width: 100%;
        }
        p {
          font-size: 13px;
          margin: 10px 0;
        }
      }
    }
    .boutique-ad {
      display: flex;
      justify-content: space-around;
      padding: 0 5px;
      .boutique-ad-item {
        width: 49%;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
 .main{
        background-color: #fff;
        margin-top: 11px;
    .mom {
      padding: 15px;
      .mom-top{
          display: flex;
          justify-content: space-between;
          .mom-top-left{
              display: flex;
              justify-content: space-between;
              align-items:center;
              img{
                  height: 17px;
                  margin-right:5px;
              }
              h3{
                  font-size:16px;
                  font-weight: 700;
              }
          }
          .mom-top-right{
              display: flex;
              justify-content: space-between;
              align-items:center;
              p{
                  font-size: 14px;
                  color: #999;
              }
              img{
                  height: 12px;
              }
          }
      }

    .mom-item{
          padding: 22px 0;
          border-bottom: 1px solid #eee;
          display: flex;
          .mom-item-left{
            width: 100%;
              h3{
                  color: #aaa;
                  margin-top: 5px;
                  text-align: left;
                  font-size: 15px;
              }
              .mom-item-left-title{
                  padding-top: 5px;
                  text-align: left;
                img{
                    width: 15px;
                    vertical-align: super;
                }
                a{
                    font-size: 15px;
                    font-weight:700;
                    vertical-align: top;
                    color:#121212;
                }
              }
              .mom-item-left-bottom{
                  display: flex;
                  justify-content: space-between;
                  margin-top: 15px;
                  .mom-item-left-bottom-money{
                      color: #EA5650;
                      font-size:10px;
                      span{
                        font-size: 15px;
                      }
                  }
                  .mom-item-left-bottom-study{
                      font-size: 12px;
                      color:#949494;
                  }
              }
          }
          .mom-item-right{
              position: relative;
              .mom-item-right-video{
                  position: absolute;
                  bottom:10px;
                  right: 15px;
                  height: 14px;

                  p{
                    text-align: center;
                    background-color: #FFF;
                    border-radius: 3px;
                    font-size: 9px;
                    padding:0 5px;
                    line-height: 20px;
                  };
              }
              a{
                  display: block;
                  margin: 0 10px;
                  // width: 100%;
                  height: 100%;
                  img{
                      width: 100%;
                      height: 100%;
                      display: block;
                  }
              }
          }
      }
       .mom-item:last-child{
          border-bottom: none;
      }
    }
}
.active{
    background-color: #fff;
    margin-top: 11px;
    overflow: hidden;
    .hot-activity{
        padding: 15px;
        .hot-activity-top{
         display: flex;
          justify-content: space-between;
          .hot-activity-top-left{
              display: flex;
              justify-content: space-between;
              align-items:center;
              img{
                  width: 5px;
                  height: 17px;
                  margin-right:5px;
              }
              h3{
                  font-size:16px;
                  font-weight: 700;
              }
          }
          .hot-activity-top-right{
              display: flex;
              justify-content: space-between;
              align-items:center;
              p{
                  font-size: 14px;
                  color: #999;
              }
              img{
                  width: 8px;
                  height: 12px;
              }
          }
    }
    .hot-activity-ad{
        margin-top: 20px;
        display: flex;
        .hot-activity-item{
            margin:0 6px;
            img{
            width: 120px;
            height: 90px;
        }
        p{
            padding:5px;
            font-size: 12px;
            margin-top: 3px;
            color:#959595;
        }
        }

    }

    }
}

.fast-access{
    background-color: #fff;
    margin-top: 11px;
    margin-bottom: 58px;
     .speed{
        padding: 15px;
        .speed-top{
         display: flex;
          justify-content: space-between;
          .speed-top-left{
              display: flex;
              justify-content: space-between;
              align-items:center;
              img{
                  width: 5px;
                  height: 17px;
                  margin-right:5px;
              }
              h3{
                  font-size:16px;
                  font-weight: 700;
              }
          }
    }
    .speed-fotter{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .mint-button--normal{
          padding: 0;
        }
        button{
            width: 24%;
            margin-top:12px;
            border-radius: 20px;
            color: #3DC3B4;
            font-size: 14px;
            border: 1px solid #3DC3B4;
        }
    }
}
}
}

</style>
