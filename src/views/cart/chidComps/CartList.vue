<template>
  <div class="cart-content">
    <scroll ref="scroll" class="cart-scroll">
      <cart-list-item v-for="item in product" :products="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../../components/common/scroll/scroll.vue'
  import CartListItem from './CartListItem'
  export default {
    name:'CartList',
    components:{
      CartListItem,
      Scroll
    },
    computed:{
      product(){
        return this.$store.state.cartList
      }
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
      console.log('加入成功')
    }
  }
</script>

<style>
  .cart-content {
    height: calc(100% - 49px - 44px - 40px);
  }
  .cart-scroll {
    height: 100%;
    overflow: hidden;
  }

</style>
