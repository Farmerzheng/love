<template>
  <div class="media">
    <!--音乐按钮-->
    <span
      id="musicBtn"
      :class="{ 'music-btn': true, musicOn: !playFlag }"
      @click="play"
    ></span>
    <audio
      id="audio"
      src="../assets/media/百百.mp3"
      autoplay="autoplay"
      loop="loop"
    ></audio>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
export default {
  name: '',
  data () {
    return {
      playFlag: false
    }
  },
  methods: {
    play () {
      var audio = document.querySelector('#audio')
      if (this.playFlag === true) {
        audio.play()
        this.playFlag = !this.playFlag
      } else {
        audio.pause()
        this.playFlag = !this.playFlag
      }
    }
  },
  mounted () {
    EventBus.$on('playAudio', (msg) => {
      // A发送来的消息
      console.log(msg)
      var audio = document.querySelector('#audio')
      audio.play()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.media {
  position: absolute;
  z-index: 5000;
  right: 1rem;
  top: 1rem;
  width: 1.8rem;
  height: 1.8rem;
}
.music-btn {
  float: left;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.3);
  background-image: url("../assets/img/music-icon-03.png");
  background-size: 100%;
  border: 2px solid #fff;
}

.musicOn {
  -webkit-animation: reverseRotate 2.5s linear infinite;
}
/*旋转动画*/

@-webkit-keyframes reverseRotate {
  0% {
    -webkit-transform: rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateZ(-360deg);
  }
}
</style>
