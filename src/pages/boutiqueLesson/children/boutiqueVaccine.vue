<template>
  <div class="boutiqueVaccine-container">
    <!-- 疫苗头部 -->
    <div class="boutiqueVaccine-Header">

      <mt-header :title="title" fixed>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

        <!-- 点击搜索 -->
        <div class="boutiqueVaccine-scroll">
            <div class="search">
                <img src="./vaIamages/ic_search_black.png" alt="">
            </div>
           
               <mt-navbar v-model="selected">
                <mt-tab-item id="1" :class="id=='1' && 'is-selected'">疫苗</mt-tab-item>
                <mt-tab-item id="2" :class="id=='2' && 'is-selected'">育儿</mt-tab-item>
                <mt-tab-item id="3" :class="id=='3' && 'is-selected'">微课堂</mt-tab-item>
                <mt-tab-item id="4" :class="id=='4' && 'is-selected'">活动</mt-tab-item>
                <mt-tab-item id="5" :class="id=='5' && 'is-selected'">专题</mt-tab-item>
              </mt-navbar>

            </div>

    </div>
  
    <!-- 点击切换组件 -->
    <transition name="app">
        <component :is="comName"></component>
    </transition>
        
    

  </div>
</template>

<script>
import boutiqueInfo from '@/pages/commonComponent/boutiqueInfo';//疫苗和育儿
import boutiqueMicroClass from '@/pages/boutiqueLesson/children/boutiqueMicroClass';//微课堂
import boutiqueActivity from '@/pages/boutiqueLesson/children/boutiqueActivity';//活动
import boutiqueProject from '@/pages/boutiqueLesson/children/boutiqueProject';//专题

export default {
  name: "boutiqueVaccine",
  data() {
    return {
      selected:'',
      comName:'boutiqueInfo',
      id:'',
      title:''
    }
  },
  mounted(){
    //首页跳转页面
    this.id=this.$route.query.id
    this.UpdatePage(this.$route.query.id)
  },
  methods:{
    UpdatePage(id){
       switch(id){
        case '1':
        this.title="精品课堂-疫苗";
        this.comName="boutiqueInfo";
        break;
        case '2':
        this.comName="boutiqueInfo";
        this.title="精品课堂-疫苗";
        break;
        case '3':
        this.comName="boutiqueMicroClass";
        this.title="微课堂";
        break;
        case '4':
        this.comName="boutiqueActivity";
        this.title="微课堂";
        break;
        case '5':
        this.comName="boutiqueProject";
        this.title="微课堂";
        break;
        default:
        case '1':
        this.comName="boutiqueInfo";
        this.title="精品课堂-疫苗";
      }
    }
  },
  components:{
    boutiqueInfo:boutiqueInfo,
    boutiqueMicroClass:boutiqueMicroClass,
    boutiqueActivity:boutiqueActivity,
    boutiqueProject:boutiqueProject
  },
  watch:{
    // 点击切换页面
    selected(newQuestion,oldQuestion){
      this.UpdatePage(newQuestion)
      this.id=''
    }
  }
};
</script>

<style lang="less">
.app-enter{
  opacity: 0;
  transform: translateX(100px)
}
.app-leave-to{
  opacity: 0;
  transform: translateX(-100px);
  position: absolute;
}
.app-enter-active,
.app-leave-active{
  transition: all 0.5s ease;
}


.boutiqueVaccine-container{
  // width: 100%;
   overflow-x: hidden;
   padding-bottom: 53px;
 .boutiqueVaccine-Header{
    background-color: #fff;
    .mint-header{
      background-color: #fcfcfc;
      color: #000;
      border-bottom: 1px solid #eee;
      z-index: 99;
    }
    .boutiqueVaccine-scroll{
        margin-top: 40px;
        display: flex;
        .search{
          margin-top: 15px;
          margin-left: 15px;
            img{
                width: 15px;
                height: 15px;
            }
        }
      .mint-navbar{
        width: 100%;
        .mint-tab-item{
          width: 20%;
          margin: 0 10px;
          box-sizing: border-box;
        }
        .is-selected{
          border-bottom: 3px solid #00D3C2;
          color:#00D3C2;
        }
      }



    }
 }
 .boutiqueVaccine-info{
    margin-top: 11px;
    background-color: #fff;
 }
}


</style>