<template>
  <div class="cartBottom">
    <div class="cartBottom-content">
      <div class="all-check">
        <check-box class="check-icon" :is-checked="isShowChecked" @click.native="CheckedClick"/>
        <div>全选</div>
      </div>

      <div class="result-price">
        合计:{{resultPrice}}
      </div>
      <div @click="shopResult" class="result-count">
        去计算({{resultCount}})
      </div>
    </div>

  </div>
</template>

<script>
  import checkBox from 'components/content/CheckedBox/CheckedBox.vue'
  export default{
    name:'CartBottomBar',
    components:{
      checkBox
    },
    computed:{
      resultPrice(){
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        },0)
      },
      resultCount(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count
        },0)
      },
      isShowChecked(){
        if(this.$store.state.cartList.length === 0) return false
         return !(this.$store.state.cartList.find(item => !item.checked))
      }
    },
    methods:{
      CheckedClick(){
        if(this.isShowChecked){
          return this.$store.state.cartList.forEach(item => item.checked = false)
        }else {
          return this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      shopResult(){
        if(!this.isShowChecked){
          this.$toast.show('请选择商品',2000)
        }
      }
    }
  }
</script>

<style scoped>
  .cartBottom-content {
    display: flex;
    line-height: 40px;
  }
  .cartBottom {
    background-color: #eee;
    height: 40px;
  }
  .check-icon {
    height: 23px;
    width: 23px;
    line-height: 27px;
    position: relative;
    top: 8px;
  }
  .result-price {
    flex: 1;
  }
  .result-count {
    width: 100px;
    background-color: red;
    text-align: center;
    color: #FFFF;
  }
  .all-check {
    display: flex;
    width: 100px;
    margin-left: 10px;
  }
</style>
