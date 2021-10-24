<template>
  <div class="content">
    <p class="tip">填入现在的状态（好累）看看</p>
    <el-row :gutter="20" style="margin-left: 0; margin-right: 0">
      <el-col :span="16" :offset="4">
        <el-input v-model="userInput" placeholder="请输入‘好累’"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-left: 0; margin-right: 0">
      <el-col :span="4" :offset="9">
        <el-button
          style="background-color: #894159; color: #fff; margin-top: 20px"
          @click="next"
          >试一试</el-button
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
      userInput: ''
    }
  },
  methods: {
    next () {
      if (this.userInput === '好累') {
        this.$router.push('/second')
      } else {
        console.log('弹框')
        this.$alert('请输入好累', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
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
    font-size:.7rem
  }
}
input{
  outline: none;
}
// 修改elementui样式
.el-message-box{
  width:12rem
}
</style>
