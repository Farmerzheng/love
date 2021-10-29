<template>
  <div :class="{ content: true, 'content-after': scaleFlag }">
    <!-- <div class="arrow" @click="scaleImg" v-show="show"></div> -->
    <!-- <img
      src="../assets/img/banner/1.jpg"
      alt=""
      class="scale"
      :style="{ width: percent+'%' }"
    /> -->
    <vue-typed-js
      v-if="show"
      :strings="userInput"
      :typeSpeed="100"
      :showCursor="false"
      @onComplete="doSmth()"
    >
      <p class="typing"></p>
    </vue-typed-js>

    <vue-typed-js
      id="textAfter"
      v-if="showAfter"
      :strings="userInputAfter"
      :typeSpeed="100"
      :showCursor="false"
      @onComplete="doSmth()"
    >
      <p class="typing"></p>
    </vue-typed-js>
    <!-- <text-scroll-up v-show='!show'></text-scroll-up> -->
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
// import TextScrollUp from './TextScrollUp.vue'
export default {
  name: '',
  data () {
    return {
      userInput: ['这个字太符合你的气质了'],
      userInputAfter: ['<p>人家有对象</p></p>而你除了帅一无所有</p>'],
      show: true,
      showAfter: false,
      scaleFlag: false
    }
  },
  computed: {},
  components: {
    VueTypedJs
    // TextScrollUp
  },
  methods: {
    scaleImg () {
      this.percent = 100
      this.show = false
    },
    doSmth () {
      var me = this

      setTimeout(function () {
        me.scaleFlag = true
        me.show = false
      }, 2000)
      setTimeout(function () {
        me.showAfter = true
      }, 8000)
    }
  },
  mounted () {}
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
  width: 100vw;
  background-color: #d3aa74;
  background-image: url(../assets/img/banner/1.jpg);
  background-position: center -200vw;
  background-size: 311vw;
  background-repeat: no-repeat;
  transition-duration: 6s;
  // overflow: hidden;
  // .arrow {
  //   position: fixed;
  //   width: 1.5rem;
  //   height: 1.5rem;
  //   right: 1.5rem;
  //   top: 40%;
  //   margin: 0 auto;
  //   border-bottom: 2px solid #fff;
  //   border-right: 2px solid #fff;
  //   z-index: 10000;
  //   opacity: 0.6;
  //   -webkit-animation: arrowFly 2s linear infinite;

  // }

  // img {
  //   // height: 60%;
  //   width: 200%;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   margin: auto;
  //   transition-duration: 6s;
  // }
}
#textAfter {
  color: #fff;
  top: 3.5rem;
  text-align: center;
}
.content-after {
  background-size: 100vw;
  background-position: center 7rem;
}

.typed-element {
  position: relative;
  z-index: 1000;
  top: 40%;
  color: red;
  font-weight: 900;
  letter-spacing: 5px;
  /* font-size: 1rem; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

/*Arrow动画效果*/

// @-webkit-keyframes arrowFly {
//   0% {
//     -webkit-transform: translateX(0px) rotate(-45deg);
//     opacity: 1;
//   }
//   50% {
//     -webkit-transform: translateX(10px) rotate(-45deg);
//     opacity: 0.7;
//   }
//   100% {
//     -webkit-transform: translateX(20px) rotate(-45deg);
//     opacity: 0.4;
//   }
// }
</style>
