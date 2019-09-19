<template>
  <div class="profile">
    <div class="hea">
      <NavTop4 title="我的" icon6 />
    </div>

    <router-link to="/login" v-if="!user.username">
      <div class="loginAndRegister">
        <div class="myContent">
          <span class="user">
            <svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%">
              <path
                fill="#DCDCDC"
                fill-rule="evenodd"
                d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"
              />
            </svg>
          </span>
          <div class="zj">
            <span class="lr">登录/注册</span>

            <span class="bindPhone">
              <i class="fa fa-mobile"></i>
              <span>暂无绑定手机号</span>
            </span>
          </div>
          <span class="toLogin">
            <i class="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
    </router-link>
    <router-link to="/profile/Account" v-else>
      <div class="loginAndRegister">
        <div class="myContent">
          <span class="user">
            <img src="//elm.cangdu.org/img/default.jpg" class="privateImage" />
          </span>
          <div class="zj">
            <span class="lr" style="font-weight:700;margin-bottom:-.15rem">{{user.username}}</span>

            <span class="bindPhone">
              <i class="fa fa-mobile"></i>
              <span>暂无绑定手机号</span>
            </span>
          </div>
          <span class="toLogin">
            <i class="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
    </router-link>
    <!-- 余额优惠积分 -->
    <div class="money">
      <ul>
        <li>
          <router-link to="/profile/myBalance">
            <span class="up1">
              <b v-if="user.username">{{user.balance}}.00</b>
              <b v-else>0.00</b>
              元
            </span>
            <!-- <br /> -->
            <span class="down">我的余额</span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile/myDiscounts">
            <span class="up2">
              <b v-if="!user.username">0</b>
              <b v-else>{{user.gift_amount}}</b>个
            </span>
            <!-- <br /> -->
            <span class="down">我的优惠</span>
          </router-link>
        </li>
        <li>
          <router-link to="/profile/myIntegral">
            <span class="up3">
              <b v-if="!user.username">0</b>
              <b v-else>{{user.point}}</b>分
            </span>
            <!-- <br /> -->
            <span class="down">我的积分</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 列表中部 -->
    <div class="myThree">
      <ul>
        <li>
          <router-link to="/order">
            <div>
              <svg
                t="1567500069726"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="539"
                width="8"
                height="8"
              >
                <path
                  d="M281.6 838.4c0 19.2 19.2 38.4 38.4 38.4l608 0c19.2 0 38.4-19.2 38.4-38.4l0-25.6c0-19.2-19.2-38.4-38.4-38.4l-608 0c-19.2 0-38.4 19.2-38.4 38.4L281.6 838.4zM140.8 748.8c-38.4 0-76.8 32-76.8 76.8C64 864 96 896 140.8 896c38.4 0 76.8-32 76.8-76.8C211.2 780.8 179.2 748.8 140.8 748.8zM281.6 524.8c0 19.2 19.2 38.4 38.4 38.4l608 0c19.2 0 38.4-19.2 38.4-38.4L966.4 499.2c0-19.2-19.2-38.4-38.4-38.4L320 460.8c-19.2 0-38.4 19.2-38.4 38.4L281.6 524.8zM140.8 435.2C96 435.2 64 473.6 64 512c0 38.4 32 76.8 76.8 76.8 38.4 0 76.8-32 76.8-76.8C211.2 473.6 179.2 435.2 140.8 435.2zM320 153.6c-19.2 0-38.4 19.2-38.4 38.4l0 25.6c0 19.2 19.2 38.4 38.4 38.4l608 0c19.2 0 38.4-19.2 38.4-38.4L966.4 185.6c0-19.2-19.2-38.4-38.4-38.4L320 147.2zM140.8 128C96 128 64 160 64 198.4c0 38.4 32 76.8 76.8 76.8 38.4 0 76.8-32 76.8-76.8C211.2 160 179.2 128 140.8 128z"
                  p-id="540"
                  fill="#bfbfbf"
                />
              </svg>
            </div>
            <div class="mtOne">
              <span>我的订单</span>
              <span class="myArrow">
                <svg
                  t="1567503190013"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1414"
                  width="32"
                  height="32"
                >
                  <path
                    d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"
                    p-id="1415"
                    fill="#bfbfbf"
                  />
                </svg>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/profile/JFStore">
            <div>
              <svg
                t="1567502102045"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3471"
                width="16"
                height="16"
              >
                <path
                  d="M1024 133.12C1024 58.88 965.12 0 890.88 0H133.12C58.88 0 0 58.88 0 133.12v757.76C0 965.12 58.88 1024 133.12 1024h757.76c74.24 0 133.12-58.88 133.12-133.12V133.12zM509.44 501.76c-156.16 0-284.16-128-284.16-284.16 0-15.36 12.8-25.6 25.6-25.6s25.6 12.8 25.6 25.6c0 128 104.96 232.96 232.96 232.96S742.4 345.6 742.4 217.6c0-15.36 12.8-25.6 25.6-25.6s25.6 12.8 25.6 25.6c0 156.16-128 284.16-284.16 284.16z"
                  fill="#e0620d"
                  p-id="3472"
                  data-spm-anchor-id="a313x.7781069.0.i12"
                  class="selected"
                />
              </svg>
            </div>
            <div class="mtOne" @click="toJFStore">
              <span>积分商城</span>
              <span class="myArrow">
                <svg
                  t="1567503190013"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1414"
                  width="32"
                  height="32"
                >
                  <path
                    d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"
                    p-id="1415"
                    fill="#bfbfbf"
                  />
                </svg>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/profile/vip">
            <div>
              <svg
                t="1567502353534"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="7418"
                width="18"
                height="18"
              >
                <path
                  d="M958.693177 381.595879c0-30.164397-11.755084-58.529768-33.076074-79.843533a112.059832 112.059832 0 0 0-79.785733-33.083299 112.153757 112.153757 0 0 0-79.857984 33.083299 112.160982 112.160982 0 0 0-33.061624 79.843533c0 30.128272 11.740634 58.464743 33.076074 79.800184 4.414478 4.421703 9.197432 8.308756 14.168235 11.892359-37.916828 37.938503-98.115572 48.580936-147.281732 22.086841-37.411077-20.15054-66.592874-55.148465-77.950583-92.964143-4.920229-22.794892 7.369505-79.265533 8.026981-81.013985 35.026826-19.189614 58.833218-56.420066 58.833218-99.105397 0-30.106597-11.740634-58.435843-33.076074-79.778509a112.081507 112.081507 0 0 0-79.771283-33.076074 112.182657 112.182657 0 0 0-79.857984 33.076074 112.081507 112.081507 0 0 0-33.076074 79.778509 112.204332 112.204332 0 0 0 33.076074 79.872433 112.702858 112.702858 0 0 0 30.214972 21.487166c0.238425 0.4913 0.4335 0.989826 0.693601 1.466676 2.413152 4.486728 12.051309 55.09789 5.982304 77.336457-11.516658 38.198603-41.117505 73.731179-79.027108 94.156269-50.705087 27.288845-111.438482 16.711437-150.113935-22.758767 29.015621-20.446765 48.046285-54.136965 48.046286-92.248868 0-30.207747-11.711734-58.573118-32.989375-79.843533-21.320991-21.335441-49.686361-33.083299-79.857983-33.083299s-58.529768 11.747859-79.857983 33.083299a112.204332 112.204332 0 0 0-33.076075 79.843533 112.132082 112.132082 0 0 0 33.090525 79.800184 112.160982 112.160982 0 0 0 48.47256 28.596571l94.279094 391.327962a43.328357 43.328357 0 0 0 42.136231 33.198899h463.71529a43.335582 43.335582 0 0 0 42.13623-33.198899l94.293544-391.392987c46.991434-13.648035 81.476385-56.998067 81.476385-108.338955z"
                  fill="#f4ea29"
                  p-id="7419"
                />
              </svg>
            </div>
            <div class="mtOne" @click="toVipCard">
              <span>饿了么会员卡</span>
              <span class="myArrow">
                <svg
                  t="1567503190013"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1414"
                  width="32"
                  height="32"
                >
                  <path
                    d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"
                    p-id="1415"
                    fill="#bfbfbf"
                  />
                </svg>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 列表尾部 -->
    <div class="myTail myThree">
      <ul>
        <li>
          <router-link to="/profile/ServeCenter">
            <div>
              <svg
                t="1567502466460"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8240"
                width="16"
                height="16"
              >
                <path
                  d="M70.6 267.1c11.3-19.6 36.4-26.3 55.9-15l372.8 215.3 369.1-213.1c19.6-11.3 44.6-4.6 55.9 15 0.2 0.3 0.3 0.5 0.4 0.8-3.5-7-8.9-13-16.2-17.2L521.7 29.5c-7.5-6.1-16.9-9.3-26.4-9.2-9.5-0.1-18.9 3.1-26.4 9.2l-383 221.1c-10.1 5.8-16.8 15.4-19.3 25.9 0.9-3.1 2.2-6.3 4-9.4z"
                  fill="#3190e8"
                  p-id="8241"
                />
                <path
                  d="M925.5 271.5c9.6 19.2 2.7 42.9-16.2 53.8L543.4 536.5v429c0 22.6-18.3 41-41 41-22.6 0-41-18.3-41-41V540.1l-375.9-217c-11.9-6.9-19.1-18.8-20.3-31.6v446.1c-1.5 15.5 5.9 31.1 20.3 39.4l387.4 223.7c7.5 6.1 16.9 9.3 26.4 9.2 9.5 0.1 18.9-3.1 26.4-9.2l376-217.1c16.6-5.2 28.7-20.7 28.7-39.1V290.9c0-7.1-1.8-13.7-4.9-19.4z"
                  fill="#3190e8"
                  p-id="8242"
                />
              </svg>
            </div>
            <div class="mtOne" @click="toServeCenter">
              <span>服务中心</span>
              <span class="myArrow">
                <svg
                  t="1567503190013"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1414"
                  width="32"
                  height="32"
                >
                  <path
                    d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"
                    p-id="1415"
                    fill="#bfbfbf"
                  />
                </svg>
              </span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="./profile/Download">
            <div class="lastLogo">
              <svg
                t="1567502575140"
                class="icon logo"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="11341"
                width="32"
                height="32"
              >
                <path
                  d="M517.741259 676.457586c-67.105351 3.637854-126.141932-36.759205-151.879106-91.833545-28.284183-60.517305-22.948665-120.268154 17.433044-173.59264 38.496779-50.837852 92.007507-71.033823 155.378813-63.46545 31.457456 3.75758 59.190077 16.672728 83.367733 37.193087 13.117762 11.140735 12.825097 16.119119-1.718131 24.465205-12.636808 7.255241-25.337061 14.395872-37.908378 21.765723-34.756595 20.361747-69.728084 40.370453-104.07945 61.402465-18.395976 11.256368-22.074761 29.214369-11.792581 47.845705 11.123338 20.149922 32.68747 24.840758 55.534827 11.631922 67.890226-39.261189 135.553279-78.912257 203.657376-117.804033 11.268648-6.433526 12.506848-12.979616 7.499811-23.883967-17.61724-38.361703-43.562145-69.872371-78.328973-93.444229-76.822666-52.086285-158.791539-60.431348-242.733347-20.86419-83.740216 39.473013-129.229247 108.788705-136.791479 200.144366-6.265704 75.734892 22.550599 139.857305 77.215616 192.627159 76.216869 73.571622 203.592908 85.148285 291.139823 26.002211 22.796192-15.395642 22.796192-15.395642 8.662287-38.911218-15.282055-25.418926-30.446429-30.143531-56.975643-17.425881C570.320779 670.340261 544.299125 678.157297 517.741259 676.457586z"
                  p-id="11342"
                  fill="#ffffff"
                />
                <path
                  d="M748.179582 568.833403c-1.26276-18.193361-11.128455-32.971949-19.642362-48.208978-2.7793-4.976338-7.238868-3.061732-11.218506-0.791016-15.604396 8.933463-31.160697 17.943674-46.883797 26.660196-6.683213 3.705392-7.865131 8.192589-4.001127 14.705933 8.954953 15.093766 17.844413 30.227442 26.429952 45.528939 3.730974 6.647397 8.205892 8.16803 14.644535 4.097318 9.402137-5.942339 19.108197-11.453866 28.184923-17.853623C743.767086 587.272357 748.511133 579.263963 748.179582 568.833403z"
                  p-id="11343"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div class="mtOne" @click="toDownload">
              <span>下载饿了么APP</span>
              <span class="myArrow">
                <svg
                  t="1567503190013"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1414"
                  width="32"
                  height="32"
                >
                  <path
                    d="M385.174312 788.414961c-6.503881 0-13.007763-2.16796-18.066337-7.226535-10.117149-10.117149-10.117149-26.015526 0-35.410021l231.249117-231.249118c1.445307-1.445307 1.445307-4.335921 0-5.781228l-231.249117-232.694425c-10.117149-10.117149-10.117149-26.015526 0-36.132674s26.015526-10.117149 36.132674 0l231.971772 231.971771c21.679605 21.679605 21.679605 56.366972 0 77.323924l-231.249118 231.249118c-5.781228 5.781228-12.285109 7.949188-18.788991 7.949188z"
                    p-id="1415"
                    fill="#bfbfbf"
                  />
                </svg>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="db">
      <Footer :icon4="icon" />
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
import Footer from "../../components/Footer/Footer";
export default {
  name: "profile",
  data() {
    return {
      icon: true,
      icon1: false,
      user: {}
    };
  },
  components: {
    Footer,
    NavTop4
  },
  created() {
    this.getUser();
  },
  methods: {
    toJFStore() {
      this.$router.push("/jfStore");
    },
    toVipCard() {
      this.$router.push("/vipCard");
    },
    toServeCenter() {
      this.$router.push("/serviceCenter");
    },
    toDownload() {
      this.$router.push("/downLoad");
    },
    getUser() {
      localStorage.setItem("page", "mine");
      this.user = JSON.parse(localStorage.getItem("user") || "{}");
      console.log(!this.user.username);
    }
  }
};
</script>


