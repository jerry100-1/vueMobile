<template>
  <div class="tabberWarp" >
    <div class="warp">
      <Item :txt='item.txt' :key="item.index" :page='item.page' @change='getVal' v-for='item in tabbarDes':sel='selected'>

        <img :src="item.normalImg" slot='normalImg'>
        <img :src="item.activeImg" slot='activeImg'>
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
  import Item from './Item.vue'
  export default{
    name:"Tabbar",
    components:{
      Item
    },
    data:function(){
      return{
        selected:'firstpage',
        tabbarDes:[
          {
            txt:'首页',
            page:'firstpage',
            normalImg:require('@/assets/images/tabimg/nav_expert_answer_normal.png'),
            activeImg:require('@/assets/images/tabimg/nav_expert_answer_select.png')
          },
          {
            txt:'精品课堂',
            page:'boutique',
            normalImg:require('@/assets/images/tabimg/nav_good_class_normal.png'),
            activeImg:require('@/assets/images/tabimg/nav_good_class_select.png')
          },
          {
            txt:'专家问答',
            page:'expertanswer',
            normalImg:require('@/assets/images/tabimg/nav_homepage_normal.png'),
            activeImg:require('@/assets/images/tabimg/nav_homepage_select.png')
          },
          {
            txt:'个人中心',
            page:'personcenter',
            normalImg:require('@/assets/images/tabimg/nav_person_normal.png'),
            activeImg:require('@/assets/images/tabimg/nav_person_select.png')
          }
        ]
      }
    },
    methods:{
      getVal:function(res){
        this.selected = res;
      }
    }
  }
</script>
<style type="text/css">
  .warp{
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0;
  }
  .warp img{
    width: 20px;
    height: 20px;
  }
  .tabberWarp img{
    margin-top: 10px;
    margin-bottom: 5px;

  }
  .tabberWarp{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
  }
</style>
