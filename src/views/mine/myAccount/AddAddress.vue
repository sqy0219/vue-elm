<template>
  <div class="addAddress">
    <div class="hea">
      <NavTop3 title="编辑地址" :icon1="icon1" icon6="/profile/DeliveryAddress" />
    </div>
    <div class="inputMess">
      <input
        class="yourname"
        type="text"
        placeholder="请填写你的姓名"
        v-model="name"
        @keyup="checkName"
        ref="yournam"
      />

      <p v-if="redPAlert">请填写您的姓名</p>

      <input
        v-if="!button4.address"
        class="yourAddr"
        type="text"
        placeholder="小区/写字楼/学校等"
        @click="choseAddress"
        :value="adr"
      />
      <input
        v-else
        class="yourAddr"
        type="text"
        placeholder="小区/写字楼/学校等"
        @click="choseAddress"
        :value="button4.address.name"
      />

      <!-- :value="button4.name" -->
      <!-- 详细地址校验 -->
      <input
        class="yourDetail"
        type="text"
        placeholder="请填写详细送餐地址"
        v-model="detailAddr"
        ref="yourDetail"
        @keyup="checkDetailAddr"
      />
      <p v-if="redPAlert2">{{exE}}</p>
      <input
        class="yourPhone"
        type="text"
        placeholder="请填写能够联系到您的手机号"
        v-model="phone"
        ref="yourPhone"
        @keyup="checkPhone"
      />
      <p v-if="redPAlert3">{{phE}}</p>
      <input
        class="yourExtra"
        type="text"
        placeholder="备用联系电话（选填）"
        v-model="extraPhone"
        ref="yourExtra"
        @keyup="checkExtraPhone"
      />
      <p v-if="redPAlert4">请输入正确的手机号</p>
    </div>

    <button class="adaddrAdd" @click="add()" ref="jg">新增地址</button>
    <div class="container" v-if="nullAlert">
      <div class="alert">
        <div>
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
          <span>{{errMess}}</span>
        </div>
        <button class="ok" ref="ok" @click="nullAlert=!nullAlert">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop3 from "../../../components/common/NavTop3";
