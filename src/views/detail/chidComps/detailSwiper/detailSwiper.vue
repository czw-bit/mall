<template>
  <div>
    <Swiper class="swiper-img">
      <SwiperItem v-for="item in topimg">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
  </div>

</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'

  export default{
    name:'detailSwiper',
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      topimg:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped>
  .swiper-img {
    height: 300px;
    overflow: hidden;
  }
</style>
