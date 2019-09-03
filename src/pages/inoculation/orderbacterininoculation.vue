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
            <span>2019-02-11  11:00</span>
        </div>

      </div>


    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
    export default {
        name: "orderbacterininoculation",
        data()
        {
          return {
            obinoculaTitle:"预约疫苗接种"
          }
        },
        components:{
          header1
        }

    }
</script>

<style scoped>
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
  .hhText3
  {
    margin-top:30px;
    position:absolute;
    top:143px;
    left:25px;
  }
  .kkmm1
  {
    color:rgba(0,0,0,0.36);
  }
</style>



























