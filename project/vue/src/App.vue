<template>
  <div id="app">
    <audio-component></audio-component>
    <more></more>
    <router-view />
  </div>
</template>
<script>
import AudioComponent from './components/AudioComponent'
import More from './components/More'
export default {
  data () {
    return {}
  },
  components: {
    AudioComponent,
    More
  }
}
</script>

<style lang='less' scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
