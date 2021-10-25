import Vue from 'vue'
import {
  Row,
  Button,
  Col,
  Input,
  MessageBox,
  Alert
} from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import less from 'less'
import cssToRem from './util/rem'
import {
  VueTypedJs
} from 'vue-typed-js'

cssToRem()

Vue.use(VueTypedJs)

// 挂载element-ui 组件
Vue.component(Button.name, Button)
Vue.component(Col.name, Col)
Vue.component(Row.name, Row)
Vue.component(Input.name, Input)
Vue.component(MessageBox.name, MessageBox)

Vue.prototype.$alert = MessageBox

Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
