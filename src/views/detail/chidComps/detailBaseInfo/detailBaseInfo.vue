<template>
  <div v-if="Object.keys(goods).length !== 0" class="detailNavBar">
    <div class="titile-info"><b>{{goods.title}}</b></div>

    <div class="info-price">
      <span class="newprice">{{goods.newprice}}</span>
      <span class="oldprice">{{goods.oldprice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>

    <div class="columns">
      <span class="columns-item1">{{goods.columns[0]}}</span>
      <span class="columns-item">{{goods.columns[1]}}</span>
      <span class="columns-item3">{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <div class="services">
      <div class="services-item">
      <span class="services-info" v-for="index in goods.services.length-1" :key='index'>
        <img class="services-info-img" :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default{
    name:'detailNavBar',
    props:{
      goods:{
        type:Object,
        default:{}
      }
    }
  }
</script>

<style scoped>
  .detailNavBar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .titile-info {
    text-indent: 1em;
    margin-top: 12px;
  }
  .newprice {
    color: var(--color-high-text);
    font-size: 22px;
  }
  .oldprice {
    color: #b8b8b8;
    text-decoration: line-through;
  }
  .discount {
    background-color: #FF8198;
    border-radius: 20px;
    padding: 4px;
  }
  .columns {
    display: flex;
    color: #b8b8b8;
    margin-top: 10px; 
    border-bottom: 1px solid #ccc;
    padding-bottom: 12px;
  }
  .columns-item {
    flex: 1;
    text-align: center;
  }
  .columns-item1 {
    margin-left: 5px;
  }
  .columns-item3 {
    margin-right: 8px;
  }
  .services {
    display: flex;
    margin-top: 20px;
  }
  .services-item {
    flex: 1;
  }
  .services-info-img {
    width: 15px;
    height: 15px;
    margin: 0 3px;
  }
  .info-price {
    margin-top: 12px;
  }

</style>
