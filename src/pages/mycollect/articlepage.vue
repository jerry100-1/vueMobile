<template>
  <div>
    <!--模型1-->
    <div class="modaldivff">
      <div class="wrapWpk">
        <div class="modaldivffLeft">
          <span class="kkText1">张三 回复 李四: 您好! 我是王大锤的弟弟王...</span>
          <span class="kkText2">2019-01-02  12:23</span>
        </div>
        <div class="modaldivffRight">
          <img src="@/pages/centerimg/ffvv.png" alt="">
        </div>
      </div>
    </div>

    <!--模型1-->
    <div class="modaldivff">
      <div class="wrapWpk">
        <div class="modaldivffLeft">
          <span class="kkText1">张三 回复 李四: 您好! 我是王大锤的弟弟王...</span>
          <span class="kkText2">2019-01-02  12:23</span>
        </div>
        <div class="modaldivffRight">
          <img src="@/pages/centerimg/ffvv.png" alt="">
        </div>
      </div>
    </div>

    <!--模型1-->
    <div class="modaldivff">
      <div class="wrapWpk">
        <div class="modaldivffLeft">
          <span class="kkText1">张三 回复 李四: 您好! 我是王大锤的弟弟王...</span>
          <span class="kkText2">2019-01-02  12:23</span>
        </div>
        <div class="modaldivffRight">
          <img src="@/pages/centerimg/ffvv.png" alt="">
        </div>
      </div>
    </div>
    <!--模型1-->
    <div class="modaldivff">
      <div class="wrapWpk">
        <div class="modaldivffLeft">
          <span class="kkText1">张三 回复 李四: 您好! 我是王大锤的弟弟王...</span>
          <span class="kkText2">2019-01-02  12:23</span>
        </div>
        <div class="modaldivffRight">
          <img src="@/pages/centerimg/ffvv.png" alt="">
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "articlepage"
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .modaldivff
  {
    width:100%;
    height:86px;
    background: #fff;
    position: relative;
    top:10px;
    clear:both;
    border-bottom:1px solid rgba(0,0,0,0.08);
  }
  .wrapWpk
  {
    width:92%;
    height:85px;
    margin:0 auto;
    display:flex;
  }
  .modaldivffLeft
  {
    flex:3;
    height:85px;
    display:flex;
    width:72%;
    justify-content:space-between;
    flex-direction:column;
  }
  .kkText1
  {
    width:100%;
    height:40px;
    line-height:20px;
    font-size:15px;
    margin-top:10px;
    text-align:left;
  }
  .kkText2
  {
    width:100%;
    height:40px;
    line-height:20px;
    text-align:left;
    font-size:13px;
    margin-top:10px;
    color:rgba(0,0,0,0.46);
  }
  .modaldivffRight
  {
    height:85px;
    width:30%;
    text-align:right;
  }
  .modaldivffRight img
  {
    width:102px;
    height:76px;
    margin-top:4px;
  }
</style>
























