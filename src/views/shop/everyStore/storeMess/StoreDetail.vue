<template>
  <div class="storeDetail">
    <div class="hea">
      <NavTop4 title="商家详情" icon6="/letsShop" />
    </div>
    <!-- 活动与属性 -->
    <div class="activeAndattr">
      <p class="titleP">活动与属性</p>
      <ul>
        <!-- 这里li需要循环遍历接口中的数据 -->

        <li v-for="(activitie, index2) in oneStore.activities" :key="index2">
          <span
            class="iconID"
            :style="{backgroundColor:`#${activitie.icon_color}`}"
          >{{activitie.icon_name}}</span>
          <span>{{activitie.description}}(APP专享)</span>
        </li>
        <li class="info" v-for="(support, index1) in oneStore.supports" :key="'info'+index1">
          <span
            class="iconID"
            :style="{backgroundColor:`#${support.icon_color}`}"
          >{{support.icon_name}}</span>
          <span>{{support.description}}(APP专享)</span>
        </li>
      </ul>
    </div>

    <!-- 食品监督安全公示 -->
    <div class="activeAndattr foodCheck">
      <p class="titleP titleP2" @click="toQyrz">
        食品监督安全公示
        <span>
          企业认证详情
          <span style="margin-left:0.2rem">
            <svg
              data-v-ca49b092
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="description_arrow"
            >
              <path
                data-v-ca49b092
                d="M0 0 L8 7 L0 14"
                stroke="#bbb"
                stroke-width="1.5"
                fill="none"
              />
            </svg>
          </span>
        </span>
      </p>
      <div class="container">
        <div class="face">
          <!-- <svg viewBox="0 0 1024 1024" id="res-bad" width="100%" height="100%">
            <path
              fill="#D0021B"
              fill-rule="evenodd"
              d="M512 0C230.326 0 0 230.326 0 512s230.573 512 512 512 512-230.326 512-512S793.674 0 512 0zM240.694 373.755l158.735-56.285 15.306 46.164L256 419.919l-15.306-46.164zm440.409 384.123c-10.122 0-20.49-10.122-25.674-20.49-10.122-10.122-61.47-25.674-148.366-25.674-86.896 0-138.245 15.306-148.366 25.674 0 10.122-10.122 20.49-25.674 20.49s-25.674-10.122-25.674-25.674c0-71.591 174.041-71.591 194.53-71.591 20.489 0 194.53 0 194.53 71.591 10.122 10.368 0 25.674-15.306 25.674zM768 419.919l-163.672-61.47 15.306-46.164 158.735 56.285-10.368 51.348-.001.001z"
            />
          </svg>-->
          <svg viewBox="0 0 1024 1024" id="res-well" width="100%" height="100%">
            <path
              fill="#7ED321"
              fill-rule="evenodd"
              d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0zM247.808 402.432c0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-16.384-24.576-52.224-52.224-52.224-27.648 0-52.224 35.84-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48zM512 800.768c-132.096 0-239.616-96.256-239.616-215.04 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 96.256 89.088 174.08 198.656 174.08 109.568 0 198.656-77.824 198.656-174.08 0-11.264 9.216-20.48 20.48-20.48 11.264 0 20.48 9.216 20.48 20.48 0 117.76-107.52 215.04-239.616 215.04zm243.712-377.856c-11.264 0-20.48-9.216-20.48-20.48 0-17.408-24.576-52.224-52.224-52.224-28.672 0-52.224 34.816-52.224 52.224 0 11.264-9.216 20.48-20.48 20.48-11.264 0-20.48-9.216-20.48-20.48 0-36.864 39.936-93.184 93.184-93.184s93.184 56.32 93.184 93.184c0 11.264-9.216 20.48-20.48 20.48z"
            />
          </svg>
        </div>
        <div class="checkJG">
          监督检查结果：
          <!-- <span class="JGc">差</span> -->
          <span class="JGh">良好</span>
        </div>
        <div class="checkDate">检查日期:</div>
      </div>
    </div>
    <!-- 商家信息 -->
    <div class="activeAndattr foodCheck">
      <p class="titleP titleP2">商家信息</p>
      <p class="sm">店名:&nbsp; {{oneStore.name}}</p>
      <p class="sm">地址:&nbsp; {{oneStore.address}}</p>
      <p class="sm">营业时间:&nbsp;{{oneStore.opening_hours[0]}}</p>
      <p class="sm" @click="zhezhao1=!zhezhao1">
        营业执照
        <span class="barrow1">
          <svg
            data-v-ca49b092
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="description_arrow"
          >
            <path data-v-ca49b092 d="M0 0 L8 7 L0 14" stroke="#bbb" stroke-width="1.5" fill="none" />
          </svg>
        </span>
      </p>
      <p class="sm" @click="zhezhao2=!zhezhao2">
        餐饮服务许可证
        <span class="barrow2">
          <svg
            data-v-ca49b092
            width="14"
            height="14"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="description_arrow"
          >
            <path data-v-ca49b092 d="M0 0 L8 7 L0 14" stroke="#bbb" stroke-width="1.5" fill="none" />
          </svg>
        </span>
      </p>
    </div>
    <!-- 这遮罩之营业执照 -->
    <div class="zhezhao" v-if="zhezhao1" @click="zhezhao1=false">
      <div class="yyzz">
        <img src="../../../../assets/img/yyzz.jpg" alt />
      </div>
    </div>

    <div class="zhezhao" v-if="zhezhao2" @click="zhezhao2=false">
      <div class="xkz">
        <img src="../../../../assets/img/xkz.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../../components/common/NavTop4";
