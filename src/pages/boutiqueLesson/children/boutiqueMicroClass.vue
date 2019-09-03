<template>
  <div class="boutiqueMicroClass-container">
    <div class="boutiqueMicroClass-list">
      <div class="list-top">
        <img src="./miImages/ic_good_class_micro_class_recycler_icon1.png" alt="">
      </div>
      <div class="list-bottom">
          <div class="list-bottom-title">
              <h3>奶睡抱睡,落地醒,黑白颠倒,如何让睡渣宝宝安睡一整晚?</h3>
              <p>
                  <img src="./miImages/ic_good_class_micro_class_bg.png" alt="">
                  &nbsp;&nbsp;
                  <strong>共:<span>14</span>节</strong>
              </p>
          </div>
          <div class="list-bottom-sales">
            <div class="list-bottom-sales-left">已更新完结</div>
            <div class="list-bottom-sales-right">
                <p class="sales-right-top">限时免费&nbsp;<span>0</span>&nbsp;&nbsp;元</p>
                <p class="sales-right-bottom"><span>1.2万</span>人已买&nbsp;| &nbsp;<s>￥<span>108.00</span></s></p>
            </div>
          </div>
      </div>
    </div>

    <div class="boutiqueMicroClass-list">
      <div class="list-top">
        <img src="./miImages/ic_good_class_micro_class_recycler_icon1.png" alt="">
      </div>
      <div class="list-bottom">
          <div class="list-bottom-title">
              <h3>奶睡抱睡,落地醒,黑白颠倒,如何让睡渣宝宝安睡一整晚?</h3>
              <p>
                  <img src="./miImages/ic_good_class_micro_class_bg.png" alt="">
                  &nbsp;&nbsp;
                  <strong>共:<span>14</span>节</strong>
              </p>
          </div>
          <div class="list-bottom-sales">
            <div class="list-bottom-sales-left">已更新完结</div>
            <div class="list-bottom-sales-right">
                <p class="sales-right-top">限时免费&nbsp;<span>0</span>&nbsp;&nbsp;元</p>
                <p class="sales-right-bottom"><span>1.2万</span>人已买&nbsp;| &nbsp;<s>￥<span>108.00</span></s></p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    name:'boutiqueMicroClass',
}
</script>
<style lang="less">
.boutiqueMicroClass-container {
    width: 100%;
  .boutiqueMicroClass-list {
      background-color: #fff;
      padding: 15px 12px 12px 12px;
      margin-top: 11px;
      &:first-of-type{
          margin-top: 2px;
      }
      .list-top{
          img{
              width: 100%;
          }
      }
      .list-bottom{
          padding: 6px;
          .list-bottom-title{
              h3{
                  font-size: 16px;
                  color: #000;
                  text-align: left;
                  font-weight: 700;
              }
              p{
                  font-size: 13px;
                  margin: 11px 0;
                  color:#3B3B4A;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  img{
                      height: 15px;
                      display: inline-block;
                  }
              }
          }
          .list-bottom-sales{
              display: flex;
              justify-content: space-between;
              .list-bottom-sales-left{
                  font-size: 13px;
                  color:#9B9BAC;
              }
              .list-bottom-sales-right{
                  .sales-right-top{
                      font-size: 12px;
                      color: #EA5650;
                      span{
                          font-size: 20px;
                      }
                  }
                  .sales-right-bottom{
                      margin-top: 7px;
                      font-size: 11px;
                      color: #A9A9B9;
                  }
              }
          }
      }
  }
}
</style>
