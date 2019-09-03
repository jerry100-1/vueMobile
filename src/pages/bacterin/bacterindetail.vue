<template>
    <div>
       <header1 :title="bacterindetitle"></header1>

      <div class="main">
        <ul class="nav">
          <li v-for="(item,index) in navList" :key="index" :class = "{active:!(index-menuIndex)}" @click = 'menuShow(index)'><a
            href="#">{{item}}</a></li>
        </ul>
          <div v-show = 'menuIndex == 0'>
              <bacterindescribe></bacterindescribe>
            <!--此处可以换成子组件-->
          </div>
          <div v-show = 'menuIndex == 1'>
              <bacterinnum></bacterinnum>
            <!--此处可以换成子组件-->
          </div>

          <div v-show = 'menuIndex == 2'>
              <!--<bacterinlinks></bacterinlinks>-->

              <bacterinlist></bacterinlist>
            <!--此处可以换成子组件-->
          </div>




      </div>



    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
  import bacterindescribe from "@/pages/bacterin/bacterindescribe"
  import bacterinnum from "@/pages/bacterin/bacterinnum"
  import bacterinlinks from "@/pages/bacterin/bacterinlinks"
  import bacterinlist from "@/pages/bacterin/bacterinlist"
    export default {
        name: "bacterindetail",
        data()
        {
          return {
            bacterindetitle:"疫苗详情",
            menuIndex:0,
            navList:['疫苗说明','剂次','相关疫苗']
          }
        },
        methods:{
          menuShow (index) {
            this.menuIndex = index
            console.log(this.menuIndex)
          }
        },
        components:
        {
          header1,
          bacterindescribe,
          bacterinnum,
          bacterinlinks,
          bacterinlist,
        }

    }
</script>

<style scoped>
  a
  {
    color:#000;
    padding-bottom:5px;
  }
 .main
 {
   background:#fff;
 }
  a:active
  {
    color:#00d3c2;
    padding-bottom:5px;
  }
  ul.nav li {
    list-style: none;
    display: inline-block;
    border-top: 1px solid rgba(0,0,0,0.08);
    border-bottom:1px solid rgba(0,0,0,0.08);
    height: 40px;
    line-height:40px;
    width:33.3%;
    color:#00D3C2;
    background:#FFF;
    flex-direction:row;
    flex:1;
    text-align: center;
  }

</style>
