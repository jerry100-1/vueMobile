<template>
  <div class="myBaby-container">

    <mt-header title="我的宝宝">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="myBaby-add">
        <img src="./myBabyImages/ic_my_baby_empty.png" alt="">
        <p>您还没有添加宝宝哦</p>
        <p>添加后可享受便捷的预防接种服务</p>
        <mt-button size="normal">马上添加</mt-button>
    </div>


  </div>
</template>

<script>
export default {
  name: "myBaby"
};
</script>

<style lang="less">
    .myBaby-container{
        width: 100%;
        height: 100%;
        background-color: #fff;
        .mint-header{
            background-color: #FCFCFC;
            color: #000000;
            font-size: 17px;
        }
        .myBaby-add{
            margin: 108px auto 0;
            img{
                height: 115px;
                margin-bottom: 35px;
            }
            p{
                font-size: 13px;
                color: #999999;
                line-height: 23px;
            }
            button{
                margin-top: 20px;
                height: 41px;
                background-color: #00D3C2;
                color: #fff;
                font-size: 15px;
            }
        }
    }
</style>