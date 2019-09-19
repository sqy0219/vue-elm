<template>
  <div class="ConfirmOrder">
    <div class="hea">
      <NavTop4 title="确认订单" icon6="/addShoping" icon7="icon7" />
    </div>
    <div class="content">
      <router-link to="/chooseAddress">
        <div class="address">
          <img src="../../assets/img/location.png" alt />
          <div class="information">
            <p>
              <span class="username">{{address.name}}</span>
              &nbsp;
              <span v-if="address.sex==1">先生</span>
              <span v-if="address.sex==2">女士</span>
              &nbsp;
              {{address.address}}
            </p>
            <p class="school">
              <span class="school1">{{address.tag}}</span>
              {{address.tag_type}}
            </p>
          </div>

          <span class="row">
            <i class="fa fa-angle-right"></i>
          </span>
          <div class="bottom"></div>
        </div>
      </router-link>
      <div class="time">
        <p class="timep">送达时间</p>
        <div class="timeright">
          <p>尽快送达 | 预计{{time}}</p>
          <p class="fengniao">{{oneStore.delivery_mode.text}}</p>
        </div>
      </div>
      <div class="payMethod">
        <p class="payMethod1">
          支付方式
          <span @click="onlinepay">在线支付&nbsp;&nbsp; ></span>
        </p>
        <p class="payMethod2">
          红包
          <span>暂时只在饿了么APP中支持</span>
        </p>
        <div @click="block" v-show="zhi" class="block"></div>
        <div v-show="zhi" class="payMethod3">
          <p class="payMethod3Title">支付方式</p>
          <p class="noaccept">
            货到付款(商家不支持货到付款)
            <i class="gou fa fa-check"></i>
          </p>
          <p @click="zhi=false">
            在线支付
            <i class="gou choosed fa fa-check"></i>
          </p>
        </div>
      </div>
      <div class="show">
        <p class="xiaoguo">
          <img :src="(`https://elm.cangdu.org/img/${oneStore.image_path}`)" alt />
          &nbsp; {{oneStore.name}}
        </p>
        <ul class="order-ul">
          <li class="order-li" v-for="(orde, index) in order" :key="index">
            <p>
              {{orde.name}}
              <span style="marginLeft:.9rem">￥{{orde.specfoods[0].price}}</span>
              <span class="number">X{{orde.amount}}</span>
            </p>
          </li>
        </ul>
        <p>
          餐盒
          <span>￥{{chf}}</span>
        </p>
        <p>
          配送费
          <span>￥{{oneStore.float_delivery_fee}}</span>
        </p>
        <p>
          订单￥465
          <span class="numbers">待支付￥{{prices}}</span>
        </p>
      </div>
      <div class="tip">
        <router-link to="/remark">
          <p>
            订单备注
            <span>{{orderBj[1]}}</span>
            &nbsp;
            <span v-if="orderBj.length==0">口味、偏好等 ></span>
            <span v-else v-for="(item, index) in orderBj[0]" :key="index">{{item}}&nbsp;</span>
          </p>
        </router-link>
        <router-link to="/receipt">
          <p>
            发票抬头
            <span v-if="fapiao==''||fapiao=='false'">不需要开发票 ></span>
            <span v-else>开发票 ></span>
          </p>
        </router-link>
      </div>
      <div class="placeOrder">
        <p class="pp">
          <span class="pay">待支付￥{{prices}}</span>
          <a to="###">
            <span @click="orderSure">确认下单</span>
          </a>
        </p>
      </div>
    </div>
    <div class="container" v-if="show">
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
          <span class="span2">请先登录</span>
        </div>
        <button class="ok" @click="log()">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  data() {
    return {
      username: "yzs",
      address: {},
      school: "111",
      time: "",
      zhi: false,
      icon7: true,
      oneStore: {},
      order: {},
      prices: 0,
      chf: 5,
      orderBj: [],
      fapiao: "",
      user: {},
      times: "",
      show: false
    };
  },
  components: {
    NavTop4
  },
  created() {
    this.getAddress();
  },

  methods: {
    orderSure() {
      console.log(this.user.id);
      if (this.user.id == undefined) {
        this.show = true;
        return;
      }
      var a = [];
      a = JSON.parse(localStorage.getItem("historyList") || "[]");
      a.push({
        user_id: this.user.id,
        address_id: this.address.id,
        restaurant_id: this.oneStore.id,
        geohash: [this.oneStore.longitude, this.oneStore.latitude],
        description: [this.orderBj, this.fapiao],
        order: this.order,
        address: this.address,
        oneStore: this.oneStore,
        orderTime: this.times,
        prices: [
          {
            orderprice:
              this.prices - this.chf - this.oneStore.float_delivery_fee
          },
          { chf: this.chf },
          { psf: this.oneStore.float_delivery_fee },
          { prices: this.prices }
        ]
      });
      localStorage.setItem("historyList", JSON.stringify(a));
      localStorage.removeItem("isfapiao");
      localStorage.removeItem("orderBj");

      localStorage.removeItem("oneStore");
      localStorage.removeItem("order");
      this.$router.push("/OnlinePay");
    },
    log() {
      this.$router.push("/login");
    },
    onlinepay() {
      this.zhi = true;
    },
    block() {
      this.zhi = !this.zhi;
    },
    //获取地址
    getAddress() {
      this.oneStore = JSON.parse(localStorage.getItem("oneStore"));
      this.order = JSON.parse(localStorage.getItem("order"));
      this.orderBj = JSON.parse(localStorage.getItem("orderBj") || "[]");
      this.fapiao = JSON.parse(localStorage.getItem("isfapiao") || "false");
      this.user = JSON.parse(localStorage.getItem("user") || "{}");
      for (const key in this.order) {
        this.prices +=
          this.order[key].amount * this.order[key].specfoods[0].price;
      }
      this.prices += this.oneStore.float_delivery_fee + this.chf;
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (JSON.parse(localStorage.getItem("adr"))) {
        this.address = JSON.parse(localStorage.getItem("adr"));
      } else {
        this.$axios.get(`v1/users/${user.id}/addresses`).then(res => {
          console.log(res);
          this.address = res.data[res.data.length - 1];
        });
      }
      this.times = new Date();

      const a = new Date().getTime() + 40 * 60 * 1000;
      const b = a % (1000 * 60 * 60 * 24);
      const c = b / (1000 * 60 * 60) + 8;
      const d = Math.floor(c);
      console.log(d);
      this.time = d + ":" + Math.floor((c % d) * 60);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.content {
  background: #f5f5f5;
  padding-top: 1rem;
}
.ConfirmOrder {
  width: 100%;
  min-height: 12rem;
  padding-bottom: 1.5rem;
  overflow: hidden;
}
.order-ul {
  margin: 0 0 0.6rem 0;
}
.order-li {
  height: 0.9rem;
  /* margin: 0.2rem 0; */
}
.hea {
  position: fixed;
  height: 0.9rem;
  width: 7.5rem;
  top: 0;
  z-index: 5;
  /* top: -0.4rem; */
}
.title {
  position: fixed;
  width: 7.5rem;
  background: #3190e8;
  color: #fff;
  font-size: 0.4rem;
  height: 1rem;
  /* padding-bottom: 0.15rem; */
  /* margin-bottom: 1.5rem; */
}
.title p {
  display: inline-block;
  font-weight: 800;
  font-size: 0.35rem;
  margin-left: 2.3rem;
}
.title a {
  color: #fff;
  font-size: 0.6rem;
  font-weight: 400;
  margin-left: 0.1rem;
  text-decoration: none;
}
i {
  float: right;
  margin: 0.3rem;
}
.username {
  font-weight: 800;
  color: #333;
}
.address {
  /* margin-top: 2rem; */
  /* padding-top: 1.3rem; */
  height: 1.5rem;
  background: #fff;
}

.bottom {
  margin-top: 0.38rem;
  height: 0.05rem;
  background: url("../../assets/img/bg.png");
}
.address img {
  float: left;
  width: 6%;
  margin: 0.4rem 0.4rem;
}
.information {
  display: flex;
  font-size: 0.32rem;
  flex-direction: column;
  padding-top: 0.2rem;
}
.information p {
  margin-top: 0.05rem;
  color: #333;
}
.row {
  text-decoration: none;
  color: #999;
  font-size: 0.5rem;
  position: absolute;
  top: 1.2rem;
  right: 0.2rem;
}
a {
  text-decoration: none;
}
.school1 {
  width: 1rem;
  background: #3190e8;
  border-radius: 0.15rem;
  color: #fff;
  font-size: 0.2rem;
  padding: 0 0.1rem;
  /* margin-top: 0.5rem; */
  border: 1px solid #3190e8;
}
.school {
  font-size: 0.25rem;
  color: #777;
}
.time {
  width: 7.5rem;
  height: 1.8rem;
  background: #fff;
  margin-top: 0.2rem;
  border-left: 0.1rem solid #3190e8;
}
.timep {
  font-size: 0.4rem;
  font-weight: 800;
  float: left;
  margin: 0.6rem 0.4rem;
}
.timeright {
  float: right;
  font-size: 0.32rem;
  color: #3190e8;
  padding: 0.4rem;
  font-weight: 400;
}
.fengniao {
  font-size: 0.23rem;
  background: #3190e8;
  border-radius: 0.05rem;
  color: #fff;
  padding: 0.05rem 0.1rem;
  margin-left: 1.7rem;
  margin-top: 0.2rem;
}
.payMethod {
  background: #fff;
  margin-top: 0.2rem;
}
.payMethod1 {
  font-size: 0.33rem;
  color: #666;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.3rem;
}
.payMethod1 span {
  color: #aaa;
  margin-left: 3.8rem;
  font-size: 0.28rem;
}
.payMethod2 {
  font-size: 0.28rem;
  color: #aaa;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.3rem 0.4rem;
}
.payMethod2 span {
  margin-left: 2.6rem;
}
.block {
  position: fixed;
  top: 0;
  width: 100%;
  height: 12rem;
  background: rgba(0, 0, 0, 0.3);
}
.payMethod3 {
  position: fixed;
  bottom: 1rem;
  font-size: 0.3rem;
  background: #fff;
  width: 100%;
}
.payMethod3 p {
  margin: 0.4rem;
}
.payMethod3Title {
  text-align: center;
}
.noaccept {
  color: #999;
}
.gou {
  text-align: center;
  float: right;
  width: 0.35rem;
  height: 0.35rem;
  background: #ccc;
  color: #fff;
  border-radius: 50%;
  padding-bottom: 0.05rem; /* border: 1px solid red; */
  position: absolute;
  right: 0.3rem;
  line-height: 0.35rem;
  top: 1.05rem;
}

.choosed {
  background: #56d176;
  top: 1.85rem;
}
.show {
  background: #fff;
  margin-top: 0.2rem;
}
.show .xiaoguo {
  font-size: 0.4rem;
  color: #333;
}
.xiaoguo img {
  width: 1rem;
}
.show p {
  font-size: 0.3rem;
  color: #666;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.25rem 0.4rem;
}
.show span {
  float: right;
}
.number {
  margin-right: 0.3rem;
  color: #ff6600;
}
.numbers {
  color: #ff6600;
}
.tip {
  background: #fff;
  margin-top: 0.2rem;
}
.tip p {
  font-size: 0.33rem;
  color: #666;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.25rem 0.4rem;
}
.tip span {
  font-size: 0.28rem;
  color: #aaa;
  float: right;
}
.placeOrder {
  width: 7.5rem;
  background: #3c3c3c;
  position: fixed;
  bottom: 0;
  color: #fff;
  height: 0.9rem;
  font-size: 0.35rem;
}
.pay {
  float: left;
  margin: 0.2rem 0.3rem;
}
.pp {
  width: 7.5rem;
  height: 0.9rem;
  position: fixed;
  bottom: 0;
}
.pp a {
  display: inline-block;
}
.placeOrder a {
  color: #fff;
  background: #56d176;
  float: right;
  padding: 0.25rem 0.3rem;
}
p {
  margin-bottom: 0;
}
.tit {
  margin-left: 0.2rem;
  float: left;
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
  height: 5rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
  animation: dump 0.3s linear;
  /* border: 1px solid red; */
  background: white;
  margin: 0;
  padding: 0;
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

.zq {
  width: 6rem;
  height: 3.3rem;
  background: white;
  /* border: 1px solid red; */
}
.alert span {
  display: block;
  text-align: center;
  margin-top: 0.4rem;
}
.alert svg {
  width: 1.7rem;
  height: 1.7rem;
}

.alert span:nth-child(2) {
  font-size: 0.4rem;
  text-align: center;
  height: 0.9rem;
  width: 100%;
  /* border: 1px solid red; */
  position: absolute;
  /* top: 2.8rem; */
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
  position: absolute;
  bottom: 0;
}
</style>