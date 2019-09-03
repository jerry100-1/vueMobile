<template>
  <div>
    <h2>vue 动态组件实现tab切换加载不同的小模块</h2>
    <div>
      <a href="javascript:void(0)" @click="tabChange(child1)">第一项</a>
      <a href="javascript:void(0)" @click="tabChange(child2)">第二项</a>
      <a href="javascript:void(0)" @click="tabChange(child3)">第三项</a>
    </div>
    <!--
      动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。
    -->
    <div :is="currentView" active-class="active"></div>
  </div>
</template>

<script>
  import child1 from '@/pages/orderpart/child1';
  import child2 from '@/pages/orderpart/child2';
  import child3 from '@/pages/orderpart/child3';

  export default {
    name:"orderpage3",
    data () {
      return {
        child1: 'child1',
        child2: 'child2',
        child3: 'child3',
        currentView: 'child1' // 默认选中第一项
      };
    },
    methods: {
      tabChange(tabItem) {
        this.currentView = tabItem;
      }
    },
    components: {
      child1,
      child2,
      child3
    }
  };
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .active
  {
    background:red;
  }
  /*li:hover*/
  /*{*/
    /*background:red;*/
  /*}*/
</style>




















