<template>
  <div class="content">
    <vue-typed-js :strings="userInput" :typeSpeed="100" :showCursor="false">
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
      userInput: ['<p>💕️ 我们很好</p><p>💕️ 只是时间不凑巧</p>']
    }
  },
  methods: {},
  components: {
    VueTypedJs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.content {
  position: relative;
  font-size: 0.8rem;
  line-height: 1.5rem;
  padding: 0.2rem 1rem;
  letter-spacing: 2px;
  .tip {
    width: 70vw;
    margin: 15px auto;
    font-size: 0.7rem;
  }
}
</style>
