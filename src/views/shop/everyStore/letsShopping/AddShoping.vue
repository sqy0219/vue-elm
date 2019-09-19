<template>
  <div class="addShoping">
    <div class="left">
      <ul class="left-ul">
        <li
          v-for="(oneFood, index) in oneFoodList"
          :key="index"
          @click="dianji(oneFood)"
          :style="[{borderLeft:oneFood.istrue?'2px solid #3190e8':'none'},{background:oneFood.istrue?'#fff':'#f5f5f5'},{fontWeight:oneFood.istrue?'900':'300'}]"
        >{{oneFood.name}}</li>
      </ul>
    </div>
    <div class="goods">
      <p class="hot">
        <span>{{lastFood.name}}</span>
        <span style="color:#666;fontSize:.26rem;fontWeight:500">{{lastFood.description}}</span>
      </p>
      <ul class="uul">
        <li @click="onefood(food)" v-for="(food, index) in oneFoods" :key="index" class="ul-li">
          <div class="good">
            <img :src="(`https://elm.cangdu.org/img/${food.image_path}`)" alt />
            <div class="introduce">
              <p class="goodTitle">{{food.name}}</p>
              <p class="goodRemark">{{food.description}}</p>
              <p class="goodSales">
                <span>月售{{food.month_sales}}份</span>&nbsp;
                <span>好评率{{food.satisfy_rate}}%</span>
              </p>
              <p class="pp1" v-if="food.activity">{{food.activity.image_text}}313</p>
              <span class="goodPrice">￥{{food.specfoods[0].price}}元</span>
              <span @click.stop="add(food)" class="add">
                <i class="fa fa-plus-circle"></i>
              </span>
              <span v-show="food.zhi" class="amount">{{food.amount}}</span>
              <span v-show="food.zhi" @click="reduce(food)" class="reduce">
                <i class="fa fa-minus-circle"></i>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div @click="block" class="block" v-show="zhi3"></div>
    <div class="carInformation" v-show="zhi3&&zhi4">
      <p class="carname">
        <span class="carname1">购物车</span>
        <span @click="carDel" class="carname2">
          <i class="fa fa-trash"></i>清空
        </span>
      </p>

      <div class="carin" v-show="zhi3">
        <ul>
          <li v-for="(shopc, index) in shopcar" :key="index">
            <span class="carinName">{{shopc.name}}</span>
            <span class="carinPrice">￥{{shopc.amount*shopc.specfoods[0].price}}</span>
            <span @click="add1(shopc)" class="add carinAdd">
              <i class="fa fa-plus-circle"></i>
            </span>
            <span v-show="zhi" class="amount carinAmount">{{shopc.amount}}</span>
            <span v-show="zhi" @click="reduce1(shopc)" class="reduce carinReduce">
              <i class="fa fa-minus-circle"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="car">
      <i @click="carInformation" :class="{blue:zhi1}" class="fa fa-shopping-cart"></i>
      <span v-show="zhi1" class="quan">{{amounts}}</span>
      <span class="prices">
        <p class="price">￥{{prices}}</p>
        <p class="psprice">配送费￥{{oneStore.float_delivery_fee}}</p>
      </span>
      <span class="cha" v-show="zhi2">还差￥20元起送</span>
      <!-- <router-link to="#"> -->
      <button class="count" @click="order()" v-show="!zhi2">去结算</button>
      <!-- </router-link> -->
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
import { mapGetters } from "vuex";
export default {
  name: "addShoping",
  data() {
    return {
      clickgoods: [],
      amount: 0,
      zhi: false,
      zhi1: false,
      amounts: 0,
      zhi2: true,
      prices: 0,
      zhi3: false,
      zhi4: false,
      zhi5: true,
      zhi6: false,
      zhi7: true,
      oneStore: {},
      oneFoodList: {},
      oneFoods: {},
      lastFood: {},
      shopcar: [],
      show: false
    };
  },
  created() {
    this.getFood();
  },
  computed: mapGetters(["shopcar1"]),

  methods: {
    vueshopcar() {
      this.$store.dispatch("setShopcar1Async", {
        shopcar1: this.shopcar
      });
    },

    getFood() {
      this.oneStore = JSON.parse(localStorage.getItem("oneStore"));
      this.$axios
        .get(`/shopping/v2/menu?restaurant_id=${this.oneStore.id}`)
        .then(res => {
          this.oneFoodList = res.data;
          this.lastFood = res.data[0];
          this.dianji(res.data[0]);
        });
      // var g = this.$store.getters.shopcar1;
      // if (g != undefined) {
      //   this.shopcar = g.shopcar1;
      //   console.log(this.shopcar);
      //   for (const key in this.shopcar) {
      //     this.zhi = true;
      //     this.zhi1 = true;
      //     this.shopcar[key].zhi = true;
      //     this.prices +=
      //       this.shopcar[key].specfoods[0].price * this.shopcar[key].amount;

      //     this.amounts += this.shopcar[key].amounts;

      //     if (this.prices >= 20) {
      //       this.zhi2 = false;
      //     } else {
      //       this.zhi2 = true;
      //     }
      //   }
      // }
    },
    dianji(oneFood) {
      if (this.lastFood.istrue) {
        this.lastFood.istrue = false;
      }

      this.lastFood = oneFood;
      this.oneFoods = oneFood.foods;
      oneFood.istrue = true;
    },
    add(food) {
      this.zhi = true;
      this.zhi1 = true;

      // this.zhi3=true
      if (food.amount == undefined) {
        food.amount = 1;
      } else {
        food.amount = food.amount + 1;
      }
      food.zhi = true;
      this.prices += food.specfoods[0].price;

      this.amounts = this.amounts + 1;
      var a = this.shopcar.indexOf(food);
      if (a == -1) {
        this.shopcar.push(food);
      } else {
        this.shopcar[a].amount = food.amount;
      }
      if (this.prices >= 20) {
        this.zhi2 = false;
      } else {
        this.zhi2 = true;
      }
    },
    add1(shopc) {
      this.add(shopc);
    },
    reduce(food) {
      if (food.amount == 0) {
        return;
      }
      this.amounts = this.amounts - 1;
      food.amount--;
      this.prices = this.prices - food.specfoods[0].price;
      if (food.amount == 0) {
        food.zhi = false;
        var a = this.shopcar.indexOf(food);
        this.shopcar.splice(a, 1);
      }

      if (this.prices < 20) {
        this.zhi = false;
        this.zhi1 = false;
        this.zhi3 = false;
        this.zhi2 = true;
      }
    },
    reduce1(shopc) {
      this.reduce(shopc);
    },
    carInformation() {
      this.zhi3 = false;
      this.zhi4 = false;
      if (this.prices >= 20) {
        this.zhi3 = !this.zhi3;
        this.zhi4 = !this.zhi4;
      } else {
        this.zhi3 = false;
        this.zhi4 = false;
      }
    },
    carDel() {
      this.zhi3 = false;
      this.zhi2 = true;
      this.zhi4 = false;

      this.amounts = 0;
      this.zhi1 = false;
      this.prices = 0;
      this.zhi = false;
      this.getFood();
      this.shopcar = [];
    },
    block() {
      this.zhi3 = false;
    },
    title() {
      this.zhi5 = true;
      this.zhi6 = false;
    },
    title1() {
      this.zhi5 = false;
      this.zhi6 = true;
    },
    order() {
      localStorage.setItem("order", JSON.stringify(this.shopcar));
      const user = JSON.parse(localStorage.getItem("user") || "[]");
      if (user.id == undefined) {
        this.show = true;
        return;
      }

      this.$router.push("/confirmOrder");
    },
    log() {
      this.$router.push("/login");
    },
    onefood(food) {
      localStorage.setItem("onefood", JSON.stringify(food));
      this.vueshopcar();
      this.$router.push("/goodsDetail");
    }
  }
};
</script>

