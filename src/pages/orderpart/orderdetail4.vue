<template>
  <div>

    <router-link tag="div" to="/orderpage">
      <header1 :title="orderdetailtitle">

      </header1>
    </router-link>

    <div class="wrapsamm">
      <!--模型1-->
      <div class="modalsample" >
        <div class="titlePar1" >
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
            <div class="kkline">
              <div class="kklineLeft">
                开课时间
              </div>
              <div class="kklineRight">
                2019-01-18 17:00
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nnwwoo">
        <div class="nnwwootop">
          <span class="qqddcc"></span>
          <span class="ffddcc">支付信息</span>
        </div>
        <div class="nnwwoobottom">
          <div class="nnwwoobotLeft">
            下单时间
          </div>
          <div class="nnwwoobotRight">
            2019-01-18   17:00

          </div>
        </div>
      </div>

      <div class="nnwwoo">
        <div class="nnwwootop">
          <span class="qqddcc"></span>
          <span class="ffddcc">实际</span>
        </div>
        <div class="nnwwoobottom">
          <div class="nnwwoobotLeft">
            原价
          </div>
          <div class="nnwwoobotRight">
            ￥105.00
          </div>
        </div>

        <div class="nnwwoobottom">
          <div class="nnwwoobotLeft">
            实付
          </div>
          <div class="nnwwoobotRight colrred">
            ￥98.00
          </div>
        </div>


      </div>


    </div>


  </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
  export default {
    name: "orderdetail14",
    data()
    {
      return{
        orderdetailtitle:"订单详情-已取消"
      }
    },
    components:{
      header1
    }
  }
</script>

<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  .kkline
  {
    width:100%;
    height:26px;
    background:red;
    margin:0 auto;
    margin-top:5px;
    border-radius:4px;
    display:flex;
    position: relative;
    top:-5px;
  }
  .kklineLeft
  {
    flex:3;
    color:#fff;
    line-height:30px;
    background:#6D83AD;
  }
  .kklineRight
  {
    flex:10;
    text-align:left;
    padding-left:10px;
    line-height:30px;
    background:#eef2f8;
  }
  .ctnPar1
  {
    border-bottom:none;
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
    width:94%;
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
    width:94%;
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
  .modalsample
  {
    margin-top:10px;
  }
  .ctnPar1
  {
    border-bottom:0;
    position: relative;
  }
  .nnwwoo
  {
    width:100%;
    height:66px;
    background:#fff;
    margin-top:5px;
  }
  .nnwwootop
  {
    width:100%;
    height:33px;
    text-align:left;
  }
  .nnwwoobottom
  {
    width:100%;
    height:33px;
    line-height:33px;
    background:#fff;
    display:flex;
    color:rgba(0,0,0,0.46);
  }
  .ffddcc{
    display:inline-block;
    font-size:14px;
    width:94%;
    line-height:33px;
    vertical-align:middle;
    letter-spacing:1px;
    margin:0 auto;
    margin-left:3%;
    margin-right:3%;
    position: relative;
    text-indent:10px;
  }
  .nnwwoobotLeft
  {
    font-size:14px;
    flex:1;
  }
  .nnwwoobotRight
  {
    font-size:14px;
    flex:3;
    text-align:right;
    padding-right:10px;
  }
  .ffddcc:before{
    content: '';
    position: absolute;
    left:0px;
    top:10px;
    /*bottom: 0;*/
    width: 100%;
    height: 13px;
    border-left: 5px solid #00D3C2;
    border-bottom-left-radius:3px;
    border-top-left-radius:3px;
    border-bottom-right-radius:3px;
    border-top-right-radius:3px;
  }
  .colrred
  {
    color:red;
  }




</style>


























