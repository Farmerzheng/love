<template>
  <div class="content">
    <vue-typed-js
      :strings="userInput"
      :typeSpeed="100"
      :showCursor="false"
      @preStringTyped="doSmth()"
      :startDelay="2000"
    >
      <p class="typing"></p>
    </vue-typed-js>
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js'
export default {
  name: '',
  data () {
    return {
      userInput: [
        '<p>送你一块生日蛋糕，祝你生日快乐：</p><p>第一层，体贴！</p><p>第二层，关怀！</p><p>第三层，浪漫！</p><p>第四层，温馨！</p><p>中间夹层，甜蜜！</p><p>祝你天天都有一份好心情！</p>'
      ]
    }
  },
  methods: {
    doSmth () {
      console.log('start doing')
    }
  },
  components: {
    VueTypedJs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.content {
  position: absolute;
  top: 42vh;
  z-index: 100;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0.2rem 1.5rem;
  /* letter-spacing: 2px; */
  color: #fff;
  .tip {
    width: 70vw;
    margin: 15px auto;
    font-size: 0.7rem;
  }
}
</style>
