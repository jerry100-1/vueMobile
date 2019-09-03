<template>
    <div>
      <header1 :title="orderpagetitle">

      </header1>
        <div class="main">
          <div class="kkmmdiv">

                <div class="mmww">
                    <ul class="nav">
                      <li v-for="(item,index) in navList" :key="index" :class = "{active:!(index-menuIndex)}" @click = 'menuShow(index)'>

                        <a href="#">{{item}}</a>

                      </li>
                    </ul>
                </div>

          </div>
          <div v-show = 'menuIndex == 0'>

            <!--<inoculationRecord1>-->

            <!--</inoculationRecord1>-->
            <allorder></allorder>
            <!--此处可以换成子组件-->
          </div>
          <div v-show = 'menuIndex == 1'>
            <!--777777777777777777777777-->
            <!--<inoculationRecord2>-->

            <!--</inoculationRecord2>-->
               <unpay></unpay>
            <!--此处可以换成子组件-->
          </div>
          <div v-show = 'menuIndex == 2'>
            <!--8888888888888888888888-->
            <!--<inoculationRecord2>-->

            <!--</inoculationRecord2>-->
            <havepay></havepay>
            <!--此处可以换成子组件-->
          </div>
          <div v-show = 'menuIndex == 3'>
            <!--999999999999999999999999999-->
            <!--<inoculationRecord2>-->

            <!--</inoculationRecord2>-->
            <!--此处可以换成子组件-->
              <refund></refund>
          </div>
          <div v-show = 'menuIndex == 4'>
            <!--11111111111111111111111-->
            <!--<inoculationRecord2>-->

            <!--</inoculationRecord2>-->
            <!--&lt;!&ndash;此处可以换成子组件&ndash;&gt;-->
               <cancelorder></cancelorder>
          </div>

        </div>



    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
  import allorder from "@/pages/orderpart/allorder.vue"
  import unpay from "@/pages/orderpart/unpay.vue"
  import havepay from "@/pages/orderpart/havepay.vue"
  import refund from "@/pages/orderpart/refund.vue"

  import cancelorder from "@/pages/orderpart/cancelorder.vue"
    export default {
        name: "orderpage",
        data()
        {
          return {
            orderpagetitle:"订单",
            inocuRecordTitle:"接种记录",
            menuIndex:0,
            navList:['全部','待付款','已付款','退款','已取消'],
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
        header1,
        allorder,
        unpay,
        havepay,
        refund,
        cancelorder
      }
    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .kkmmdiv
  {
    width:100%;
    height:40px;
    background:#fff;
    padding-top:8px;
    padding-bottom:8px;
    border-top:1px solid rgba(0,0,0,0.08);
  }
  .mmww
  {
    width:92%;
    height:40px;
    margin:0 auto;

  }
  li a:active{
    color:#fff;
    background:#00D3C2;
  }
  li a:hover{
    color:#fff;
    height:38px;
    background:#00D3C2;
  }
  a:active
  {
    color:#00d3c2;
  }
  a {
    color: #00d3c2;
    display: inline-block;
    height: 40px;
    width: 100%;
  }
  a:nth-child(0)
  {
    color:#fff;
    background:#00D3C2;
  }
  .nav
  {
    width:100%;
    margin:0 auto;
    height:40px;
    border-radius:10px;
    display:flex;
  }
  ul li {
    list-style: none;
    display:inline-block;
    color:#00D3C2;
    font-size:14px;
    line-height:40px;
    color:#00d3c2;
    background:#FFF;
    flex-direction:row;
    flex:1;
    border:1px solid #00D3C2;
    text-align: center;
  }
  ul li:nth-child(1)
  {
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
  }
  ul li:nth-child(5)
  {
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
  }

</style>
























