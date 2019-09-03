<template>
  <div class="askParticulars-container">

    <mt-header title="提问详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

  <!-- 用户提问 -->
  <div class="user-question">

      <div class="user-question-info-item">
        <img src="./askdoctorImgs/ic_ask_doctor_avatar.png" alt>
        <div class="user-question-item-user">
          <div class="user-question-item-user-left">
         
              <h3>王大锤</h3>
              
            
            <p>01-11 14:12</p>
          </div>
          <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,乐催眠,效果喜人</p>

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

  </div>

  <!-- 医生回答 -->
  <div class="doctor-answer">
      <h5>评论</h5>
      <div class="user-question-info-item">
        <img src="./askdoctorImgs/ic_ask_doctor_avatar.png" alt>
        <div class="user-question-item-user">
          <div class="user-question-item-user-left">
           
              <h3>王大锤</h3>
              
            
              <p>01-11 14:12</p>
          </div>
          <p>宝宝轻微感冒流鼻涕是可以接种疫苗的,宝宝轻微感冒流鼻涕是可以接种疫苗的</p>


        </div>
      </div>
  </div>


  <p>没有更多了</p>

  <div class="fotter-comment">
      <img src="./askdoctorImgs/brghmnui12.png" alt="">
      <input type="text" placeholder="添加一条评论">
      <mt-button size="small">发送</mt-button>
  </div>

  </div>
</template>

<script>
export default {
    name:'askParticulars',
    data () {
      return {
        // 点赞
        praise:true
      }
    }
}
</script>

<style lang="less">
.askParticulars-container{
  // 头部
  .mint-header{
    background-color: #FCFCFC;
    color: #000;
    border-bottom: 1px solid #eee;
  } 
  //用户提问
  .user-question,.doctor-answer{
    background: #fff;
    .user-question-info-item {
      display: flex;
      margin-top: 17px;
      &:first-of-type {
        margin-top: 0;
      }
      img {
        // width: 30px;
        height: 30px;
        margin-top: 5px;
      }
      .user-question-item-user {
        text-align: left;
        margin-left: 10px;
        width: 100%;
        .user-question-item-user-left {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          width: 100%;
            h3 {
              font-size: 14px;
              color: #333333;
              align-items:center;
            }
          
          p {
            font-size: 10px;
            color: #999999;
            line-height: 14px;
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
          justify-content: flex-end;
          margin: 5px 0;
          div {
             width: 19px;
             height: 19px;
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

    }
    .doctor-answer{
      margin-top: 7px;
      h5{
        font-size: 15px;
        color:#333333;
        text-align: left;
        line-height: 30px;
      }
    }
    p{
      font-size: 12px;
      line-height: 40px;
      color: #BFC7CE;
    }
    .fotter-comment{
      background-color: #fff;
      width: 100%;
      height: 64px;
      position: absolute;
      bottom: 0;
      // line-height: 64px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img{
        height: 31px;
      }
      input{
        height: 40px;
        width: 64%;
        padding-left: 11px;
        background-color: #E8EFF6;
        font-size: 14px;
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        &::-webkit-input-placeholder{
          color: #BFCAD8;
          font-size: 14px;
        }
      }
      button{
        background-color: #00D3C2;
        color: #fff;
      }
      .mint-button .mint-button--default .mint-button--small::after{
        background-color: none;
      }
    }
}
.user-question{
  padding: 13px;
}
.doctor-answer{
  padding: 0 13px 13px 13px;
}

</style>