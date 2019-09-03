<template>
  <div class="redSwollen-container">

      <mt-header title="红肿">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

    <div class="redSwollen-item">
        <div class="redSwollen-item-ask">
            <img src="./askOneImages/ic_ask.png" alt="">
            <p>宝宝接种完疫苗，接种处有些红肿，摸起来有一点硬硬的，是怎么回事，需要进行处理吗？</p>
        </div>
        <div class="redSwollen-item-answer">
            <img src="./askOneImages/ic_answer.png" alt="">
            <p>红肿是接种疫苗的正常反应，因为疫苗含有吸附剂。处理方法：接种24小时内冷敷，为疫苗含有吸附剂。处理方法：
                接种24小时内冷敷，为疫苗含有吸附剂。处理方法：接种24小时内冷敷，
                <span>展开
                    <img src="./askdoctorImgs/btyrhn4.png" alt="">
                 </span>

            </p>
        </div>
    </div>

     <div class="redSwollen-item">
        <div class="redSwollen-item-ask">
            <img src="./askOneImages/ic_ask.png" alt="">
            <p>宝宝接种完疫苗，接种处有些红肿，摸起来有一点硬硬的，是怎么回事，需要进行处理吗？</p>
        </div>
        <div class="redSwollen-item-answer">
            <img src="./askOneImages/ic_answer.png" alt="">
            <p>红肿是接种疫苗的正常反应，因为疫苗含有吸附剂。处理方法：
                接种24小时内冷敷，收缩血管，是红肿硬结缩小；接种后局部要保持清洁，衣服不要穿的太紧...
            </p>
        </div>
    </div>

    <div class="redSwollen-item">
        <div class="redSwollen-item-ask">
            <img src="./askOneImages/ic_ask.png" alt="">
            <p>宝宝接种完疫苗，接种处有些红肿，摸起来有一点硬硬的，是怎么回事，需要进行处理吗？</p>
        </div>
        <div class="redSwollen-item-answer">
            <img src="./askOneImages/ic_answer.png" alt="">
            <p>红肿是接种疫苗的正常反应，因为疫苗含有吸附剂。处理方法：
                接种24小时内冷敷，收缩血管，是红肿硬结缩小；接种后局部要保持清洁，衣服不要穿的太紧...
            </p>
        </div>
    </div>



</div>

</template>

<script>
export default {
  name: "redSwollen"
};
</script>

<style lang="less">
    .redSwollen-container{
        .mint-header{
            background-color: #FCFCFC;
            color: #040000;
            font-size: 17px;
            border-bottom: 1px solid #EEEEEE;
        }
        .redSwollen-item{
            background-color: #fff;
            padding: 15px 12px;
            margin-bottom: 7px;
            .redSwollen-item-ask,.redSwollen-item-answer{
                display: flex;
                img{
                    height: 18px;
                    margin-right: 10px;
                    margin-top: 2px;
                }
                p{
                    text-align: left;
                }
            }
            .redSwollen-item-ask>p{
                font-size: 14px;
                color:#333333;
            }
            .redSwollen-item-answer{
                margin-top:15px;
                p{
                    display: inline;
                    font-size: 13px;
                    color:#999999;
                    // overflow: hidden;
                    // text-overflow: ellipsis;
                    // display: -webkit-box;
                    // -webkit-line-clamp: 3;
                    // -webkit-box-orient: vertical;
                    span{
                        color: #4F6270;
                        img{
                            height: 12px;
                            margin-top: 4px;
                        }
                    }
                }
            }
        }
    }
    
</style>
