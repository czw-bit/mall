import {debounce} from './utils.js';

export const itemListmixin = {
  data(){
    return{
      itemListmixin:null,
      newRefresh:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.scrollRefresh, 50)
    this.itemListmixin = () => {
      this.newRefresh()
    }
  }
}
