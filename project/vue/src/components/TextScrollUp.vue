<template>
  <div class="text-content">
    <div class="scroll">
      <p :key="index" v-for="(item, index) in textArr">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      textArr: [
        '白天，阳光的温柔洒满一地花香',
        '夜晚，爱情的灯光缝补着过去的忧伤',
        '请允许我单纯的渴望',
        '充盈你的心房',
        '兑现那误入梦境的诺言',
        '请允许我用我的心灵',
        '堵住你流泪的眼睛',
        '请允许我用我的真情',
        '填满你苦涩的心田'
      ]
    }
  },
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.text-content {
  position: relative;
  top: 22vh;
  height: 60vh;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0.2rem 1rem;
  background-color: rgba(255, 0, 0, 0.1);
  color: #fff;
  overflow: hidden;
  .scroll {
    height: 60vh;
    -webkit-animation-name: ani-scrollup;
    animation-name: ani-scrollup;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-delay: 0.5s;
    animation-duration: 33s;
  }
}
@keyframes ani-scrollup {
  0% {
    -webkit-transform: translateY(101%);
    transform: translateY(101%);
  }

  100% {
    -webkit-transform: translateY(1%);
    transform: translateY(1%);
  }
}
</style>
