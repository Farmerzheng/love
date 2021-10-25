<template>
  <div class="banner-wrap">
    <h3>你猜、你猜、你猜猜猜</h3>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.banner-wrap {
  position: relative;
  width: 14rem;
  margin: auto;
  color: #999;
  padding-top: 20vw;
  h3 {
    color: #333;
    text-align: center;
    margin: 5px;
    font-size: 0.8rem;
  }
  .banner {
    margin-top: 15px;
    height: 45vw;
    width: 100%;
    background-color: red;
    border-radius: 10px;
    background-image: url(../assets/img/banner/1g.gif);
    background-size: contain;
  }
}
</style>
