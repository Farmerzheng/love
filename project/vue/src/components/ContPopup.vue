<template>
  <div class="content">
    <el-row :gutter="20" style="margin-left: 0; margin-right: 0">
      <el-col :span="16" :offset="4">
        <p class="tip">猜猜我想对你说什么？</p>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-left: 0; margin-right: 0">
      <el-col :span="4" :offset="9">
        <el-button
          style="background-color: #894159; color: #fff; margin-top: 20px"
          @click="next"
          >下一步</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      popArr: [
        '一年有365天',
        '一天有24小时',
        '一小时有60分',
        '一分有60秒',
        '每一秒都在想你'
      ],
      popIndex: 0
    }
  },
  methods: {
    next () {
    //   console.log(this.popIndex, this.popArr.length - 1)
      //   if (this.popIndex === this.popArr.length) {
      //     this.$router.push('/second')
      //   } else {
      var that = this
      function pop () {
        that.$alert(that.popArr[that.popIndex], '温馨提示', {
          confirmButtonText: '确定'
        }).then(() => {
          that.popIndex++

          if (that.popIndex === that.popArr.length) {
            that.$router.push('/second')
          } else {
            pop()
          }
        }).catch(() => {
          console.log(2)
        })
      }

      pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.content {
  width: 100vw;
  position: relative;
  // overflow: hidden;
  .tip {
    width: 70vw;
    margin: 15px auto;
    font-size: 0.7rem;
  }
}
input {
  outline: none;
}
// 修改elementui样式
.el-message-box {
  width: 12rem;
}
</style>
