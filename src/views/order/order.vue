<template>
  <div class="order">
    <div class="hea">
      <NavTop4 title="订单列表" icon6="/profile" />
    </div>

    <div class="content">
      <ul>
        <li v-for="(history, index) in historyList" :key="index" @click="getNew(history)">
          <div>
            <img :src="(`https://elm.cangdu.org/img/${history.oneStore.image_path}`)" alt />
            <div class="right">
              <div class="f">
                <span class="store" @click="toStore">
                  <span class="name">{{history.oneStore.name}}</span>
                  <i style="color:#e4e4e4" class="fa fa-angle-right"></i>
                </span>
                <span class="timeout">支付超时</span>
              </div>
              <span class="time">{{history.orderTime}}</span>

              <p class="p1">
                <span>{{history.order[0].specfoods[0].name}}&nbsp; 等{{history.order.length}}件商品</span>
                <span class="price">￥{{history.prices[3].prices}}</span>
              </p>

              <button @click="toStore(history)">再来一单</button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="foot">
      <Footer :icon3="icon" />
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
import Footer from "../../components/Footer/Footer";
export default {
  name: "order",
  data() {
    return {
      icon: true,
      historyList: [],
      user: []
    };
  },
  components: {
    Footer,
    NavTop4
  },
  created() {
    this.getOneStore();
  },
  methods: {
    getNew(history) {
      this.$router.push({ name: `oneOrder`, params: history });
    },
    toStore(history) {
      localStorage.setItem("oneStore", JSON.stringify(history.oneStore));

      this.$router.push("/letsShop");
      console.log("跳转到letsShop");
    },
    getOneStore() {
      const l = JSON.parse(localStorage.getItem("historyList"));
      this.user = JSON.parse(localStorage.getItem("user") || "[]");
      for (const key in l) {
        if (l[key].user_id == this.user.id) {
          this.historyList.push(l[key]);
        }
      }
      console.log(this.historyList);
      for (const key in this.historyList) {
        var a = this.historyList[key].orderTime.split("");

        a.splice(10, 1, "    ");
        a.splice(19, 5, "    ");
        this.historyList[key].orderTime = a.join("");
        // console.log(this.historyList[key].order[0].server_utc);
      }
    }
  }
};
</script>

<style scoped>
.order {
  width: 100%;
  min-height: 12rem;
}
.hea {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  top: 0;
}
.content {
  font-size: 0.3rem;
  background: #fff;
  padding: 0.2rem;
  color: #333;
  margin-top: 1rem;
}

li img {
  display: inline-block;
  margin-top: 0.4rem;
}
.f {
  width: 78%;
  height: 0.6rem;
  margin-top: 0.2rem;
  display: flex;
  border-bottom: 1px solid #e4e4e4;
}
.f span {
  flex: 1;
}
.name {
  display: inline-block;
  width: 4rem;
  height: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  /* border: 1px solid red; */
}
.f span:nth-child(2) {
  text-align: right;
  margin-right: 0.05rem;
}
img {
  width: 15%;
  float: left;
  margin: 0.2rem;
}
.p1 {
  margin-top: 0.12rem;
  display: flex;
}
.p1 span {
  flex: 1;
}
.content p {
  margin-left: 1.6rem;
  border-bottom: 1px solid #f5f5f5;
}
.store {
  font-size: 0.36rem;
  width: 5rem;
  height: 0.6rem;
}

.time {
  color: #999;
  font-size: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  width: 5rem;
  display: inline-block;
  border-bottom: 1px solid #e4e4e4;
}
.price {
  color: #ff6600;
  font-weight: 800;
  /* margin-left: 1.8rem; */
  text-align: right;
  margin-right: 0.15rem;
}

button {
  border: 1px solid #3190e8;
  border-radius: 0.1rem;
  background: #fff;
  color: #3190e8;
  padding: 0.05rem 0.1rem;
  margin: 0.5rem 0 0.5rem 5.5rem;
}
a {
  text-decoration: none;
}
p {
  margin-bottom: 0;
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.9rem;
}
li {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 0.3rem;
}
</style>