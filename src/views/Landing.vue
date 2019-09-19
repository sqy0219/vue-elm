<template>
  <nav class="landing">
    <NavTop2 :icon2="icon2" />
    <div class="first">
      <div class="location">
        <span>当前定位城市:</span>
        <span class="f9">定位不准确时，请在城市列表中选择</span>
      </div>

      <div class="locl-ad" @click="sendAddr(addressName)">
        <div class="address">{{addressName.name}}</div>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
    <div class="centre">
      <div class="location">
        <span>热门城市</span>
      </div>
      <ul>
        <li v-for="(hot,index) in addressHot" :key="index" class="box">
          <div @click=" sendAddr(hot)">{{hot.name}}</div>
        </li>
      </ul>
    </div>
    <div class="foot">
      <ul>
        <li v-for="(groups,index) in addressGroup" :key="index">
          <div class="zm">
            <span>{{index}}</span>
            <span class="zm-xh" v-if="index=='A'">&nbsp;(按字母排序)</span>
          </div>
          <div v-for="(group,index) in groups" :key="index" class="box wb">
            <div class="wb" @click=" sendAddr(group)">{{group.name}}</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- <Footer /> -->
  </nav>
</template>

<script>
import NavTop2 from "../components/common/NavTop2";
import Footer from "../components/Footer/Footer";

export default {
  name: "landing",
  data() {
    return {
      // icon1: false,
      icon2: false,
      addressName: "",
      addressHot: {},
      addressGroup: []
    };
  },
  components: { NavTop2, Footer },
  created() {
    // this.isUser();

    this.getLocal();
    this.getHot();
    this.getGroup();
  },
  methods: {
    // isUser() {
    //   let user = JSON.parse(localStorage.getItem("user") || "");
    //   if (user.name) {
    //     this.icon1 = true;
    //     console.log(this.icon1);
    //   }
    //   console.log(this.icon1);
    // },
    getLocal() {
      this.$axios.get("/v1/cities?type=guess").then(res => {
        // console.log(res.data);

        this.addressName = res.data;
      });
    },
    getHot() {
      this.$axios.get("/v1/cities?type=hot").then(res => {
        // console.log(res.data);
        this.addressHot = res.data;
      });
    },
    getGroup() {
      this.$axios.get("/v1/cities?type=group").then(res => {
        var err = [];
        for (var key in res.data) {
          err.push(key);
        }
        err.sort();
        var obj = {};
        for (var i = 0; i < err.length; i++) {
          for (var key in res.data) {
            if (key == err[i]) {
              obj[err[i]] = res.data[key];
            }
          }
        }
        this.addressGroup = obj;
      });
    },
    sendAddr(addres) {
      localStorage.setItem("page", "posi");

      localStorage.setItem("address", JSON.stringify(addres));
      this.$router.push("/pinpoint");
    }
  }
};
</script>
<style scoped>
.landing {
  color: #666;
  background: #f5f5f5;
  /* background: red; */
}
.first,
.centre,
.foot {
  font-size: 0.26rem;
  background: #fff;
  overflow: hidden;
}
.location {
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
}
.location span {
  line-height: 0.8rem;
  margin: 0.1rem 0.2rem;
}
.f9 {
  color: #9f9f9f;
  font-weight: 900;
  font-size: 0.2rem;
}
a:link {
  text-decoration: none;
}
.locl-ad {
  display: flex;
  justify-content: space-between;
  font-size: 0.36rem;
  height: 0.9rem;
  line-height: 0.9rem;

  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
}
.locl-ad .address,
.locl-ad i {
  margin: 0 0.2rem;
}
.address {
  color: #3190e8;
  line-height: 0.9rem;
}
.locl-ad i {
  color: #999;
  font-size: 0.6rem;
  line-height: 0.9rem;
}
.centre .location {
  font-size: 0.26rem;
  color: #666;
  margin-top: 0.2rem;
  height: 0.7rem;
  background: white;

  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.centre .location span {
  line-height: 0.7rem;
  height: 0.7rem;
  margin: 0 0.2rem;
  padding: 0;
}
.centre {
  background: #f5f5f5;
}
.box {
  margin: 0;
  padding: 0;
  float: left;
  text-align: center;
  color: #3190e8;
  border: 1px solid #e4e4e4;
  width: 25%;
  font-size: 0.28rem;
  list-style-type: none;
  height: 0.82rem;
  line-height: 0.82rem;
  background: white;
}
.foot {
  font-size: 0.26rem;
  color: #666;
  background: #f5f5f5;

  border-top: 2px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.foot ul {
  display: flex;
  list-style-type: none;

  flex-direction: column;
}
.foot ul li {
  border-bottom: 1px solid #e4e4e4;
  border-top: 2px solid #e4e4e4;
  background-color: white;
  margin-top: 0.2rem;
}
.foot ul li .zm {
  line-height: 0.7rem;
  height: 0.7rem;
  padding: 0 0.2rem;
  /* padding: 0; */
  background: white;
}
.wb {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wb a {
  color: #666;
}
.zm-xh {
  font-size: 0.2rem;
  color: #999;
}
</style>
