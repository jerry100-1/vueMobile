<template>
    <div>
      <!--第一行-->
      <div class="modaldiv1inn">
          <div class="modaldiv1innLeft">
              <span class="kknntext1">免费</span>
              <span class="kknntext2">口服脊灰减毒疫苗</span>
          </div>
          <div class="modaldiv1innRight">
              <img src="@/pages/homepage/h-28.png" alt="">
          </div>
      </div>
      <!--第二行-->
      <div class="modaldiv1inn">
        <div class="modaldiv1innLeft">
          <span class="kknntext3">自费</span>
          <span class="kknntext2">五联疫苗</span>
          <div class="kknntext4">
            可替代脊灰,百白破,HIB疫苗
          </div>
        </div>
        <div class="modaldiv1innRight">
          <img src="@/pages/homepage/h-28.png" alt="">
        </div>
      </div>

    </div>
</template>
<script>

    export default {
        name: "bacterinlist"
    }
</script>

<style scoped>
  .modaldiv1inn {
    width: 100%;
    height: 54px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

    .modaldiv1inn
    {
      display:flex;
      align-items:center;
      justify-content: center;
    }
    .modaldiv1innLeft
    {
      flex:5;
      text-align:left;
      height:56px;
      display:flex;
      align-items:center;
      font-size:15px;
      position:relative;
    }
    .modaldiv1innRight
    {
      flex:1;
      height:56px;
      display:flex;
      align-items:center;
      text-align:right;
      justify-content:flex-end;
     }
    .modaldiv1innRight img
    {
      width:9px;
      height:16px;
      margin-right:15px;
     }
    .kknntext1
    {
      padding:2px 5px;
      border-radius:3px;
      font-size:12px;
      color:#fff;
      background:#00d3c2;
    }
    .kknntext1
    {
      vertical-align:middle;
      margin-left:15px;
    }
    .kknntext2
    {
      display:inline-block;
      vertical-align:middle;
      margin-left:3px;
      margin-left:3px;
      font-size:13px;
    }
    .kknntext3
    {
      padding:2px 5px;
      border-radius:3px;
      font-size:12px;
      color:#fff;
      background:#6D83AD;
      vertical-align:middle;
      margin-left:15px;
    }
    .kknntext4
    {
      display:block;
      position:absolute;
      bottom:5px;
      color:rgba(0,0,0,0.38);
      font-size:12px;
      left:50px;
    }
</style>




















