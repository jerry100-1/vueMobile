<template>
  <div class="personalData-container">
    <mt-header title="个人资料">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="personalData-user">

        <div class="personalData-user-item-img">
            <p>头像</p>
            <div class="personalData-user-item-img-right">
                <img src="./dataImages/ic_personal_baby.png" alt="">
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>账号ID</p>
            <div class="personalData-user-item-info-right">
                <p>19sOE</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>姓名</p>
            <div class="personalData-user-item-info-right">
                <p>张三</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>性别</p>
            <div class="personalData-user-item-info-right">
                <p>男</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>身份证号</p>
            <div class="personalData-user-item-info-right">
                <p>421***********242X</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>账号ID</p>
            <div class="personalData-user-item-info-right">
                <p>19sOE</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>出生年月</p>
            <div class="personalData-user-item-info-right">
                <p>1994-11-16</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>

        <div class="personalData-user-item-info">
            <p>接种单位</p>
            <div class="personalData-user-item-info-right">
                <p>蔡甸卫生院</p>
                <img src="./dataImages/ic_arrow_right_gray.png" alt="">
            </div>
        </div>
        

    </div>
        
  </div>
</template>

<script>
export default {
  name: "personalData"
};
</script>

<style lang="less">
.personalData-container {
  .mint-header {
    background-color: #fcfcfc;
    color: #000000;
    font-size: 17px;
    border-bottom: 1px solid #eeeeee;
  }
  .personalData-user{
      padding:0 12px;
      background-color: #fff;
      .personalData-user-item-img{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #E8E8E8;
          p{
              font-size: 15px;
              color: #333333;
          }
          .personalData-user-item-img-right{
              display: flex;
              align-items: center;
              img:first-of-type{
                  width: 35px;
                  height: 35px;
              }
              img:last-of-type{
                  height: 10px;
                  margin-left: 5px;
              }
          }
      }

      .personalData-user-item-info{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #E8E8E8;
          p{
              font-size: 15px;
              color: #333333;
          }
          .personalData-user-item-info-right{
              display: flex;
              align-items: center;
              p{
                 font-size: 12px;
                 color: #8C9194;
              }
              img{
                  height: 10px;
                  margin-left: 5px;
              }
          }
          &:last-of-type{
              border-bottom: none;
          }
      }

  }
}
</style>