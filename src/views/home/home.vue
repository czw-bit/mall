<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot='center'>购物街</div>
    </nav-bar>
    <tab-control class="control" v-show="Display" :titles="titles" @tabClick="tabClick" ref="tabControl" />
    <scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad='true' @scroll="backTabControl" @pullingUp="pullingUpClick">
      <home-swiper class="home-swiper" :banners="banner" @homeLoadImg="homeLoadImg" />
      <recommend-view :recommend="recommend" />
      <featurn-view />
      <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl1" />
      <goods-list :goods="showTab" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow" />
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './chidComps/HomeSwiper'
  import RecommendView from './chidComps/RecommendView'
  import featurnView from './chidComps/featurnView.vue'
  import TabControl from '../../components/content/TabControl/TabControl.vue'
  import GoodsList from '../../components/content/GoodsList/GoodsList.vue'
  import scroll from '../../components/common/scroll/scroll.vue'
  import backTop from 'components/content/backTop/backTop'
  import {
    debounce
  } from 'common/utils'

  import {
    getHomeMultidata,
    getHomeGoods
  } from '../../network/home.js'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      featurnView,
      TabControl,
      GoodsList,
      scroll,
      backTop
    },
    data() {
      return {
        recommend: [],
        banner: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        isShow: false,
        Display: false,
        taboffsetTop: 0,
        scrollY:0
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata()

      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      //每次创建一张图片就调用一次better-scorll.refresh刷新方法
      const refreshDeounce = debounce(this.$refs.scroll.scrollRefresh,20)
      this.$bus.$on('imgRefresh', () => {
        refreshDeounce()
        console.log('主页面图片刷新成功！！！')
      })
    },
    activated(){
      this.$refs.scroll.scrollRefresh()
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    },
    deactivated(){
      this.scrollY = this.$refs.scroll.getscrollY()
    },
    methods: {
      //请求数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      },
      /**
       * 事件监听'流行','新款','精选'切换的相关代码
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl1.currentIndex = index
      },

      //回到最顶部
      backClick() {
        this.$refs.scroll.scrollq.scrollTo(0, 0, 300)
      },
      //自动显示和隐藏 backTab
      backTabControl(position) {
        //console.log(position)
        this.isShow = (-position.y) > 2000

        //console.log((-position.y))

        this.Display = (-position.y) > this.taboffsetTop
      },
      //上拉加载更多
      pullingUpClick() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
        console.log('请求成功')
      },
      homeLoadImg() {
        //tab-control固定
        this.taboffsetTop = this.$refs.tabControl1.$el.offsetTop

      }

    },
    computed: {
      showTab() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home {

    height: 100vh;
  }

  .home-nav {
    position: relative;
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
  }

  .swiper-img {
    width: 100%;
    height: 100%;
  }

  .content {
    /* overflow: hidden; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .control {
    position: relative;
    z-index: 9;
  }
</style>
