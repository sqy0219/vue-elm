<template>
  <div class="resetPassword">
    <NavTop4 title="重置密码" icon6="/profile/account" />
    <div class="flex">
      <!-- 账号 -->
      <div class="account" id="account1">
        <input type="text" placeholder="账号" v-model="userAccount" />
      </div>
      <!-- 旧密码 -->
      <div class="account">
        <input type="text" placeholder="旧密码" v-model="oldPass" />
      </div>
      <!-- 请输入新密码 -->
      <div class="account">
        <input type="text" placeholder="请输入新密码" v-model="newPass" />
      </div>
      <!-- 请确认密码 -->
      <div class="account">
        <input type="text" placeholder="请确认密码" v-model="reactPass" />
      </div>
      <!-- 验证码 -->
      <div class="account confirm">
        <input type="text" placeholder="验证码" v-model="yanzhengma" />
        <div class="Cimg">
          <img :src="cImg" alt="验证码" />
          <div class="idea">
            <p>看不清</p>
            <p @click="getCImgUrl">换一张</p>
          </div>
        </div>
      </div>
    </div>

    <button class="rectChange" @click="nullAlert=!nullAlert;resetCheck()">确认修改</button>
    <div class="bj" v-if="nullAlert">
      <div class="container">
        <div class="alert">
          <div>
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
            <span>{{resetError}}</span>
          </div>
          <button class="ok" @click="nullAlert=!nullAlert">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "resetPassword",
  data() {
    return {
      cImg: "",
      nullAlert: false,
      userAccount: "",
      oldPass: "",
      newPass: "",
      reactPass: "",
      yanzhengma: "",
      resetError: ""
    };
  },
  components: {
    NavTop4
  },
  //,
  mounted: function() {
    this.setCImgUrl();
  },
  methods: {
    // 验证码图片
    getCImgUrl() {
      this.$axios.post("https://elm.cangdu.org/v1/captchas").then(res => {
        this.cImg = res.data.code;
      });
    },
    setCImgUrl() {
      this.$axios.post("https://elm.cangdu.org/v1/captchas").then(res => {
        this.cImg = res.data.code;
      });
    },
    //确定按钮判断全部输入是否合法
    resetCheck() {
      if (this.userAccount.length == 0) {
        this.resetError = "请输入正确的账号";
      } else if (this.oldPass.length == 0) {
        this.resetError = "请输入旧密码";
      } else if (this.newPass.length == 0) {
        this.resetError = "请输入新密码";
      } else if (this.reactPass.length == 0) {
        this.resetError = "请输入确认密码";
      } else if (this.yanzhengma.length == 0) {
        //验证码不会处理，暂时写成这样
        this.resetError = "请输入验证码";
      } else {
        this.$axios
          .post("v2/changepassword", {
            username: this.userAccount,
            oldpassWord: this.oldPass,
            newpassword: this.newPass,
            confirmpassword: this.reactPass,
            captcha_code: this.yanzhengma
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 1) {
              this.resetError = "密码修改成功";
            } else {
              this.resetError = "密码修改失败";
              this.userAccount = "";
              this.oldPass = "";
              this.newPass = "";
              this.reactPass = "";
              this.yanzhengma = "";
            }
          });
      }
      this.getCImgUrl();
    }
  }
};
</script>

<style lang="scss" scoped>
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
  height: 0.7rem;
  flex: 1;
  background: white;
  // border: 1px solid red;
}
.flex {
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
}
.bj {
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
}
.account input {
  background: white;
  // border: 1px solid red;
}

.resetPassword {
  width: 100%;
  min-height: 12rem;
  background-color: #f5f5f5;
}
.account {
  width: 100%;
  height: 0.7rem;
  background: #fff;
  padding: 0.141rem 0.375rem;
  border-bottom: 0.02rem solid #f1f1f1;
  display: border-box;
}
input {
  display: block;
  width: 3.5rem;
  height: 0.69rem;
  font-size: 0.31rem;
  outline: none;
  border: none;
}
/*验证码*/
.Cimg img,
.idea {
  display: block;
  font-size: 0.28rem;
  float: left;
}
img {
  width: 1.64rem;
  height: 0.71rem;
  //   background: yellow;
}
.Cimg {
  width: 2.52rem;
  overflow: hidden;
  margin-left: 4.2rem;
  margin-top: -0.73rem;
}
.Cimg p:nth-child(2) {
  color: #3b95e9;
}
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
.alert {
  position: absolute;
  font-size: 0.5rem;
  top: 30%;
  left: 12%;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 4rem;
  background: #fff;
  border-radius: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
  animation: dump 0.3s linear;
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
  height: 0.812rem;
  border: none;
  font-size: 0.38rem;
  font-weight: 700;
  color: #fff;
  background: #4cd964;
  bottom: 0;
  position: absolute;
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
  height: 13.34rem;
  top: 0.1rem;
  z-index: 0;
}
</style>