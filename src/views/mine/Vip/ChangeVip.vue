<template>
  <div class="changeVip">
    <NavTop4 title="兑换会员" icon6 />
    <div class="content">
      <p class="buy">
        成功兑换后将关联到当前帐号 :
        <span style="font-weight:700">{{user.username}}</span>
      </p>
    </div>
    <form class="inputs">
      <input
        type="number"
        placeholder="请输入10位卡号"
        v-model="result1"
        oninput="if(value.length>10)value=value.slice(0,10);"
        @keyup="panduan"
      />
      <input
        type="text"
        placeholder="请输入6位卡密"
        v-model="result2"
        oninput="if(value.length>6)value=value.slice(0,6);"
        @keyup="panduan"
      />
    </form>
    <div class="define" :class="{green:zhi}" @click="zhi1=zhi?true:false">兑换</div>
    <div class="tips">
      <h3>——温馨提示——</h3>
      <p>新兑换的会员服务，权益以「会员说明」为准。</p>
      <p>月卡：30次减免配送费。</p>
      <p>季卡：90次减免配送费。</p>
      <p>年卡：360次减免配送费。</p>
      <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
    <div v-show="zhi1" class="nouse">
      <p class="quan">!</p>
      <p class="zi">无效的卡号</p>

      <p @click="zhi1=false" class="queren">确认</p>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "changeVip",
  data() {
    return {
      zhi: false,
      zhi1: false,
      result1: "",
      result2: "",
      user: {}
    };
  },
  components: {
    NavTop4
  },

  created() {
    this.getUser();
  },
  methods: {
    panduan() {
      if (this.result1.length == 10 && this.result2.length == 6) {
        this.zhi = true;
      } else {
        this.zhi = false;
      }
    },

    getUser() {
      this.user = JSON.parse(localStorage.getItem("user") || "{}");
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.changeVip {
  width: 100%;
  background-color: #f5f5f5;
}
.buy {
  color: #666;
  font-size: 0.3rem;
  padding: 0.25rem 0.3rem;
}
.content span {
  color: #000;
  margin: 0 0.1rem;
}
.inputs {
  flex-direction: column;
  display: flex;
}
.inputs input {
  border: none;
  border-bottom: 1px solid #f5f5f5;
  /* border-bottom: 1px solid #f5f5f5; */
  height: 1rem;
  font-size: 0.3rem;
  color: #999;
  padding-left: 0.5rem;
  outline: none;
}
.define {
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 0.15rem;
  width: 7rem;
  background: #ccc;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 800;
  padding: 0.2rem 0;
  margin: 0.4rem 0.3rem 0.2rem;
}
.green {
  background: #4cd964;
  border: 1px solid #4cd964;
}
.tips {
  color: #aaa;
  margin: 0.3rem 1.1rem;
}
.tips h3 {
  font-size: 0.3rem;
  font-weight: 500;
  padding: 0.2rem 1.2rem;
}
.tips p {
  font-size: 0.25rem;
  padding-bottom: 0.1rem;
}
.nouse {
  text-align: center;
  width: 75%;
  border-bottom: 0.1px solid #4cd964;
  border-radius: 0.2rem;
  background: #fff;
  position: fixed;
  left: 1rem;
  top: 3rem;
}
.quan {
  width: 1.5rem;
  height: 1.5rem;
  border: 0.06rem solid #f8cb86;
  border-radius: 50%;
  color: #f8cb86;
  margin: 0.3rem 2rem;
  font-weight: 500;
}
.zi {
  font-size: 0.3rem;
  padding-bottom: 0.3rem;
}
.queren {
  border: 1px solid #4cd964;
  border-radius: 0.15rem;
  width: 100%;
  background: #4cd964;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 800;
  padding: 0.2rem 0;
}
</style>