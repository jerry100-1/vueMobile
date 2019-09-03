<template>
  <div class="wrapReSuccess">
    <div class="partReS1">
      <div  class="partReS1-1">
        <img src="@/pages/loginAndRegister/loimages/leftRow.png" alt="">
      </div>
      <div class="partReS1-2">
        取消预约
      </div>
      <div class="partReS1-3">

      </div>
    </div>

    <div class="partReS2">
      <img class="partReS2Img1" src="@/pages/loginAndRegister/loimages/ic_register_success.png" alt="">
    </div>
    <div class="partReS3">
      取消成功
    </div>

    <button class="partReS4">
      返回首页
    </button>
    <div class="partReS5">
      <span class="threeS">3秒</span>后自动跳至首页
    </div>


  </div>
</template>

<script>
  export default {
    name: "cancelorderinoculation"
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  html
  {
    font-size:16px;
  }
  .partReS1
  {
    width:100%;
    height:44px;
    background:#20c7B3;
    line-height:44px;
    display:flex;
    letter-spacing:1px;
    color:#fff;
  }
  .partReS1-1
  {
    flex:1;
  }
  .partReS1-1 img
  {
    width:10px;
    height:16px;
    margin-top:10px;
  }
  .partReS1-2
  {
    flex:3;
  }
  .partReS1-3
  {
    flex:1;
  }
  .partReS2
  {
    display:flex;
    flex-direction:row;
    justify-content:center;
  }
  .partReS2Img1
  {
    /*width:107px;*/
    width:54px;
    /*height:107px;*/
    height:54px;
    margin-top:60px;
    margin:60px auto 0 auto;
  }
  .partReS3
  {
    font-size:16px;
    font-weight:bold;
    display:flex;
    margin-top:13px;
    align-items:center;
    letter-spacing:1px;
    color:#20c7B3;
    justify-content:center;
  }
  .partReS4
  {
    display:flex;
    justify-content:center;
    align-items:center;
    margin:76px auto 0 auto;
    width:95px;
    height:30px;
    background:#20c7B3;
    color:#fff;
    border:none;
    border-radius:20px;
  }
  .threeS
  {
    color:#20c7B3;
  }
  .partReS5
  {
    margin-top:20px;
    font-size:15px;
  }
</style>
