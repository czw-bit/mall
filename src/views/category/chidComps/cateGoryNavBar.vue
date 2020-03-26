<template>
  <div class="nav-bar">
    <navbar>
      <div slot="center">商品分类</div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar.vue'
  export default{
    name:'cateGoryNavBar',
    components:{
      navbar
    }
  }
</script>

<style>
  .nav-bar {
    background-color: var(--color-tint);
    color:#fff;
  }
</style>
