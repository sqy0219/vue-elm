<template>
  <div class="serviceCenter">
    <div class="hea">
      <NavTop4 title="服务中心" icon6="/profile" />
    </div>
    <div class="online">
      <section class="service_connect">
        <a href="https://ecs-im.ele.me/" class="service_left">
          <svg data-v-1a228d92>
            <svg viewBox="0 0 46 46" id="human">
              <path
                fill="#ff7b52"
                d="M33.291 37.774c-.25.097-.504.175-.765.233-6.427 1.444-5.954-3.968-6-3.953 10.457-5.053 10.348-13.466 10-16.216-16.15-.041-22.943-7.063-22.943-7.063s-.176 1.733-2.933 4.996c-2.756 3.262-5.236 4.09-5.132 4.113.54 13.9 12.246 14.242 12.246 14.242-.762 4.662-4.357 4.33-4.357 4.33s-6.38.213-11.173-7.446c-.85-1.359-1.02-2.864-1.166-4.579-.217-2.542.14-4.643.312-7.2.271-4.064.96-6.269.96-6.269S7.13 0 21.4 0s17.828 12.508 17.828 12.508l-.035.074c.533.763.984 1.997 1.356 3.36A3.483 3.483 0 0 1 45 19.281v7.257a3.484 3.484 0 0 1-3.325 3.472c-2.009 4.537-6.657 12.185-15.241 12.457C26.023 44.485 24.269 46 22.168 46c-2.407 0-4.357-1.988-4.357-4.44 0-2.453 1.95-4.44 4.357-4.44 1.955 0 3.609 1.311 4.16 3.118 1.447.13 4.044-.094 6.963-2.464zM18.216 27.018s.99 3.08 3.705 3.08 3.807-1.875 3.807-2.906c.467-1.135 1.348-.541 1.482-.071.134.47-.763 4.67-5.24 4.67s-5.205-4.358-5.205-4.358.033-.97.702-.97c.669 0 .749.555.749.555zm10.052-2.332c.963 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664zm-12.723 0c.962 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664z"
              />
            </svg>
          </svg>
          <span class="xz">在线客服</span>
        </a>
        <a href="tel:10105757" class="service_right">
          <svg>
            <svg viewBox="0 0 46 46" id="phone">
              <path
                fill="#6ac20b"
                d="M15.433 30.568c9.342 9.342 17.708 12.15 18.871 12.316 1.163.167 3.07.542 5.837-2.225 3.24-3.24 3.566-4.94 1.783-6.724-1.783-1.783-6.212-4.48-7.416-5.176-1.206-.696-2.228-.472-3.097.133-.868.605-1.87 1.375-2.798 2.047-.927.671-2.087.955-3.332.167-1.245-.79-3.35-2.27-5.735-4.652-2.384-2.384-3.863-4.49-4.651-5.735-.789-1.245-.505-2.405.167-3.332.671-.928 1.441-1.93 2.046-2.798.605-.869.828-1.89.134-3.097-.696-1.204-3.394-5.633-5.177-7.416-1.783-1.783-3.484-1.457-6.724 1.783-2.766 2.766-2.391 4.674-2.226 5.837.167 1.164 2.976 9.53 12.318 18.872"
              />
            </svg>
          </svg>
          <span class="xz">在线客服</span>
        </a>
      </section>
    </div>
    <h4>热门问题</h4>
    <div class="questions">
      <ul>
        <router-link to="/profile/Answers">
          <li @click="getIndex(index)" v-for="(question,index) in questions" :key="index">
            {{question}}
            <span>
              <svg
                t="1567578775909"
                class="icon arrowR"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4426"
                width="32"
                height="32"
              >
                <path
                  d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                  p-id="4427"
                  fill="#bfbfbf"
                />
              </svg>
            </span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "serviceCenter",
  computed: mapGetters(["answer"]),
  data() {
    return {
      questions: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其他问题",
        "准时到达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责声明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    };
  },
  methods: {
    getIndex(index) {
      this.$store.dispatch("setAnswerAsync", index);
    },
    online() {
      alert("要打开选取应用么？");
    }
  },
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
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}
.online {
  margin-top: 0.9rem;
}
.arrowR {
  width: 0.4rem;
  height: 0.5rem;
}
.serviceCenter {
  height: 23.1rem;
  background: #fff;
  font-size: 0.3rem;
  overflow: hidden;
}

.online img {
  width: 16%;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  padding: 0.4rem 1.265rem;
}
h4 {
  font-size: 0.35rem;
  font-weight: 500;
  padding: 0.2rem 0.3rem 0.4rem 0.3rem;
  border-bottom: 1px solid #f5f5f5;
}
.questions li {
  font-size: 0.28rem;
  color: #666;
  padding: 0.25rem 0.3rem;
  border-bottom: 1px solid #f5f5f5;
}
.questions span {
  color: rgb(153, 153, 153);
  float: right;
  font-size: 0.4rem;
  font-weight: 500;
}
a {
  text-decoration: none;
}
#human {
  width: 0.1rem;
  height: 0.1rem;
  font-size: 0.1em;
}
.service_connect {
  display: flex;
  width: 100%;
  height: 1.9rem;
  /* border: 1px solid red; */
}
.service_connect a {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.45rem;
  color: #666;
  /* border: 1px solid red; */
}
.service_connect a svg {
  width: 0.47rem;
  height: 0.47rem;
  margin-bottom: 0.15rem;
  /* border: 1px solid red; */
}
.xz {
  font-size: 0.28rem;
}
</style>