<template>
  <div class="leaveMessageInfo-container">
    <div class="course-leaveMessage-info">
      <div class="course-leaveMessage-info-item">
        <img src="./miImages/brghmnui12.png" alt>
        <div class="leaveMessage-item-user">
          <div class="leaveMessage-item-user-left">
            <div>
              <h3>王大锤</h3>
              <p>
                <span>21</span>分钟前
              </p>
            </div>
            <p>2019-1-19</p>
          </div>
          <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,尝试给宝宝音乐催眠,效果喜人</p>

          <!-- 点赞和留言 -->
          <div class="like-reply">
            <div>
              <img src="./miImages/brghmnui11.png" alt>
            </div>
            <div>
              <img src="./miImages/brghmnui10.png" alt>
            </div>
          </div>

          <!-- 评论 -->
          <div class="comment">
            <p>
              <span>王小翠</span>&nbsp;回复&nbsp;
              <span>王小翠</span>:&nbsp;&nbsp;很好听很好听的音乐
            </p>
            <p>
              <span>王小翠</span>
              <span></span>:&nbsp;&nbsp;什么样的音乐?
            </p>
          </div>
        </div>
      </div>


      <div class="course-leaveMessage-info-item">
        <img src="./miImages/brghmnui12.png" alt>
        <div class="leaveMessage-item-user">
          <div class="leaveMessage-item-user-left">
            <div>
              <h3>王大锤</h3>
              <p>
                <span>21</span>分钟前
              </p>
            </div>
            <p>2019-1-19</p>
          </div>
          <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,尝试给宝宝音乐催眠,效果喜人</p>

           <!-- 点赞和留言 -->
          <div class="like-reply">
            <div>
              <img src="./miImages/brghmnui11.png" alt>
            </div>
            <div>
              <img src="./miImages/brghmnui10.png" alt>
            </div>
          </div>

        </div>
      </div>

      <div class="course-leaveMessage-info-item">
        <img src="./miImages/brghmnui12.png" alt>
        <div class="leaveMessage-item-user">
          <div class="leaveMessage-item-user-left">
            <div>
              <h3>王大锤</h3>
              <p>
                <span>21</span>分钟前
              </p>
            </div>
            <p>2019-1-19</p>
          </div>
          <p>这里满天飘雪,这里有诗和远方,朋友推荐的客,尝试给宝宝音乐催眠,效果喜人</p>

             <!-- 点赞和留言 -->
          <div class="like-reply">
            <div>
              <img src="./miImages/brghmnui11.png" alt>
            </div>
            <div>
              <img src="./miImages/brghmnui10.png" alt>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </div>
</template>





<script>
export default {
  name: "leaveMessageInfo"
};
</script>


<style lang="less">
.leaveMessageInfo-container {
  background-color: #fff;
  .course-leaveMessage-info {
    padding: 16px;
    .course-leaveMessage-info-item {
      display: flex;
      margin-top: 17px;
      &:first-of-type {
        margin-top: 0;
      }
      img {
        width: 30px;
        height: 30px;
      }
      .leaveMessage-item-user {
        text-align: left;
        margin-left: 10px;
        border-bottom: 1px solid #ccc;
        width: 100%;
        .leaveMessage-item-user-left {
          display: flex;
          justify-content: space-between;
          div {
            h3 {
              font-size: 14px;
              color: #333333;
            }
            p {
              font-size: 11px;
              color: #afafaf;
              line-height: 18px;
            }
          }
          p {
            font-size: 10px;
            color: #999999;
          }
        }

        p {
          font-size: 13px;
          color: #666;
          line-height: 20px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .comment {
          height: 51px;
          background-color: #f0f5f4;
          padding: 10px;
          margin-bottom: 15px;
          p {
            font-size: 12px;
            color: #000;
            span {
              color: #00d3c2;
            }
          }
        }
        .like-reply {
          display: flex;
          justify-content: flex-end;
          div {
            width: 17px;
            height: 16px;
            margin: 8px;
            img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>