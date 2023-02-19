<template>
  <div class="dormReservation">
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
      <div class="block">
        <!-- <span class="demonstration">预计到校时间</span> -->
        <!-- 组件提供 Date object类型 -->
        <!-- <el-date-picker v-model="returnTime" type="date" placeholder="选择日期">
        </el-date-picker> -->
        <el-form ref="form" :model="dormForm" label-width="80px">
          <el-form-item label="学生姓名">
            <el-input v-model="dormForm.studentName"></el-input>
          </el-form-item>
          <el-form-item label="所在班级">
            <el-input v-model="dormForm.clazz"></el-input>
          </el-form-item>
          <el-form-item label="寝室号">
            <el-input v-model="dormForm.dormNum"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="submitForm">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notice',
  data () {
    return {
      navName: '宿舍预约',
      dormForm: {
        studentName: '',
        clazz: '',
        dormNum: ''
      }
    }
  },
  methods: {
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
@import './dormReservation.scss';
</style>