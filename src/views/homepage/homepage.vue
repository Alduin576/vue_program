<template>
  <div class="campusOptionContent">
    <div class="option-buttonUp">
      <div v-for="(item, index) in upNavData" :key="index" @click="selectUpPath(item, index)">
        <span>{{ item.name }}</span>
      </div>
    </div>
    <div class="option-buttonDown">
      <div v-for="(item, index) in downNavData" :key="index" @click="selectDownPath(item, index)">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      navIndex: '',
      upNavData: [{ name: '学校简介' }, { name: '学校概况' }, { name: '报道预约' }, { name: '新生报道' }, { name: '在线缴费' }],
      downNavData: [{ name: '宿舍预约' }, { name: '在线咨询' }, { name: '通知公告' }]
    }
  },
  methods: {
    // 设置点击路由
    selectUpPath (item, index) {
      this.navIndex = ''
      switch (index) {
        case 0:
          this.$router.push({ path: '/schoolIntro' })
          break
        case 1:
          this.$router.push({ path: '/schoolBasic' })
          break
        case 2:
          this.$router.push({ path: '/reportAppoint' })
          break
        case 3:
          // 新生报道
          this.$router.push({ path: '/newStudentReport' })
          break
        case 4:
          this.$router.push({ path: '/payOnline' })
          break
      }
    },
    // 设置点击路由
    selectDownPath (item, index) {
      this.navIndex = ''
      switch (index) {
        case 0:
          this.$router.push({ path: '/dormReservation' })
          break
        case 1:
          this.$router.push({ path: '/consultOnline' })
          break
        case 2:
          // 通知公告
          this.$router.push({ path: '/notice' })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './homepage.scss';
</style>