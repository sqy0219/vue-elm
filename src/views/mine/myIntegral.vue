
<template>
  <div class="myIntegral">
    <NavTop4 title="我的积分" icon6 />
    <div class="bgr">
      <div class="myBala">
        <div class="nowBala">
          <span class="money">当前积分</span>
          <span class="say">
            <router-link to="/profile/myDiscounts/integral">
              <i class="fa fa-question-circle fa-lg"></i> &nbsp;积分说明
            </router-link>
          </span>
        </div>
        <div class="mBala">
          <h6>{{balance}}</h6>&nbsp;
          <span class="yuan">分</span>
        </div>
        <div class="button" @click="nullAlert=true">积分兑换商品</div>
      </div>
    </div>
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
    <div class="record">
      <span class="deal">最近30天积分记录</span>
      <div class="img">
        <img
          src="data:image/png;base64,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"
          alt
        />
      </div>

      <p class="noDeal">最近30天无积分纪录</p>
      <p class="noDeal1">快去下单赚取大量积分吧</p>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "myIntegral",
  data() {
    return {
      balance: 0.0,
      nullAlert: false,
      message: "快去下单赚取大量积分吧"
    };
  },
  components: {
    NavTop4
  },
  created() {
    this.getBalance();
  },
  methods: {
    getBalance() {
      this.$axios
        .get("https://elm.cangdu.org/v1/user")
        .then(res => {
          console.log(res);
          this.balance = res.data.balance;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.myIntegral {
  background-color: #f5f5f5;
  min-height: 12rem;
  width: 100%;
  font-size: 0.26rem;
}
.bgr {
  background-color: #3190e8;
  height: 3.4rem;
  width: 100%;
  position: absolute;
}
.myBala {
  background-color: white;
  border-radius: 0.1rem;
  width: 96%;
  height: 3.15rem;
  margin: 0.1rem auto;
}
.nowBala {
  height: 0.53rem;
  width: 100%;
  padding: 0.2rem 0.2rem 0;
  display: flex;
}
.money {
  flex: 1;
}
p {
  margin: 0;
}
.say {
  flex: 1;
  text-align: right;
  color: #3190e8;
}
.mBala {
  height: 1.12rem;
  padding: 0 0.2rem 0;
  color: #333;
}
h6 {
  display: inline-block;
  font-weight: 400;
  font-size: 0.9rem;
}
.yuan {
  font-size: 0.3rem;
}
.button {
  height: 0.9rem;
  color: white;
  font-size: 0.37rem;
  background: #fe6d47;
  margin: 0.4rem 0.15rem 0.15rem;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.9rem;
}
.record {
  position: absolute;
  top: 4.3rem;
  height: 5rem;
  width: 100%;
  opacity: 4;
}
.deal {
  display: inline-block;
  height: 1rem;
  width: 100%;
  line-height: 1rem;
  font-size: 0.28rem;
  color: #999;
  padding-left: 0.3rem;
}
.img {
  width: 100%;
  height: 2.43rem;
  text-align: center;
}
img {
  width: 3.75rem;
  height: 2.43rem;
  margin-top: 0.35rem;
}
.noDeal {
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.7rem;
  font-size: 0.34rem;
  color: #666;
  width: 100%;
  text-align: center;
}
.noDeal1 {
  display: inline-block;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.2rem;
  font-size: 0.24rem;
  color: #999;
  width: 100%;
  text-align: center;
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