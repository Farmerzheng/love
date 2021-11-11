<template>
  <div class="bg">
  S
  </div>
</template>

<script>
import S from '../util/S'
export default {
  name: '',
  data () {
    return {
      coverOpacity: 0.1
    }
  },
  components: {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin: 0;
  padding: 0;
  background-color: #333;
  background-image: url(../assets/img/bg/4.jpg);
  background-size: cover;
}
</style>
