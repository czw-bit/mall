<template>
  <div class="bottom-bar">
    <div class="bottom-bar-service">
      <i class="icon service"></i>
      <span>客服</span>
    </div>

    <div class="bottom-bar-shop">
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>

    <div class="bottom-bar-select">
      <i class="icon select"></i>
      <span>收藏</span>
    </div>
    <div class="bottom-bar-item">
      <div>购买</div>
      <div @click="shopTocart">加入购物车</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'detailBottomBar',
    methods:{
      shopTocart(){
        this.$emit('shopTocart')
      }
    }
  }
</script>

<style>
  .bottom-bar {
    height: 49px;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 9999;
    font-size: 12px;
    box-shadow: 0 -1px 2px rgba(100,100,100, .3);
  }
  .bottom-bar > div {
    flex: 1;
  }
  .icon {
    display: block;
    height: 22px;
    width: 22px;
    background: url(../../../../assets/images/detail/detail_bottom.png) 0 0/100%;

  }
  .service {
    background-position: 0 -54px;
  }
  .shop {
    background-position: 0 -98px;
  }
  .select {
    background-position: 0 -148px;
  }
  .bottom-bar-service {
    position: absolute;
    left: 22px;
    top: 8px;
  }
  .bottom-bar-shop {
    position: absolute;
    left: 70px;
    top: 6px;
  }
  .bottom-bar-select {
    position: absolute;
    left: 116px;
    top: 5px;
  }
  .bottom-bar-item div {
    float: right;
    height: 49px;
    width: 84px;
    background-color: #000000;
    text-align: center;
    line-height: 49px;
  }
  .bottom-bar-item :last-child {
    background-color: yellow;
  }
  .bottom-bar-item :first-child {
    background-color: hotpink;
  }
</style>
