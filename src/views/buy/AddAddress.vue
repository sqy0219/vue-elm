<template>
  <div class="addAddress">
    <!-- 标题 -->

    <div class="hea">
      <NavTop4 title="添加地址" icon6 />
    </div>
    <!-- 标题 -->

    <div class="content">
      <p>
        联系人&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="你的名字" v-model="newaddress.name" />
      </p>
      <p class="sex">
        <i
          @click="ssex(1)"
          class="fa fa-check-circle"
          :style="{color:newaddress.sex==1?'#4cd964':'#999'}"
        >
          &nbsp;
          <span>先生</span>
        </i>
        <i
          @click="ssex(2)"
          class="fa fa-check-circle"
          :style="{color:newaddress.sex==2?'#4cd964':'#999'}"
        >
          &nbsp;
          <span>女士</span>
        </i>
      </p>
      <p>
        联系电话
        <input type="text" placeholder="你的手机号" v-model="newaddress.phone" maxlength="11" />
        <img @click="beixuan" src="../../assets/img/add.png" alt />
      </p>
      <p>
        <input class="beixuan" v-show="zhi2" placeholder="备选电话" v-model="newaddress.bphone" />
      </p>
      <p>
        送餐地址
        <input
          v-if="!button4.address"
          @click="choseAddress()"
          type="text"
          placeholder="小区/写字楼/学校等"
        />
        <input
          v-else
          @click="choseAddress()"
          type="text"
          placeholder="小区/写字楼/学校等"
          v-model="button4.address.name"
        />
      </p>
      <p>
        <input type="text" class="beixuan" placeholder="详细地址" v-model="newaddress.xaddr" />
      </p>
      <p>
        标签&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          placeholder="无/家/学校/公司"
          v-model="newaddress.tag_type"
        />
      </p>
    </div>
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
    <p class="confirm" @click="add">确定</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "addAddress",
  data() {
    return {
      zhi: true,
      zhi1: false,
      zhi2: false,
      user: {},
      errMess: "",
      nullAlert: false,

      newaddress: {
        name: "",
        sex: 1,
        phone: "",
        bphone: "",
        addr: "",
        xaddr: "",
        tag: "",
        tag_type: 0
      }
    };
  },
  computed: mapGetters(["button4", "address"]),

  components: {
    NavTop4
  },
  created() {
    this.getUser();
    this.ssex(1);
  },
  methods: {
    getUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
      const address = this.$store.getters.address;
      this.newaddress.name = address.name ? address.name : "";
      this.newaddress.xaddr = address.address_detail
        ? address.address_detail
        : "";
      this.newaddress.sex = address.sex ? address.sex : "";
      this.newaddress.tag = address.tag ? address.tag : "";
      this.newaddress.tag_type = address.tag_type ? address.tag_type : "";

      this.newaddress.phone = address.phone ? address.phone : "";
      this.newaddress.bphone = address.phone_bk ? address.phone_bk : "";
    },
    chooseSex() {
      this.zhi = !this.zhi;
      this.zhi1 = !this.zhi1;
    },
    beixuan() {
      this.zhi2 = !this.zhi2;
    },
    ssex(num) {
      this.newaddress.sex = num;
    },
    choseAddress() {
      this.$store.dispatch("setAddressAsync", {
        name: this.newaddress.name,
        sex: this.newaddress.sex,
        phone: this.newaddress.phone,
        phone_bk: this.newaddress.bphone,
        tag_type: this.newaddress.tag_type,
        address_detail: this.newaddress.xaddr
      });
      this.$router.push("/profile/AddAddress/SearchAd");
    },
    add() {
      // this.$router.push("/chooseAddress");

      const button4 = this.$store.getters.button4;
      if (this.newaddress.name.length == 0) {
        this.nullAlert = true;
        this.errMess = "请输入姓名";
        return;
      }
      if (this.newaddress.phone.length == 0) {
        this.nullAlert = true;
        this.errMess = "请填写手机号";
        return;
      } else if (this.newaddress.phone.length < 11) {
        this.nullAlert = true;
        this.errMess = "请输入正确的手机号";
        return;
      }
      if (this.button4.address.name.length == 0) {
        this.nullAlert = true;
        this.errMess = "请选择地址";
        return;
      }
      if (this.newaddress.xaddr.length == 0) {
        this.nullAlert = true;
        this.errMess = "请填写详细地址";
        return;
      }
      if (this.newaddress.tag_type.length == 0) {
        this.nullAlert = true;
        this.errMess = "请填写标签";
        return;
      }

      this.$axios
        .post(`v1/users/${this.user.id}/addresses`, {
          user_id: this.user.id,
          address: button4.address.name,
          address_detail: this.newaddress.xaddr,
          geohash: button4.address.geohash,
          name: this.newaddress.name,
          phone: this.newaddress.phone,
          tag: "123",
          sex: this.newaddress.sex,
          phone_bk: this.newaddress.bphone,
          tag_type: this.newaddress.tag_type
        })
        .then(res => {
          console.log(res);
          this.$router.push("/chooseAddress");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.addAddress {
  width: 100%;
  min-height: 11rem;
  background-color: #f5f5f5;
  overflow: hidden;
}
.hea {
  position: fixed;
  height: 1rem;
  width: 100%;
  top: 0;
}
.content {
  font-size: 0.28rem;
  margin-top: 1rem;
}
.content p {
  padding: 0.2rem;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}
input {
  border: none;
  color: #999;
  margin-left: 0.8rem;
  padding: 0.1rem;
  outline: none;
}

.fa-check-circle {
  margin: 0 0.4rem;
}
.sex {
  text-align: center;
  /* border: 1px solid red; */
  font-size: 0.4rem;
  color: #999;
}
.sex span {
  color: #333;
  font-size: 0.34rem;
}

img {
  width: 6%;
  float: right;
  margin-right: 0.3rem;
}
.beixuan {
  margin-left: 2rem;
  padding-top: 0.3rem;
}
.confirm {
  font-size: 0.36rem;
  text-align: center;
  display: block;
  background: #4cd964;
  text-decoration: none;
  color: #fff;
  padding: 0.2rem 0;
  margin: 0.5rem;
}
p {
  margin-bottom: 0;
}
.tit {
  margin-left: 0.2rem;
}
/* 弹框 */

.alert {
  position: absolute;
  font-size: 0.5rem;
  top: 30%;
  left: 12%;
  bottom: 0;
  right: 0;
  width: 6rem;
  height: 4.5rem;
  background: #fff;
  border-radius: 0.2rem;
  box-sizing: border-box;
  overflow: hidden;
  animation: dump 0.3s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.alert span {
  display: block;

  margin: 0 auto 0.2rem;
}
.alert svg {
  /* margin-top: 0; */
  width: 1.7rem;
  height: 1.7rem;
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
.container p {
  padding-left: 0.24rem;
  font-size: 0.22rem;
  color: #ea3106;
  /* // display: none; */
}
p:last-child {
  padding-bottom: 0.15rem;
}
</style>