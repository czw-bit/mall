<template>
  <div>
    <navbar class="navbar-flex">
       <div slot="left" class="back" @click="backClick">
         <img src="~assets/images/common/back.svg" alt=""/>
       </div>
         <div class="titile" slot="center">
           <div class="titileItem"
           @click="activeClick(index)"
           v-for="(item,index) in detailTitle"
           :class="{active:index === currentIndex}"
           :detailTitle="detailTitle">
             {{item}}
           </div>
         </div>
     </navbar>
  </div>

</template>

<script>
  import Navbar from 'components/common/navbar/NavBar'
  export default {
    name:'detailNavBar',
    props:{
      detailTitle:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    components:{
      Navbar
    },
    methods:{
      activeClick(index){
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .navbar-flex {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 11;
  }
  .back img {
    margin-top: 13px;
  }
  .titile {
    display: flex;
  }
  .titileItem {
    flex: 1;
    font-size: 13px;
  }
  .active {
    color: var(--color-high-text)
  }
</style>
