<template>
    <div class="main">
      <ul>
        <li v-for="(item,index) in navList" :class="{active:index ==num}" @click="tab(index)">
          {{item}}{{index}}
        </li>
      </ul>
      <div class="tabCon">
        <div v-for="(itemCon,index) in tabContents" v-show="index == num">
          {{itemCon}}{{index}}
        </div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "myTab",
      data() {
        return {
          navList: ['tab1', 'tab2', 'tab3'],
          tabContents: ['内容一,内容一内容一内容一内容一内容一内容一内容一内容一内容一', '内容二', '内容三'],
          num: 0
        }
      },
      methods: {
        tab(index) {
          this.num = index
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
