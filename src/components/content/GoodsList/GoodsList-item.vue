<template>
  <div class="goods-item" @click="imgDetailClick">
    <img :src="imgShow" alt="" @load="imgLoad">
    <div class="goods-font">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('imgRefresh')
      },
      imgDetailClick(){
        //this.$router.push('/detail')
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
	computed:{
		imgShow(){
			return this.goodsItem.image || this.goodsItem.show.img
		}
	}
  }
</script>

<style scoped>
  .goods-item {
    width: 48%

  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-font {
    text-align: center;
  }
  .goods-font p {
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .price {
    color: #FF0000;
    margin-right: 20px;
  }
  .goods-font .collect {
    position: relative;
    left: 2px;
    top: 0;
  }
  .goods-font .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 1px;
    width: 14px;
    height: 14px;
    background:url(../../../assets/images/common/collect.svg) 0 0/14px 14px;
  }



</style>
