<template>
  <div class="carousel">
    <el-carousel indicator-position="none" interval="2000" :loop="false">
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <img :src="item.url" alt="" />
        <p class="des">{{ item.text }}</p>
      </el-carousel-item>
    </el-carousel>
    <div class="bg" v-show="time >= 12000">
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍
        单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子
        没有对象 光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪
        单身一辈子 没有对象 光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子
        没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗
        单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍
        单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪
        光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪
        单身一辈子 没有对象 光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子
        没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍
        单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪
        光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子
        没有对象 光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗
        单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍 单身狗
        单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪 光棍
        单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍
        单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪
        光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪
        单身一辈子 没有对象 光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子
        没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗
        单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍
        单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪
        光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍
        单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪
        光棍 单身狗 单身汪 单身一辈子 没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍 单身狗 单身汪 光棍 单身狗 单身汪
        单身一辈子 没有对象 光棍 单身狗 单身汪 光棍 单身狗 单身汪 单身一辈子
        没有对象
      </marquee>
      <marquee behavior="behavior" width="2000" loop="2"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光棍 单身狗
        单身汪 光棍 单身狗 单身汪 单身一辈子 没有对象 光棍 单身狗 单身汪 光棍
        单身狗 单身汪 单身一辈子 没有对象
      </marquee>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      images: [
        { url: require('../assets/img/icon/9.gif'), text: '光棍节快到了' },
        { url: require('../assets/img/icon/2.gif'), text: '你还是一个光棍吧' },
        { url: require('../assets/img/icon/3.gif'), text: '光棍一天又一天' },
        { url: require('../assets/img/icon/4.gif'), text: '光棍光棍好几年' },
        { url: require('../assets/img/icon/5.gif'), text: '还没有对象么？' },
        {
          url: require('../assets/img/icon/11.gif'),
          text: '还是一个单身狗么？'
        },
        { url: require('../assets/img/icon/111.gif'), text: '' }
      ],
      time: 0
    }
  },
  mounted () {
    var me = this
    setInterval(() => {
      me.time += 2000
    }, 2000)
  },
  components: {}
}
</script>
<style>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background: transparent;
}
.bg marquee {
  width: 100vw;
}
.des {
  position: absolute;
  bottom: 0;
}
.carousel {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
}
.el-carousel {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 300px;
}
/* .el-carousel__item {
  position: relative;
} */
.el-carousel__item img {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.el-carousel__item .des {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 260px auto 0;
}
</style>
