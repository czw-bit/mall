<template>
  <div class="toast-message" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>

  export default{
    name:'toast',
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message, duration){

        this.message = message
        this.isShow = true

        setTimeout(() => {
          this.isShow = false
          this.message = ''

        },duration)
      }
    }
  }
</script>

<style>
  .toast-message {
    padding: 12px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    z-index: 999;
  }
  .toast-message div {
    color: #fff;

  }
</style>
