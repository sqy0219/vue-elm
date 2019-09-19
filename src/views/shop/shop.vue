<template>
  <div class="shop">
    <div class="hea">
      <NavTop2 :title="address[address.length-1].name" :icon2="icon2" :icon1="icon1" />
    </div>

    <div class="swiper-container shophead">
      <div class="swiper-wrapper lbt">
        <div class="swiper-slide">
          <ul class="lbt-ul ul1">
            <router-link to="/shop/classify">
              <li
                class="lbt-li"
                v-for="(pic,index) in shoplist1"
                :key="index"
                @click="sendClassify(pic)"
              >
                <img class="img" :src="(`${pic.image_url}`)" />
                <p>{{pic.title}}</p>
              </li>
            </router-link>
          </ul>
        </div>
        <div class="swiper-slide">
          <ul class="lbt-ul ul1">
            <router-link to="/shop/classify">
              <li
                class="lbt-li"
                v-for="(pic,index) in shoplist2"
                :key="index"
                @click="sendClassify(pic)"
              >
                <img class="img" :src="(`${pic.image_url}`)" />
                <p>{{pic.title}}</p>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="shopStore">
      <div class="near">
        <svg class="shop_icon">
          <svg viewBox="0 0 32 31" id="shop">
            <g fill-rule="evenodd">
              <path
                d="M28.232 1.822C27.905.728 26.97.152 25.759.152H5.588c-1.252 0-1.867.411-2.397 1.415l-.101.243-.443 1.434-.975 3.154-.002.007C.837 9.101.294 10.854.26 10.956l-.059.259c-.231 1.787.337 3.349 1.59 4.448 1.159 1.017 2.545 1.384 3.865 1.384.07 0 .07 0 .132-.002-.01.001-.01.001.061.002 1.32 0 2.706-.367 3.865-1.384a4.96 4.96 0 0 0 .413-.407l-1.043-.946-1.056.931c1.033 1.171 2.51 1.792 4.21 1.801.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.148-.13.287-.267.418-.411l-1.044-.944-1.057.93c1.033 1.174 2.511 1.796 4.213 1.806.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.15-.131.29-.27.422-.416l-1.046-.943-1.058.929c1.033 1.177 2.513 1.801 4.218 1.811.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384 1.206-1.058 1.858-2.812 1.676-4.426-.069-.61-.535-2.207-1.354-4.785l-.109-.342a327.554 327.554 0 0 0-1.295-3.966l-.122-.366.014.043h.004zm-2.684.85l.12.361.318.962c.329.999.658 2.011.965 2.973l.108.338c.719 2.262 1.203 3.92 1.24 4.249.08.711-.233 1.553-.735 1.993-.553.485-1.308.685-2.008.685l-.098-.002c-.987-.007-1.695-.306-2.177-.854l-1.044-1.189-1.06 1.175a2.192 2.192 0 0 1-.188.185c-.553.485-1.308.685-2.008.685l-.098-.002c-.985-.007-1.693-.305-2.174-.852l-1.043-1.185-1.059 1.171c-.058.064-.12.125-.186.183-.553.485-1.308.685-2.008.685l-.098-.002c-.984-.007-1.692-.304-2.173-.85L9.101 12.2l-1.058 1.166a2.248 2.248 0 0 1-.184.181c-.553.485-1.307.685-2.008.685l-.061-.001-.131.001c-.701 0-1.455-.2-2.008-.685-.538-.472-.767-1.102-.654-1.971l-1.396-.18 1.338.44c.043-.13.552-1.775 1.425-4.599l.002-.007.975-3.155.443-1.434-1.345-.415 1.245.658c.054-.102.042-.085-.083-.001-.122.082-.143.086-.009.086H25.763c.053 0-.164-.133-.225-.339l.014.043-.004-.001zM5.528 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"
              />
              <path
                d="M.28 29.72c0-.707.58-1.28 1.277-1.28h28.155a1.28 1.28 0 0 1 .007 2.56H1.561A1.278 1.278 0 0 1 .28 29.72z"
              />
              <path
                d="M26.008 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"
              />
            </g>
          </svg>
        </svg>
        <span>附近商家</span>
      </div>
      <ul class="shopStoreList">
        <li @click="toshop(store)" v-for="(store,index) in shopStoreList" :key="index">
          <div class="storeIntroduce">
            <img :src="(`//elm.cangdu.org/img//${store.image_path}`)" alt />
            <p class="p1">
              <span class="tip">品牌</span>
              <span class="storeName">{{store.name}}</span>
              <span class="ticket">保准票</span>
            </p>

            <p class="p2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span class="mark">{{store.rating}}</span>
              <span class="amount">月售{{store.recent_order_num}}单</span>
              <span class="fengniao">{{store.delivery_mode.text}}</span>
              <span class="arrive">{{store.supports[1].name}}</span>
            </p>
            <span class="span1" :style="(`width:${(store.rating)/5*.97}rem`)">
              <p class="p2 p5">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </p>
            </span>

            <p>
              <span
                class="price"
              >￥{{store.float_minimum_order_amount}}起送/{{store.piecewise_agent_fee.tips}}</span>
              <span class="discount">{{store.distance}}/</span>
              <span class="time">{{store.order_lead_time}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="k"></div>
    <div class="footer">
      <Footer :icon1="icon" />
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import NavTop2 from "../../components/common/NavTop2";
import Footer from "../../components/Footer/Footer";
export default {
  name: "shop",
  data() {
    return {
      icon: true,
      icon1: false,
      icon2: true,
      address: [],
      shoplist1: {},
      shoplist2: {},
      shopStoreList: {}
    };
  },
  created() {
    this.getAdd2();
    this.getShoplist();
    this.getShopStoreList();
  },
  components: {
    Footer,
    NavTop2
  },
  methods: {
    //获取地址数据
    getAdd2() {
      this.address = JSON.parse(localStorage.getItem("address2"));
    },
    //进入页面获取食品分类列表
    getShoplist() {
      this.$axios.get("/v2/index_entry").then(res => {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].image_url =
            "https://fuss10.elemecdn.com/" + res.data[i].image_url;
        }
        this.shoplist1 = res.data.splice(0, 8);
        this.shoplist2 = res.data.splice(0, 8);
        console.log(this.shoplist1, this.shoplist2);
      });
    },
    //获取商店类表信息
    getShopStoreList() {
      this.$axios
        .get(
          `https://elm.cangdu.org/shopping/restaurants?latitude=${this.address.latitude}&longitude=${this.address.longitude}`
        )
        .then(res => {
          console.log(res);
          this.shopStoreList = res.data;
        });
    },
    toshop(store) {
      localStorage.setItem("oneStore", JSON.stringify(store));
      this.$router.push("/addShoping");
    },
    //保存选择的分类数据
    sendClassify(pic) {
      localStorage.setItem("classify", JSON.stringify(pic));
    }
  },
  mounted() {
    var that = this;
    that.$nextTick(function() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: false,

        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      });
    });
  },
  watch: {}
};
</script>

