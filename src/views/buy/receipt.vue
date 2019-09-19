<template>
  <div class="receipt">
    <div class="hea">
      <NavTop4 title="选择发票抬头" icon6 />
    </div>
    <div @click="select()" class="content">
      不需要开发票
      <span>
        <i :style="{color:is?'#4cd964':'#999'}" class="fa fa-check-circle gou"></i>
      </span>
    </div>
    <div class="confirm">
      <span @click="add()">确定</span>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "receipt",
  data() {
    return {
      is: false
    };
  },
  components: { NavTop4 },
  methods: {
    select() {
      this.is = !this.is;
      console.log(this.is);
    },
    add() {
      localStorage.setItem("isfapiao", JSON.stringify(this.is));
      this.$router.push("/ConfirmOrder");
    }
  }
};
</script>

<style scoped>
.hea {
  position: fixed;
  height: 1rem;
  width: 100%;
  top: 0;
  /* top: -0.4rem; */
}
.receipt {
  width: 100%;
  min-height: 10rem;
  background-color: #f5f5f5;
}
.content {
  font-size: 0.36rem;
  background: #fff;
  margin: 0.2rem 0;
  color: #666;
  height: 0.9rem;
  line-height: 0.9rem;
  margin-top: 1.1rem;
  padding: 0 0.3rem;
  /* border: 1px solid red; */
}
.gou {
  width: 0.4rem;
  height: 0.4rem;
  float: right;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-weight: 800;
  padding-bottom: 0.05rem;
}
.fa-check-circle {
  /* color: #999; */
  font-size: 0.46rem;
  height: 0.9rem;
  line-height: 0.9rem;
}
p {
  padding: 0 0.3rem;
}
.confirm {
  font-size: 0.36rem;
  text-align: center;
  display: block;
  background: #4cd964;
  text-decoration: none;
  color: #fff;
  padding: 0.2rem 0;
  margin: 0 0.5rem;
}

.tit {
  margin-left: 0.2rem;
}
</style>