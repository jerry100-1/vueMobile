<template>
  <div class="location-container">
      <div class="location-down">
           <div class="header">
                <p>取消</p>
                <h4>选择地区</h4>
                <div :@click="flag=!flag">确定</div>
            </div>

     <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      </div>
      
    <!-- <p>地址3级联动：{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p> -->
  </div>
</template>

<script>
 import { Picker } from 'mint-ui';
 import myaddress from '../js/address3.json' //引入省市区数据
 export default {
 name: '',
 components: {
  'mt-picker': Picker
 },
 props: {},
 data () {
  return {
  myAddressSlots: [
   {
   flex: 1,
   defaultIndex: 1, 
   values: Object.keys(myaddress), //省份数组
   className: 'slot1',
   textAlign: 'center'
   }, {
   divider: true,
   content: '-',
   className: 'slot2'
   }, {
   flex: 1,
   values: [],
   className: 'slot3',
   textAlign: 'center'
   },
   {
   divider: true,
   content: '-',
   className: 'slot4'
   },
   {
   flex: 1,
   values: [],
   className: 'slot5',
   textAlign: 'center'
   }
  ],
  myAddressProvince:'省',
  myAddressCity:'市',
  myAddresscounty:'区/县',
  }
 },
 created() {
 
 
 },
 methods: {
  onMyAddressChange(picker, values) {
  if(myaddress[values[0]]){ //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
   picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
   picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
   this.myAddressProvince = values[0];
   this.myAddressCity = values[1];
   this.myAddresscounty = values[2];
  }
  },
 },
 mounted(){
  this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
  this.myAddressSlots[0].defaultIndex = 0 
  // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
  //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
  });
 }
 }
</script>


<style lang="less">
.location-container{
    background-color: #fff;
    width: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    .location-down{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
    .header{
        display: flex;
        justify-content: space-between;
        background-color: #E9F2F5;
        height: 40px;
        align-items: center;
        padding: 0 12px;
        font-size: 15px;
        p{
            color: #999999;
        }
        h4{
            color:#333333;
        }
        div{
            color:#00D3C2;
        }
    }
}
}
</style>
