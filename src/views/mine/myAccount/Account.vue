<template>
  <div class="account">
    <NavTop4 title="账户信息" icon6="/profile" />
    <!-- 列表 -->
    <div class="portrait">
      <ul>
        <li id="firstPor" class="top" @click="tk">
          <a href="#">
            <input type="file" style="opacity:0;" class="aFile" @click.prevent="tk" />
            <!-- <span></span> -->
            <span>头像</span>
            <span>
              <img src="//elm.cangdu.org/img/default.jpg" class="privateImage" />
            </span>
            <span>
              <i class="fa fa-angle-right"></i>
            </span>
          </a>
        </li>
        <li class="top">
          <router-link to="/profile/Account/ResetUsername">
            <span>用户名</span>
            <span class="yhm">{{username}}</span>
            <span>
              <i class="fa fa-angle-right le"></i>
            </span>
          </router-link>
        </li>
        <li class="top addres1">
          <router-link to="/profile/DeliveryAddress">
            <span>收货地址</span>
            <span>
              <i class="fa fa-angle-right le"></i>
            </span>
          </router-link>
        </li>
        <li class="sign">
          <p>账号绑定</p>
        </li>
        <li class="top addres1">
          <a href="#" @click="isShow=!isShow">
            <span class="phone">
              <i class="fa fa-mobile"></i>
            </span>
            <span class="sj">手机</span>
            <span>
              <i class="fa fa-angle-right le"></i>
            </span>
          </a>
        </li>
        <li class="sign">
          <p>安全设置</p>
        </li>
        <li class="top addres1">
          <router-link to="/profile/ResetPassword">
            <span>登录密码</span>
            <span class="xg">修改</span>
            <span>
              <i class="fa fa-angle-right le"></i>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <router-link to="/storeDetail" tag="p">商家详情</router-link> -->

    <!-- <router-link to="/letsShop" tag="p">评价</router-link> -->
    <button class="outLogin" @click="showOut=!showOut">退出登录</button>
    <!-- 两个弹框 -->
    <div class="bj" v-if="isShow">
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

            <span>请在手机APP中设置</span>
          </div>
          <button class="ok" @click="isShow=false">确认</button>
        </div>
      </div>
    </div>
    <div class="bj" v-if="is">
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
            <span>暂不支持修改头像</span>
          </div>
          <button class="ok" @click="is=false">确认</button>
        </div>
      </div>
    </div>
    <!-- 退出登录弹框 -->
    <div class="container container2" v-if="showOut">
      <div class="alert alert2">
        <div>
          <span>
            <svg
              t="1567567409966"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2056"
              width="32"
              height="32"
            >
              <path
                d="M512.3 68.1C272.2 68.1 77 263.4 77 503.4s195.3 435.3 435.3 435.3 435.3-195.3 435.3-435.3S752.3 68.1 512.3 68.1z m0 833.9c-219.8 0-398.7-178.8-398.7-398.7s178.8-398.7 398.7-398.7S911 283.4 911 503.3 732.1 902 512.3 902z"
                fill="#efb336"
                p-id="2057"
              />
              <path
                d="M519.6 635c10.1 0 18.3-8.2 18.3-18.3v-362c0-10.1-8.2-18.3-18.3-18.3-10.1 0-18.3 8.2-18.3 18.3v362.1c0 10 8.2 18.2 18.3 18.2z"
                fill="#efb336"
                p-id="2058"
              />
              <path
                d="M516.9 726.5m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z"
                fill="#efb336"
                p-id="2059"
              />
            </svg>
          </span>
          <span>是否退出登录</span>
        </div>
        <button class="wait" @click="showOut=false">再等等</button>
        <button class="out" @click="outLog()">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "account",
  data() {
    return {
      isShow: false,
      showOut: false,
      username: "",
      is: false
    };
  },
  components: {
    NavTop4
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    this.username = user.username;
  },
  methods: {
    getAvatar() {
      this.$axios.post("https://elm.cangdu.org/v1/addimg/:type");
    },
    outLog() {
      localStorage.removeItem("user");
      localStorage.removeItem("address");

      this.$router.push("./");
    },
    tk() {
      this.is = true;
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
  color: #333;
}
.account {
  min-height: 12rem;
  background: #f5f5f5;
  width: 100%;
  font-size: 0.3rem;
}
.bj {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.2);
}

