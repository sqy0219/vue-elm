<template>
  <nav id="navTop3">
    <span class="icon1" v-if="icon6==''">
      <i v-if="icon2" class="fa fa-search"></i>
      <i v-else class="fa fa-angle-left" @click="$router.go(-1)"></i>
    </span>
    <span class="icon1" v-else>
      <i v-if="icon2" class="fa fa-search"></i>
      <i v-else class="fa fa-angle-left" @click="$router.push(`${icon6}`)"></i>
    </span>
    <span class="title">{{title}}</span>
    <span class="icon2">
      <router-link v-if="icon5=='切换城市'" to="/">
        <span v-if="icon1">{{icon5}}</span>
      </router-link>
      <div v-if="icon5=='编辑'" @click.prevent="compile()">
        <span v-if="icon1">{{icon5}}</span>
      </div>
      <div v-if="icon5=='完成'" @click.prevent="finish()">
        <span v-if="icon1">{{icon5}}</span>
      </div>
    </span>
  </nav>
</template>

<script>
export default {
  name: "navTop3",
  props: {
    title: String,
    icon1: Boolean,
    icon2: Boolean,
    icon5: String,
    icon6: String
  },
  data() {
    return {
      com1: "完成",
      com2: "编辑"
    };
  },
  methods: {
    compile() {
      this.$emit("com1", this.com1);
    },
    finish() {
      this.$emit("com1", this.com2);
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
  margin-right: -0.1rem;
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
  padding-left: 0.6rem;
  /* border: 1px solid red */
}
.icon2 {
  flex: 5;
  font-size: 0.28rem;
}
.icon2 span {
  line-height: 0.9rem;
  height: 0.9rem;
}
a {
  color: white;
}
</style>