<template>
    <div class="wrapall">
    <router-link tag="div" to="/outpatientNotify">
      <header1  :title="patientdetailtitle"></header1>
    </router-link>
      <div class="linHea"></div>
      <div class="wrapfftext">
         <h2 class="textw1">门诊通知</h2>
         <div class="textw2">
           根据国务院办公厅通知,2019年春节放假调休日期为 2019年2月4日(除夕)至2019年2月10号(年初六),共7天.
         </div>
          <div class="textw3">
            我院春节期间门诊开诊安排如下:
          </div>
          <div class="textw4">
            2月3号(星期日)全天开诊,按星期而排版常规出诊;
            2月3号(星期日)全天开诊,按星期而排版常规出诊;
            2月3号(星期日)全天开诊,按星期而排版常规出诊;
            2月3号(星期日)全天开诊,按星期而排版常规出诊;
            2月3号(星期日)全天开诊,按星期而排版常规出诊;
            2月3号(星期日)全天开诊,按星期而排版常规出诊;
            2月3号(星期日)全天开诊,按星期而排版常规出诊;

          </div>
      </div>

    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
    export default {
        name: "patientdetail",
      data()
      {
        return {
          patientdetailtitle:"门诊通知详情页面",
          flag:false,
          length:1
        }
      },
      components:{
        header1
      }
    }
</script>

<style scoped>
  .wrapall
  {
    width:100%;
    height:100%;
    background:#fff;
  }
 .textw1
 {
   font-size:18px;
 }
 .linHea
 {
   width:100%;
   height:1px;
   background: rgba(0,0,0,0.08);
 }
  .wrapfftext
  {
    width:92%;
    height:auto;
    margin:0 auto;
    text-align:left;
  }
  .textw1
  {
 margin-top:15px;
  }
  .textw2
  {
    margin-top:15px;
    text-indent:15px;
    font-size:14px;
    letter-spacing: 1px;
  }
  .textw3
  {
    margin-top:20px;
    font-size:14px;
  }
  .textw4
  {
    margin-top:20px;
    font-size:14px;
    padding-left:20px;
    padding-right:20px;
    line-height:30px;
  }
</style>
