import { mapGetters } from "vuex";
export default {
  name: "addAddress",
  data() {
    return {
      user: "",
      icon1: true,
      //页面输入校验
      nullAlert: false,
      redPAlert: false,
      redPAlert2: false,
      redPAlert3: false,
      redPAlert4: false,
      name: "",
      adr: "",
      detailAddr: "",
      phone: "",
      extraPhone: "",
      errorMess: "",
      errMess: "",
      exE1: "请详细填写送餐地址",
      exE2: "送餐地址太短了，不能识别",
      exE: "",
      phE1: "手机号不能为空",
      phE2: "请输入正确的手机号",
      phE: "",
      //判断内容是否完整
      cp1: 2,
      cp3: 2,
      cp4: 2
      // 页面输入校验设定完成
    };
  },
  components: { NavTop3 },
  computed: mapGetters(["button4", "address"]),
  watch: {
    cp1: function() {
      if (this.cp1 == 1 && this.cp3 == 1 && this.cp4 == 1) {
        this.$refs.jg.className = "adaddrAdd2";
      } else {
        this.$refs.jg.className = "adaddrAdd";
      }
    },
    cp3: function() {
      if (this.cp1 == 1 && this.cp3 == 1 && this.cp4 == 1) {
        this.$refs.jg.className = "adaddrAdd2";
      } else {
        this.$refs.jg.className = "adaddrAdd";
      }
    },
    cp4: function() {
      if (this.cp1 == 1 && this.cp3 == 1 && this.cp4 == 1) {
        this.$refs.jg.className = "adaddrAdd2";
      } else {
        this.$refs.jg.className = "adaddrAdd";
      }
    }
  },
  created() {
    this.getUser();
    this.getVuex();
  },
  methods: {
    //跳转到搜索
    choseAddress() {
      this.$store.dispatch("setAddressAsync", {
        user_id: this.user.id,
        // address: address.name,
        address_detail: this.detailAddr,
        // geohash: address.geohash,
        name: this.name,
        phone: this.phone,
        tag: "",
        sex: 1,
        poi_type: 0,
        phone_bk: this.extraPhone,
        tag_type: 1
      });
      this.$router.push("/profile/AddAddress/SearchAd");
    },
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
      const address = this.$store.getters.address;
      this.name = address.name ? address.name : "";
      this.detailAddr = address.address_detail ? address.address_detail : "";
      this.phone = address.phone ? address.phone : "";
      this.extraPhone = address.phone_bk ? address.phone_bk : "";
    },
    getVuex() {
      // if (address) {
      // this.name = address.name;
      // this.adr = button4.address.name;
      // this.detailAddr = address.address_detail;
      // this.phone = address.phone;
      // this.extraPhone = address.phone_bk;
      // } else {
      // this.adr = button4.address.name;
      // }
    },
    add() {
      this.$router.push("./profile/AddAddress");

      const button4 = this.$store.getters.button4;
      if (this.name.length == 0) {
        this.nullAlert = true;
        this.errMess = "请输入姓名";
        return;
      }
      if (this.button4.address.name.length == 0) {
        this.nullAlert = true;
        this.errMess = "请选择地址";
        return;
      }
      if (this.detailAddr.length == 0) {
        this.nullAlert = true;
        this.errMess = "请填写详细地址";
        return;
      }
      if (this.phone.length == 0) {
        this.nullAlert = true;
        this.errMess = "请填写手机号";
        return;
      }
      this.$axios
        .post(`v1/users/${this.user.id}/addresses`, {
          user_id: this.user.id,
          address: button4.address.name,
          address_detail: this.detailAddr,
          geohash: button4.address.geohash,
          name: this.name,
          phone: this.phone,
          tag: "标签",
          sex: 1,
          poi_type: 0,
          phone_bk: this.extraPhone,
          tag_type: 1
        })
        .then(res => {
          console.log(res);
          this.$router.push("/profile/DeliveryAddress");
        })
        .catch(err => {
          console.log(err);
        });
    },
    //判断输入框内容

    checkName() {
      if (this.name.length == 0) {
        this.errorMess = "收货人姓名错误";
        this.redPAlert = true;
        this.$refs.yournam.style.border = "0.02rem solid #ea3106";
        this.cp1 = 2;
      } else {
        this.errorMess = "";
        this.redPAlert = false;
        this.$refs.yournam.style.border = "0.02rem solid #ddd";
        this.cp1 = 1;
      }
    },
    /*===============
    缺少搜索获取地址函数
    ==================
    */
    checkDetailAddr() {
      if (this.detailAddr.length == 0) {
        this.errorMess = "地址信息错误";
        this.redPAlert2 = true;
        this.exE = this.exE1;
        this.$refs.yourDetail.style.border = "0.02rem solid #ea3106";
        this.cp3 = 2;
      } else if (this.detailAddr.length > 0 && this.detailAddr.length <= 2) {
        this.errorMess = "";
        this.redPAlert2 = true;
        this.exE = this.exE2;
        this.$refs.yourDetail.style.border = "0.02rem solid #ea3106";
        this.cp3 = 2;
      } else {
        this.errorMess = "";
        this.redPAlert2 = false;
        this.exE = "";
        this.$refs.yourDetail.style.border = "0.02rem solid #ddd";
        this.cp3 = 1;
      }
    },
    checkPhone() {
      if (this.phone.length == 0) {
        this.errorMess = "收获手机号错误";
        this.redPAlert3 = true;
        this.phE = this.phE1;
        this.$refs.yourPhone.style.border = "0.02rem solid #ea3106";
        this.cp4 = 2;
      } else if (/^1[3456789]\d{9}$/.test(this.phone)) {
        this.errorMess = "";
        this.redPAlert3 = false;
        this.$refs.yourPhone.style.border = "0.02rem solid #ddd";
        this.cp4 = 1;
      } else {
        this.errorMess = "收货手机号错误";
        this.redPAlert3 = true;
        this.phE = this.phE2;
        this.$refs.yourPhone.style.border = "0.02rem solid #ea3106";
        this.cp4 = 2;
      }
    },
    checkExtraPhone() {
      if (/^1[3456789]\d{9}$/.test(this.extraPhone)) {
        this.errorMess = "";
        this.redPAlert4 = false;
      } else {
        this.errorMess = "";
        this.redPAlert4 = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}
a {
  text-decoration: none;
  color: #000;
}
a:click {
  color: #000;
}
.addAddress {
  overflow: hidden;
}
.account {
  min-height: 12rem;
  background: #f5f5f5;
  width: 100%;
}

.inputMess {
  background: #fff;
  margin-top: 1.1rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
  width: 100%;
  box-sizing: border-box;
}
.inputMess input {
  display: block;
  margin: 0.18rem 0.2363rem;
  width: 6.71rem;
  padding: 0.14062rem;
  border-radius: 0.06rem;
  border: 0.02rem solid #ddd;
  background: #f2f2f2;
  line-height: 0.3837rem;
  outline: none;
  font-size: 0.28rem;
}
.adaddrAdd {
  color: #b2efbc;
  font-size: 0.3rem;
  width: 7.03rem;
  height: 0.736rem;
  background: #4cd94c;
  border: none;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.2363rem;
  border-radius: 0.08rem;
  outline: none;
  font-weight: 700;
}
.adaddrAdd2 {
  color: #fff;
  font-size: 0.3rem;
  width: 7.03rem;
  height: 0.736rem;
  background: #4cd94c;
  border: none;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.2363rem;
  border-radius: 0.08rem;
  outline: none;
  animation: toW 0.6s linear;
}
@keyframes toW {
  from {
    color: #b2efbc;
  }
  to {
    color: #fff;
  }
}
/*弹框*/
.alert {
  position: absolute;
  font-size: 0.5rem;
  top: 30%;
  left: 12%;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 4rem;
  background: #fff;
  border-radius: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
  animation: dump 0.3s linear;
}
.alert span {
  display: block;
}
.alert svg {
  width: 1.7rem;
  height: 1.7rem;
}
.alert span:nth-child(1) {
  padding: 0.3rem 2.2rem;
}
.alert span:nth-child(2) {
  font-size: 0.34rem;
  text-align: center;
}
.ok {
  width: 100%;
  height: 0.812rem;
  border: none;
  font-size: 0.38rem;
  font-weight: 700;
  color: #fff;
  background: #4cd964;
  position: absolute;
  bottom: 0;
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
  top: 0;
  width: 100%;
  height: 12rem;
  background-color: rgba(0, 0, 0, 0.3);
}
p {
  padding-left: 0.24rem;
  font-size: 0.22rem;
  color: #ea3106;
  // display: none;
}
p:last-child {
  padding-bottom: 0.15rem;
}
</style>