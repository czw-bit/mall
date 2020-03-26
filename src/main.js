import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from './components/common/toast/toast.js'

//解决移动端点击300ms的延迟
import FastClick from 'fastclick'

//导入图片懒加载插件
import VueLazyLoad from 'vue-lazyload'

//添加时间总线
Vue.prototype.$bus = new Vue()

//安装自定义的toast插件
Vue.use(toast)

//使用懒加载插件
Vue.use(VueLazyLoad)

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
