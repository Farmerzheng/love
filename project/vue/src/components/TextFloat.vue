<template>
  <div class="text-float">
    <div class="wordbox-para">
      <div :key="index" v-for="(itemArr, index) in wordArr">
        <span
          :style="{ 'animation-delay': item.time + 's' }"
          :key="index"
          v-for="(item, index) in itemArr"
          >{{ item.word }}</span
        >
      </div>
      <!-- <span style="animation-delay: 0.1s">有</span>
      <span style="animation-delay: 0.2s">时</span>
      <span style="animation-delay: 0.3s">候</span>
      <span style="animation-delay: 0.4s">就</span>
      <span style="animation-delay: 0.5s">是</span>
      <span style="animation-delay: 0.6s">莫</span>
      <span style="animation-delay: 0.7s">名</span>
      <span style="animation-delay: 0.8s">的</span>
      <span style="animation-delay: 0.9s">心</span>
      <span style="animation-delay: 1s">情</span>
      <span style="animation-delay: 1.1s">低</span>
      <span style="animation-delay: 1.2s">落</span>
      <span style="animation-delay: 1.3s">，</span>
      <span style="animation-delay: 1.4s">想</span>
      <span style="animation-delay: 1.5s">哭</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      wordList: [
        '跟你说了多少次',
        '晚上要当心',
        '不要出门',
        '这不',
        '昨天晚上又到我梦里来了',
        '害得我醒不来',
        '',
        '白天有你就有梦',
        '夜晚有梦就有你',
        '你要好好照顾自己',
        '不要感冒流鼻涕',
        '要是偶尔打喷嚏',
        '那就代表我想你！'
      ],
      time: 0,
      speed: 0.15
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
  position: relative;
  width: 12rem;
  margin: auto;
  color: #999;
  padding-top: 2rem;
}
.wordbox-para {
  line-height: 2;
  color: #000;
  font-size: 0.8rem;
  font-family: "楷体";
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
