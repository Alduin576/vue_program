<template>
  <div class="homepage">
    <div class="leftSideBar">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu default-active="association" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="association">
          <template slot="title">
            <i class="el-icon-location"></i>
            <!-- 提供管理员使用 -->
            <span slot="title">社团管理</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="allAssociation">社团一览</el-menu-item>
            <el-menu-item index="addAssociation">新增社团</el-menu-item>
            <el-menu-item index="updateAssociation">修改社团</el-menu-item>
            <el-menu-item index="delAssociation">删除社团</el-menu-item>
            <el-menu-item index="queryAssociation">搜索社团</el-menu-item>
          </el-menu-item-group>
          <!-- <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group> -->
          <!-- <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu> -->
        </el-submenu>
        <el-submenu index="activity">
          <template slot="title">
            <i class="el-icon-location"></i>
            <!-- 提供管理员和社团负责人使用 -->
            <span slot="title">活动管理</span>
          </template>
          <el-menu-item-group>
            <!-- <span slot="title">分组一</span> -->
            <el-menu-item index="activityRecord">活动记录</el-menu-item>
            <el-menu-item index="launchActivity">发布活动</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="rightContent">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './homepage.scss';
</style>