<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name:'RecommendView',
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    margin-top: 6px;
    border-bottom: 8px solid #eee;
    font-size: 12px;
  }
  .recommend-item {
    flex: 1;
    padding-bottom: 28px;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 3px;
  }
</style>
