<template>
  <div class="page-one">
    <cover-msg-btn></cover-msg-btn>
    <text-float></text-float>
  </div>
</template>
<script>
import CoverMsgBtn from '../components/CoverMsgBtn'
import TextFloat from '../components/TextFloat'
export default {
  name: '',
  components: {
    CoverMsgBtn,
    TextFloat
  }
}
</script>
<style scoped>
.page-one {
  width: 100%;
  height: 100%;
}
</style>
