<template>
    <div>
       <router-link tag="div" to="/firstpage">
         <header1 :title="title"></header1>
       </router-link>
        <div class="divp1">
          小提示:每个账号,宝宝添加上限为2名,成人添加上限为1名
        </div>
        <div class="divp2">
            <div class="kkdiv1">
              <div class="kkdiv1-1">
                <img src="@/pages/homepage/h-14.png" alt="">
                <span class="sptext">请设置宝宝的图像</span>

              </div>
              <div class="kkdiv1-2">

                <img src="@/pages/homepage/h-13.png" alt="">
              </div>
          </div>

            <div class="kkdiv2">
                <img src="@/pages/homepage/h-15.png" alt="">
                <span class="textdir">请选择我与宝宝的关系</span>
            </div>

            <div class="kkdiv2">
              <img src="@/pages/homepage/h-16.png" alt="">
              <div style="background:#fff;border:none;" ref="divkk1" class="textdir" @click="open('picker1')">
                宝宝出生日期</div>
            </div>

            <div class="kkdiv2">
              <img src="@/pages/homepage/h-17.png" alt="">
              <input class="textdir textdirinput" style="border:none;outline:none" placeholder="宝宝姓名" />
              <!--<mt-field style="border:none" placeholder="宝宝姓名"></mt-field>-->
            </div>

            <div class="kkdiv2" style="border-bottom:0">
              <img src="@/pages/homepage/h-18.png" alt="">
              <span class="textdir">接种点选择</span>
            </div>

        </div>
        <div class="divp3">
             <div class="sptextimg1">
               <img class="spteimg1" src="@/pages/homepage/h-19.png" alt="">
               <div class="kkkText1">男孩</div>
             </div>
             <div class="sptextimg2">
               <img class="spteimg2" src="@/pages/homepage/h-20.png" alt="">
               <div class="kkkText2">女孩</div>
             </div>
        </div>

      <button class="kkbtn1">
        完成添加
      </button>

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
<script type="text/babel">
  import header1 from "@/components/common/header1.vue"

    export default {
        name: "addbaby",
      data () {
        return {
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
        open(picker) {
          this.$refs[picker].open();
        },
        // GMTToStr(time){
        //   let date = new Date(time)
        //   let Str=date.getFullYear() + '-' +
        //     (date.getMonth() + 1) + '-' +
        //     date.getDate() + ' ' +
        //     // date.getHours() + ':' +
        //     // date.getMinutes() + ':' +
        //     // date.getSeconds()
        //   return Str;
        // },
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
          this.$refs.divkk1.innerHTML= this.GMTToStr(value.toString());
        },

        handleVisibleChange(isVisible) {
          console.log('弹窗是否展示:', isVisible);
        }
      }

    }
</script>

<style scoped>
  *{
    margin:0px;
    padding:0px;
    margin:0px;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: rgba(0,0,0,0.36);
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(0,0,0,0.36);
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(0,0,0,0.36);
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: rgba(0,0,0,0.36);
  }
  .kkdiv1-1 img
  {
    width:20px;
    height:20px;
  }
  .spteimg1
  {
    width:24px;
    height:30px;
    text-align:center;
    margin-top:15px;
  }
  .spteimg2
  {
    width:24px;
    height:30px;
    text-align:center;
    margin-top:15px;
  }
  .kkkText1
  {
    color:rgba(0,0,0,0.26);
    margin-top:15px;
    font-size:14px;
  }
  .kkkText2
  {
    color:rgba(0,0,0,0.26);
    margin-top:15px;
    font-size:14px;
  }
.divp3
{
  width:100%;
  height:200px;
  display:flex;
  justify-content:space-between;
}
.divp1
{
  width:100%;
  height:30px;
  opacity:0.6;
  line-height:30px;
  font-size:13px;
  text-align:left;
  text-indent:15px;
}
button.kkbtn1
{
  width:90%;
  height:44px;
  background:rgba(0,0,0,0.08);
  border:none;
  letter-spacing:1px;
  border-radius:5px;
  color:#fff;
}
.sptextimg1
{
  width:86px;
  height:86px;
  margin-top:44px;
  margin-left:60px;
  position:relative;
  border-radius:50%;
  background:#fff;
}
.sptextimg2
{
  width:86px;
  height:86px;
  margin-top:44px;
  margin-right:60px;
  position:relative;
  border-radius:50%;
  background:#fff;
}
.kkdiv2
{
  width:100%;
  height:50px;
  background: #fff;
  display:flex;
  flex-direction:row;
  align-items:center;
  text-align:left;
  padding-left:20px;
  border-bottom:1px  solid rgba(0,0,0,0.08);
}
  .kkdiv2 img
  {
    width:20px;
    height:20px;
  }
  .textdir
  {
    color:rgba(0,0,0,0.36);
    margin-left:10px;
    letter-spacing:1px;
    font-size:15px;
  }
  .kkdiv1
  {
    width:100%;
    height:80px;
    background:#fff;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid rgba(0,0,0,0.08);
  }
  .kkdiv1-1
  {
    width:50%;
    height:80px;
    display:flex;
    text-align:left;
    align-items:center;
    padding-left:20px;
  }
  .sptext
  {
    color:rgba(0,0,0,0.36);
    margin-left:10px;
    letter-spacing:1px;
    font-size:15px;
  }
  .kkdiv1-2
  {
    width:50%;
    height:80px;
    text-align:right;
  }
  .kkdiv1-2 img
  {
    width:60px;
    height:60px;
    margin-right:20px;
    margin-top:10px;
  }
</style>























