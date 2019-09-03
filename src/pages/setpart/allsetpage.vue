<template>
    <div class="kkmm">
       <header1 ref="load"  style="background:#00D3C2;color:#fff" :title="allsettitle"></header1>

          <div class="wwddwra">
            <!--修改密码-->
              <div class="modalsamone">
                   <div class="modalsamoneLeft">
                     修改密码
                   </div>
                   <div class="modalsamoneRight">
                     <img src="@/pages/centerimg/c-11.png" alt="">
                   </div>
              </div>
              <!--提醒设置-->
              <div class="modalsamone">
                <div class="modalsamoneLeft">
                  提醒设置
                </div>
                <div class="modalsamoneRight">
                  <img src="@/pages/centerimg/c-11.png" alt="">
                </div>
              </div>
              <!--信息反馈-->
              <div class="modalsamone">
                <div class="modalsamoneLeft">
                  信息反馈
                </div>
                <div class="modalsamoneRight">
                  <img src="@/pages/centerimg/c-11.png" alt="">
                </div>
              </div>
              <!--用户协议-->
              <div class="modalsamone">
                <div class="modalsamoneLeft">
                  用户协议
                </div>
                <div class="modalsamoneRight">
                  <img src="@/pages/centerimg/c-11.png" alt="">
                </div>
              </div>
              <!--软件更新-->
              <div class="modalsamone">
              <div class="modalsamoneLeft">
                软件更新
              </div>
              <div class="modalsamoneRight">
                <img src="@/pages/centerimg/c-11.png" alt="">
              </div>
            </div>

          </div>

      <input type="button" class="btnkknn" value="退出登录">
      <!--<input type="button" @click="changeColor()" class="btnkknn" value="退出登录">-->

    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"

  export default {

        name: "allsetpage",
        data()
        {
          return{
           allsettitle:"设置",
            color:"color1",
          }
        },
        components:{
          header1
        },
        methods:{
          changeColor()
          {
            this.$refs.load.$el.style.background = 'red'
          }
        },
        mounted:{

        }
    }
</script>

<style scoped>
*{
  margin:0px;
  padding:0px;
}
       .kkmm >>> .righttitle
       {
         color:#fff;
       }
    .color1{
      color:#fff;
    }
    .wwddwra
    {
      width:100%;
      height:auto;
      background:#fff;
      margin-top:10px;
    }
  .modalsamone
  {
    width:92%;
    height:48px;
    margin:0 auto;
    border-bottom:1px solid rgba(0,0,0,0.08);
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .modalsamone:nth-child(5)
  {
    border-bottom:none;
  }
 input.btnkknn
 {
   width:80%;
   height:51px;
   line-height:51px;
   color:#fff;
   text-align:center;
    border-radius:25px;
   border:none;
   background:#00D3C2;
   letter-spacing:1px;
   outline:none;
   margin-top:240px;
 }
</style>






















