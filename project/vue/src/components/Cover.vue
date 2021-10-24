<template>
  <div class="cover" :style='{  "background-color": formatOpacity}'></div>
</template>

<script>
export default {
  name: '',
  props: ['opacity'],
  computed: {
    formatOpacity () {
      return 'rgba(255, 255, 255,' + this.opacity + ')'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
