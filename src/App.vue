<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view />
    <!--<Tabbar></Tabbar>-->
  </div>
</template>

<script>
 import Tabbar from '@/components/Tabbar'

export default {
  name: 'App',
  created() {
   // this.$router.push("/");
  },
  components:{
    Tabbar
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  .mint-radio-input:checked + .mint-radio-core {
    background-color: #00D3C2;
    border-color:#00D3C2;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height:100%;
  }
  *{
    margin:0;
    padding:0;
  }
   html
   {
     overflow-x: hidden;
   }
   body
   {
      overflow-x: hidden;
   }
  ul{list-style:none}
  a{text-decoration: none;}
  img{vertical-align:top;border:none}
  span.mint-radio-label
  {
    color:#000;
  }
  .clearf:after,
  .clearf:before {
    content: "";
    display: block;
    clear: both;
  }
  /*html*/
  /*{*/
    /*font-size:16px;*/
  /*}*/
  body
  {
    background:#EDF3F5;
    height:100%;
    min-height:100%;
  }
</style>
