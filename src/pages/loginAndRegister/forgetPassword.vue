<template>
  <div class="registerWrap">
    <div class="registerPart1">
      <router-link class="l1" tag="div" to="/Login">
        <img src="./loimages/leftRow.png" alt="">
      </router-link>
      <div class="l2">
       忘记密码
      </div>
      <div class="l3">

      </div>
    </div>

    <div class="registerPart2">
      <div class="rePa1">
        <div class="rePa1Left">
          +86 <div id="tran2"></div>
        </div>
        <div class="rePa1Right">
          <input type="text" class="phInp2" placeholder="请输入您的手机号">

        </div>
      </div>
      <div class="rePa1 rePa2">
        <div class="rePa1Left rePa1Left2">
          <input type="text" placeholder="请输入验证码">
        </div>
        <div class="rePa1Right rePa1Right2">
          获取验证码
        </div>
      </div>
    </div>


    <div class="registerPart3">
      <router-link tag="button" to="/resetPassword" class="getValidate">下一步</router-link>
    </div>


  </div>
</template>

<script>
  export default {
    name: "forgetPassword"
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .rePa1Left
  {
    position:relative;
  }
  #tran2
  {
    height: 0;
    width: 0;
    position:absolute;
    right: 0px;
    top:1.5rem;
    border-right:0.25rem solid transparent;
    border-bottom:0.25rem solid #000;
    transform: rotateX(180deg);
    border-left: 0.25rem solid transparent;
  }

  body
  {
    background:#EDF3F5;
  }
  .registerWrap
  {
    background:#EDF3F5!important;
    height:100%;
    width:100%;
  }

  .registerPart1
  {
    width:100%;
    height:2.75rem;
    display:flex;
    align-items:center;
    justify-content: space-between;
    color:#fff;
    letter-spacing:1px;
    flex-direction:row;
    background:#20c7b3;
  }
  .registerPart2
  {
    width:100%;
    height:100px;
    background:#fff;
    margin-top:0.75rem;
  }
  .l1,.l2,.l3
  {
    flex:1;
    align-items:center;
  }
  .l1 img
  {
    width:0.5rem;
    height:0.875rem;
    position:absolute;
    left:1.25rem;
    top:0.9375rem;
  }
  .rePa1
  {
    width:100%;
    display:flex;
    height:3.0625rem;
    flex-direction:row;
    align-items:center;
    border-bottom:1px solid rgba(0,0,0,0.08);
  }
  .rePa1Left
  {
    flex:2;
    height:3.0625rem;
    line-height:3.0625rem;
  }
  .rePa2
  {
    border:none;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .rePa1Right
  {
    flex:9;
    height:3.0625rem;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: rgba(0,0,0,0.36);
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(0,0,0,0.36);
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(0,0,0,0.36);
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: rgba(0,0,0,0.36);
  }
  input.phInp2
  {
    height:3.0625rem;
    line-height:3.0625rem;
    border:none;
    width:100%;
    outline:none;
    font-size:0.9375rem;
    text-indent:1.25rem;
  }
  .rePa1Left2
  {
    flex:4;
    font-size:1rem;
    justify-content:center;
  }
  .rePa1Left2 input
  {
    border:none;
    outline:none;
    font-size:0.9375rem;
  }
  .rePa1Right2
  {
    color:#20c7b3;
    height:3.0625rem;
    line-height:3.0625rem;
  }
  .rePa1Right2
  {
    flex:3;
    font-size:1rem;
  }
  .rePa1Right2 input
  {
    font-size:0.9375rem;
  }
  .registerPart3
  {
    width:19.6875rem;
    height:1rem;
    text-align: center;
    margin:4.375rem auto 0 auto;
  }
  .getValidate
  {
    width:19.6875rem;
    height:3.125rem;
    background:#20c7b3;
    margin:4.375rem auto 0 auto;
    border:none;
    color:#fff;
    border-radius:1.875rem;
  }
</style>
