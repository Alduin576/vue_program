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
        <span>{{ time }}</span>
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
          <div class="overallEvaluation">
            <div class="echartTitle">用户总体评价</div>
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
import echartPie from "@/components/echart/echartPie.vue";
import echartColumnar from "@/components/echart/echartColumnar.vue";
export default {
  name: "dataCenter",
  components: {
    echartPie,
    echartColumnar,
  },
  data() {
    return {
      time: "",
    };
  },
  methods: {},
  // 实例挂载就会执行
  mounted() {
    setInterval(() => {
      let date = new Date();
      let hour = date.getHours();
      hour = hour >= 10 ? hour : `0${hour}`;
      let minute = date.getMinutes();
      minute = minute < 10 ? `0${minute}` : minute;
      let second = date.getSeconds();
      second = second < 10 ? `0${second}` : second;
      this.time = `${hour}:${minute}:${second}`;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "./dataCenter.scss";
</style>
