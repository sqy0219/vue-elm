<template>
  <nav id="navTop">
    <span class="icon1">
      <i v-if="icon2" class="fa fa-search"></i>
      <i v-else class="fa fa-angle-left" @click="$router.go(-1)"></i>
    </span>

    <span class="title">{{title}}</span>
    <span class="icon2">
      <i v-if="icon1" class="fa fa-user-o" @click="toWo"></i>
    </span>
  </nav>
</template>

<script>
export default {
  name: "navTop",
  data() {
    return {
      icon1: false
    };
  },
  props: {
    title: String,
    icon2: Boolean
  },
  created() {
    this.isLog();
  },
  methods: {
    isLog() {
      var user = JSON.parse(localStorage.getItem("user") || "{}");
      if (user == {}) {
        this.icon1 = false;
      } else if (user.username) {
        this.icon1 = true;
      }
      console.log(user, this.icon1);
    },
    toWo() {
      this.$router.push("./profile");
    }
  }
};
</script>

<style  scoped>
nav {
  width: 100%;
  background-color: #3190e8;
  color: white;
  font-size: 0.36rem;
  height: 0.9rem;
  /* font-weight: 700; */
  display: flex;
}
span {
  line-height: 0.9rem;
  height: 0.9rem;
  text-align: center;
}
.icon1 {
  flex: 2;
  font-size: 0.6rem;
  height: 0.9rem;
}
.fa-search {
  font-size: 0.45rem;
}
.title {
  flex: 17;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon2 {
  flex: 2;
}
</style>