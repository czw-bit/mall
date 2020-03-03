<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="skyblue">
        <img slot="item-icon" src="~assets/images/tabBar/shouye1.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/images/tabBar/shouye.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="skyblue">
        <img slot="item-icon" src="~assets/images/tabBar/leimupinleifenleileibie1.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/images/tabBar/leimupinleifenleileibie.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/images/tabBar/gouwuche1.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/images/tabBar/gouwuche.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/images/tabBar/wode1.svg" alt=""/>
        <img slot="item-icon-active" src="~assets/images/tabBar/wode.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar.vue'
  import TabBarItem from '../../common/tabbar/TabBar-item.vue'
  export default {
    name: 'MainTabBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style >
  @import url("~assets/css/base.css");
</style>
