<template>
  <!-- 主要布局页面 -->
  <div class="hotelLayout">
    <div class="hotelLayoutHeader">
      <div class="header-logo">
        <h1>{{ zh_title }}&nbsp;&nbsp;{{ en_title }}</h1>
      </div>
      <div class="header-right">
        <div v-for="(item,index) in menuDate"
             :key="index"
             @click="changeMenu(item,index)">
          {{item.name}}
        </div>
      </div>
    </div>
    <!-- 默认为首页 -->
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
      menuIndex: 0,
      // 右上角菜单项
      menuDate: [
        { name: '首页' }, { name: '数据中心' }, { name: '服务中心' }, { name: '个人中心' }, { name: '登录' }, { name: '注册' }
      ],
      zh_title: '卡纳旅馆',
      en_title: 'KN Hotel'
    }
  },
  methods: {
    changeMenu (item, index) {
      if (index === 0) {
        this.$router.push({ path: '/homepage' })
      }
      if (index === 1) {
        this.$router.push({ path: '/dataCenter' })
      }
      if (index === 2) {
        this.$router.push({ path: '/serviceCenter' })
      }
      if (index === 3) {
        this.$router.push({ path: '/personalCenter' })
      }
      if (index === 4) {
        this.$router.push({ path: '/login' })
      }
      if (index === 5) {
        this.$router.push({ path: '/register' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./layout.scss";
</style>