<style scoped>
.profile {
  min-height: 12rem;
  /* height: 100%; */
  width: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
  /* border: 1px solid red; */
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}
.loginAndRegister {
  height: 1.8rem;
  align-items: center;
  background: #3190e8;
  padding: 0.3rem 0 0.6rem 0.3rem;
  box-sizing: border-box;
  width: 7.5rem;
  margin-top: 0.9rem;
}

.myContent {
  width: 100%;
  height: 1.5rem;
  display: flex;
}
.user {
  flex: 1;
}
.privateImage {
  font-size: 0.14rem;
  background: #fff;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
  margin-top: -0.5rem;
}
.zj {
  flex: 5;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}
.toLogin {
  flex: 1;
  background: #3190e8;
  height: 1.46rem;
  line-height: 1.46rem;
  text-align: center;
  margin-top: -0.4rem;
}
.fa-angle-right {
  color: white;
  font-size: 0.4rem;
  height: 1.46rem;
  margin-left: 0.28rem;
  line-height: 1.46rem;
}
.user svg {
  font-size: 0.14rem;
  background: #fff;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
}

.lr {
  font-size: 0.38rem;
  flex: 1;
  color: #fff;

  font-weight: 900;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
  height: 0.48rem;
}
.bindPhone {
  flex: 1;
  font-size: 0.28rem;
  color: #fff;
  /* border: 1px solid red; */
  background-color: #3190e8;
  height: 0.6rem;
  display: flex;
  margin-top: -0.3rem;
}
.fa-mobile {
  flex: 1;
  font-size: 0.5rem;
  margin-left: 0.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  /* border: 1px solid red; */
  text-align: center;
}
.bindPhone span {
  flex: 10;
  height: 0.6rem;
  line-height: 0.6rem;
}

