<template>
    <div class="ProjectArticleInfo-container">
        <div class="ProjectArticleInfo-item">
            <h3>喂饭不是爱,是害! 请让孩子自己好好吃饭</h3>
        <div class="seen">
            <div class="seen-left">
                <img src="./miImages/brghmnui14.png" alt="">
                <span>12345</span>
            </div>
            <p>2019-02-04&nbsp;14:00</p>
        </div>
         <div class="ProjectArticleInfo-img">
            <img src="./miImages/ic_good_class_micro_class_recycler_icon1.png" alt="">
        </div>

            <div>
               <p>尤其是有了孩子以后,家长长辈更是在吃饭这件事上放松警惕</p>
            </div>
        </div>

        <div class="ProjectArticleInfo-like">
            <div class="like-left">
                <img src="./miImages/brghmnui15.png" alt="">
                <div>123123</div>
            </div>
            <div class="like-right">
                <img src="./miImages/brghmnui9.png" alt="">
                <div><p>123123</p></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'ProjectArticleInfo'
}
</script>

<style lang="less">
    .ProjectArticleInfo-container{
        .ProjectArticleInfo-item{
         padding: 18px;
         background-color: #fff;
        h3{
            font-size: 23px;
            color:#272727;
            text-align: left;
            line-height: 25px;
        }
        .seen{
            display:flex;
            justify-content: space-between;
            font-size: 11px;
            color:#929292;
            vertical-align: middle;
            margin: 10px 0;
            .seen-left{
                img{
                    width: 16px;
                    height: 10px;
                    vertical-align: middle;
                }
                span{
                    vertical-align: middle;
                }
            }
        }
        .ProjectArticleInfo-img{
            img{
                width: 100%;
                display: block;
            }
        }
    }
    
    .ProjectArticleInfo-like{
        width: 100%;
        background-color: #fff;
        display: flex;
        padding-bottom: 48px;
        padding-top:10px;
        position: fixed;
        bottom: 0;
        .like-left,.like-right{
            width: 50%;
            position: relative;
            img{
                width:20px ;
            }
            div{
                width: 20px;
                height: 8px;
                position: absolute;
                right: 50%;
                top: -10%;
                transform: translateX(140%);
                font-size: 6px;
                color:#454656; 
            }
        }
    }
    
    }
</style>