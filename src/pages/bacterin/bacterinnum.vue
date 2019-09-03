<template>
    <div>
      <div class="wrapmodeTex">

           <!--模型1-->

           <div class="modevb1">
                <div class="modevb1Left">
                  <span class="kkcc1">1</span>
                  <span class="kkcc2">2019-01-18 周五</span>
                </div>
                <div class="modevb1Right">
                   <span>已接种</span>
                   <img src="@/pages/homepage/h-44.png" alt="">
                </div>
           </div>


          <!--模型1-->

          <div class="modevb1">
            <div class="modaldivTes">
              <img class="mmnn1" src="@/pages/homepage/h-45.png" alt="">
              <span class="mmnn2">未接种</span>
              <span class="mmnn0"></span>
              <img class="mmnn3" src="@/pages/homepage/h-46.png" alt="">
              <span class="mmnn4">修改时间</span>

            </div>

            <div class="modevb1Left">
              <span class="kkcc1">2</span>
              <span class="kkcc2">1月龄</span>
            </div>
            <div class="modevb1Right" >
              <span>未接种</span>
              <img src="@/pages/homepage/h-44.png" alt="">
            </div>
          </div>

          <!--模型1-->

          <div class="modevb1">
          <div class="modevb1Left">
            <span class="kkcc1">3</span>
            <span class="kkcc2">3月龄</span>
          </div>
          <div class="modevb1Right">
            <span>未接种</span>
            <img src="@/pages/homepage/h-44.png" alt="">
          </div>
        </div>


      </div>
    </div>
</template>

<script>
    export default {
        name: "bacterinnum",
        data()
        {
          return{
            status:"未接种",
            color1:"color1",
            color2:"color2"
          }
        }

    }
</script>

<style scoped>

   .wrapmodeTex
   {
     width:100%;
   }
  .modevb1
  {
    width:94%;
    margin:0 auto;
    height:80px;
    display:flex;
  }
  .modevb1Left
  {
    flex:2;
    display:flex;
    align-items:center;
  }
  .modevb1Right
  {
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
  }
  .kkcc1
  {
    width:21px;
    height:21px;
    display:inline-block;
    line-height:21px;
    color:#fff;
    text-align:center;
    border-radius:50%;
    background:#00d3c2;
    vertical-align:middle;
  }
   .kkcc2
   {
     display:inline-block;
     font-size:12px;
     vertical-align:middle;
     margin-left:15px;
   }
  .modevb1Right img
  {
    width:17px;
    height:17px;
    display:inline-block;
    margin-left:10px;
  }
   .modevb1Right span
   {
     display:inline-block;
     font-size:14px;
     letter-spacing:1px;
   }

   .color1
   {

     color:#333;
   }
   .color2
   {

     color:rgba(0,0,0,0.16);
   }
  .modevb1
  {
    position: relative;
  }
  .modaldivTes
  {
    position:absolute;
    top:-15px;
    right:0px;
    width:162px;
    height:36px;
    background: rgba(0,0,0,0.66);
    border-radius:3px;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .mmnn1
  {
    display:inline-block;
    width:14px;
    height:14px;
    margin-left:3px;
  }
   .mmnn2
   {
     display:inline-block;
     font-size:14px;
     color:#fff;
     margin-left:3px;
   }
   .mmnn0
   {
     width:1px;
     height:26px;
     display:inline-block;
     background:rgba(0,0,0,0.36);
     margin-left:5px;
   }
   .mmnn3
   {
     display:inline-block;
     width:14px;
     height:14px;
     margin-left:15px;
     margin-left:5px;
   }
   .mmnn4
   {
     display:inline-block;
     font-size:14px;
     color:#fff;
     margin-left:3px;
   }
</style>



























