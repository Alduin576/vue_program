<template>
  <div class="notice">
    <div class="pageTitle">
      <div>{{navName}}</div>
    </div>
    <div class="breadNav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ navName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content">
      <div class="noticeHead">
        <span v-for="(item,index) in noticeHead" :key="index">
          {{ item }}
        </span>
      </div>
      <noticeContent :noticeData="noticeData"></noticeContent>
    </div>
  </div>
</template>
<script>
import noticeContent from '@/component/noticeContent.vue';
export default {
  name: 'notice',
  data () {
    return {
      noticeData: {
        dataList: [
          { title: '关于建设最美图书馆通知', date: new Date().getMonth() + '/' + new Date().getDay(), excerpt: '建设图书馆', publisher: 'wq' },
          { title: '关于建设最美图书馆通知', date: new Date().getMonth() + '/' + new Date().getDay(), excerpt: '建设图书馆', publisher: 'wq' },
        ]
      },
      navName: '通知公告',
      noticeHead: ['标题', '时间', '大概内容', '发布者']
    }
  },
  methods: {
  },
  components: {
    noticeContent
  }
}
</script>
<style lang="scss" scoped>
@import './notice.scss';
</style>