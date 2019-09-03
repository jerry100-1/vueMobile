<template>
  <div>
    <header1 :title="obinoculaTitle"></header1>

    <div class="mainCtnBa">

      <img class="hhText1" src="@/pages/homepage/h-51.png" alt="">

      <div class="hhText2">
        <span class="kkmm1">预约项目:</span>
        <span>乙肝疫苗接种</span>
      </div>
      <div class="hhText3">
        <span class="kkmm1">注册时间:</span>
        <span class="kknn2">2019-02-11  11:00</span>
        <span class="kknn3">免费</span>
      </div>

      <div class="hhText4">
        <span class="kkmm1">预约编号:</span>
        <span>1356</span>
      </div>

    </div>
    <button class="btnConCancel" @click="handleClick">确认取消</button>

   <!--状态1:预约失败-->
    <template>
      <mt-popup v-model="cityVisible" position="center">
        <div class="kkmmww" ref="kkmmww" style="border-radius:8px;">
          <img src="@/pages/homepage/h-52.png" alt="">
          <h3 class="nnText2">预约失败</h3>
          <div class="nnText3">你选择的注射时间,
            门店休息,可修改时间预约
          </div>
          <div class="nnText4">&times;</div>
        </div>
      </mt-popup>
    </template>

    <!--状态2:预约成功-->
    <template>
      <mt-popup v-model="cityVisible" position="center">
        <div class="kkmmww" ref="kkmmww" style="border-radius:8px;">
          <img src="@/pages/homepage/h-52.png" alt="">
          <h3 class="nnText2">预约成功</h3>
          <div class="nnText3">你的号码是1245,请等待叫好号
          </div>
          <div class="nnText4">&times;</div>
        </div>
      </mt-popup>
    </template>

    <!--状态3:预约失败-->
    <template>
      <mt-popup v-model="cityVisible" position="center">
        <div class="kkmmww" ref="kkmmww" style="border-radius:8px;">
          <img src="@/pages/homepage/h-52.png" alt="">
          <h3 class="nnText2">预约失败</h3>
          <div class="nnText3">你选择的注射时间，暂无注射药剂,可修改时间预约
          </div>
          <div class="nnText4">&times;</div>
        </div>
      </mt-popup>
    </template>

    <!--状态4:预约失败-->
    <template>
      <mt-popup v-model="cityVisible" position="center" class="mint-popup-center">
        <div class="kkmmww" ref="kkmmww" style="border-radius:8px;">
          <img src="@/pages/homepage/h-52.png" alt="">
          <h3 class="nnText2">预约失败</h3>
          <div class="nnText3">预约排号已结束,请修改预约时间
          </div>
          <div class="nnText4">&times;</div>
        </div>
      </mt-popup>
    </template>





    <!--<li class="licla" @click="handleClick">点击显示</li>-->







  </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
  export default {
    name: "cancelorderbacterin",
    data()
    {
      return {
        obinoculaTitle:"预约疫苗接种",
        cityVisible:true
      }
    },
    methods:{
      handleClick:function()
      {
        this.cityVisible=true
      }
    },
    components:{
      header1
    },
    mounted:{

    }

  }
</script>

<style scoped>
  .mint-popup-center
  {
    border-radius:15px;
  }
  .mainCtnBa
  {
    width:90%;
    padding:10px 10px 30px 10px;
    background:#fff;
    margin:0 auto;
    height:auto;
    height:212px;
    border-radius:5px;
    position: relative;
    margin-top:84px;
    justify-content:center;
    align-items:center;
  }
  .hhText1
  {
    width:200px;
    height:121px;
    position: absolute;
    top:-48px;
    left:50%;
    margin-left:-100px;
    display:block;
  }
  .hhText2
  {
    margin-top:10px;
    position:absolute;
    top:123px;
    left:25px;
  }
  .kknn2
  {
    width:144px;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .hhText3
  {
    margin-top:30px;
    position:absolute;
    top:143px;
    left:25px;
  }
  .kknn3
  {
    margin-left:20px;
    color:#00D3C2;
  }
  .hhText4
  {
    margin-top:30px;
    position:absolute;
    top:183px;
    left:25px;
  }
  .kkmm1
  {
    color:rgba(0,0,0,0.36);
    letter-spacing:1px;
  }
  .mainCtnBa button
  {
    width:90%;
    height:50px;
    background:#00d3c2;
  }
  .btnConCancel
  {
    width:94%;
    color:#fff;
    border-radius:25px;
    line-height:50px;
    text-align:center;
    height:50px;
    background:#00d3c2;
    margin-top:36px;
    border:none;
  }

  div.kkmmww {
    width: 348px;
    height: 210px;
    background: #fff;
    position: relative;
    display:flex;
    flex-direction:column;
    text-align:center;
  }
  .kkmmww  img{
    width:200px;
    height:121px;
    margin:0 auto;
    margin-top:-50px;
  }
  .nnText2
  {
    color:#000;
    font-size:15px;
    margin-top:36px;
  }
  .nnText3
  {
    color:rgba(0,0,0,0.36);
    font-size:14px;
    margin-top:36px;
  }
  .nnText4
  {
    border-radius:50%;
    width:20px;
    height:20px;
    background:#A9AAAB;
    text-align:center;
    line-height:20px;
    color:rgba(0,0,0,0.86);
    position:absolute;
    bottom:-60px;
    left:50%;
    margin-left:-10px;
  }


</style>



























