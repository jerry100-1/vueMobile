<template>
  <div class="MicroClassInfo-container">
    <div class="MicroClassInfo-header">
      <!-- 头部 -->
      <mt-header title="课堂详情">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <div class="MicroClassInfo-header-list">
        <div class="list-top">
          <img src="./miImages/ic_good_class_micro_class_recycler_icon1.png" alt="">

          <!-- 遮罩层 -->
          <div class="list-top-speaker">
              <div class="list-top-speaker-play">
                  <img src="./miImages/brghmnui4.png" alt="">
              </div>
              <div class="list-top-speaker-info">
                  <img src="./miImages/brghmnui12.png" alt="">
                  <div class="list-top-speaker-info-right">
                      <h3>主讲人:&nbsp;<span>邓丽</span></h3>
                      <p>开讲时间:&nbsp;<span>2018-04-13&nbsp;10.23</span></p>
                  </div>
              </div>
          </div>
        </div>
        <div class="list-bottom">
          <div class="list-bottom-title">
            <h3>奶睡抱睡,落地醒,黑白颠倒,如何让睡渣宝宝安睡一整晚?</h3>
            <p>
              <img src="./miImages/ic_good_class_micro_class_bg.png" alt>
              &nbsp;&nbsp;
              
               
                 共<span>14</span>节课&nbsp;&nbsp;|&nbsp;&nbsp;<span>已完结</span>
              
            </p>
          </div>
          <div class="list-bottom-sales">
            <div class="list-bottom-sales-left">
             
              <p class="sales-right-bottom">
                <span class="sales-right-bottom-money">￥<span>78</span>.00</span>&nbsp;
                <s>
                  ￥
                  <span>108.00</span>
                </s>
              </p>
                
              </div>
            <div class="list-bottom-sales-right">
                <div>
                  <img src="./miImages/ic_micro_class_collect.png" alt="">
                </div>
                <div>
                  <img src="./miImages/ic_micro_class_share.png" alt="">
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 底部详情 -->
    <div class="MicroClassInfo-fotter">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">课程简介</mt-tab-item>
        <mt-tab-item id="2">课程列表</mt-tab-item>
        <mt-tab-item id="3">精选留言</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
          <!-- 课程详情 -->
        <mt-tab-container-item id="1" class="course-intro">
           <div>
                这里是课程详情这里是课程详情
           这里是课程详情这里是课程详情这里是课程
           详情这里是课程详情这里是课程详情这里是
           课程详情这里是课程详情这里是课程详情这里
           是课程详情这里是课程详情这里是课程详情这里
           是课程详情这里是课程详情这里是课程详情这里是课
           程详情
           </div>
        </mt-tab-container-item>
        <!-- 课堂列表 -->
        <mt-tab-container-item id="2" class="course-list">
            <div class="course-list-info">

                <div class="course-list-info-item">
                    <div class="course-list-info-left">
                        <img src="./miImages/ic_class_listen.png" alt="">
                        <p>56:32</p>
                     </div>
                   <h3>1.1这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</h3>
                </div>

                 <div class="course-list-info-item">
                    <div class="course-list-info-left">
                        <img src="./miImages/ic_class_listen.png" alt="">
                        <p>56:32</p>
                     </div>
                   <h3>1.1这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</h3>
                </div>

                 <div class="course-list-info-item">
                    <div class="course-list-info-left">
                        <img src="./miImages/ic_class_listen.png" alt="">
                        <p>56:32</p>
                     </div>
                   <h3>1.1这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题</h3>
                </div>


            </div>
        </mt-tab-container-item>
            <!-- 精选留言 -->
        <mt-tab-container-item id="3"  class="course-leaveMessage">
            <div class="course-leaveMessage-info">
                
                <div class="course-leaveMessage-info-item">
                    <img src="./miImages/brghmnui12.png" alt="">
                    <div class="leaveMessage-item-user">
                            <h3>王大锤</h3>
                            <p><span>21</span>分钟前</p>
                            <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,尝试给宝宝音乐催眠,效果喜人</p>
                            <!-- 评论 -->
                            <div class="comment">
                                <p><span>王小翠</span>&nbsp;回复&nbsp;<span>王小翠</span>:&nbsp;&nbsp;很好听很好听的音乐</p>
                                <p><span>王小翠</span><span></span>:&nbsp;&nbsp;什么样的音乐?</p>
                            </div>
                    </div>
                </div>

                <div class="course-leaveMessage-info-item">
                    <img src="./miImages/brghmnui12.png" alt="">
                    <div class="leaveMessage-item-user">
                            <h3>王大锤</h3>
                            <p><span>21</span>分钟前</p>
                            <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,尝试给宝宝音乐催眠,效果喜人</p>
                    </div>
                </div>

                <div class="course-leaveMessage-info-item">
                    <img src="./miImages/brghmnui12.png" alt="">
                    <div class="leaveMessage-item-user">
                            <h3>王大锤</h3>
                            <p><span>21</span>分钟前</p>
                            <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,尝试给宝宝音乐催眠,效果喜人</p>
                    </div>
                </div>


            </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

  </div>
