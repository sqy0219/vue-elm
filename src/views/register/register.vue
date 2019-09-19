<template>
  <div class="login">
    <NavTop title="注册" :icon1="icon1" />
    <p>注册自动登录</p>
  </div>
</template>

<script>
import NavTop from "../../components/common/NavTop";

export default {
  name: "login",
  data() {
    return {
      icon1: false
    };
  },
  components: { NavTop }
};
</script>

<style scoped>
</style>