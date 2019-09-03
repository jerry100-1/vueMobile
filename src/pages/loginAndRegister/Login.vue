<template>
  <div id="loginWrap1">
    <div class="logPart1">
      <img src="./loimages/ic_login_logo.png" alt="">
    </div>
    <div class="logPart2">
      <div class="phoneNum">
        <img src="./loimages/ic_phone_num.png" alt="" class="phoneNumImg">
        <input type="text" placeholder="请输入手机号" name="phoneNum" class="phoneNumInp" v-model="mobile">
      </div>

      <div class="phoneNum phonePwd">
        <img src="./loimages/ic_password.png" alt="" class="phoneNumImg">
        <input type="text" placeholder="请输入密码" name="phoneNum" class="phoneNumInp" v-model="pwd">
      </div>

    </div>

    <button class="logPart3" @click="usersLogin">
      登录
    </button>


    <div class="logPart4">
      <router-link to="/Register" tag="div" class="blok1">立即注册</router-link>
      <div class="blok2"></div>
      <router-link to="/resetPassword" tag="div" class="blok3">忘记密码?</router-link>
    </div>




  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    name: 'Login',
    data () {
      return {
        mobile:'',
        pwd:''
      }
    },
    methods:{
      usersLogin(){
        let mobile=parseInt(this.mobile);
        let pwd=this.pwd;
        if(!(/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(mobile))) return Toast('请输入正确的手机号');
        if(pwd.trim()=='')  return  Toast('请输入密码');
        if(!/^\d{6,}$/.test(pwd)) return  Toast('密码必须6位以上');

        this.axios.post('/index/member/login',{
          mobile:mobile,
          pwd:pwd
        }).then(response=>{
          let userInfo = response.result
          if(response.status !== "1") return Toast(response.message)
          Toast(response.result.msg)
          this.$store.commit("setUserInfoAndToken", userInfo);

          let token=response.result.token;
          alert(token);
          let userinfo=JSON.stringify(response.result.userinfo);

          localStorage.setItem('token',token);
          localStorage.setItem('userinfo',userinfo)


          this.$router.push('/firstpage');
          // setTimeout(()=>{
          //   this.$router.push('/firstpage')
          // },1000)


        })


      }
    },
    created(){

    }


  }
</script>

<style scoped>

  body
  {
    background-color:#20C7B3;
    min-height:667px;
  }
  #loginWrap1
  {
    /*min-height:;*/
    min-height:667px;
    background-color:#20C7B3;
    background-image:url("./loimages/ic_login_bg.png");
    background-repeat:no-repeat;
    background-size:cover;
  }
  #loginWrap1>button{
    outline: none;
  }
  .logPart1
  {
    text-align:center;
    display:flex;
    justify-content:center;
  }
  .logPart1 img
  {
    /*width:1.47rem;!*147px*!*/
    width:74px;
    height:74px;
    /*height:1.47rem;;!*147px*!*/
    /*margin-top:0.98rem;*/
    margin-top:98px;
  }
  .logPart2
  {
    width:272px;
    height:auto;
    margin-top:60px;
    margin:60px auto 0 auto;
  }
  ::-webkit-input-placeholder { /* WebKit browsers */
    color:  #fff;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:  #fff;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:  #fff;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:  #fff;
  }
  .phoneNum
  {
    display:flex;
    flex-direction: row;
    justify-content:space-between;
  }
  .phoneNumInp
  {
    /*height:0.4rem;*/
    height:20px;
    border:none;
    flex:1;
    font-size:16px;
    letter-spacing:1px;
    outline:none;
    background:none;
    color:#fff;
    opacity:0.92;
    border-bottom:1px solid #f0f0f0;
    margin-left:12px;
  }
  .phoneNum img
  {
    /*width:0.32rem;*/
    /*width:32px;*/
    width:16px;
    height:20px;
    /*height:40px;*/
    /*height:0.4rem;*/
  }
  .phonePwd
  {
    margin-top:26px;
  }
  .logPart3
  {
    width:272px;
    background:#fff;
    -webkit-border-radius: 60px;
    -moz-border-radius:60px;
    margin:48px auto 0 auto;
    border-radius: 60px;
    height:54px;
    color: #20c7b3;
    border:none;
    font-size:16px;
    letter-spacing:1px;
  }
  .logPart4
  {
    display:flex;
    width:208px;
    /*height:90px;*/
    overflow:hidden;
    margin-top:196px;
    margin-left:auto;
    margin-right:auto;
    /*margin:196px auto 0px auto;*/
    flex-direction:row;
    font-size:14px;
    color:#fff;
    justify-content:space-between;
    /*align-items:center;*/
  }
  .blok2
  {
    width:1px;
    background:#fff;
    height:14px;
    opacity:0.76;
  }


</style>
