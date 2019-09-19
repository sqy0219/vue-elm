<template>
  <div class="search">
    <div class="hea">
      <NavTop4 title="搜索" icon6 />
    </div>
    <div class="first">
      <input type="text" placeholder="请输入商家或者美食" v-model="address" />
      <button @click="getAdd()">确认</button>
      <i v-if="del[0]" class="fa fa1 fa-times" @click="dell"></i>
    </div>
    <div class="head" v-if="you[0]">
      <p v-if="addlist.length==0">很抱歉，无搜索结果</p>
      <p v-if="!del[0]" class="pp2">搜索记录</p>
    </div>
    <div v-if="del[0]">
      <ul class="ul1">
        <li class="li" v-for="(list,index) in addlist" :key="index" @click="sendAdd(list)">
          <p>{{list.name}}</p>
          <p>{{list.address}}</p>
        </li>
      </ul>
    </div>
    <div v-if="!del[0]">
      <ul class="ul2">
        <li class="li2" v-for="(his,index) in history" :key="index">
          <p>{{his}}</p>
          <i class="fa fa-times" @click="del2(his,index)"></i>
        </li>
      </ul>
      <ul>
        <li v-if="you[0]" class="qk" @click="qk">清空搜索历史</li>
      </ul>
    </div>
    <div class="foot">
      <Footer :icon2="icon" />
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
import Footer from "../../components/Footer/Footer";
export default {
  name: "search",
  data() {
    return {
      icon: true,
      address: "",
      addlist: {},
      id: "",
      you: [false],
      del: [false],
      history: []
    };
  },
  components: {
    Footer,
    NavTop4
  },
  methods: {
    getAdd() {
      var a = JSON.parse(localStorage.getItem("historySs") || "[]");
      a.push(this.address);
      this.history = a;
      console.log(a);
      localStorage.setItem("historySs", JSON.stringify(a));
      let addr = JSON.parse(localStorage.getItem("address") || "{}");
      if (addr.id) {
        this.id = addr.id;
        this.del = [true];
        this.$axios
          .get(`v1/pois?city_id=${this.id}&keyword=${this.address}&type=search`)
          .then(res => {
            console.log(res.data);
            if (res.data.length == 0) {
              this.addlist = [];
              this.you.splice(0, 1, true);
            } else {
              // this.you.splice(0, 1, false);
              this.you.splice(0, 1, true);

              this.addlist = res.data;
            }
          });
      } else {
        this.$router.push("./");
      }
    },
    dell() {
      this.address = "";
      this.del = [false];
      // this.getAdd();
    },
    del2(his, index) {
      var a = JSON.parse(localStorage.getItem("historySs") || "[]");
      a.splice(index, 1);
      this.history.splice(index, 1);
      localStorage.setItem("historySs", JSON.stringify(a));
      if (this.history.length == 0) {
        this.you.splice(0, 1, false);

        this.del.splice(0, 1, false);
      }
    },
    sendAdd(list) {
      const address2 = JSON.parse(localStorage.getItem("address2") || "[]");
      address2.push(list);
      localStorage.setItem("address2", JSON.stringify(address2));
      this.$router.push("/shop");

      // if (order.length != 0) {
      //   this.$store.dispatch("setButton4Async", { address: add });
      // } else {
      //   this.$store.dispatch("setButton4Async", { address: add });
      //   this.$router.push("./");
      // }
    },
    qk() {
      localStorage.removeItem("historySs");
      this.history.splice(0, 100);
      console.log(this.history);
      this.you.splice(0, 1, false);

      this.del.splice(0, 1, false);
    }
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  min-height: 12rem;
  background: #f5f5f5;
  /* border: 1px solid red; */
}
.pp2 {
  text-align: left;
  margin-left: 0.3rem;
  font-weight: 700;
}
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
  top: 0;
}
.ul1 {
  margin-bottom: 1rem;
}
.fa1 {
  color: #3199e8;
  font-size: 0.4rem;
  height: 0.7rem;
  width: 0.7rem;
  line-height: 0.7rem;
  padding: 0 0.13rem;
  position: absolute;
  left: 5rem;
  top: 1.15rem;
}
.qk {
  text-align: center;
  color: #3199e8;
  font-size: 0.37rem;
  margin-bottom: 1rem;
  margin-top: 0.3rem;
}
.li2 {
  /* border: 1px solid red; */
  font-size: 0.3rem;
  padding: 0.1rem;
  display: flex;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  flex: 1;
}
.li2 p,
.li2 i {
  flex: 1;
  /* border: 1px solid red; */
  line-height: 0.7rem;
}
.ul2 {
  display: flex;
  flex-direction: column-reverse;
}
.li2 p {
  margin-left: 0.2rem;
}
.li2 i {
  text-align: right;
  margin-right: 0.5rem;
  color: #999;
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
  font-size: 0.37rem;
  text-align: center;
  height: 0.6rem;
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
  background-color: white;
  font-size: 0.3rem;
  border-bottom: 1px solid #ccc;
  padding-left: 0.2rem;
  /* color: #969696; */
}
.li p:nth-child(2) {
  margin-bottom: 0.2rem;
}
.foot {
  position: fixed;
  width: 100%;
  height: 0.9rem;
  bottom: 0;
}
</style>