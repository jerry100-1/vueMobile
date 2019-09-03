<template>
  <div>


    <div class="wrapsamm">
      <!--模型1-->

      <router-link tag="div" to="/orderdetail2" class="modalsample">
        <div class="titlePar1">
          <div class="wrapkktit">
            <div class="titlePar1Left">
                                            <span class="kkmmee">
                                              订单编号: 20190118185726
                                            </span>

            </div>
            <div class="titlePar1Right">
              <span>已取消</span>
            </div>
          </div>
        </div>
        <div class="ctnPar1">
          <div class="ctnPar1Inne">
            <img class="ctnPar1InneLeft" src="@/pages/homepage/h-11.png"/>
            <div class="ctnPar1InneRight">
              <div class="rText1">宝妈哺育婴儿教育课程</div>
              <div class="rText2">
                <span>主讲人:王静</span>
                <span class="kknn1">节数:27</span>
              </div>

              <div class="rText3"><span class="ddtec">￥</span> 98.00</div>
            </div>

          </div>
        </div>
        <div class="titlePar1" style="margin-top:0px;">
          <div class="wrapkktit">
            <div class="titlePar1Left">
                                            <span>
                                               <span class="mmnnText1">订单详情</span>
                                               <span class="mmnnText2">删除详情</span>
                                            </span>

            </div>
            <div class="titlePar1Right">
              <span>总计: <span class="kkmmuu">￥98.00</span></span>
            </div>
          </div>
        </div>

      </router-link>



      <!--模型1-->

      <router-link tag="div" to="/orderdetail2" class="modalsample">
        <div class="titlePar1">
          <div class="wrapkktit">
            <div class="titlePar1Left">
                                            <span class="kkmmee">
                                              订单编号: 20190118185726
                                            </span>

            </div>
            <div class="titlePar1Right">
              <span>已取消</span>
            </div>
          </div>
        </div>
        <div class="ctnPar1">
          <div class="ctnPar1Inne">
            <img class="ctnPar1InneLeft" src="@/pages/homepage/h-11.png"/>
            <div class="ctnPar1InneRight">
              <div class="rText1">宝妈哺育婴儿教育课程</div>
              <div class="rText2">
                <span>主讲人:王静</span>
                <span class="kknn1">节数:27</span>
              </div>

              <div class="rText3"><span class="ddtec">￥</span> 98.00</div>
            </div>

          </div>
        </div>
        <div class="titlePar1" style="margin-top:0px;">
          <div class="wrapkktit">
            <div class="titlePar1Left">
                                            <span>
                                               <span class="mmnnText1">订单详情</span>
                                               <span class="mmnnText2">删除详情</span>
                                            </span>

            </div>
            <div class="titlePar1Right">
              <span>总计: <span class="kkmmuu">￥98.00</span></span>
            </div>
          </div>
        </div>

      </router-link>






    </div>


  </div>
</template>

<script>
  export default {
    name: "havepay"
  }
</script>

<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  .wrapsamm
  {
    margin-top:-5px;
  }
  .titlePar1
  {
    width:100%;
    height:36px;
    line-height:36px;
    background:#fff;
    margin-top:5px;
  }
  .wrapkktit
  {
    width:92%;
    height:36px;
    margin:0 auto;
    display:flex;
    font-size:14px;
  }
  .titlePar1Left
  {
    flex:5;
    text-align:left;
    color:rgba(0,0,0,0.36);
  }
  .titlePar1Right
  {
    flex:2;
    text-align:right;
  }
  .ctnPar1
  {
    width:100%;
    height:96px;
    padding-top:10px;
    background:#fff;
    border-bottom:1px dashed rgba(0,0,0,0.16);
    border-top:1px dashed rgba(0,0,0,0.16);
  }
  .ctnPar1Inne
  {
    width:92%;
    height:84px;
    margin:0 auto;
    display:flex;
  }
  .kkmmee
  {
    color:#000;
  }
  .ctnPar1InneLeft
  {
    width:112px;
    height:84px;
  }
  .ctnPar1InneRight
  {
    display:flex;
    height:84px;
    justify-content:space-between;
    text-align:left;
    padding-left:10px;
    flex-direction:column;
  }
  .rText1
  {
    margin-top:5px;
    font-size:15px;
    letter-spacing:1px;
  }
  .rText2
  {
    margin-top:-15px;
    font-size:13px;
    letter-spacing:1px;
    color:rgba(0,0,0,0.36);
  }
  .rText3
  {
    color:red;
    font-size:20px;
  }
  .ddtec
  {
    font-size:13px;
  }
  .kknn1
  {
    display:inline-block;
    margin-left:10px;
  }
  span.kkmmuu
  {
    color:red;
  }
  .mmnnText1
  {
    color:#00D3C2;
    border:1px solid #00d3c2;
    border-radius:10px;
    padding:3px 7px;
    font-size:13px;
  }
  .mmnnText2
  {
    color:rgba(0,0,0,0.36);
    border:1px solid rgba(0,0,0,0.36);
    border-radius:10px;
    margin-left:5px;
    padding:3px 7px;
    font-size:13px;
  }
  .modalsample
  {
    margin-top:10px;
  }
</style>



















