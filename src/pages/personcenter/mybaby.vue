<template>
    <div style="height:100%;background:#fff;">
       <header1 :title="mybabyTitle">

       </header1>

      <div class="mainctnBab">
          <img src="@/pages/centerimg/p-4.png" alt="">

          <div class="hhText2">您还没有添加宝宝哦</div>
          <div class="hhText3">添加后可享受便捷的预约接种服务</div>

          <button class="hhBtn">马上添加</button>
      </div>


    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue";
    export default {
        name: "mybaby",
         data()
         {
           return {
             mybabyTitle:"我的宝宝"
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
        border-top:1px solid rgba(0,0,0,0.08);
        width:100%;
      }
      .mainctnBab img
      {
        width:204px;
        height:116px;
        margin-top:112px;
      }
      .hhText2
      {
        color:rgba(0,0,0,0.48);
        font-size:14px;
        margin-top:40px;
      }
      .hhText3
      {
        color:rgba(0,0,0,0.48);
        font-size:14px;
        margin-top:10px;
      }
  .hhBtn
  {
    width:46%;
    height:44px;
    background:#00d3c2;
    color:#fff;
    fonmt-size:18px;
    text-align:center;
    line-height:44px;
    margin-top:28px;
    border:none;
    letter-spacing:1px;
    border-radius:4px;
  }
</style>
















