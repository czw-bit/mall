import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    countAdd(state,payload){
      payload.count += 1
    },
    pushAdd(state,payload){
      payload.count = 1
      payload.checked = false
      state.cartList.push(payload)
    }

  },
  actions: {
      productPrice(content, payload){
        let oldProduct = null;
        for(let item of content.state.cartList){
          if(item.iid === payload.iid){
            oldProduct = item
          }
        }
        if(oldProduct){
          content.commit('countAdd',oldProduct)
        }else {
          payload.count = 1
          content.commit('pushAdd',payload)
        }
      }
  },
  modules: {
  }
})
