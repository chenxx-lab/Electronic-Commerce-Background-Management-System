import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入jQuery
import $ from 'jquery' ;

//引入bootstrap,还要引入jQuery和npm install --save popper.js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//引入ant-design插件
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import DatePicker from 'ant-design-vue/lib/date-picker'
Vue.use(Antd)

//引入element-ui插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
