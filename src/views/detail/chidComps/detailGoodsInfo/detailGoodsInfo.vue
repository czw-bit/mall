<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" @load="imgLoad" :src="item" alt="">
    </div>
  </div>
</template>

<script>
  export default{
    name:'detailGoodsInfo',
    props:{
      detailInfo:{
        type:Object
      }
    },
    data(){
      return{
        counter:0,
        imagesLength:0
      }
    },
    methods:{
      imgLoad(){
        //if(++this.counter === this.imagesLength){
          this.$emit('imageLoad')
          //console.log("11111")
        //}
      }
    },
    watch:{
      detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }

  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-key {
    width: 138px;
    height: 45px;
    margin: 30px auto;
    text-align: center;
    border-radius: 15px;
    font-size: 18px;
    padding: 10px;
    background-color: #e7e7e7;

  }
  .info-list img {
    width:100%;
    height:100%;
    width: 375px;
    background-size: cover;
    z-index:-10;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
</style>
