<template>
  <div class="vipDescribe">
    <div class="hea">
      <NavTop4 title="会员中心" icon6 />
    </div>
    <div class="content">
      <p class="content1">
        尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：
        购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。
        注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
      </p>
      <h3 class="question">Q1: 特权介绍</h3>
      <p class="answer">身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
      <p class="answer">减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
      <p class="answer">更多特权，敬请期待！</p>
      <h3 class="question">Q2: 资费介绍</h3>
      <p class="answer">饿了么会员卡：20元</p>
      <h3 class="question">Q3: 使用说明</h3>
      <p class="answer2">当用户满足以下任一条件，会员服务自动失效：</p>
      <p class="answer1">自绑定之日起超过31天；</p>
      <p class="answer1">在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
      <h3 class="question">Q4: 购卡说明</h3>
      <p class="answer">在线购买：饿了么App>我的>饿了么会员卡</p>
      <h3 class="question">Q5: 温馨提示</h3>
      <p class="answer">用户在当前会员服务失效前，无法购买新卡。</p>
      <p class="answer">请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "vipDiscribe",
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
.vipDescribe {
  width: 100%;
  min-height: 12rem;
  overflow: hidden;
}
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}
.vipDescribe {
  background: #fff;
}
.content {
  margin-top: 0.8rem;
}
.content1 {
  font-size: 0.28rem;
  color: #333;
  padding: 0.3rem 1.12rem 0.1rem 1.12rem;
}
.question {
  font-size: 0.35rem;
  font-weight: 600;
  padding: 0.1rem 0.3rem;
  color: #333;
}
.answer {
  font-size: 0.28rem;
  color: #666;
  padding: 0.05rem 0.3rem;
}
.answer1 {
  font-size: 0.28rem;
  color: #666;
  padding-left: 1.3rem;
}
.answer2 {
  font-size: 0.28rem;
  color: #666;
  padding: 0.05rem 0 0.3rem 0.3rem;
}
</style>