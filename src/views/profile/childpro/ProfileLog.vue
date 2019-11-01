<template>
  <div class="profile-log">
    <img src="~assets/img/profile/avatar.svg" alt class="avatar" />
    <div class="log-text">
      <span>登录/注册</span>
      <div>
        <img class="phone" src="~assets/img/profile/phone.svg" />
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <img src="~assets/img/common/arrow-left.svg" alt="" class="arrow">
  </div>
</template>

<script>
export default {
  name: "ProfileLog",
  data() {
    return {};
  }
};
</script>

<style scoped>
.profile-log {
  background-color: var(--color-tint);
  height: 100px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.avatar {
  width: 70px;
  height: 70px;
}

.log-text{
  line-height: 30px;
  color: #fff;
  margin-left: 10px;
  flex: 1;
}

.phone{
  width: 25px;
  vertical-align: middle;
}

.arrow{
  width: 20px;
}
</style>

