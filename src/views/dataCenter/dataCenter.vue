<template>
  <div class="dataCenter">
    <div class="dataCenterHead">
      <div class="dataCenterHeadLeft">
        <span>星期三</span>
        <span>多云</span>
      </div>
      <div class="dataCenterHeadCenter">
        <span>数据中心</span>
      </div>
      <div class="dataCenterHeadRight">
        <span>存放日期时间</span>
      </div>
    </div>
    <el-row class="dataCenterContent">
      <!-- 数据中心 左侧 -->
      <div class="dataCenterContentLeft">
        <div class="el-col el-col-6">
          <div class="RoomSurvey">
            <div class="echartTitle">房间类型</div>
            <echartPie></echartPie>
          </div>
          <div class="hotelTurnover">
            <div class="echartTitle">酒店营业额</div>
            <echartColumnar></echartColumnar>
          </div>
        </div>
      </div>
      <div class="dataCenterContentCenter">
        <div class="el-col el-col-12">
          <div class="RoomSurvey">
            <div class="echartTitle">房间类型</div>
            <echartPie></echartPie>
          </div>
        </div>
      </div>
      <div class="dataCenterContentRight">
        <div class="el-col el-col-6">
          <div class="RoomSurvey">
            <div class="echartTitle">房间类型</div>
            <echartPie></echartPie>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import echartPie from '@/components/echart/echartPie.vue'
import echartColumnar from '@/components/echart/echatColumnar.vue'
export default {
  name: 'dataCenter',
  components: {
    echartPie, echartColumnar
  }
}
</script>

<style lang="scss" scoped>
@import './dataCenter.scss';
</style>