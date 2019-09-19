<template>
  <nav id="navTop">
    <span class="icon1">
      <i v-if="icon2" class="fa fa-search" @click="toSearch"></i>
      <span v-else>elm.app</span>
    </span>

    <span class="title">
      <router-link to="/pinpoint">{{title}}</router-link>
    </span>
    <span class="icon2">
      <i v-if="icon1" class="fa fa-user-o" @click="toWo"></i>
      <div v-else class="reglog">
        <router-link to="/login">登录</router-link>
        <span>|</span>
        <router-link to="/login">注册</router-link>
      </div>
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
    },
    toSearch() {
      this.$router.push("./search");
    }
  }
};
</script>

<style  scoped>
nav {
  width: 100%;
  background-color: #3190e8;
  color: white;
  font-size: 0.32rem;
  height: 0.9rem;
  display: flex;
}
span {
  line-height: 0.9rem;
  height: 0.9rem;
  text-align: center;
}
.icon1 {
  flex: 2;
}
.title {
  flex: 5;
  font-size: 0.36rem;
}
.icon2 {
  flex: 2;
  /* border: 1px solid red; */
}
a {
  color: white;
  margin: 0 0.05rem;
}
a:focus {
  text-decoration: none;
}
.fa-user-o {
  /* border: 1px solid red; */

  line-height: 0.95rem;
  font-size: 0.36rem;
  width: 76%;
  text-align: right;
}
.fa-search {
  line-height: 0.9rem;
  width: 0.9rem;
  margin-left: -0.6rem;
  font-size: 0.5rem;
}
</style>