<style scoped>
.shop {
  width: 100%;
  min-height: 1rem;
  background-color: #f5f5f5;
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
}
.span1 {
  width: 1rem;
  height: 0.36rem;
  position: absolute;
  top: 0.7rem;
  width: 1rem;
  margin-left: 0.12rem;
  height: 0.36rem;
  overflow: hidden;
}
.p5 {
  display: inline-block;
  position: absolute;
  width: 1rem;
  height: 0.36rem;
  overflow: hidden;
  left: -1.6rem;
}
.p5 .fa-star {
  color: #ff9a0d;
  font-size: 0.2rem;
}
.k {
  width: 100%;
  height: 1.4rem;
}
.hea {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  top: 0;
  z-index: 4;
}
.shophead {
  margin-top: 1rem;
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 0.9rem;
}
.shophead {
  width: 100%;
  height: 3.7rem;
  background: #fff;
}
/* //轮播图 */
.lbt {
  width: 7.5rem;
  height: 100%;
  /* display: flex; */
}
.lbt-ul {
  width: 7.5rem;
  height: 100%;
  border-bottom: 1px solid #e4e4e4;
}

.swiper-pagination {
  position: absolute;
  top: 2.1rem;
  width: 7.5rem;
  height: 0.3rem;
}
.lbt-li {
  width: 1.875rem;
  height: 1.72rem;
  float: left;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lbt-li p {
  font-size: 0.25rem;
  color: #666;
}
.img {
  display: inline-block;
  margin-top: 0.2rem;
  width: 0.84rem;
}

.shopStore {
  width: 100%;
  min-height: 1rem;
  background-color: white;
  margin-top: 0.2rem;
}
/* 附近商家 */
.near {
  width: 100%;
  height: 0.76rem;
  display: flex;
  align-items: center;
  color: #999;
}
.shop_icon {
  width: 0.29rem;
  height: 0.35rem;
  line-height: 0.76rem;
  text-align: center;
  fill: #999;
  margin: 0 0.2rem;
}
.near span {
  font-size: 0.25rem;
}

.shopStoreList {
  width: 100%;
}
.shopStoreList li {
  width: 100%;
  height: 2rem;
  /* border: 1px solid red; */
  margin-top: 0.25rem;
  /* padding: 0.32rem; */

  border-bottom: 0.025rem solid #f1f1f1;
}
/* 店家 */
.storeIntroduce {
  position: absolute;
  width: 100%;
  background: #fff;
  padding: 0.1rem;
  /* border: 1px solid red; */
}
.storeIntroduce p {
  margin: 0rem 0 0.1rem 1.6rem;
  font-size: 0.25rem;
  /* border: 1px solid red; */
  /* text-align: center; */
}
.storeIntroduce img {
  width: 1.26rem;
  float: left;
  margin: 0.1rem;
}
.p1 {
  width: 78%;
  height: 0.5rem;
}
.tip {
  position: relative;
  display: inline;
  height: 0.46rem;
  line-height: 0.46rem;
  font-size: 0.23rem;
  background: #ffd930;
  border-radius: 0.05rem;
  margin-right: 0.2rem;
  font-weight: 600;
  text-align: center;
  top: -0.12rem;
}
.storeName {
  display: inline-block;
  font-size: 0.27rem;
  font-weight: 600;
  /* margin-top: 0.1rem; */
  color: #333;

  overflow: hidden;
  text-overflow: ellipsis;
  width: 2.5rem;
  line-height: 0.46rem;
  height: 0.46rem;
}
.ticket {
  font-size: 0.2rem;
  color: #999;
  margin-left: 1.5rem;
  height: 0.46rem;
  line-height: 0.46rem;
  position: relative;
  top: -0.12rem;
  line-height: 0.46rem;
}

.fa-star {
  color: #d1d1d1;
  font-size: 0.2rem;
}
.mark {
  font-size: 0.2rem;
  color: #ff9a0d;
  /* border: 1px solid red; */
}
.mark {
  margin: 0 0.2rem;
}
.amount {
  font-size: 0.2rem;
  color: #666;
}
.fengniao {
  font-size: 0.2rem;
  background: #3190e8;
  color: #fff;
  border-radius: 0.05rem;
  padding: 0 0.05rem;
  margin: 0 0.05rem 0 1.3rem;
}
.arrive {
  font-size: 0.2rem;
  color: #3190e8;
  border: 1px solid #3190e8;
  border-radius: 0.05rem;
}
.price {
  color: #666;
}
.discount {
  margin-left: 1.2rem;
}
.time {
  color: #3190e8;
}
</style>