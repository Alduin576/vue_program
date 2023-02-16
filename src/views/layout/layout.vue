<template>
  <div class="campusLayout">
    <div class="campusLayouttHead">
      <div class="headLeft">
        <span class="title">高校迎新管理系统</span>
      </div>
      <div class="headRight">
        <span>{{ time }}</span>
        <span>登录</span>
        <span>注册</span>
      </div>
    </div>
    <!-- 下方为内容显示区，需要显示 面包屑 -->
    <el-row class="campusLayoutContent">
      <!-- 面包屑 -->
      <!-- <div class="breadNav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div> -->
      <!-- 放置按钮 -->
      <router-view />
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'education-layout',
    data () {
      return {
        time: '',
      }
    },
    mounted () {
      // 设置实时时间
      setInterval(() => {
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        hour = hour < 10 ? `0${hour}` : hour
        minute = minute < 10 ? `0${minute}` : minute
        second = second < 10 ? `0${second}` : second
        this.time = `${hour}:${minute}:${second}`
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>
  @import './layout.scss'
</style>