ul {
  list-style: none;
}
.aFile {
  width: 100%;
  height: 1.6rem;
  background: red;
  position: absolute;
}
/*字号设置*/
ul li {
  font-size: 0.32rem;
  color: #333;
  margin-bottom: 0.035rem;
  background: #fff;
}
ul li a,
.sign {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
}

.sign {
  font-size: 0.24rem;
  color: #666;
  background: #f5f5f5;
  width: 100%;
  height: 0.7rem;
}
.sign p {
  height: 0.3rem;
  width: 100%;
}
/*每行内部设置*/
input,
span {
  display: block;
}
/*第一个li*/
#firstPor {
  width: 100%;
  height: 1.5rem;
  margin: 0;
  padding: 0;
  margin-top: 0.2rem;
  background-color: white;
}
.top {
  border-top: 1px solid #ddd;
  height: 0.9rem;
  // line-height: .94rem

  font-size: 0.28rem;
}
.top a {
  line-height: 0.5rem;
}
.privateImage {
  font-size: 0.14rem;
  background: #fff;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin-top: -0.5rem;
}
#firstPor a {
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  // border: 1px solid red;
  display: flex;
}
#firstPor input {
  position: absolute;
  width: 100%;
  height: 1rem;
}
#firstPor a span:nth-child(2) {
  flex: 4;
  line-height: 0.98rem;
  font-size: 0.28rem;
}
#firstPor a span:nth-child(3) {
  line-height: 0.98rem;
  width: 100%;
  flex: 20;
}
#firstPor a span:nth-child(3) img {
  display: inline-block;
  margin-top: 0rem;
  margin-left: 4rem;
}
#firstPor a > span:nth-child(4) {
  line-height: 0.98rem;
  font-size: 0.6rem;

  flex: 1;
}
.fa-angle-right {
  color: rgb(216, 216, 216);
  margin-left: 0.1rem;
}
/*图标箭头*/
.le {
  margin-top: -0.2rem;
  font-size: 0.6rem;
  line-height: 0.8rem;
  // border:1px solid red;
}
/*靠右标签*/
.yhm {
  margin-left: 3.5rem;
  color: #999;
  font-size: 0.35rem;
  font-weight: 500;
  line-height: 0.4rem;
  width: 2.4rem;
  height: 0.9rem;
  text-align: center;
}
.fa-mobile {
  color: white;
  font-size: 0.45rem;
  text-align: center;
}

.addres1 {
  border-bottom: 1px solid #ddd;
}
.xg {
  margin-left: 4.8rem;
  font-size: 0.33rem;
  line-height: 0.4rem;
  color: #999;
}
.phone {
  width: 0.38rem;
  height: 0.45rem;
  border-radius: 0.08rem;
  background: #3190e8;
  text-align: center;
}
.phone + span {
  margin-left: -5.4rem;
  line-height: 0.45rem;
}
.outLogin {
  width: 7.204rem;
  height: 0.6;
  margin: 0.6rem auto;
  background-color: #d8584a;
  color: #fff;
  border-radius: 0.1rem;
  border: none;
  margin-left: 0.148rem;
  padding: 0.15rem 0;
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
  height: 12rem;
  top: 0rem;
  z-index: 0;
}
.container2 {
  background: rgba(0, 0, 0, 0.2);
}
.alert2 {
  position: absolute;
  font-size: 0.5rem;
  top: 10%;
  left: 0;
  right: 0;
  width: 7rem;
  height: 6rem;
  margin: auto;
  background: #fff;
  border-radius: 0.18rem;
  box-sizing: border-box;
  overflow: hidden;
  animation: dump 0.3s linear;
}
.alert2 svg {
  width: 2.7rem;
  height: 2.2rem;
}
.alert2 span:nth-child(1) {
  padding: 0.5rem 2.2rem 0.2rem;
}
.alert2 span:nth-child(2) {
  font-size: 0.6rem;
  text-align: center;
  color: #575757;
}
.wait,
.out {
  color: #fff;
  padding: 0.187rem 0.57rem;
  font-size: 0.28rem;
  border: none;
  border-radius: 0.1rem;
}
.wait {
  background: #c1c1c1;
  margin-top: 0.8rem;
  margin-left: 1.3rem;
}
.out {
  background: #dd6b55;
  margin-left: 0.3rem;
}
</style>