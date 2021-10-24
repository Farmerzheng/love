<template>
  <div class="page-one">
    <bg></bg>
    <banner></banner>
    <cont></cont>
  </div>
</template>

<script>
import Bg from '../components/Bg'
import Banner from '../components/Banner'
import Cont from '../components/Cont'
export default {
  name: '',
  components: {
    Bg,
    Banner,
    Cont
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
