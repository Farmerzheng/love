<template>
  <div class="page-one">
    <text-scroll-up></text-scroll-up>
    <cover-msg-btn></cover-msg-btn>

  </div>
</template>

<script>
import CoverMsgBtn from '../components/CoverMsgBtn'
import TextScrollUp from '../components/TextScrollUp'
export default {
  name: '',
  components: {
    TextScrollUp,
    CoverMsgBtn
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-one {
  width: 100%;
  height: 100%;
}
</style>
