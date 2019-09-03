// 问医生
<template>
  <div class="askDoctor-container">
   
    <div class="askDoctor-header"  :style="{backgroundImage: 'url(' + introduce.avatar + ')', backgroundSize:'contain'}"> 
    <!-- 头部 -->
      <mt-header title="问医生">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
     
     <!-- 医生信息 -->
     <div class="doctor-info">
         <div class="doctor-info-message">
             <div class="message-name">
                 <div class="message-name-button">
                     <h3>{{introduce.name}}</h3>
                     <mt-button size="small" plain>接种咨询</mt-button>
                 </div>
                 <h4>{{introduce.cidText}}</h4>
                 <div class="message-name-time">
                     <img src="./askdoctorImgs/ic_ask_doctor_time.png" alt="">
                     <span>{{introduce.worktime}}</span>
                 </div>
             </div>
             <img :src="introduce.avatar" class="messageimg" alt="">
         </div>

        <!-- 展开和收起 -->
         <div class="doctor-info-introduce">



            <p id="showAll" :class="{ellpes:!showAll}">{{introduce.introduce}}
                <a @click="fun_showAll" href="#"> {{showAll?"收起":"展开"}} 
                  <img src="./askdoctorImgs/btyrhn4.png">
                </a>
              </p>	


             
            
        
        
         

        </div>



     </div>

    </div>

    <div class="user-issue">
        <div class="user-issue-info-item">
          <div class="user-issue-info-item-top"> 
            <img src="./askdoctorImgs/ic_ask_doctor_avatar.png" alt>
            <div class="user-issue-item-user">
              <div class="user-issue-item-user-left">
                <div>
                  <h3>TING</h3>
                </div>
              <p>01-11 09:30</p>
            </div>

            <p>你好，该打预防针了，飒飒飒飒,这两天就是早上有点鼻子不透气的感觉,偶尔咳两声,咳咳,白天都好好的，可以打预防针吗？</p>

            <!-- 用户评论图片 -->
            <div class="user-issue-user-img">
                <div>
                    <img src="./askdoctorImgs/缺省图.png" alt="">
                </div>
                <div>
                    <img src="./askdoctorImgs/缺省图.png" alt="">
                </div>
            </div>

            <!-- 点赞和留言 -->
            <div class="like-reply">
                <div @click="praise=!praise">
                    <img v-show="praise" src="./askdoctorImgs/ic_ask_doctor_zan_select.png" alt="">
                    <img v-show="!praise" src="./askdoctorImgs/ic_ask_doctor_zan_normal.png" alt="">
              </div>
                <div>
                    <img src="./askdoctorImgs/ic_ask_doctor_comment.png" alt>
                </div>
            </div>
          </div>
            
          </div>
           <!-- 评论 -->
            <div class="comment">
                <!-- <p>
                <span>王小翠</span>&nbsp;回复&nbsp;
                <span>王小翠</span>:&nbsp;&nbsp;很好听很好听的音乐
                </p> -->
                <p>
                <span>马冬梅</span>
                <span></span>:&nbsp;&nbsp;宝宝轻微感冒流鼻涕是可以接种疫苗的
                </p>
            </div>
        </div>
    </div>

    <!-- 提问按钮 -->
    <div class="footer-button">
        <mt-button size="large">提问</mt-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "askDoctor",
  data() {
    return {
      //医生id
        doctorId:'',
      // 展开收起
        showAll:true,
  
        // 点赞
        praise:false,
        
        //医生详情介绍
        introduce:{}


    }
  },
  created() {
    //获取专家详情
    this.doctorId=this.$route.params.id
    // 医生详情
    this.doctorInfo()

  },
  methods:{
      fun_showAll(){

        this.showAll=!this.showAll;

      },
      //医生详情
      doctorInfo(){
        this.axios.get('/index/expert/read',{
        params:{
          id:this.doctorId,
          token:this.$store.state.token
        }}).then(response=>{
         if(response.status == "1"){
           this.introduce=response.result.info
         }
        })
      }

  }
};
</script>

