<template>
  <div class="resetUsername">
    <NavTop4 title="修改用户名" icon6="/profile/Account" />
    <div class="resetUsername2">
      <input
        class="rusername"
        type="text"
        placeholder="输入用户名"
        v-model="username"
        @keyup="rnReact()"
        ref="usernam"
      />
      <p class="gray" v-if="!rnE">用户名只能修改一次（2-6字符之间）</p>
      <p class="red" v-if="rnE">用户名长度在2到6位之间</p>
      <button class="rnOk" @click="rname()" ref="rnOk">确认修改</button>
    </div>
  </div>
</template>

<script>
import NavTop4 from "../../../components/common/NavTop4";
export default {
  name: "resetUsername",
  data() {
    return {
      username: "",
      rnE: false,
      bindrnE: 2 //默认正确
    };
  },
  watch: {
    bindrnE: function() {
      if (this.bindrnE == 2) {
        this.$refs.rnOk.className = "rnOk2";
      } else if (this.bindrnE == 1) {
        this.$refs.rnOk.className = "rnOk1";
      }
    }
  },
  components: {
    NavTop4
  },
  methods: {
    rnReact() {
      //判断输入是否合法
      if (this.username.length < 2) {
        this.$refs.usernam.style.border = "0.02rem solid #ea3106";
        this.rnE = true;
        this.bindrnE = 2;
      } else if (this.username.length >= 2 && this.username.length < 7) {
        this.rnE = false;
        this.bindrnE = 1;
        this.$refs.usernam.style.border = "0.02rem solid #ddd";
      } else if (this.username.length >= 7) {
        this.$refs.usernam.style.border = "0.02rem solid #ea3106";
        this.rnE = true;
        this.bindrnE = 2;
      }
    },
    //修改名字
    rname() {
      if (this.username.length >= 2 && this.username.length < 7) {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user != {}) {
          user.username = this.username;
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.push("/profile/Account");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
a:click {
  color: #333;
}
.account {
  height: 100%;
  background: #f5f5f5;
}
.resetUsername2 {
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.3rem;
}
.rusername {
  display: block;
  width: 7.125rem;
  height: 0.7876rem;
  background: #f5f5f5;
  margin: 0 auto;
  outline: none;
  border: 0.02rem solid #ddd;
  border-radius: 0.06rem;
  font-size: 0.34rem;
}
.gray {
  font-size: 0.22rem;
  padding: 0.2rem;
  color: #666;
}
.red {
  font-size: 0.28rem;
  padding: 0.01rem 0.2rem 0.25rem;
  color: #ea3106;
}
/*按钮动画*/
.rnOk {
  float: left;
  margin-top: 0.2rem;
  width: 7.125rem;
  height: 0.928rem;
  border: none;
  border-radius: 0.04rem;
  background: #3199e8;
  color: #a3d1f5;
  /* color: #fff;  */
  font-size: 0.32rem;
  margin-left: 0.18rem;
}
button:focus {
  outline: none;
}
.rnOk1 {
  float: left;
  margin-top: 0.2rem;
  width: 7.125rem;
  height: 0.928rem;
  border: none;
  border-radius: 0.04rem;
  background: #3199e8;
  font-size: 0.32rem;
  margin-left: 0.18rem;
  color: #fff;
  animation: btow 1s linear;
}
.rnOk2 {
  float: left;
  margin-top: 0.2rem;
  width: 7.125rem;
  height: 0.928rem;
  border: none;
  border-radius: 0.04rem;
  background: #3199e8;
  font-size: 0.32rem;
  margin-left: 0.18rem;
  color: #a3d1f5;
  animation: wtob 1s linear;
}
@keyframes btow {
  from {
    color: #a3d1f5;
  }
  to {
    color: #fff;
  }
}
@keyframes wtob {
  from {
    color: #fff;
  }
  to {
    color: #a3d1f5;
  }
}
</style>