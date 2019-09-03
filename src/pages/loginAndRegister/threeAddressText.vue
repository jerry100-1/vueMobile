<template>
   <div>
    <button @click="showAddress()">点击显示三级联动菜单</button>

     <mt-picker v-if="flag"  style="z-index:2000;position:fixed;bottom:60px;" :slots="slots" value-key="name" @change="onValuesChange"></mt-picker>
      <div class="wrapmode" v-if="flag"></div>
   </div>
</template>

<script>
  import { Picker } from 'mint-ui';
  import myaddress from '@/js/pca-code.json'     //引入省市区数据
  export default {
    data () {
      return {
        msg: '创建地址',
        flag:false ,
        slots: [
          {
            flex: 1,
            values: myaddress,
            defaultIndex: 10,
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: myaddress[0].children,
            defaultIndex: 0,
            className: 'slot3',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot4'
          }, {
            flex: 1,
            values: myaddress[0].children[0].children,
            defaultIndex: 0,
            className: 'slot5',
            textAlign: 'center'
          }
        ]
      }
    },
    methods: {
      showAddress()
      {
        this.flag=true
      },
      onValuesChange (picker, values) {
        console.log(values)
        if (!values[0]) {
          this.$nextTick(() => {
            if (this.myAdress) {
              // 赋默认值
            } else {
              picker.setValues([myaddress[0], myaddress[0].children[0], myaddress[0].children[0].children[0]])
            }
          })
        } else {
          picker.setSlotValues(1, values[0].children)
          let town = []
          if (values[1]) {
            town = values[1].children
          }
          picker.setSlotValues(2, town)
        }
      }
    }
  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .wrapmode
  {
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.26);
    opacity:0.4;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;

  }




















</style>
