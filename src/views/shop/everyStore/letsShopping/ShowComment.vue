<template>
  <div class="showComment">
    <!-- 综合评分与星级 -->
    <div class="zhpj">
      <div class="zhpf">
        <p class="num">{{getAC(allRating.overall_score)}}</p>
        <p class="tit">综合评价</p>
        <p class="compare">高于周边商家76.9%</p>
      </div>
      <div class="starMode">
        <div class="atitude">
          服务态度
          <div class="zhezhao1" :style="(`width:${(allRating.service_score)/5*0.92}rem`)">
            <span class="fiveStar1">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
          </div>
          <span class="fiveStar2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <span>{{getSC(allRating.service_score)}}</span>
        </div>
        <div class="atitude">
          菜品评价
          <div class="zhezhao2" :style="(`width:${(allRating.food_score)/5*0.92}rem`)">
            <span class="fiveStar3">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </span>
          </div>
          <span class="fiveStar4">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <span>{{getFC(allRating.food_score)}}</span>
        </div>
        <p class="atitudeLast">
          送达时间
          <span>
            <router-link to="/ddxq">{{allRating.deliver_time}}分钟</router-link>
          </span>
        </p>
      </div>
    </div>
    <!-- 评价类型统计 -->
    <div class="commSort">
      <ul>
        <li
          v-for="item in arr"
          :key="item"
          @click="chose(item)"
          :class="{dc:str&&str==item}"
          class="abg"
        >{{item}}</li>
      </ul>
    </div>
    <!-- 评论区域 -->
    <div class="commDiv">
      <ul>
        <li class="com" v-for="(comm,index) in pl" :key="index">
          <div class="cl">
            <img :src="getAvatar(comm,index)" />
          </div>
          <div class="cm">
            <p class="user">
              <span class="username">{{comm.username}}</span>
              <span class="cr">{{comm.rated_at}}</span>
            </p>
            <div class="detail">
              <span class="fiveStar">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </span>
              <span class="time">{{comm.time_spent_desc}}</span>
            </div>
            <div class="wrap">
              <div v-for="(myFood,index1) in comm.item_ratings" :key="index1" class="waimai">
                <img
                  v-if="myFood.image_hash"
                  :src="myFood.image_hash"
                  class="foodP"
                  style="display:inline-block"
                />
              </div>
            </div>
            <ul class="food">
              <li
                v-for="(foodName,index) in comm.item_ratings"
                :key="index"
              >{{foodName.food_name | toShotter}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { filter } from "minimatch";
export default {
  name: "showComment",
  data() {
    return {
      arr: [
        "全部(473)",
        "满意(453)",
        "不满意(20)",
        "有图(2)",
        "味道好(47)",
        "送货快(32)",
        "分量足(18)",
        "包装精美(15)",
        "干净卫生(15)",
        "食材新鲜(15)",
        "服务不错(11)"
      ],
      str: "全部(473)",
      defaultSrc: "http://elm.cangdu.org/img/default.jpg",
      myAvatarSrc: [
        "1/5f/6cf782b0c9cd5ca8daa7f76ab05aejpeg.jpeg",
        "1/b5/23ca27369a0eed1ce0c3fc0a5ba8bjpeg.jpeg",
        "8/18/cf0c977c77ca365557230db619a18jpeg.jpeg"
      ],
      pl: [],
      allRating: [],
      notShow: false
    };
  },
  methods: {
    getSC(n) {
      return parseFloat(n).toFixed(1);
    },
    getFC(m) {
      return parseFloat(m).toFixed(1);
    },
    getAC(k) {
      return parseFloat(k).toFixed(1);
    },
    chose(item) {
      this.str = item;
    },
    getRating() {
      this.$axios
        .get("https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores")
        .then(res => {
          this.allRating = res.data;
          // console.log(this.allRating);
        });
    },
    getAvatar(comm, index) {
      if (comm.avatar.length == 0) {
        return this.defaultSrc;
      } else if (index == 1) {
        return "https://fuss10.elemecdn.com/" + this.myAvatarSrc[0];
      } else if (index == 4) {
        return "https://fuss10.elemecdn.com/" + this.myAvatarSrc[1];
      } else if (index == 7) {
        return "https://fuss10.elemecdn.com/" + this.myAvatarSrc[2];
      }
    },
    getimg() {
      this.oneStore = JSON.parse(localStorage.getItem("oneStore"));

      this.$axios
        .get(
          `/ugc/v2/restaurants/${this.oneStore.id}/ratings?offset=0&limit=10`
        )
        .then(res => {
          console.log(res.data);
          this.pl = res.data;
          for (const key in this.pl) {
            for (const key1 in this.pl[key].item_ratings) {
              if (this.pl[key].item_ratings[key1].image_hash != "") {
                console.log(this.pl[key].item_ratings[key1].image_hash);
                var a = this.pl[key].item_ratings[key1].image_hash.split("");
                a.splice(36, 0, ".jpeg");

                a.splice(3, 0, "/");

                a.splice(1, 0, "/");

                a.splice(0, 0, "https://fuss10.elemecdn.com/");
                console.log(a);
                this.pl[key].item_ratings[key1].image_hash = a.join("");
              }
            }
          }
          console.log(this.pl);
        });
    }
  },

  created() {
    this.getimg();
    this.getRating();
  },
  filters: {
    toShotter: function(value) {
      return value.slice(0, 2) + "...";
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.zhpj {
  width: 100%;
  height: 2.14rem;
  background: #fff;
  margin-top: 3.5rem;
  padding: 0.375rem 0.2344rem;
  margin-bottom: 0.2344rem;
  box-sizing: border-box;
}
.zhpf {
  width: 3.015rem;
  text-align: center;
  box-sizing: border-box;
}
.starMode {
  width: 4.02rem;
  box-sizing: border-box;
}
.zhpf,
.starMode {
  float: left;
}
.num {
  font-size: 0.52rem;
  color: #ff6600;
}
.tit {
  font-size: 0.31rem;
  color: #666;
  margin-bottom: 0.0468rem;
}
.fiveStar {
  color: #ff9a0d;
  font-size: 0.2rem;
}
.compare {
  font-size: 0.22rem;
  color: #999;
}
.atitude,
.atitudeLast {
  font-size: 0.32rem;
  color: #666;
  line-height: 0.46rem;
}
.atitude span:nth-child(3) {
  font-size: 0.26rem;
  color: #ff9a0d;
  margin-left: 1.2rem;
}
.atitudeLast span {
  font-size: 0.27rem;
  color: #999;
  margin-left: 0.2rem;
}
//评价类型
.commSort {
  width: 100%;
  height: 3.5504rem;
  box-sizing: border-box;
  background: #fff;
  padding: 0.2344rem;
}
.commSort ul {
  overflow: hidden;
}
.commSort ul li {
  list-style: none;
  float: left;
  padding: 0.141rem;
  margin-right: 0.1875rem;
  margin-bottom: 0.094rem;
  font-size: 0.28rem;
  border-radius: 0.1rem;
}
.abg {
  background: #ebf5ff;
  color: #6d7885;
}
.dc {
  background: #3190e8;
  color: #fff;
}
.bed {
  background: #f5f5f5;
  color: #aaaaaa;
}
/*评价列表*/
.commDiv {
  box-sizing: border-box;
  padding: 0 0.2344rem;
  background: #fff;
}
.com {
  border-top: 0.02rem solid #ebebeb;
  border-bottom: 0.02rem solid #ebebeb;
  overflow: hidden;
}
.cl,
.cm {
  float: left;
  box-sizing: border-box;
}
.cl img {
  width: 0.73rem;
  height: 0.73rem;
  border-radius: 50%;
}
.cl {
  height: 100%;
  margin-right: 0.5rem;
}
.cr {
  font-size: 0.18rem;
  color: #999;
}
.cm {
  width: 5.8rem;
  box-sizing: border-box;
  padding: 0.2rem 0;
}
.user {
  display: flex;
  justify-content: space-between;
}
.username {
  font-size: 0.26rem;
  color: #666;
}
.time {
  margin-left: 0.08rem;
  margin-top: 0.03rem;
  font-size: 0.26rem;
  color: #666;
}
.detail {
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.1rem;
}

.foodP {
  width: 1.4rem;
  margin-right: 0.3rem;
}
.food {
  font-size: 0.26rem;
  color: #999;
}
.food li {
  padding: 0.094rem;
  border: 0.01rem solid #ebebeb;
  float: left;
  margin-right: 0.1rem;
}
.foodp2 {
  display: none;
}
/*评价星级*/

.fiveStar1 {
  color: #ff9a0d;
  font-size: 0.2rem;
  position: absolute;
  z-index: 1;
  height: 0.46rem;
  width: 0.94rem;
  top: 0.1rem;
}

.fiveStar2 {
  color: #d1d1d1;
  font-size: 0.2rem;
  position: absolute;
  left: 4.62rem;
  top: 4.05rem;
  z-index: 0;
  height: 0.46rem;
}
.fiveStar3 {
  color: #ff9a0d;
  font-size: 0.2rem;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  height: 0.46rem;
  width: 0.94rem;
  top: 0.1rem;
}
.fiveStar4 {
  color: #d1d1d1;
  font-size: 0.2rem;
  position: absolute;
  left: 4.62rem;
  top: 4.5rem;
  z-index: 0;
  height: 0.46rem;
}
.zhezhao1 {
  height: 0.46rem;
  line-height: 0.46rem;

  overflow: hidden;
  position: absolute;
  z-index: 1;
  left: 4.62rem;
  top: 3.93rem;
  // border: 1px solid red;
}
.zhezhao2 {
  height: 0.46rem;
  line-height: 0.46rem;

  overflow: hidden;
  position: absolute;
  z-index: 1;
  left: 4.62rem;
  top: 4.4rem;
}
i {
  display: block;
  float: left;
}
.waimai {
  float: left;
}
.wrap {
  overflow: hidden;
  margin-bottom: 0.1rem;
}
</style>