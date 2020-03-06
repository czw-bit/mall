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
        return new Promise((resolve, reject) => {
          let oldProduct = null;
          for(let item of content.state.cartList){
            if(item.iid === payload.iid){
              oldProduct = item
            }
          }
          if(oldProduct){
            content.commit('countAdd',oldProduct)
            resolve('商品数量加1')
          }else {
            payload.count = 1
            content.commit('pushAdd',payload)
            resolve('添加了新的商品')
          }
        })
        
      }
  },
  modules: {
  }
})
