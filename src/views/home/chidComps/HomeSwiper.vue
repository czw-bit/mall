<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {
    Swiper,
    SwiperItem
  } from 'components/common/swiper';
  export default {
    name: "HomeSwiper",
    data() {
      return {
        imgLoad: false
      }
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      swiperLoad() {
        if (!this.imgLoad) {
          this.$emit('homeLoadImg')
          this.imgLoad = true
        }
      }
    }
  }
</script>
