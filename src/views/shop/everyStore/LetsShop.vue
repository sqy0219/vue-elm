<template>
  <div class="comment">
    <!-- 上半部 -->

    <div class="store">
      <!-- 第一个箭头返回外卖页面 -->
      <div class="leftArrow" @click="toShoping();bu=true">
        <i class="fa fa-angle-left"></i>
      </div>
      <div class="bg">
        <div class="zz" @click="toDetail">
          <div class="picture">
            <img :src="(`https://elm.cangdu.org/img/${oneStore.image_path}`)" alt />
          </div>
          <div class="describe">
            <p class="p1">{{oneStore.name}}</p>
            <p class="p2">{{oneStore.delivery_mode.text}}/分钟送达/配送费￥{{oneStore.float_delivery_fee}}</p>
            <p class="p2">公告: {{oneStore.promotion_info}}</p>
          </div>
          <div class="p3" v-if="oneStore.activities[0]">
            <span
              :style="{background:` #${oneStore.activities[0].icon_color} `}"
            >{{oneStore.activities[0].icon_name}}</span>
            {{oneStore.activities[0].description}}
          </div>
        </div>
        <!-- 第二个箭头前往商家详情页面 -->
        <div class="svg">
          <i class="fa fa-angle-right"></i>
        </div>
        <!-- 背景图 -->
        <img :src="(`https://elm.cangdu.org/img/${oneStore.image_path}`)" alt />
      </div>
      <!-- 下半部 -->
      <div class="chose">
        <div class="shangping blue" ref="getB1">
          <span @click="toAddShoping();bu=true">商品</span>
          <span class="blueG1" ref="sb1"></span>
        </div>
        <div class="comm" ref="getB2">
          <span @click="toShowComment();bu=false">评价</span>
          <span class="blueG2" ref="sb2"></span>
        </div>
      </div>
    </div>
    <!-- 商品和评价 -->
    <div class="neirong">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "letsShop",
  data() {
    return {
      bu: true,
      oneStore: {}
    };
  },
  watch: {
    bu: function() {
      if (this.bu) {
        this.$refs.getB1.style.color = "#3190e8";
        this.$refs.sb1.style.display = "block";
        this.$refs.getB2.style.color = "#666";
        this.$refs.sb2.style.display = "none";
      } else {
        this.$refs.getB2.style.color = "#3190e8";
        this.$refs.sb2.style.display = "block";
        this.$refs.getB1.style.color = "#666";
        this.$refs.sb1.style.display = "none";
      }
    }
  },
  methods: {
    toShoping() {
      this.$router.push("/shop");
    },
    toAddShoping() {
      this.$router.push("/addShoping");
    },
    toShowComment() {
      this.$router.push("/showComment");
      console.log(this.bu);
    },
    toDetail() {
      this.$router.push("/storeDetail");
    },
    getoneStore() {
      this.oneStore = JSON.parse(localStorage.getItem("oneStore"));
      console.log(this.oneStore);
    }
  },
  created() {
    this.toAddShoping();
    this.getoneStore();
  }
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  // z-index: 100;
  // background: black;
  top: 0;
}
.leftArrow {
  position: absolute;
  z-index: 100;
  width: 0.5rem;
  height: 0.7rem;
}
.fa-angle-left {
  color: #fff;
  font-size: 0.56rem;
  font-weight: 700;
  float: left;
  margin-top: 0.02rem;
  margin-left: 0.1rem;
}
.fa-angle-right {
  color: #fff;
  font-size: 0.46rem;
}
.comment {
  border-top: 0.01rem solid #fff;
}
a {
  text-decoration: none;
  color: #666;
}
* {
  margin: 0;
  padding: 0;
}
.store {
  position: fixed;
  height: 2.8258rem;
  box-sizing: border-box;
  background-color: white;
  z-index: 3;
}
.bg {
  height: 2.4rem;
  overflow: hidden;
}
.zz {
  width: 100%;
  height: 2.4rem;
  position: absolute;
  background: rgba(119, 103, 137, 0.43);
  z-index: 10;
  padding: 0.1875;
}
.bg img {
  width: 7.5rem;
  filter: blur(0.2rem);
}
.changeTitle {
  height: 1.385rem;
}
/*标题头部*/
.zz div {
  float: left;
}

.picture img {
  width: 1.3592rem;
  height: 1.3592rem;
  filter: blur(0);
  margin: 0.1875rem;
}
.describe {
  color: #fff;
}
.p1 {
  // border: 1px solid red;
  width: 5rem;
  height: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.38rem;
  font-weight: 700;
  margin-top: 0.1875rem;
}
.p2 {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.24rem;
  margin-top: 0.13rem;
}
.p3 {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  width: 100%;
  height: 0.6rem;
  left: 0;
  font-size: 0.25rem;
  color: white;
}
.p3 span {
  margin: 0 0.3rem;
  line-height: 0.5rem;
  padding: 0 0.08rem 0.05rem;
  border-radius: 0.1rem;
}
.svg {
  position: absolute;
  z-index: 9;
  margin-left: 7.05rem;
}
.chose {
  height: 1.0658rem;
  display: flex;
  background: #fff;
  font-size: 0.32rem;
  line-height: 1.0658rem;
  color: #666;
  border-bottom: 0.02rem solid #ebebeb;
}
.shangping {
  flex: 1;
  text-align: center;
}
.comm {
  flex: 1;
  text-align: center;
}
/*控制下行小标签的与字体*/
[class*="blueG"] {
  display: block;
  position: absolute;
  width: 0.73rem;
  height: 0.06rem;
  background: #3190e8;
  z-index: 200;
  margin-left: 1.5rem;
  margin-top: -0.22rem;
}
.blueG1 {
  display: block;
}
.blueG2 {
  display: none;
}
.blue {
  color: #3190e8;
}
.neirong {
  margin-top: 3rem;
}
</style>