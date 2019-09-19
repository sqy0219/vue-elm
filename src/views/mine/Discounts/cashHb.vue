<template>
  <div class="cashHb">
    <NavTop4 title="兑换红包" icon6 />

    <form class="exchange_code">
      <input v-model="cashm" type="text" placeholder="请输入兑换码" class="exchange_input" />

      <section class="input_container captcha_code_container">
        <input v-model="yanzhengm" type="text" placeholder="验证码" maxlength="4" />
        <div class="Cimg">
          <img :src="captcha_code" alt="11" />
          <div class="idea">
            <p>看不清</p>
            <p class="p2" @click="getCImgUrl">换一张</p>
          </div>
        </div>
      </section>
      <div :style="(cashm&&yanzhengm.length==4)?queren:{}" class="determine" @click="exchange">兑换</div>
    </form>
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
          <span>{{message}}</span>
        </div>
        <button class="ok" @click="nullAlert=!nullAlert">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";

export default {
  name: "cashHb",
  data() {
    return {
      nullAlert: false,
      captcha_code: "",
      cashm: "",
      yanzhengm: "",
      queren: { background: "#4cd964" },
      message: "我的错"
    };
  },
  components: {
    NavTop4
  },
  created() {
    this.getCImgUrl();
  },
  methods: {
    getCImgUrl() {
      this.$axios
        .post("https://elm.cangdu.org/v1/captchas")
        .then(res => {
          this.captcha_code = res.data.code;
          console.log(this.captcha_code);
        })
        .catch(err => {
          console.log(err);
        });
    },
    exchange() {
      if (this.cashm != "" && this.yanzhengm.length == 4) {
        this.$axios
          .post("v1/users/:user_id/hongbao/exchange", {
            user_id: 1,
            exchange_code: this.cashm,
            captcha_code: this.yanzhengm
          })
          .then(res => {
            this.message = res.data.message;
            this.nullAlert = true;
            this.getCImgUrl();
            this.cashm = "";
            this.yanzhengm = "";
          });
      }
    }
  }
};
</script>

<style scoped>
.cashHb {
  font-size: 0.3rem;
}
.exchange_code {
  height: 3.8rem;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
}

input {
  font-size: 0.32rem;
  margin: 0;
  padding: 0;
  height: 1rem;
  padding: 0.28rem 0.18rem;
  margin-top: 0.3rem;
  width: 94%;
  list-style: none;
  border: none;
  border-radius: 0.1rem;
  border-color: none;
  outline: none;
}
.input_container {
  /* border: 1px solid red; */
  display: flex;
  width: 94%;
}
.input_container input {
  flex: 20;
  margin-right: 0.2rem;
}
.input_container .Cimg {
  flex: 18;
  display: flex;
  font-size: 0.26rem;
  background-color: white;
  margin-top: 0.3rem;
  border-radius: 0.1rem;
  color: #666;
  height: 1rem;
}
img {
  width: 1.6rem;
  height: 0.7rem;
  height: 1rem;
  margin-right: 0.2rem;
  line-height: 1rem;
  padding: 0.1rem 0rem;
}
.idea {
  display: flex;
  flex-direction: column;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  margin: 0;
}
p {
  width: 100%;
  margin: 0;
  line-height: 0.5rem;
}
.p2 {
  margin-top: -0.1rem;

  color: #3b95e9;
}
.determine {
  background-color: #ccc;
  font-size: 0.32rem;
  color: #fff;
  text-align: center;
  margin: 0 0.32rem;
  line-height: 0.8rem;
  border-radius: 0.1rem;
  margin-top: 0.32rem;
  width: 92%;
}
* {
  margin: 0;
  padding: 0;
}
/* 弹框 */
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
  width: 100%;
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
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0.1rem;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
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
</style>