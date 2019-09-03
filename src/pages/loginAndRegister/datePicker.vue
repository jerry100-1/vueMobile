<template>
  <div>
    <mt-button @click.native="open('picker')" size="large">{{value | formatDate}}</mt-button>


    <mt-datetime-picker class="picker_show"
                        ref="picker"
                        type="date"
                        v-model="value"
                        :startDate = "startDate"
                        :endDate = "endDate"
    ></mt-datetime-picker>

  </div>
</template>

<script>
  import Vue from 'vue';
  import Mint from 'mint-ui';
  Vue.use(Mint);
  // 按需引入部分组件
  // import { Cell, Checklist } from 'minu-ui';
  // Vue.component(Cell.name, Cell);
  // Vue.component(Checklist.name, Checklist);

  import { DatetimePicker } from 'mint-ui';

  Vue.component(DatetimePicker.name, DatetimePicker);
  import { formatDate } from '@/js/date.js';

  export default {
    filters: {                    //时间转换
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd');
      }
    },
    data() {
      return {
        value: new Date(),          //定义显示时间
        visible: false,
        startDate: new Date(),      //设置开始时间
        endDate: new Date('2019-01-22')   //设置结束时间
      }
    },
    methods: {
      open(picker) {
        this.$refs[picker].open();    //设置开始
      },
    }
  }
</script>

<style scoped>

</style>
