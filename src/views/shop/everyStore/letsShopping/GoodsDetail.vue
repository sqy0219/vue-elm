<template>
  <div class="goodsDetail">
    <div class="hea">
      <NavTop4 :title="oneFood.name" icon6="/letsShop" />
    </div>
    <div class="content">
      <img class="goods" :src="getImg()" alt />
      <p class="foodTell">{{oneFood.description}}</p>
      <!-- 食品详细部分 -->
      <div class="show">
        <div class="one">
          <span>{{oneFood.name}}</span>
        </div>
        <div class="two">
          <span>评分</span>
          <div class="zhezhao1" :style="(`width:${(oneFood.rating)/5*0.92}rem`)">
            <span class="fiveStar1">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
          </div>
          <span class="fiveStar2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <span style="color:#ff6600;margin-left:1.3rem;">{{oneFood.rating}}</span>
        </div>
        <div class="three">
          <span>月售 {{oneFood.month_sales}}单</span>
          <span class="money">售价 ￥{{oneFood.specfoods[0].price}} 起</span>
        </div>
        <div class="four">
          <span>评论数 {{oneFood.rating_count}}</span>
          <span style="margin-left:0.2rem">好评率 {{oneFood.satisfy_rate}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../../components/common/NavTop4";
export default {
  name: "goodsDetail",

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
      oneFood: {}
    };
  },
  components: {
    NavTop4
  },
  created() {
    this.getOneStore();
  },

  methods: {
    getOneStore() {
      this.oneFood = JSON.parse(localStorage.getItem("onefood") || "[]");
      console.log(this.oneFood);
      // console.log(this.oneFood[0].image_path);
    },

    getImg() {
      return "https://elm.cangdu.org/img/" + this.oneFood.image_path;
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
    },
    toSPshow() {
      this.$router.push("/goodsDetail");
    }
  }
};
</script>

<style lang="scss" scoped>
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
// 购物车
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
}
.carname1 {
  margin: 0.2rem 0.5rem;
}
.carname2 {
  margin: 0.2rem 0.5rem 0.2rem 3.8rem;
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
.carinName {
  font-weight: 800;
  margin: 0 0.5rem;
}
.carinPrice {
  color: hsl(24, 100%, 50%);
  margin-left: 2rem;
  font-weight: 500;
}
.carinAdd,
.carinAmount,
.carinReduce {
  margin-top: 0;
}
.goods {
  width: 100%;
}
.foodTell {
  font-size: 0.24rem;
  color: #666;
  margin-left: 0.18rem;
  margin-top: 0.23rem;
}
.show {
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #333;
  padding: 0.23rem;
}
.two,
.three {
  margin-top: 0.14rem;
  margin-bottom: 0.14rem;
}
.fiveStar {
  font-size: 0.18rem;
  color: #ff9a0d;
  margin-left: 0.1rem;
}
.money {
  color: #ff9a0d;
  margin-left: 0.2rem;
}
p {
  margin-bottom: 0;
}
.fiveStar1 {
  color: #ff9a0d;
  font-size: 0.2rem;
  position: absolute;
  z-index: 1;
  height: 0.46rem;
  width: 0.94rem;
  top: 0.1rem;
  left: 0.01rem;
}

.fiveStar2 {
  color: #d1d1d1;
  font-size: 0.2rem;
  position: absolute;
  left: 4.62rem;
  top: 3.93rem;
  z-index: 0;
  height: 0.46rem;
  top: 9.9rem;
  left: 1rem;
}
.zhezhao1 {
  height: 0.46rem;
  overflow: hidden;
  position: absolute;
  z-index: 30;
  top: 9.8rem;
  left: 0.99rem;
}
</style>