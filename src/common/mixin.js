import {debounce} from './utils.js';
import {POP, NEW, SELL} from "./const";

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

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
