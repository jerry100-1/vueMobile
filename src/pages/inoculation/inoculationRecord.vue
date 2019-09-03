<template>
  <div>
     <router-link tag="div" to="/firstpage">

        <header1 :title="inocuRecordTitle">

        </header1>


     </router-link>
    <div class="main">
      <ul class="nav">
        <li v-for="(item,index) in navList" :key="index" :class = "{active:!(index-menuIndex)}" @click = 'menuShow(index)'><a
          href="#">{{item}}</a></li>
      </ul>
      <div v-show = 'menuIndex == 0'>
        <inoculationRecord1>

        </inoculationRecord1>
        <!--此处可以换成子组件--></div>
      <div v-show = 'menuIndex == 1'>
        <inoculationRecord2>

        </inoculationRecord2>
        <!--此处可以换成子组件--></div>
    </div>

  </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
  import inoculationRecord1 from "@/pages/inoculation/inoculationRecord1"
  import inoculationRecord2 from "@/pages/inoculation/inoculationRecord2"
    export default {
        name: "inoculationRecord",
        data()
        {
         return {
           inocuRecordTitle:"接种记录",
           menuIndex:0,
           navList:['接种本','接种参考'],
           active2:"active2",
           active:"active"
         }
        },
        methods:{
          menuShow (index) {
            this.menuIndex = index
            console.log(this.menuIndex)
          }
        },
       components:{
         inoculationRecord1,
         inoculationRecord2,
         header1
       }

    }
</script>

<style scoped>

   a
   {
     color:#000;
     padding-bottom:5px;
   }
  .active2
  {
    color:#00d3c2;
  }
  .active
  {
    color:#00d3c2;
  }
   a:active
   {
     color:#00d3c2;
     padding-bottom:5px;
   }
  ul li {
    list-style: none;
    display: inline-block;
    border-top: 1px solid rgba(0,0,0,0.08);
    border-bottom:1px solid rgba(0,0,0,0.08);
    height: 40px;
    line-height:40px;
    width:50%;
    color:#00D3C2;
    background:#FFF;
    flex-direction:row;
    flex:1;
    text-align: center;
  }
   li a:active{
     color:#00d3c2;

   }
   li a:hover{
     color:#00d3c2;
     height:38px;
     border-bottom:1px solid #00d3c2
   }
   a:active
   {
     color:#00d3c2;
   }

</style>
