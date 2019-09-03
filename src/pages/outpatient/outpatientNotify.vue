<template>
     <div>
        <header1 :title="outpatienttitle"></header1>
        <div class="wrapAllModal">
              <div class="modalDiv1" v-for="item in outPatientCenterList" :key="index">
                 <div class="modalDiv1-1">
                   <!--<img src="@/pages/homepage/m-1.png" alt="">-->
                   <img :src="item.pic" alt="">
                 </div>
                 <div class="modalDiv1-2" style="position: relative;">
                   <h3 class="spantitle">{{item.title}}</h3>
                   <span class="spancontent">{{item.detail}}</span>
                 </div>
                 <div class="modalDiv1-3">
                   <span class="m3Text1">{{item.createtime_text}}</span>
                   <span class="m3Text2" v-if="length>0">{{item.type}}</span>
                 </div>
              </div>

              <!--<div class="modalDiv1">-->
                <!--<div class="modalDiv1-1">-->
                  <!--<img src="@/pages/homepage/m-1.png" alt="">-->
                <!--</div>-->
                <!--<div class="modalDiv1-2" style="position: relative;">-->
                  <!--<h3 class="spantitle">门诊通知</h3>-->
                  <!--<span class="spancontent">关于我门诊2019年春节假期安排内容如下:</span>-->
                <!--</div>-->
                <!--<div class="modalDiv1-3">-->
                  <!--<span class="m3Text1">1月13号</span>-->
                  <!--<span class="m3Text2" v-if="length>0">1</span>-->
                <!--</div>-->
              <!--</div>-->

              <!--<div class="modalDiv1">-->
                <!--<div class="modalDiv1-1">-->
                  <!--<img src="@/pages/homepage/m-1.png" alt="">-->
                <!--</div>-->
                <!--<div class="modalDiv1-2" style="position: relative;">-->
                  <!--<h3 class="spantitle">门诊通知</h3>-->
                  <!--<span class="spancontent">关于我门诊2019年春节假期安排内容如下:</span>-->
                <!--</div>-->
                <!--<div class="modalDiv1-3">-->
                  <!--<span class="m3Text1">1月13号</span>-->
                  <!--<span class="m3Text2" v-if="length>0">1</span>-->
                <!--</div>-->
              <!--</div>-->


              <!--<div class="modalDiv1">-->
                <!--<div class="modalDiv1-1">-->
                  <!--<img src="@/pages/homepage/m-1.png" alt="">-->
                <!--</div>-->
                <!--<div class="modalDiv1-2" style="position: relative;">-->
                  <!--<h3 class="spantitle">门诊通知</h3>-->
                  <!--<span class="spancontent">关于我门诊2019年春节假期安排内容如下:</span>-->
                <!--</div>-->
                <!--<div class="modalDiv1-3">-->
                  <!--<span class="m3Text1">1月13号</span>-->
                  <!--<span class="m3Text2" v-if="length>0">1</span>-->
                <!--</div>-->
            <!--</div>-->





        </div>

     </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
    export default {
        name: "outpatientNotify",
      data()
      {
        return {
          outpatienttitle:"门诊通知",
          flag:false,
          outPatientCenterList:[],
          length:1
        }
      },

      methods:{
        getPatientCenterList(){
          let token=localStorage.getItem('token');
          this.$http.get('/index/Notice/index',{
            params:{
              token,
              page:1,
              limit:100,
              apitype:1,
            }
          }).then(response=>{
            console.log("请求数据开始...")
            console.log(response);
            //this.userList=response.data.result.list;
            this.outPatientCenterList=response.result.list;
            this.total=Number(response.result.total);
            this.id=response.list.id;
            console.log(response);
          })
        },
      },
      components:{
        header1
      },
      created()
      {
        this.getPatientCenterList();
      }
    }
</script>

<style scoped>

 .wrapAllModal
 {
   width:100%;
   height:200px;
 }
  .modalDiv1
  {
    border-top:1px solid rgba(0,0,0,0.08);
    height:69px;
    width:100%;
    background:#fff;
    display:flex;
    flex-direction:row;
    align-items:center;
  }
  .modalDiv1-1
  {
    flex:1;
    height:69px;
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
  }
  .modalDiv1-1 img
  {
    width:44px;
    height:44px;
  }

 .modalDiv1-2
 {
   flex:3;
   height:69px;
   display: flex;
   position:relative;
   flex-direction:column;
   text-align:left;
 }
 h3.spantitle
 {
   display:block;
   font-size:14px;
   margin-top:10px;
 }
 .spancontent
 {
   display:block;
   font-size:12px;
   margin-top:10px;
   letter-spacing:1px;
   width:100%;
   overflow:hidden;
   text-overflow:ellipsis;
   white-space:nowrap;
   color:rgba(0,0,0,0.36);
 }
 .modalDiv1-3
 {
   flex:2;
   height:69px;
   text-align:right;
 }
  .m3Text1
  {
    font-size:12px;
    color:rgba(0,0,0,0.26);
    margin-top:10px;
    display:block;
    margin-right:15px;
  }
  .m3Text2
  {
    font-size:12px;
    width:18px;
    height:18px;
    line-height:18px;
    text-align:center;
    background:red;
    border-radius:50%;
    margin:0 auto;
    color:#fff;
    margin-top:10px;
    margin-right:15px;
    float:right;
    display:block;
  }
</style>
























