// 精品课堂详情抽离的公共组件
<template>
    <div class="info-container">
        <div class="info-item">
            <div class="info-item-left">
                <h3>这种专坑宝宝的疫苗,骗钱还可能伤身,别再行当了</h3>
                <div class="info-item-left-bottom">
                    <p>
                        <img src="./boutImages/ic_see_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                    <p>
                        <img src="./boutImages/ic_pinglun_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                </div>
            </div>
            <div class="info-item-right">
                <a href="#">
                    <img src="./boutImages/ic_good_class_yimiao_recycler_ic.png" alt="">
                </a>
            </div>
        </div>
        <div class="info-item">
            <div class="info-item-left">
                <h3>这种专坑宝宝的疫苗,骗钱还可能伤身,别再行当了</h3>
                <div class="info-item-left-bottom">
                    <p>
                        <img src="./boutImages/ic_see_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                    <p>
                        <img src="./boutImages/ic_pinglun_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                </div>
            </div>
            <div class="info-item-right">
                <a href="#">
                    <img src="./boutImages/ic_good_class_yimiao_recycler_ic.png" alt="">
                </a>
            </div>
        </div>
        <div class="info-item">
            <div class="info-item-left">
                <h3>这种专坑宝宝的疫苗,骗钱还可能伤身,别再行当了</h3>
                <div class="info-item-left-bottom">
                    <p>
                        <img src="./boutImages/ic_see_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                    <p>
                        <img src="./boutImages/ic_pinglun_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                </div>
            </div>
            <div class="info-item-right">
                <a href="#">
                    <img src="./boutImages/ic_good_class_yimiao_recycler_ic.png" alt="">
                </a>
            </div>
        </div>
        <div class="info-item">
            <div class="info-item-left">
                <h3>这种专坑宝宝的疫苗,骗钱还可能伤身,别再行当了</h3>
                <div class="info-item-left-bottom">
                    <p>
                        <img src="./boutImages/ic_see_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                    <p>
                        <img src="./boutImages/ic_pinglun_num.png" alt="">&nbsp;
                        <span>1111</span>
                    </p>
                </div>
            </div>
            <div class="info-item-right">
                <a href="#">
                    <img src="./boutImages/ic_good_class_yimiao_recycler_ic.png" alt="">
                </a>
            </div>
        </div>
    </div>
</template>


<style lang="less">
    .info-container{
        padding: 0 16px;
        background-color: #fff;
        .info-item{
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            .info-item-left{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                h3{
                        text-align: left;
                        overflow: hidden;
                        text-overflow:ellipsis;//文本溢出显示省略号
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                }
                .info-item-left-bottom{
                    display: flex;
                    color: #9A9AAC;
                    p{
                        margin-left: 20px;
                        vertical-align:middle;
                        display: flex;
                        align-items: center;
                    img{
                        width: 16px;
                        height: 10px;
                     }
                     span{
                            font-size: 10px;
                        }
                        
                    }
                }
            }
            .info-item-right{
                padding-left: 5px;
                a{
                    display: block;
                    margin:18px 0;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>