<template>
    <div class="boutiqueProject-container">

        <div class="boutiqueProject-item">
            <img src="./activityandprojectImages/ic_activity_recycler_icon1.png" alt="">
            <div class="explore">
                <p>点我入群听讲座,抢红包,拿福利</p>
                <div class="explore-more">
                    探索更多
                </div>
            </div>
        </div>

        <div class="boutiqueProject-item">
            <img src="./activityandprojectImages/ic_activity_recycler_icon1.png" alt="">
            <div class="explore">
                <p>点我入群听讲座,抢红包,拿福利</p>
                <div class="explore-more">
                    探索更多
                </div>
            </div>
        </div>

        <div class="boutiqueProject-item">
            <img src="./activityandprojectImages/ic_activity_recycler_icon1.png" alt="">
            <div class="explore">
                <p>点我入群听讲座,抢红包,拿福利</p>
                <div class="explore-more">
                    探索更多
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="less">
    .boutiqueProject-container{
        padding: 10px;
        .boutiqueProject-item{
            margin-top: 10px;
            width: 100%;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 1px 0;
            overflow: hidden;
            img{
                width: 100%;
                display: block
            }
            .explore{
                padding: 8px;
                margin: 5px 0;
                text-align: left;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    color: #2A2A2A;
                    font-size: 15px;
                    line-height: 20px;
                    font-weight: 700;
                }
                .explore-more{
                  width: 83px;
                  height: 32px;
                  position: relative;
                  line-height: 32px;
                  text-align: center;
                  background-color: #F1A150;
                  border-radius: 15px;
                  font-size: 14px;
                  color: #fff;
                 }
            }
        }
    }
</style>