<template>
  <div class="recommend">
    <NavTop4 title="推荐有奖" icon6 />
    <img src="../../../assets/activity.png" alt />
    <section class="invite_firend">
      <div class="invite_firend_style">
        <img src="../../../assets/weixin.png" />
        <p>邀请微信好友</p>
      </div>
      <div class="invite_firend_style">
        <img src="../../../assets/qq.png" />
        <p>邀请QQ好友</p>
      </div>
      <div class="invite_firend_style">
        <img src="../../../assets/fenxiang.png" />
        <p>面对面邀请</p>
      </div>
    </section>
    <section class="invite_num">
      <div class="invite_num_style">
        <p>累计收益</p>
        <p>
          <span>0</span>元
        </p>
      </div>
      <div class="invite_num_style invite_people">
        <p>成功邀请</p>
        <p>
          <span>0</span>人
        </p>
      </div>
    </section>
    <p class="income_detail">-收益明细-</p>
    <section class="incom_tips">
      <img src="../../../assets/qianbao.png" />
      <p>还不赶紧去邀请好友</p>
    </section>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";

export default {
  name: "recommend",
  components: {
    NavTop4
  }
};
</script>

<style scoped>
.recommend {
  background-color: #f5f5f5;
  min-height: 12rem;
}
* {
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 4.68rem;
}
.invite_firend {
  height: 2.52rem;
  width: 100%;
  padding: 0.46rem 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
.invite_firend img {
  width: 1.18rem;
  height: 1.18rem;
}
.invite_firend p {
  font-size: 0.24rem;
}
.invite_firend_style {
  width: 2.5rem;
  height: 1.6rem;
  flex: 1;
  text-align: center;
}
.invite_num {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.6rem;
  font-size: 0.24rem;
  display: flex;
}
.invite_num_style {
  flex: 1;
  text-align: center;
  color: #666;
  line-height: 0.4rem;
}
.invite_num_style span {
  font-size: 0.38rem;
  color: #ff5633;
  font-weight: 700;
}
.invite_people span {
  color: #666;
}
.income_detail {
  width: 100%;
  height: 0.3rem;
  font-size: 0.24rem;
  color: #666;
  margin-top: 0.46rem;
  text-align: center;
}
.incom_tips {
  width: 100%;
  height: 1.2rem;
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.24rem;
}
.incom_tips img {
  width: 0.6rem;
  height: 0.72rem;
}
.incom_tips p {
  margin-top: 0.1rem;
  color: #999;
}
</style>