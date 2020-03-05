<template>
  <div class="back-top">
    <img src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  export default{
    name:'backTop'
  }
</script>

<style scoped>
  .back-top img {
    position: fixed;
    left: 260px;
    bottom: 60px;
    width: 43px;
    height: 43px;
    z-index: 20;
  }
</style>
