<template>
    <div class="perfect-info">
          <div class="partReS1 page-datetime">
            <router-link tag="div" to="/Register" class="partReS1-1">
              <img src="@/pages/loginAndRegister/loimages/leftRow.png" alt="">
            </router-link>
            <div class="partReS1-2">
              完善身份信息
            </div>
            <div class="partReS1-3">

            </div>
          </div>

         <div class="partReB1">
             <img src="./loimages/ic_default_avatar.png" alt="">
         </div>


        <div class="formContent">
              <form action="">
                    <div class="yourName">
                         <div class="descript">姓名</div>
                         <div class="divInp">
                           <input type="text" class="input specialIn"  placeholder="请输入您的姓名">

                         </div>
                    </div>
                    <div class="yourName">
                        <div class="descript">身份证号</div>
                        <div class="divInp">
                          <input type="text" class="input specialIn" placeholder="请输入身份证号码">
                        </div>
                    </div>

                    <div class="yourName">
                      <div class="descript">性别</div>
                      <div class="divInp">
                        <mt-button @click.native="sheetVisible = true"  class="kkm" size="large">请选择性别</mt-button>
                        <img src="./loimages/rightArrow.png" alt="">
                      </div>
                    </div>

                  <div class="yourName">
                    <div class="descript">出生年月</div>
                    <div class="divInp" >
                      <!-- @click.native="" -->
                      <mt-button style=""  class="kkm" size="large">请选择年月日</mt-button> 
                      <img src="./loimages/rightArrow.png" alt=""/>
                    </div>
                  </div>


                
                <div class="yourName">
                  <div class="descript">所在区域</div>
                  <div class="divInp">
                    <mt-button style="" class="kkm" size="large">请选择所在区域</mt-button>
                    <img src="./loimages/rightArrow.png" alt="">
                  </div>
                </div>

                 
                

              </form>
               <!-- 选择地址三级联动
                <sanjiliandong></sanjiliandong>
     -->

        </div>


      <router-link tag="button" to="/registerSuccess" class="btnSub">
          确定
      </router-link>

      <!--<mt-button @click.native="open('picker2')" size="large">点击弹出 DateTime Picker</mt-button>-->


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
      <mt-datetime-picker
        ref="picker3"
        type="time"
        v-model="value3"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker4"
        type="date"
        v-model="value4"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        @confirm="handleChange">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker5"
        type="time"
        v-model="value5"
        @confirm="handleChange">
      </mt-datetime-picker>


      <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      <mt-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></mt-actionsheet>

    </div>

</template>
<style>
  .kkm
  {
    background:#fff;
    border-radius:0;
    border:none;
    box-shadow:none;
    font-size:14px;
    outline:none;
    color:rgba(0,0,0,0.48)
  }
</style>

<script type="text/babel">
import sanjiliandong from '../../components/sanjiliandong'

  export default {
    name:"supplementPage",
    data() {
      return {
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
      };
    },
    components:{
      sanjiliandong:sanjiliandong
    },

    mounted() {
      this.actions = [{
        name: '男',
        method: this.takePhoto
      }, {
        name: '女',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    },

    methods: {
      takePhoto() {
        console.log('男');
      },

      openAlbum() {
        console.log('女');
      },

      goBack() {
        history.go(-1);
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
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
  };
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  html
  {
    font-size:16px;
  }
  input
  {
    outline:none;
  }
  body{
    background:#EDF3F5;
  }
  div.partReS1
  {
    width:100%;
    height:44px;
    background:#20c7B3;
    line-height:44px;
    display:flex;
    letter-spacing:1px;
    color:#fff;
  }
  .partReS1-1
  {
    flex:1;
  }
  .partReS1-1 img
  {
    width:10px;
    height:16px;
    margin-top:10px;
  }
  .partReS1-2
  {
    flex:3;
  }
  .partReS1-3
  {
    flex:1;
  }
  div.partReB1
  {
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:144px;
    background:#EDF3F5;
  }
  .partReB1 img
  {
    width:80px;
    height:80px;
    margin-top:34px;
  }
  .formContent
  {
    width:100%;
    margin:0 auto;
    height:254px;
    background:#fff;
  }
  .formContent form
  {
    width: 94%;
    height: 254px;
    margin:0 auto;
  }
  .yourName
  {
    width:100%;
    height:49px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    background:#fff;
    border-bottom:1px solid rgba(0,0,0,0.08);
  }
  .divInp img
  {
    position:absolute;
    right:0px;
    top:12px;
  }
  .yourName:nth-last-child(1)
  {
    border:none;
  }
 .yourName .descript
 {
   flex:6;
   text-align:left;
 }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color: rgba(0,0,0,0.36);
    text-align:right;
    font-size:15px;
    letter-spacing:1px;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(0,0,0,0.36);
    font-size:15px;
    letter-spacing:1px;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(0,0,0,0.36);
    font-size:15px;
    letter-spacing:1px;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color: rgba(0,0,0,0.36);
    font-size:15px;
    letter-spacing:1px;
  }
  .yourName div.divInp
  {
    flex:5;
    text-align:left;
    position: relative;
  }
  .yourName .input
  {
    height:32px;
    width:90%;
    border:none;
    position:absolute;
    right:30px;
    top:-14px;
  }
  .yourName .specialIn
  {
    position:absolute;
    right:0px;
    top:-14px;
  }
  button.btnSub
  {
    width:86%;
    height:50px;
    background:#20c7B3;
    border-radius:30px;
    border:none;
    color:#fff;
    margin-top:114px;
    letter-spacing:2px;
  }

  /* 三级联动 */
  .perfect-info{
    position: relative;
  }
  .picker-items{
    background-color: #fff;
  }
    

</style>
