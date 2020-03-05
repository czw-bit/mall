<template>
  <div class="checkedBox" :class="{checked:isChecked}">
    <img src="~assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default{
    name:'checkBox',
    props:{
      isChecked:{
        type:Boolean,
        default:true
      }
    }
  }
</script>

<style scope>
  .checkedBox {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    border: 1px solid #a8a8a8;
  }
  .checked {
    background-color: red;
  }

</style>
