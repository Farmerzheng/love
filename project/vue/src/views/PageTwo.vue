<template>
  <div class="page-two">
    <bg-second></bg-second>
    <text-float></text-float>
    <!--  <cont></cont> -->
  </div>
</template>

<script>
import BgSecond from '../components/BgSecond'
import TextFloat from '../components/TextFloat'
export default {
  name: '',
  components: {
    TextFloat,
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
