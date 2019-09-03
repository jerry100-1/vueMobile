<template>
    <div class="kkmm">
          <header1 :title="remintitle" style="background:#00d3c2;"></header1>

          <div class="kkqqaa">
               <!--声音-->
               <div class="lineswtch">
                     <div class="kkww">
                          <div class="lineswtchdd1">声音</div>
                          <div class="lineswtchdd2">
                              <mt-switch v-model="value4" @change="handleChange">
                                <label v-text="value4"></label>
                              </mt-switch>
                          </div>
                     </div>
               </div>
                <!--震动-->
                   <div class="lineswtch">
                       <div class="kkww">
                <div class="lineswtchdd1">震动</div>
                <div class="lineswtchdd2">

                      <mt-switch v-model="value1" @change="handleChange">
                        <label v-text="value1"></label>
                      </mt-switch>

                </div>
              </div>
                  </div>
          </div>

    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
    export default {
        name: "remindset",
      data()
      {
       return{
         remintitle:"提醒设置",
         value1: false,
         value2: false,
         value3: true,
         value4: true
       }
      },
      components:{
        header1
      },
      handleChange(event) {
        console.log(event);
      }

    }
</script>

<style scoped>
  .kkmm >>> .righttitle
  {
    color:#fff;
  }
  mt-switch{
    padding:15px 20px;
  }
  .mint-switch-input:checked + .mint-switch-core {
    border-color: #00d3c2;
    background-color: #00d3c2;
  }
  .kkqqaa
  {
    width:100%;
    height:106px;
    background:#fff;
    margin-top:10px;
  }
  .lineswtch
  {
    width:100%;
    height:51px;
    background:#fff;
    border-bottom:1px solid rgba(0,0,0,0.08);
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .kkww
  {
    width:80%;
    height:51px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .lineswtch:nth-child(2)
  {
    border-bottom:none;
  }
</style>






















