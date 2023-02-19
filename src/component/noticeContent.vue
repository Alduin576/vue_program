<template>
  <div>
    <div class="noticeContent" v-for="(item,index) in noticeData.dataList" :key="index">
      <div>{{ item.title }}</div>
      <div>{{ item.date }}</div>
      <!-- 摘要 -->
      <div>{{ item.excerpt }}</div>
      <div>{{ item.publisher }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noticeContent',
  props: {
    noticeData: {
      dataList: Array
    }
  }

}
</script>

<style lang="scss" scoped>
.noticeContent {
  width: 1270px;
  display: flex;
  justify-content: space-between;

  :nth-child(2) {
    position: relative;
    left: -110px;
  }
  :nth-child(3) {
    position: relative;
    left: -60px;
  }
}
</style>