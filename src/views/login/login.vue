<template>
  <div class="login">
    <div class="logoTitle">
      <h1>{{ zh_title }}&nbsp;&nbsp;{{ en_title }}</h1>
    </div>
    <div class="loginContentBox">
      <div class="boxTitle">请登录</div>
      <el-form :model="userForm" status-icon :rules="rules" ref="userForm" label-width="140px" class="demo-userForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="userForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
          <el-button @click="resetForm('userForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="rightcarselImg"></div>
  </div>
</template>

<script>
export default {
  data () {
    // 通过value可以获取到输入的值
    // 检测方法
    var validUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();
    };
    return {
      zh_title: '卡纳旅馆',
      en_title: 'KN Hotel',
      userForm: {
        username: '',
        password: ''
      },
      // 判断规则
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validUsername, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
@import './login.scss';
</style>
