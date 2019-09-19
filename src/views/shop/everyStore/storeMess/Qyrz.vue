<template>
  <div class="qyrz">
    <div id="myHeader">
      <span>
        <router-link to="/storeDetail">
          <svg
            t="1567474842696"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2864"
            width="22"
            height="22"
          >
            <path
              d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1"
              p-id="2865"
              fill="#ffffff"
            />
          </svg>
        </router-link>
      </span>
      食品监督安全公示
    </div>
    <!-- 头部 -->
    <!-- 食品监督安全公示 -->
    <div class="activeAndattr foodCheck">
      <p class="titleP titleP2">食品监督安全公示</p>
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
    <!-- 工商登记信息 -->
    <div class="activeAndattr gsLogin">
      <p class="titleP titleP2">工商登记信息</p>
      <ul>
        <li>
          <p class="xx">企业名称</p>
        </li>
        <li>
          <p class="xx">工商执照注册号</p>
        </li>
        <li>
          <p class="xx">注册资本</p>
        </li>
        <li>
          <p class="xx">这册地址</p>
        </li>
        <li>
          <p class="xx">属地监管所</p>
        </li>
        <li>
          <p class="xx">法定代表人</p>
        </li>
        <li>
          <p class="xx">经营范围</p>
        </li>
      </ul>
    </div>
    <!-- 餐饮许可证 -->
    <div class="activeAndattr gsLogin">
      <p class="titleP titleP2">餐饮许可证</p>
      <ul>
        <li>
          <p class="xx">营业范围</p>
        </li>
        <li>
          <p class="xx">许可证有效期</p>
        </li>
        <li>
          <p class="xx">许可证号</p>
        </li>
        <li>
          <p class="xx">发证时间</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "qyrz"
};
</script>

<style lang="scss" scoped>
.qyrz {
  background: #ebebeb;
}
* {
  margin: 0;
  padding: 0;
}
#myHeader {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 7.5rem;
  box-sizing: border-box;
  height: 0.914rem;
  font-size: 0.4rem;
  color: #fff;
  text-align: center;
  font-weight: 900;
  font-family: "Microsoft Yahei";
  line-height: 0.914rem;
}
#myHeader span {
  display: block;
  position: absolute;
  left: 0.15rem;
  top: 0.11rem;
}
.activeAndattr {
  padding-left: 0.2813rem;
  box-sizing: border-box;
  background: #fff;
  margin-top: 1.1rem;
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
.foodCheck {
  margin-top: 0.92rem;
}
.gsLogin {
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
.gsLogin ul {
  padding: 0.184rem 0.32rem;
  list-style: none;
}
.xx {
  font-size: 0.26rem;
  color: #333;
  line-height: 0.63rem;
}
</style>