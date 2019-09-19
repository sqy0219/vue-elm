<template>
  <nav id="navTop4">
    <span class="icon1" v-if="icon6==''">
      <span v-if="icon0=='none'"></span>
      <span v-else>
        <i v-if="icon2" class="fa fa-search"></i>
        <i v-else class="fa fa-angle-left" @click="$router.go(-1)"></i>
      </span>
    </span>

    <span class="icon1" v-else>
      <i v-if="icon2" class="fa fa-search"></i>
      <i v-else class="fa fa-angle-left" @click="$router.push(`${icon6}`)"></i>
    </span>

    <span class="title">{{title}}</span>

    <span class="icon2">
      <router-link to="/profile">
        <i v-if="icon7" class="fa fa-user-o"></i>
      </router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: "navTop4",
  data() {
    return {
      icon1: false
    };
  },
  props: {
    title: String,
    icon0: String,
    icon2: Boolean,
    icon6: String,
    icon7: String
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
  flex: 10;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon2 {
  flex: 2;
}
a {
  color: white;
}
</style>