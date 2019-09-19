<template>
  <div class="BuyRecord">
    <NavTop4 title="购买记录" icon6 />
    <div class="content">
      <img src="../../../assets/img/no.png" alt />
      <p>没有购买记录</p>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "buyRecord",
  components: {
    NavTop4
  }
};
</script>

<style scoped>
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
.BuyRecord {
  height: 13.3rem;
  background: #fff;
}

.content {
  text-align: center;
  padding-top: 3rem;
}
.content img {
  width: 60%;
}
.content p {
  font-size: 0.3rem;
  color: #999;
}
</style>