</template>

<script>
export default {
    name:'MicroClassInfo',
    data () {
        return {
            selected:'1'
        }
    }
}
</script>



<style lang="less">
.MicroClassInfo-container {
  width: 100%;
  padding-bottom: 53px;
  .MicroClassInfo-header {
    .mint-header {
      background-color: #fff;
      color: #000;
    }

    .MicroClassInfo-header-list {
      background-color: #fff;
      .list-top {
          position: relative;
        img {
          width: 100%;
          display: block;
        }
        .list-top-speaker{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color:rgba(0, 0, 0, 0.5);
            .list-top-speaker-play{
                    width: 45px;
                    height: 45px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translate(-50%,-50%);   
                    -ms-transform: translate(-50%,-50%);   
                        transform: translate(-50%,-50%); 
                img{
                  width:100%;
                  display: block;
                }
            }
            .list-top-speaker-info{
              position: absolute;
              left: 15px;
              bottom: 10px;
              display: flex;
              align-items: center;
              img{
                width: 30px;
                height: 30px;
              }
              .list-top-speaker-info-right{
                text-align: left;
                margin-left: 5px;
                h3{
                  font-size: 15px;
                  color:#E6E6E6;
                }
                p{
                  font-size: 11px;
                  color:#EBEBEB;
                  line-height: 20px;
                }
              }
            }
        }
      }
      .list-bottom {
        padding: 16px;
        .list-bottom-title {
          h3 {
            font-size: 16px;
            color: #333;
            text-align: left;
            font-weight: 700;
            line-height: 20px;
          }
          p {
            font-size: 11px;
            text-align: left;
            margin: 11px 0;
            color: #666666;
            img {
              width: 42px;
              height: 15px;
              display: inline-block;
              vertical-align: middle;
            }

          }
        }
        .list-bottom-sales {
          display: flex;
          justify-content: space-between;
          .list-bottom-sales-left {
            font-size: 13px;
            color: #9b9bac;
           
            .sales-right-bottom {
              margin-top: 7px;
              font-size: 11px;
              color: #a9a9b9;
              .sales-right-bottom-money{
                font-size: 9px;
                color:#FF8135;
                span{
                  font-size: 18px;
                }
              }
            }
          }
          .list-bottom-sales-right {
            display: flex;
            div{
              width: 19px;
              height: 19px;
              margin: 0 12px;
              img{
                width: 100%;
                display: block;
              }
            }
            
          
          }
        }
      }
    }
  }
  .MicroClassInfo-fotter{
      margin-top: 11px;
      background-color: #fff;
      .mint-tab-container{
          .mint-tab-container-wrap{
              .course-intro{
                  text-align: left;
                  font-size: 13px;
                  color: #666;
                  line-height: 20px;
                 div{
                      padding: 20px;
                 }
              }
            .course-list{
                .course-list-info{
                    padding: 17px;
                    .course-list-info-item{
                        border-bottom: 1px solid #EDF3F5;
                        display: flex;
                        justify-content: space-between;
                        margin-top: 5px;
                        &:first-of-type{
                            margin-top: 0;
                        }
                        .course-list-info-left{
                        img{
                            width: 30px;
                            height: 30px;
                        }
                        p{
                            font-size: 9px;
                            color:#00D3C2;
                        }
                        }
                        h3{
                            text-align: justify;
                            line-height: 18px;
                            font-size: 13px;
                            padding: 5px;
                            margin-left: 16px;
                        }
                    }
                }
            }
            .course-leaveMessage{
                .course-leaveMessage-info{
                    padding: 16px;
                    .course-leaveMessage-info-item{
                        display: flex;
                        margin-top: 17px;
                        &:first-of-type{
                            margin-top: 0;
                        }
                        img{
                            width: 30px;
                            height: 30px;
                        }
                        .leaveMessage-item-user{
                            text-align: left;
                            margin-left: 10px;
                            border-bottom: 1px solid #ccc;
                            &:last-of-type{
                              border-bottom:none;
                            }
                            h3{
                                font-size: 14px;
                                color: #333333;
                            }
                            p:first-of-type{
                                font-size: 11px;
                                color:#AFAFAF;
                                line-height: 18px;
                            }
                            p:last-of-type{
                                font-size: 13px;
                                color:#666;
                                line-height: 20px;
                                margin-top: 5px;
                                margin-bottom: 5px;
                            }
                            .comment{
                                height: 51px;
                                background-color: #F0F5F4;
                                padding: 10px;
                                margin-bottom: 15px;
                                p{
                                    font-size: 12px;
                                    color: #000;
                                    span{
                                        color: #00D3C2;
                                    }
                                }
                            }
                        }
                    }
                }
            }
          }
      }
      .mint-navbar{
         .is-selected{
          border-bottom: 2px solid #00D3C2;
          color: #00D3C2;
        }
      }
  }
}
</style>