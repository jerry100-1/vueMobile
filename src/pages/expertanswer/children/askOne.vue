<template>
  <div class="askOne-container">
    <!-- 提问头部 -->
    <div class="askOne-header">
      <mt-header title="马冬梅医生">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button  slot="right">提交</mt-button>
      </mt-header>
    </div>
    <!-- 提示框 -->
    <div class="askOne-hint">
        <p>仅限育儿相关资讯，不作诊断，治疗或用药依据</p>
    </div>

    <!-- 快速查看 -->
    <div class="askOne-quickLook">
        <h2>点击关键词快速查看答案</h2>
        <div class="askOne-quickLook-shortcut"> 
            <mt-button plain>红肿</mt-button>
            <mt-button plain>发烧</mt-button>
            <mt-button plain>腹泻</mt-button>
            <mt-button plain>缺钙</mt-button>
            <mt-button plain>辅食</mt-button>
            <mt-button plain>呕吐</mt-button>
            <mt-button plain>大便发黑</mt-button>
        </div>
    </div>

    <!-- 为谁提问 -->

    <div class="askOne-whom">
        <mt-header title="">
            <router-link to="/" slot="left">
                <mt-button>为谁提问？</mt-button>
            </router-link>
            <mt-button slot="right">
                <img src="./askOneImages/默认头像.png" alt="">
                <span>186****6383</span>
                <img src="./askOneImages/ic_arrow_right_gray.png" alt="">
            </mt-button>
        </mt-header>

        <div class="askOne-content">
                <mt-field placeholder="请详细描述宝宝症状及持续时间、疫苗名称、方便医生分析" 
                type="textarea" 
                rows="5" 
                v-model="introduction"
                maxlength="120"
                >
                </mt-field>

                
        </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "askOne",
  data () {
      return {
        //   提问内容
          introduction:''
      }
  },
  methods:{

  }
};
</script>

<style lang="less">
    .askOne-container{
        .askOne-header{
            background-color: #FCFCFC;
            width: 100%;
            .mint-header{
                background-color: #fff;
                color: #000;
                .mint-button-text{
                    color:#00D3C2;
                }
            }
        }
        .askOne-hint{
            width: 100%;
            padding: 12px;
            p{
                font-size: 12px;
                color: #868E99;
                text-align: left;
            }
        }
        .askOne-quickLook{
            // width: 100%;
            background-color: #fff;
            padding:12px 12px 0 12px;
            h2{
                color: #333333;
                font-size: 15px;
                text-align: left;
                margin-bottom: 12px;
            }
            .askOne-quickLook-shortcut{
                text-align: left;
                display: flex;
                flex-wrap: wrap;
                button{
                    height: 27px;
                    margin-bottom: 14px;
                    margin-right:10px;
                    border: 1px solid #00D3C2;
                    color:#00D3C2;
                    font-size: 13px;
                    border-radius: 0;
                }
            }
        }
        .askOne-whom{
            margin-top: 7px;
            .mint-header{
                background-color: #fff;
                color: #333333;
                font-size: 15px;
                border-bottom: 1px solid #E8E8E8;
                .is-right{
                    button{
                        vertical-align: middle;                    
                        img:first-of-type{
                            height: 30px;
                            margin-top:5px;
                        }
                        span{
                           line-height: 40px;
                        }
                        img:last-of-type{
                            height: 12px;
                            margin-top:14px;
                            margin-left: 5px;
                        }
                    }
                }
            }
            .askOne-content{
                textarea{
                    resize: none;
                    &::placeholder{
                        font-size: 15px;
                        color:#BFCAD8;
                    }
                }
            }
        }
    }
</style>