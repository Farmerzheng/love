<template>
  <div class="bg">
    <cover :opacity='coverOpacity'></cover>
  </div>
</template>

<script>
import Cover from './Cover'
export default {
  name: '',
  data () {
    return {
      coverOpacity: 0.7
    }
  },
  components: {
    Cover
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
  background-image: url(../assets/img/bg/5.gif);
  background-size: cover;
}
</style>
