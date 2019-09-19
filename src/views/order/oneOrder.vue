<template>
  <div class="DDXQ">
    <div class="hea">
      <NavTop4 title="订单详情" icon6 />
    </div>
    <!-- 订单详情标题 -->
    <div>
      <div class="orderHead">
        <div class="picture">
          <img :src="(`https://elm.cangdu.org/img/${history.oneStore.image_path}`)" alt />
        </div>
        <p class="payState">支付超时</p>
        <button class="another" @click="toStore(history)">再来一单</button>
      </div>
      <!-- 下单商品 -->
      <div class="order">
        <div class="p1" @click="toStore(history)">
          <div class="storePic">
            <img :src="(`https://elm.cangdu.org/img/${history.oneStore.image_path}`)" alt />
          </div>
          <div class="storeName">{{history.oneStore.name}}</div>
          <div>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
        <div class="p2" v-for="(order, index1) in history.order" :key="index1">
          <div class="tosmall">{{order.specfoods[0].name}}</div>
          <div class="tosmall buyCount">x{{order.amount}}</div>
          <div class="tosmall">￥{{order.specfoods[0].price *order.amount}}</div>
        </div>
        <div class="p2">
          <div class="tosmall">配送费</div>
          <div class="tosmall">￥{{history.prices[2].psf}}</div>
        </div>
        <div class="p3">
          <div class="tosmall1">餐盒费</div>
          <div class="tosmall1">￥{{history.prices[1].chf}}</div>
        </div>
        <div class="p4">实付￥{{history.prices[3].prices}}</div>
      </div>
      <!-- 商家配送信息 -->
      <div class="order1">
        <div class="sendMess">配送信息</div>
        <div class="tosmall">送达时间: {{history.orderTime}}</div>
        <div class="sendAddr">
          <div class="tosmall">送货地址:{{history.address.address}}</div>
          <div class="tosmall" id="username">{{history.address.name}}</div>
          <div class="tosmall" id="phone">{{history.address.phone}}（电话）</div>
        </div>
        <div class="sendMethod tosmall">配送方式: {{history.oneStore.delivery_mode.text}}</div>

        <div class="tosmall">下单时间: {{orderTime}}</div>
        <div class="tosmall">支付方式:在线支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "ddxq",
  data() {
    return {
      history: [],
      orderTime: ""
    };
  },
  components: {
    NavTop4
  },
  created() {
    this.getOne();
  },

  methods: {
    toStore() {
      localStorage.setItem("oneStore", JSON.stringify(this.history.oneStore));

      this.$router.push("/letsShop");
    },
    getOne() {
      this.history = this.$route.params;
      this.orderTime = this.history.orderTime;
      var a = this.history.orderTime.split("");
      a[15] = +a[15] + 1;
      this.history.orderTime = a.join("");
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
#myHeader {
  width: 100%;
  background: #3190e8;
  font-size: 0.4rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  padding: 0.2rem;
  position: relative;
}
.fa-angle-left {
  color: #fff;
  display: block;
  position: absolute;
  font-size: 0.6rem;
}
/*订单详情标题*/
.orderHead {
  display: flex;
  //   height: 3.12rem;
  background: #fff;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  padding: 0.328rem;
}

.picture img {
  width: 1.45rem;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}
.payState {
  font-size: 0.42rem;
  font-weight: 700;
  margin-left: -0.16rem;
}
.another {
  appearance: none;
  color: #3190e8;
  font-size: 0.28rem;
  padding: 0.07rem 0.187rem;
  background-color: #fff;
  border: 0.02rem solid #3190e8;
  border-radius: 0.02rem;
  margin-top: 0.3rem;

  margin-left: -0.16rem;
}
/*下单商品*/
.order {
  //   height: 4rem;
  box-sizing: border-box;
  padding-top: 0.234rem;
  background: #f5f5f5;
}

.p1,
.p2,
.p3,
.p4 {
  display: flex;
  background: #fff;
  padding: 0 0.234rem;
  line-height: 0.95rem;
  border-bottom: 0.02rem solid #f5f5f5;
  justify-content: space-between;
  align-content: center;
  //   border: 1px solid red;
}
.p1 div,
.p2 div,
.p3 div {
  display: block;
}
.storePic img {
  width: 0.56rem;
  margin-top: 0.2rem;
  display: block;
}
.storeName {
  font-size: 0.352rem;
  color: #333;
  font-weight: 700;
  margin-left: -1rem;
  overflow: hidden;
  width: 4rem;
  height: 0.8rem;
  text-overflow: ellipsis;
  //   border: 1px solid red;
}
.tosmall,
.tosmall1 {
  font-size: 0.28rem;
  color: #666;
}
.buyCount {
  color: #ccc;
  margin-left: 4rem;
}
.fa-angle-right {
  display: block;
  font-size: 0.52rem;
  color: #666;
  margin-top: 0.2rem;
}
.p4 {
  font-size: 0.3rem;
  color: #fb6b23;
  font-weight: 700;
  justify-content: flex-end;
}
/*商家配送信息*/
.order1 {
  height: 4rem;
  box-sizing: border-box;
  padding-top: 0.234rem;
  background: #f5f5f5;
}
.order1 div {
  background: #fff;
  padding: 0.24rem;
}
.sendMess {
  font-size: 0.34rem;
  color: #333;
}
.sendAddr {
  overflow: hidden;
}
.sendAddr div {
  float: left;
  padding: 0;
}
#username {
  padding-left: 0.2rem;
  width: 3rem;
}
#phone {
  padding-left: 1.35rem;
  line-height: 0.8rem;
}
</style>