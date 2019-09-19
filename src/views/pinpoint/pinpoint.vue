<template>
  <div class="pinpoint">
    <div class="hea">
      <NavTop3 :title="address.name" :icon2="icon2" :icon1="icon1" icon6 icon5="切换城市" />
    </div>
    <form @submit.prevent="submit()" class="form">
      <div class="select">
        <input
          v-model="search"
          type="search"
          name="city"
          placeholder="输入学校、商务楼、地址"
          required="required"
        />
      </div>
      <div class="button">
        <button type="submit">提交</button>
      </div>
    </form>
    <div v-if="judge" class="history">
      <p class="ss">搜索历史</p>
      <ul>
        <li @click="sendAdd(ad2)" v-for="(ad2,index) in address2 " :key="index">
          <h4>{{ad2.name}}</h4>
          <p>{{ad2.address}}</p>
        </li>
      </ul>
      <div v-if="address2.length!=0" @click="clear" class="clear">清除记录</div>
    </div>
    <div v-if="!judge" class="history">
      <ul v-if="searchAddr.length!=0">
        <li @click="sendAdd(searchAdr)" v-for="(searchAdr,index) in searchAddr " :key="index">
          <h4>{{searchAdr.name}}</h4>
          <p>{{searchAdr.address}}</p>
        </li>
      </ul>
      <div v-else class="clear">很抱歉，无此搜索结果</div>
    </div>
  </div>
</template>

<script>
import NavTop3 from "../../components/common/NavTop3";
export default {
  name: "pinpoint",
  data() {
    return {
      address: {},
      address2: [],
      icon1: true,
      icon2: false,

      search: "",
      searchAddr: {},
      judge: true
    };
  },
  components: {
    NavTop3
  },
  created() {
    this.getAddr();
  },
  methods: {
    getAddr() {
      this.address = JSON.parse(localStorage.getItem("address"));
      this.address2 = JSON.parse(localStorage.getItem("address2") || "[]");
    },
    submit() {
      console.log(this.search);
      this.$axios
        .get(
          `/v1/pois?city_id=${this.address.id}&keyword=${this.search}&type=search `
        )
        .then(res => {
          console.log(res.data);
          this.searchAddr = res.data;
          this.search = "";
        });
      this.judge = false;
    },
    sendAdd(add) {
      //精确定位保存地址到本地
      console.log(add);
      var local1 = JSON.parse(localStorage.getItem("address2") || "[]");
      // console.log(local1);

      // loac.push(loacl1);
      // console.log(loac);
      // local1.push(add);

      for (var i = 0; i < local1.length; i++) {
        if (local1[i].name == add.name && local1[i].address == add.address) {
          local1.push(add);
          local1.splice(i, 1);
          this.judge = true;
          localStorage.setItem("address2", JSON.stringify(local1));
          this.$router
            .push("/shop")
            .then(res => {
              // console.log(res.message);
            })
            .catch(err => {
              // console.log(err);
            });
        }
      }

      if (this.judge == false) {
        local1.push(add);
        this.judge = true;
        localStorage.setItem("address2", JSON.stringify(local1));
        this.$router.push("/shop");
      }
    },
    clear() {
      localStorage.setItem("address2", JSON.stringify([]));
      this.getAddr();
      console.log(this.address2);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.pinpoint {
  min-height: 12rem;
  background: #f5f5f5;
  overflow: hidden;
}
.hea {
  position: fixed;
  width: 100%;
  height: 0.9rem;
}
.form {
  margin-top: 1rem;
  font-size: 0.26rem;
  width: 100%;
  height: 1.8rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.select,
.button {
  width: 100%;
  padding: 0 0.14rem;
  text-align: center;
}
input {
  width: 96%;
  list-style: none;
  padding: 0 0.16rem;
  font-size: 0.3rem;
  color: #333;
  height: 0.6rem;
  box-sizing: border-box;
  margin: 0.2rem 0;
  border: 1px solid #e4e4e4;
  outline: none;
  border-radius: 0.05rem;
}
button {
  width: 96%;
  list-style: none;
  padding: 0 0.16rem;
  font-size: 0.3rem;
  color: #fff;
  height: 0.6rem;
  box-sizing: border-box;
  margin: 0 0 0.2rem 0;
  border: 1px solid #e4e4e4;
  outline: none;
  background-color: #3190e8;
  border-radius: 0.05rem;
}
.history .ss {
  width: 100%;
  font-size: 0.22rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  margin-left: 0.2rem;
  padding-left: 0.15rem;
  color: #333;
  background-color: #f5f5f5;
  padding: 0.05rem 0;
}
ul {
  width: 100%;
  font-size: 0.22rem;
  margin: 0;
}
li {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  background: white;
}
h4 {
  width: 90%;
  height: 0.6rem;
  font-size: 0.32rem;
  padding: 0;
  margin-top: 0.3rem;
  margin-left: 0.22rem;
  color: #333;
  text-align: left;
  margin-left: 0.2rem;
}
li p {
  width: 90%;
  height: 0.3rem;
  font-size: 0.2rem;
  color: #999;
  margin-left: 0.22rem;
  margin-bottom: 0.2rem;
}
.clear {
  font-size: 0.34rem;
  color: #666;
  text-align: center;
  width: 100%;
  height: 0.8rem;
  padding: 0.2rem;
  background: white;
}
</style>