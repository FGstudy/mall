<template>
  <div class="account">
    <div class="account-item">
      <div>
        <span class="amount">0.00</span>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div class="account-item">
      <div>
        <span class="amount">0</span>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div class="account-item">
      <div>
        <span class="amount">0</span>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAccount",
  data() {
    return {};
  }
};
</script>

<style scoped>
.account {
  display: flex;
  align-items: center;
  height: 100px;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  border-bottom: 15px solid #eee;
}
.account-item {
  flex: 1;
}

.amount {
  font-size: 24px;
  color: red;
  font-weight: 700;
}
</style>
