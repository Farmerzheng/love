<template>
  <div class="bg">
    <video
    id="myVideo"
    class="video-js"
    controls
     autoplay="muted"
    >
     <source src="http://119.3.91.207/video/%E4%B8%87%E5%9C%A3%E8%8A%82.MP4" type="video/mp4">
   </video>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {

    }
  },
  components: {

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
  background-color: #666;
  /* background-image: url(../assets/img/bg/4.gif); */
  background-size: cover;
}
video{
    width:100vw;
    height:100vh
}
</style>