<style lang="less">
.askDoctor-container {
    padding-bottom: 53px;
    background-color: #fff;
    width: 100%;
  .askDoctor-header {
      background-image: url('./askdoctorImgs/ic_ask_doctor_bg.png');
      background-position: 85% 20%;
      background-repeat: no-repeat;
      box-sizing:border-box;
      .mint-header{
          background-color: rgba(103 ,116,137,0.97);
      }
      .doctor-info{
           background-color: rgba(103 ,116,137,0.97);
           padding: 13px;
           .doctor-info-message{
               display: flex;
               justify-content: space-between;
               .message-name{
                   .message-name-button{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin: 8px 0;
                        h3{
                            font-size: 23px;
                            color: #fff;
                            margin-right: 14px;
                        }
                        button{
                            color: #00D3C2;
                            border: 1px solid #00D3C2;
                            height: 22px;
                            font-size: 12px;
                            margin-top: 5px;
                        }
                   }
                   h4{
                       font-size: 15px;
                       color: #fff;
                       text-align: left;
                       line-height: 40px;
                   }
                   .message-name-time{
                       img{
                           height: 15px;
                            vertical-align:middle;
                       }
                       span{
                           font-size: 13px;
                           color: #C8C8C8;
                       }
                   }
               }
               .messageimg{
                   height: 90px;
                   width:90px;
                   border-radius:50%;
               }
           }
          //  展开
           .doctor-info-introduce{
               margin: 20px 0;
               p{
                  color: #FFFFFF;
                  font-size: 14px;
                  text-align:left;
                  a{
                    color:#F3B63F;
                    img{
                      height: 12px;
                       vertical-align: middle;
                    }
                  }
               }
               .ellpes{	 
                    text-overflow:ellipsis;		
                    overflow:hidden;		
                    display:-webkit-box;		
                    -webkit-line-clamp:3; /*这个数字是设置要显示省略号的行数*/		
                    -webkit-box-orient:vertical;
                  }


          


           }
      }
  }
  .user-issue{
      padding: 26px 16px 16px 16px;
      background-color: #fff;
    .user-issue-info-item {
      margin-top: 17px;
      border-bottom: 1px solid #E8E8E8;
      &:first-of-type {
        margin-top: 0;
      }
    .user-issue-info-item-top{
      display: flex;
      justify-content: space-between;
      img {
        height: 70px;
      }
      .user-issue-item-user {
        text-align: left;
        margin-left: 10px;
        width: 100%;
        .user-issue-item-user-left {
          display: flex;
          justify-content: space-between;
          div {
            h3 {
              font-size: 14px;
              color: #333333;
            }
          }
          p {
            font-size: 10px;
            color: #999999;
          }
        }
        .user-issue-user-img{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            div{
                width: 30%;
                padding-right: 6px;
                margin: 5px 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }

        p {
          font-size: 13px;
          color: #666666;
          line-height: 20px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .like-reply {
          display: flex;
          justify-content: flex-end;
          margin: 5px 0;
          div {
             width: 17px;
             height: 16px;
             &:last-of-type{
               margin-top: 2px;
               margin-left: 20px;
             }
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
      }
      .comment {
          background-color: #f0f5f4;
          padding: 10px;
          margin-bottom: 15px;
          margin-top: 10px;
          p {
            font-size: 12px;
            color: #000;
            span {
              color: #00d3c2;
            }
          }
        }
        .comment:before{
            content:" ";
            display:block;
            width:0;
            height:0;
            border-width:0 5px 5px;
            border-style:solid;
            border-color:transparent transparent #ECF3F8;
            position: absolute;
            margin-top:-15px
        }
    }
  }
  .footer-button{
      width: 100%;
      padding: 0 16px;
      button{
      width: 90%;
      background-color: #00D3C2;
      color: #fff;
  }
  }
}
</style>