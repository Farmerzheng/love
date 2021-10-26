<template>
  <div class="page-two">
    <bg-second></bg-second>
    <text-scroll-up></text-scroll-up>
  </div>
</template>

<script>
import BgSecond from '../components/BgSecond'
import TextScrollUp from '../components/TextScrollUp'
export default {
  name: '',
  components: {
    TextScrollUp,
    BgSecond
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-two {
  width: 100%;
  height: 100%;
}
</style>
