<template>
  <div class="onlinePay">
    <NavTop4 title="在线支付" icon6 icon0="none" />
    <!-- 倒计时 -->
    <div class="time">
      <p>支付剩余时间</p>
      <p class="time1">00 &nbsp;: &nbsp;{{minute}}&nbsp; :&nbsp; {{second}}</p>
    </div>
    <p class="chosemethod">选择支付方式</p>
    <div class="method">
      <img src="../../assets/img/zfb.png" alt />
      <p>支付宝</p>

      <i
        class="fa fa-check-circle"
        :style="color1?{color:'#4cd964'}:{ color: '#ccc'}"
        @click="changeZFBZhi()"
      ></i>
    </div>
    <div class="method">
      <img class="weixin" src="../../assets/weixin.png" alt />
      <p>微信</p>
      <i
        class="fa fa-check-circle"
        :style="color2?{color:'#4cd964'}:{ color: '#ccc'}"
        @click="changeWXZhi()"
      ></i>
    </div>
    <div @click="queren1()" class="define">确认支付</div>
    <div v-show="zhi1" class="nouse">
      <p class="quan">!</p>
      <p class="zi">当前环境无法支付，请打开官方APP进行付款</p>
      <router-link to="/order">
        <p @click="queren1()" class="queren">确认</p>
      </router-link>
    </div>
    <div v-show="zhi2" class="nouse">
      <p class="quan">!</p>
      <p class="zi">暂不开放支付功能</p>
      <p @click="queren2()" class="queren">确认</p>
    </div>
    <div v-show="zhi3" class="nouse">
      <p class="quan">!</p>
      <p class="zi">支付超时</p>
      <p @click="queren3()" class="queren">确认</p>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "onlinePay",
  data() {
    return {
      zhi1: false,
      zhi2: true,
      zhi3: false,
      color1: true,
      color2: false,
      minute: 15,
      second: 0
    };
  },
  components: {
    NavTop4
  },
  methods: {
    changeZFBZhi() {
      this.color1 = true;
      this.color2 = false;
    },
    changeWXZhi() {
      this.color2 = true;
      this.color1 = false;
    },

    timer() {
      var _this = this;
      _this.second = "0" + 0;

      var time = window.setInterval(function() {
        if (_this.second == 0 && _this.minute != 0) {
          _this.second = 59;
          _this.minute -= 1;
          if (_this.minute < 10) {
            _this.minute = "0" + _this.minute;
          }
        } else if (_this.minute == 0 && _this.second == 0) {
          _this.second = 0;
          window.clearInterval(time);
          _this.zhi3 = !_this.zhi3;
        } else {
          _this.second -= 1;
          if (_this.second < 10) {
            _this.second = "0" + _this.second;
          }
        }
      }, 1000);
    },
    queren1() {
      this.zhi1 = !this.zhi1;
    },
    queren2() {
      this.zhi2 = !this.zhi2;
    },
    queren3() {
      this.zhi3 = !this.zhi3;
    }
  },
  // 挂载
  mounted() {
    this.timer();
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.onlinePay {
  width: 100%;
}
.fa-check-circle {
  font-size: 0.56rem;
  float: right;
  padding: 0.5rem 0.1rem;
  height: 1.5rem;
  margin-right: 0.2rem;
}
.time {
  background: #fff;
  text-align: center;
  padding: 0.55rem 0;
}

.time p {
  font-size: 0.3rem;
  color: #000;
  padding-bottom: 0.25rem;
  font-weight: 400;
}
.time .time1 {
  color: #333;
  font-size: 0.7rem;
  /* border: 1px solid red; */
}
.chosemethod {
  font-size: 0.34rem;
  color: #666;
  padding: 0.2rem 0.3rem;
  background: #f5f5f5;
}

.method {
  background: #fff;
  font-size: 0.3rem;
  color: #666;
  height: 1.5rem;
  border-bottom: 1px solid #f5f5f5;
}
.method img {
  width: 1rem;
  float: left;
  margin: 0.2rem 0 0.2rem 0.3rem;
}
.method p {
  padding: 0.5rem 0.1rem;
  display: inline-block;
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
.green {
  /* background: #4cd964; */
}
.define {
  text-align: center;
  border: 1px solid #4cd964;
  border-radius: 0.15rem;
  width: 7rem;
  background: #4cd964;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 800;
  padding: 0.2rem 0;
  margin: 0.2rem 0.3rem;
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
  animation: dump 0.4s linear;
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
a {
  text-decoration: none;
}
@keyframes dump {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.8, 0.8);
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
</style>