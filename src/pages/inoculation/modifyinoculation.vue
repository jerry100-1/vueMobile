<template>
     <div class="wrapInoculation">
      <router-link tag="div" to="/firstpage">
        <header1 :title="inoculationtitle"></header1>
      </router-link>
       <div class="inoculationP1" >
          请选择下次接种时间
       </div>
         <div class="inoculationP2">
           <div class="inoculationP2-1"  @click="open('picker1')">
             <img class="inoculationP2-11" src="@/pages/homepage/h-26.png" alt="">
             <span class="inoculationP2-12" ref="divkk89">请选择结束日期</span>
           </div>
           <div class="inoculationP2-2" @click="open('picker1')">
             <img src="@/pages/homepage/h-27.png" alt="">
           </div>
       </div>

         <div class="inoculationP1" style="border-top:none;">
         请选择接种的疫苗
         <mt-radio
           class="page-part"
           v-model="value1"
           :options="options1" />
         <!--<div>-->
           <!--<mt-cell title="选中的项">{{ value1 }}</mt-cell>-->
         <!--</div>-->


       </div>


         <div class="inoculationP3">
           <button class="P3Inp">保存计划</button>
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
        name: "modifyinoculation",
      data()
      {
         return{
           inoculationtitle:'修改接种计划',
           value1:'',

           title: '添加宝宝信息',
           sheetVisible: false,
           sheetVisible2: false,
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
      components:{
        header1
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
          this.$refs.divkk89.innerHTML= this.GMTToStr(value.toString());
        },

        handleVisibleChange(isVisible) {
          console.log('弹窗是否展示:', isVisible);
        }



      },

      created()
      {

        this.options1 = ['乙肝疫苗', '卡介苗','五联疫苗','三联疫苗','乙肝疫苗1', '卡介苗1','五联疫苗1','三联疫苗1'];
        this.options3 = ['选项A', '选项B', '选项C'];
        this.options2 = [
              {
                label: '被禁用',
                value: '值F',
                disabled: true
              },
              {
                label: '选项A',
                value: '值A'
              },
              {
                label: '选项B',
                value: '值B'
              }
             ];

        }
    }
</script>

<style scoped>

  .wrapInoculation
  {
    width:100%;
    height:100%;
    background:#fff;
    overflow:hidden;
  }
  .inoculationP3
  {
    width:100%;
    height:140px;
    clear:both;
    position:fixed;
    bottom:10px;
  }
  button.P3Inp
  {
    width:92%;
    height:46px;
    color:#fff;
    text-align:center;
    margin-top:40px;
    border:none;
    border-radius:5px;
    letter-spacing:1px;
    line-height:46px;
    margin-bottom:20px;
    background:#00D3C2;
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
</style>



















