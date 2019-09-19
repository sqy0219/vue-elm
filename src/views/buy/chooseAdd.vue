<template>
  <div class="chooseAdd">
    <div class="title">
      <router-link to="/addAddress">
        <i class="fa fa-angle-left tit"></i>
      </router-link>
      <p>选择地址</p>
    </div>
    <div class="search">
      <input class="text" type="text" placeholder="请输入小区/写字楼/学校等" />
      <input class="btn" type="submit" value="搜索" />
    </div>
    <div class="content">
      <p>找不到地址?</p>
      <p>尝试输入小区、写字楼、小区等</p>
      <p>详细地址(如门牌号等)可稍后输入哦</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.chooseAdd {
  background: #fff;
  height: 13.3rem;
}
.title {
  background: #3190e8;
  color: #fff;
  font-size: 0.4rem;
  padding-bottom: 0.15rem;
}
.title p {
  display: inline-block;
  font-weight: 800;
  font-size: 0.35rem;
  margin-left: 2.3rem;
}
.title a {
  color: #fff;
  font-size: 0.6rem;
  font-weight: 400;
  margin-left: 0.1rem;
  text-decoration: none;
}
.text {
  border: none;
  outline: none;
  background: #ededed;
  color: #666;
  padding: 0.2rem 0 0.2rem 0.2rem;
  margin-left: 0.3rem;
  font-size: 0.3rem;
  width: 5rem;
}
.search {
  float: left;
}
.btn {
  background: #3190e8;
  color: #fff;
  border: none;
  padding: 0.15rem 0.3rem;
  margin-left: 0.4rem;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  margin-top: 0.3rem;
}
.content {
  font-size: 0.28rem;
  color: #999;
  text-align: center;
  margin-top: 5rem;
}
.content p {
  margin-top: 0.1rem;
}
p {
  margin-bottom: 0;
}
.tit {
  margin-left: 0.2rem;
}
</style>