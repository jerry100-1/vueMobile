<template>
  <div>

    <router-link tag="div" to="/inoculationAddress2">
        <header1 :title="toggleTitle"></header1>
    </router-link>

    <div class="tAHeader">
      <div class="leftPaf">
        <span>蔡甸区</span>
        <img src="@/pages/homepage/h-38.png" alt="">
      </div>
      <div class="rightPaf">
          <input type="text" class="kkkIn" placeholder="请输入关键字">
          <img src="@/pages/homepage/h-39.png" alt="">
      </div>
    </div>
    <div class="tAHeader1">
      <div class="tAHeader1Left">
          <span>武汉市</span>
          <span>蔡甸区第一社区卫生服务中心</span>
      </div>
      <div class="tAHeader1Right">
          <span>我的接种点</span>
          <img src="@/pages/homepage/h-27.png" alt="">
      </div>
    </div>
    <div class="tAHeader2">
      历史选择
    </div>
    <div class="wrapAllModal">
          <!--模型1-->
          <div class="sambleM">
            <div class="sambleMLeft">
              <h3>蔡甸区第一社区卫生服务中心</h3>
              <div>湖北省-武汉市-蔡甸区-蔡甸大街120号(血防..</div>
            </div>
            <div class="sambleMRight">
              <img src="@/pages/homepage/h-40.png" alt="">
              <span>切换</span>
            </div>
          </div>
          <!--模型1-->
          <div class="sambleM">
            <div class="sambleMLeft">
              <h3>蔡甸区第一社区卫生服务中心</h3>
              <div>湖北省-武汉市-蔡甸区-蔡甸大街120号(血防..</div>
            </div>
            <div class="sambleMRight">
              <img src="@/pages/homepage/h-40.png" alt="">
              <span>切换</span>
            </div>
          </div>
          <!--模型1-->
          <div class="sambleM">
            <div class="sambleMLeft">
              <h3>蔡甸区第一社区卫生服务中心</h3>
              <div>湖北省-武汉市-蔡甸区-蔡甸大街120号(血防..</div>
            </div>
            <div class="sambleMRight">
              <img src="@/pages/homepage/h-40.png" alt="">
              <span>切换</span>
            </div>
          </div>
          <!--模型1-->
          <div class="sambleM">
            <div class="sambleMLeft">
              <h3>蔡甸区第一社区卫生服务中心</h3>
              <div>湖北省-武汉市-蔡甸区-蔡甸大街120号(血防..</div>
            </div>
            <div class="sambleMRight">
              <img src="@/pages/homepage/h-40.png" alt="">
              <span>切换</span>
            </div>
          </div>
          <!--模型1-->
          <div class="sambleM">
            <div class="sambleMLeft">
              <h3>蔡甸区第一社区卫生服务中心</h3>
              <div>湖北省-武汉市-蔡甸区-蔡甸大街120号(血防..</div>
            </div>
            <div class="sambleMRight">
              <img src="@/pages/homepage/h-40.png" alt="">
              <span>切换</span>
            </div>
          </div>
          <!--模型1-->
          <div class="sambleM">
      <div class="sambleMLeft">
        <h3>蔡甸区第一社区卫生服务中心</h3>
        <div>湖北省-武汉市-蔡甸区-蔡甸大街120号(血防..</div>
      </div>
      <div class="sambleMRight">
        <img src="@/pages/homepage/h-40.png" alt="">
        <span>切换</span>
      </div>
    </div>

    </div>


  </div>
</template>

<script>
  import header1 from "@/components/common/header1"

  export default {
    name: "toggleAddress2",
    data()
    {
      return {
        toggleTitle:"切换接种地址"
      }
    },
    components:{
      header1
    }
  }
</script>

<style scoped>
  .tAHeader
  {
    width:100%;
    height:46px;
    background:#fff;
    border-top:1px solid rgba(0,0,0,0.16);
    display:flex;
  }
  .leftPaf
  {
    flex:1;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
  }
  .leftPaf img
  {
    width:13px;
    height:7px;
    margin-left:5px;
  }
  .rightPaf
  {
    flex:3;
    display:flex;
    align-items:center;
    position: relative;
    justify-content: left;
  }
  .kkkIn
  {
    height:30px;
    border-radius:15px;
    border:none;
    background:#f0f4f7;
    text-indent:40px;
    width:92%;
  }
  .rightPaf img
  {
    position:absolute;
    left:15px;
    top:15px;
    width:16px;
    height:16px;
  }
  .tAHeader1 {
    width: 100%;
    height: 45px;
    background: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    display:flex;
  }
  .tAHeader1Left
  {
    flex:5;
    display:flex;
    font-size:14px;
    align-items:center;
    letter-spacing:1px;
    justify-content:center;
  }

  .tAHeader1Right
  {
    flex:2;
    display:flex;
    align-items:center;
    font-size:14px;
    justify-content:center;
  }
  .tAHeader1Right span
  {
    padding:5px 5px;
    display:inline-block;
    font-size:13px;
    border:1px solid #65D2C4;
    color:#65D2C4;
  }
  .tAHeader1Right img
  {
    width:9px;
    height:16px;
    margin-left:10px;
    display:inline-block;
  }
  .tAHeader2
  {
    width:100%;
    height:30px;
    background:#f5f9fc;
    line-height:30px;
    text-align: left;
    font-size:13px;
    color:#7c8Fb5;
    text-indent:15px;
  }
  .sambleM
  {
    width:100%;
    height: 60px;
    border-bottom:1px solid rgba(0,0,0,0.16);
    background:#fff;
    display:flex;
  }
  .sambleMLeft
  {
    flex:5;
    display:flex;
    text-align:left;
    font-size:14px;
    justify-content:center;
    flex-direction:column;
  }
  .sambleMLeft h3
  {
    margin-left:15px;
  }
  .sambleMLeft div
  {
    margin-left:15px;
    width:100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-top:7px;
    font-size:13px;color:rgba(0,0,0,0.36);
  }
  .sambleMRight
  {
    flex:2;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
  }
  .sambleMRight img
  {
    display:block;
    width:20px;
    height:20px;
  }
  .sambleMRight span
  {
    display:block;
    color:#7F92B7;
    font-size:12px;
    letter-spacing:1px;
    margin-top:6px;
  }
</style>

