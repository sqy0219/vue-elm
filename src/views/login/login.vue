<template>
  <div class="login">
    <NavTop title="密码登录" :icon1="icon1" />

    <!-- 账号 -->
    <div class="account zh">
      <input type="text" placeholder="账号" v-model="username" />
    </div>
    <!-- 密码 -->
    <div class="account">
      <input class="sOrn" type="password" placeholder="密码" v-model="password" />
      <!-- 滑动按钮 -->
      <div class="passShow">
        <div :class="cName" @click="sliderClick"></div>
      </div>
    </div>
    <!-- 验证码 -->
    <div class="account confirm">
      <input type="text" placeholder="验证码" v-model="sendCode" />
      <div class="Cimg">
        <img :src="captcha_code" alt="11" />
        <div class="idea">
          <p>看不清</p>
          <p @click="getCImgUrl">换一张</p>
        </div>
      </div>
    </div>
    <p class="loginP">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="loginP">注册过的用户可凭账号密码登录</p>
    <div class="log">
      <button class="rectChange rectLogin" @click="log()">登录</button>
    </div>
    <!-- 弹框 -->
    <div class="container" v-if="nullAlert">
      <div class="alert">
        <div class="zq">
          <span>
            <svg
              t="1567564394395"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3611"
              width="32"
              height="32"
            >
              <path
                d="M512.3 68.1C272.2 68.1 77 263.4 77 503.4s195.3 435.3 435.3 435.3 435.3-195.3 435.3-435.3S752.3 68.1 512.3 68.1z m0 833.9c-219.8 0-398.7-178.8-398.7-398.7s178.8-398.7 398.7-398.7S911 283.4 911 503.3 732.1 902 512.3 902z"
                fill="#f3ca7e"
                p-id="3612"
              />
              <path
                d="M519.6 635c10.1 0 18.3-8.2 18.3-18.3v-362c0-10.1-8.2-18.3-18.3-18.3-10.1 0-18.3 8.2-18.3 18.3v362.1c0 10 8.2 18.2 18.3 18.2z"
                fill="#f3ca7e"
                p-id="3613"
              />
              <path
                d="M516.9 726.5m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z"
                fill="#f3ca7e"
                p-id="3614"
              />
            </svg>
          </span>
          <span>{{error}}</span>
        </div>
        <button class="ok" @click="nullAlert=!nullAlert">确认</button>
      </div>
    </div>
    <div class="reset1">
      <router-link to="/" class="reset">重置密码?</router-link>
    </div>
  </div>
</template>

<script>
import NavTop from "../../components/common/NavTop";

export default {
  name: "login",
  data() {
    return {
      icon1: false,
      captcha_code: "",
      nullAlert: false,
      cName: "clickBtn",
      slider: false,
      username: "",
      password: "",
      sendCode: "",
      error: ""
    };
  },
  mounted: function() {
    this.getCImgUrl();
  },
  components: { NavTop },
  methods: {
    getCImgUrl() {
      this.$axios
        .post("/v1/captchas")
        .then(res => {
          this.captcha_code = res.data.code;
        })
        .catch(err => {
          console.log(err);
        });
    },

    sliderClick() {
      self = this.cName;
      let showPass = document.querySelector(".sOrn");
      let cliBtn = document.querySelector(`.${self}`);
      let line = document.querySelector(".passShow");
      // 改变slider值
      if (this.slider == false) {
        this.slider = true;
      } else {
        this.slider = false;
      }
      // 改变样式
      if (this.slider) {
        showPass.type = "text";
        cliBtn.className = "clickBtn1";
        this.cName = "clickBtn1";
        line.style.backgroundColor = "#4cd964";
      } else {
        showPass.type = "password";
        cliBtn.className = "clickBtn2";
        this.cName = "clickBtn2";
        line.style.backgroundColor = "#CCCCCC";
      }
    },
    log() {
      if (this.username == "") {
        this.error = "请输入手机号/邮箱/用户名";
        console.log(this.error);
        this.nullAlert = true;
        return;
      }
      if (this.password == "") {
        this.error = "请输入密码";
        // console.log(this.error);
        this.nullAlert = true;
        return;
      }
      if (this.captcha_code == null) {
        this.error = "请输入验证码";
        console.log(this.error);
        this.nullAlert = true;

        return;
      }

      this.$axios
        .post("/v2/login", {
          username: this.username,
          password: this.password,
          captcha_code: this.sendCode
        })
        .then(res => {
          if (res.data.message == "验证码不正确") {
            this.error = res.data.message;
            this.nullAlert = true;
            this.getCImgUrl();
          } else if (res.data.message == "密码错误") {
            this.error = res.data.message;
            this.nullAlert = true;
            this.getCImgUrl();
          } else {
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
            var order = JSON.parse(localStorage.getItem("order") || "[]");
            console.log(order.length);
            if (order.length != 0) {
              this.$router.push("/confirmOrder#");
              retrun;
            }
            if (localStorage.getItem("address") == null) {
              this.$router.push("./");
            } else {
              this.$router.push("/profile");
            }
          }
        });
    }
  }
};
</script>

