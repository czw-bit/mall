<template>
  <div class="cart">
    <navbar class="cart-nav">
      <div slot='center'>购物车({{cartNum}})</div>
    </navbar>
    <cart-list/>
    <cart-bottom-bar/>
    
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar.vue'
  import CartList from './chidComps/CartList.vue'
  import CartBottomBar from './chidComps/CartBottomBar.vue'

  export default {
    name:'Cart',
    components:{
      navbar,
      CartList,
      CartBottomBar
    },
    computed:{
      cartNum(){
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style>
  .cart {
    height: 100vh;
  }
  .cart-nav {
    background-color: var(--color-tint);
    color: #FFFFFF
  }
</style>
