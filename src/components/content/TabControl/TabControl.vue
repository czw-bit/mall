<template>
  <div class="TabControl">
    <div @click="activeBtn(index)" class="TabControl-item" 
         :class="{active:currentIndex===index}" 
         v-for="(item,index) in titles">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'TabControl',
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex: 0
      }
    },
    methods:{
      activeBtn(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .TabControl {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .TabControl-item {
    flex: 1;

  }
  .active {
    color: red;

  }
  .active span {
    border-bottom: 2px solid red;
    padding-bottom: 5px;
  }

</style>
