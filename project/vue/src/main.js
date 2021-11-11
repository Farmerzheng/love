import Vue from 'vue'
import {
  Row,
  Button,
  Col,
  Input,
  MessageBox,
  Carousel,
  CarouselItem
} from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import less from 'less'
import cssToRem from './util/rem'
import {
  VueTypedJs
} from 'vue-typed-js'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import $ from 'jquery'

Vue.prototype.$video = Video
Vue.prototype.$ = $

cssToRem()

Vue.use(VueTypedJs)

// 挂载element-ui 组件
Vue.component(Button.name, Button)
Vue.component(Col.name, Col)
Vue.component(Row.name, Row)
Vue.component(Input.name, Input)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.prototype.$alert = MessageBox

Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
