<template>
  <div class="deliveryAddr">
    <!-- <div id="myHeader">
      <span>
        <router-link to="/account">
          <svg
            t="1567474842696"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2864"
            width="22"
            height="22"
          >
            <path
              d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1"
              p-id="2865"
              fill="#ffffff"
            />
          </svg>
        </router-link>
      </span>
      编辑地址
      <span class="chouse" @click="manage=!manage" v-if="manage">编辑</span>
      <span class="chouse" @click="manage=!manage" v-if="!manage">完成</span>
    </div>-->
    <div class="hea">
      <NavTop3 title="编辑地址" :icon1="true" :icon5="icon5" @com1="com1" icon6="/profile/Account" />
    </div>
    <div class="daddr">
      <ul class="myAddr">
        <li v-for="(item, index) in address " :key="index">
          <p>{{item.address_detail}}</p>
          <p>{{item.phone}}</p>
          <span class="flo" v-if="icon5=='完成'" @click="removeAddr(item.user_id,item.id)">
            <svg
              t="1567583518785"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5623"
              width="32"
              height="32"
            >
              <path
                d="M86.016 0l-83.968 70.656c149.504 111.616 288.768 239.616 411.136 367.616-187.392 188.928-334.336 374.784-411.648 449.536l159.744 133.632c56.832-117.248 180.224-294.912 345.6-481.28 165.376 187.392 289.28 366.08 346.112 483.84 0 0 155.648-165.376 169.472-139.776C962.56 816.64 816.128 620.032 619.52 418.816c112.64-115.712 239.104-230.4 374.272-331.264l-36.864-68.608c-153.088 76.288-299.008 189.44-430.08 309.76-132.096-125.44-281.6-244.736-440.832-328.704z"
                p-id="5624"
                fill="#999999"
              />
            </svg>
          </span>
        </li>
      </ul>
      <router-link to="/profile/addAddress">
        <div class="addAddr">
          <p>
            <!-- 最新地址在头部插入 -->
            新增地址
            <span>
              <svg
                id="daArrow"
                t="1567578775909"
                class="icon"
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
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavTop3 from "../../../components/common/NavTop3";
export default {
  name: "deliveryAddress",
  data() {
    return {
      manage: true,
      icon1: true,
      icon5: "编辑",
      address: {}
    };
  },
  created() {
    this.getAddress();
  },
  methods: {
    removeAddr(user_id, id) {
      this.$axios.delete(`v1/users/${user_id}/addresses/${id}`).then(res => {
        // console.log(res);
        this.getAddress();
      });
    },
    com1(com1) {
      this.icon5 = com1;
      console.log(this.icon5);
    },
    getAddress() {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      this.$axios.get(`v1/users/${user.id}/addresses`).then(res => {
        // console.log(res);
        this.address = res.data;
      });
    }
  },
  components: {
    NavTop3
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.deliveryAddr {
  width: 100%;
  min-height: 12rem;
  overflow: hidden;
}
.hea {
  width: 100%;
  position: fixed;
  height: 0.9rem;
}

a {
  text-decoration: none;
  color: #000;
}
a:click {
  color: #000;
}
.account {
  height: 100%;
  background: #f5f5f5;
}

.daddr {
  margin-top: 1.1rem;
}
.daddr ul {
  display: flex;
  flex-direction: column-reverse;
}
.daddr li {
  font-size: 0.28rem;
  color: #333;
  margin-bottom: 0.05rem;
  padding: 0.1875rem;
  background: #fff;
  border-bottom: 0.02rem solid #d9d9d9;
}
.myAddr li:last-child {
  background: #fff8c3;
}
.daddr svg {
  width: 0.2rem;
  height: 0.2rem;
}
.daddr .flo {
  display: block;
  float: right;
  margin-top: -0.6rem;
}
.addAddr {
  height: 0.619rem;
  background: #fff;
  font-size: 0.32rem;
  margin-top: 0.24rem;
  margin-bottom: 0.6rem;
  padding: 0.16rem 0.1875rem 0.16rem;
  border-top: 0.02rem solid #d9d9d9;
}
.addAddr p {
  line-height: 0.652rem;
  color: #333;
}
#daArrow {
  width: 0.4rem;
  height: 0.5rem;
  display: block;
  float: right;
}
</style>