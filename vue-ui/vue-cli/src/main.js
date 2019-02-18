import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import { currency } from './filters'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
  console.log(err, vm, info)
}

// 注册一个全局自定义指令 "v-focus"
// 使用：<input v-focus />
// Vue.directive("focus", {
//   inserted: function(el) { // 当被绑定的元素插入DOM中时
//     el.focus() // 聚焦元素
//   }
// })

// 注册一个全局过滤器
// 使用 <div>{{ msg | capitalize }}</div>
// Vue.filter("capitalize", function(value) {
//   if (!value) {
//     return ""
//   }
//   value = value.toString()
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })

Vue.filter('currency', currency)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
