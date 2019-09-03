<template>
    <div class="lloopp">
      <header1 :title="msgfeedbacktitle" :textDes="textDes" style="background:#00D3C2;"></header1>
      <div class="mainctnff">
        请写下您对传控疫苗的意见, 我们将持续改进优化.....
      </div>
    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
    export default {
        name: "msgfeedback",
        data()
        {
       return{
         msgfeedbacktitle:"信息反馈",
         textDes:"提交"
       }
        },
        components:{
           header1
        }
    }
</script>

<style scoped>
.lloopp  >>> .righttitle
{
  color:#fff;
  letter-spacing:1px;
}
  .lloopp
  {
    height:100%;
    background: #fff;
  }
  .mainctnff
  {
    color:rgba(0,0,0,0.36);
    width:92%;
    margin:15px auto;
    font-size:15px;
  }
  .lloopp  >>> .rightempty
  {
    color:#fff;
    letter-spacing:1px;
  }
</style>
















