<template>
  <div class="downLoad">
    <div class="hea">
      <NavTop4 title="下载" icon6="/profile" />
    </div>
    <div class="content">
      <img src="../../assets/img/download.jpg" alt />
      <p class="download1">下载饿了么APP</p>
      <div @click="zhi=true" class="define">下 载</div>
      <div v-show="zhi" class="qb">
        <div class="nouse">
          <p class="quan">!</p>
          <p class="zi">IOS用户请前往AppStore下载</p>
          <p @click="zhi=false" class="queren">确认</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "downLoad",
  data() {
    return {
      zhi: false
    };
  },
  methods: {},
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
.downLoad {
  width: 100%;
  min-height: 12rem;
  overflow: hidden;
}
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}
.define {
  text-align: center;
  border: 1px solid #4cd964;
  border-radius: 0.15rem;
  width: 7rem;
  background: #4cd964;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 600;
  padding: 0.2rem 0;
  margin: 0.5rem 0.3rem;
}

.nouse {
  text-align: center;
  width: 75%;
  border-bottom: 0.1px solid #4cd964;
  border-radius: 0.2rem;
  background: #fff;
  position: fixed;
  left: 1rem;
  top: 3rem;
  animation: dump 0.4s linear;
}
.quan {
  width: 1.5rem;
  height: 1.5rem;
  border: 0.06rem solid #f8cb86;
  border-radius: 50%;
  color: #f8cb86;
  margin: 0.3rem 2rem;
  font-weight: 500;
}
.zi {
  font-size: 0.3rem;
  padding-bottom: 0.3rem;
}
.queren {
  border: 1px solid #4cd964;
  border-bottom-left-radius: 0.15rem;
  border-bottom-right-radius: 0.15rem;

  width: 100%;
  background: #4cd964;
  color: #fff;
  font-size: 0.3rem;
  font-weight: 800;
  padding: 0.2rem 0;
}
img {
  border: 1px solid #fff;
  border-radius: 0.5rem;
  margin: 0.5rem 2rem 0 2rem;
}
.download1 {
  font-size: 0.4rem;
  color: #666;
  margin: 0 2.3rem;
  text-align: center;
  margin-top: 0.2rem;
}
.content {
  margin-top: 0.95rem;
}
@keyframes dump {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.8, 0.8);
  }
  50% {
    transform: scale(1, 1);
  }
  75% {
    transform: scale(0.9, 0.9);
  }
  100% {
    transform: scale(1, 1);
  }
}
.qb {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 12rem;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 3;
}
</style>