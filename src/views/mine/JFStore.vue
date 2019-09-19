<template>
  <div class="jfStore">
    <class class="hea">
      <NavTop4 title="积分商城" icon6="/profile" />
    </class>

    <h3>请重新进入</h3>
    <p>请返回后重新进入积分商城~</p>
    <img src="../../assets/img/retrylogin.png" alt />
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "jfStore",
  components: {
    NavTop4
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.jfStore {
  text-align: center;
}
.jfStore h3 {
  padding-top: 2rem;
  color: #0d7fd5;
  font-size: 0.45rem;
  padding-bottom: 0.2rem;
}
.jfStore p {
  font-size: 0.25rem;
  color: #666;
  padding-bottom: 0.2rem;
}
.jfStore img {
  width: 45%;
}
</style>