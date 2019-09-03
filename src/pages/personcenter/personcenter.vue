<template>
  <div class="personcenter-container">
      <div class="personcenter-header">

       <!-- title -->
      　　<mt-header title="我的">
          <router-link to="/" slot="left">
            <mt-button>
                <img src="./personImages/ic_personal_msg.png" alt="">
            </mt-button>
          </router-link>
          <mt-button slot="right">
              <img src="./personImages/ic_perosnal_setting.png" alt="">
          </mt-button>
        </mt-header>

          <div class="personcenter-header-user">
              <img src="./personImages/ic_personal_appointment_record.png" alt="">
              <div class="personcenter-header-user-info">
                  <h3>189****3636</h3>
                  <p>账号ID：19sOE</p>
              </div>
          </div>

          <div class="personcenter-header-nav">
              <a href="#">
                  <img src="./personImages/ic_personal_baby.png" alt="">
                  <p>我的宝宝</p>
              </a>
              <a href="#">
                  <img src="./personImages/ic_personal_appointment_record.png" alt="">
                  <p>预约记录</p>
              </a>
              <a href="#">
                  <img src="./personImages/ic_personal_my_order.png" alt="">
                  <p>我的订单</p>
              </a>
              <a href="#">
                  <img src="./personImages/ic_personal_my_collect.png" alt="">
                  <p>我的收藏</p>
              </a>
          </div>

          <!-- 客服中心 -->
          <div class="personcenter-service">
              <img src="./personImages/ic_personal_server.png" alt="">
          </div>

      </div>


      <div class="personcenter-info">
            <!-- 微课堂 -->
              <div class="personcenter-advertising">
                  |<p>专家一次帮你解决宝宝语言发育难题</p>
                  <img src="./personImages/ic_arrow_right_gray.png" alt="">
              </div>

              <!-- 轮播图 -->
              <mt-swipe :auto="0">
                  <mt-swipe-item>
                      <a href="#">
                          <img src="./personImages/ic_perosnal_banner1.png" alt="">
                      </a>
                  </mt-swipe-item>
                  <mt-swipe-item>
                      <a href="#">
                          <img src="./personImages/ic_perosnal_banner1.png" alt="">
                      </a>
                  </mt-swipe-item>
                  <mt-swipe-item>
                      <a href="#">
                          <img src="./personImages/ic_perosnal_banner1.png" alt="">
                      </a>
                  </mt-swipe-item>
              </mt-swipe>
      </div>

      <!-- 底部疫苗规划 -->

      <div class="personcenter-fotter">
        <div class="personcenter-fotter-font">
            <p>宝宝<span>健康</span>&nbsp;妈妈<span>放心</span></p>
            <h4>最全最新的疫苗接种规划</h4>
        </div>
        <img src="./personImages/ic_personal_bg3.png" alt="">
    </div>

      <Tabbar></Tabbar>
　　　　　　 　　



  </div>
</template>

<script>
  import Tabbar from '@/components/Tabbar'
  export default {
    name: "personcenter",
    components:{
      Tabbar
    }
  };
</script>

<style lang="less">
    .personcenter-container{
        padding-bottom: 53px;
        width: 100%;
        .personcenter-header{
             position: relative;
             padding: 0 12px;
             background-image: url('./personImages/ic_personal_bg1.png');
            //  background-position: 85% 20%;
             background-repeat: no-repeat;
             box-sizing:border-box;
             background-size:100% 100%;
            .mint-header{
                 background-color: rgba(0 ,0,0,0);
                 font-size: 17px;
               img{
                   height: 18px;
               }
            }
            .personcenter-header-user{
                background-color: rgba(0 ,0,0,0);
                display: flex;
                margin: 18px 0;
                img{
                    height: 64px;
                }
                .personcenter-header-user-info{
                    margin-top: 20px;
                    margin-left: 12px;
                    color:#fff;
                    h3{
                        font-size: 18px;
                    }
                    p{
                        font-size: 12px;
                        line-height: 30px;
                    }
                }
            }
            .personcenter-header-nav{
                height: 88px;
                background-color: #fff;
                border-radius: 5px;
                display: flex;
                justify-content: space-around;
                a{
                    display: block;
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 30px;
                        height: 28px;
                    }
                    p{
                        font-size: 12px;
                        color: #555555;
                        line-height: 30px;
                    }
                }
            }
            .personcenter-service{
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-100%);
                img{
                    height: 26px;
                }
            }
        }
        .personcenter-info{
            padding: 0 12px;
        .personcenter-advertising{
            height: 53px;
             background-image: url('./personImages/ic_personal_bg2.png');
             background-repeat: no-repeat;
             background-size:100% 100%;
             line-height: 53px;
             color: #A6BADA;
             margin-top: 15px;
             display: flex;
             justify-content: space-around;
             align-items: center;
             padding-left: 70px;
             margin-bottom: 17px;
             p{
                 color: #666666;
                 font-size: 12px;
             }
             img{
                 height: 11px;
             }
        }
        .mint-swipe{
            width: 100%;
            height: 117px;
                 img{
                     width: 100%;
                     height: 100%;
                    display: block;
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
     .personcenter-fotter{
         background-color: #fff;
         padding: 13px 0;
         margin-top: 15px;
         display: flex;
         justify-content: space-around;
           .personcenter-fotter-font{
               margin-top: 15px;
               p{
                   font-size: 20px;
                   color: #333333;
                   font-weight: 700;
                   span{
                       color:#60D0C2;
                   }
               }
               h4{
                   font-size: 14px;
                   color:#555555;
                   line-height: 40px;
                   text-align: left;
               }
           }
           img{
               height: 90px;
           }
        }
    }
</style>
