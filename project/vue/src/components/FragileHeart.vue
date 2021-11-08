<template>
  <canvas></canvas>
</template>

<script>
import fragileHeart from '../util/fragileHeart'
export default {
  name: '',
  data () {
    return {}
  },
  components: {},
  mounted () {
    // 加载 ‘易碎的心’ 动画
    fragileHeart()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
@background #000;
html,
body {
  width: 100%;
  height: 100%;
  -ms-touch-action: none;
  touch-action: none;
  margin: 0;
}

canvas {
  width: 100%;
  height: 100%;
  background: #fff;
  -ms-touch-action: none;
  touch-action: none;
}
</style>
