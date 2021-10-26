<template>
  <div class="content">
    <div class="arrow" @click="scaleImg" v-show='show'></div>
    <img
      src="../assets/img/bg/21.jpg"
      alt=""
      class="scale"
      :style="{ width: percent+'%' }"
    />
    <vue-typed-js v-show='show' :strings="userInput" :typeSpeed="100" :showCursor="false">
      <p class="typing"></p>
    </vue-typed-js>
    <text-scroll-up v-show='!show'></text-scroll-up>
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
import TextScrollUp from './TextScrollUp.vue'
export default {
  name: '',
  data () {
    return {
      userInput: ['<p>💕️猜猜我在守望谁？</p>'],
      percent: 200,
      show: true
    }
  },
  computed: {},
  components: {
    VueTypedJs,
    TextScrollUp
  },
  methods: {
    scaleImg () {
      this.percent = 100
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.2);
  background-image: url(../assets/img/bg/22.jpg);
  background-position: center;
  background-size: cover;
  overflow: hidden;
  .arrow {
    position: fixed;
    width: 1.5rem;
    height: 1.5rem;
    right: 1.5rem;
    top: 40%;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    z-index: 10000;
    opacity: 0.6;
    -webkit-animation: arrowFly 2s linear infinite;

  }

  img {
    // height: 60%;
    width: 200%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition-duration: 6s;
  }
}

.typed-element {
  position: relative;
  z-index: 1000;
  top: 40%;
  color: #fff;
  left: 2rem;
  letter-spacing: 5px;
}

/*Arrow动画效果*/

@-webkit-keyframes arrowFly {
  0% {
    -webkit-transform: translateX(0px) rotate(-45deg);
    opacity: 1;
  }
  50% {
    -webkit-transform: translateX(10px) rotate(-45deg);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translateX(20px) rotate(-45deg);
    opacity: 0.4;
  }
}
</style>