export default {
  name: "storeDetail",
  data() {
    return {
      zhezhao1: false,
      zhezhao2: false,
      oneStore: {}
    };
  },
  components: { NavTop4 },
  methods: {
    toQyrz() {
      this.$router.push("/qyrz");
    },
    getOneStore() {
      this.oneStore = JSON.parse(localStorage.getItem("oneStore"));
      console.log(this.oneStore);
    }
  },
  created() {
    this.getOneStore();
  }
};
</script>

<style lang="scss" scoped>
.storeDetail {
  background: #ebebeb;
}
* {
  margin: 0;
  padding: 0;
}
.activeAndattr {
  padding-left: 0.2813rem;
  box-sizing: border-box;
  background: #fff;
  margin-top: 1rem;
}

.hea {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  top: 0;
  z-index: 4;
}
.titleP {
  margin-left: -0.2813rem;
  padding-left: 0.2313rem;
  font-size: 0.36rem;
  line-height: 0.852rem;
  color: #333;
  border-bottom: 0.03rem solid #f5f5f5;
  margin-bottom: 0.36rem;
}
.titleP2 {
  margin-bottom: 0;
}
.activeAndattr ul li {
  height: 0.624rem;
  padding-bottom: 0.0938rem;
}
.activeAndattr ul li span {
  float: left;
  font-size: 0.26rem;
  color: #666;
  line-height: 0.38rem;
}
.activeAndattr .iconID {
  font-size: 0.24rem;
  width: 0.2748rem;
  height: 0.3654trm;
  color: #fff;

  border-radius: 0.05rem;
  margin-right: 0.2rem;
}
.icon1 {
  background: #f07373;
}
.icon2 {
  background: #999999;
}
.icon3 {
  background: #57a9ff;
}
.icon4 {
  background: #70bc46;
}
.titleP span {
  float: right;
  color: #bbbbbb;
  font-size: 0.32rem;
  margin-right: 0.12rem;
}
.foodCheck {
  margin-top: 0.2rem;
}
.face svg {
  width: 0.938rem;
  height: 0.938rem;
}

.container {
  padding: 0.2812rem 0 0.2812rem;
  overflow: hidden;
}
.container div {
  float: left;
  font-size: 0.26rem;
}
.face {
  width: 1.219rem;
  height: 1.248rem;
}
.checkJG {
  width: 5.1rem;
  margin-top: 0.25rem;
  color: #666;
}
.JGc {
  color: #ff0000;
}
.JGh {
  color: #7ed321;
}
.checkDate {
  margin-top: 0.25rem;
  color: #666;
}
.sm {
  font-size: 0.28rem;
  padding: 0.328rem 0.281rem 0.328rem 0;
  border-bottom: 0.015rem solid #f1f1f1;
  color: #666;
}
.barrow1 {
  margin-left: 5.17rem;
}
.barrow2 {
  margin-left: 4.3rem;
}
.zhezhao {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin-top: -14.45rem;
  z-index: 300;
  box-sizing: border-box;
}
.yyzz img {
  width: 6rem;
  height: 8rem;
  margin: 3rem 0.8rem;
}
.xkz img {
  width: 6.5rem;
  height: 4.5rem;
  margin: 4.5rem 0.5rem;
}
.activeAndattr .iconID {
  font-size: 0.24rem;
  width: 0.4rem;
  height: 0.4rem;
  color: #fff;
  padding: 0.04rem 0.07rem;
  // background-color: red;
  border-radius: 0.05rem;
  margin-right: 0.2rem;
  // border: 1px solid red;
}
ul li {
  list-style: none;
}
</style>