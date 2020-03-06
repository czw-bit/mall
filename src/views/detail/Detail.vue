<template>
  <div id="detail">
    <detailNavBar class='detailNavBar' :detailTitle = "detailTitle" @titleClick="titleClick"
     ref="titlenavbar"/>
     <div class="scroll-height-father">
       <scroll class="scroll-height" ref='scroll' @scroll="detailScroll" :probe-type='3'>
          <detailSwiper :topimg="topimg"></detailSwiper>
          <detail-base-info :goods="goods"></detail-base-info>
          <detail-goods-info :detail-info="detailInfo" @imageLoad='imgLoad'></detail-goods-info>
          <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
          <detail-comment :comment="commentInfo" ref="comment"/>
          <goods-list :goods="recommend" ref="recommend"/>
       </scroll>
     </div>

    <back-top ref="back" @click.native="backTop" v-show="isShow"></back-top>
    <detail-bottom-bar @shopTocart='shopTocart'/>
  </div>
</template>

<script>

  import detailBaseInfo from './chidComps/detailBaseInfo/detailBaseInfo.vue'
  import scroll from 'components/common/scroll/scroll.vue'
  import detailNavBar from './chidComps/detailNavBar/detailNavbar.vue'
  import DetailParamInfo from './chidComps/detailParamsInfo/detailParamsInfo.vue'
  import detailComment from './chidComps/detailcomment/detailcomment.vue'
  import GoodsList from 'components/content/GoodsList/GoodsList.vue'
  import detailBottomBar from './chidComps/detailBottomBar/detailBottomBar.vue'
  import backTop from 'components/content/backTop/backTop.vue'

  import {getDetail, Goods, GoodsParam, getRecommend} from 'network/detail'
  import detailSwiper from './chidComps/detailSwiper/detailSwiper.vue'
  import detailGoodsInfo from './chidComps/detailGoodsInfo/detailGoodsInfo.vue'
  import {itemListmixin} from 'common/mixin'
  import {debounce} from 'common/utils.js'

  export default{
    name:'Detail',
    mixins:[itemListmixin],
    data(){
      return {
        iid:null,
        detailTitle:['商品','参数','评论','推荐'],
        topimg:[],
        goods:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        themeTotYS:[],
        getthemeTotY:null,
        currentIndex:0,
        isShow:false
      }
    },
    components:{
      detailSwiper,
      detailNavBar,
      detailBaseInfo,
      scroll,
      detailGoodsInfo,
      DetailParamInfo,
      detailComment,
      GoodsList,
      detailBottomBar,
      backTop
    },
    created(){
      //获取点击图片跳到详情页的iid根据iid展示对应的详情页
      this.iid = this.$route.params.iid

      //获取数据
      getDetail(this.iid).then(res => {

        const data = res.result

        //获取轮播图图片
        this.topimg = data.itemInfo.topImages

        //获取轮播图下面的详情页  使用一个Goods类来保存获取到的数据
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //获取最后的图片详情页数据
        this.detailInfo = data.detailInfo

        //参数信息获取
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        //评论信息
        if(data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }

        //完成点击detailNavBar的标题跳转到对应的内容
        this.getthemeTotY = debounce(() => {
          this.themeTotYS = []
          this.themeTotYS.push(0);
          this.themeTotYS.push(this.$refs.params.$el.offsetTop);
          this.themeTotYS.push(this.$refs.comment.$el.offsetTop);
          this.themeTotYS.push(this.$refs.recommend.$el.offsetTop);
        })
      })
      //获取详情页的推荐数据
      getRecommend().then(res => {
        // console.log(res.data.list)
        this.recommend = res.data.list
      })
    },
    mounted() {
      this.$bus.$on('imgRefresh', () => {
        this.$refs.scroll.scrollRefresh()
        console.log('推荐数据刷新成功')
      })
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
      this.$refs.scroll.scrollTo(0, 0, 0)
    },
    methods:{
      backTop(){
        this.$refs.scroll.scrollTo(0,0,200)
      },
      scrollPosition(position){
        console.log(position)
      },
      imgLoad(){
        this.newRefresh()
        //this.$refs.scroll.scrollRefresh()
        console.log('详细页商品信息图片刷新成功！！！！！')

        this.getthemeTotY()

      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0, -this.themeTotYS[index], 200)
      },
      detailScroll(position){
        const positionY = -position.y

        this.isShow = positionY > 2000
        //console.log(positionY)
        let length = this.themeTotYS.length
        for (let i = 0; i < length; i++){
          if( this.currentIndex !== i &&
          (i < length-1 && positionY > this.themeTotYS[i]
          && positionY < this.themeTotYS[i + 1])
          || (i === length - 1 && positionY > this.themeTotYS[i])){
            this.currentIndex = i
            this.$refs.titlenavbar.currentIndex = this.currentIndex
          }
        }
      },
      shopTocart(){
        const product = {}
        product.title = this.goods.title
        product.image = this.topimg[0]
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        this.$store.dispatch('productPrice',product).then(res => {
          this.$toast.show(res,1000)
        })

      }

    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
  }
  .scroll-height-father {
    height: calc(100% - 44px - 49px);
  }
  .scroll-height {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100%;
    overflow: hidden;
  }
  .detailNavBar {
    position: relative;
    top: 0;
    z-index: 999;
  }
</style>
