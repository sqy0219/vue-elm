<template>
  <div class="chooseAddress">
    <div class="hea">
      <NavTop4 title="选择地址" icon6 />
    </div>
    <div class="k"></div>
    <div class="list">
      <div
        class="information"
        @click="changeZFBZhi(addrs)"
        v-for="(addrs,index) in address"
        :key="index"
      >
        <span :style="{display:addrs.showGreen?'true':'none'}" class="fa fa-check-circle"></span>
        <p class="name">
          <span class="username">{{addrs.name}}</span>
          先生 {{addrs.phone}}
        </p>
        <p class="school">
          <span class="school1">{{addrs.tag}}</span>
          {{addrs.address}}
        </p>
      </div>
    </div>

    <div class="bottom">
      <router-link to="/addAddress">
        <span class="add">+</span> 新增收货地址
      </router-link>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "chooseAddress",
  data() {
    return {
      user: {},
      address: []
    };
  },
  created() {
    this.getaddress();
  },
  components: { NavTop4 },
  methods: {
    changeZFBZhi(addrs) {
      for (const key in this.address) {
        if (this.address[key] == addrs) {
          this.address[key].showGreen = true;
          localStorage.setItem("adr", JSON.stringify(addrs));
          console.log(this.address);
        } else {
          this.address[key].showGreen = false;
        }
      }
      this.$router.push("/confirmOrder");
    },
    getaddress() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.$axios.get(`/v1/users/${this.user.id}/addresses`).then(res => {
        this.address = res.data;

        for (const key in this.address) {
          this.address[key].showGreen = false;
        }
        this.address[this.address.length - 1].showGreen = true;

        console.log(res.data);
      });
    }
  }
};
</script>

<style scoped>
.chooseAddress {
  width: 100%;
  min-height: 11rem;
  background-color: #fff;
  overflow: hidden;
}
.hea {
  position: fixed;
  height: 1rem;
  width: 100%;
  top: 0;
  z-index: 100;
}
.k {
  height: 1rem;
}
.list {
  display: flex;
  flex-direction: column-reverse;
}

.information {
  padding-left: 1rem;
  display: flex;
  margin: 0.3rem 0;
  font-size: 0.32rem;
  flex-direction: column;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.02rem solid #f5f5f5;
  position: relative;
  /* border: 1px solid red; */
}

.information p {
  margin-top: 0.05rem;
}
.school1 {
  width: 1rem;
  background: #4cd964;
  border-radius: 0.05rem;
  color: #fff;
  font-size: 0.2rem;
  padding: 0 0.1rem;
}
.school {
  font-size: 0.25rem;
  color: #777;
}
.bottom {
  background: #fff;
  font-size: 0.3rem;
  padding: 0.3rem 2.59rem;
  text-align: center;
  position: fixed;
  bottom: 0;
}
.add {
  font-size: 0.3rem;
  border: 1px solid #3190e8;
  border-radius: 50%;
  padding: 0 0.08rem;
}
a {
  text-decoration: none;
  color: #3190e8;
}
p {
  margin-bottom: 0;
}
.username {
  font-weight: 700;
}
.name {
  font-size: 0.36rem;
}
.circle {
  width: 0.6rem;
  height: 0.6rem;
  float: right;
  border: 1px solid #fff;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
  font-size: 0.4rem;
  text-align: center;
  margin: 0.4rem 0.2rem;
}
.fa-check-circle {
  display: block;
  color: #4cd964;
  position: absolute;
  left: 0.35rem;
  top: 0.5rem;
  font-size: 0.5rem;
}

.tit {
  margin-left: 0.2rem;
}
</style>