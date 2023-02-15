<template>
  <!-- 主要布局页面 -->
  <div class="hotelLayout">
    <div class="hotelLayoutHeader">
      <div class="header-logo">
        <h1>{{ zh_title }}&nbsp;&nbsp;{{ en_title }}</h1>
      </div>
      <div class="header-right">
        <!-- 大屏↓ -->
        <div>数据中心</div>
        <div>服务中心</div>
        <div>个人中心</div>
        <div>Chinese</div>
        <div>退出</div>
      </div>
    </div>
    <!-- 默认为数据中心，即为大屏 -->
    <el-row class="hotelLayoutContent">
      <router-view />
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      zh_title: '卡纳旅馆',
      en_title: 'KN Hotel'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>