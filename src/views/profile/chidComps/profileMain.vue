<template>
  <div class="profile-info">
    <img src="~assets/images/profile/avatar.svg" alt="">
    <div class="profile-center">
      <div>登录/注册</div>
      <div>
        <span class="profile-icon-phone">暂无绑定手机号</span>
      </div>
    </div>
    <div class="prifile-right">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'profileMain'
  }
</script>

<style scoped>
  .profile-info {
    display: flex;
    height: 120px;
    width: 100%;
    background-color: var(--color-tint);
    align-items: center;
    color: #fff;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
  }
  .profile-info img {
    width: 60px;
    height: 60px;
    margin-left: 12px;
  }
  .profile-center {
    flex: 1;
    margin-left: 15px;
    font-size: 16px;
  }
  .profile-center :first-child {
    transform: translateY(-3px)
  }
  .prifile-right {
    position: relative;
    margin-right: 10px;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
  }
  .prifile-right :first-child {
    border-top: 1px solid #fff;
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
    margin-bottom: -14px;
  }
  .prifile-right :last-child {
    border-bottom: 1px solid #fff;
    transform: rotate(-45deg);
    width: 15px;
    height: 15px;
  }
  .profile-icon-phone::before {
    content: '';
    position: absolute;
    left: 83px;
    top: 108px;
    width: 14px;
    height: 14px;
    background:url(~assets/images/profile/phone.svg) 0 0/14px 14px;
  }
  .profile-icon-phone {
    font-size: 12px;
    padding-left: 9px;
  }
</style>