<style scoped>
.login {
  min-height: 12rem;
  background: #f5f5f5;
}
.passShow {
  width: 0.94rem;
  height: 0.328rem;
  /* //   background: #4cd964; */
  background: #cccccc;
  border-radius: 0.2rem;
  float: left;
  margin: -0.5rem 5.8rem;
}
.clickBtn {
  width: 0.5626rem;
  height: 0.5626rem;
  background: #f1f1f1;
  border-radius: 50%;
  margin-top: -0.1rem;
  margin-left: -0.07rem;
  /* //   margin-left: 0.45rem; */
}
.clickBtn1 {
  width: 0.5626rem;
  height: 0.5626rem;
  background: #f1f1f1;
  border-radius: 50%;
  margin-top: -0.1rem;
  margin-left: 0.45rem;
  animation: sliderLtoR 0.2s linear;
}
.clickBtn2 {
  width: 0.5626rem;
  height: 0.5626rem;
  background: #f1f1f1;
  border-radius: 50%;
  margin-top: -0.1rem;
  margin-left: -0.07rem;
  animation: sliderRtoL 0.2s linear;
}
@keyframes sliderLtoR {
  from {
    margin-left: -0.07rem;
  }
  to {
    margin-left: 0.45rem;
  }
}
@keyframes sliderRtoL {
  from {
    margin-left: 0.45rem;
  }
  to {
    margin-left: -0.07rem;
  }
}
.log {
  /* border: 1px solid red; */
  line-height: 0.9rem;
}
.reset1 {
  display: inline-block;
  width: 100%;
  height: 0.9rem;
}
.reset {
  width: 100%;
  position: absolute;
  color: #3b95e9;
  font-size: 0.3rem;
  margin-right: 1.3rem;
  text-align: right;
  padding-right: 0.4rem;
}

.loginP {
  font-size: 0.22rem;
  color: #ff0000;
  padding: 0.12rem 0.3rem;
}
.zh {
  margin-top: 0.2rem;
  /* border: 1px solid red; */
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
a:click {
  color: #000;
}
.account {
  height: 1rem;
  background: #f5f5f5;
}
#myHeader {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 7.5rem;
  box-sizing: border-box;
  height: 0.914rem;
  font-size: 0.4rem;
  color: #fff;
  text-align: center;
  font-weight: 900;
  font-family: "Microsoft Yahei";
  line-height: 0.914rem;
}
#myHeader span {
  display: block;
  position: absolute;
  left: 0.15rem;
  top: 0.11rem;
}
#myHeader span:nth-child(2),
#myHeader span:nth-child(3) {
  font-size: 0.32rem;
  left: 6.4rem;
  top: -0.001rem;
  font-weight: 400;
  width: 1rem;
}

input {
  display: block;
  width: 3.5rem;
  height: 0.4rem;
  font-size: 0.31rem;
  outline: none;
  border: none;
  /* border: 1px solid red; */
}
/*验证码*/
.Cimg img,
.idea {
  display: block;
  font-size: 0.26rem;
  float: left;
}
img {
  width: 1.64rem;
  height: 0.71rem;
}
.Cimg {
  width: 2.52rem;
  overflow: hidden;
  margin-left: 4.2rem;
  margin-top: -0.73rem;
}
.Cimg p:nth-child(1) {
  color: #333;
}
.Cimg p:nth-child(2) {
  color: #3b95e9;
}
.alert {
  position: absolute;
  font-size: 0.5rem;
  top: 30%;
  left: 12%;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 4.2rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
  animation: dump 0.3s linear;
}
.zq {
  width: 6rem;
  height: 3.3rem;
  background: white;
}
.alert span {
  display: block;
}
.alert svg {
  width: 1.7rem;
  height: 1.7rem;
}
.alert span:nth-child(1) {
  padding: 0.3rem 2.2rem;
}
.alert span:nth-child(2) {
  font-size: 0.34rem;
  text-align: center;
}
.ok {
  width: 100%;
  height: 0.84rem;
  line-height: 0.8rem;
  border: none;
  font-size: 0.38rem;
  font-weight: 700;
  color: #fff;
  background: #4cd964;
}
@keyframes dump {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 0.9);
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0.9, 0.9);
  }
  100% {
    transform: scale(1, 1);
  }
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0.1rem;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
}
.account {
  width: 100%;
  height: 0.96rem;
  background: #fff;
  padding: 0.28rem 0.34rem;
  border-bottom: 0.02rem solid #f1f1f1;
  display: border-box;
  /* border: 1px solid red; */
}
/*确认按钮*/
.rectChange {
  border: none;
  border-radius: 0.07rem;
  background: #4cd964;
  width: 7.2rem;
  height: 0.9rem;
  margin-left: 0.16rem;
  color: #fff;
  font-size: 0.33rem;
}
.rectLogin {
  width: 6.8rem;
  margin-left: 0.38rem;
}
button:focus {
  outline: none;
}
</style>