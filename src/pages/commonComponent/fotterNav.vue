<template>
  <div class="fotter-nav">
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="./fotterNavImg/nav_expert_answer_select.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="./fotterNavImg/nav_good_class_normal.png">
        精品课堂
      </mt-tab-item>
      <mt-tab-item id="3">
        <img slot="icon" src="./fotterNavImg/nav_expert_answer_normal.png">
        专家问答
      </mt-tab-item>
      <mt-tab-item id="4">
        <img slot="icon" src="./fotterNavImg/nav_person_normal.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:''
    }
  },
  methods:{

  },
}
</script>

<style lang="less">
</style>
 