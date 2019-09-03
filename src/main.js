// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'//
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI

//引入公共样式
import './styles/common.css'
//rem
// import './vuex/rem'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import { Picker } from 'mint-ui';
import axios from  'axios'
import BMap from 'BMap'
import { DatetimePicker } from 'mint-ui';
import VueAMap from 'vue-amap';
import global from '@/components/apicom/apicom'
Vue.use(VueAMap);

//mint-ui功能引入
import {Tabbar,TabItem,Header,Search,Swipe,SwipeItem,TabContainer,TabContainerItem,Navbar,Actionsheet,Field } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Field.name, Field);


Vue.prototype.api = global.apicom
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;

axios.defaults.baseURL = 'http://ck.hongbao19.net';

//跨域携带cookies
axios.defaults.withCredentials = true;

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

// var instance = axios.create({
//   baseURL: 'http://ck.hongbao19.net'
// });
// instance.defaults.headers.common['Authorization-token'] = store.state.token;

// axios.defaults.headers.common['Authentication-token'] = store.state.token;


// axios 请求拦截器
axios.interceptors.request.use(function (config) {
  //请求携带apitype默认为1
  // config.headers['apitype'] = 1;

  if (store.state.token) {
    // config.headers.common['Authentication-Token']=store.state.token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  response=response.data;
  return response;
}, function (error) {
  //if (error.response.status === 401) {

    //Toast.fail('未登录哦!请您先登录!');
    //return Promise.resolve(error.response)
  //}
  // 对响应错误做点什么
  return Promise.reject(error);
});


//导航守卫
router.beforeEach((to, from, next) => {
  const ms_token =localStorage.getItem('token');
  // console.log('role',role)
  if (!ms_token && to.path == '/Login') {
    next()
  } else if (!ms_token) {
    next('/Login');
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    // role === 'admin' ? next() : next('/403');
  } else if (ms_token && to.path == '/') {
    next('/Login')
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }

})


// 在进入之后
// router.afterEach(route => {
//
// })





VueAMap.initAMapApiLoader({
  key:'e54507b3ad0aae8a21c93156ed98b206'
})
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.use(Mint)
Vue.use(BMap);
// 按需引入部分组件
// import { Cell, Checklist } from 'minu-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
