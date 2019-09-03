<template>
    <div>
         <header1 :title="orderpage2title"></header1>

      <div class="fftitdc">
        <div class="headdivdd">
               <li class="kkli" @click="tabChange(child1)">全部</li>
               <li class="kkli" @click="tabChange(child2)">待付款</li>
               <li class="kkli" @click="tabChange(child3)">已付款</li>
               <li class="kkli" @click="tabChange(child4)">退款</li>
               <li class="kkli" @click="tabChange(child5)">已取消</li>
         </div>

        <div  :is="currentView" :class="{active:isActive}"></div>

      </div>

    </div>
</template>

<script>
  import header1 from "@/components/common/header1.vue"
  import child1 from '@/pages/orderpart/child1';
  import child2 from '@/pages/orderpart/child2';
  import child3 from '@/pages/orderpart/child3';
  import child4 from '@/pages/orderpart/child4';
  import child5 from '@/pages/orderpart/child5';
    export default {
        name: "orderpage2",
        data()
        {
          return{
            orderpage2title:"订单",
            child1: 'child1',
            child2: 'child2',
            child3: 'child3',
            child4: 'child4',
            child5: 'child5',
            currentView: 'child1', // 默认选中第一项
            active:"active"
          }
        },
        components:
        {
          header1,
          child1,
          child2,
          child3,
          child4,
          child5
        },
        methods: {
          tabChange(tabItem) {
            this.currentView = tabItem;
          }
        }
    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .isActive
  {
    background:red;
  }
  .active
  {
    background:red;
  }
  .headdivdd
  {
    width:94%;
    height:30px;
    /*background:red;*/
    margin:0 auto;
    background:#fff;
    display:flex;
    flex-direction:row;
    align-items:center;
    border-radius:3px;
    border:1px solid #00D3C2;
  }
  .headdivdd li{
    list-style-type:none;
    flex:1;
    color:#00D3C2;
    font-size:14px;
    letter-spacing:1px;
    height:30px;
    line-height:30px;
  }
  .fftitdc
  {
    width:100%;
    height:32px;
    background:#fff;
    padding-top:8px;
    padding-bottom:8px;
    border-top:1px solid rgba(0,0,0,0.08);
  }
  .headdivdd li:nth-child(1)
  {
    background:#00d3c2;
    color:#fff;
  }
  .headdivdd li
  {
    border-right:1px solid #00D3C2;
  }
</style>





















