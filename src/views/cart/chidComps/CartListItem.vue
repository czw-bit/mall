<template>
  <div class="cart-list">
    <check-box class="ss" :is-checked="products.checked" @click.native="isShowChecked"/>
    <div class="cart-list-img">
      <img :src="products.image" alt="">
    </div>
    <div class="cart-font">
      <div class="cart-info">
        <div class="title">{{products.title}}</div>
        <div class="desc">{{products.desc}}</div>
      </div>

      <div class="cart-price">
      <span>￥{{products.price}}</span>
      <i class="cart-count">×{{products.count}}</i>
      </div>

    </div>
  </div>
</template>

<script>
  import checkBox from 'components/content/CheckedBox/CheckedBox.vue'
  export default{
    name:'CartListItem',
    props:{
      products:{
        type:Object,
        default:{}
      }
    },
    components:{
      checkBox
    },
    methods:{
      isShowChecked(){
        this.products.checked = !this.products.checked
      }
    }

  }
</script>

<style>
  .cart-list {
    display: flex;
  }
  .cart-list-img {
    flex: 1;
  }
  .cart-list-img img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
    display: block;
    margin: 10px;
  }
  .cart-font {
    flex: 1;
  }
  .cart-info {
    text-align: center;

  }
  .title {
    width: 255px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
    text-overflow: ellipsis;
    margin: 15px 0;
    letter-spacing: normal;
  }
  .desc {
    width: 255px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 13px;
    text-overflow: ellipsis;
    letter-spacing: normal;
  }
  .cart-price {
    margin-top: 20px;
  }
  .cart-price span{
    color: #FF0000;
  }
  .cart-count {
    float: right;
    margin-right: 18px;
    font-style: normal;
    font-size: 18px;
  }
  .ss {
    position: relative;
    top: 43px;
    left: 4px;
  }
</style>
