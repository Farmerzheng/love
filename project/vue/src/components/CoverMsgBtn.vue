<template>
  <div>
    <!-- 信封 -->
    <img
      @click="toNext"
      src="../assets/img/open_letter.jpg"
      alt=""
      class="message"
      v-if="bgShow"
    />

    <!-- 信封背景 -->
    <canvas
      id="canvas_is"
      style="background-color: #f8f8f8; position: fixed; z-index: 10000"
      v-if="bgShow"
    >
    </canvas>
    <bg></bg>
  </div>
</template>

<script>
import Bg from '../components/Bg'
import bg from '../util/bg'
export default {
  name: '',
  data () {
    return {
      playFlag: false,
      bgShow: true
    }
  },
  components: {
    Bg
  },
  methods: {
    toNext () {
      // 播放视频
      this.playFlag = true
      // 隐藏背景
      this.bgShow = false
    }
  },
  mounted () {
    bg()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.message {
  width: 40%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 100000;
  box-shadow: 4px 4px 24px 0px #999;
  animation-name: heartbeat;
  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(0, 0, 0, 1.74);
  animation-delay: 500ms;
  animation-iteration-count: infinite;
  animation-play-state: running;
}
@keyframes heartbeat {
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.95);
  }
  50% {
    transform: scale(1);
  }
}
</style>
