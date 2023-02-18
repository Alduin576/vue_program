<template>
  <div class="newStudentReport">
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
        <el-form ref="form" :model="reportForm" label-width="80px">
          <el-form-item label="学生姓名">
            <el-input v-model="reportForm.studentName"></el-input>
          </el-form-item>
          <el-form-item label="所属学院">
            <el-select v-model="reportForm.academy" placeholder="请选择活动区域">
              <el-option v-for="(item,index) in academyData" :key="index" :label="item.name" :value="item.academyCode"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在班级">
            <el-input v-model="reportForm.clazz"></el-input>
          </el-form-item>
          <el-form-item label="籍贯">
            <el-input v-model="reportForm.native"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="reportForm.tel"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button @click="submitForm">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'newStudentReport',
  data () {
    return {
      // 所有学院选项
      academyData: [
        { name: '信息工程学院', academyCode: '01' },
        { name: '外语学院', academyCode: '02' },
        { name: '电子工程学院', academyCode: '03' },
        { name: '汉语言学院', academyCode: '04' },
      ],
      navName: '新生报道',
      // returnTime: '',//预计返校时间
      reportForm: {
        studentName: '',//报道学生姓名
        academy: '',//所属学院
        clazz: '',//所在班级
        native: '',//籍贯
        tel: '',//联系电话
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
@import './newStudentReport.scss';
</style>