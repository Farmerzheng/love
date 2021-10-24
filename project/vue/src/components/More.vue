<template>
  <!-- 更多 -->
  <a class="more" href="https://mp.weixin.qq.com/s/tCcKtcGztWX5g6Say-np2g">
    更多
  </a>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.more {
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  z-index: 10000;
  text-decoration: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  background-color: rgba(255, 0, 0, 0.3);
  color: #fff;
  font-size: 0.6rem;
  line-height: 1.5rem;
  text-align: center;
  border: 2px solid #fff;
}
</style>
