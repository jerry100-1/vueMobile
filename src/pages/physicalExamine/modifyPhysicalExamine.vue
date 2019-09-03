<template>
    <div class="wrapAll">
      <header1 :title="mPExamineTitle"></header1>
      <div class="inoculationP1" >
        请选择下次接种时间
      </div>

      <div class="inoculationP2">
        <div class="inoculationP2-1"  @click="open('picker1')">
          <img class="inoculationP2-11" src="@/pages/homepage/h-26.png" alt="">
          <span class="inoculationP2-12" ref="divkk88">请选择结束日期</span>
        </div>
        <div class="inoculationP2-2" @click="open('picker1')">
          <img src="@/pages/homepage/h-27.png" alt="">
        </div>
      </div>
      <div class="inoculationP3">

        <h3>保健项目介绍</h3>

        <span>
             全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是
           全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是
             全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是全身保健按摩是
           </span>


      </div>


      <div class="inoculationP4">
        <button type="success" class="btnPlay">保存计划</button>
      </div>


      <mt-datetime-picker
        ref="picker1"
        v-model="value"
        :closeOnClickModal="false"
        @visible-change="handleVisibleChange"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker2"
        type="date"
        v-model="value2"
        @confirm="handleChange">
      </mt-datetime-picker>
    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
    export default {
        name: "modifyPhysicalExamine",
      data()
      {
        return {
          mPExamineTitle:"修改保健计划",
          actions: [],
          actions2: [],
          value: null,
          value2: null,
          value3: null,
          value4: null,
          value5: '04:32',
          visible: false,
          visible2: false,
          visible3: false,
          visible4: false,
          visible5: false
        }
      },
      methods:{
        GMTToStr(time){
          let date = new Date(time)
          let Str=date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes()
          return Str;
        },
        open(picker) {
          this.$refs[picker].open();
        },
        handleChange(value) {
          // Toast({
          //   message: '已选择 ' + value.toString(),
          //   position: 'bottom'
          // });
          console.log(value.toString());
          this.$refs.divkk88.innerHTML= this.GMTToStr(value.toString());
        },

        handleVisibleChange(isVisible) {
          console.log('弹窗是否展示:', isVisible);
        }

      },
       components:{
         header1
       }
    }
</script>

<style scoped>
  .wrapAll
  {
    width:100%;
    height:100%;
    overflow-x:hidden;
    background:#fff;
  }
  .inoculationP4 mt-button
  {
    width:90%;
    background:#00D3C2;
    margin:0 auto;
  }
  .inoculationP4 .btnPlay
  {
    width:90%;
    height:44px;
    background:#00d3c2;
    color:#fff;
    border:none;
    letter-spacing:1px;
    margin-left:auto;
    margin-right:auto;
  }
  button
  {
    outline:none;
  }
  .inoculationP3
  {
    width:100%;
    height:auto;
    margin:0 auto;
    margin-top:10px;
    background:#fff;
  }
  .btnPlay
  {
    width:90%;
    height:42px;
    margin:10px;
    border-radius:5px;
    background:#00D3C2;
  }
  .inoculationP3 h3
  {
    margin-top:20px;
    margin-left:20px;
    text-align:justify;
  }
  .inoculationP3 span
  {
    margin-top:20px;
    margin-left:20px;
    text-align:left;
    font-size:15px;
    display:inline-block;
    margin-top:15px;
    line-height:30px;
    text-indent:60px;
  }
  .inoculationP1
  {
    width:100%;
    height:30px;
    border-top:1px solid rgba(0,0,0,0.08);
    background:#f5f9fc;
    font-size:15px;
    text-align:left;
    line-height:30px;
    color:#B1BDD3;
    padding-left:15px;
    letter-spacing:1px;
  }
  .inoculationP2
  {
    width:100%;
    height:46px;
    line-height:46px;
    display:flex;
    background:#fff;
    align-items:center;
    justify-content:center;
  }
  .inoculationP2-1
  {
    flex:1;
    text-align:left;
    margin-left:20px;
  }
  .inoculationP2-2
  {
    flex:1;
    text-align:right;
  }
  .inoculationP2-2 img
  {
    width:9px;
    height:16px;
    margin-top:12px;
    margin-right:20px;
  }
  .inoculationP2-1 img
  {
    width:20px;
    height:20px;
  }
  .inoculationP2-11
  {
    display:inline-block;
    margin-top:12px;
  }
  .inoculationP2-12
  {
    display:inline-block;
    margin-left:10px;
    color:rgba(0,0,0,0.36);
    font-size:15px;
  }
  .inoculationP4
  {
    width:100%;
    height:120px;
    background:#f5f9FC;
  }
</style>
