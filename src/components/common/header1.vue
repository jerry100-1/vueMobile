<template>
   <div class="wrapHeader">

     <div class="leftimg">
       <img src="@/pages/loginAndRegister/loimages/leftRowImg2.png" alt="">
     </div>
     <div class="righttitle">
       {{title}}
     </div>
     <div class="rightempty">
       {{textDes}}
     </div>

   </div>
</template>

<script>
    export default {
        name: "header1",
         props:{
           title:String,
           textDes:String,
           color:String
         },

    }
</script>

<style scoped>
   *{
     margin:0px;
     padding:0px;
   }
  .wrapHeader
  {
    height:44px;
    background:#fff;
    display:flex;
    flex-direction:row;
    align-items:center;
  }
   .leftimg
   {
     flex: 1;
     text-align:left;
     font-size:26px;
     text-indent:20px;
   }
   .leftimg img
   {
     margin-left:10px;
     width:16px;
     margin-top:5px;
     height:16px;
   }

   .righttitle
   {
     flex:3;
     font-weight:bold;
     color:#333;
     letter-spacing:1px;
   }
   .rightempty
   {
     flex:1;
   }
























</style>
