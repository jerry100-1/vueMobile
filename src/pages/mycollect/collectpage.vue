<template>
  <div>
    <div class="main">
      <div class="leftpar">
        <img src="@/pages/centerimg/h-48.png" alt="">
      </div>
      <ul class="nav">
        <li v-for="(item,index) in navList" :key="index" :class = "{active:!(index-menuIndex)}" @click = 'menuShow(index)'><a
          href="#">{{item}}</a></li>
      </ul>
      <div v-show = 'menuIndex == 0'>
        <articlepage></articlepage>
        <!--此处可以换成子组件-->
      </div>
      <div v-show = 'menuIndex == 1'>

        <videopage></videopage>
        <!--此处可以换成子组件-->
      </div>
    </div>
  </div>
</template>

<script>
  import articlepage from '@/pages/mycollect/articlepage';
  import videopage from '@/pages/mycollect/videopage';
  export default {
    name: "interactmsg",
    data()
    {
      return {
        menuIndex:0,
        navList:['文章','微视频']
      }
    },
    methods:{
      menuShow (index) {
        this.menuIndex = index
        console.log(this.menuIndex)
      }
    },
    components:{
      articlepage,
      videopage
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
  .leftpar
  {
    width:12%;
    height:40px;
    background:#fff;
    display:inline-block;
    float:left;
  }
  .nav
  {
    width:88%;
    height:40px;
    background:green;
    display:inline-block;
    float:right;
  }
  ul li {
    list-style: none;
    display: inline-block;
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
  .leftpar img
  {
    width:9px;
    height:16px;
    margin-top:12px;
  }
</style>












