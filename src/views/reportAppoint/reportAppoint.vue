<template>
  <div class="reportAppoint">
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
        <el-form ref="form" :model="reportAppointForm" label-width="80px">
          <el-form-item label="学生学号">
            <el-input v-model="reportAppointForm.studentId"></el-input>
          </el-form-item>
          <el-form-item label="学生姓名">
            <el-input v-model="reportAppointForm.studentName"></el-input>
          </el-form-item>
          <el-form-item label="所属学院">
            <el-select v-model="reportAppointForm.academy" placeholder="请选择活动区域">
              <el-option v-for="(item,index) in academyData" :key="index" :label="item.name" :value="item.academyCode"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="submitForm">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reportAppoint',
  data () {
    return {
      // 所有学院选项
      academyData: [
        { name: '信息工程学院', academyCode: '01' },
        { name: '外语学院', academyCode: '02' },
        { name: '电子工程学院', academyCode: '03' },
        { name: '汉语言学院', academyCode: '04' },
      ],
      navName: '报道预约',
      // returnTime: '',//预计返校时间
      reportAppointForm: {
        studentId: '',//学生学号
        studentName: '',//报道学生姓名
        academy: '',//所属学院
      }
    }
  },
  methods: {
    // 处理报道预约提交
    submitForm () {
    }
  }
}
</script>
<style lang="scss" scoped>
@import './reportAppoint.scss';
</style>