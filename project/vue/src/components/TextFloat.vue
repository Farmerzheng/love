<template>
  <div class="text-float">
    <div class="wordbox-para gradient-text-two">
      <div :key="index" v-for="(itemArr, index) in wordArr">
        <span
          :style="{ 'animation-delay': item.time + 's' }"
          :key="index"
          v-for="(item, index) in itemArr"
          >{{ item.word }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      wordList: [
        '一夜之间',
        '气温降了十几度',
        '打开窗子',
        '外面皑皑白雪',
        '多添衣服',
        '照顾好自己',
        '又是一年快要过去了',
        '时光不老',
        '我们不散'
      ],
      time: 0,
      speed: 0.4
    }
  },
  computed: {
    wordArr: function () {
      let arr = []

      let index = 0

      for (let i = 0; i < this.wordList.length; i++) {
        let item = this.wordList[i]
        let dataArr = []
        let itemArr = item.split('')
        for (let j = 0; j < itemArr.length; j++) {
          index += this.speed
          let obj = { word: itemArr[j], time: index }
          dataArr.push(obj)
        }
        console.log(itemArr)
        arr.push(dataArr)
      }

      return arr
    }
  },
  mounted () {
    console.log(this.wordArr)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.text-float {
  position: absolute;
  left: 2rem;
  font-size: 0.9rem;
  margin: auto;
  padding-top: 4rem;
  z-index: 2000;
  line-height: 1.4;
  color: #fff;
  font-family: "\6977\4F53";
}

.wordbox-para span {
  display: inline-block;
  -webkit-animation: landIn 0.8s ease-out both;
  animation: landIn 0.8s ease-out both;
}
@keyframes landIn {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-30%);
    transform: translateY(-30%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(1%);
    transform: translateY(1%);
  }
}
</style>
