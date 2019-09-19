<template>
  <div class="SearchAd">
    <div class="hea">
      <NavTop4 title="搜索地址" icon6="/profile/addAddress" />
    </div>
    <div class="first">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="address" />
      <button @click="getAdd()">确认</button>
    </div>
    <div class="head">
      <p>为了满足商家的送餐要求，建议您从列表中选择地址</p>
    </div>
    <div v-if="addlist.length!=0">
      <ul>
        <li class="li" v-for="(list,index) in addlist" :key="index" @click="sendAdd(list)">
          <p>{{list.name}}</p>
          <p>{{list.address}}</p>
        </li>
      </ul>
    </div>
    <div v-else class="wu">
      <p>找不到地址？</p>
      <p>请尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号）可稍后输入哦。</p>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
import { mapGetters } from "vuex";

export default {
  name: "SearchAd",
  data() {
    return {
      address: "",
      addlist: [],
      id: ""
    };
  },
  computed: mapGetters(["button4"]),
  components: {
    NavTop4
  },
  methods: {
    getAdd() {
      console.log(this.addlist.length);

      let addr = JSON.parse(localStorage.getItem("address") || "{}");
      if (addr.id) {
        this.id = addr.id;
        this.$axios
          .get(`v1/pois?city_id=${this.id}&keyword=${this.address}&type=search`)
          .then(res => {
            console.log(res.data);
            this.addlist = res.data;
          });
      }
    },
    sendAdd(add) {
      const order = JSON.parse(localStorage.getItem("order") || "[]");
      if (order.length != 0) {
        this.$store.dispatch("setButton4Async", { address: add });
        this.$router.push("/addAddress");
      } else {
        this.$store.dispatch("setButton4Async", { address: add });
        this.$router.push("./");
      }
    }
  }
};
</script>

<style  scoped>
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}
* {
  padding: 0;
  margin: 0;
}
.SearchAd {
  width: 100%;
  min-height: 12rem;
  background-color: #f5f5f5;
  overflow: hidden;
}
.first {
  margin-top: 0.9rem;
  height: 1.24rem;
  width: 100%;
  display: flex;
  font-size: 0.4rem;
  padding: 0.2rem;
  background-color: white;
}
.first input {
  flex: 4;
  border-radius: 0.1rem;
  border: 1px solid #ddd;
  background: #f5f5f5;
  height: 0.8rem;
  padding: 0.2rem;
  font-size: 0.3rem;
}
.first button {
  flex: 1;
  margin-left: 0.2rem;
  border-radius: 0.1rem;
  border: none;
  font-size: 0.32rem;
  color: white;
  background-color: #3199e8;
}
button:focus {
  outline: none;
}
.head {
  height: 0.6rem;
  width: 100%;
  padding: 0.1rem 0;
  font-size: 0.3rem;
  text-align: center;
}
.head p {
  color: #ff883f;
  background-color: #fff6e4;
}
.wu {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.32rem;
  justify-content: center;
  align-items: center;
  margin-top: 1.8rem;
}
.wu p {
  margin-top: 0.2rem;
  color: #969696;
}
input {
  outline: none;
}
.li {
  margin-top: 0.2rem;

  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
  padding-left: 0.2rem;
  color: #969696;
}
.li p:nth-child(2) {
  margin-bottom: 0.2rem;
}
</style>