<template>
  <div class="vipCard">
    <NavTop4 title="会员中心" icon6="/profile" />
    <div class="content">
      <p class="buy">
        为账户
        <span style="font-Weight:700">{{user.username}}</span>购买会员
      </p>
      <div class="vipPrivilege">
        <router-link to="/profile/vip/vipDescribe">
          <p class="describe">
            会员特权
            <a href="#">会员说明 ></a>
          </p>
        </router-link>
        <div class="privilege-1">
          <img class="left" src="../../../assets/img/省.jpg" alt />
          <div class="right">
            <h4>减免配送费</h4>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
        </div>
        <div class="privilege-1">
          <img class="left" src="../../../assets/img/免.jpg" alt />
          <div class="right">
            <h4>减免配送费</h4>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
        </div>
        <div class="privilege-2">
          <p>开通会员</p>
          <p>
            一个月
            <span>￥20</span>
            <router-link to="/profile/vip/OnlinePay" class="right">购买</router-link>
          </p>
        </div>
        <div class="privilege-3">
          <router-link to="/profile/vip/ChangeVip">
            <p>
              兑换会员
              <span class="right">使用卡号卡密 ></span>
            </p>
          </router-link>

          <router-link to="/profile/vip/BuyRecord">
            <p>
              购买记录
              <span class="right">开发票 ></span>
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "vipCard",
  data() {
    return {
      username: "yzs",
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
.vipCard {
  background: #f5f5f5;
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
.describe {
  background: #fff;
  font-size: 0.3rem;
  color: #000;
  padding: 0.3rem;
  border-bottom: 1px solid #f5f5f5;
}
/* a {
  outline: none;
} */
a:link {
  text-decoration: none;
}
.describe a {
  color: #999;
  text-decoration: none;
  float: right;
}

.vipPrivilege img {
  width: 12%;
  padding-bottom: 0.4rem;
}
.privilege-1 {
  height: 1.5rem;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.3rem 0.8rem 0.1rem 0.3rem;
}
/* .privilege-1,
.privilege-2 > p {
  font-size: 0.25rem;
  color: #999;
} */
/* .privilege-1 {
  font-size: 0.25rem;
  color: #999;
} */
.privilege-1 {
  font-size: 0.25rem;
  color: #999;
}
h4 {
  color: #000;
  display: inline-block;
  font-size: 0.34rem;
  font-weight: 400;
}
.left {
  float: left;
}
.right {
  float: right;
}
.privilege-2 {
  background: #fff;
  margin-top: 0.2rem;
}
.privilege-2 p {
  font-size: 0.33rem;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.3rem 0.4rem;
}
.privilege-2 span {
  color: #f60;
  font-weight: 800;
}
.privilege-2 a {
  color: #f60;
  text-decoration: none;
  border: 1px solid #f60;
  padding: 0.05rem 0.3rem;
  border-radius: 0.1rem;
}
.privilege-3 a {
  text-decoration: none;
  color: #000;
  font-size: 0.3rem;
}
.privilege-3 p {
  background: #fff;
  padding: 0.3rem;
  margin-top: 0.2rem;
}
.privilege-3 span {
  color: #999;
}
</style>