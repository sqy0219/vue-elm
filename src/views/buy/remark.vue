<template>
  <div class="remark">
    <div class="hea">
      <NavTop4 title="订单备注" icon6 />
    </div>
    <div class="content">
      <p>快速备注</p>
      <ul v-for="(remark,index) in remarks" :key="index">
        <li
          v-for="(remark1,index1) in remark"
          @click="chooseli(remark1,index,index1)"
          :key="index1"
          :class="{choosed:remarksbj&&remarksbj.indexOf(remark1)!=-1}"
        >{{remark1}}</li>
      </ul>
    </div>
    <div class="RemarkContent">
      <p>其他备注</p>
      <textarea v-model="text1" placeholder="请输入备注内容(可不填)" cols="40" rows="3"></textarea>
    </div>
    <router-link class="confirm" to="ConfirmOrder">
      <span @click="addlocal">确定</span>
    </router-link>
  </div>
</template>

<script>
import NavTop4 from "../../components/common/NavTop4";
export default {
  name: "remark",
  data() {
    return {
      remarks: [],
      remarksbj: [],
      indexs: [],
      text1: ""
    };
  },
  components: { NavTop4 },
  methods: {
    chooseli(remark1, index, index1) {
      if (!this.remarksbj) {
        this.remarksbj.push(remark1);
        this.indexs.push(index);
      } else if (this.indexs.indexOf(index) == -1) {
        this.remarksbj.push(remark1);
        this.indexs.push(index);
      } else {
        const index2 = this.indexs.indexOf(index);
        this.indexs.splice(index2, 1);
        this.remarksbj.splice(index2, 1);
        this.remarksbj.push(remark1);
        this.indexs.push(index);
      }
    },
    getRemark() {
      this.$axios.get("https://elm.cangdu.org/v1/carts/1/remarks").then(res => {
        console.log(res.data);
        this.remarks = res.data.remarks;
      });
    },
    addlocal() {
      localStorage.setItem(
        "orderBj",
        JSON.stringify([this.remarksbj, this.text1])
      );
    }
  },
  created() {
    this.getRemark();
  }
};
</script>

<style scoped>
.remark {
  width: 100%;
  min-height: 12rem;
  background-color: #f5f5f5;
}
.hea {
  position: fixed;
  /* height: 1rem; */
  width: 100%;
  top: 0;
}
.content {
  margin-top: 0.9rem;
  font-size: 0.3rem;
  padding: 0.2rem;
  background: #fff;
}
ul {
  display: inline-block;
  margin: 0.2rem 0.3rem 0 0.3rem;
  border: 1px solid #3190e8;
  border-radius: 0.1rem;
}
.RemarkContent p {
  text-align: left;
}
.RemarkContent {
  text-align: center;
}
li {
  list-style-type: none;
  display: inline-block;
  padding: 0.1rem 0.2rem;
}
ul > li:nth-child(2) {
  border-right: 1px solid #3190e8;
  border-left: 1px solid #3190e8;
}
.RemarkContent {
  font-size: 0.3rem;
  padding: 0.3rem;
  background: #fff;
  margin-top: 0.3rem;
}
textarea {
  background: #fafafa;
  padding: 0.2rem;
  color: #999;
  outline: none;
}
.confirm {
  font-size: 0.36rem;
  text-align: center;
  display: block;
  background: #4cd964;
  text-decoration: none;
  color: #fff;
  padding: 0.2rem 0;
  margin: 0.6rem 0.5rem;
}
.choosed {
  background: #3190e8;
  color: #fff;
}
p {
  margin-bottom: 0;
}
.tit {
  margin-left: 0.2rem;
}
</style>