<template>
  <div id="app">
    <!-- <Nav :selectId="selectId" /> -->
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- <Footer @sendSelectId="getSelectId" /> -->
    <Loading v-show="getLoading" />
  </div>
</template>

<script>
// import Nav from "./components/Header/Nav";
// import Footer from "./components/Footer/Footer";
import { mapGetters } from "vuex";
import Loading from "./components/common/Loading";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: mapGetters(["getLoading"]),
  components: {
    // Nav,
    // Footer,
    Loading
  }
  // methods: {
  //   getSelectId(id) {
  //     this.selectId = id;
  //   }
  // }
};
</script>

<style scoped>
/* html,
body {
  font-size: 50px;
} */
</style>