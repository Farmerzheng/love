<template>
  <div class="page-one">
    <cover-msg-btn></cover-msg-btn>
    <swipe-card></swipe-card>
    <!-- <carousel></carousel> -->
    <!-- <bg-birthday></bg-birthday>
    <cont-typed></cont-typed> -->
  </div>
</template>
<script>
import CoverMsgBtn from '../components/CoverMsgBtn'
import SwipeCard from '../components/SwipeCard'
// import BgBirthday from '../components/BgBirthday.vue'
// import ContTyped from '../components/ContTyped.vue'
// import Carousel from '../components/Carousel'
export default {
  name: '',
  components: {
    CoverMsgBtn,
    SwipeCard
    // BgBirthday,
    // ContTyped
    // Carousel
  }
}
</script>
<style scoped>
.page-one {
  position: fixed;
  left:0;
  top:0;
  bottom:0;
  right:0;
  margin:auto;
  width: 100%;
  height: 100%;
}
</style>
