<template>
  <footer id="app-footer">
    <ul class="button">
      <li>
        <router-link to="/shop">
          <i v-if="!icon1" class="iconfont">&#xe600;</i>
          <i v-else class="iconfont take-out">&#xe602;</i>
          <span>外卖</span>
        </router-link>
      </li>
      <li>
        <router-link to="search">
          <i v-if="!icon2" class="iconfont">&#xe627;</i>
          <i v-else class="iconfont take-out">&#xe62a;</i>
          <span>搜索</span>
        </router-link>
      </li>

      <li>
        <router-link to="order">
          <i v-if="!icon3" class="iconfont">&#xe601;</i>
          <i v-else class="iconfont take-out">&#xe60c;</i>
          <span>订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="profile">
          <i v-if="!icon4" class="iconfont">&#xe616;</i>
          <i v-else class="iconfont take-out">&#xe611;</i>

          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "app-footer",

  props: {
    icon1: Boolean,
    icon2: Boolean,
    icon3: Boolean,
    icon4: Boolean
  },
  methods: {
    // select(id) {
    //   this.icon1 = this.icon2 = this.icon3 = this.icon4 = true;
    //   if (this.buttonId == 1 || id == 1) {
    //     this.icon1 = false;
    //     this.$router.push("/shop");
    //   } else if (this.buttonId == 2 || id == 2) {
    //     this.icon2 = false;
    //     this.$router.push("/search");
    //   } else if (this.buttonId == 3 || id == 3) {
    //     this.icon3 = false;
    //     this.$router.push("/order");
    //   } else if (this.buttonId == 4 || id == 4) {
    //     this.icon4 = false;
    //     this.$router.push("/profile");
    //   }
    // }
  }
};
</script>

<style scoped>
.app-footer {
  width: 100%;
  height: 0.9rem;
  position: fixed;
}
* {
  padding: 0;
  margin: 0;
}
.button {
  width: 100%;
  color: white;
  font-size: 0.4rem;
  height: 0.9rem;
  /* font-weight: 700; */
  display: flex;
  align-content: space-around;
  background-color: white;
  border-radius: 0.1rem;
  position: absolute;
  /* border: 1px solid red; */

  box-shadow: 0 -0.02667rem 0.05333rem rgba(0, 0, 0, 0.1);
}
li {
  list-style-type: none;
  flex: 1;
  text-align: center;
  /* line-height: 0.9rem; */
  color: #666;
  font-size: 0.2rem;
}

.take-out {
  color: #1296db;
}
a {
  color: #666;
  display: flex;
  flex-direction: column;
}
i {
  margin-bottom: -0.09rem;
}
a:focus {
  text-decoration: none;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 0.4rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: "iconfont"; /* project id 1235895 */
  src: url("//at.alicdn.com/t/font_1235895_wrbnkbik49f.eot");
  src: url("//at.alicdn.com/t/font_1235895_wrbnkbik49f.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1235895_wrbnkbik49f.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1235895_wrbnkbik49f.woff") format("woff"),
    url("//at.alicdn.com/t/font_1235895_wrbnkbik49f.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1235895_wrbnkbik49f.svg#iconfont") format("svg");
}
</style>