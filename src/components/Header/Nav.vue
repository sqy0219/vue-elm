<template>
  <nav id="app-nav">
    <div>
      <NavTop2 v-if="selectId==0" :icon2="icon2" :icon1="icon1" />
      <NavTop v-if="selectId==1" :title="address" :icon2="icon2" :icon1="icon1" />
      <NavTop v-if="selectId==2" title="搜索" :icon1="icon1" />
      <NavTop v-if="selectId==3" title="订单列表" :icon1="icon1" />
      <NavTop v-if="selectId==4" title="我的" :icon1="icon1" />
    </div>
  </nav>
</template>

<script>
import NavTop from "../common/NavTop";
import NavTop2 from "../common/NavTop2";

export default {
  name: "app-nav",
  data() {
    return {
      icon1: false,
      icon2: true,
      address: "地址"
    };
  },
  props: ["selectId"],
  components: {
    NavTop,
    NavTop2
  }
};
</script>

<style scoped>
</style>