<style lang="scss" scoped>
.left {
  width: 1.6rem;
  float: left;
  font-size: 0.28rem;
  color: #666;
  position: fixed;
  margin-top: 0.4rem;
  // border: 1px solid red;
}

.introduce .pp1 {
  // display: inline;
  text-align: center;
}
.pp1 {
  font-size: 0.3rem;
  margin: 0.2rem auto 0;
  color: #f40;
  // width: auto;
  width: 3rem;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #f40;
}
.left-ul {
  background-color: #f5f5f5;
}
.left li {
  list-style-type: nne;
  padding: 0.35rem 0.2rem;
  border-bottom: 1px solid #e4e4e4;
  list-style: none;
  outline: none;
}

.ul-li {
  list-style: none;
  width: 100%;
}
.choosedli {
  background: #fff;
  border-left: 2px solid #3190e8;
  font-weight: 700;
}

.goods {
  font-size: 0.5rem;
  float: right;
  background: #fff;
  padding: 0.45rem 0;
  // border: 1px solid red;
}
.goods .hot {
  font-size: 0.3rem;
  color: #999;
  background: #f5f5f5;
  margin-right: 0;
  padding: 0.2rem 0;
  width: 5.9rem;
}
.hot span {
  font-weight: 800;
  font-size: 0.36rem;
  color: #666;
  padding: 0 0.2rem;
}
.good {
  width: 5.5rem;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.2rem;
}
.good img {
  width: 1.5rem;
  float: left;
}
.goodTitle {
  font-size: 0.36rem;
  color: #333;
  font-weight: 800;
  margin: 0.1rem 0 0 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 2.5rem;
  height: 0.6rem;
}
.goodRemark {
  font-size: 0.25rem;
  color: #999;
  margin: 0.1rem 0 0 1.7rem;
}
.goodSales {
  font-size: 0.26rem;
  margin: 0.1rem 0 0 1.7rem;
  color: #333;
}
.goodPrice {
  font-size: 0.28rem;
  color: #ff6600;
  margin: 0.1rem 0 0 0.3rem;
  font-weight: 800;
}
.amount {
  font-size: 0.28rem;
  margin: 0.25rem 0 0.25rem 0.25rem;
  float: right;
}
.fa-plus-circle,
.fa-minus-circle {
  color: #3190e8;
}
.add,
.reduce {
  text-align: center;
  font-size: 0.34rem;
  font-weight: 800;
  width: 0.28rem;
  height: 0.28rem;
  color: #fff;
  margin: 0.2rem;
  float: right;
  padding: 0 0.1rem 0.2rem 0.1rem;
}
.car {
  height: 1rem;
  background: #333;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.fa-shopping-cart {
  font-size: 0.7rem;
  border: 0.08rem solid #333;
  border-radius: 50%;
  color: #fff;
  background: #3d3d3f;
  /* background: blue; */
  padding: 0.15rem 0.2rem;
  margin-left: 0.5rem;
  position: fixed;
  bottom: 0.1rem;
}
.cha {
  float: right;
  background: #535356;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 800;
  padding: 0.3rem 0.15rem;
}
.blue {
  background: #3190e8;
}
.quan {
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  height: 0.4rem;
  width: 0.4rem;
  background: red;
  border-radius: 50%;
  position: fixed;
  bottom: 0.9rem;
  left: 1.4rem;
}
.prices {
  position: fixed;
  left: 2rem;
  color: #fff;
}
.price {
  font-size: 0.4rem;
  font-weight: 800;
  // padding-bottom: 0.15rem;
}
.psprice {
  font-size: 0.25rem;
}
.count {
  font-size: 0.4rem;
  font-weight: 800;
  background: #4cd964;
  color: #fff;
  border: none;
  position: fixed;
  right: 0;
  padding: 0.25rem 0.7rem;
}
.block {
  position: fixed;
  width: 100%;
  height: 20rem;
  background: rgba(0, 0, 0, 0.3);
  margin-top: -3rem;
}
.carInformation {
  position: fixed;
  bottom: 1rem;
  color: #666;
  /* background: #fff; */
  /* height: 20rem; */
  background: rgba(0, 0, 0, 0.3);
}
.carname {
  background: #eceff1;
  font-size: 0.32rem;
  padding: 0.2rem;
  display: flex;
  width: 7.5rem;
}
.carname1 {
  flex: 1;
  margin: 0.2rem 0.5rem 0.1rem;
  // border: 1px solid red;
}
.carname2 {
  flex: 1;
  // border: 1px solid red;
  text-align: right;
  margin: 0.2rem 0.5rem 0.1rem;
}
.fa-trash {
  font-weight: 200;
  margin-right: 0.2rem;
}
.carin {
  background: #fff;
  font-size: 0.4rem;
  padding: 0.3rem 0.2rem;
}
.carin ul {
  display: flex;
  flex-direction: column-reverse;
}
.carin ul li {
  height: 0.8rem;
  // border: 1px solid red;
  font-size: 0.33rem;
  line-height: 0.8rem;
  display: flex;
  border-bottom: 1px solid #d4d4d4;
}
.carin ul li span {
  flex: 1;
  margin: 0;
  // border: 1px solid red;
}
.carin ul li span:nth-child(1) {
  flex: 100;
  // border: 1px solid red;
}
.carin ul li span:nth-child(2) {
  flex: 1;
  padding-right: 0.5rem;
  // border: 1px solid red;
}
.carin ul li span:nth-child(3) {
  flex: 1;
  padding-right: 0.3rem;
  // border: 1px solid red;
}
.carin ul li span:nth-child(4) {
  flex: 1;
  margin: 0 0.2rem;
  // border: 1px solid red;
}
.carin ul li span:nth-child(5) {
  flex: 1;
  padding-right: 0.4rem;
  // border: 1px solid red;
}

.carinName {
  font-weight: 700;
}
.carinPrice {
  color: #ff6600;
  font-weight: 500;
}
.carinAdd,
.carinAmount,
.carinReduce {
  margin-top: 0;
}
p {
  margin-bottom: 0;
}
.pp1 {
  font-size: 0.24rem;
  width: 4rem;
}

/* 弹框 */

.container .alert {
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

.container .zq {
  width: 6rem;
  height: 3.3rem;
  background: white;
  /* border: 1px solid red; */
}
.container .alert span {
  display: block;
  text-align: center;
  margin-top: 0.4rem;
}
.container .alert svg {
  width: 1.7rem;
  height: 1.7rem;
}

.container .alert span:nth-child(2) {
  font-size: 0.4rem;
  text-align: center;
  height: 0.9rem;
  width: 100%;
  /* border: 1px solid red; */
  position: absolute;
  /* top: 2.8rem; */
}
.container .ok {
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