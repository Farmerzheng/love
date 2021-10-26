<template>
  <div class="content">
   <img src="../assets/img/bg/21.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      textArr: [
        '我爱你100%（全心付出）',
        '100%对你真心',
        '100%为你改变',
        '100%对你说早安晚安',
        '100%陪你到老'
      ]
    }
  },
  methods: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.content {
  position: relative;
  top: 20vh;
  height: 60vh;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0.2rem 1rem;
  letter-spacing: 2px;
  background-color: rgba(255, 0, 0, 0.1);
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
