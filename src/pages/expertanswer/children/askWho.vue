<template>
  <div class="askWho-container">
    <!-- 为谁提问头部 -->
    <mt-header title="为谁提问">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 选择宝宝 -->
    <div class="askWho-select">
        <div class="askWho-select-item">
          <div class="askWho-select-item-img">
              <img src="./askOneImages/默认头像.png" alt="">
              <div class="askWho-select-item-info">
                <h4>可乐</h4>
                <p>3岁2个月11天</p>
              </div>
          </div>
            
          <div class="askWho-select-checkbox" @click="checkbox=!checkbox"> 
              <img src="./askOneImages/icon_check_box_select.png" alt="" v-show="checkbox">
          </div>
       </div>
    </div>

    <div class="askWho-select">
        <div class="askWho-select-item">
          <div class="askWho-select-item-img">
              <img src="./askOneImages/默认头像.png" alt="">
              <div class="askWho-select-item-info">
                <h4>可乐</h4>
                <p>3岁2个月11天</p>
              </div>
          </div>
            
          <div class="askWho-select-checkbox" @click="checkbox=!checkbox"> 
              <img src="./askOneImages/icon_check_box_select.png" alt="" v-show="checkbox">
          </div>
       </div>
    </div>

    <p>没有更多了</p>

  </div>
</template>

<script>
export default {
  name: "askWho",
  data() {
      return {
         checkbox:true,
      }
  },
  created(){

  }
};
</script>

<style lang="less">
.askWho-container {
  .mint-header {
    background-color: #fcfcfc;
    color: #040000;
    font-size: 17px;
  }
  .askWho-select{
    padding: 0 12px;
    background-color: #fff;
    .askWho-select-item{
        display: flex;
        justify-content: space-between;
        align-items:center;
        height: 77px;
        width: 100%;
        border-bottom: 1px solid #E8E8E8;
        .askWho-select-checkbox{
          width: 21px;
          height: 21px;
          background-image: url('./askOneImages/icon_check_box_normal.png');
          background-size: 100% 100%;
          img{
            width: 100%;
          }
        }
        .askWho-select-item-img{
          display: flex;
          justify-content: flex-start;
          align-items:center;
          img{
            height: 40px;
          }
          .askWho-select-item-info{
            margin-left: 18px;
            text-align: left;
            h4{
              font-size: 15px;
              color:#333333;
            }
            p{
              font-size: 13px;
              color: #666666;
            }
          }
        }
    }
  }
  p{
    font-size: 12px;
    color:#BFC7CE;
    line-height: 30px;
  }
}
</style>