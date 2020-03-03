<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default{
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        scrollq:null
      }
    },
    mounted(){
      this.scrollq = new Bscroll(this.$refs.wrapper,{
         click:true,
         probeType:this.probeType,
         pullUpLoad: this.pullUpLoad
      })
      if(this.probeType){
        this.scrollq.on('scroll',(position) => {
          this.$emit('scroll',position)
        })
      }
      if(this.pullUpLoad){
        this.scrollq.on('pullingUp',() => {
          console.log('上拉加载更多')
          this.$emit('pullingUp')
        })
      }
    },
    methods:{
      //回到顶部函数
      scrollTo(x,y,time=300){
        this.scrollq && this.scrollq.scrollTo(x,y,time)
      },
      //刷新函数
      scrollRefresh(){
        this.scrollq && this.scrollq.refresh()
      },
      //上拉加载更多
      finishPullUp(){
        this.scrollq && this.scrollq.finishPullUp()
      },
      getscrollY(){
        return this.scrollq ? this.scrollq.y : 0
      }
    }

  }
</script>

<style scoped>
</style>
