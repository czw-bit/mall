import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from './components/common/toast/toast.js'

//添加时间总线
Vue.prototype.$bus = new Vue()

//安装自定义的toast插件
Vue.use(toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
