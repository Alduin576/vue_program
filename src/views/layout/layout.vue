<template>
  <div class="layout">
    <div class="layoutHeader">
      <div class="headerLeft">
        <h1>{{ sysName }}</h1>
      </div>
      <div class="headRight">
        <div v-for="(item,index) in headNav" :key="index" @click="selectMenu(item,index)">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="layoutContent">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  navIndex: 0,
  data () {
    return {
      sysName: '社团活动后台管理系统',
      headNav: [
        '首页', '数据中心', '个人中心', '登录', '注册'
      ]
    }
  },
  methods: {
    selectMenu (item, index) {
      switch (index) {
        case 0:
          this.navIndex = 0
          this.$router.push({ path: 'homepage' })
          break
        case 1:
          this.navIndex = 1
          this.$router.push({ path: '/dataCenter' })
          break
        case 2:
          this.navIndex = 2
          this.$router.push({ path: '/personalCenter' })
          break
        case 3:
          this.$router.push({ path: '/login' })
          break
        case 4:
          this.$router.push({ path: '/register' })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './layout.scss';
</style>