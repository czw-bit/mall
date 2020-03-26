<template>
   <div class="profile-list">
      <div class="profile-list-item">
        <span>我的消息</span>
      </div>
      <div class="profile-list-item">
        <span>积分商城</span>
      </div>
      <div class="profile-list-item">
        <span style="border-bottom: 0;">会员卡</span>
      </div>
      <div class="line"></div>
      <div class="profile-list-item">
        <span>我的购物车</span>
      </div>
      <div class="profile-list-item">
        <span>点赞购物APP</span>
      </div>
    </div>
</template>

<script scoped>
export default {
  name: "profileList"
};
</script>

<style scoped>
.profile-list {
  width: 100%;
  padding: 0 10px;
}
.profile-list-item {
  line-height: 45px;
  display: flex;
  align-items: center;
  height: 45px;
}
.profile-list-item .profile-list-icon {
  font-size: 24px;
  display: inline-block;
  margin-right: 7px;
}
.profile-list-item span {
  font-size: 14px;
  display: inline-block;
  width: 100%;
  color: #333333;
  border-bottom: 1px solid #dddddd;
}
.line {
  width: 100%;
  height: 14px;
  background-color: #eeeeee;
}
</style>
