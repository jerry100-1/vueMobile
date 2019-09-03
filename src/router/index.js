import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/pages/loginAndRegister/Register'
import Login from '@/pages/loginAndRegister/Login'
import setPassword from '@/pages/loginAndRegister/setPassword'
import forgetPassword from '@/pages/loginAndRegister/forgetPassword'
import resetPassword from '@/pages/loginAndRegister/resetPassword'
import inputCom from '@/pages/loginAndRegister/inputCom'

import askDoctor from '@/pages/expertanswer/children/askDoctor' //引入专家问答问医生
import askParticulars from '@/pages/expertanswer/children/askParticulars' //引入专家问答提问详情
import askOne from '@/pages/expertanswer/children/askOne' //引入专家问答提问页面
import askWho from '@/pages/expertanswer/children/askWho' //引入专家问答为谁提问页面
import redSwollen from '@/pages/expertanswer/children/redSwollen' //引入专家问答红肿页面
import personalData from '@/pages/personcenter/children/personalData' //个人中心个人资料页面
import myBaby from '@/pages/personcenter/children/myBaby' //个人中心我的宝宝页面

import registerSuccess from '@/pages/loginAndRegister/registerSuccess'
import supplementPage from '@/pages/loginAndRegister/supplementPage'
import threeAddress from '@/pages/loginAndRegister/threeAddress'
import radio from '@/pages/loginAndRegister/radio' //
import datePicker from '@/pages/loginAndRegister/datePicker'
import minDate from '@/pages/loginAndRegister/minDate' //
import mintuiCom from '@/pages/loginAndRegister/mintuiCom' //
// import inputCom from '@/pages/loginAndRegister/inputCom'
import firstpage from '@/pages/firstpage/firstpage' //
import expertanswer from '@/pages/expertanswer/expertanswer' //
import personcenter from '@/pages/personcenter/personcenter' //
import addbaby from '@/pages/baby/addbaby'
import threeAddressText from '@/pages/loginAndRegister/threeAddressText'
import myAddress from '@/pages/loginAndRegister/myAddress'
import outpatientNotify from '@/pages/outpatient/outpatientNotify'
import inoculationAddress from '@/pages/inoculation/inoculationAddress'
import inoculationAddress2 from '@/pages/inoculation/inoculationAddress2'
import patientdetail from '@/pages/outpatient/patientdetail'
import modifyinoculation from '@/pages/inoculation/modifyinoculation'
import mapTest from '@/pages/loginAndRegister/mapTest'
import mapTest2 from '@/pages/loginAndRegister/mapTest2'
import modifyHealthcare from '@/pages/inoculation/modifyHealthcare.vue'
import boutique from '@/pages/boutiqueLesson/boutique' //引入精品课堂首页
import boutiqueVaccine from '@/pages/boutiqueLesson/children/boutiqueVaccine' //引入精品课堂疫苗子路由
import boutiqueMicroClass from '@/pages/boutiqueLesson/children/boutiqueMicroClass' //引入精品课堂微课堂子路由
import MicroClassInfo from '@/pages/boutiqueLesson/children/MicroClassInfo' //引入精品课堂微课堂详情子路由
import boutiqueActivity from '@/pages/boutiqueLesson/children/boutiqueActivity' //引入精品课堂活动子路由
import boutiqueProject from '@/pages/boutiqueLesson/children/boutiqueProject' //引入精品课堂专题子路由
import ProjectArticleInfo from '@/pages/boutiqueLesson/children/ProjectArticleInfo' //引入精品课堂文章详情子路由
import leaveMessageInfo from '@/pages/boutiqueLesson/children/leaveMessageInfo' //引入精品课堂文章留言子路由
import boutiqueInfo from '@/pages/commonComponent/boutiqueInfo' //引入精品课堂疫苗和育儿公共组件boutiqueInfo
import toggleAddress from '@/pages/inoculation/toggleAddress'
import toggleAddress2 from '@/pages/inoculation/toggleAddress2'
import inoculationRecord from '@/pages/inoculation/inoculationRecord'
import myTab from '@/pages/loginAndRegister/myTab';
import myTab2 from '@/pages/loginAndRegister/myTab2';
import bacterindetail from '@/pages/bacterin/bacterindetail';
import modifyPhysicalExamine from '@/pages/physicalExamine/modifyPhysicalExamine';
import orderbacterininoculation from '@/pages/inoculation/orderbacterininoculation';
import cancelorderbacterin from '@/pages/inoculation/cancelorderbacterin';
import cancelorderinoculation from '@/pages/inoculation/cancelorderinoculation';
import mybaby from '@/pages/personcenter/mybaby';
import mybaby2 from '@/pages/personcenter/mybaby2';
import leftRemove from '@/pages/loginAndRegister/leftRemove';
import leftRemove2 from '@/pages/loginAndRegister/leftRemove2';
import orderpage from '@/pages/orderpart/orderpage';
import orderpage2 from '@/pages/orderpart/orderpage2';
import orderpage3 from '@/pages/orderpart/orderpage3';
import orderdetail1 from '@/pages/orderpart/orderdetail1';
import orderdetail2 from '@/pages/orderpart/orderdetail2';
import orderdetail3 from '@/pages/orderpart/orderdetail3';
import orderdetail4 from '@/pages/orderpart/orderdetail4';

