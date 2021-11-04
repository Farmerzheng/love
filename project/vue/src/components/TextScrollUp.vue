<template>
  <!-- <div class="text-content"> -->
  <div class="scroll">
    <p :key="index" v-for="(item, index) in textArr">{{ item }}</p>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: '',
  data () {
    return {
      textArr: [
        '任鬼闹',
        '任风嚎',
        '任凭南瓜胡乱闹',
        '神在跳',
        '灯在叫',
        '妖魔鬼怪是真热闹',
        '有你在',
        '我由在',
        '誓把鬼怪都赶跑！',
        '臭宝，有我在……'
      ]
    }
  },
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
// .text-content {
//   position: relative;
//   top: 22vh;
//   height: 60vh;
//   font-size: 0.8rem;
//   line-height: 1.5rem;
//   padding: 0.2rem 1rem;
//   background-color: rgba(255, 0, 0, 0.1);
//   color: #fff;
//   overflow: hidden;
.scroll {
  position: absolute;
  left: 0;
  top: 20vh;
  z-index: 2000;
  height: 80vh;
  color: #ccc;
  -webkit-animation-name: ani-scrollup;
  animation-name: ani-scrollup;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  animation-delay: 0.5s;
  animation-duration: 20s;
  p {
    line-height: 1.75rem;
    font-size: 0.8rem;
    padding: 0 1rem;
  }
}
// }
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