.money {
  height: 1.682rem;
  margin-bottom: 0.25rem;
}
.money ul {
  width: 7.5rem;
  display: flex;
}
.money ul li {
  flex: 1;
  width: 2.495rem;
  list-style: none;
  font-size: 0.5rem;
  display: block;
  background: #fff;
  border-left: 0.002rem solid #f5f5f5;
  border-right: 0.002rem solid #f5f5f5;
  text-align: center;
}
[class*="up"] {
  color: #666;
  display: block;
  padding: 0.2rem 0 0.1rem;
  font-size: 0.26rem;
}
.up1 b {
  color: #ff9900;
  font-size: 0.56rem;
}
.up2 b {
  color: #ff5f3e;
  font-size: 0.56rem;
}
.up3 b {
  color: #6ac20b;
  font-size: 0.56rem;
}
.down {
  display: block;
  padding-bottom: 0.2rem;
  font-size: 0.3rem;
  color: #666;
}
.myThree ul li {
  font-size: 0.28rem;
  margin-top: 0.02rem;
  list-style: none;
  margin-bottom: 0.02rem;
  background: #fff;
  overflow: hidden;
  padding: 0.18rem 0 0.18rem 0.4rem;
  box-sizing: border-box;
  height: 0.85rem;
}
.myThree ul li div {
  font-size: 0.32rem;
  color: #333;
  float: left;
}
.myThree svg {
  width: 0.26rem;
  height: 0.26rem;
}
.mtOne {
  margin-left: 0.15rem;
  display: flex;
  height: 0.7rem;
  justify-content: space-between;
  width: 6.5rem;
}
.myTail ul {
  margin-top: 0.18rem;
}
.lastLogo .logo {
  border-radius: 0.03rem;
  background: #3190e8;
}
.mtOne .myArrow .icon {
  width: 0.3rem;
  height: 0.32rem;
}
.my {
  background: #f5f5f5;
}
.myNav {
  position: fixed;
  bottom: 0;
  background: red;
}
.db {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 0.9rem;
}
</style>