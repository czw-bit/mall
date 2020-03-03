<template>
  <div id="detail">
    <detailNavBar class='detailNavBar' :detailTitle = "detailTitle"/>
    <scroll class="scroll-height" ref='scroll'>
       <detailSwiper :topimg="topimg"></detailSwiper>
       <detail-base-info :goods="goods"></detail-base-info>
       <detail-goods-info :detail-info="detailInfo" @imageLoad='imgLoad'></detail-goods-info>
       <detail-param-info :param-info="paramInfo"></detail-param-info>
       <detail-comment :comment="commentInfo"/>
       <goods-list :goods="recommend"/>
    </scroll>
  </div>
</template>

<script>

  import detailBaseInfo from './chidComps/detailBaseInfo/detailBaseInfo.vue'
  import scroll from 'components/common/scroll/scroll.vue'
  import detailNavBar from './chidComps/detailNavBar/detailNavbar.vue'
  import DetailParamInfo from './chidComps/detailParamsInfo/detailParamsInfo.vue'
  import detailComment from './chidComps/detailcomment/detailcomment.vue'
  import GoodsList from 'components/content/GoodsList/GoodsList.vue'

  import {getDetail, Goods, GoodsParam, getRecommend} from 'network/detail'
  import detailSwiper from './chidComps/detailSwiper/detailSwiper.vue'
  import detailGoodsInfo from './chidComps/detailGoodsInfo/detailGoodsInfo.vue'
  import {itemListmixin} from 'common/mixin'

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
        recommend:[]
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
      GoodsList
    },
    created(){
      //获取点击图片跳到详情页的iid根据iid展示对应的详情页
      this.iid = this.$route.params.iid

      //获取数据
      getDetail(this.iid).then(res => {

        const data = res.result
        console.log(data)

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
      })

      //获取详情页的推荐数据
      getRecommend().then(res => {
        // console.log(res.data.list)
        this.recommend = res.data.list
      })
    },
    activated() {
      this.$refs.scroll.scrollRefresh()
      this.$refs.scroll.scrollTo(0, 0, 0)
    },
    methods:{
      imgLoad(){
        this.newRefresh()
        //this.$refs.scroll.scrollRefresh()
        console.log('详细页图片刷新成功！！！！！')
      }
    }
  }
</script>

<style scoped>
  .scroll-height {
    /* height: calc(100% - 44px); */
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detailNavBar {
    position: relative;
    top: 0;
    z-index: 999;
  }
</style>
