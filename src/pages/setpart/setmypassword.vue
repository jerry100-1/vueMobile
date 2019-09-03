<template>
  <div class="registerWrap">
    <div class="registerPart1">
      <div class="l1">
        <img src="@/pages/loginAndRegister/loimages/leftRow.png" alt="">
      </div>
      <div class="l2">
        修改密码
      </div>
      <div class="l3">

      </div>
    </div>

    <div class="registerPart2">
      <div class="rePa1">
        <div class="rePa1Right">
          <input type="text" class="phInp2" placeholder="请输入原密码">
        </div>
      </div>
      <div class="rePa1">
        <div class="rePa1Right">
          <input type="text" class="phInp2" placeholder="请输入新密码">
        </div>
      </div>
    </div>


    <div class="registerPart3">
      <button class="getValidate">确定</button>
    </div>


  </div>
</template>

<script>
  export default {
    name: "setmypassword"
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  body
  {
    background:#f2f2f2;
  }
  .registerWrap
  {
    background:#f2f2f2!important;
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
    flex-direction:row;
    background:#20c7b3;
  }
  .registerPart2
  {
    width:100%;
    height:6.25rem;
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
    letter-spacing:1px;
    font-size:0.9375rem;
    text-indent:1.25rem;
  }

  .rePa1Left2 input
  {
    border:none;
    outline:none;
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
    letter-spacing:1px;
    border-radius:1.875rem;
  }
</style>
