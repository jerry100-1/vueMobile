<template>
  <div class="registerWrap">
    <div class="registerPart1">
      <router-link class="l1" tag="div" to="Login">
        <img src="./loimages/leftRow.png" alt>
      </router-link>
      <div class="l2">注册</div>
      <div class="l3"></div>
    </div>

    <div class="registerPart2">
      <div class="rePa1">
        <div class="rePa1Left">+86
          <div id="tran"></div>
        </div>
        <div class="rePa1Right">
          <input type="text" class="phInp2" placeholder="请输入您的手机号" v-model="mobile">
        </div>
      </div>
      <div class="rePa1 rePa2">
        <div class="rePa1Left rePa1Left2">
          <input type="text" placeholder="请输入验证码" v-model="verificationCode">
        </div>
        <div class="rePa1Right rePa1Right2" @click="getCode">获取验证码</div>
      </div>
    </div>

    <div class="registerPart3">
      <button @click="toregister" class="getValidate">下一步</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "Register",
  data() {
    return {
      mobile: "",
      verificationCode: ""
    };
  },
  methods: {
    //获取验证码
    getCode() {
      if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(this.mobile)) return Toast("请输入正确的手机号");
      
      this.axios
        .post("/index/Member/sms", {
          mobile: this.mobile
        })
        .then(response => {
          if (response.status !== "1")
            return Toast(response.message + "请重新获取验证码");
          return Toast(response.message);
        });
    },
    //下一步
    toregister() {
      let verificationCode = parseInt(this.verificationCode);
      let mobile = parseInt(this.mobile);

      if (!/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(mobile)) return Toast("请输入正确的手机号");
      if (verificationCode == "") return Toast("请填写验证码!");

      this.axios
        .get("/index/member/smsyz", {
          params: {
            mobile: mobile,
            code: verificationCode
          }
        })
        .then(response => {
          if (response.status == 0) return Toast(response.message);

          let code = {
            mobile: mobile,
          };
          
          code = JSON.stringify(code);
          localStorage.setItem("code", code);
          setTimeout(() => {
            this.$router.push("./setPassword");
          }, 2000);
        });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
button input {
  outline: none;
}
.rePa1Left {
  position: relative;
}
#tran {
  height: 0;
  width: 0;
  position: absolute;
  right: 0px;
  top: 1.5rem;
  border-right: 0.25rem solid transparent;
  border-bottom: 0.25rem solid #000;
  transform: rotateX(180deg);
  border-left: 0.25rem solid transparent;
}

body {
  background: #edf3f5;
  font-size: 1rem;
}
.registerWrap {
  background: #f2f2f2;
  height: 100%;
  width: 100%;
}
.registerWrap>.registerPart3>button{
  outline:none;
}
.registerPart1 {
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  flex-direction: row;
  background: #20c7b3;
}
.registerPart2 {
  width: 100%;
  height: 100px;
  background: #fff;
  margin-top: 0.75rem;
}
.l1,
.l2,
.l3 {
  flex: 1;
  align-items: center;
}
.l1 img {
  width: 0.5rem;
  height: 0.875rem;
  position: absolute;
  left: 1.25rem;
  top: 0.9375rem;
}
.rePa1 {
  width: 100%;
  display: flex;
  height: 49px;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.rePa1Left {
  flex: 2;
  height: 3.0625rem;
  line-height: 3.0625rem;
}
.rePa2 {
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.rePa1Right {
  flex: 9;
  height: 3.0625rem;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgba(0, 0, 0, 0.36);
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(0, 0, 0, 0.36);
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(0, 0, 0, 0.36);
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: rgba(0, 0, 0, 0.36);
}
input.phInp2 {
  height: 3.0625rem;
  line-height: 3.0625rem;
  border: none;
  width: 100%;
  outline: none;
  font-size: 0.9375rem;
  text-indent: 1.25rem;
}
.rePa1Left2 {
  flex: 4;
  font-size: 1rem;
}
.rePa1Left2 input {
  border: none;
  outline: none;
}
.rePa1Right2 {
  color: #20c7b3;
  height: 3.0625rem;
  line-height: 3.0625rem;
}
.rePa1Right2 {
  flex: 3;
  font-size: 1rem;
}
.registerPart3 {
  width: 19.6875rem;
  height: 1rem;
  text-align: center;
  margin: 4.375rem auto 0 auto;
}
.getValidate {
  width: 19.6875rem;
  height: 3.125rem;
  background: #20c7b3;
  margin: 4.375rem auto 0 auto;
  border: none;
  color: #fff;
  border-radius: 30px;
}
</style>