import interactmsg from '@/pages/interact/interactmsg';
import remindset from '@/pages/setpart/remindset';
import allsetpage from '@/pages/setpart/allsetpage';

import allorder from '@/pages/orderpart/allorder';
import editbaby from '@/pages/baby/editbaby';
import setmypassword from '@/pages/setpart/setmypassword';
import msgfeedback from '@/pages/setpart/msgfeedback';
import collectpage from '@/pages/mycollect/collectpage';
import innoculationFetch from '@/pages/inoculation/innoculationFetch';

import testElementui from '@/pages/loginAndRegister/testElementui';





Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/firstpage',
    // },
    //  {
    //    path: '/',
    //    redirect:'/Login'
    //  },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/threeAddressText',
      name: 'threeAddressText',
      component: threeAddressText
    },
    {
      path: '/setPassword',
      name: 'setPassword',
      component: setPassword
    },
    {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
    },
    {
      path: '/registerSuccess',
      name: 'registerSuccess',
      component: registerSuccess
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: datePicker
    },
    //门诊通知
    {
      path: '/outpatientNotify',
      name: 'outpatientNotify',
      component: outpatientNotify
    },
    {
      path: '/patientdetail',
      name: 'patientdetail',
      component: patientdetail
    },
    //接种部分
    {
      path: '/modifyinoculation',
      name: 'modifyinoculation',
      component: modifyinoculation
    },

    {
      path: '/modifyHealthcare',
      name: 'modifyHealthcare',
      component: modifyHealthcare
    },
    {
      path: '/inoculationAddress',
      name: 'inoculationAddress',
      component: inoculationAddress
    },
    {
      path: '/myAddress',
      name: 'myAddress',
      component: myAddress
    },
    {
      path: '/minDate',
      name: 'minDate',
      component: minDate
    },
    {
      path: '/threeAddress',
      name:'threeAddress',
      component:threeAddress
    },
    {
      path: '/inputCom',
      name:'inputCom',
      component:inputCom
    },
    {
      path: '/mapTest',
      name:'mapTest',
      component:mapTest
    },
    {
      path: '/mapTest2',
      name:'mapTest2',
      component:mapTest2
    },
    {
      path: '/threeAddress',
      name: 'threeAddress',
      component: threeAddress
    },
    {
      path: '/firstpage',
      name:'firstpage',
      component:firstpage,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/expertanswer',
      name:'expertanswer',
      component:expertanswer,
      meta: {
        title: '专家问答',
      },
    },
    {
      path: '/boutique',
      name:'boutique',
      component:boutique,
      meta:{
        title:'精品课堂',
      },
    },
    {
      path: '/personcenter',
      name:'personcenter',
      component:personcenter,
      meta:{
        title:'个人中心',
      }
    },
    {
      path: '/addbaby',
      name:'addbaby',
      component:addbaby,
      meta:{
        title:'添加宝宝',
      }
    },
    {
      path: '/boutique',
      name:'boutique',
      component:boutique, //精品课堂首页
    },
    //精品课堂疫苗
    {
      path:'/boutiqueVaccine',
      name:'boutiqueVaccine',
      component:boutiqueVaccine,
      children:[
        // 微课堂
        {
          path:'MicroClassInfo',
          component:MicroClassInfo
        },
        // 疫苗和育儿
        {
          path:'boutiqueInfo',
          component:boutiqueInfo
        }
      ]
    },
    {
      path:'/boutiqueInfo',
      name:'boutiqueInfo',
      component:boutiqueInfo //精品课堂微课堂
    },
    {
      path:'/boutiqueMicroClass',
      name:'boutiqueMicroClass',
      component:boutiqueMicroClass //精品课堂微课堂
    },
    {
      path:'/boutiqueActivity',
      name:'boutiqueActivity',
      component:boutiqueActivity //精品课堂微课堂活动
    },
    {
      path:'/boutiqueProject',
      name:'boutiqueProject',
      component:boutiqueProject //精品课堂微课堂专题
    },

    {
      path:'/ProjectArticleInfo',
      name:'ProjectArticleInfo',
      component:ProjectArticleInfo //精品课堂微课堂文章
    },
    {
      path:'/leaveMessageInfo',
      name:'leaveMessageInfo',
      component:leaveMessageInfo //精品课堂微课堂文章留言
    },
    {
      path:'/MicroClassInfo',
      name:'MicroClassInfo',
      component:MicroClassInfo //精品课堂微课堂文章详情
    },
    {
      path:'/askDoctor/:id',
      name:'askDoctor',
      component:askDoctor //专家问答问医生
    },
    {
      path:'/askParticulars',
      name:'askParticulars',
      component:askParticulars //专家问答提问详情
    },
    {
      path:'/askOne',
      name:'askOne',
      component:askOne //专家问答提问页面
    },
    {
      path:'/askWho',
      name:'askWho',
      component:askWho //专家问答为谁提问页面
    },
    {
      path:'/redSwollen',
      name:'redSwollen',
      component:redSwollen //专家问答红肿页面
    },
    {
      path:'/personalData',
      name:'personalData',
      component:personalData //个人中心个人资料页面
    },
    {
      path:'/myBaby',
      name:'myBaby',
      component:myBaby //个人中心个我的宝宝页面
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/threeAddressText',
      name: 'threeAddressText',
      component: threeAddressText
    },
    {
      path: '/setPassword',
      name: 'setPassword',
      component: setPassword
    },
    {
      path: '/modifyPhysicalExamine',
      name: 'modifyPhysicalExamine',
      component: modifyPhysicalExamine
    },
    {
      path: '/cancelorderbacterin',
      name: 'cancelorderbacterin',
      component: cancelorderbacterin
    },
    {
      path:'/innoculationFetch',
      name:"innoculationFetch",
      component:innoculationFetch
    },
    {
      path:"/inoculationAddress2",
      name:"inoculationAddress2",
      component:inoculationAddress2
    },

    {
      path: '/interactmsg',
      name: 'interactmsg',
      component: interactmsg
    },

    {
      path: '/setmypassword',
      name: 'setmypassword',
      component: setmypassword
    },
    {
      path: '/allsetpage',
      name: 'allsetpage',
      component: allsetpage
    },
    {
      path: '/myTab',
      name: 'myTab',
      component: myTab
    },
    {
      path: '/editbaby',
      name: 'editbaby',
      component: editbaby
    },
    {
      path: '/allorder',
      name: 'allorder',
      component: allorder
    },
    {
      path: '/orderdetail1',
      name: 'orderdetail1',
      component: orderdetail1
    },
    {
      path: '/orderdetail2',
      name: 'orderdetail2',
      component: orderdetail2
    },
    {
      path: '/orderdetail3',
      name: 'orderdetail3',
      component: orderdetail3
    },
    {
      path: '/orderdetail4',
      name: 'orderdetail4',
      component: orderdetail4
    },
    {
      path: '/testElementui',
      name: 'testElementui',
      component: testElementui
    },
    {
      path: '/registerSuccess',
      name: 'registerSuccess',
      component: registerSuccess
    },
    {
      path: '/collectpage',
      name: 'collectpage',
      component: collectpage
    },
    {
      path: '/msgfeedback',
      name: 'msgfeedback',
      component: msgfeedback
    },
    // 预约疫苗接种
    {
      path: '/orderbacterininoculation',
      name: 'orderbacterininoculation',
      component: orderbacterininoculation
    },
    {
      path: '/supplementPage',
      name: 'supplementPage',
      component: supplementPage
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/mybaby2',
      name: 'mybaby2',
      component: mybaby2
    },
    {
      path: '/remindset',
      name: 'remindset',
      component: remindset
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: datePicker
    },
    {
      path: '/datePicker',
      name: 'datePicker',
      component: datePicker
    },
    {
      path: '/outpatientNotify',
      name: 'outpatientNotify',
      component: outpatientNotify
    },
    {
      path: '/patientdetail',
      name: 'patientdetail',
      component: patientdetail
    },
    {
      path: '/orderpage',
      name: 'orderpage',
      component: orderpage
    },
    {
      path: '/orderpage2',
      name: 'orderpage2',
      component: orderpage2
    },
    {
      path:"/toggleAddress2",
      name:"toggleAddress2",
      component:toggleAddress2
    },
    {
      path: '/mybaby',
      name: 'mybaby',
      component: mybaby
    },
    {
      path: '/orderpage3',
      name: 'orderpage3',
      component: orderpage3
    },
    {
      path: '/modifyinoculation',
      name: 'modifyinoculation',
      component: modifyinoculation
    },
    {
      path: '/inoculationRecord',
      name: 'inoculationRecord',
      component:inoculationRecord
    },
    {
      path: '/bacterindetail',
      name: 'bacterindetail',
      component:bacterindetail
    },
    {
      path: '/myTab2',
      name: 'myTab2',
      component: myTab2
    },
    {
      path: '/modifyHealthcare',
      name: 'modifyHealthcare',
      component: modifyHealthcare
    },
    {
      path: '/inoculationAddress',
      name: 'inoculationAddress',
      component: inoculationAddress
    },
    {
      path: '/leftRemove',
      name: 'leftRemove',
      component: leftRemove
    },

    {
      path:'/leftRemove2',
      name:'leftRemove2',
      component:leftRemove2
    },
    {
      path: '/cancelorderinoculation',
      name: 'cancelorderinoculation',
      component: cancelorderinoculation
    },
    {
      path: '/myAddress',
      name: 'myAddress',
      component: myAddress
    },
    {
      path: '/minDate',
      name: 'minDate',
      component: minDate
    },
    {
      path: '/mintuiCom',
      name:'mintuiCom',
      component:mintuiCom
    },
    {
      path: '/threeAddress',
      name:'threeAddress',
      component:threeAddress
    },
    // {
    //   path: '/inputCom',
    //   name:'inputCom',
    //   component:inputCom
    // },
    {
      path: '/mapTest',
      name:'mapTest',
      component:mapTest
    },
    {
      path: '/mapTest2',
      name:'mapTest2',
      component:mapTest2
    },
    {
      path: '/threeAddress',
      name: 'threeAddress',
      component: threeAddress
    },
    {
      path: '/toggleAddress',
      name:'toggleAddress',
      component:toggleAddress
    },
    {
      path: '/firstpage',
      name:'firstpage',
      component:firstpage,
      meta: {
        title: '首页',
      },
    },
    {
      path: '/expertanswer',
      name:'expertanswer',
      component:expertanswer,
      meta: {
        title: '专家问答',
      },
    },
    {
      path: '/boutique',
      name:'boutique',
      component:boutique,
      meta:{
        title:'精品课堂',
      },
    },
    {
      path: '/personcenter',
      name:'personcenter',
      component:personcenter,
      meta:{
        title:'个人中心',
      }
    },
    {
      path: '/boutique',
      name:'boutique',
      component:boutique, //精品课堂首页
    },
    //精品课堂疫苗
    {
      path:'/boutiqueVaccine',
      name:'boutiqueVaccine',
      component:boutiqueVaccine,
      children:[
        // 微课堂
        // {
        //   path:'MicroClassInfo',
        //   component:MicroClassInfo
        // },
        // 疫苗和育儿
        // {
        //   path:'boutiqueInfo',
        //   component:boutiqueInfo
        // }
      ]
    },
    {
      path:'/boutiqueInfo',
      name:'boutiqueInfo',
      component:boutiqueInfo //精品课堂微课堂
    },
    {
      path:'/boutiqueMicroClass',
      name:'boutiqueMicroClass',
      component:boutiqueMicroClass //精品课堂微课堂
    },
    {
      path:'/boutiqueActivity',
      name:'boutiqueActivity',
      component:boutiqueActivity //精品课堂微课堂活动
    },
    {
      path:'/boutiqueProject',
      name:'boutiqueProject',
      component:boutiqueProject //精品课堂微课堂专题
    },

    {
      path:'/ProjectArticleInfo',
      name:'ProjectArticleInfo',
      component:ProjectArticleInfo //精品课堂微课堂文章详情
    },
    {
      path:'/leaveMessageInfo',
      name:'leaveMessageInfo',
      component:leaveMessageInfo //精品课堂微课堂文章留言
    },
    {
      path:'/MicroClassInfo',
      name:'MicroClassInfo',
      component:MicroClassInfo //精品课堂微课堂文章留言
    }


























  ]
})
