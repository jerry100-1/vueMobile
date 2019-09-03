<template>
  <div style="height:100%;background:#fff;">
    <header1 :title="mybabyTitle" :textDes="rightAddText">

    </header1>

    <div class="mainctnBab">

        <!--模型1-->
       <div class="babyListmodal">

             <div class="innbabyListmodal">
                 <div class="inbaLimodLeft">
                    <img class="hhdd1" src="@/pages/centerimg/p-5.png"/>
                    <div class="hhdd2">
                       <div class="hhdd2-1">可乐</div>
                       <div class="hhdd2-2">3岁2个月11天</div>
                    </div>
                 </div>
                 <div class="inbaLimodRight">
                     <span>2019-01-08</span>
                 </div>

             </div>


       </div>


    </div>


  </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue";
  export default {
    name: "mybaby2",
    data()
    {
      return {
        mybabyTitle:"我的宝宝",
        rightAddText:"添加"
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
  body
  {
    overflow-y: hidden;
  }
  .mainctnBab
  {
    background:#fff;
    width:100%;
  }
  .mainctnBab img
  {
    width:204px;
    height:116px;
    margin-top:112px;
  }
  .babyListmodal
  {
    width:100%;
    height:76px;
  }
  .innbabyListmodal
  {
    width:94%;
    height:75px;
    border-top:1px solid rgba(0,0,0,0.08);
    margin:0 auto;
    display:flex;
  }
  .inbaLimodLeft
  {
    display:flex;
    flex:4;
    height:75px;
    line-height:75px;
    position:relative;
  }
  .inbaLimodLeft img
  {
    margin-top:18px;
  }
  .inbaLimodRight
  {
    text-align:right;
    flex:2;
    height:75px;
    line-height:75px;
    font-size:14px;
    color:rgba(0,0,0,0.36);
  }
  .inbaLimodLeft .hhdd1
  {
    width:40px;
    height:40px;
    display:inline-block;
  }
  .hhdd2
  {
    display:inline-block;
    height:40px;
    margin-top:18px;
    margin-left:15px;
  }
  .hhdd2-1
  {
    height:23px;
    line-height:20px;
    font-size:16px;
    text-align:left;
  }
  .hhdd2-2
  {
    height:17px;
    line-height:19px;
    font-size:14px;
    text-align:left;
    color:rgba(0,0,0,0.36);
  }

</style>

































