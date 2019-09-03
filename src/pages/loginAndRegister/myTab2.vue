<template>
  <div class="main">
        <ul class="nav">
          <li v-for="(item,index) in navList" :class = "{active:!(index-menuIndex)}" @click = 'menuShow(index)'><a
            href="#">{{item}}</a></li>
        </ul>
        <div v-show = 'menuIndex == 0'>
          <p>子选项1</p>
          <p>子选项1</p>
          <p>子选项1</p>
          <p>子选项1</p>
          <p>子选项1</p>
          <p>子选项1</p>
          <p>子选项1</p>

          <!--此处可以换成子组件--></div>
        <div v-show = 'menuIndex == 1'>
          <p>子选项2</p>
          <p>子选项2</p>
          <p>子选项2</p>
          <p>子选项2</p>
          <p>子选项2</p>
          <p>子选项2</p>
          <p>子选项2</p>
          <!--此处可以换成子组件--></div>
        <div v-show = 'menuIndex == 2'>
          <p>子选项3</p>
          <p>子选项3</p>
          <p>子选项3</p>
          <p>子选项3</p>
          <p>子选项3</p>
          <p>子选项3</p>
          <p>子选项3</p>


          <!--此处可以换成子组件--></div>

    </div>
</template>
<script>
    export default {
        name: "myTab2",
        data () {
          return {
            menuIndex:0,
            navList:['tab1','tab2','tab3'],
          }
        },
      methods:{
        menuShow (index) {
          this.menuIndex = index
          console.log(this.menuIndex)
        }
      }

    }
</script>

<style scoped>

  ul li {
    list-style: none;
    display: inline-block;
    border: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    width: 120px;
    text-align: center;

  }
</style>
